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
    getDocs,
    getDocFromServer,
    arrayUnion,
    startAfter,
    runTransaction
} from 'firebase/firestore';
import { validateOutgoingMessage, MESSAGE_PAGE_SIZE, resolveMessageSenderName } from './messageValidation.js';


function messagePreview(message) {
    if (message.type === 'image') return '📷 Фото';
    if (message.type === 'video') return '🎬 Видео';
    if (message.type === 'voice') return '🎙️ Голосовое';
    if (message.type === 'audio') return '🎵 Аудио';
    if (message.type === 'file') return '📎 Файл';
    return message.text || '';
}

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
        // A read-before-write check outside the commit can race across tabs:
        // two retries may both observe a missing ID and overwrite the same message.
        // The transaction makes the existence check, message creation and preview
        // update one atomic operation. Firestore retries conflicting transactions;
        // the losing retry then observes the committed message and becomes a no-op.
        const messageData = {
            senderId: user.uid,
            senderName: resolveMessageSenderName(user),
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

        // Message creation and chat preview are atomic and idempotent even when
        // two tabs retry the same queued ID at nearly the same time.
        return runTransaction(db, async transaction => {
            const existingMessage = await transaction.get(messageRef);
            if (existingMessage.exists()) {
                if (existingMessage.data().senderId !== user.uid) {
                    throw new Error('Идентификатор сообщения уже занят другим отправителем');
                }
                return false;
            }

            const chatRef = doc(db, 'chats', chatId);
            const chatSnapshot = await transaction.get(chatRef);
            if (!chatSnapshot.exists()) throw new Error('Чат не найден');

            transaction.set(messageRef, messageData);
            transaction.update(chatRef, {
                lastMessage: lastMsg,
                lastMessageTime: serverTimestamp(),
                lastMessageId: messageRef.id
            });
            return true;
        });
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
        const chatRef = doc(db, 'chats', chatId);
        const messageRef = doc(db, 'chats', chatId, 'messages', messageId);
        const messagesRef = collection(db, 'chats', chatId, 'messages');

        // Find a possible replacement preview before the transaction. The
        // transaction verifies it still exists and that the deleted message
        // is still the current preview before applying any preview change.
        for (let attempt = 0; attempt < 3; attempt += 1) {
            const latest = await getDocs(query(
                messagesRef,
                orderBy('createdAt', 'desc'),
                limit(2)
            ));
            const replacement = latest.docs
                .map(item => ({ id: item.id, ...item.data() }))
                .find(item => item.id !== messageId) || null;
            const replacementRef = replacement
                ? doc(db, 'chats', chatId, 'messages', replacement.id)
                : null;

            const outcome = await runTransaction(db, async transaction => {
                const chatSnapshot = await transaction.get(chatRef);
                const messageSnapshot = await transaction.get(messageRef);
                if (!messageSnapshot.exists()) return 'deleted';

                const chatData = chatSnapshot.data() || {};
                const messageData = messageSnapshot.data();
                const pinnedMessages = (chatData.pinnedMessages || [])
                    .filter(item => item.id !== messageId);
                const wasPinned = pinnedMessages.length !== (chatData.pinnedMessages || []).length;
                const legacyPreviewMatches = !chatData.lastMessageId &&
                    chatData.lastMessageTime?.isEqual?.(messageData.createdAt);
                const isCurrentPreview = chatData.lastMessageId === messageId || legacyPreviewMatches;

                let replacementSnapshot = null;
                if (isCurrentPreview && replacementRef) {
                    replacementSnapshot = await transaction.get(replacementRef);
                    if (!replacementSnapshot.exists()) return 'retry';
                }

                transaction.delete(messageRef);
                const updates = {};
                if (wasPinned) updates.pinnedMessages = pinnedMessages;
                if (isCurrentPreview) {
                    if (replacementSnapshot?.exists()) {
                        const nextMessage = replacementSnapshot.data();
                        updates.lastMessage = messagePreview(nextMessage);
                        updates.lastMessageTime = nextMessage.createdAt;
                        updates.lastMessageId = replacementSnapshot.id;
                    } else {
                        updates.lastMessage = 'Нет сообщений';
                        updates.lastMessageTime = serverTimestamp();
                        updates.lastMessageId = null;
                    }
                }
                if (Object.keys(updates).length > 0) transaction.update(chatRef, updates);
                return 'deleted';
            });

            if (outcome === 'deleted') return;
        }

        throw new Error('История чата изменилась одновременно. Повторите удаление.');
    }

    async markAsRead(chatId, userId, messageId) {
        const msgRef = doc(db, 'chats', chatId, 'messages', messageId);
        await updateDoc(msgRef, {
            readBy: arrayUnion(userId)
        });
    }
}

export const messageService = new MessageService();
