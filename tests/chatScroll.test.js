import test from 'node:test';
import assert from 'node:assert/strict';
import { isNearChatBottom, getInitialChatScrollTarget, getMessageScrollTop } from '../src/services/chatScroll.js';

test('jump button stays hidden near the bottom and appears while reading history', () => {
    assert.equal(isNearChatBottom({ scrollHeight: 2000, scrollTop: 1400, clientHeight: 600 }), true);
    assert.equal(isNearChatBottom({ scrollHeight: 2000, scrollTop: 1350, clientHeight: 600 }), true);
    assert.equal(isNearChatBottom({ scrollHeight: 2000, scrollTop: 1000, clientHeight: 600 }), false);
});

test('opening a conversation starts at the first unread message when available', () => {
    assert.deepEqual(getInitialChatScrollTarget('incoming-42'), { type: 'unread', messageId: 'incoming-42' });
    assert.deepEqual(getInitialChatScrollTarget(null), { type: 'latest' });
});

test('unread navigation places the divider beneath the top edge without negative scrolling', () => {
    assert.equal(getMessageScrollTop({ scrollTop: 500, containerTop: 100, messageTop: 350 }), 738);
    assert.equal(getMessageScrollTop({ scrollTop: 0, containerTop: 100, messageTop: 105 }), 0);
});
