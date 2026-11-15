import test from 'node:test';
import assert from 'node:assert/strict';
import { groupChatMessages } from '../src/services/chatGrouping.js';

function message(id, iso) {
    return { id, createdAt: iso ? { toDate: () => new Date(iso) } : null };
}

test('messages on the same calendar day share one date divider', () => {
    const first = message('a', '2026-11-15T08:00:00.000Z');
    const second = message('b', '2026-11-15T16:00:00.000Z');
    const result = groupChatMessages([first, second]);
    assert.deepEqual(result.map(row => row.type), ['date', 'message', 'message']);
    assert.equal(result[1].data, first);
    assert.equal(result[2].data, second);
});

test('a different day adds another divider and empty histories stay empty', () => {
    assert.deepEqual(groupChatMessages([]), []);
    const result = groupChatMessages([message('a', '2026-11-14T12:00:00.000Z'), message('b', '2026-11-15T12:00:00.000Z')]);
    assert.deepEqual(result.map(row => row.type), ['date', 'message', 'date', 'message']);
});

test('pending messages without timestamps retain their original order', () => {
    const result = groupChatMessages([message('first'), message('second')]);
    assert.deepEqual(result.map(row => row.type), ['date', 'message', 'message']);
    assert.deepEqual(result.filter(row => row.type === 'message').map(row => row.data.id), ['first', 'second']);
});
