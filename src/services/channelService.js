import { db } from './firebase';
import { collection, addDoc, query, where, onSnapshot, serverTimestamp, doc, setDoc, getDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';

class ChannelService {
    // Создать канал
    async createChannel(user, name, description = '') {
        const channelData = {
            type: 'channel',
            name,
            description,
            createdBy: user.uid,
            ownerId: user.uid,
            admins: [user.uid],
            subscribers: [user.uid],
            subscriberCount: 1,
            createdAt: serverTimestamp(),
            lastMessage: `Канал "${name}" создан`,
            lastMessageTime: serverTimestamp(),
            isChannel: true
        };
        const ref = await addDoc(collection(db, 'chats'), channelData);
        return ref.id;
    }

    // Подписаться на канал
    async subscribe(channelId, userId) {
        const ref = doc(db, 'chats', channelId);
        await updateDoc(ref, {
            subscribers: arrayUnion(userId),
            subscriberCount: increment(1)
        });
        // Добавляем в participants для отображения в списке
        await updateDoc(ref, {
            participants: arrayUnion(userId)
        });
    }

    // Отписаться
    async unsubscribe(channelId, userId) {
        const ref = doc(db, 'chats', channelId);
        await updateDoc(ref, {
            subscribers: arrayRemove(userId),
            subscriberCount: increment(-1),
            participants: arrayRemove(userId)
        });
    }

    // Отправить сообщение в канал (только админы)
    async sendChannelMessage(channelId, user, text, attachment = null) {
        const chatRef = doc(db, 'chats', channelId);
        const chatDoc = await getDoc(chatRef);
        const chatData = chatDoc.data();
        
        if (!chatData.admins?.includes(user.uid)) {
            throw new Error('Только админы могут писать в канал');
        }
        
        const { messageService } = await import('./messageService.js');
        await messageService.sendMessage(channelId, user, text, attachment);
    }
}

import { increment } from 'firebase/firestore';
export const channelService = new ChannelService();