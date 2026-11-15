import test from 'node:test';
import assert from 'node:assert/strict';
import { buildMessageOffsets, getVisibleMessageRange, indexMessagesById } from '../src/services/virtualMessageLayout.js';

test('uses measured heights and falls back to estimates', () => {
    const messages = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];
    assert.deepEqual(buildMessageOffsets(messages, new Map([['a', 40], ['b', 200]])), [0, 40, 240, 312]);
});

test('ignores invalid cached heights and handles empty lists', () => {
    assert.deepEqual(buildMessageOffsets([{ id: 'a' }], new Map([['a', -1]])), [0, 72]);
    assert.deepEqual(getVisibleMessageRange([0], 20, 200), { start: 0, end: 0 });
});

test('selects variable-height rows with bounded overscan', () => {
    const offsets = [0, 20, 220, 240, 600, 630];
    assert.deepEqual(getVisibleMessageRange(offsets, 230, 30, 0), { start: 2, end: 4 });
    assert.deepEqual(getVisibleMessageRange(offsets, 230, 30, 1), { start: 1, end: 5 });
});

test('clamps out-of-range scrolling and includes the last row', () => {
    const offsets = [0, 10, 20];
    assert.deepEqual(getVisibleMessageRange(offsets, -50, 5, 0), { start: 0, end: 1 });
    assert.deepEqual(getVisibleMessageRange(offsets, 1000, 40, 0), { start: 1, end: 2 });
});

test('message index resolves late measurements without scanning large histories', () => {
    const messages = Array.from({ length: 10000 }, (_, index) => ({ id: 'message-' + index }));
    const byId = indexMessagesById(messages);
    assert.equal(byId.size, 10000);
    assert.equal(byId.get('message-9999'), 9999);
    assert.equal(byId.get('message-0'), 0);
    assert.equal(byId.get('missing'), undefined);
});
