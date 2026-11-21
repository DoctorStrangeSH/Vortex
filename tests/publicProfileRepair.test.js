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
    const plan = planPublicProfileRepair(legacyProfile, { exists: false, data: null }, null);
    assert.equal(plan.status, 'ready');
    assert.equal(plan.writePublicProfile, true);
    assert.deepEqual(plan.publicProfile, {
        uid: 'alice', username: 'alice_legacy', displayName: 'Alice'
    });
    assert.equal(plan.createUsernameClaim, true);
    assert.deepEqual(plan.usernameClaim, { uid: 'alice', username: 'alice_legacy' });
    assert.equal(plan.removeLegacyClaimEmail, false);
});

test('removes legacy email only from a username claim already owned by the same UID', () => {
    const plan = planPublicProfileRepair(
        legacyProfile,
        { exists: true, data: { uid: 'alice', username: 'alice_legacy', email: 'alice@example.test' } },
        null
    );
    assert.equal(plan.status, 'ready');
    assert.equal(plan.createUsernameClaim, false);
    assert.equal(plan.removeLegacyClaimEmail, true);
});

test('does not publish a legacy profile when another UID owns its username claim', () => {
    const plan = planPublicProfileRepair(
        legacyProfile,
        { exists: true, data: { uid: 'bob', username: 'alice_legacy' } },
        null
    );
    assert.deepEqual(plan, { status: 'skipped', reason: 'username_claim_conflict' });
});

test('does not repair a legacy profile when the owned claim points at a different username', () => {
    const plan = planPublicProfileRepair(
        legacyProfile,
        { exists: true, data: { uid: 'alice', username: 'different_name' } },
        null
    );
    assert.deepEqual(plan, { status: 'skipped', reason: 'username_claim_mismatch' });
});

test('does not rewrite non-canonical legacy usernames under the current immutable profile rules', () => {
    const plan = planPublicProfileRepair(
        { ...legacyProfile, username: 'Alice_Legacy' },
        { exists: false, data: null },
        null
    );
    assert.deepEqual(plan, { status: 'skipped', reason: 'non_canonical_legacy_username' });
});

test('does not publish malformed legacy usernames', () => {
    const plan = planPublicProfileRepair(
        { ...legacyProfile, username: 'not valid/name' },
        null,
        null
    );
    assert.deepEqual(plan, { status: 'skipped', reason: 'invalid_legacy_username' });
});

test('repairs a profile without a username without creating a claim', () => {
    const plan = planPublicProfileRepair({ uid: 'alice', displayName: 'Alice' }, null, null);
    assert.equal(plan.status, 'ready');
    assert.equal(plan.writePublicProfile, true);
    assert.equal(plan.publicProfile.username, '');
    assert.equal(plan.createUsernameClaim, false);
    assert.equal(plan.usernameClaim, null);
});

test('removes unknown private fields from an existing public projection', () => {
    const existing = {
        uid: 'alice', username: 'alice_legacy', displayName: 'Old Alice',
        email: 'alice@example.test', phone: '+10000000000', internalFlags: ['staff'],
        bio: 'Public bio'
    };
    const plan = planPublicProfileRepair(legacyProfile, {
        exists: true, data: { uid: 'alice', username: 'alice_legacy' }
    }, existing);
    assert.equal(plan.status, 'ready');
    assert.equal(plan.writePublicProfile, true);
    assert.deepEqual(plan.publicProfile, {
        uid: 'alice', username: 'alice_legacy', displayName: 'Alice', bio: 'Public bio'
    });
    assert.equal(Object.hasOwn(plan.publicProfile, 'email'), false);
    assert.equal(Object.hasOwn(plan.publicProfile, 'phone'), false);
    assert.equal(Object.hasOwn(plan.publicProfile, 'internalFlags'), false);
});

test('does not rewrite an already safe public profile', () => {
    const existing = { uid: 'alice', username: 'alice_legacy', displayName: 'Alice', bio: 'Hello' };
    const plan = planPublicProfileRepair(legacyProfile, {
        exists: true, data: { uid: 'alice', username: 'alice_legacy' }
    }, existing);
    assert.equal(plan.status, 'ready');
    assert.equal(plan.writePublicProfile, false);
});

test('does not overwrite a public profile whose UID or username does not match the private owner record', () => {
    const claim = { exists: true, data: { uid: 'alice', username: 'alice_legacy' } };
    assert.deepEqual(
        planPublicProfileRepair(legacyProfile, claim, { uid: 'bob', username: 'alice_legacy', displayName: 'Bob' }),
        { status: 'skipped', reason: 'public_profile_uid_mismatch' }
    );
    assert.deepEqual(
        planPublicProfileRepair(legacyProfile, claim, { uid: 'alice', username: 'different', displayName: 'Alice' }),
        { status: 'skipped', reason: 'public_profile_username_mismatch' }
    );
});
