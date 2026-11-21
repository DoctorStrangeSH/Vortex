import test from 'node:test';
import assert from 'node:assert/strict';
import { getNextAuthTabIndex } from '../src/utils/authTabs.js';

test('ArrowRight moves to the next tab and wraps to the first', () => {
    assert.equal(getNextAuthTabIndex('ArrowRight', 0, 2), 1);
    assert.equal(getNextAuthTabIndex('ArrowRight', 1, 2), 0);
});

test('ArrowLeft moves to the previous tab and wraps to the last', () => {
    assert.equal(getNextAuthTabIndex('ArrowLeft', 1, 2), 0);
    assert.equal(getNextAuthTabIndex('ArrowLeft', 0, 2), 1);
});

test('Home and End move to the first and last tabs', () => {
    assert.equal(getNextAuthTabIndex('Home', 1, 2), 0);
    assert.equal(getNextAuthTabIndex('End', 0, 2), 1);
});

test('unhandled keys and empty tab lists are ignored', () => {
    assert.equal(getNextAuthTabIndex('Escape', 0, 2), -1);
    assert.equal(getNextAuthTabIndex('ArrowRight', 0, 0), -1);
});
