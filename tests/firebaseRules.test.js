import test, { after } from 'node:test';
import assert from 'node:assert/strict';
import { initializeTestEnvironment, assertFails, assertSucceeds } from '@firebase/rules-unit-testing';
import { collection, doc, getDoc, getDocs, query, runTransaction, setDoc, updateDoc, where } from 'firebase/firestore';
import { ref, uploadString } from 'firebase/storage';

const available = !!process.env.FIRESTORE_EMULATOR_HOST;
const environment = available ? await initializeTestEnvironment({ projectId: 'demo-vortex' }) : null;
if (available) {
    // Emulator REST endpoint bypasses security rules for deterministic test fixtures.
    for (const [path, fields] of [
        ['chats/chat-a', { participants: { arrayValue: { values: [{ stringValue: 'alice' }, { stringValue: 'bob' }] } }, type: { stringValue: 'private' } }],
        ['chats/chat-a/messages/m1', { senderId: { stringValue: 'alice' }, text: { stringValue: 'private' } }]
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
        tx.set(claim, { uid: 'alice', username: 'sherlock', email: 'alice@example.test' });
    }));
    await assertFails(setDoc(doc(bob, 'usernames/sherlock'), { uid: 'bob', username: 'sherlock' }));
    await assertFails(setDoc(doc(bob, 'users/bob'), { uid: 'bob', username: 'sherlock' }));
});
