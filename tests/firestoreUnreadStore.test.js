import test from 'node:test';
import assert from 'node:assert/strict';
import { createFirestoreUnreadStore } from '../server/firestoreUnreadStore.js';
import { projectUnreadEvent } from '../server/unreadEventProjector.js';

function createFakeFirestore(seed = {}) {
    const documents = new Map(Object.entries(seed));
    const operations = [];
    const db = {
        documents,
        operations,
        doc(path) { return { path }; },
        async runTransaction(callback) {
            const staged = new Map(documents);
            let hasWritten = false;
            const transaction = {
                async get(ref) {
                    assert.equal(hasWritten, false, 'Firestore transactions must read before writes');
                    operations.push(['get', ref.path]);
                    return {
                        exists: staged.has(ref.path),
                        data: () => staged.get(ref.path)
                    };
                },
                set(ref, value, options) {
                    hasWritten = true;
                    operations.push(['set', ref.path]);
                    staged.set(ref.path, { ...(staged.get(ref.path) || {}), ...value });
                },
                create(ref, value) {
                    hasWritten = true;
                    operations.push(['create', ref.path]);
                    if (staged.has(ref.path)) throw new Error('already-exists');
                    staged.set(ref.path, value);
                }
            };
            const result = await callback(transaction);
            documents.clear();
            for (const [path, value] of staged) documents.set(path, value);
            return result;
        }
    };
    return db;
}

const timestamp = () => 'server-time';

test('Firestore adapter atomically writes recipient counters and event receipt', async () => {
    const db = createFakeFirestore({ 'chats/room-1': { participants: ['alice', 'bob', 'charlie'] } });
    const store = createFirestoreUnreadStore({ db, serverTimestamp: timestamp });
    const result = await projectUnreadEvent(store, {
        eventId: 'message-created-1',
        chatId: 'room-1',
        after: { senderId: 'alice', readBy: [] },
        participants: ['alice', 'bob', 'charlie']
    });

    assert.equal(result.applied, true);
    assert.equal(db.documents.get('users/bob/unreadChats/room-1').count, 1);
    assert.equal(db.documents.get('users/charlie/unreadChats/room-1').count, 1);
    assert.equal(db.documents.get('unreadProjectionEvents/message-created-1').schemaVersion, 1);
    const firstWrite = db.operations.findIndex(([kind]) => kind === 'set' || kind === 'create');
    assert.ok(firstWrite > 0);
    assert.ok(db.operations.slice(0, firstWrite).every(([kind]) => kind === 'get'));
});

test('Firestore adapter treats a repeated event as an idempotent no-op', async () => {
    const db = createFakeFirestore({ 'chats/room-1': { participants: ['alice', 'bob'] } });
    const store = createFirestoreUnreadStore({ db, serverTimestamp: timestamp });
    const event = {
        eventId: 'message-created-2',
        chatId: 'room-1',
        after: { senderId: 'alice', readBy: [] },
        participants: ['alice', 'bob']
    };
    await projectUnreadEvent(store, event);
    const second = await projectUnreadEvent(store, event);

    assert.equal(second.applied, false);
    assert.equal(db.documents.get('users/bob/unreadChats/room-1').count, 1);
});

test('Firestore adapter rejects invalid document identities before writing', async () => {
    const db = createFakeFirestore();
    const store = createFirestoreUnreadStore({ db, serverTimestamp: timestamp });
    await assert.rejects(projectUnreadEvent(store, {
        eventId: 'bad/event',
        chatId: 'room-1',
        after: { senderId: 'alice', readBy: [] },
        participants: ['alice', 'bob']
    }), /Invalid unread event ID/);
    assert.equal(db.documents.size, 0);
});

test('Firestore adapter rejects a stored counter with a non-integer value without writing', async () => {
    const db = createFakeFirestore({
        'chats/room-1': { participants: ['alice', 'bob'] },
        'users/bob/unreadChats/room-1': { count: 'one' }
    });
    const store = createFirestoreUnreadStore({ db, serverTimestamp: timestamp });

    await assert.rejects(projectUnreadEvent(store, {
        eventId: 'message-created-invalid-baseline',
        chatId: 'room-1',
        after: { senderId: 'alice', readBy: [] },
        participants: ['alice', 'bob']
    }), /numeric baseline/);

    assert.equal(db.documents.get('users/bob/unreadChats/room-1').count, 'one');
    assert.equal(db.documents.has('unreadProjectionEvents/message-created-invalid-baseline'), false);
});

test('Firestore adapter rolls back staged writes when projection fails', async () => {
    const db = createFakeFirestore();
    const store = createFirestoreUnreadStore({ db, serverTimestamp: timestamp });

    await assert.rejects(store.runTransaction(async tx => {
        await tx.hasProcessed('will-rollback');
        await tx.getCount('bob', 'room-1');
        tx.setCount('bob', 'room-1', 4);
        tx.markProcessed('will-rollback');
        throw new Error('projection-failed');
    }), /projection-failed/);

    assert.equal(db.documents.size, 0);
});

test('Firestore adapter rejects slash-containing user and chat IDs', async () => {
    const db = createFakeFirestore();
    const store = createFirestoreUnreadStore({ db, serverTimestamp: timestamp });

    await assert.rejects(store.runTransaction(tx => tx.getCount('bob/other', 'room-1')), /Invalid unread counter identity/);
    await assert.rejects(store.runTransaction(tx => tx.getCount('bob', 'room/other')), /Invalid unread counter identity/);
    assert.equal(db.documents.size, 0);
});

test('Firestore adapter preserves a missing counter as a zero baseline', async () => {
    const db = createFakeFirestore({ 'chats/room-1': { participants: ['alice', 'bob'] } });
    const store = createFirestoreUnreadStore({ db, serverTimestamp: timestamp });
    await projectUnreadEvent(store, {
        eventId: 'message-created-3',
        chatId: 'room-1',
        after: { senderId: 'alice', readBy: [] },
        participants: ['alice', 'bob']
    });
    assert.equal(db.documents.get('users/bob/unreadChats/room-1').count, 1);
});

test('Firestore adapter derives recipients from the chat document, not event payload', async () => {
    const db = createFakeFirestore({ 'chats/room-1': { participants: ['alice', 'bob'] } });
    const store = createFirestoreUnreadStore({ db, serverTimestamp: timestamp });

    await projectUnreadEvent(store, {
        eventId: 'forged-participant-list',
        chatId: 'room-1',
        after: { senderId: 'alice', readBy: [] },
        participants: ['alice', 'mallory']
    });

    assert.equal(db.documents.get('users/bob/unreadChats/room-1').count, 1);
    assert.equal(db.documents.has('users/mallory/unreadChats/room-1'), false);
    const reads = db.operations.filter(([kind]) => kind === 'get').map(([, path]) => path);
    assert.ok(reads.includes('chats/room-1'), 'trusted chat membership must be read transactionally');
});

test('Firestore adapter rejects missing or malformed trusted chat membership', async () => {
    const missingDb = createFakeFirestore();
    const missingStore = createFirestoreUnreadStore({ db: missingDb, serverTimestamp: timestamp });
    await assert.rejects(projectUnreadEvent(missingStore, {
        eventId: 'missing-chat',
        chatId: 'room-1',
        after: { senderId: 'alice', readBy: [] }
    }), /missing chat/);
    assert.equal(missingDb.documents.size, 0);

    const malformedDb = createFakeFirestore({ 'chats/room-1': { participants: ['alice', 'alice'] } });
    const malformedStore = createFirestoreUnreadStore({ db: malformedDb, serverTimestamp: timestamp });
    await assert.rejects(projectUnreadEvent(malformedStore, {
        eventId: 'duplicate-members',
        chatId: 'room-1',
        after: { senderId: 'alice', readBy: [] }
    }), /invalid trusted participants/);
    assert.equal(malformedDb.documents.size, 1);
});
