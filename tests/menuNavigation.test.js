import test from 'node:test';
import assert from 'node:assert/strict';
import { getNextMenuItemIndex } from '../src/utils/menuNavigation.js';

test('ArrowDown advances and wraps to the first menu item', () => {
    assert.equal(getNextMenuItemIndex('ArrowDown', 0, 2), 1);
    assert.equal(getNextMenuItemIndex('ArrowDown', 1, 2), 0);
});

test('ArrowUp moves backward and wraps to the last menu item', () => {
    assert.equal(getNextMenuItemIndex('ArrowUp', 1, 2), 0);
    assert.equal(getNextMenuItemIndex('ArrowUp', 0, 2), 1);
});

test('Home and End focus the first and last menu items', () => {
    assert.equal(getNextMenuItemIndex('Home', 1, 2), 0);
    assert.equal(getNextMenuItemIndex('End', 0, 2), 1);
});

test('unknown keys and empty menus are ignored', () => {
    assert.equal(getNextMenuItemIndex('Escape', 0, 2), -1);
    assert.equal(getNextMenuItemIndex('ArrowDown', 0, 0), -1);
});
