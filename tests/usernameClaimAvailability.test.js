import test from 'node:test';
import assert from 'node:assert/strict';
import { isUsernameClaimAvailable } from '../src/services/usernameClaimAvailability.js';

test('an unused username claim is available', () => {
    assert.equal(isUsernameClaimAvailable({ exists: false, data: null }), true);
});

test('a username already claimed by the account being resumed remains available', () => {
    assert.equal(isUsernameClaimAvailable({ exists: true, data: { uid: 'alice' } }, 'alice'), true);
});

test('a username claimed by another account is unavailable', () => {
    assert.equal(isUsernameClaimAvailable({ exists: true, data: { uid: 'bob' } }, 'alice'), false);
});

test('an existing claim is unavailable when no authenticated owner is supplied', () => {
    assert.equal(isUsernameClaimAvailable({ exists: true, data: { uid: 'alice' } }), false);
});

test('a malformed existing claim is never treated as available', () => {
    assert.equal(isUsernameClaimAvailable({ exists: true, data: {} }, 'alice'), false);
});
