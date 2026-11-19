import { db } from './firebase';
import { messageService } from './messageService';
import { privateChatId } from './privateChatId.js';
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
        
        const existingChat = snapshot.docs.find(doc => {
            const data = doc.data();
            return data.participants.includes(otherUser.uid) && 
                   data.participants.length === 2 &&
                   (data.type === 'private' || !data.type);
        });

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
        await this.removeGroupMember(groupId, userUid);
    }

    async setGroupAdmin(groupId, memberUid, enabled) {
        if (!memberUid || typeof memberUid !== 'string') throw new Error('Выберите участника');
        await updateDoc(doc(db, 'chats', groupId), {
            admins: enabled ? arrayUnion(memberUid) : arrayRemove(memberUid)
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
