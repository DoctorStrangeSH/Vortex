import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeUsername } from '../src/services/usernamePolicy.js';

test('normalizes username, case and optional @ prefix', () => {
    assert.equal(normalizeUsername(' @Sherlock_123 '), 'sherlock_123');
});

test('rejects invalid usernames and forbidden path characters', () => {
    for (const invalid of ['', 'ab', 'slash/path', 'name with spaces', 'a'.repeat(25)]) {
        assert.throws(() => normalizeUsername(invalid));
    }
});
