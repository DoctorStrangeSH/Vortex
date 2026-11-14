import { db } from './firebase';
import { doc, updateDoc, runTransaction, arrayUnion, arrayRemove } from 'firebase/firestore';

class ReactionService {
    async toggleReaction(chatId, messageId, userId, emoji) {
        const msgRef = doc(db, 'chats', chatId, 'messages', messageId);
        await runTransaction(db, async transaction => {
            const snapshot = await transaction.get(msgRef);
            if (!snapshot.exists()) throw new Error('Сообщение не найдено');

            const hasReacted = (snapshot.data().reactions?.[emoji] || []).includes(userId);
            transaction.update(msgRef, {
                [`reactions.${emoji}`]: hasReacted ? arrayRemove(userId) : arrayUnion(userId)
            });
        });
    }

    async removeReaction(chatId, messageId, userId, emoji) {
        const msgRef = doc(db, 'chats', chatId, 'messages', messageId);
        await updateDoc(msgRef, {
            [`reactions.${emoji}`]: arrayRemove(userId)
        });
    }
}

export const reactionService = new ReactionService();
