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
    assert.deepEqual(getVisibleReadingAnchor(container), { id: 'message-42', offset: 5 });
    assert.equal(getVisibleReadingAnchor(null), null);
});

test('reading positions remain per chat and are bounded', () => {
    const positions = new Map();
    rememberReadingPosition(positions, 'first', { id: 'message-42', offset: 5 }, 2);
    rememberReadingPosition(positions, 'second', { id: 'message-70', offset: 26 }, 2);
    rememberReadingPosition(positions, 'third', { id: 'message-99', offset: 0 }, 2);
    assert.equal(getRememberedReadingPosition(positions, 'first'), null);
    assert.deepEqual(getRememberedReadingPosition(positions, 'second'), { id: 'message-70', offset: 26 });
    assert.deepEqual(getRememberedReadingPosition(positions, 'third'), { id: 'message-99', offset: 0 });
    rememberReadingPosition(positions, 'second', null, 2);
    assert.equal(getRememberedReadingPosition(positions, 'second'), null);
});

test('restoration is skipped when the message is no longer in loaded history', () => {
    assert.equal(canRestoreReadingAnchor({ id: 'message-42', offset: 5 }, [{ id: 'message-42' }]), true);
    assert.equal(canRestoreReadingAnchor({ id: 'message-42', offset: 5 }, [{ id: 'message-43' }]), false);
    assert.equal(canRestoreReadingAnchor(null, [{ id: 'message-42' }]), false);
});
