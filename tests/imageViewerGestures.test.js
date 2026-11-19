import test from 'node:test';
import assert from 'node:assert/strict';
import { getImageSwipeDirection } from '../src/services/imageViewerGestures.js';

test('horizontal swipe advances or rewinds images', () => {
    assert.equal(getImageSwipeDirection({ x: 240, y: 100 }, { x: 100, y: 112 }), 1);
    assert.equal(getImageSwipeDirection({ x: 80, y: 100 }, { x: 200, y: 108 }), -1);
});

test('vertical movement, small gestures, and zoomed images do not navigate', () => {
    assert.equal(getImageSwipeDirection({ x: 200, y: 100 }, { x: 175, y: 190 }), 0);
    assert.equal(getImageSwipeDirection({ x: 200, y: 100 }, { x: 169, y: 103 }), 0);
    assert.equal(getImageSwipeDirection({ x: 200, y: 100 }, { x: 70, y: 105 }, 2), 0);
    assert.equal(getImageSwipeDirection(null, { x: 0, y: 0 }), 0);
});
