import { db } from './firebase';
import { messageService } from './messageService';
import {
    collection,
    addDoc,
    query,
    where,
    onSnapshot,
    serverTimestamp,
    getDocs
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

    // Создать новый чат
    async createChat(currentUser, otherUser) {
        // Проверяем, нет ли уже чата
        const existingQuery = query(
            collection(db, 'chats'),
            where('participants', 'array-contains', currentUser.uid)
        );
        const snapshot = await getDocs(existingQuery);
        
        const existingChat = snapshot.docs.find(doc => {
            const data = doc.data();
            return data.participants.includes(otherUser.uid) && 
                   data.participants.length === 2;
        });

        if (existingChat) {
            return existingChat.id; // Возвращаем существующий чат
        }

        // Создаём новый чат
        const chatData = {
            participants: [currentUser.uid, otherUser.uid],
            participantEmails: [currentUser.email, otherUser.email],
            participantNames: [
                currentUser.displayName || currentUser.email,
                otherUser.displayName || otherUser.email
            ],
            createdAt: serverTimestamp(),
            lastMessage: 'Чат создан',
            lastMessageTime: serverTimestamp()
        };

        const ref = await addDoc(collection(db, 'chats'), chatData);
        return ref.id;
    }

    // Отправить сообщение
    async sendMessage(chatId, text, user, attachment = null) {
        await messageService.sendMessage(chatId, user, text, attachment);
    }

    // Подписаться на сообщения чата
    subscribeToMessages(chatId, callback) {
        return messageService.subscribeToMessages(chatId, callback);
    }
}

export const chatService = new ChatService();