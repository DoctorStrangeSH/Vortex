import { auth, db } from './firebase';
import { buildChannelMembershipUpdate } from './channelMembership.js';
import { collection, addDoc, serverTimestamp, doc, getDoc, runTransaction } from 'firebase/firestore';



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
