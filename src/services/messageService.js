import { db } from './firebase';
import {
    collection,
    addDoc,
    query,
    orderBy,
    onSnapshot,
    serverTimestamp,
    doc,
    updateDoc,
    deleteDoc,
    setDoc
} from 'firebase/firestore';

class MessageService {
    subscribeToMessages(chatId, callback) {
        const q = query(
            collection(db, 'chats', chatId, 'messages'),
            orderBy('createdAt', 'asc')
        );
        return onSnapshot(q, (snapshot) => {
            const messages = [];
            snapshot.forEach((doc) => {
                messages.push({ id: doc.id, ...doc.data() });
            });
            callback(messages);
        });
    }

    async sendMessage(chatId, user, text, attachment = null) {
        const messageData = {
            senderId: user.uid,
            senderName: user.displayName || user.email,
            createdAt: serverTimestamp(),
            type: attachment ? attachment.type : 'text',
            text: text || ''
        };

        if (attachment) {
            messageData.fileData = attachment.fileData;
            messageData.fileName = attachment.fileName;
        }

        await addDoc(collection(db, 'chats', chatId, 'messages'), messageData);

        const lastMsg = attachment 
            ? (attachment.type === 'image' ? '📷 Фото' : attachment.type === 'voice' ? '🎙️ Голосовое' : '📎 Файл')
            : text;

        await setDoc(doc(db, 'chats', chatId), {
            lastMessage: lastMsg,
            lastMessageTime: serverTimestamp()
        }, { merge: true });
    }

    async editMessage(chatId, messageId, newText) {
        await updateDoc(doc(db, 'chats', chatId, 'messages', messageId), {
            text: newText,
            isEdited: true,
            editedAt: serverTimestamp()
        });
    }

    async deleteMessage(chatId, messageId) {
        await deleteDoc(doc(db, 'chats', chatId, 'messages', messageId));
    }
}

export const messageService = new MessageService();