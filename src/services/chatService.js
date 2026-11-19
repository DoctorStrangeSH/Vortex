import { db } from './firebase';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { messageService } from './messageService';
import { privateChatId } from './privateChatId.js';
import {
    collection,
    query,
    where,
    onSnapshot,
    serverTimestamp,
    getDocs,
    doc,
    setDoc,
    getDoc,
    runTransaction
} from 'firebase/firestore';

const functions = getFunctions(undefined, 'europe-west1');
const createGroupChatCallable = httpsCallable(functions, 'createGroupChat');
const updateGroupMembershipCallable = httpsCallable(functions, 'updateGroupMembership');

class ChatService {
    subscribeToChats(userId, callback, onError = () => {}) {
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
        }, onError);
    }

    async createChat(currentUser, otherUser) {
        const stableId = privateChatId(currentUser?.uid, otherUser?.uid);
        const stableRef = doc(db, 'chats', stableId);
        const stableChat = await getDoc(stableRef);
        if (stableChat.exists()) return stableId;

        // Preserve pre-existing chats created before deterministic IDs were introduced.
        const existingQuery = query(
            collection(db, 'chats'),
            where('participants', 'array-contains', currentUser.uid)
        );
        const snapshot = await getDocs(existingQuery);
        
        const existingChat = snapshot.docs.find(doc => {
            const data = doc.data();
            return data.participants.includes(otherUser.uid) && 
                   data.participants.length === 2 &&
                   (data.type === 'private' || !data.type);
        });

        if (existingChat) return existingChat.id;

        const chatData = {
            type: 'private',
            createdBy: currentUser.uid,
            participants: [currentUser.uid, otherUser.uid],
            participantNames: [
                currentUser.displayName || 'Пользователь',
                otherUser.displayName || otherUser.username || 'Пользователь'
            ],
            createdAt: serverTimestamp(),
            lastMessage: 'Чат создан',
            lastMessageTime: serverTimestamp(),
            pinnedMessages: []
        };

        await runTransaction(db, async transaction => {
            const existing = await transaction.get(stableRef);
            if (!existing.exists()) transaction.set(stableRef, chatData);
        });
        return stableId;
    }

    async createGroupChat(currentUser, participantIds, groupName = 'Группа') {
        if (!currentUser?.uid) throw new Error('Требуется авторизация');
        const result = await createGroupChatCallable({
            name: groupName,
            participantIds: [...new Set(participantIds || [])].filter(uid => uid !== currentUser.uid)
        });
        return result.data.chatId;
    }

    async updateGroupMembership(groupId, memberUid, action) {
        if (!groupId || !memberUid) throw new Error('Выберите группу и участника');
        await updateGroupMembershipCallable({ chatId: groupId, memberUid, action });
    }

    async addGroupMember(groupId, memberUid) {
        return this.updateGroupMembership(groupId, memberUid, 'add');
    }

    async removeGroupMember(groupId, memberUid) {
        return this.updateGroupMembership(groupId, memberUid, 'remove');
    }

    async leaveGroup(groupId, userUid) {
        return this.updateGroupMembership(groupId, userUid, 'leave');
    }

    async setGroupAdmin(groupId, memberUid, enabled) {
        return this.updateGroupMembership(groupId, memberUid, enabled ? 'promote' : 'demote');
    }

    async sendMessage(chatId, text, user, attachment = null, messageId = null) {
        await messageService.sendMessage(chatId, user, text, attachment, messageId);
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
