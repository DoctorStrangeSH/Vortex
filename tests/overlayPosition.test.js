import test from 'node:test';
import assert from 'node:assert/strict';
import { clampOverlayPosition } from '../src/services/overlayPosition.js';

test('popover positions stay inside the viewport', () => {
    assert.deepEqual(clampOverlayPosition(-100, -50, 200, 260, 390, 800), { x: 8, y: 8 });
    assert.deepEqual(clampOverlayPosition(900, 900, 200, 260, 390, 800), { x: 182, y: 532 });
    assert.deepEqual(clampOverlayPosition(200, 300, 200, 260, 390, 800), { x: 182, y: 300 });
});

test('oversized popovers use the minimum safe offset', () => {
    assert.deepEqual(clampOverlayPosition(80, 90, 250, 260, 210, 220), { x: 8, y: 8 });
    assert.deepEqual(clampOverlayPosition(NaN, Infinity, 90, 60, 320, 240), { x: 8, y: 8 });
});
