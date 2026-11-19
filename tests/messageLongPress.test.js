import test from 'node:test';
import assert from 'node:assert/strict';
import { shouldCancelLongPress, shouldSuppressMessageClick } from '../src/services/messageLongPress.js';

test('moving a finger to scroll cancels long press selection', () => {
    assert.equal(shouldCancelLongPress(100, 100, 100, 113), true);
    assert.equal(shouldCancelLongPress(100, 100, 80, 100), true);
    assert.equal(shouldCancelLongPress(100, 100, 108, 108), false);
});

test('invalid touches cannot activate long press', () => {
    assert.equal(shouldCancelLongPress(0, 0, NaN, 5), true);
    assert.equal(shouldCancelLongPress(0, 0, 1, 1, -1), true);
});

test('synthetic click following a hold cannot deselect the held message', () => {
    const suppression = { messageId: 'message-a', expiresAt: 900 };
    assert.equal(shouldSuppressMessageClick('message-a', suppression, 899), true);
    assert.equal(shouldSuppressMessageClick('message-b', suppression, 899), false);
    assert.equal(shouldSuppressMessageClick('message-a', suppression, 901), false);
    assert.equal(shouldSuppressMessageClick('message-a', null, 800), false);
});
