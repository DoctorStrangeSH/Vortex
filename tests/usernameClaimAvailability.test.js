import test from 'node:test';
import assert from 'node:assert/strict';
import { isUsernameClaimAvailable } from '../src/services/usernameClaimAvailability.js';

test('an unused username claim is available', () => {
    assert.equal(isUsernameClaimAvailable({ exists: false, data: null }), true);
});

test('a username already claimed by the account being resumed remains available', () => {
    assert.equal(isUsernameClaimAvailable({ exists: true, data: { uid: 'alice', username: 'alice_legacy' } }, 'alice', 'alice_legacy'), true);
});

test('a same-owner claim with a mismatched username is unavailable', () => {
    assert.equal(isUsernameClaimAvailable(
        { exists: true, data: { uid: 'alice', username: 'different_name' } },
        'alice',
        'alice_legacy'
    ), false);
});

test('a username claimed by another account is unavailable', () => {
    assert.equal(isUsernameClaimAvailable({ exists: true, data: { uid: 'bob', username: 'alice_legacy' } }, 'alice', 'alice_legacy'), false);
});

test('an existing claim is unavailable when no authenticated owner is supplied', () => {
    assert.equal(isUsernameClaimAvailable({ exists: true, data: { uid: 'alice', username: 'alice_legacy' } }), false);
});

test('a malformed existing claim is never treated as available', () => {
    assert.equal(isUsernameClaimAvailable({ exists: true, data: {} }, 'alice', 'alice_legacy'), false);
});
