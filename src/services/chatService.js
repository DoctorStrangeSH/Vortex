import { db } from './firebase';
import {
    collection,
    addDoc,
    query,
    where,
    onSnapshot,
    orderBy,
    serverTimestamp,
    doc,
    setDoc
} from 'firebase/firestore';

class ChatService {
    subscribeToChats(userId, callback) {
        const q = query(
            collection(db, 'chats'),
            where('participants', 'array-contains', userId)
        );
        return onSnapshot(q, (snapshot) => {
            const chats = [];
            snapshot.forEach((doc) => {
                chats.push({ id: doc.id, ...doc.data() });
            });
            chats.sort((a, b) => {
                const timeA = a.lastMessageTime?.toDate?.() || 0;
                const timeB = b.lastMessageTime?.toDate?.() || 0;
                return timeB - timeA;
            });
            callback(chats);
        });
    }

    async sendMessage(chatId, text, user) {
        await addDoc(collection(db, 'chats', chatId, 'messages'), {
            text,
            senderId: user.uid,
            senderName: user.displayName || user.email,
            createdAt: serverTimestamp()
        });
        await setDoc(doc(db, 'chats', chatId), {
            lastMessage: text,
            lastMessageTime: serverTimestamp()
        }, { merge: true });
    }

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
}

export const chatService = new ChatService();