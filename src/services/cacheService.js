class CacheService {
    constructor() {
        this.store = new Map();
        this.maxAge = 5 * 60 * 1000; // 5 минут
        this.maxSize = 500;
    }

    // Кэшировать запрос
    set(key, data, ttl = this.maxAge) {
        if (this.store.size >= this.maxSize) {
            // Удаляем самое старое
            const oldest = [...this.store.entries()]
                .sort((a, b) => a[1].timestamp - b[1].timestamp)[0];
            if (oldest) this.store.delete(oldest[0]);
        }

        this.store.set(key, {
            data,
            timestamp: Date.now(),
            ttl
        });
    }

    // Получить из кэша
    get(key) {
        const item = this.store.get(key);
        if (!item) return null;

        if (Date.now() - item.timestamp > item.ttl) {
            this.store.delete(key);
            return null;
        }

        return item.data;
    }

    // Кэшировать чаты
    cacheChats(userId, chats) {
        this.set(`chats_${userId}`, chats, 30000); // 30 секунд
    }

    getCachedChats(userId) {
        return this.get(`chats_${userId}`);
    }

    // Кэшировать сообщения
    cacheMessages(chatId, messages) {
        this.set(`messages_${chatId}`, messages, 60000); // 1 минута
    }

    getCachedMessages(chatId) {
        return this.get(`messages_${chatId}`);
    }

    // Кэшировать профили пользователей
    cacheUserProfile(userId, profile) {
        this.set(`user_${userId}`, profile, 300000); // 5 минут
    }

    getCachedUserProfile(userId) {
        return this.get(`user_${userId}`);
    }

    // Очистить всё
    clear() {
        this.store.clear();
    }

    // Статистика
    getStats() {
        return {
            size: this.store.size,
            maxSize: this.maxSize,
            entries: [...this.store.keys()]
        };
    }
}

export const cacheService = new CacheService();