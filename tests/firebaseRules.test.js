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
    await assertSucceeds(setDoc(groupRef, {
        type: 'group',
        name: 'Команда',
        createdBy: 'alice',
        participants: ['alice', 'bob'],
        admins: ['alice'],
        createdAt: serverTimestamp(),
        lastMessage: 'Группа создана',
        lastMessageTime: serverTimestamp(),
        pinnedMessages: []
    }));
    await assertFails(deleteDoc(groupRef));

    const privateRef = doc(alice, 'chats', 'private-delete-allowed');
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

test('group creation is restricted to the trusted callable backend', { skip: !available }, async () => {
    const alice = environment.authenticatedContext('alice').firestore();
    const groups = collection(alice, 'chats');
    const valid = { type: 'group', name: 'Команда', createdBy: 'alice', participants: ['alice', 'bob'], admins: ['alice'] };
    await assertFails(setDoc(doc(groups), valid));
    await assertFails(setDoc(doc(groups), { ...valid, admins: ['alice', 'eve'] }));
    await assertFails(setDoc(doc(groups), { ...valid, createdBy: 'eve', admins: ['eve'] }));
    await assertFails(setDoc(doc(groups), { ...valid, name: 'A'.repeat(101) }));
    await assertFails(setDoc(doc(groups), { ...valid, participants: ['bob'] }));
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

test('clients cannot create, add, remove or leave groups outside trusted callables', { skip: !available }, async () => {
    const alice = environment.authenticatedContext('alice').firestore();
    const bob = environment.authenticatedContext('bob').firestore();
    const charlie = environment.authenticatedContext('charlie').firestore();
    const groupId = 'group-membership-check';
    const groupRef = doc(alice, 'chats', groupId);
    await assertFails(setDoc(groupRef, {
        type: 'group', createdBy: 'alice', participants: ['alice', 'bob'], admins: ['alice']
    }));
    await seedDocument(`chats/${groupId}`, {
        type: { stringValue: 'group' },
        createdBy: { stringValue: 'alice' },
        participants: { arrayValue: { values: [{ stringValue: 'alice' }, { stringValue: 'bob' }] } },
        admins: { arrayValue: { values: [{ stringValue: 'alice' }] } }
    });
    await assertSucceeds(getDoc(doc(bob, 'chats', groupId)));
    await assertFails(updateDoc(doc(bob, 'chats', groupId), { participants: arrayUnion('eve') }));
    await assertFails(updateDoc(doc(bob, 'chats', groupId), { participants: arrayRemove('alice') }));
    await assertFails(updateDoc(groupRef, { participants: arrayRemove('alice') }));
    await assertFails(updateDoc(groupRef, { participants: arrayUnion('charlie') }));
    await assertFails(updateDoc(doc(charlie, 'chats', groupId), { participants: arrayUnion('eve') }));
    await assertFails(updateDoc(doc(bob, 'chats', groupId), { participants: arrayRemove('bob') }));
    await assertFails(updateDoc(groupRef, { participants: ['alice', 'charlie', 'eve', 'mallory'] }));
    await seedDocument(`chats/${groupId}`, {
        type: { stringValue: 'group' },
        createdBy: { stringValue: 'alice' },
        participants: { arrayValue: { values: [{ stringValue: 'alice' }] } },
        admins: { arrayValue: { values: [{ stringValue: 'alice' }] } }
    });
    await assertFails(getDoc(doc(bob, 'chats', groupId)));
});

test('clients cannot change group administrator roles directly', { skip: !available }, async () => {
    const alice = environment.authenticatedContext('alice').firestore();
    const bob = environment.authenticatedContext('bob').firestore();
    const groupId = 'group-admin-check';
    const groupRef = doc(alice, 'chats', groupId);
    await seedDocument(`chats/${groupId}`, {
        type: { stringValue: 'group' },
        createdBy: { stringValue: 'alice' },
        participants: { arrayValue: { values: [{ stringValue: 'alice' }, { stringValue: 'bob' }] } },
        admins: { arrayValue: { values: [{ stringValue: 'alice' }, { stringValue: 'bob' }] } }
    });
    await assertFails(updateDoc(doc(bob, 'chats', groupId), { admins: arrayUnion('eve') }));
    await assertFails(updateDoc(groupRef, { admins: arrayUnion('eve') }));
    await assertFails(updateDoc(doc(bob, 'chats', groupId), { admins: arrayRemove('alice') }));
    await assertFails(updateDoc(groupRef, { admins: arrayRemove('alice') }));
    await assertFails(updateDoc(doc(bob, 'chats', groupId), { participants: arrayUnion('eve') }));
    await assertFails(updateDoc(groupRef, { participants: arrayRemove('bob') }));
    await assertFails(updateDoc(groupRef, { admins: arrayRemove('bob') }));
    await assertFails(updateDoc(groupRef, { participants: arrayRemove('bob') }));
});


test('membership history is readable by current members and immutable to clients', { skip: !available }, async () => {
    const alice = environment.authenticatedContext('alice').firestore();
    const bob = environment.authenticatedContext('bob').firestore();
    const eve = environment.authenticatedContext('eve').firestore();
    const groupId = 'group-history-access';
    await seedDocument(`chats/${groupId}`, {
        type: { stringValue: 'group' },
        createdBy: { stringValue: 'alice' },
        participants: { arrayValue: { values: [{ stringValue: 'alice' }, { stringValue: 'bob' }] } },
        admins: { arrayValue: { values: [{ stringValue: 'alice' }] } }
    });
    await seedDocument(`chats/${groupId}/membershipHistory/event-1`, {
        uid: { stringValue: 'bob' },
        action: { stringValue: 'join' },
        actorUid: { stringValue: 'alice' },
        effectiveAt: { timestampValue: '2026-11-19T12:00:00Z' },
        schemaVersion: { integerValue: '1' }
    });
    const eventForBob = doc(bob, 'chats', groupId, 'membershipHistory', 'event-1');
    const eventForEve = doc(eve, 'chats', groupId, 'membershipHistory', 'event-1');
    await assertSucceeds(getDoc(eventForBob));
    await assertFails(getDoc(eventForEve));
    await assertFails(setDoc(doc(alice, 'chats', groupId, 'membershipHistory', 'forged'), {
        uid: 'eve', action: 'join', actorUid: 'alice', effectiveAt: serverTimestamp(), schemaVersion: 1
    }));
});
 
test('chat preview and pinned metadata reject invalid types and oversized values', { skip: !available }, async () => {
    const alice = environment.authenticatedContext('alice').firestore();
    const chat = doc(alice, 'chats/chat-a');
    await assertFails(updateDoc(chat, { lastMessage: { text: 'forged' } }));
    await assertFails(updateDoc(chat, { lastMessage: 'x'.repeat(4097) }));
    await assertFails(updateDoc(chat, { lastMessageTime: 'not-a-timestamp' }));
    await assertFails(updateDoc(chat, { pinnedMessages: 'invalid' }));
    await assertFails(updateDoc(chat, { pinnedMessages: Array.from({ length: 31 }, (_, i) => ({ id: String(i) })) }));
    await assertSucceeds(updateDoc(chat, { lastMessage: 'Привет', pinnedMessages: [{ id: 'm1', text: 'Привет' }] }));
});


test('private and secret chats require exactly two distinct participants', { skip: !available }, async () => {
    const alice = environment.authenticatedContext('alice').firestore();
    const chats = collection(alice, 'chats');
    const base = { type: 'private', createdBy: 'alice', participants: ['alice', 'bob'] };
    await assertSucceeds(setDoc(doc(chats), base));
    await assertFails(setDoc(doc(chats), { ...base, participants: ['alice'] }));
    await assertFails(setDoc(doc(chats), { ...base, participants: ['alice', 'alice'] }));
    await assertFails(setDoc(doc(chats), { ...base, participants: ['alice', 'bob', 'eve'] }));
    await assertFails(setDoc(doc(chats), { ...base, type: 'secret', participants: ['alice', 'bob', 'eve'] }));
    await assertSucceeds(setDoc(doc(chats), { ...base, type: 'secret' }));
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
    await seedDocument(`chats/${groupId}`, {
        type: { stringValue: 'group' },
        createdBy: { stringValue: 'alice' },
        participants: { arrayValue: { values: [{ stringValue: 'alice' }, { stringValue: 'bob' }] } },
        admins: { arrayValue: { values: [{ stringValue: 'alice' }] } }
    });
    const path = `chats/${groupId}/media/alice/revoke-test`;
    await assertSucceeds(uploadString(ref(aliceStorage, path), 'hello', 'raw', { contentType: 'text/plain' }));
    assert.equal(new TextDecoder().decode(await assertSucceeds(getBytes(ref(bobStorage, path)))), 'hello');
    await seedDocument(`chats/${groupId}`, {
        type: { stringValue: 'group' },
        createdBy: { stringValue: 'alice' },
        participants: { arrayValue: { values: [{ stringValue: 'alice' }] } },
        admins: { arrayValue: { values: [{ stringValue: 'alice' }] } }
    });
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
