import test from 'node:test';
import assert from 'node:assert/strict';
import { buildChannelMembershipUpdate } from '../src/services/channelService.js';

const channel = {
    type: 'channel', ownerId: 'alice',
    participants: ['alice'], subscribers: ['alice'], subscriberCount: 1
};

test('joining adds the current user once and keeps subscriber projections aligned', () => {
    assert.deepEqual(buildChannelMembershipUpdate(channel, 'bob', true), {
        participants: ['alice', 'bob'],
        subscribers: ['alice', 'bob'],
        subscriberCount: 2
    });
});

test('repeated join is a no-op and cannot increment subscriber count', () => {
    assert.equal(buildChannelMembershipUpdate({
        ...channel, participants: ['alice', 'bob'], subscribers: ['alice', 'bob'], subscriberCount: 2
    }, 'bob', true), null);
});

test('leaving removes only the current user and decrements once', () => {
    assert.deepEqual(buildChannelMembershipUpdate({
        ...channel, participants: ['alice', 'bob'], subscribers: ['alice', 'bob'], subscriberCount: 2
    }, 'bob', false), {
        participants: ['alice'], subscribers: ['alice'], subscriberCount: 1
    });
});

test('repeated leave is a no-op', () => {
    assert.equal(buildChannelMembershipUpdate(channel, 'bob', false), null);
});

test('channel owner cannot leave', () => {
    assert.throws(() => buildChannelMembershipUpdate(channel, 'alice', false), /Владелец канала/);
});

test('inconsistent channel membership projections are rejected', () => {
    assert.throws(() => buildChannelMembershipUpdate({
        ...channel, subscribers: ['alice', 'bob'], subscriberCount: 2
    }, 'bob', true), /повреждены/);
});

test('non-channel documents and missing users are rejected', () => {
    assert.throws(() => buildChannelMembershipUpdate({ ...channel, type: 'group' }, 'bob', true), /Канал/);
    assert.throws(() => buildChannelMembershipUpdate(channel, '', true), /войти/);
});
