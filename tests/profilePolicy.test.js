import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeDisplayName } from '../src/services/profilePolicy.js';
import { normalizeUsername } from '../src/services/usernamePolicy.js';

test('display name is trimmed before it is persisted', () => {
    assert.equal(normalizeDisplayName('  Sherlock Holmes  '), 'Sherlock Holmes');
});

test('display name accepts the Firestore maximum length', () => {
    assert.equal(normalizeDisplayName('A'.repeat(80)).length, 80);
});

test('display name rejects empty, short, non-string and oversized values', () => {
    for (const value of ['', ' A ', 'A'.repeat(81), null, 42]) {
        assert.throws(() => normalizeDisplayName(value));
    }
});

test('username is validated before account creation', () => {
    assert.equal(normalizeUsername(' Sherlock_123 '), 'sherlock_123');
    for (const value of ['', 'ab', 'invalid name', 'a'.repeat(25), 'path/name']) {
        assert.throws(() => normalizeUsername(value));
    }
});
