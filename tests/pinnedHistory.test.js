import test from 'node:test';
import assert from 'node:assert/strict';
import { findPinnedInHistory } from '../src/services/pinnedHistory.js';

test('pinned history search stops as soon as it finds the message', async () => {
    const calls = [];
    const result = await findPinnedInHistory({
        messageId: 'target',
        cursor: 'first',
        fetchPage: async cursor => {
            calls.push(cursor);
            return cursor === 'first'
                ? { messages: [{ id: 'old' }], cursor: 'second', hasMore: true }
                : { messages: [{ id: 'target' }], cursor: 'third', hasMore: true };
        }
    });
    assert.deepEqual(calls, ['first', 'second']);
    assert.equal(result.found, true);
    assert.equal(result.cursor, 'third');
    assert.equal(result.messages.length, 2);
});

test('pinned search stops at its page budget and keeps a resumable cursor', async () => {
    let calls = 0;
    const result = await findPinnedInHistory({
        messageId: 'missing', cursor: 'start', maxPages: 2,
        fetchPage: async () => ({ messages: [{ id: String(++calls) }], cursor: String(calls), hasMore: true })
    });
    assert.equal(result.found, false);
    assert.equal(result.hasMore, true);
    assert.equal(result.cursor, '2');
    assert.equal(calls, 2);
});

test('pinned search does not issue more requests after chat changes', async () => {
    let active = true;
    const result = await findPinnedInHistory({
        messageId: 'target', cursor: 'start',
        isActive: () => active,
        fetchPage: async () => { active = false; return { messages: [{ id: 'target' }], cursor: null, hasMore: false }; }
    });
    assert.equal(result.cancelled, true);
    assert.equal(result.messages.length, 0);
});
