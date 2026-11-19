import test from 'node:test';
import assert from 'node:assert/strict';
import { mergeMessagePages } from '../src/services/messagePagination.js';

const message = (id, millis, text = id) => ({ id, text, createdAt: { toMillis: () => millis } });

test('merges previous pages and live messages chronologically', () => {
    const result = mergeMessagePages([message('a', 1), message('b', 2)], [message('c', 3)]);
    assert.deepEqual(result.map(item => item.id), ['a', 'b', 'c']);
});

test('deduplicates overlaps and keeps latest message data', () => {
    const result = mergeMessagePages([message('a', 1, 'old')], [message('a', 1, 'updated')]);
    assert.equal(result.length, 1);
    assert.equal(result[0].text, 'updated');
});
