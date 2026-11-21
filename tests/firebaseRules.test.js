import test, { after } from 'node:test';
import assert from 'node:assert/strict';
import { initializeTestEnvironment, assertFails, assertSucceeds } from '@firebase/rules-unit-testing';
import { arrayRemove, arrayUnion, collection, serverTimestamp, deleteDoc, deleteField, doc, getDoc, getDocs, increment, query, onSnapshot, runTransaction, setDoc, writeBatch, updateDoc, where } from 'firebase/firestore';
import { ref, uploadString, getMetadata, getBytes, deleteObject } from 'firebase/storage';

const available = !!process.env.FIRESTORE_EMULATOR_HOST;
const environment = available ? await initializeTestEnvironment({ projectId: 'demo-vortex' }) : null;
if (available) {
    // Emulator REST endpoint bypasses security rules for deterministic test fixtures.
    for (const [path, fields] of [
        ['chats/chat-a', { participants: { arrayValue: { values: [{ stringValue: 'alice' }, { stringValue: 'bob' }] } }, type: { stringValue: 'private' } }],
        ['chats/chat-a/messages/m1', { senderId: { stringValue: 'alice' }, text: { stringValue: 'private' } }],
        ['chats/channel-a', {
            type: { stringValue: 'channel' }, createdBy: { stringValue: 'alice' }, ownerId: { stringValue: 'alice' },
            participants: { arrayValue: { values: [{ stringValue: 'alice' }] } },
            subscribers: { arrayValue: { values: [{ stringValue: 'alice' }] } },
            admins: { arrayValue: { values: [{ stringValue: 'alice' }] } },
            subscriberCount: { integerValue: '1' }
        }]
    ]) {
        const response = await fetch(`http://${process.env.FIRESTORE_EMULATOR_HOST}/v1/projects/demo-vortex/databases/(default)/documents/${path}`, {
            method: 'PATCH', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer owner' }, body: JSON.stringify({ fields })
        });
        if (!response.ok) throw new Error(`Unable to seed ${path}: ${response.status}`);
    }
}

async function seedDocument(path, fields) {
    const response = await fetch(`http://${process.env.FIRESTORE_EMULATOR_HOST}/v1/projects/demo-vortex/databases/(default)/documents/${path}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', Authorization: 'Bearer owner' },
        body: JSON.stringify({ fields })
    });
    if (!response.ok) throw new Error(`Unable to seed ${path}: ${response.status}`);
    return response;
}
after(async () => { await environment?.cleanup(); });

test('unread projections are readable only by their owner and never client-writable', { skip: !available }, async () => {
    const response = await fetch(`http://${process.env.FIRESTORE_EMULATOR_HOST}/v1/projects/demo-vortex/databases/(default)/documents/users/alice/unreadChats/chat-a`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', Authorization: 'Bearer owner' },
        body: JSON.stringify({ fields: {
            count: { integerValue: '3' },
            updatedAt: { timestampValue: '2026-11-19T12:00:00Z' },
            schemaVersion: { integerValue: '1' }
        } })
    });
    assert.equal(response.ok, true);

    const alice = environment.authenticatedContext('alice').firestore();
    const bob = environment.authenticatedContext('bob').firestore();
    const ownProjection = doc(alice, 'users/alice/unreadChats/chat-a');
    const foreignProjection = doc(bob, 'users/alice/unreadChats/chat-a');

    assert.equal((await assertSucceeds(getDoc(ownProjection))).data().count, 3);
    await assertFails(getDoc(foreignProjection));
    await assertFails(setDoc(ownProjection, { count: 0, schemaVersion: 1 }));
    await assertFails(updateDoc(ownProjection, { count: 4 }));
    await assertFails(deleteDoc(ownProjection));
});

test('group creators cannot delete a group document directly, while private chat owners can', { skip: !available }, async () => {
    const alice = environment.authenticatedContext('alice').firestore();
    const groupRef = doc(alice, 'chats', 'group-delete-guard');
    await seedDocument('chats/group-delete-guard', {
        type: { stringValue: 'group' },
        name: { stringValue: 'Команда' },
        createdBy: { stringValue: 'alice' },
        participants: { arrayValue: { values: [{ stringValue: 'alice' }, { stringValue: 'bob' }] } },
        admins: { arrayValue: { values: [{ stringValue: 'alice' }] } }
    });
    await assertFails(deleteDoc(groupRef));

    const privateRef = doc(alice, 'chats', 'dm_5_alice_3_bob');
    await assertSucceeds(setDoc(privateRef, {
        type: 'private',
        createdBy: 'alice',
        participants: ['alice', 'bob'],
        participantNames: ['Alice', 'Bob'],
        createdAt: serverTimestamp(),
        lastMessage: 'Чат создан',
        lastMessageTime: serverTimestamp(),
        pinnedMessages: []
    }));
    await assertSucceeds(deleteDoc(privateRef));
});


test('nonmember cannot read a private chat or its messages', { skip: !available }, async () => {
    const alice = environment.authenticatedContext('alice').firestore();
    const eve = environment.authenticatedContext('eve').firestore();
    await assertSucceeds(getDoc(doc(alice, 'chats/chat-a')));
    await assertFails(getDoc(doc(eve, 'chats/chat-a')));
    await assertFails(getDoc(doc(eve, 'chats/chat-a/messages/m1')));
});

test('two users can create a new private dialog and exchange the first message privately', { skip: !available }, async () => {
    const alice = environment.authenticatedContext('alice').firestore();
    const bob = environment.authenticatedContext('bob').firestore();
    const eve = environment.authenticatedContext('eve').firestore();
    const chatId = 'dm_5_alice_3_bob';
    const aliceChat = doc(alice, 'chats', chatId);
    const bobChat = doc(bob, 'chats', chatId);
    const eveChat = doc(eve, 'chats', chatId);

    assert.equal((await assertSucceeds(getDoc(aliceChat))).exists(), false);
    await assertSucceeds(setDoc(aliceChat, {
        type: 'private', createdBy: 'alice', participants: ['alice', 'bob'],
        participantNames: ['Alice', 'Bob'], createdAt: serverTimestamp(),
        lastMessage: 'Чат создан', lastMessageTime: serverTimestamp(), pinnedMessages: []
    }));
    assert.equal((await assertSucceeds(getDoc(bobChat))).data().type, 'private');
    await assertFails(getDoc(eveChat));

    // A client cannot bypass the canonical pair ID or reverse its participant ordering.
    await assertFails(setDoc(doc(alice, 'chats', 'rogue-private-chat'), {
        type: 'private', createdBy: 'alice', participants: ['alice', 'bob'],
        participantNames: ['Alice', 'Bob'], createdAt: serverTimestamp(),
        lastMessage: 'Чат создан', lastMessageTime: serverTimestamp(), pinnedMessages: []
    }));
    await assertFails(setDoc(doc(alice, 'chats', chatId), {
        type: 'private', createdBy: 'alice', participants: ['bob', 'alice'],
        participantNames: ['Bob', 'Alice'], createdAt: serverTimestamp(),
        lastMessage: 'Чат создан', lastMessageTime: serverTimestamp(), pinnedMessages: []
    }));

    const messageId = 'first-message';
    const batch = writeBatch(alice);
    batch.set(doc(alice, 'chats', chatId, 'messages', messageId), {
        senderId: 'alice', senderName: 'Alice', text: 'Привет!', type: 'text',
        createdAt: serverTimestamp(), readBy: []
    });
    batch.update(aliceChat, { lastMessage: 'Привет!', lastMessageTime: serverTimestamp() });
    await assertSucceeds(batch.commit());

    const message = await assertSucceeds(getDoc(doc(bob, 'chats', chatId, 'messages', messageId)));
    assert.equal(message.data().text, 'Привет!');
    await assertSucceeds(updateDoc(doc(bob, 'chats', chatId, 'messages', messageId), { readBy: arrayUnion('bob') }));
    assert.deepEqual((await assertSucceeds(getDoc(doc(alice, 'chats', chatId, 'messages', messageId)))).data().readBy, ['bob']);
    await assertFails(getDoc(doc(eve, 'chats', chatId, 'messages', messageId)));
});

test('simultaneous private-chat creation from both accounts converges on one canonical document', { skip: !available }, async () => {
    const alice = environment.authenticatedContext('alice').firestore();
    const bob = environment.authenticatedContext('bob').firestore();
    const chatId = 'dm_5_alice_3_bob';
    const createFrom = (firestore, uid, names) => runTransaction(firestore, async transaction => {
        const chatRef = doc(firestore, 'chats', chatId);
        const existing = await transaction.get(chatRef);
        if (!existing.exists()) {
            transaction.set(chatRef, {
                type: 'private',
                createdBy: uid,
                participants: ['alice', 'bob'],
                participantNames: names,
                createdAt: serverTimestamp(),
                lastMessage: 'Чат создан',
                lastMessageTime: serverTimestamp(),
                pinnedMessages: []
            });
        }
        return chatId;
    });

    const [aliceResult, bobResult] = await Promise.all([
        createFrom(alice, 'alice', ['Alice', 'Bob']),
        createFrom(bob, 'bob', ['Alice', 'Bob'])
    ]);
    assert.equal(aliceResult, chatId);
    assert.equal(bobResult, chatId);

    const aliceChats = await assertSucceeds(getDocs(query(
        collection(alice, 'chats'), where('participants', 'array-contains', 'alice')
    )));
    const matching = aliceChats.docs.filter(item =>
        item.id === chatId && item.data().participants.length === 2
    );
    assert.equal(matching.length, 1);
    assert.deepEqual(matching[0].data().participants, ['alice', 'bob']);
});

test('members can still find legacy private chats with non-deterministic IDs', { skip: !available }, async () => {
    const alice = environment.authenticatedContext('alice').firestore();
    const bob = environment.authenticatedContext('bob').firestore();
    const eve = environment.authenticatedContext('eve').firestore();
    await seedDocument('chats/legacy-private-2024', {
        participants: { arrayValue: { values: [{ stringValue: 'alice' }, { stringValue: 'bob' }] } },
        participantNames: { arrayValue: { values: [{ stringValue: 'Alice' }, { stringValue: 'Bob' }] } },
        participantEmails: { arrayValue: { values: [{ stringValue: 'alice@example.test' }, { stringValue: 'bob@example.test' }] } },
        createdBy: { stringValue: 'alice' }
    });

    const aliceLegacy = await assertSucceeds(getDocs(query(
        collection(alice, 'chats'), where('participants', 'array-contains', 'alice')
    )));
    const bobLegacy = await assertSucceeds(getDoc(doc(bob, 'chats', 'legacy-private-2024')));
    await assertFails(getDoc(doc(eve, 'chats', 'legacy-private-2024')));

    assert.equal(aliceLegacy.docs.some(item => item.id === 'legacy-private-2024'), true);
    assert.equal(bobLegacy.data().participants.length, 2);
});

test('legacy private chats remain writable by members without allowing membership or email-field changes', { skip: !available }, async () => {
    const alice = environment.authenticatedContext('alice').firestore();
    const bob = environment.authenticatedContext('bob').firestore();
    const eve = environment.authenticatedContext('eve').firestore();
    const chat = doc(alice, 'chats', 'legacy-private-send');
    await seedDocument('chats/legacy-private-send', {
        participants: { arrayValue: { values: [{ stringValue: 'alice' }, { stringValue: 'bob' }] } },
        participantEmails: { arrayValue: { values: [{ stringValue: 'alice@example.test' }, { stringValue: 'bob@example.test' }] } },
        createdBy: { stringValue: 'alice' }
    });

    const batch = writeBatch(alice);
    batch.set(doc(alice, 'chats/legacy-private-send/messages/legacy-message-1'), {
        senderId: 'alice',
        senderName: 'Alice',
        text: 'Продолжаем старый диалог',
        type: 'text',
        createdAt: serverTimestamp(),
        readBy: []
    });
    batch.update(chat, {
        lastMessage: 'Продолжаем старый диалог',
        lastMessageTime: serverTimestamp(),
        lastMessageId: 'legacy-message-1'
    });
    await assertSucceeds(batch.commit());

    await assertSucceeds(getDoc(doc(bob, 'chats/legacy-private-send/messages/legacy-message-1')));
    await assertFails(getDoc(doc(eve, 'chats/legacy-private-send/messages/legacy-message-1')));
    await assertFails(updateDoc(chat, {
        participantEmails: ['alice@example.test', 'eve@example.test']
    }));
    await assertFails(updateDoc(chat, {
        participants: ['alice', 'eve']
    }));
    await assertFails(updateDoc(doc(eve, 'chats/legacy-private-send'), {
        lastMessage: 'Подмена превью',
        lastMessageTime: serverTimestamp()
    }));
});

test('only authenticated participants can create messages in a chat', { skip: !available }, async () => {
    const alice = environment.authenticatedContext('alice').firestore();
    const eve = environment.authenticatedContext('eve').firestore();
    await assertSucceeds(setDoc(doc(collection(alice, 'chats/chat-a/messages')), { senderId: 'alice', text: 'hello' }));
    await assertFails(setDoc(doc(collection(alice, 'chats/chat-a/messages')), { senderId: 'bob', text: 'forged' }));
    await assertFails(setDoc(doc(collection(eve, 'chats/chat-a/messages')), { senderId: 'eve', text: 'intruder' }));
});

test('new attachments require protected storage references or embedded data, never token URLs', { skip: !available }, async () => {
    const alice = environment.authenticatedContext('alice').firestore();
    const create = (id, attachment) => setDoc(doc(alice, 'chats/chat-a/messages/' + id), {
        senderId: 'alice', text: '', ...attachment
    });
    await assertSucceeds(create('attachment-path-valid', {
        type: 'image', fileData: '', fileSize: 120, fileName: 'photo.png',
        storagePath: 'chats/chat-a/media/alice/photo-123'
    }));
    await assertSucceeds(create('attachment-data-valid', {
        type: 'image', fileData: 'data:image/png;base64,YQ==', fileSize: 1
    }));
    await assertSucceeds(create('attachment-plain-file-valid', {
        type: 'file', fileData: 'data:application/pdf;base64,YQ==', fileSize: 1
    }));
    await assertFails(create('attachment-html-denied', {
        type: 'file', fileData: 'data:text/html;base64,PGh0bWw+', fileSize: 8
    }));
    await assertFails(create('attachment-svg-denied', {
        type: 'image', fileData: 'data:image/svg+xml;base64,PHN2Zz4=', fileSize: 8
    }));
    await assertFails(create('attachment-uppercase-html-denied', {
        type: 'file', fileData: 'data:TEXT/HTML;charset=utf-8;base64,PGh0bWw+', fileSize: 8
    }));
    await assertFails(create('attachment-url-denied', {
        type: 'image', fileData: 'https://firebasestorage.googleapis.com/token', fileSize: 120
    }));
    await assertFails(create('attachment-path-with-token-denied', {
        type: 'image', fileData: 'https://firebasestorage.googleapis.com/token', fileSize: 120,
        storagePath: 'chats/chat-a/media/alice/photo-124'
    }));
    await assertFails(create('attachment-path-without-size-denied', {
        type: 'image', fileData: '', storagePath: 'chats/chat-a/media/alice/photo-125'
    }));
});


test('two accounts exchange a stored attachment and reject impersonation', { skip: !available }, async () => {
    const alice = environment.authenticatedContext('alice').firestore();
    const bob = environment.authenticatedContext('bob').firestore();
    const eve = environment.authenticatedContext('eve').firestore();
    const id = 'attachment-two-account-roundtrip';
    const storagePath = `chats/chat-a/media/alice/${id}`;
    const message = doc(alice, 'chats/chat-a/messages', id);
    const batch = writeBatch(alice);
    batch.set(message, {
        senderId: 'alice', senderName: 'Алиса', type: 'image', text: '', readBy: [],
        createdAt: serverTimestamp(), fileName: 'photo.png', fileData: '',
        fileSize: 1024, storagePath
    });
    batch.update(doc(alice, 'chats/chat-a'), {
        lastMessage: '📷 Фото', lastMessageTime: serverTimestamp()
    });
    await assertSucceeds(batch.commit());
    const received = await assertSucceeds(getDoc(doc(bob, 'chats/chat-a/messages', id)));
    assert.equal(received.data().storagePath, storagePath);
    assert.equal(received.data().fileData, '');
    assert.equal((await assertSucceeds(getDoc(doc(bob, 'chats/chat-a')))).data().lastMessage, '📷 Фото');
    await assertSucceeds(updateDoc(doc(bob, 'chats/chat-a/messages', id), { readBy: arrayUnion('bob') }));
    assert.deepEqual((await assertSucceeds(getDoc(message))).data().readBy, ['bob']);
    await assertFails(getDoc(doc(eve, 'chats/chat-a/messages', id)));
    await assertFails(setDoc(doc(bob, 'chats/chat-a/messages/attachment-forged-owner'), {
        senderId: 'bob', text: '', type: 'image', fileData: '', fileSize: 1024,
        storagePath
    }));
});

test('two participants can complete a message lifecycle: send, receive, read and author delete', { skip: !available }, async () => {
    const alice = environment.authenticatedContext('alice').firestore();
    const bob = environment.authenticatedContext('bob').firestore();
    const aliceMessage = doc(alice, 'chats/chat-a/messages/roundtrip-alice-to-bob');
    const bobMessage = doc(bob, 'chats/chat-a/messages/roundtrip-alice-to-bob');

    await assertSucceeds(setDoc(aliceMessage, { senderId: 'alice', text: 'Привет, Боб!', readBy: [] }));
    const received = await assertSucceeds(getDoc(bobMessage));
    assert.equal(received.data().text, 'Привет, Боб!');
    assert.deepEqual(received.data().readBy, []);

    await assertSucceeds(updateDoc(bobMessage, { readBy: arrayUnion('bob') }));
    const readReceipt = await assertSucceeds(getDoc(aliceMessage));
    assert.deepEqual(readReceipt.data().readBy, ['bob']);

    await assertFails(updateDoc(bobMessage, { text: 'Подмена текста' }));
    await assertSucceeds(updateDoc(aliceMessage, { text: 'Исправлено', isEdited: true }));
    assert.equal((await assertSucceeds(getDoc(bobMessage))).data().text, 'Исправлено');

    // Only the author may delete their own message.
    await assertFails(deleteDoc(bobMessage));
    await assertSucceeds(deleteDoc(aliceMessage));
    assert.equal((await assertSucceeds(getDoc(bobMessage))).exists(), false);
});

test('read receipts are append-only and bound to the authenticated participant UID', { skip: !available }, async () => {
    const alice = environment.authenticatedContext('alice').firestore();
    const bob = environment.authenticatedContext('bob').firestore();
    const eve = environment.authenticatedContext('eve').firestore();
    const aliceMessage = doc(alice, 'chats/chat-a/messages/read-receipt-identity');
    const bobMessage = doc(bob, 'chats/chat-a/messages/read-receipt-identity');
    const eveMessage = doc(eve, 'chats/chat-a/messages/read-receipt-identity');

    await assertSucceeds(setDoc(aliceMessage, {
        senderId: 'alice', text: 'Проверка отметок прочтения', readBy: []
    }));

    // The recipient may append only their own authenticated UID.
    await assertSucceeds(updateDoc(bobMessage, { readBy: arrayUnion('bob') }));
    assert.deepEqual((await assertSucceeds(getDoc(aliceMessage))).data().readBy, ['bob']);

    // A participant cannot forge another reader or replace the receipt history.
    await assertFails(updateDoc(bobMessage, { readBy: arrayUnion('alice') }));
    await assertFails(updateDoc(bobMessage, { readBy: ['bob', 'alice'] }));
    await assertFails(updateDoc(bobMessage, { readBy: ['alice'] }));

    // Receipts are append-only: a reader cannot revoke their own or another
    // participant's receipt, and an outsider cannot write any receipt.
    await assertFails(updateDoc(bobMessage, { readBy: arrayRemove('bob') }));
    await assertFails(updateDoc(bobMessage, { readBy: [] }));
    await assertFails(updateDoc(eveMessage, { readBy: arrayUnion('eve') }));

    assert.deepEqual((await assertSucceeds(getDoc(aliceMessage))).data().readBy, ['bob']);
});

test('authors cannot mark their own messages as read', { skip: !available }, async () => {
    const alice = environment.authenticatedContext('alice').firestore();
    const message = doc(alice, 'chats/chat-a/messages/self-read-denied');
    await assertSucceeds(setDoc(message, { senderId: 'alice', text: 'Моё сообщение', readBy: [] }));
    await assertFails(updateDoc(message, { readBy: arrayUnion('alice') }));
});

test('other participants cannot edit the author content', { skip: !available }, async () => {
    const bob = environment.authenticatedContext('bob').firestore();
    await assertFails(updateDoc(doc(bob, 'chats/chat-a/messages/m1'), { text: 'forged edit' }));
});

test('chat list query requires membership filter', { skip: !available }, async () => {
    const alice = environment.authenticatedContext('alice').firestore();
    await assertSucceeds(getDocs(query(collection(alice, 'chats'), where('participants', 'array-contains', 'alice'))));
    await assertFails(getDocs(collection(alice, 'chats')));
});

test('missing deterministic chat is readable but existing foreign chat is not', { skip: !available }, async () => {
    const eve = environment.authenticatedContext('eve').firestore();
    const missing = await assertSucceeds(getDoc(doc(eve, 'chats/dm_missing')));
    assert.equal(missing.exists(), false);
    await assertFails(getDoc(doc(eve, 'chats/chat-a')));
});

test('storage denies nonmember and wrong-owner uploads (positive path pending cross-service setup)', { skip: !available || !process.env.FIREBASE_STORAGE_EMULATOR_HOST }, async () => {
    const alice = environment.authenticatedContext('alice').storage();
    const eve = environment.authenticatedContext('eve').storage();
    await assertFails(uploadString(ref(alice, 'chats/chat-a/media/eve/photo2'), 'hello', 'raw', { contentType: 'text/plain' }));
    await assertFails(uploadString(ref(eve, 'chats/chat-a/media/eve/photo3'), 'hello', 'raw', { contentType: 'text/plain' }));
});

test('storage rejects active-content MIME types and unauthenticated reads', { skip: !available || !process.env.FIREBASE_STORAGE_EMULATOR_HOST }, async () => {
    const alice = environment.authenticatedContext('alice').storage();
    const guest = environment.unauthenticatedContext().storage();
    const safePath = 'chats/chat-a/media/alice/mime-policy-check';
    const safeRef = ref(alice, safePath);

    for (const contentType of [
        'text/html',
        'image/svg+xml',
        'application/javascript',
        'text/javascript',
        'application/xhtml+xml',
        'application/xml'
    ]) {
        await assertFails(uploadString(
            ref(alice, `chats/chat-a/media/alice/blocked-${contentType.replace(/[^a-z0-9]/gi, '-')}`),
            '<script>alert(1)</script>',
            'raw',
            { contentType }
        ));
    }

    await assertSucceeds(uploadString(safeRef, 'safe text', 'raw', { contentType: 'text/plain' }));
    await assertFails(getMetadata(ref(guest, safePath)));
});

test('storage members can read attachments; only the owner can delete after the message is gone', { skip: !available || !process.env.FIREBASE_STORAGE_EMULATOR_HOST }, async () => {
    const aliceDb = environment.authenticatedContext('alice').firestore();
    const aliceStorage = environment.authenticatedContext('alice').storage();
    const bobStorage = environment.authenticatedContext('bob').storage();
    const eveStorage = environment.authenticatedContext('eve').storage();
    const chatId = 'storage-cleanup-chat';
    const messageId = 'storage-cleanup-message';
    const path = `chats/${chatId}/media/alice/${messageId}`;
    const payload = 'hello';

    await seedDocument(`chats/${chatId}`, {
        type: { stringValue: 'group' },
        createdBy: { stringValue: 'bob' },
        participants: { arrayValue: { values: [{ stringValue: 'alice' }, { stringValue: 'bob' }] } },
        admins: { arrayValue: { values: [{ stringValue: 'bob' }] } }
    });
    await assertSucceeds(setDoc(doc(aliceDb, `chats/${chatId}/messages/${messageId}`), {
        senderId: 'alice', text: '', type: 'file', fileData: '', fileSize: payload.length,
        fileName: 'note.txt', storagePath: path
    }));
    await assertSucceeds(uploadString(ref(aliceStorage, path), payload, 'raw', { contentType: 'text/plain' }));

    // Metadata read proves participant access here; byte-content delivery is
    // already covered by the existing positive Storage lifecycle test below.
    await assertSucceeds(getMetadata(ref(bobStorage, path)));
    await assertFails(getMetadata(ref(eveStorage, path)));

    // A sender must not break a message by deleting its still-referenced object.
    await assertFails(deleteObject(ref(aliceStorage, path)));

    await assertSucceeds(deleteDoc(doc(aliceDb, `chats/${chatId}/messages/${messageId}`)));
    // Simulate the sender leaving before retrying cleanup. Orphan deletion is
    // owner-scoped and does not require continued chat membership.
    await seedDocument(`chats/${chatId}`, {
        type: { stringValue: 'group' },
        createdBy: { stringValue: 'bob' },
        participants: { arrayValue: { values: [{ stringValue: 'bob' }] } },
        admins: { arrayValue: { values: [{ stringValue: 'bob' }] } }
    });
    await assertFails(deleteObject(ref(bobStorage, path)));
    await assertSucceeds(deleteObject(ref(aliceStorage, path)));
});

test('username and profile are claimed atomically; another user cannot take the name', { skip: !available }, async () => {
    const alice = environment.authenticatedContext('alice').firestore();
    const bob = environment.authenticatedContext('bob').firestore();
    const claim = doc(alice, 'usernames/sherlock');
    const profile = doc(alice, 'users/alice');
    await assertSucceeds(runTransaction(alice, async tx => {
        assert.equal((await tx.get(claim)).exists(), false);
        tx.set(profile, { uid: 'alice', email: 'alice@example.test', username: 'sherlock' });
        tx.set(claim, { uid: 'alice', username: 'sherlock' });
        tx.set(doc(alice, 'publicProfiles/alice'), { uid: 'alice', username: 'sherlock', displayName: 'Alice' });
    }));
    await assertFails(setDoc(doc(bob, 'usernames/sherlock'), { uid: 'bob', username: 'sherlock' }));
    await assertFails(setDoc(doc(bob, 'users/bob'), { uid: 'bob', username: 'sherlock' }));
});

test('username lookup requires sign-in, while signed-in users can check an unused name', { skip: !available }, async () => {
    const guest = environment.unauthenticatedContext().firestore();
    const alice = environment.authenticatedContext('alice').firestore();
    await assertFails(getDoc(doc(guest, 'usernames/unused-name')));
    const availableName = await assertSucceeds(getDoc(doc(alice, 'usernames/unused-name')));
    assert.equal(availableName.exists(), false);
});

test('registration rejects missing or mismatched username claim and public profile', { skip: !available }, async () => {
    const newUser = environment.authenticatedContext('new-registration').firestore();
    const privateProfile = doc(newUser, 'users/new-registration');
    const publicProfile = doc(newUser, 'publicProfiles/new-registration');
    const usernameClaim = doc(newUser, 'usernames/new-registration');
    const profile = { uid: 'new-registration', email: 'new@example.test', displayName: 'New User', username: 'new-registration' };

    await assertFails(setDoc(privateProfile, profile));
    await assertFails(setDoc(usernameClaim, { uid: 'new-registration', username: 'new-registration' }));
    await assertFails(setDoc(publicProfile, { uid: 'new-registration', username: 'new-registration', displayName: 'New User' }));

    const forged = writeBatch(newUser);
    forged.set(privateProfile, profile);
    forged.set(usernameClaim, { uid: 'another-user', username: 'new-registration' });
    forged.set(publicProfile, { uid: 'new-registration', username: 'new-registration', displayName: 'New User' });
    await assertFails(forged.commit());

    const valid = writeBatch(newUser);
    valid.set(privateProfile, profile);
    valid.set(usernameClaim, { uid: 'new-registration', username: 'new-registration' });
    valid.set(publicProfile, { uid: 'new-registration', username: 'new-registration', displayName: 'New User' });
    await assertSucceeds(valid.commit());
});

test('private profile protects email while public directory supports search', { skip: !available }, async () => {
    const alice = environment.authenticatedContext('alice').firestore();
    const bob = environment.authenticatedContext('bob').firestore();
    const privateData = await assertSucceeds(getDoc(doc(alice, 'users/alice')));
    assert.equal(privateData.data().email, 'alice@example.test');
    await assertFails(getDoc(doc(bob, 'users/alice')));
    const publicData = await assertSucceeds(getDoc(doc(bob, 'publicProfiles/alice')));
    assert.equal(publicData.data().displayName, 'Alice');
    assert.equal(Object.hasOwn(publicData.data(), 'email'), false);
    await assertSucceeds(getDocs(query(collection(bob, 'publicProfiles'), where('username', '>=', 'sher'), where('username', '<=', 'sher\uf8ff'))));
    await assertFails(updateDoc(doc(bob, 'publicProfiles/alice'), { displayName: 'Fake Alice' }));
    await assertFails(updateDoc(doc(alice, 'publicProfiles/alice'), { email: 'leaked@example.test' }));
    await assertFails(updateDoc(doc(alice, 'publicProfiles/alice'), { username: 'renamed' }));
    await assertSucceeds(updateDoc(doc(alice, 'publicProfiles/alice'), { displayName: 'Алиса' }));
});

test('owner can sanitize a legacy public profile without exposing private fields', { skip: !available }, async () => {
    await seedDocument('publicProfiles/legacy-alice', {
        uid: { stringValue: 'legacy-alice' },
        username: { stringValue: 'legacy_alice' },
        displayName: { stringValue: 'Legacy Alice' },
        email: { stringValue: 'alice@example.test' },
        phone: { stringValue: '+10000000000' },
        internalFlags: { arrayValue: { values: [{ stringValue: 'staff' }] } },
        bio: { stringValue: 'Public biography' }
    });

    const alice = environment.authenticatedContext('legacy-alice').firestore();
    const bob = environment.authenticatedContext('bob').firestore();
    const publicRef = doc(alice, 'publicProfiles/legacy-alice');

    await assertSucceeds(setDoc(publicRef, {
        uid: 'legacy-alice',
        username: 'legacy_alice',
        displayName: 'Legacy Alice',
        bio: 'Public biography'
    }));

    const visible = await assertSucceeds(getDoc(doc(bob, 'publicProfiles/legacy-alice')));
    assert.equal(visible.data().bio, 'Public biography');
    assert.equal(Object.hasOwn(visible.data(), 'email'), false);
    assert.equal(Object.hasOwn(visible.data(), 'phone'), false);
    assert.equal(Object.hasOwn(visible.data(), 'internalFlags'), false);

    await assertFails(setDoc(doc(bob, 'publicProfiles/legacy-alice'), {
        uid: 'legacy-alice', username: 'legacy_alice', displayName: 'Forged'
    }));
});

test('profile edits are atomic across private and public documents', { skip: !available }, async () => {
    const alice = environment.authenticatedContext('alice').firestore();
    const privateRef = doc(alice, 'users/alice');
    const publicRef = doc(alice, 'publicProfiles/alice');
    const original = (await assertSucceeds(getDoc(privateRef))).data().displayName;

    const invalid = writeBatch(alice);
    invalid.set(privateRef, { displayName: 'Неверное обновление' }, { merge: true });
    invalid.set(publicRef, { username: 'other-person' }, { merge: true });
    await assertFails(invalid.commit());
    assert.equal((await assertSucceeds(getDoc(privateRef))).data().displayName, original);

    const valid = writeBatch(alice);
    valid.set(privateRef, { displayName: 'Новое имя', bio: 'О себе' }, { merge: true });
    valid.set(publicRef, { displayName: 'Новое имя', bio: 'О себе' }, { merge: true });
    await assertSucceeds(valid.commit());
    assert.equal((await assertSucceeds(getDoc(publicRef))).data().displayName, 'Новое имя');
});

test('legacy email-bearing username claims are owner-only until email removal', { skip: !available }, async () => {
    const alice = environment.authenticatedContext('alice').firestore();
    const bob = environment.authenticatedContext('bob').firestore();
    // A legacy claim is seeded with admin bypass to simulate old schema.
    const response = await fetch(`http://${process.env.FIRESTORE_EMULATOR_HOST}/v1/projects/demo-vortex/databases/(default)/documents/usernames/legacy`, {
        method: 'PATCH', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer owner' },
        body: JSON.stringify({ fields: { uid: { stringValue: 'alice' }, username: { stringValue: 'legacy' }, email: { stringValue: 'alice@example.test' } } })
    });
    assert.equal(response.ok, true);
    await assertFails(getDoc(doc(bob, 'usernames/legacy')));
    await assertSucceeds(getDoc(doc(alice, 'usernames/legacy')));
    await assertFails(updateDoc(doc(bob, 'usernames/legacy'), { email: deleteField() }));
    await assertSucceeds(updateDoc(doc(alice, 'usernames/legacy'), { email: deleteField() }));
    await assertSucceeds(getDoc(doc(bob, 'usernames/legacy')));
});

test('channel join is atomic and may add only the current user', { skip: !available }, async () => {
    const bob = environment.authenticatedContext('bob').firestore();
    const channel = doc(bob, 'chats/channel-a');
    await assertFails(updateDoc(channel, { participants: arrayUnion('bob') }));
    await assertFails(updateDoc(channel, {
        participants: arrayUnion('bob', 'eve'), subscribers: arrayUnion('bob', 'eve'), subscriberCount: increment(2)
    }));
    await assertSucceeds(updateDoc(channel, {
        participants: arrayUnion('bob'), subscribers: arrayUnion('bob'), subscriberCount: increment(1)
    }));
    await assertFails(updateDoc(channel, { subscriberCount: increment(1) }));
    await assertSucceeds(getDoc(channel));
});

test('channel creation and updates preserve owner, membership, and subscriber-count invariants', { skip: !available }, async () => {
    const bob = environment.authenticatedContext('bob').firestore();
    const base = {
        type: 'channel',
        name: 'Новости команды',
        description: 'Объявления',
        createdBy: 'bob',
        ownerId: 'bob',
        admins: ['bob'],
        participants: ['bob'],
        subscribers: ['bob'],
        subscriberCount: 1,
        isChannel: true
    };

    await assertSucceeds(setDoc(doc(bob, 'chats/channel-valid-schema'), base));

    await assertFails(setDoc(doc(bob, 'chats/channel-wrong-count'), {
        ...base, subscriberCount: 2
    }));
    await assertFails(setDoc(doc(bob, 'chats/channel-divergent-membership'), {
        ...base, subscribers: ['bob', 'eve'], subscriberCount: 2
    }));
    await assertFails(setDoc(doc(bob, 'chats/channel-forged-owner'), {
        ...base, ownerId: 'eve'
    }));
    await assertFails(setDoc(doc(bob, 'chats/channel-forged-admin'), {
        ...base, admins: ['eve']
    }));
    await assertFails(setDoc(doc(bob, 'chats/channel-duplicate-subscriber'), {
        ...base, participants: ['bob', 'bob'], subscribers: ['bob', 'bob'], subscriberCount: 2
    }));

    // Even a signed-in owner cannot commit a membership projection that diverges.
    await assertFails(updateDoc(doc(bob, 'chats/channel-valid-schema'), {
        participants: ['bob', 'eve'],
        subscriberCount: 2
    }));
    await assertFails(updateDoc(doc(bob, 'chats/channel-valid-schema'), {
        participants: ['bob', 'eve'],
        subscribers: ['bob'],
        subscriberCount: 2
    }));
});

test('subscribers cannot publish, impersonate admins, or alter membership', { skip: !available }, async () => {
    const bob = environment.authenticatedContext('bob').firestore();
    const alice = environment.authenticatedContext('alice').firestore();
    const channel = doc(bob, 'chats/channel-a');
    await assertFails(setDoc(doc(collection(bob, 'chats/channel-a/messages')), { senderId: 'bob', text: 'forbidden' }));
    await assertFails(updateDoc(channel, { admins: arrayUnion('bob') }));
    await assertFails(updateDoc(channel, { lastMessage: 'forged' }));
    await assertSucceeds(setDoc(doc(collection(alice, 'chats/channel-a/messages')), { senderId: 'alice', text: 'announcement' }));
});

test('leaving a channel is atomic, cannot remove another member or owner', { skip: !available }, async () => {
    const bob = environment.authenticatedContext('bob').firestore();
    const alice = environment.authenticatedContext('alice').firestore();
    const channel = doc(bob, 'chats/channel-a');
    await assertFails(updateDoc(channel, {
        participants: arrayRemove('alice'), subscribers: arrayRemove('alice'), subscriberCount: increment(-1)
    }));
    await assertFails(updateDoc(doc(alice, 'chats/channel-a'), {
        participants: arrayRemove('alice'), subscribers: arrayRemove('alice'), subscriberCount: increment(-1)
    }));
    await assertSucceeds(updateDoc(channel, {
        participants: arrayRemove('bob'), subscribers: arrayRemove('bob'), subscriberCount: increment(-1)
    }));
    await assertFails(getDoc(channel));
});


test('read receipts can only be added for the authenticated participant', { skip: !available }, async () => {
    const bob = environment.authenticatedContext('bob').firestore();
    const alice = environment.authenticatedContext('alice').firestore();
    const message = doc(bob, 'chats/chat-a/messages/m1');
    await assertSucceeds(updateDoc(message, { readBy: arrayUnion('bob') }));
    await assertFails(updateDoc(message, { readBy: arrayUnion('eve') }));
    await assertFails(updateDoc(message, { readBy: arrayUnion('alice') }));
    await assertFails(updateDoc(message, { readBy: arrayUnion('alice'), reactions: { '❤️': ['bob'] } }));
    await assertFails(updateDoc(doc(alice, 'chats/chat-a/messages/m1'), { readBy: arrayUnion('eve') }));
});

test('reactions can only be toggled by their own authenticated participant', { skip: !available }, async () => {
    const bob = environment.authenticatedContext('bob').firestore();
    const alice = environment.authenticatedContext('alice').firestore();
    const message = doc(bob, 'chats/chat-a/messages/m1');
    await assertSucceeds(updateDoc(message, { reactions: { '❤️': ['bob'] } }));
    await assertFails(updateDoc(message, { reactions: { '❤️': ['bob', 'eve'] } }));
    await assertFails(updateDoc(doc(alice, 'chats/chat-a/messages/m1'), { reactions: { '❤️': [] } }));
    await assertFails(updateDoc(message, { reactions: { '💣': ['bob'] } }));
    await assertFails(updateDoc(message, { reactions: { '❤️': ['bob'], '🔥': ['bob'] } }));
    await assertSucceeds(updateDoc(message, { reactions: { '❤️': [] } }));
});

test('message authors cannot smuggle privileged fields while editing text', { skip: !available }, async () => {
    const alice = environment.authenticatedContext('alice').firestore();
    const message = doc(alice, 'chats/chat-a/messages/m1');
    await assertSucceeds(updateDoc(message, { text: 'edited by author', isEdited: true }));
    await assertFails(updateDoc(message, { text: 'edited', senderId: 'bob' }));
    await assertFails(updateDoc(message, { text: 'edited', readBy: ['eve'] }));
});


test('self-destruct metadata is rejected for new messages while legacy records remain editable', { skip: !available }, async () => {
    const alice = environment.authenticatedContext('alice').firestore();
    const bob = environment.authenticatedContext('bob').firestore();
    const messages = collection(alice, 'chats/chat-a/messages');

    await assertFails(setDoc(doc(messages, 'new-self-destruct'), {
        senderId: 'alice', text: 'not supported in 1.0', selfDestruct: 60
    }));
    await assertFails(setDoc(doc(messages, 'new-destruct-at'), {
        senderId: 'alice', text: 'not supported in 1.0', destructAt: new Date()
    }));

    // Simulate a historical record created before the 1.0 scope was frozen.
    await seedDocument('chats/chat-a/messages/legacy-self-destruct', {
        senderId: { stringValue: 'alice' },
        text: { stringValue: 'Историческое сообщение' },
        selfDestruct: { integerValue: '60' },
        destructAt: { timestampValue: '2026-11-19T12:00:00Z' }
    });
    const legacyForBob = doc(bob, 'chats/chat-a/messages/legacy-self-destruct');
    await assertSucceeds(updateDoc(legacyForBob, { readBy: ['bob'] }));

    const legacyForAlice = doc(alice, 'chats/chat-a/messages/legacy-self-destruct');
    await assertSucceeds(updateDoc(legacyForAlice, { text: 'Исправленный текст', isEdited: true }));
    await assertFails(updateDoc(legacyForAlice, { selfDestruct: 120 }));
    await assertFails(updateDoc(legacyForAlice, { destructAt: new Date() }));
});

test('new messages cannot start with forged receipts or reactions', { skip: !available }, async () => {
    const alice = environment.authenticatedContext('alice').firestore();
    await assertFails(setDoc(doc(collection(alice, 'chats/chat-a/messages')), {
        senderId: 'alice', text: 'forged receipt', readBy: ['eve']
    }));
    await assertFails(setDoc(doc(collection(alice, 'chats/chat-a/messages')), {
        senderId: 'alice', text: 'forged reaction', reactions: { '❤️': ['eve'] }
    }));
    await assertSucceeds(setDoc(doc(collection(alice, 'chats/chat-a/messages')), {
        senderId: 'alice', text: 'normal message', readBy: []
    }));
});

test('new group cannot grant extra admin privileges or spoof the creator', { skip: !available }, async () => {
    const alice = environment.authenticatedContext('alice').firestore();
    const groups = collection(alice, 'chats');
    const valid = { type: 'group', name: 'Команда', createdBy: 'alice', participants: ['alice', 'bob'], admins: ['alice'] };
    await assertSucceeds(setDoc(doc(groups), valid));
    await assertFails(setDoc(doc(groups), { ...valid, admins: ['alice', 'eve'] }));
    await assertFails(setDoc(doc(groups), { ...valid, createdBy: 'eve', admins: ['eve'] }));
    await assertFails(setDoc(doc(groups), { ...valid, name: 'A'.repeat(101) }));
    await assertFails(setDoc(doc(groups), { ...valid, participants: ['bob'] }));
    await assertFails(setDoc(doc(groups), { ...valid, participants: ['alice', 'bob', 'bob'] }));
    await assertFails(setDoc(doc(groups), { ...valid, admins: ['alice', 'alice'] }));
});

test('message schema rejects unknown fields and oversized attachment metadata', { skip: !available }, async () => {
    const alice = environment.authenticatedContext('alice').firestore();
    const messages = collection(alice, 'chats/chat-a/messages');
    const base = { senderId: 'alice', text: 'Привет' };
    await assertFails(setDoc(doc(messages), { ...base, role: 'admin' }));
    await assertFails(setDoc(doc(messages), { ...base, senderName: 'A'.repeat(121) }));
    await assertFails(setDoc(doc(messages), { ...base, fileData: 'x'.repeat(500001) }));
    await assertFails(setDoc(doc(messages), { ...base, storagePath: 'chats/chat-b/media/alice/unsafe' }));
    await assertFails(setDoc(doc(messages), { ...base, fileSize: -1 }));
    await assertSucceeds(setDoc(doc(messages), { ...base, type: 'file', fileSize: 4, fileName: 'x.txt', fileData: 'data:text/plain;base64,QQ==' }));
    await assertFails(updateDoc(doc(alice, 'chats/chat-a/messages/m1'), { text: 'Содержимое', role: 'admin' }));
    await assertFails(updateDoc(doc(alice, 'chats/chat-a/messages/m1'), { text: 123 }));
});

test('group membership is managed by admins, while ordinary members can only leave', { skip: !available }, async () => {
    const alice = environment.authenticatedContext('alice').firestore();
    const bob = environment.authenticatedContext('bob').firestore();
    const charlie = environment.authenticatedContext('charlie').firestore();
    const groupId = 'group-membership-check';
    await assertSucceeds(setDoc(doc(alice, 'chats', groupId), {
        type: 'group', createdBy: 'alice', participants: ['alice', 'bob'], admins: ['alice']
    }));
    await assertFails(updateDoc(doc(alice, 'chats', groupId), { participants: ['alice', 'bob', 'bob'] }));
    await assertFails(updateDoc(doc(alice, 'chats', groupId), { admins: ['alice', 'alice'] }));
    await assertFails(updateDoc(doc(bob, 'chats', groupId), { participants: arrayUnion('eve') }));
    await assertFails(updateDoc(doc(bob, 'chats', groupId), { participants: arrayRemove('alice') }));
    await assertFails(updateDoc(doc(alice, 'chats', groupId), { participants: arrayRemove('alice') }));
    await assertSucceeds(updateDoc(doc(alice, 'chats', groupId), { participants: arrayUnion('charlie') }));
    await assertFails(updateDoc(doc(charlie, 'chats', groupId), { participants: arrayUnion('eve') }));
    await assertSucceeds(updateDoc(doc(bob, 'chats', groupId), { participants: arrayRemove('bob') }));
    await assertFails(getDoc(doc(bob, 'chats', groupId)));
    await assertFails(updateDoc(doc(alice, 'chats', groupId), { participants: ['alice', 'charlie', 'eve', 'mallory'] }));
});

test('delegated group admins can remove ordinary members but cannot remove the owner', { skip: !available }, async () => {
    const alice = environment.authenticatedContext('alice').firestore();
    const bob = environment.authenticatedContext('bob').firestore();
    const groupId = 'group-delegated-admin-removal';

    await assertSucceeds(setDoc(doc(alice, 'chats', groupId), {
        type: 'group',
        createdBy: 'alice',
        participants: ['alice', 'bob', 'charlie'],
        admins: ['alice']
    }));
    await assertSucceeds(updateDoc(doc(alice, 'chats', groupId), {
        admins: arrayUnion('bob')
    }));

    // A delegated administrator may moderate ordinary members.
    await assertSucceeds(updateDoc(doc(bob, 'chats', groupId), {
        participants: arrayRemove('charlie')
    }));
    assert.deepEqual(
        (await assertSucceeds(getDoc(doc(alice, 'chats', groupId)))).data().participants,
        ['alice', 'bob']
    );

    // No administrator may remove the group creator/owner from membership.
    await assertFails(updateDoc(doc(bob, 'chats', groupId), {
        participants: arrayRemove('alice')
    }));
    assert.deepEqual(
        (await assertSucceeds(getDoc(doc(alice, 'chats', groupId)))).data().participants,
        ['alice', 'bob']
    );

    // Delegated admins cannot change the role list themselves.
    await assertFails(updateDoc(doc(bob, 'chats', groupId), {
        admins: arrayRemove('alice')
    }));
});

test('non-owner group administrators can leave when another administrator remains', { skip: !available }, async () => {
    const alice = environment.authenticatedContext('alice').firestore();
    const bob = environment.authenticatedContext('bob').firestore();
    const charlie = environment.authenticatedContext('charlie').firestore();
    const groupId = 'group-admin-self-leave';
    const group = doc(alice, 'chats', groupId);
    await assertSucceeds(setDoc(group, {
        type: 'group', createdBy: 'alice',
        participants: ['alice', 'bob', 'charlie'], admins: ['alice']
    }));
    await assertSucceeds(updateDoc(group, { admins: arrayUnion('bob') }));

    // An administrator may leave, but both membership and role are removed atomically.
    await assertSucceeds(updateDoc(doc(bob, 'chats', groupId), {
        participants: arrayRemove('bob'),
        admins: arrayRemove('bob')
    }));
    const afterAdminLeave = (await assertSucceeds(getDoc(group))).data();
    assert.deepEqual(afterAdminLeave.participants, ['alice', 'charlie']);
    assert.deepEqual(afterAdminLeave.admins, ['alice']);

    // An ordinary participant can still leave without changing the admin list.
    await assertSucceeds(updateDoc(doc(charlie, 'chats', groupId), {
        participants: arrayRemove('charlie')
    }));
    const afterMemberLeave = (await assertSucceeds(getDoc(group))).data();
    assert.deepEqual(afterMemberLeave.participants, ['alice']);
    assert.deepEqual(afterMemberLeave.admins, ['alice']);

    // The creator cannot leave and strand the group without its owner.
    await assertFails(updateDoc(group, {
        participants: arrayRemove('alice'),
        admins: arrayRemove('alice')
    }));
});

test('only group creator can manage admins and owner is never removed', { skip: !available }, async () => {
    const alice = environment.authenticatedContext('alice').firestore();
    const bob = environment.authenticatedContext('bob').firestore();
    const groupId = 'group-admin-check';
    await assertSucceeds(setDoc(doc(alice, 'chats', groupId), {
        type: 'group', createdBy: 'alice', participants: ['alice', 'bob'], admins: ['alice']
    }));
    await assertFails(updateDoc(doc(bob, 'chats', groupId), { admins: arrayUnion('bob') }));
    await assertFails(updateDoc(doc(alice, 'chats', groupId), { admins: arrayUnion('eve') }));
    await assertSucceeds(updateDoc(doc(alice, 'chats', groupId), { admins: arrayUnion('bob') }));
    await assertFails(updateDoc(doc(bob, 'chats', groupId), { admins: arrayRemove('alice') }));
    await assertFails(updateDoc(doc(alice, 'chats', groupId), { admins: arrayRemove('alice') }));
    await assertSucceeds(updateDoc(doc(bob, 'chats', groupId), { participants: arrayUnion('eve') }));
    await assertFails(updateDoc(doc(alice, 'chats', groupId), { participants: arrayRemove('bob') }));
    await assertSucceeds(updateDoc(doc(alice, 'chats', groupId), { admins: arrayRemove('bob') }));
    await assertSucceeds(updateDoc(doc(alice, 'chats', groupId), { participants: arrayRemove('bob') }));
});


test('chat preview and pinned metadata reject invalid types and oversized values', { skip: !available }, async () => {
    const alice = environment.authenticatedContext('alice').firestore();
    const chat = doc(alice, 'chats/chat-a');
    await assertFails(updateDoc(chat, { lastMessage: { text: 'forged' } }));
    await assertFails(updateDoc(chat, { lastMessage: 'x'.repeat(4097) }));
    await assertFails(updateDoc(chat, { lastMessageTime: 'not-a-timestamp' }));
    await assertFails(updateDoc(chat, { lastMessageId: 123 }));
    await assertSucceeds(updateDoc(chat, { lastMessageId: 'message-preview-1' }));
    await assertSucceeds(updateDoc(chat, { lastMessageId: null }));
    await assertFails(updateDoc(chat, { pinnedMessages: 'invalid' }));
    await assertFails(updateDoc(chat, { pinnedMessages: Array.from({ length: 31 }, (_, i) => ({ id: String(i) })) }));
    await assertSucceeds(updateDoc(chat, { lastMessage: 'Привет', pinnedMessages: [{ id: 'm1', text: 'Привет' }] }));
});


test('private chats require two distinct participants and secret chat creation is disabled in 1.0', { skip: !available }, async () => {
    const alice = environment.authenticatedContext('alice').firestore();
    const chats = collection(alice, 'chats');
    // Use a distinct canonical pair: the earlier two-account test creates the alice/bob ID.
    const base = { type: 'private', createdBy: 'alice', participants: ['alice', 'charlie'] };
    await assertSucceeds(setDoc(doc(alice, 'chats', 'dm_5_alice_7_charlie'), base));
    await assertFails(setDoc(doc(chats), { ...base, participants: ['alice'] }));
    await assertFails(setDoc(doc(chats), { ...base, participants: ['alice', 'alice'] }));
    await assertFails(setDoc(doc(chats), { ...base, participants: ['alice', 'bob', 'eve'] }));
    await assertFails(setDoc(doc(chats), { ...base, type: 'secret', participants: ['alice', 'bob', 'eve'] }));
    await assertFails(setDoc(doc(chats), { ...base, type: 'secret' }));
});


test('typing presence allows only the owner and a fresh timestamp', { skip: !available }, async () => {
    const alice = environment.authenticatedContext('alice').firestore();
    const bob = environment.authenticatedContext('bob').firestore();
    const eve = environment.authenticatedContext('eve').firestore();
    const typing = doc(alice, 'chats/chat-a/typing/alice');
    await assertFails(setDoc(doc(bob, 'chats/chat-a/typing/alice'), { userId: 'alice', timestamp: new Date() }));
    await assertFails(setDoc(doc(eve, 'chats/chat-a/typing/eve'), { userId: 'eve', timestamp: new Date() }));
    await assertFails(setDoc(typing, { userId: 'bob', timestamp: new Date() }));
    await assertFails(setDoc(typing, { userId: 'alice', timestamp: new Date(), arbitrary: 'x' }));
    await assertFails(setDoc(typing, { userId: 'alice', timestamp: 'yesterday' }));
    await assertFails(setDoc(typing, { userId: 'alice', timestamp: new Date(0) }));
    await assertSucceeds(setDoc(typing, { userId: 'alice', timestamp: serverTimestamp() }));
    await assertFails(updateDoc(typing, { userId: 'bob' }));
    await assertSucceeds(setDoc(typing, { userId: 'alice', timestamp: serverTimestamp() }));
    await assertSucceeds(deleteDoc(typing));
});


test('stored attachments are readable only by chat participants and deletable by the owner', { skip: !available || !process.env.FIREBASE_STORAGE_EMULATOR_HOST }, async () => {
    const alice = environment.authenticatedContext('alice').storage();
    const bob = environment.authenticatedContext('bob').storage();
    const eve = environment.authenticatedContext('eve').storage();
    const path = 'chats/chat-a/media/alice/positive-upload';
    await assertSucceeds(uploadString(ref(alice, path), 'hello', 'raw', { contentType: 'text/plain' }));
    await assertSucceeds(getMetadata(ref(bob, path)));
    assert.equal(new TextDecoder().decode(await assertSucceeds(getBytes(ref(bob, path)))), 'hello');
    await assertFails(getMetadata(ref(eve, path)));
    await assertFails(getBytes(ref(eve, path)));
    await assertFails(deleteObject(ref(bob, path)));
    await assertSucceeds(deleteObject(ref(alice, path)));
});


test('removed group member immediately loses Storage access', { skip: !available || !process.env.FIREBASE_STORAGE_EMULATOR_HOST }, async () => {
    const aliceDb = environment.authenticatedContext('alice').firestore();
    const aliceStorage = environment.authenticatedContext('alice').storage();
    const bobStorage = environment.authenticatedContext('bob').storage();
    const groupId = 'group-storage-revoke';
    await assertSucceeds(setDoc(doc(aliceDb, 'chats', groupId), {
        type: 'group', createdBy: 'alice', participants: ['alice', 'bob'], admins: ['alice']
    }));
    const path = `chats/${groupId}/media/alice/revoke-test`;
    await assertSucceeds(uploadString(ref(aliceStorage, path), 'hello', 'raw', { contentType: 'text/plain' }));
    assert.equal(new TextDecoder().decode(await assertSucceeds(getBytes(ref(bobStorage, path)))), 'hello');
    await assertSucceeds(updateDoc(doc(aliceDb, 'chats', groupId), { participants: arrayRemove('bob') }));
    await assertFails(getMetadata(ref(bobStorage, path)));
    await assertFails(getBytes(ref(bobStorage, path)));
    await assertSucceeds(getMetadata(ref(aliceStorage, path)));
    await assertSucceeds(deleteObject(ref(aliceStorage, path)));
});

test('second account receives a realtime message and author sees its read receipt', { skip: !available }, async () => {
    const alice = environment.authenticatedContext('alice').firestore();
    const bob = environment.authenticatedContext('bob').firestore();
    const id = 'realtime-two-account-message';
    const bobMessage = doc(bob, 'chats/chat-a/messages', id);
    let unsubscribe = () => {};
    let timer;
    try {
        const delivered = new Promise((resolve, reject) => {
            timer = setTimeout(() => reject(new Error('Realtime message was not delivered')), 8000);
            unsubscribe = onSnapshot(bobMessage, snapshot => {
                if (snapshot.exists() && snapshot.data().text === 'Проверка подписки') resolve(snapshot);
            }, reject);
        });
        await assertSucceeds(setDoc(doc(alice, 'chats/chat-a/messages', id), {
            senderId: 'alice', text: 'Проверка подписки', readBy: [], createdAt: serverTimestamp()
        }));
        const snapshot = await delivered;
        assert.equal(snapshot.data().senderId, 'alice');
        await assertSucceeds(updateDoc(bobMessage, { readBy: arrayUnion('bob') }));
        assert.deepEqual((await assertSucceeds(getDoc(doc(alice, 'chats/chat-a/messages', id)))).data().readBy, ['bob']);
    } finally {
        clearTimeout(timer);
        unsubscribe();
    }
});

test('read receipts, edits and deletion propagate live to the other account', { skip: !available }, async () => {
    const alice = environment.authenticatedContext('alice').firestore();
    const bob = environment.authenticatedContext('bob').firestore();
    const id = 'realtime-lifecycle-two-accounts';
    const aliceMessage = doc(alice, 'chats/chat-a/messages', id);
    const bobMessage = doc(bob, 'chats/chat-a/messages', id);

    // Subscribe before each mutation, so a missed listener event cannot be masked by getDoc.
    const awaitLiveState = (reference, matches, mutate) => new Promise((resolve, reject) => {
        let unsubscribe = () => {};
        const timeout = setTimeout(() => finish(new Error('Timed out waiting for live message state')), 10000);
        let finished = false;
        function finish(error, snapshot) {
            if (finished) return;
            finished = true;
            clearTimeout(timeout);
            unsubscribe();
            if (error) reject(error);
            else resolve(snapshot);
        }
        unsubscribe = onSnapshot(reference, snapshot => {
            if (matches(snapshot)) finish(null, snapshot);
        }, finish);
        Promise.resolve().then(mutate).catch(finish);
    });

    await awaitLiveState(bobMessage, snapshot => snapshot.exists() && snapshot.data().text === 'Первое сообщение',
        () => assertSucceeds(setDoc(aliceMessage, { senderId: 'alice', text: 'Первое сообщение', readBy: [] })));
    const receipt = await awaitLiveState(aliceMessage,
        snapshot => snapshot.exists() && snapshot.data().readBy?.includes('bob'),
        () => assertSucceeds(updateDoc(bobMessage, { readBy: arrayUnion('bob') })));
    assert.deepEqual(receipt.data().readBy, ['bob']);
    const edited = await awaitLiveState(bobMessage,
        snapshot => snapshot.exists() && snapshot.data().text === 'Исправленное сообщение' && snapshot.data().isEdited,
        () => assertSucceeds(updateDoc(aliceMessage, { text: 'Исправленное сообщение', isEdited: true })));
    assert.equal(edited.data().senderId, 'alice');
    const deleted = await awaitLiveState(bobMessage, snapshot => !snapshot.exists(),
        () => assertSucceeds(deleteDoc(aliceMessage)));
    assert.equal(deleted.exists(), false);
});

test('read receipts are idempotent across sessions of the same participant', { skip: !available }, async () => {
    const alice = environment.authenticatedContext('alice').firestore();
    const bobDeviceOne = environment.authenticatedContext('bob', { device: 'one' }).firestore();
    const bobDeviceTwo = environment.authenticatedContext('bob', { device: 'two' }).firestore();
    const aliceMessage = doc(alice, 'chats/chat-a/messages/multi-device-read');
    const bobMessageOne = doc(bobDeviceOne, 'chats/chat-a/messages/multi-device-read');
    const bobMessageTwo = doc(bobDeviceTwo, 'chats/chat-a/messages/multi-device-read');

    await assertSucceeds(setDoc(aliceMessage, { senderId: 'alice', text: 'Прочитай на двух устройствах', readBy: [] }));
    await assertSucceeds(updateDoc(bobMessageOne, { readBy: arrayUnion('bob') }));
    await assertSucceeds(updateDoc(bobMessageTwo, { readBy: arrayUnion('bob') }));

    const finalMessage = await assertSucceeds(getDoc(aliceMessage));
    assert.deepEqual(finalMessage.data().readBy, ['bob']);

    // Idempotence must not permit a second UID or any unrelated field mutation.
    await assertFails(updateDoc(bobMessageTwo, { readBy: arrayUnion('eve') }));
    await assertFails(updateDoc(bobMessageTwo, { readBy: arrayUnion('bob'), text: 'Подмена' }));
});


test('concurrent retries with the same message ID create one message and one matching preview', { skip: !available }, async () => {
    const aliceTabOne = environment.authenticatedContext('alice', { device: 'one' }).firestore();
    const aliceTabTwo = environment.authenticatedContext('alice', { device: 'two' }).firestore();
    const chatId = 'chat-a';
    const messageId = 'concurrent-idempotent-send';
    const sendFrom = firestore => runTransaction(firestore, async transaction => {
        const messageRef = doc(firestore, 'chats', chatId, 'messages', messageId);
        const existingMessage = await transaction.get(messageRef);
        if (existingMessage.exists()) return false;

        const chatRef = doc(firestore, 'chats', chatId);
        const chat = await transaction.get(chatRef);
        assert.equal(chat.exists(), true);

        transaction.set(messageRef, {
            senderId: 'alice',
            senderName: 'Alice',
            text: 'Одно сообщение без дублей',
            type: 'text',
            createdAt: serverTimestamp(),
            readBy: []
        });
        transaction.update(chatRef, {
            lastMessage: 'Одно сообщение без дублей',
            lastMessageTime: serverTimestamp(),
            lastMessageId: messageId
        });
        return true;
    });

    const results = await Promise.all([
        sendFrom(aliceTabOne),
        sendFrom(aliceTabTwo)
    ]);
    assert.equal(results.filter(Boolean).length, 1);

    const savedMessage = await assertSucceeds(getDoc(doc(aliceTabOne, 'chats', chatId, 'messages', messageId)));
    const savedChat = await assertSucceeds(getDoc(doc(aliceTabTwo, 'chats', chatId)));
    assert.equal(savedMessage.exists(), true);
    assert.equal(savedMessage.data().text, 'Одно сообщение без дублей');
    assert.equal(savedChat.data().lastMessageId, messageId);
    assert.equal(savedChat.data().lastMessage, savedMessage.data().text);

    const allMessages = await assertSucceeds(getDocs(collection(aliceTabOne, 'chats', chatId, 'messages')));
    assert.equal(allMessages.docs.filter(item => item.id === messageId).length, 1);
});
