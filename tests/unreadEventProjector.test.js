import test from 'node:test';
import assert from 'node:assert/strict';
import { projectUnreadEvent } from '../server/unreadEventProjector.js';

function fakeTransactionalStore(participantIds = participants) {
    const counts = new Map();
    const events = new Set();
    return {
        counts,
        events,
        async runTransaction(callback) {
            const stagedCounts = new Map(counts);
            const stagedEvents = new Set(events);
            const result = await callback({
                hasProcessed: async id => stagedEvents.has(id),
                getParticipants: async () => {
                    if (!Array.isArray(participantIds) || participantIds.length === 0) throw new Error('trusted participants are required');
                    return participantIds;
                },
                getCount: async (uid, chatId) => stagedCounts.get(`${uid}/${chatId}`) ?? 0,
                setCount: (uid, chatId, count) => stagedCounts.set(`${uid}/${chatId}`, count),
                markProcessed: id => stagedEvents.add(id)
            });
            counts.clear(); for (const [key, value] of stagedCounts) counts.set(key, value);
            events.clear(); for (const id of stagedEvents) events.add(id);
            return result;
        }
    };
}

function fakeSerializedTransactionalStore(participantIds = participants) {
    const counts = new Map();
    const events = new Set();
    let tail = Promise.resolve();
    return {
        counts,
        events,
        async runTransaction(callback) {
            let release;
            const previous = tail;
            tail = new Promise(resolve => { release = resolve; });
            await previous;
            try {
                const stagedCounts = new Map(counts);
                const stagedEvents = new Set(events);
                const result = await callback({
                    hasProcessed: async id => stagedEvents.has(id),
                    getParticipants: async () => {
                        if (!Array.isArray(participantIds) || participantIds.length === 0) throw new Error('trusted participants are required');
                        return participantIds;
                    },
                    getCount: async (uid, chatId) => stagedCounts.get(`${uid}/${chatId}`) ?? 0,
                    setCount: (uid, chatId, count) => stagedCounts.set(`${uid}/${chatId}`, count),
                    markProcessed: id => stagedEvents.add(id)
                });
                counts.clear(); for (const [key, value] of stagedCounts) counts.set(key, value);
                events.clear(); for (const id of stagedEvents) events.add(id);
                return result;
            } finally {
                release();
            }
        }
    };
}

const data = { senderId: 'alice', readBy: [] };
const participants = ['alice', 'bob', 'charlie'];

test('one event increments each recipient only once across retries', async () => {
    const store = fakeTransactionalStore();
    const event = { eventId: 'create-1', chatId: 'room', after: data, participants };
    assert.equal((await projectUnreadEvent(store, event)).applied, true);
    assert.equal((await projectUnreadEvent(store, event)).applied, false);
    assert.deepEqual(Object.fromEntries(store.counts), { 'bob/room': 1, 'charlie/room': 1 });
    assert.equal(store.events.size, 1);
});

test('a retry with the same event ID but a different payload cannot change counters', async () => {
    const store = fakeTransactionalStore();
    const first = { eventId: 'stable-event-id', chatId: 'room', after: data, participants };
    const conflictingRetry = {
        eventId: 'stable-event-id',
        chatId: 'room',
        after: { senderId: 'bob', readBy: [] },
        participants
    };

    assert.equal((await projectUnreadEvent(store, first)).applied, true);
    assert.equal((await projectUnreadEvent(store, conflictingRetry)).applied, false);
    assert.deepEqual(Object.fromEntries(store.counts), { 'bob/room': 1, 'charlie/room': 1 });
    assert.equal(store.events.size, 1);
});

test('concurrent duplicate deliveries apply the same event only once', async () => {
    const store = fakeSerializedTransactionalStore();
    const event = { eventId: 'concurrent-create', chatId: 'room', after: data, participants };

    const results = await Promise.all(Array.from({ length: 12 }, () => projectUnreadEvent(store, event)));

    assert.equal(results.filter(result => result.applied).length, 1);
    assert.equal(results.filter(result => !result.applied).length, 11);
    assert.deepEqual(Object.fromEntries(store.counts), { 'bob/room': 1, 'charlie/room': 1 });
    assert.deepEqual([...store.events], ['concurrent-create']);
});

test('concurrent distinct message events do not lose recipient increments', async () => {
    const store = fakeSerializedTransactionalStore();
    const events = Array.from({ length: 8 }, (_, index) => ({
        eventId: `message-${index}`,
        chatId: 'room',
        after: { senderId: 'alice', readBy: [] },
        participants
    }));

    await Promise.all(events.map(event => projectUnreadEvent(store, event)));

    assert.deepEqual(Object.fromEntries(store.counts), { 'bob/room': 8, 'charlie/room': 8 });
    assert.equal(store.events.size, 8);
});

test('read and delete events reconcile with creation without decrementing twice', async () => {
    const store = fakeTransactionalStore();
    await projectUnreadEvent(store, { eventId: 'create', chatId: 'room', after: data, participants });
    await projectUnreadEvent(store, { eventId: 'read', chatId: 'room', before: data, after: { ...data, readBy: ['bob'] }, participants });
    await projectUnreadEvent(store, { eventId: 'delete', chatId: 'room', before: { ...data, readBy: ['bob'] }, participants });
    await projectUnreadEvent(store, { eventId: 'delete', chatId: 'room', before: { ...data, readBy: ['bob'] }, participants });
    assert.deepEqual(Object.fromEntries(store.counts), { 'bob/room': 0, 'charlie/room': 0 });
});

test('out-of-order delete and create events converge without clamping intermediate negative counts', async () => {
    const store = fakeTransactionalStore();
    const createdMessage = data;

    // The delete trigger may arrive before the corresponding create trigger.
    const deleted = await projectUnreadEvent(store, {
        eventId: 'delete-arrived-first', chatId: 'room',
        before: createdMessage, participants
    });
    assert.equal(deleted.applied, true);
    assert.deepEqual(Object.fromEntries(store.counts), { 'bob/room': -1, 'charlie/room': -1 });

    // Applying the delayed create event must restore the correct final count.
    const created = await projectUnreadEvent(store, {
        eventId: 'create-arrived-later', chatId: 'room',
        after: createdMessage, participants
    });
    assert.equal(created.applied, true);
    assert.deepEqual(Object.fromEntries(store.counts), { 'bob/room': 0, 'charlie/room': 0 });
    assert.equal(store.events.size, 2);
});

test('failed transaction does not write event receipt or partial counters', async () => {
    const store = fakeTransactionalStore();
    store.counts.set('charlie/room', NaN);
    await assert.rejects(projectUnreadEvent(store, { eventId: 'failed', chatId: 'room', after: data, participants }), /numeric baseline/);
    assert.equal(store.events.size, 0);
    assert.equal(store.counts.has('bob/room'), false);
});

test('rejects missing event identities or members', async () => {
    const store = fakeTransactionalStore();
    await assert.rejects(projectUnreadEvent(store, { eventId: '', chatId: 'room', participants }), /stable eventId/);
    await assert.rejects(projectUnreadEvent(fakeTransactionalStore([]), { eventId: 'x', chatId: 'room' }), /trusted participants/);
});

test('projector rejects invalid trusted membership instead of using caller-supplied participants', async () => {
    const store = fakeTransactionalStore(['alice', 'bob']);
    const result = await projectUnreadEvent(store, {
        eventId: 'trusted-members-only',
        chatId: 'room',
        after: data,
        participants: ['alice', 'mallory']
    });
    assert.deepEqual(result.deltas, { bob: 1 });
    assert.equal(store.counts.has('mallory/room'), false);
});
