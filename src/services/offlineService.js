import { assertQueuedMessageOwner } from './queuedMessageOwner.js';

const QUEUE_KEY = 'offlineQueue';
const QUEUE_ITEM_PREFIX = 'offlineQueue:item:';

export class OfflineService {
    constructor({ storage = globalThis.localStorage, network = globalThis.navigator, eventTarget = globalThis.window, visibilityTarget = globalThis.document, createId = () => globalThis.crypto.randomUUID(), locks = network?.locks } = {}) {
        this.storage = storage;
        this.network = network;
        this.eventTarget = eventTarget;
        this.visibilityTarget = visibilityTarget;
        this.createId = createId;
        this.locks = locks;
        this.usesItemStorage = Boolean(
            storage
            && typeof storage.key === 'function'
            && typeof storage.removeItem === 'function'
            && typeof storage.length === 'number'
        );
        this.isOnline = network?.onLine ?? false;
        this.activeUid = undefined;
        this.listeners = [];
        this.queueListeners = [];
        this.queue = [];
        this.storageRecoveryBlocked = false;
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
        this.eventTarget?.addEventListener('focus', () => this.resumeOnReturn());
        this.visibilityTarget?.addEventListener('visibilitychange', () => {
            if (this.visibilityTarget.visibilityState === 'visible') this.resumeOnReturn();
        });
        this.eventTarget?.addEventListener('storage', event => {
            if (this.usesItemStorage && event.key?.startsWith(QUEUE_ITEM_PREFIX)) {
                const id = event.key.slice(QUEUE_ITEM_PREFIX.length);
                if (event.newValue === null) {
                    this.queue = this.queue.filter(item => item.id !== id);
                } else {
                    try {
                        const item = JSON.parse(event.newValue);
                        this.queue = [...this.queue.filter(entry => entry.id !== id), item]
                            .sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));
                    } catch (error) {
                        console.warn('Не удалось обработать изменение офлайн-очереди', error);
                    }
                }
                this.notifyQueue();
                if (this.isOnline && this.activeUid) this.processQueue();
                return;
            }
            if (event.key !== QUEUE_KEY) return;
            this.refreshQueue();
            if (this.isOnline && this.activeUid) this.processQueue();
        });
        if (this.isOnline && this.activeUid) this.processQueue();
    }

    resumeOnReturn() {
        if (!this.isOnline && this.network?.onLine === true) {
            this.goOnline();
        } else if (this.isOnline && this.activeUid) {
            this.processQueue();
        }
    }

    goOnline() {
        const wasOnline = this.isOnline;
        this.isOnline = true;
        if (!wasOnline) this.listeners.forEach(fn => fn(true));
        if (this.activeUid) this.processQueue();
    }

    goOffline() {
        if (!this.isOnline) return;
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
        if (this.storageRecoveryBlocked) {
            throw new Error('Не удалось сохранить повреждённую офлайн-очередь. Освободите место в браузере и повторите попытку.');
        }

        if (this.usesItemStorage) {
            const queuedAction = { ...action, id: this.createId(), timestamp: Date.now() };
            try {
                // Each message gets its own durable key. Concurrent tabs never
                // overwrite a shared serialized array, even if their localStorage
                // renderer caches briefly observe different snapshots.
                this.persistQueueItem(queuedAction);
                this.queue = [...this.queue.filter(item => item.id !== queuedAction.id), queuedAction]
                    .sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));
                this.notifyQueue();
            } catch (error) {
                throw new Error('Не удалось сохранить сообщение в офлайн-очереди. Освободите место в браузере и повторите отправку.', { cause: error });
            }
        } else {
            await this.withQueueLock(async () => {
                this.refreshQueue();
                const previousQueue = this.queue;
                this.queue = [...previousQueue, { ...action, id: this.createId(), timestamp: Date.now() }];
                try {
                    this.saveQueue();
                } catch (error) {
                    this.queue = previousQueue;
                    this.notifyQueue();
                    throw new Error('Не удалось сохранить сообщение в офлайн-очереди. Освободите место в браузере и повторите отправку.', { cause: error });
                }
            });
        }

        if (this.isOnline && this.activeUid) this.processQueue();
    }

    async withQueueLock(callback) {
        if (this.locks?.request) return this.locks.request('vortex-offline-queue', { mode: 'exclusive' }, callback);
        return callback();
    }

    getStoredQueueItems() {
        const keys = [];
        for (let index = 0; index < this.storage.length; index++) {
            const key = this.storage.key(index);
            if (key?.startsWith(QUEUE_ITEM_PREFIX)) keys.push(key);
        }

        const items = [];
        for (const key of keys) {
            try {
                const item = JSON.parse(this.storage.getItem(key) || 'null');
                if (item && typeof item.id === 'string') items.push(item);
            } catch (error) {
                this.storageRecoveryBlocked = true;
                console.warn('Не удалось прочитать элемент офлайн-очереди', error);
            }
        }
        return items;
    }

    migrateLegacyQueue() {
        const raw = this.storage?.getItem(QUEUE_KEY);
        if (raw === null || raw === undefined) return [];

        let legacyItems;
        try {
            legacyItems = JSON.parse(raw);
            if (!Array.isArray(legacyItems)) throw new Error('Некорректный формат очереди');
        } catch (error) {
            console.warn('Не удалось прочитать очередь сообщений', error);
            try {
                const backupKey = 'offlineQueue.corruptBackup';
                if (!this.storage.getItem(backupKey)) this.storage.setItem(backupKey, raw);
                this.storage.removeItem(QUEUE_KEY);
                return [];
            } catch (backupError) {
                this.storageRecoveryBlocked = true;
                console.warn('Не удалось сохранить резервную копию повреждённой очереди', backupError);
                return [];
            }
        }

        try {
            for (const item of legacyItems) {
                if (!item || typeof item !== 'object') continue;
                const id = item.id || this.createId();
                const migrated = { ...item, id, timestamp: item.timestamp || Date.now() };
                const key = `${QUEUE_ITEM_PREFIX}${id}`;
                if (!this.storage.getItem(key)) this.storage.setItem(key, JSON.stringify(migrated));
            }
            this.storage.removeItem(QUEUE_KEY);
            return legacyItems;
        } catch (error) {
            this.storageRecoveryBlocked = true;
            console.warn('Не удалось перенести старую офлайн-очередь', error);
            return legacyItems;
        }
    }

    refreshQueue() {
        if (this.usesItemStorage) {
            const legacyItems = this.migrateLegacyQueue();
            const storedItems = this.getStoredQueueItems();
            const merged = new Map();
            for (const item of [...legacyItems, ...storedItems]) {
                if (item?.id) merged.set(item.id, item);
            }
            const nextQueue = [...merged.values()].sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));
            const changed = JSON.stringify(nextQueue) !== JSON.stringify(this.queue);
            this.queue = nextQueue;
            if (changed) this.notifyQueue();
            return;
        }

        try {
            const stored = JSON.parse(this.storage?.getItem(QUEUE_KEY) || '[]');
            if (Array.isArray(stored)) {
                const changed = JSON.stringify(stored) !== JSON.stringify(this.queue);
                this.queue = stored;
                if (changed) this.notifyQueue();
            }
        } catch (error) {
            console.warn('Не удалось прочитать очередь сообщений', error);
            try {
                const raw = this.storage?.getItem(QUEUE_KEY);
                if (raw !== null && raw !== undefined) {
                    const backupKey = 'offlineQueue.corruptBackup';
                    if (!this.storage.getItem(backupKey)) this.storage.setItem(backupKey, raw);
                    this.storage.setItem(QUEUE_KEY, '[]');
                    this.queue = [];
                    this.storageRecoveryBlocked = false;
                }
            } catch (backupError) {
                this.storageRecoveryBlocked = true;
                console.warn('Не удалось сохранить резервную копию повреждённой очереди', backupError);
            }
        }
    }

    persistQueueItem(action) {
        if (!this.storage?.setItem) throw new Error('Локальное хранилище недоступно');
        this.storage.setItem(`${QUEUE_ITEM_PREFIX}${action.id}`, JSON.stringify(action));
    }

    removeQueueItem(id) {
        if (this.usesItemStorage) {
            this.storage.removeItem(`${QUEUE_ITEM_PREFIX}${id}`);
            this.queue = this.queue.filter(item => item.id !== id);
            this.notifyQueue();
            return;
        }
        this.queue = this.queue.filter(item => item.id !== id);
        this.saveQueue();
    }

    saveQueue() {
        if (this.usesItemStorage) {
            for (const action of this.queue) this.persistQueueItem(action);
            this.notifyQueue();
            return;
        }
        if (!this.storage?.setItem) throw new Error('Локальное хранилище недоступно');
        this.storage.setItem(QUEUE_KEY, JSON.stringify(this.queue));
        this.notifyQueue();
    }

    async processQueue() {
        if (this.processingPromise) {
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
                    if (this.usesItemStorage) {
                        this.persistQueueItem(action);
                        this.notifyQueue();
                    } else {
                        this.notifyQueue();
                    }
                    await this.executeAction(action);
                    if (this.usesItemStorage) {
                        this.removeQueueItem(action.id);
                    } else {
                        this.removeQueueItem(action.id);
                    }
                } catch (error) {
                    action.status = 'failed';
                    try {
                        if (this.usesItemStorage) {
                            this.persistQueueItem(action);
                            this.notifyQueue();
                        } else {
                            this.saveQueue();
                        }
                    } catch (storageError) {
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
