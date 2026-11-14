import test from 'node:test';
import assert from 'node:assert/strict';
import { getMessageReadStatus } from '../src/services/messageReadStatus.js';

test('private chat shows read only after the other participant reads', () => {
    assert.equal(getMessageReadStatus({ readBy: [] }, ['me', 'friend'], 'me').state, 'sent');
    assert.equal(getMessageReadStatus({ readBy: ['me', 'friend'] }, ['me', 'friend'], 'me').state, 'read');
});

test('group chat distinguishes partial from complete read without counting outsiders', () => {
    const participants = ['me', 'a', 'b'];
    assert.deepEqual(getMessageReadStatus({ readBy: ['a', 'intruder'] }, participants, 'me'), { readCount: 1, recipientCount: 2, state: 'partially_read' });
    assert.deepEqual(getMessageReadStatus({ readBy: ['a', 'b', 'intruder'] }, participants, 'me'), { readCount: 2, recipientCount: 2, state: 'read' });
});
