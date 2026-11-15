import { assertQueuedMessageOwner } from './queuedMessageOwner.js';

export class OfflineService {
    constructor({ storage = globalThis.localStorage, network = globalThis.navigator, eventTarget = globalThis.window, createId = () => globalThis.crypto.randomUUID(), locks = network?.locks } = {}) {
        this.storage = storage;
        this.eventTarget = eventTarget;
        this.createId = createId;
        this.locks = locks;
        this.isOnline = network?.onLine ?? false;
        this.activeUid = undefined;
        this.listeners = [];
        this.queueListeners = [];
        this.queue = [];
        this.refreshQueue();
        this.processingPromise = null;
        this.initialized = false;
    }

    init() {
        if (this.initialized) return;
        this.initialized = true;
        this.eventTarget?.addEventListener('online', () => this.goOnline());
        this.eventTarget?.addEventListener('offline', () => this.goOffline());
        this.eventTarget?.addEventListener('storage', event => {
            if (event.key !== 'offlineQueue') return;
            this.refreshQueue();
        });
        if (this.isOnline) this.processQueue();
    }

    goOnline() {
        this.isOnline = true;
        this.listeners.forEach(fn => fn(true));
        
        // Отправляем накопившиеся сообщения
        this.processQueue();
    }

    goOffline() {
        this.isOnline = false;
        this.listeners.forEach(fn => fn(false));
    }

    setActiveUser(uid) {
        this.activeUid = uid || null;
        if (this.isOnline && this.activeUid) this.processQueue();
    }

    // Добавить в очередь на отправку
    async addToQueue(action) {
        await this.withQueueLock(async () => {
            this.refreshQueue();
            this.queue.push({ ...action, id: this.createId(), timestamp: Date.now() });
            this.saveQueue();
        });
    }

    async withQueueLock(callback) {
        // Web Locks serialize queue mutations across tabs of the same origin.
        // Older browsers retain the single-tab fallback.
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
        this.storage?.setItem('offlineQueue', JSON.stringify(this.queue));
        this.notifyQueue();
    }

    // Обработать очередь когда онлайн
    async processQueue() {
        if (this.processingPromise) return this.processingPromise;
        if (!this.isOnline) return;
        this.processingPromise = this.withQueueLock(async () => {
            this.refreshQueue();
            for (const action of [...this.queue]) {
                if (!this.isOnline) break;
                // Keep another account's pending work untouched in this browser profile.
                if (this.activeUid !== undefined && action.user?.uid !== this.activeUid) continue;
                try {
                    action.status = 'sending';
                    this.notifyQueue();
                    await this.executeAction(action);
                    // Remove only after the server confirms the write. A crash or
                    // disconnect keeps the action available for the next retry.
                    this.queue = this.queue.filter(item => item !== action);
                    this.saveQueue();
                } catch (error) {
                    action.status = 'failed';
                    this.saveQueue();
                    console.warn('Сообщение осталось в очереди отправки', error);
                    // Later messages must not overtake the failed one after a reconnect.
                    break;
                }
            }
        }).finally(() => { this.processingPromise = null; });
        return this.processingPromise;
    }

    async executeAction(action) {
        // Перевыполняем действие
        switch (action.type) {
            case 'sendMessage':
                const { auth } = await import('./firebase.js');
                assertQueuedMessageOwner(action, auth.currentUser?.uid);
                const { chatService } = await import('./chatService.js');
                await chatService.sendMessage(action.chatId, action.text, action.user, null, action.id);
                break;
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
