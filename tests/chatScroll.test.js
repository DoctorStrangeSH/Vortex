import test from 'node:test';
import assert from 'node:assert/strict';
import { isNearChatBottom } from '../src/services/chatScroll.js';

test('jump button stays hidden near the bottom and appears while reading history', () => {
    assert.equal(isNearChatBottom({ scrollHeight: 2000, scrollTop: 1400, clientHeight: 600 }), true);
    assert.equal(isNearChatBottom({ scrollHeight: 2000, scrollTop: 1350, clientHeight: 600 }), true);
    assert.equal(isNearChatBottom({ scrollHeight: 2000, scrollTop: 1000, clientHeight: 600 }), false);
});
