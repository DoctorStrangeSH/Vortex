import { assertQueuedMessageOwner } from './queuedMessageOwner.js';

export class OfflineService {
    constructor({ storage = globalThis.localStorage, network = globalThis.navigator, eventTarget = globalThis.window, visibilityTarget = globalThis.document, createId = () => globalThis.crypto.randomUUID(), locks = network?.locks } = {}) {
        this.storage = storage;
        this.network = network;
        this.eventTarget = eventTarget;
        this.visibilityTarget = visibilityTarget;
        this.createId = createId;
        this.locks = locks;
        this.isOnline = network?.onLine ?? false;
        this.activeUid = undefined;
        this.listeners = [];
        this.queueListeners = [];
        this.queue = [];
        this.refreshQueue();
        this.processingPromise = null;
        this.processRequested = false;
        this.initialized = false;
    }

    init() {
        if (this.initialized) return;
        this.initialized = true;
        this.eventTarget?.addEventListener('online', () => this.goOnline());
        this.eventTarget?.addEventListener('offline', () => this.goOffline());
        // A transient Firestore failure may clear without a browser 'online'
        // transition. Retry when the user returns to this tab.
        this.eventTarget?.addEventListener('focus', () => {
            this.resumeOnReturn();
        });
        // Returning from a background tab does not always dispatch window focus
        // (notably in mobile browsers). Resume pending writes when visible again.
        this.visibilityTarget?.addEventListener('visibilitychange', () => {
            if (this.visibilityTarget.visibilityState === 'visible') this.resumeOnReturn();
        });
        this.eventTarget?.addEventListener('storage', event => {
            if (event.key !== 'offlineQueue') return;
            this.refreshQueue();
            // Another tab may have enqueued work for this signed-in user.
            if (this.isOnline && this.activeUid) this.processQueue();
        });
        if (this.isOnline && this.activeUid) this.processQueue();
    }

    resumeOnReturn() {
        // Mobile browsers may miss the online event while suspended. The fresh
        // navigator hint can restore delivery, but it is not a server health
        // check: an offline hint must not cancel an already working connection.
        if (!this.isOnline && this.network?.onLine === true) {
            this.goOnline();
        } else if (this.isOnline && this.activeUid) {
            this.processQueue();
        }
    }

    goOnline() {
        this.isOnline = true;
        this.listeners.forEach(fn => fn(true));
        // Wait for an authenticated account before attempting queued writes.
        if (this.activeUid) this.processQueue();
    }

    goOffline() {
        this.isOnline = false;
        this.listeners.forEach(fn => fn(false));
    }

    setActiveUser(uid) {
        const nextUid = uid || null;
        if (this.activeUid === nextUid) return;
        this.activeUid = nextUid;
        if (this.isOnline && this.activeUid) this.processQueue();
    }

    async addToQueue(action) {
        await this.withQueueLock(async () => {
            this.refreshQueue();
            const previousQueue = this.queue;
            this.queue = [...previousQueue, { ...action, id: this.createId(), timestamp: Date.now() }];
            try {
                // A queued message must be durable before the composer clears it.
                this.saveQueue();
            } catch (error) {
                this.queue = previousQueue;
                this.notifyQueue();
                throw new Error('Не удалось сохранить сообщение в офлайн-очереди. Освободите место в браузере и повторите отправку.', { cause: error });
            }
        });
        if (this.isOnline && this.activeUid) this.processQueue();
    }

    async withQueueLock(callback) {
        // Web Locks serialize queue mutations across tabs of the same origin.
        // Browsers without Web Locks retain only in-instance serialization.
        if (this.locks?.request) return this.locks.request('vortex-offline-queue', { mode: 'exclusive' }, callback);
        return callback();
    }

    refreshQueue() {
        try {
            const stored = JSON.parse(this.storage?.getItem('offlineQueue') || '[]');
            if (Array.isArray(stored)) {
                const changed = JSON.stringify(stored) !== JSON.stringify(this.queue);
                this.queue = stored;
                if (changed) this.notifyQueue();
            }
        } catch (error) {
            console.warn('Не удалось прочитать очередь сообщений', error);
        }
    }

    saveQueue() {
        if (!this.storage?.setItem) throw new Error('Локальное хранилище недоступно');
        this.storage.setItem('offlineQueue', JSON.stringify(this.queue));
        this.notifyQueue();
    }

    async processQueue() {
        if (this.processingPromise) {
            // Remember triggers arriving during a flush (e.g. account switch or
            // another tab update) so they are not lost when this pass finishes.
            this.processRequested = true;
            return this.processingPromise;
        }
        if (!this.isOnline) return;

        const run = async () => {
            this.refreshQueue();
            for (const action of [...this.queue]) {
                if (!this.isOnline) break;
                if (this.activeUid !== undefined && action.user?.uid !== this.activeUid) continue;
                try {
                    action.status = 'sending';
                    this.notifyQueue();
                    await this.executeAction(action);
                    const previousQueue = this.queue;
                    this.queue = previousQueue.filter(item => item.id !== action.id);
                    try {
                        this.saveQueue();
                    } catch (error) {
                        // A successful remote write is not enough to discard the
                        // durable local entry if its removal could not be saved.
                        // Retrying with the same message ID is idempotent.
                        this.queue = previousQueue;
                        throw error;
                    }
                } catch (error) {
                    action.status = 'failed';
                    try {
                        this.saveQueue();
                    } catch (storageError) {
                        // Preserve the in-memory entry even if localStorage is full.
                        this.notifyQueue();
                        console.warn('Не удалось обновить офлайн-очередь', storageError);
                    }
                    console.warn('Сообщение осталось в очереди отправки', error);
                    break;
                }
            }
        };

        this.processingPromise = this.withQueueLock(run).finally(async () => {
            this.processingPromise = null;
            if (this.processRequested) {
                this.processRequested = false;
                if (this.isOnline && this.activeUid) await this.processQueue();
            }
        });
        return this.processingPromise;
    }

    async executeAction(action) {
        switch (action.type) {
            case 'sendMessage': {
                const { auth } = await import('./firebase.js');
                assertQueuedMessageOwner(action, auth.currentUser?.uid);
                const { chatService } = await import('./chatService.js');
                await chatService.sendMessage(action.chatId, action.text, action.user, null, action.id);
                break;
            }
            default:
                throw new Error(`Неизвестное действие в очереди: ${action.type}`);
        }
    }

    onChange(callback) {
        this.listeners.push(callback);
        return () => this.listeners = this.listeners.filter(fn => fn !== callback);
    }

    getQueue() {
        return this.queue.map(action => ({ ...action }));
    }

    notifyQueue() {
        const snapshot = this.getQueue();
        this.queueListeners.forEach(callback => callback(snapshot));
    }

    onQueueChange(callback) {
        this.queueListeners.push(callback);
        callback(this.getQueue());
        return () => { this.queueListeners = this.queueListeners.filter(fn => fn !== callback); };
    }
}

export const offlineService = new OfflineService();
