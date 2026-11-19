import test from 'node:test';
import assert from 'node:assert/strict';
import { resolveParticipantsAt } from '../server/unreadMembershipHistory.js';

test('resolves the trusted participant set at a message event time', () => {
    const history = [
        { uid: 'alice', action: 'join', effectiveAtMs: 100 },
        { uid: 'bob', action: 'join', effectiveAtMs: 120 },
        { uid: 'bob', action: 'leave', effectiveAtMs: 180 },
        { uid: 'charlie', action: 'join', effectiveAtMs: 200 }
    ];
    assert.deepEqual(resolveParticipantsAt(history, 150), ['alice', 'bob']);
    assert.deepEqual(resolveParticipantsAt(history, 180), ['alice']);
    assert.deepEqual(resolveParticipantsAt(history, 250), ['alice', 'charlie']);
});

test('membership intervals include join time and exclude leave time', () => {
    const history = [
        { uid: 'alice', action: 'join', effectiveAtMs: 100 },
        { uid: 'alice', action: 'leave', effectiveAtMs: 200 }
    ];
    assert.deepEqual(resolveParticipantsAt(history, 99), []);
    assert.deepEqual(resolveParticipantsAt(history, 100), ['alice']);
    assert.deepEqual(resolveParticipantsAt(history, 199), ['alice']);
    assert.deepEqual(resolveParticipantsAt(history, 200), []);
});

test('sorts out-of-order history records before resolving', () => {
    const history = [
        { uid: 'bob', action: 'leave', effectiveAtMs: 300 },
        { uid: 'alice', action: 'join', effectiveAtMs: 100 },
        { uid: 'bob', action: 'join', effectiveAtMs: 150 }
    ];
    assert.deepEqual(resolveParticipantsAt(history, 250), ['alice', 'bob']);
    assert.deepEqual(resolveParticipantsAt(history, 350), ['alice']);
});

test('rejects impossible duplicate joins and inactive leaves', () => {
    assert.throws(() => resolveParticipantsAt([
        { uid: 'alice', action: 'join', effectiveAtMs: 1 },
        { uid: 'alice', action: 'join', effectiveAtMs: 2 }
    ], 3), /already active/);
    assert.throws(() => resolveParticipantsAt([{ uid: 'alice', action: 'leave', effectiveAtMs: 1 }], 3), /inactive user/);
});

test('rejects conflicting events at the same timestamp', () => {
    assert.throws(() => resolveParticipantsAt([
        { uid: 'alice', action: 'join', effectiveAtMs: 1 },
        { uid: 'alice', action: 'leave', effectiveAtMs: 1 }
    ], 2), /share a user and timestamp/);
});

test('rejects malformed event times, actions, IDs and oversized histories', () => {
    assert.throws(() => resolveParticipantsAt([], -1), /event time/);
    assert.throws(() => resolveParticipantsAt([{ uid: 'a/b', action: 'join', effectiveAtMs: 1 }], 2), /user ID/);
    assert.throws(() => resolveParticipantsAt([{ uid: 'alice', action: 'delete', effectiveAtMs: 1 }], 2), /action/);
    assert.throws(() => resolveParticipantsAt([{ uid: 'alice', action: 'join', effectiveAtMs: 1.5 }], 2), /effectiveAtMs/);
    assert.throws(() => resolveParticipantsAt(new Array(10001).fill({ uid: 'alice', action: 'join', effectiveAtMs: 1 }), 2), /at most 10000/);
});