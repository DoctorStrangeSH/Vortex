import test from 'node:test';
import assert from 'node:assert/strict';
import { getNewIncomingIds, getUnreadIncomingIds, shouldPlayIncomingSound } from '../src/services/messageActivity.js';

test('new incoming messages notify once, not on edits or receipt changes', () => {
    const previous = new Set(['m1', 'm2']);
    const messages = [{ id: 'm1', senderId: 'friend', text: 'Изменено' }, { id: 'm2', senderId: 'me' }, { id: 'm3', senderId: 'friend' }, { id: 'm4', senderId: 'me' }];
    assert.deepEqual(getNewIncomingIds(previous, messages, 'me'), ['m3']);
    assert.deepEqual(getNewIncomingIds(new Set(messages.map(message => message.id)), messages, 'me'), []);
});

test('read receipts include only unread incoming messages not already attempted', () => {
    const messages = [{ id: 'a', senderId: 'friend' }, { id: 'b', senderId: 'friend', readBy: ['me'] }, { id: 'c', senderId: 'me' }, { id: 'd', senderId: 'friend' }];
    assert.deepEqual(getUnreadIncomingIds(messages, 'me', new Set(['d'])), ['a']);
});

test('background and unfocused tabs do not play duplicate in-app sounds', () => {
    assert.equal(shouldPlayIncomingSound({ visibilityState: 'visible', hasFocus: true }), true);
    assert.equal(shouldPlayIncomingSound({ visibilityState: 'visible', hasFocus: false }), false);
    assert.equal(shouldPlayIncomingSound({ visibilityState: 'hidden', hasFocus: true }), false);
});
