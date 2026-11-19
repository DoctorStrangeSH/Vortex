import test from 'node:test';
import assert from 'node:assert/strict';
import { mapFirestoreMessageEvent } from '../server/mapFirestoreMessageEvent.js';

const snapshot = value => ({ exists: value !== null, data: () => value });

test('maps create events and obtains participants only from trusted chat snapshot', () => {
    const event = mapFirestoreMessageEvent({ eventId: 'event-1', chatId: 'room-1', beforeSnapshot: snapshot(null), afterSnapshot: snapshot({ senderId: 'alice', readBy: [], participants: ['mallory'] }), chatSnapshot: snapshot({ participants: ['alice', 'bob'] }) });
    assert.equal(event.before, null);
    assert.deepEqual(event.participants, ['alice', 'bob']);
});

test('maps read receipt updates without trusting message-supplied recipients', () => {
    const event = mapFirestoreMessageEvent({ eventId: 'event-2', chatId: 'room-1', beforeSnapshot: snapshot({ senderId: 'alice', readBy: [] }), afterSnapshot: snapshot({ senderId: 'alice', readBy: ['bob'], participants: ['mallory'] }), chatSnapshot: snapshot({ participants: ['alice', 'bob', 'charlie'] }) });
    assert.deepEqual(event.participants, ['alice', 'bob', 'charlie']);
    assert.deepEqual(event.before.readBy, []);
    assert.deepEqual(event.after.readBy, ['bob']);
});

test('maps delete events from the before snapshot', () => {
    const event = mapFirestoreMessageEvent({ eventId: 'event-3', chatId: 'room-1', beforeSnapshot: snapshot({ senderId: 'alice', readBy: [] }), afterSnapshot: snapshot(null), chatSnapshot: snapshot({ participants: ['alice', 'bob'] }) });
    assert.equal(event.after, null);
    assert.deepEqual(event.before, { senderId: 'alice', readBy: [] });
});

test('rejects missing chat snapshot rather than accepting client participants', () => {
    assert.throws(() => mapFirestoreMessageEvent({ eventId: 'event-4', chatId: 'room-1', beforeSnapshot: snapshot(null), afterSnapshot: snapshot({ senderId: 'alice', participants: ['alice', 'mallory'] }), chatSnapshot: null }), /trusted chat snapshot/);
});

test('rejects malformed and duplicate trusted participants', () => {
    const base = { eventId: 'event-5', chatId: 'room-1', beforeSnapshot: snapshot(null), afterSnapshot: snapshot({ senderId: 'alice' }) };
    assert.throws(() => mapFirestoreMessageEvent({ ...base, chatSnapshot: snapshot({ participants: ['alice', 'alice'] }) }), /duplicate/);
    assert.throws(() => mapFirestoreMessageEvent({ ...base, chatSnapshot: snapshot({ participants: ['alice/bob'] }) }), /invalid participant/);
    assert.throws(() => mapFirestoreMessageEvent({ ...base, chatSnapshot: snapshot({ participants: [] }) }), /1 to 100/);
});

test('rejects malformed event identity and message read receipts', () => {
    const chatSnapshot = snapshot({ participants: ['alice', 'bob'] });
    assert.throws(() => mapFirestoreMessageEvent({ eventId: 'bad/event', chatId: 'room-1', beforeSnapshot: snapshot(null), afterSnapshot: snapshot({ senderId: 'alice' }), chatSnapshot }), /event ID/);
    assert.throws(() => mapFirestoreMessageEvent({ eventId: 'event-6', chatId: 'room-1', beforeSnapshot: snapshot(null), afterSnapshot: snapshot({ senderId: 'alice', readBy: 'bob' }), chatSnapshot }), /readBy/);
});