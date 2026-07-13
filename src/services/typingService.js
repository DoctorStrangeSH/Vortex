import { db } from './firebase';
import { doc, setDoc, onSnapshot, serverTimestamp, deleteDoc, writeBatch } from 'firebase/firestore';

class TypingService {
    constructor() {
        this.activeTypings = {};
        this.userId = null;
    }

    setUser(userId) { this.userId = userId; }

    async startTyping(chatId, userId) {
        this.userId = userId;
        const key = `${chatId}_${userId}`;
        if (this.activeTypings[key]) clearTimeout(this.activeTypings[key]);
        const typingRef = doc(db, 'chats', chatId, 'typing', userId);
        await setDoc(typingRef, { userId, timestamp: serverTimestamp() });
        this.activeTypings[key] = setTimeout(async () => {
            await deleteDoc(typingRef).catch(() => {});
            delete this.activeTypings[key];
        }, 4000);
    }

    async stopTyping(chatId, userId) {
        const key = `${chatId}_${userId}`;
        if (this.activeTypings[key]) { clearTimeout(this.activeTypings[key]); delete this.activeTypings[key]; }
        await deleteDoc(doc(db, 'chats', chatId, 'typing', userId)).catch(() => {});
    }

    stopAllTypingSync(userId) {
        if (!userId) return;
        const batch = writeBatch(db);
        Object.keys(this.activeTypings).forEach(key => {
            if (key.endsWith(`_${userId}`)) {
                clearTimeout(this.activeTypings[key]);
                const chatId = key.split('_')[0];
                batch.delete(doc(db, 'chats', chatId, 'typing', userId));
                delete this.activeTypings[key];
            }
        });
        batch.commit().catch(() => {});
    }

    async stopAllTyping(userId) {
        if (!userId) return;
        const keys = Object.keys(this.activeTypings).filter(k => k.endsWith(`_${userId}`));
        for (const key of keys) {
            clearTimeout(this.activeTypings[key]);
            const chatId = key.split('_')[0];
            await deleteDoc(doc(db, 'chats', chatId, 'typing', userId)).catch(() => {});
            delete this.activeTypings[key];
        }
    }

    watchTyping(chatId, userId, callback) {
        const typingRef = doc(db, 'chats', chatId, 'typing', userId);
        return onSnapshot(typingRef, (snap) => callback(snap.exists()));
    }
}

export const typingService = new TypingService();