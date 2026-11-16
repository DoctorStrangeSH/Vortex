import test from 'node:test';
import assert from 'node:assert/strict';
import { getNewIncomingIds, getUnreadIncomingIds, getFirstUnreadIncomingId, shouldPlayIncomingSound, shouldMarkMessagesRead, isMessageVisible, rememberRecentMessageIds } from '../src/services/messageActivity.js';

test('new incoming messages notify once, not on edits or receipt changes', () => {
    const previous = new Set(['m1', 'm2']);
    const messages = [{ id: 'm1', senderId: 'friend', text: 'Изменено' }, { id: 'm2', senderId: 'me' }, { id: 'm3', senderId: 'friend' }, { id: 'm4', senderId: 'me' }];
    assert.deepEqual(getNewIncomingIds(previous, messages, 'me'), ['m3']);
    assert.deepEqual(getNewIncomingIds(new Set(messages.map(message => message.id)), messages, 'me'), []);
});

test('previously read messages resurfacing in a page do not trigger a second alert', () => {
    const previous = new Set(['most-recent']);
    const messages = [
        { id: 'old-read', senderId: 'friend', readBy: ['me'] },
        { id: 'most-recent', senderId: 'friend', readBy: ['me'] },
        { id: 'new-unread', senderId: 'friend', readBy: [] },
        { id: 'own', senderId: 'me', readBy: [] }
    ];
    assert.deepEqual(getNewIncomingIds(previous, messages, 'me'), ['new-unread']);
});

test('old unread messages entering a shifted history window do not trigger alerts', () => {
    const previous = new Set(['recent-1', 'recent-2']);
    const messages = [
        { id: 'older-unread', senderId: 'friend', readBy: [] },
        { id: 'recent-1', senderId: 'friend', readBy: [] },
        { id: 'recent-2', senderId: 'me', readBy: [] },
        { id: 'brand-new', senderId: 'friend', readBy: [] }
    ];
    assert.deepEqual(getNewIncomingIds(previous, messages, 'me'), ['brand-new']);
});

test('new page with no overlapping IDs still detects incoming messages', () => {
    assert.deepEqual(getNewIncomingIds(new Set(['old-id']), [
        { id: 'fresh-1', senderId: 'friend', readBy: [] },
        { id: 'fresh-2', senderId: 'me', readBy: [] }
    ], 'me'), ['fresh-1']);
});

test('a returning message does not trigger another notification after disappearing from the recent window', () => {
    let seen = rememberRecentMessageIds(null, [{ id: 'old', senderId: 'friend' }, { id: 'recent', senderId: 'friend' }]);
    seen = rememberRecentMessageIds(seen, [{ id: 'recent', senderId: 'friend' }, { id: 'latest', senderId: 'friend' }]);
    assert.deepEqual(getNewIncomingIds(seen, [
        { id: 'recent', senderId: 'friend' },
        { id: 'old', senderId: 'friend' },
        { id: 'latest', senderId: 'friend' },
        { id: 'brand-new', senderId: 'friend' }
    ], 'me'), ['brand-new']);
});

test('remembered notification IDs stay bounded and keep recently active IDs', () => {
    const previous = new Set(['first', 'second', 'third']);
    const result = rememberRecentMessageIds(previous, [{ id: 'first' }, { id: 'fourth' }], 3);
    assert.deepEqual([...result], ['third', 'first', 'fourth']);
    assert.deepEqual([...previous], ['first', 'second', 'third'], 'the earlier snapshot is not mutated');
    assert.deepEqual([...rememberRecentMessageIds(result, [{ id: 'fifth' }], 3)], ['first', 'fourth', 'fifth']);
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

test('unread boundary is the oldest unread incoming message in chronological order', () => {
    const items = [{ id: '1', senderId: 'me' }, { id: '2', senderId: 'friend', readBy: ['me'] }, { id: '3', senderId: 'friend' }, { id: '4', senderId: 'friend' }];
    assert.equal(getFirstUnreadIncomingId(items, 'me'), '3');
    assert.equal(getFirstUnreadIncomingId(items.slice(0, 2), 'me'), null);
});

test('read receipts wait until the conversation tab is visible and focused', () => {
    assert.equal(shouldMarkMessagesRead({ visibilityState: 'hidden', hasFocus: false }), false);
    assert.equal(shouldMarkMessagesRead({ visibilityState: 'visible', hasFocus: false }), false);
    assert.equal(shouldMarkMessagesRead({ visibilityState: 'visible', hasFocus: true }), true);
});

test('a message outside the scroll viewport must not be marked read', () => {
    const viewport = { top: 100, bottom: 500 };
    assert.equal(isMessageVisible({ top: 520, bottom: 560 }, viewport), false);
    assert.equal(isMessageVisible({ top: 20, bottom: 90 }, viewport), false);
    assert.equal(isMessageVisible({ top: 480, bottom: 520 }, viewport), true);
    assert.equal(isMessageVisible({ top: 497, bottom: 540 }, viewport), false);
    assert.equal(isMessageVisible({ top: 200, bottom: 400 }, viewport), true);
});

test('unread boundary advances and disappears as server receipts arrive', () => {
    const messages = [
        { id: 'first', senderId: 'friend', readBy: [] },
        { id: 'second', senderId: 'friend', readBy: [] },
        { id: 'own', senderId: 'me', readBy: [] }
    ];
    assert.equal(getFirstUnreadIncomingId(messages, 'me'), 'first');
    messages[0].readBy = ['me'];
    assert.equal(getFirstUnreadIncomingId(messages, 'me'), 'second');
    messages[1].readBy = ['me'];
    assert.equal(getFirstUnreadIncomingId(messages, 'me'), null);
});
