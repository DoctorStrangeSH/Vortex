import { auth, db } from './firebase';
import { buildGroupLeaveUpdate, buildGroupAdminUpdate } from './groupMembershipPolicy.js';
import { messageService } from './messageService';
import { privateChatId } from './privateChatId.js';
import { findLegacyPrivateChat } from './findLegacyPrivateChat.js';
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
    getDoc,
    runTransaction,
    updateDoc,
    arrayUnion,
    arrayRemove
} from 'firebase/firestore';

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
        
        const existingChat = findLegacyPrivateChat(snapshot.docs, currentUser.uid, otherUser.uid);

        if (existingChat) return existingChat.id;

        const orderedUsers = [currentUser, otherUser].sort((a, b) =>
            a.uid < b.uid ? -1 : a.uid > b.uid ? 1 : 0
        );
        const chatData = {
            type: 'private',
            createdBy: currentUser.uid,
            participants: orderedUsers.map(user => user.uid),
            participantNames: orderedUsers.map(user =>
                user.displayName || user.username || 'Пользователь'
            ),
            createdAt: serverTimestamp(),
            lastMessage: 'Чат создан',
            lastMessageTime: serverTimestamp(),
            lastMessageId: null,
            pinnedMessages: []
        };

        await runTransaction(db, async transaction => {
            const existing = await transaction.get(stableRef);
            if (!existing.exists()) transaction.set(stableRef, chatData);
        });
        return stableId;
    }

    async createGroupChat(currentUser, participantIds, groupName = 'Группа') {
        const allParticipants = [...new Set([currentUser.uid, ...participantIds])];
        
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

    async addGroupMember(groupId, memberUid) {
        if (!memberUid || typeof memberUid !== 'string') throw new Error('Выберите участника');
        await updateDoc(doc(db, 'chats', groupId), { participants: arrayUnion(memberUid) });
    }

    async removeGroupMember(groupId, memberUid) {
        if (!memberUid || typeof memberUid !== 'string') throw new Error('Выберите участника');
        await updateDoc(doc(db, 'chats', groupId), { participants: arrayRemove(memberUid) });
    }

    async leaveGroup(groupId, userUid) {
        const actorUid = auth.currentUser?.uid;
        if (!actorUid || actorUid !== userUid) {
            throw new Error('Нельзя выйти из группы от имени другого пользователя');
        }
        const chatRef = doc(db, 'chats', groupId);
        return runTransaction(db, async transaction => {
            const snapshot = await transaction.get(chatRef);
            if (!snapshot.exists()) throw new Error('Группа не найдена');
            const updates = buildGroupLeaveUpdate(snapshot.data(), actorUid);
            transaction.update(chatRef, updates);
            return true;
        });
    }

    async setGroupAdmin(groupId, memberUid, enabled) {
        const actorUid = auth.currentUser?.uid;
        if (!actorUid) throw new Error('Необходимо войти в аккаунт');
        if (!memberUid || typeof memberUid !== 'string') throw new Error('Выберите участника');
        if (typeof enabled !== 'boolean') throw new Error('Некорректная роль администратора');
        const chatRef = doc(db, 'chats', groupId);
        return runTransaction(db, async transaction => {
            const snapshot = await transaction.get(chatRef);
            if (!snapshot.exists()) throw new Error('Группа не найдена');
            const updates = buildGroupAdminUpdate(snapshot.data(), actorUid, memberUid, enabled);
            if (!updates) return false;
            transaction.update(chatRef, updates);
            return true;
        });
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
