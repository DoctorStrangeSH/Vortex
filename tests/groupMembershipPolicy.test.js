import test from 'node:test';
import assert from 'node:assert/strict';
import { buildGroupLeaveUpdate, buildGroupAdminUpdate } from '../src/services/groupMembershipPolicy.js';

const group = {
    type: 'group', createdBy: 'alice',
    participants: ['alice', 'bob', 'charlie'],
    admins: ['alice', 'bob']
};

test('ordinary member can only remove themselves when leaving', () => {
    assert.deepEqual(buildGroupLeaveUpdate(group, 'charlie'), {
        participants: ['alice', 'bob']
    });
});

test('non-owner administrator leaves with membership and role removed atomically', () => {
    assert.deepEqual(buildGroupLeaveUpdate(group, 'bob'), {
        participants: ['alice', 'charlie'],
        admins: ['alice']
    });
});

test('owner cannot leave and strand the group', () => {
    assert.throws(() => buildGroupLeaveUpdate(group, 'alice'), /Владелец/);
});

test('non-member cannot leave a group', () => {
    assert.throws(() => buildGroupLeaveUpdate(group, 'mallory'), /не состоите/);
});

test('only owner can promote a participant', () => {
    assert.deepEqual(buildGroupAdminUpdate(group, 'alice', 'charlie', true), {
        admins: ['alice', 'bob', 'charlie']
    });
    assert.throws(() => buildGroupAdminUpdate(group, 'bob', 'charlie', true), /Только владелец/);
});

test('only owner can demote a non-owner administrator', () => {
    assert.deepEqual(buildGroupAdminUpdate(group, 'alice', 'bob', false), {
        admins: ['alice']
    });
    assert.throws(() => buildGroupAdminUpdate(group, 'alice', 'alice', false), /роль владельца/);
});

test('admin role changes are idempotent', () => {
    assert.equal(buildGroupAdminUpdate(group, 'alice', 'bob', true), null);
    assert.equal(buildGroupAdminUpdate(group, 'alice', 'charlie', false), null);
});

test('cannot promote non-members or remove final owner-admin', () => {
    assert.throws(() => buildGroupAdminUpdate(group, 'alice', 'mallory', true), /только участник/);
    assert.throws(() => buildGroupAdminUpdate({
        ...group, admins: ['alice', 'bob']
    }, 'alice', 'bob', false), /должен остаться/);
});
