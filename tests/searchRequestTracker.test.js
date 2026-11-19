import test from 'node:test';
import assert from 'node:assert/strict';
import { createSearchRequestTracker } from '../src/services/searchRequestTracker.js';

test('only latest search may update results, even when requests resolve out of order', () => {
    const tracker = createSearchRequestTracker();
    const old = tracker.issue();
    const next = tracker.issue();
    assert.equal(tracker.isCurrent(old), false);
    assert.equal(tracker.isCurrent(next), true);
});

test('clearing search or switching accounts invalidates pending responses', () => {
    const tracker = createSearchRequestTracker();
    const pending = tracker.issue();
    tracker.invalidate();
    assert.equal(tracker.isCurrent(pending), false);
    const newSearch = tracker.issue();
    assert.equal(tracker.isCurrent(newSearch), true);
});

test('unmount prevents late responses from updating component state', () => {
    const tracker = createSearchRequestTracker();
    const pending = tracker.issue();
    tracker.dispose();
    assert.equal(tracker.isCurrent(pending), false);
    assert.equal(tracker.issue(), null);
    assert.equal(tracker.isCurrent(null), false);
});
