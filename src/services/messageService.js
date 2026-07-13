import { db } from './firebase';
import {
    collection,
    addDoc,
    query,
    orderBy,
    limit,
    onSnapshot,
    serverTimestamp,
    doc,
    updateDoc,
    deleteDoc,
    setDoc,
    getDocs,
    getDoc,
    arrayUnion
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
            text: text || '',
            readBy: []
        };

        if (attachment) {
            messageData.fileData = attachment.fileData;
            messageData.fileName = attachment.fileName;
            messageData.fileSize = attachment.fileSize || 0;
        }

        await addDoc(collection(db, 'chats', chatId, 'messages'), messageData);

        const lastMsg = attachment 
            ? (attachment.type === 'image' ? '📷 Фото' : 
               attachment.type === 'video' ? '🎬 Видео' : 
               attachment.type === 'voice' ? '🎙️ Голосовое' : 
               attachment.type === 'audio' ? '🎵 Аудио' : 
               '📎 Файл')
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
        // Открепляем если удаляем закреплённое
        const chatRef = doc(db, 'chats', chatId);
        const chatDoc = await getDoc(chatRef);
        const chatData = chatDoc.data() || {};
        const pinnedMessages = (chatData.pinnedMessages || []).filter(m => m.id !== messageId);
        
        if (pinnedMessages.length !== (chatData.pinnedMessages || []).length) {
            await setDoc(chatRef, { pinnedMessages }, { merge: true });
        }

        await deleteDoc(doc(db, 'chats', chatId, 'messages', messageId));

        const messagesQuery = query(
            collection(db, 'chats', chatId, 'messages'),
            orderBy('createdAt', 'desc'),
            limit(1)
        );
        const snapshot = await getDocs(messagesQuery);

        if (snapshot.empty) {
            await setDoc(doc(db, 'chats', chatId), {
                lastMessage: 'Нет сообщений',
                lastMessageTime: serverTimestamp()
            }, { merge: true });
        } else {
            const lastMsg = snapshot.docs[0].data();
            const msgText = lastMsg.type === 'image' ? '📷 Фото' :
                            lastMsg.type === 'video' ? '🎬 Видео' :
                            lastMsg.type === 'voice' ? '🎙️ Голосовое' :
                            lastMsg.type === 'audio' ? '🎵 Аудио' :
                            lastMsg.type === 'file' ? '📎 Файл' :
                            lastMsg.text || '';
            await setDoc(doc(db, 'chats', chatId), {
                lastMessage: msgText,
                lastMessageTime: lastMsg.createdAt
            }, { merge: true });
        }
    }

    async markAsRead(chatId, userId, messageId) {
        const msgRef = doc(db, 'chats', chatId, 'messages', messageId);
        await updateDoc(msgRef, {
            readBy: arrayUnion(userId)
        });
    }
}

export const messageService = new MessageService();