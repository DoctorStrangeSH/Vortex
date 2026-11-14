import test, { after } from 'node:test';
import assert from 'node:assert/strict';
import { initializeTestEnvironment, assertFails, assertSucceeds } from '@firebase/rules-unit-testing';
import { arrayRemove, arrayUnion, collection, deleteField, doc, getDoc, getDocs, increment, query, runTransaction, setDoc, updateDoc, where } from 'firebase/firestore';
import { ref, uploadString } from 'firebase/storage';

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
after(async () => { await environment?.cleanup(); });

test('nonmember cannot read a private chat or its messages', { skip: !available }, async () => {
    const alice = environment.authenticatedContext('alice').firestore();
    const eve = environment.authenticatedContext('eve').firestore();
    await assertSucceeds(getDoc(doc(alice, 'chats/chat-a')));
    await assertFails(getDoc(doc(eve, 'chats/chat-a')));
    await assertFails(getDoc(doc(eve, 'chats/chat-a/messages/m1')));
});

test('only authenticated participants can create messages in a chat', { skip: !available }, async () => {
    const alice = environment.authenticatedContext('alice').firestore();
    const eve = environment.authenticatedContext('eve').firestore();
    await assertSucceeds(setDoc(doc(collection(alice, 'chats/chat-a/messages')), { senderId: 'alice', text: 'hello' }));
    await assertFails(setDoc(doc(collection(alice, 'chats/chat-a/messages')), { senderId: 'bob', text: 'forged' }));
    await assertFails(setDoc(doc(collection(eve, 'chats/chat-a/messages')), { senderId: 'eve', text: 'intruder' }));
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
