import { onCall, HttpsError } from 'firebase-functions/v2/https';
import { initializeApp } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { parseCreateGroupInput, parseGroupMembershipCommand, buildGroupMembershipChange } from './src/groupMembershipValidation.js';

initializeApp();
const db = getFirestore();
const options = { region: 'europe-west1' };

function callableError(error) {
    if (error instanceof HttpsError) throw error;
    const message = error?.message || '';
    if (/Некоррект|Название группы|Список участников|Неизвестная операция|Покинуть группу можно/.test(message)) {
        throw new HttpsError('invalid-argument', message);
    }
    if (/Только администратор|Только владелец|Операцию может выполнить только участник|Можно покинуть только|Создатель группы|Нельзя изменить права владельца/.test(message)) {
        throw new HttpsError('permission-denied', message);
    }
    if (/уже состоит|не состоит|не является администратором|должен остаться|не более 10|лимит участников|повреждён/.test(message)) {
        throw new HttpsError('failed-precondition', message);
    }
    throw new HttpsError('internal', 'Не удалось изменить группу. Попробуйте ещё раз.');
}

export const createGroupChat = onCall(options, async request => {
    try {
        if (!request.auth?.uid) throw new HttpsError('unauthenticated', 'Требуется авторизация');
        const { name, participants } = parseCreateGroupInput(request.data, request.auth.uid);
        const chatRef = db.collection('chats').doc();
        const batch = db.batch();
        batch.create(chatRef, {
            type: 'group', name, participants, createdBy: request.auth.uid, admins: [request.auth.uid],
            createdAt: FieldValue.serverTimestamp(), membershipHistoryStartedAt: FieldValue.serverTimestamp(),
            lastMessage: `Группа «${name}» создана`, lastMessageTime: FieldValue.serverTimestamp(), pinnedMessages: []
        });
        for (const uid of participants) {
            const eventRef = chatRef.collection('membershipHistory').doc();
            batch.create(eventRef, { uid, action: 'join', actorUid: request.auth.uid, effectiveAt: FieldValue.serverTimestamp(), schemaVersion: 1 });
        }
        await batch.commit();
        return { chatId: chatRef.id };
    } catch (error) { callableError(error); }
});

export const updateGroupMembership = onCall(options, async request => {
    try {
        if (!request.auth?.uid) throw new HttpsError('unauthenticated', 'Требуется авторизация');
        const command = parseGroupMembershipCommand(request.data, request.auth.uid);
        const chatRef = db.collection('chats').doc(command.chatId);
        const eventRef = chatRef.collection('membershipHistory').doc();
        await db.runTransaction(async transaction => {
            const snapshot = await transaction.get(chatRef);
            if (!snapshot.exists) throw new HttpsError('not-found', 'Группа не найдена');
            const change = buildGroupMembershipChange(snapshot.data(), command);
            transaction.update(chatRef, { participants: change.participants, admins: change.admins, updatedAt: FieldValue.serverTimestamp() });
            transaction.create(eventRef, { ...change.event, effectiveAt: FieldValue.serverTimestamp(), schemaVersion: 1 });
        });
        return { ok: true };
    } catch (error) { callableError(error); }
});