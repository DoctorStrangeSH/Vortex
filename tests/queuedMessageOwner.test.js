import test from 'node:test';
import assert from 'node:assert/strict';
import { assertQueuedMessageOwner } from '../src/services/queuedMessageOwner.js';

test('queued message belongs to the signed-in account', () => {
    assert.doesNotThrow(() => assertQueuedMessageOwner({ user: { uid: 'alice' } }, 'alice'));
});

test('a different account cannot send someone else\'s offline message', () => {
    assert.throws(() => assertQueuedMessageOwner({ user: { uid: 'alice' } }, 'bob'), /исходный аккаунт/);
    assert.throws(() => assertQueuedMessageOwner({ user: { uid: 'alice' } }, null), /исходный аккаунт/);
    assert.throws(() => assertQueuedMessageOwner({ user: {} }, 'alice'), /исходный аккаунт/);
});
