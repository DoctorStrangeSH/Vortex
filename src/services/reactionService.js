import { db } from './firebase';
import { doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';

class ReactionService {
    async toggleReaction(chatId, messageId, userId, emoji) {
        const msgRef = doc(db, 'chats', chatId, 'messages', messageId);
        await updateDoc(msgRef, {
            [`reactions.${emoji}`]: arrayUnion(userId)
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