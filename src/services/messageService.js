import { db } from './firebase';
import {
    collection,
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
    getDocFromServer,
    arrayUnion,
    writeBatch,
    startAfter
} from 'firebase/firestore';
import { validateOutgoingMessage, MESSAGE_PAGE_SIZE } from './messageValidation.js';

class MessageService {
    subscribeToMessages(chatId, callback, onError) {
        const q = query(
            collection(db, 'chats', chatId, 'messages'),
            orderBy('createdAt', 'desc'),
            limit(MESSAGE_PAGE_SIZE)
        );
        return onSnapshot(q, (snapshot) => {
            const messages = [];
            snapshot.forEach((doc) => {
                messages.push({ id: doc.id, ...doc.data() });
            });
            callback(messages.reverse(), snapshot.docs.at(-1) || null, snapshot.size === MESSAGE_PAGE_SIZE);
        }, onError);
    }

    async fetchOlderMessages(chatId, cursor) {
        if (!cursor) return { messages: [], cursor: null, hasMore: false };
        const snapshot = await getDocs(query(
            collection(db, 'chats', chatId, 'messages'),
            orderBy('createdAt', 'desc'),
            startAfter(cursor),
            limit(MESSAGE_PAGE_SIZE)
        ));
        return {
            messages: snapshot.docs.map(message => ({ id: message.id, ...message.data() })).reverse(),
            cursor: snapshot.docs.at(-1) || null,
            hasMore: snapshot.size === MESSAGE_PAGE_SIZE
        };
    }

    async sendMessage(chatId, user, text, attachment = null, messageId = null) {
        validateOutgoingMessage({ chatId, user, text, attachment });
        const messageRef = messageId
            ? doc(db, 'chats', chatId, 'messages', messageId)
            : doc(collection(db, 'chats', chatId, 'messages'));
        // Offline retries reuse the same message ID. If the previous attempt
        // committed before the connection dropped, it must not send a duplicate.
        if (messageId && (await getDoc(messageRef)).exists()) return;
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
            if (attachment.storagePath) messageData.storagePath = attachment.storagePath;
        }

        const lastMsg = attachment 
            ? (attachment.type === 'image' ? '📷 Фото' : 
               attachment.type === 'video' ? '🎬 Видео' : 
               attachment.type === 'voice' ? '🎙️ Голосовое' : 
               attachment.type === 'audio' ? '🎵 Аудио' : 
               '📎 Файл')
            : text;

        // Message and preview are committed together, so a failed write cannot
        // leave the chat preview behind the newest message.
        const batch = writeBatch(db);
        batch.set(messageRef, messageData);
        batch.update(doc(db, 'chats', chatId), {
            lastMessage: lastMsg,
            lastMessageTime: serverTimestamp()
        });
        await batch.commit();
    }

    async messageExists(chatId, messageId) {
        // An offline cached miss is not proof that the server lacks the message.
        return (await getDocFromServer(doc(db, 'chats', chatId, 'messages', messageId))).exists();
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
