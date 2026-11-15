import test from 'node:test';
import assert from 'node:assert/strict';
import { getSwipeDirection } from '../src/hooks/useSwipe.js';

test('horizontal gestures need an intentional travel distance', () => {
    assert.equal(getSwipeDirection(-80, 10), 'left');
    assert.equal(getSwipeDirection(92, 0), 'right');
    assert.equal(getSwipeDirection(-79, 0), null);
});

test('scrolling vertically or diagonally does not trigger a reply', () => {
    assert.equal(getSwipeDirection(-110, 120), null);
    assert.equal(getSwipeDirection(100, -100), null);
    assert.equal(getSwipeDirection(0, 120), null);
});

test('invalid coordinates and thresholds never trigger a gesture', () => {
    assert.equal(getSwipeDirection(Number.NaN, 0), null);
    assert.equal(getSwipeDirection(-100, 0, 0), null);
    assert.equal(getSwipeDirection(-100, Number.POSITIVE_INFINITY), null);
});
