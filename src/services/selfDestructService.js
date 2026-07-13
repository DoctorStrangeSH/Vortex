import { db } from './firebase';
import { doc, updateDoc, serverTimestamp } from 'firebase/firestore';

class SelfDestructService {
    constructor() {
        this.timers = {};
    }

    // Установить таймер удаления
    async setTimer(chatId, messageId, seconds) {
        const msgRef = doc(db, 'chats', chatId, 'messages', messageId);
        await updateDoc(msgRef, {
            selfDestruct: seconds,
            destructAt: new Date(Date.now() + seconds * 1000)
        });

        // Запускаем таймер
        this.startTimer(chatId, messageId, seconds);
    }

    startTimer(chatId, messageId, seconds) {
        const key = `${chatId}_${messageId}`;
        clearTimeout(this.timers[key]);
        
        this.timers[key] = setTimeout(async () => {
            const { deleteDoc } = await import('firebase/firestore');
            await deleteDoc(doc(db, 'chats', chatId, 'messages', messageId)).catch(() => {});
            delete this.timers[key];
        }, seconds * 1000);
    }

    cancelTimer(chatId, messageId) {
        const key = `${chatId}_${messageId}`;
        clearTimeout(this.timers[key]);
        delete this.timers[key];
    }
}

export const selfDestructService = new SelfDestructService();