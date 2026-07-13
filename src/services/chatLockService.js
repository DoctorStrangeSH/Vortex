class ChatLockService {
    // Установить PIN на чат
    async setChatPin(chatId, pin) {
        const lockedChats = JSON.parse(localStorage.getItem('lockedChats') || '{}');
        lockedChats[chatId] = pin;
        localStorage.setItem('lockedChats', JSON.stringify(lockedChats));
    }

    // Проверить PIN
    verifyChatPin(chatId, pin) {
        const lockedChats = JSON.parse(localStorage.getItem('lockedChats') || '{}');
        return lockedChats[chatId] === pin;
    }

    // Разблокировать
    unlockChat(chatId) {
        const lockedChats = JSON.parse(localStorage.getItem('lockedChats') || '{}');
        delete lockedChats[chatId];
        localStorage.setItem('lockedChats', JSON.stringify(lockedChats));
    }

    // Проверить заблокирован ли
    isLocked(chatId) {
        const lockedChats = JSON.parse(localStorage.getItem('lockedChats') || '{}');
        return !!lockedChats[chatId];
    }

    getLockedChats() {
        return JSON.parse(localStorage.getItem('lockedChats') || '{}');
    }
}

export const chatLockService = new ChatLockService();