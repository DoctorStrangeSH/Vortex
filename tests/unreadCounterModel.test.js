import test from 'node:test';
import assert from 'node:assert/strict';
import { getUnreadCounterDeltas } from '../server/unreadCounterModel.js';

const participants = ['alice', 'bob', 'charlie'];
const message = { senderId: 'alice', readBy: [] };

test('new message increments unread for recipients, never for the sender', () => {
    assert.deepEqual(getUnreadCounterDeltas(null, message, participants), { bob: 1, charlie: 1 });
});

test('reading by one recipient decrements only that recipient', () => {
    assert.deepEqual(getUnreadCounterDeltas(message, { ...message, readBy: ['bob'] }, participants), { bob: -1 });
    assert.deepEqual(getUnreadCounterDeltas({ ...message, readBy: ['bob'] }, { ...message, readBy: ['bob'] }, participants), {});
});

test('deleting unread messages decrements recipients, not previously read users', () => {
    assert.deepEqual(getUnreadCounterDeltas({ ...message, readBy: ['bob'] }, null, participants), { charlie: -1 });
});

test('edits and reactions do not change counts, duplicate participants count once', () => {
    assert.deepEqual(getUnreadCounterDeltas(message, { ...message, text: 'edited', reactions: { '👍': ['bob'] } }, participants), {});
    assert.deepEqual(getUnreadCounterDeltas(null, message, ['alice', 'bob', 'bob']), { bob: 1 });
});

test('existing readBy on creation does not count already read messages', () => {
    assert.deepEqual(getUnreadCounterDeltas(null, { ...message, readBy: ['bob'] }, participants), { charlie: 1 });
});
