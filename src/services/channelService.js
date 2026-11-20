import { auth, db } from './firebase';
import { collection, addDoc, serverTimestamp, doc, getDoc, runTransaction } from 'firebase/firestore';

export function buildChannelMembershipUpdate(channel, uid, joining) {
    if (!channel || channel.type !== 'channel') throw new Error('Канал не найден');
    if (!uid) throw new Error('Необходимо войти в аккаунт');

    const participants = Array.isArray(channel.participants) ? channel.participants : [];
    const subscribers = Array.isArray(channel.subscribers) ? channel.subscribers : [];
    if (participants.length !== subscribers.length ||
        participants.some(id => !subscribers.includes(id)) ||
        subscribers.some(id => !participants.includes(id)) ||
        new Set(participants).size !== participants.length ||
        channel.subscriberCount !== subscribers.length) {
        throw new Error('Данные подписки канала повреждены. Обратитесь к владельцу канала.');
    }

    const isMember = subscribers.includes(uid);
    if (joining) {
        if (isMember) return null;
        return {
            participants: [...participants, uid],
            subscribers: [...subscribers, uid],
            subscriberCount: subscribers.length + 1
        };
    }

    if (!isMember) return null;
    if (uid === channel.ownerId) throw new Error('Владелец канала не может отписаться');
    return {
        participants: participants.filter(id => id !== uid),
        subscribers: subscribers.filter(id => id !== uid),
        subscriberCount: subscribers.length - 1
    };
}

class ChannelService {
    async createChannel(user, name, description = '') {
        if (!user?.uid) throw new Error('Необходимо войти в аккаунт');
        const channelData = {
            type: 'channel',
            name,
            description,
            createdBy: user.uid,
            ownerId: user.uid,
            admins: [user.uid],
            participants: [user.uid],
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

    async updateMembership(channelId, userId, joining) {
        const authenticatedUid = auth.currentUser?.uid;
        if (!authenticatedUid || authenticatedUid !== userId) {
            throw new Error('Нельзя изменять подписку другого пользователя');
        }
        const ref = doc(db, 'chats', channelId);
        return runTransaction(db, async transaction => {
            const snapshot = await transaction.get(ref);
            if (!snapshot.exists()) throw new Error('Канал не найден');
            const updates = buildChannelMembershipUpdate(snapshot.data(), authenticatedUid, joining);
            if (!updates) return false;
            transaction.update(ref, updates);
            return true;
        });
    }

    async subscribe(channelId, userId) {
        return this.updateMembership(channelId, userId, true);
    }

    async unsubscribe(channelId, userId) {
        return this.updateMembership(channelId, userId, false);
    }

    async sendChannelMessage(channelId, user, text, attachment = null) {
        const chatRef = doc(db, 'chats', channelId);
        const chatDoc = await getDoc(chatRef);
        const chatData = chatDoc.data();

        if (!chatData?.admins?.includes(user.uid)) {
            throw new Error('Только админы могут писать в канал');
        }

        const { messageService } = await import('./messageService.js');
        await messageService.sendMessage(channelId, user, text, attachment);
    }
}

export const channelService = new ChannelService();
