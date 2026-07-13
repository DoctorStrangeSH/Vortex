import { db } from './firebase';
import { collection, addDoc, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';
import { encryptionService } from './encryptionService';

class SecretChatService {
    // Создать секретный чат
    async createSecretChat(user1, user2) {
        const chatData = {
            type: 'secret',
            participants: [user1.uid, user2.uid],
            createdAt: serverTimestamp(),
            encryptionKey: await encryptionService.exportPublicKey()
        };
        const ref = await addDoc(collection(db, 'chats'), chatData);
        return ref.id;
    }

    // Удалить секретный чат полностью (без следов)
    async destroySecretChat(chatId) {
        const { getDocs, query, collection, orderBy } = await import('firebase/firestore');
        
        // Удаляем все сообщения
        const messagesQuery = query(collection(db, 'chats', chatId, 'messages'));
        const snapshot = await getDocs(messagesQuery);
        const batch = [];
        snapshot.forEach((doc) => batch.push(deleteDoc(doc.ref)));
        await Promise.all(batch);
        
        // Удаляем чат
        await deleteDoc(doc(db, 'chats', chatId));
    }
}

export const secretChatService = new SecretChatService();