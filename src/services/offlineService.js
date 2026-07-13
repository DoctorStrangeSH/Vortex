class OfflineService {
    constructor() {
        this.isOnline = navigator.onLine;
        this.queue = JSON.parse(localStorage.getItem('offlineQueue') || '[]');
        this.listeners = [];
    }

    init() {
        window.addEventListener('online', () => this.goOnline());
        window.addEventListener('offline', () => this.goOffline());
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
        this.queue.push({ ...action, timestamp: Date.now() });
        localStorage.setItem('offlineQueue', JSON.stringify(this.queue));
    }

    // Обработать очередь когда онлайн
    async processQueue() {
        if (!this.isOnline || this.queue.length === 0) return;

        const queue = [...this.queue];
        this.queue = [];
        localStorage.setItem('offlineQueue', '[]');

        for (const action of queue) {
            try {
                await this.executeAction(action);
            } catch (e) {
                this.queue.push(action);
            }
        }

        if (this.queue.length > 0) {
            localStorage.setItem('offlineQueue', JSON.stringify(this.queue));
        }
    }

    async executeAction(action) {
        // Перевыполняем действие
        switch (action.type) {
            case 'sendMessage':
                const { chatService } = await import('./chatService.js');
                await chatService.sendMessage(action.chatId, action.text, action.user);
                break;
        }
    }

    onChange(callback) {
        this.listeners.push(callback);
        return () => this.listeners = this.listeners.filter(fn => fn !== callback);
    }
}

export const offlineService = new OfflineService();