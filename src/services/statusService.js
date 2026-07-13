import { db } from './firebase';
import { doc, updateDoc } from 'firebase/firestore';

class StatusService {
    STATUS_EMOJIS = ['😊', '😎', '🥰', '🤔', '😴', '💼', '🏖️', '🎮', '📚', '❤️', '🔥', '💯'];

    async setEmojiStatus(userId, emoji) {
        await updateDoc(doc(db, 'users', userId), {
            emojiStatus: emoji,
            statusUpdatedAt: new Date()
        });
    }

    async setTextStatus(userId, text) {
        await updateDoc(doc(db, 'users', userId), {
            customStatus: text,
            statusUpdatedAt: new Date()
        });
    }

    async clearStatus(userId) {
        await updateDoc(doc(db, 'users', userId), {
            emojiStatus: null,
            customStatus: null,
            statusUpdatedAt: null
        });
    }

    getEmojis() {
        return this.STATUS_EMOJIS;
    }

    PRESET_STATUSES = [
        { emoji: '💼', text: 'На работе' },
        { emoji: '🏖️', text: 'В отпуске' },
        { emoji: '😴', text: 'Сплю' },
        { emoji: '🎮', text: 'В игре' },
        { emoji: '📚', text: 'Учусь' },
        { emoji: '🏃', text: 'Тренировка' },
        { emoji: '🍽️', text: 'Обедаю' },
        { emoji: '🎬', text: 'Смотрю кино' }
    ];
}

export const statusService = new StatusService();