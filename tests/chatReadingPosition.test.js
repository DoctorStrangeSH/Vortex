import test from 'node:test';
import assert from 'node:assert/strict';
import { canRestoreReadingAnchor, getVisibleReadingAnchor, getRememberedReadingPosition, rememberReadingPosition, loadReadingPositions, saveReadingPositions } from '../src/services/chatReadingPosition.js';

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

test('reading checkpoints survive a page reload but are isolated by account', () => {
    const entries = new Map();
    const storage = { getItem: key => entries.get(key) ?? null, setItem: (key, value) => entries.set(key, value) };
    const positions = new Map([['chat-A', { id: 'message-42', offset: 27 }]]);
    assert.equal(saveReadingPositions('alice', positions, storage), true);
    assert.deepEqual([...loadReadingPositions('alice', storage)], [...positions]);
    assert.equal(loadReadingPositions('bob', storage).size, 0);
    assert.equal(loadReadingPositions('', storage).size, 0);
});

test('invalid or blocked session data is ignored without exposing chat state', () => {
    const entries = new Map();
    const storage = { getItem: key => entries.get(key) ?? null, setItem: (key, value) => entries.set(key, value) };
    entries.set('vortex:reading-positions:v1:alice', '{broken');
    assert.equal(loadReadingPositions('alice', storage).size, 0);
    entries.set('vortex:reading-positions:v1:alice', JSON.stringify({ version: 1, items: [
        ['valid', { id: 'm1', offset: 12 }],
        ['bad', { id: 'm2', offset: -1 }],
        ['invalid', { id: 'm3', offset: 'many' }]
    ] }));
    assert.deepEqual([...loadReadingPositions('alice', storage)], [['valid', { id: 'm1', offset: 12 }]]);
    const blocked = { getItem: () => { throw new Error('blocked'); }, setItem: () => { throw new Error('blocked'); } };
    assert.equal(loadReadingPositions('alice', blocked).size, 0);
    assert.equal(saveReadingPositions('alice', new Map(), blocked), false);
});
