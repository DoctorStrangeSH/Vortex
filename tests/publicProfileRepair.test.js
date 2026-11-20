import test from 'node:test';
import assert from 'node:assert/strict';
import { planPublicProfileRepair } from '../src/services/publicProfileRepair.js';

const legacyProfile = {
    uid: 'alice',
    username: 'alice_legacy',
    displayName: 'Alice',
    bio: 'Hello'
};

test('claims a missing canonical legacy username before publishing the public profile', () => {
    const plan = planPublicProfileRepair(legacyProfile, { exists: false, data: null }, false);
    assert.equal(plan.status, 'ready');
    assert.equal(plan.createPublicProfile, true);
    assert.deepEqual(plan.publicProfile, {
        uid: 'alice',
        username: 'alice_legacy',
        displayName: 'Alice',
        bio: 'Hello'
    });
    assert.equal(plan.createUsernameClaim, true);
    assert.deepEqual(plan.usernameClaim, { uid: 'alice', username: 'alice_legacy' });
    assert.equal(plan.removeLegacyClaimEmail, false);
});

test('removes legacy email only from a username claim already owned by the same UID', () => {
    const plan = planPublicProfileRepair(
        legacyProfile,
        { exists: true, data: { uid: 'alice', username: 'alice_legacy', email: 'alice@example.test' } },
        false
    );
    assert.equal(plan.status, 'ready');
    assert.equal(plan.createUsernameClaim, false);
    assert.equal(plan.removeLegacyClaimEmail, true);
});

test('does not publish a legacy profile when another UID owns its username claim', () => {
    const plan = planPublicProfileRepair(
        legacyProfile,
        { exists: true, data: { uid: 'bob', username: 'alice_legacy' } },
        false
    );
    assert.deepEqual(plan, { status: 'skipped', reason: 'username_claim_conflict' });
});

test('does not rewrite non-canonical legacy usernames under the current immutable profile rules', () => {
    const plan = planPublicProfileRepair(
        { ...legacyProfile, username: 'Alice_Legacy' },
        { exists: false, data: null },
        false
    );
    assert.deepEqual(plan, { status: 'skipped', reason: 'non_canonical_legacy_username' });
});

test('does not publish malformed legacy usernames', () => {
    const plan = planPublicProfileRepair(
        { ...legacyProfile, username: 'not valid/name' },
        null,
        false
    );
    assert.deepEqual(plan, { status: 'skipped', reason: 'invalid_legacy_username' });
});

test('does not rewrite an existing public profile but can still remove the owned legacy email', () => {
    const plan = planPublicProfileRepair(
        legacyProfile,
        { exists: true, data: { uid: 'alice', username: 'alice_legacy', email: 'alice@example.test' } },
        true
    );
    assert.equal(plan.createPublicProfile, false);
    assert.equal(plan.removeLegacyClaimEmail, true);
});

test('repairs a profile without a username without creating a claim', () => {
    const plan = planPublicProfileRepair(
        { uid: 'alice', displayName: 'Alice' },
        null,
        false
    );
    assert.equal(plan.status, 'ready');
    assert.equal(plan.createPublicProfile, true);
    assert.equal(plan.publicProfile.username, '');
    assert.equal(plan.createUsernameClaim, false);
    assert.equal(plan.usernameClaim, null);
});
