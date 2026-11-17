import test from 'node:test';
import assert from 'node:assert/strict';
import { canRestoreReadingAnchor, getVisibleReadingAnchor, getRememberedReadingPosition, rememberReadingPosition } from '../src/services/chatReadingPosition.js';

test('reading anchor chooses the first message intersecting the viewport', () => {
    const rows = [
        { dataset: { messageId: 'offscreen' }, getBoundingClientRect: () => ({ top: -100, bottom: -5 }) },
        { dataset: { messageId: 'message-42' }, getBoundingClientRect: () => ({ top: -5, bottom: 65 }) },
        { dataset: { messageId: 'message-43' }, getBoundingClientRect: () => ({ top: 65, bottom: 145 }) }
    ];
    const container = {
        getBoundingClientRect: () => ({ top: 0, bottom: 120 }),
        querySelectorAll: () => rows
    };
    assert.equal(getVisibleReadingAnchor(container), 'message-42');
    assert.equal(getVisibleReadingAnchor(null), null);
});

test('reading positions remain per chat and are bounded', () => {
    const positions = new Map();
    rememberReadingPosition(positions, 'first', 'message-42', 2);
    rememberReadingPosition(positions, 'second', 'message-70', 2);
    rememberReadingPosition(positions, 'third', 'message-99', 2);
    assert.equal(getRememberedReadingPosition(positions, 'first'), null);
    assert.equal(getRememberedReadingPosition(positions, 'second'), 'message-70');
    assert.equal(getRememberedReadingPosition(positions, 'third'), 'message-99');
    rememberReadingPosition(positions, 'second', null, 2);
    assert.equal(getRememberedReadingPosition(positions, 'second'), null);
});

test('restoration is skipped when the message is no longer in loaded history', () => {
    assert.equal(canRestoreReadingAnchor('message-42', [{ id: 'message-42' }]), true);
    assert.equal(canRestoreReadingAnchor('message-42', [{ id: 'message-43' }]), false);
    assert.equal(canRestoreReadingAnchor(null, [{ id: 'message-42' }]), false);
});
