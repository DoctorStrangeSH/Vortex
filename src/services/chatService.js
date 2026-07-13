import { db } from './firebase';
import { messageService } from './messageService';
import {
    collection,
    addDoc,
    query,
    where,
    onSnapshot,
    serverTimestamp,
    getDocs,
    doc,
    setDoc,
    getDoc
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

    async createChat(currentUser, otherUser) {
        const existingQuery = query(
            collection(db, 'chats'),
            where('participants', 'array-contains', currentUser.uid)
        );
        const snapshot = await getDocs(existingQuery);
        
        const existingChat = snapshot.docs.find(doc => {
            const data = doc.data();
            return data.participants.includes(otherUser.uid) && 
                   data.participants.length === 2 &&
                   data.type !== 'group';
        });

        if (existingChat) return existingChat.id;

        const chatData = {
            type: 'private',
            participants: [currentUser.uid, otherUser.uid],
            participantEmails: [currentUser.email, otherUser.email],
            participantNames: [
                currentUser.displayName || currentUser.email,
                otherUser.displayName || otherUser.email
            ],
            createdAt: serverTimestamp(),
            lastMessage: 'Чат создан',
            lastMessageTime: serverTimestamp(),
            pinnedMessages: []
        };

        const ref = await addDoc(collection(db, 'chats'), chatData);
        return ref.id;
    }

    async createGroupChat(currentUser, participantIds, groupName = 'Группа') {
        const allParticipants = [currentUser.uid, ...participantIds];
        
        const chatData = {
            type: 'group',
            name: groupName,
            participants: allParticipants,
            createdBy: currentUser.uid,
            admins: [currentUser.uid],
            createdAt: serverTimestamp(),
            lastMessage: `Группа "${groupName}" создана`,
            lastMessageTime: serverTimestamp(),
            pinnedMessages: []
        };

        const ref = await addDoc(collection(db, 'chats'), chatData);
        return ref.id;
    }

    async sendMessage(chatId, text, user, attachment = null) {
        await messageService.sendMessage(chatId, user, text, attachment);
    }

    subscribeToMessages(chatId, callback) {
        return messageService.subscribeToMessages(chatId, callback);
    }

    async pinMessage(chatId, messageId, messageText, senderName) {
        const chatRef = doc(db, 'chats', chatId);
        const chatDoc = await getDoc(chatRef);
        const chatData = chatDoc.data() || {};
        const pinnedMessages = chatData.pinnedMessages || [];
        
        if (pinnedMessages.find(m => m.id === messageId)) return;
        
        pinnedMessages.push({
            id: messageId,
            text: messageText?.substring(0, 100) || '',
            senderName: senderName || '',
            pinnedAt: new Date().toISOString()
        });
        
        await setDoc(chatRef, { pinnedMessages }, { merge: true });
    }

    async unpinMessage(chatId, messageId) {
        const chatRef = doc(db, 'chats', chatId);
        const chatDoc = await getDoc(chatRef);
        const chatData = chatDoc.data() || {};
        const pinnedMessages = (chatData.pinnedMessages || []).filter(m => m.id !== messageId);
        
        await setDoc(chatRef, { pinnedMessages }, { merge: true });
    }
}

export const chatService = new ChatService();