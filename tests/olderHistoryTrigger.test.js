import test from 'node:test';
import assert from 'node:assert/strict';
import { shouldLoadOlderMessages } from '../src/services/olderHistoryTrigger.js';

const ready = {
    initialized: true, loading: false, hasMore: true, hasCursor: true
};

test('older history loads near the top, including the boundary', () => {
    assert.equal(shouldLoadOlderMessages({ ...ready, scrollTop: 0 }), true);
    assert.equal(shouldLoadOlderMessages({ ...ready, scrollTop: 160 }), true);
    assert.equal(shouldLoadOlderMessages({ ...ready, scrollTop: 161 }), false);
});

test('older history does not load before initialization or while a page is pending', () => {
    assert.equal(shouldLoadOlderMessages({ ...ready, initialized: false, scrollTop: 10 }), false);
    assert.equal(shouldLoadOlderMessages({ ...ready, loading: true, scrollTop: 10 }), false);
    assert.equal(shouldLoadOlderMessages({ ...ready, hasMore: false, scrollTop: 10 }), false);
    assert.equal(shouldLoadOlderMessages({ ...ready, hasCursor: false, scrollTop: 10 }), false);
    assert.equal(shouldLoadOlderMessages({ ...ready, scrollTop: Number.NaN }), false);
});
