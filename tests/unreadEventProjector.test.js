import test from 'node:test';
import assert from 'node:assert/strict';
import { projectUnreadEvent } from '../server/unreadEventProjector.js';

function fakeTransactionalStore() {
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

test('read and delete events reconcile with creation without decrementing twice', async () => {
    const store = fakeTransactionalStore();
    await projectUnreadEvent(store, { eventId: 'create', chatId: 'room', after: data, participants });
    await projectUnreadEvent(store, { eventId: 'read', chatId: 'room', before: data, after: { ...data, readBy: ['bob'] }, participants });
    await projectUnreadEvent(store, { eventId: 'delete', chatId: 'room', before: { ...data, readBy: ['bob'] }, participants });
    await projectUnreadEvent(store, { eventId: 'delete', chatId: 'room', before: { ...data, readBy: ['bob'] }, participants });
    assert.deepEqual(Object.fromEntries(store.counts), { 'bob/room': 0, 'charlie/room': 0 });
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
    await assert.rejects(projectUnreadEvent(store, { eventId: 'x', chatId: 'room' }), /participants/);
});
