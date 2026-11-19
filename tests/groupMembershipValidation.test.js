import test from 'node:test';
import assert from 'node:assert/strict';
import { parseCreateGroupInput, parseGroupMembershipCommand, buildGroupMembershipChange } from '../functions/src/groupMembershipValidation.js';

test('group creation includes the creator and deduplicated validation is strict', () => {
    assert.deepEqual(parseCreateGroupInput({ name: '  Team  ', participantIds: ['bob', 'eve'] }, 'alice'), { name: 'Team', participants: ['alice', 'bob', 'eve'] });
    assert.throws(() => parseCreateGroupInput({ name: 'Team', participantIds: ['bob', 'bob'] }, 'alice'), /повторы/);
    assert.throws(() => parseCreateGroupInput({ name: ' ', participantIds: [] }, 'alice'), /Название/);
});

test('membership commands validate action and prevent leaving on behalf of another user', () => {
    assert.deepEqual(parseGroupMembershipCommand({ chatId: 'g1', memberUid: 'alice', action: 'leave' }, 'alice'), { chatId: 'g1', memberUid: 'alice', action: 'leave', actorUid: 'alice' });
    assert.throws(() => parseGroupMembershipCommand({ chatId: 'g1', memberUid: 'bob', action: 'leave' }, 'alice'), /от своего имени/);
    assert.throws(() => parseGroupMembershipCommand({ chatId: 'g1', memberUid: 'bob', action: 'delete' }, 'alice'), /Неизвестная/);
});

test('only admins add or remove; members may leave themselves', () => {
    const chat = { type: 'group', createdBy: 'alice', participants: ['alice', 'bob'], admins: ['alice'] };
    const add = buildGroupMembershipChange(chat, { actorUid: 'alice', memberUid: 'eve', action: 'add' });
    assert.deepEqual(add.participants, ['alice', 'bob', 'eve']);
    assert.equal(add.event.action, 'join');
    assert.throws(() => buildGroupMembershipChange(chat, { actorUid: 'bob', memberUid: 'eve', action: 'add' }), /Только администратор/);
    const leave = buildGroupMembershipChange(chat, { actorUid: 'bob', memberUid: 'bob', action: 'leave' });
    assert.deepEqual(leave.participants, ['alice']);
    assert.equal(leave.event.action, 'leave');
});

test('prevents removing creator, removing absent members and leaving without an admin', () => {
    const chat = { type: 'group', createdBy: 'alice', participants: ['alice', 'bob'], admins: ['alice'] };
    assert.throws(() => buildGroupMembershipChange(chat, { actorUid: 'alice', memberUid: 'alice', action: 'remove' }), /Создатель/);
    assert.throws(() => buildGroupMembershipChange(chat, { actorUid: 'alice', memberUid: 'eve', action: 'remove' }), /не состоит/);
    assert.throws(() => buildGroupMembershipChange({ ...chat, admins: ['bob'] }, { actorUid: 'bob', memberUid: 'bob', action: 'leave' }), /хотя бы один администратор/);
});

test('rejects non-group chat documents and malformed group state', () => {
    assert.throws(() => buildGroupMembershipChange({ type: 'private', participants: ['alice', 'bob'], admins: [] }, { actorUid: 'alice', memberUid: 'eve', action: 'add' }), /Группа не найдена/);
});