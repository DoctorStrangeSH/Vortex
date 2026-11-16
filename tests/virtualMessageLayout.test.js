import test from 'node:test';
import assert from 'node:assert/strict';
import { buildMessageOffsets, getVisibleMessageRange, indexMessagesById, shouldUpdateMeasuredHeight, scrollAnchorAdjustment, getMessageNavigationTop, getPrependedScrollOffset } from '../src/services/virtualMessageLayout.js';

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

test('invalid resize observations cannot repeatedly invalidate virtual layout', () => {
    assert.equal(shouldUpdateMeasuredHeight(NaN, 72), false);
    assert.equal(shouldUpdateMeasuredHeight(Infinity, 72), false);
    assert.equal(shouldUpdateMeasuredHeight(0, 72), false);
    assert.equal(shouldUpdateMeasuredHeight(-20, 72), false);
    assert.equal(shouldUpdateMeasuredHeight(72.2, 72), false);
    assert.equal(shouldUpdateMeasuredHeight(120, 72), true);
    assert.equal(shouldUpdateMeasuredHeight(52, 72), true);
});

test('resizing rows above the viewport preserves scroll anchoring', () => {
    assert.equal(scrollAnchorAdjustment(200, 300, 72, 120), 48);
    assert.equal(scrollAnchorAdjustment(300, 300, 120, 70), -50);
    assert.equal(scrollAnchorAdjustment(340, 300, 72, 120), 0);
    assert.equal(scrollAnchorAdjustment(200, 300, 72, NaN), 0);
});

test('navigation targets unread and pinned messages with safe viewport clamping', () => {
    const messages = [{ id: 'a' }, { id: 'unread' }, { id: 'pinned' }, { id: 'z' }];
    const offsets = [0, 100, 300, 420, 600];
    assert.equal(getMessageNavigationTop(messages, offsets, 'unread', 240, 'start'), 100);
    assert.equal(getMessageNavigationTop(messages, offsets, 'pinned', 240, 'center'), 240);
    assert.equal(getMessageNavigationTop(messages, offsets, 'z', 240, 'end'), 360);
    assert.equal(getMessageNavigationTop(messages, offsets, 'a', 240, 'center'), 0);
    assert.equal(getMessageNavigationTop(messages, offsets, 'missing', 240), null);
});

test('prepending older history preserves the visible scroll anchor', () => {
    const messages = [{ id: 'old-1' }, { id: 'old-2' }, { id: 'first' }, { id: 'last' }];
    const offsets = [0, 60, 160, 260, 360];
    assert.equal(getPrependedScrollOffset('first', messages, offsets), 160);
    assert.equal(getPrependedScrollOffset('old-1', messages, offsets), 0);
    assert.equal(getPrependedScrollOffset('missing', messages, offsets), 0);
    assert.equal(getPrependedScrollOffset(null, messages, offsets), 0);
    assert.equal(getPrependedScrollOffset('first', messages, [0, 10]), 0);
});
