export class OfflineService {
    constructor({ storage = globalThis.localStorage, network = globalThis.navigator, eventTarget = globalThis.window, createId = () => globalThis.crypto.randomUUID() } = {}) {
        this.storage = storage;
        this.eventTarget = eventTarget;
        this.createId = createId;
        this.isOnline = network?.onLine ?? false;
        this.queue = JSON.parse(this.storage?.getItem('offlineQueue') || '[]');
        this.listeners = [];
        this.processingPromise = null;
        this.initialized = false;
    }

    init() {
        if (this.initialized) return;
        this.initialized = true;
        this.eventTarget?.addEventListener('online', () => this.goOnline());
        this.eventTarget?.addEventListener('offline', () => this.goOffline());
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

    // Добавить в очередь на отправку
    async addToQueue(action) {
        this.queue.push({ ...action, id: this.createId(), timestamp: Date.now() });
        this.storage?.setItem('offlineQueue', JSON.stringify(this.queue));
    }

    // Обработать очередь когда онлайн
    async processQueue() {
        if (this.processingPromise) return this.processingPromise;
        if (!this.isOnline || this.queue.length === 0) return;
        this.processingPromise = (async () => {
            for (const action of [...this.queue]) {
                if (!this.isOnline) break;
                try {
                    await this.executeAction(action);
                    // Remove only after the server confirms the write. A crash or
                    // disconnect keeps the action available for the next retry.
                    this.queue = this.queue.filter(item => item !== action);
                    this.storage?.setItem('offlineQueue', JSON.stringify(this.queue));
                } catch (error) {
                    console.warn('Сообщение осталось в очереди отправки', error);
                }
            }
        })().finally(() => { this.processingPromise = null; });
        return this.processingPromise;
    }

    async executeAction(action) {
        // Перевыполняем действие
        switch (action.type) {
            case 'sendMessage':
                const { chatService } = await import('./chatService.js');
                await chatService.sendMessage(action.chatId, action.text, action.user, null, action.id);
                break;
        }
    }

    onChange(callback) {
        this.listeners.push(callback);
        return () => this.listeners = this.listeners.filter(fn => fn !== callback);
    }
}

export const offlineService = new OfflineService();
