import test from 'node:test';
import assert from 'node:assert/strict';
import { getMessageReadStatus, getMessageReadPresentation } from '../src/services/messageReadStatus.js';

test('private chat shows read only after the other participant reads', () => {
    assert.equal(getMessageReadStatus({ readBy: [] }, ['me', 'friend'], 'me').state, 'sent');
    assert.equal(getMessageReadStatus({ readBy: ['me', 'friend'] }, ['me', 'friend'], 'me').state, 'read');
});

test('group chat distinguishes partial from complete read without counting outsiders', () => {
    const participants = ['me', 'a', 'b'];
    assert.deepEqual(getMessageReadStatus({ readBy: ['a', 'intruder'] }, participants, 'me'), { readCount: 1, recipientCount: 2, state: 'partially_read' });
    assert.deepEqual(getMessageReadStatus({ readBy: ['a', 'b', 'intruder'] }, participants, 'me'), { readCount: 2, recipientCount: 2, state: 'read' });
});

test('touch screens show partial read progress for groups', () => {
    assert.deepEqual(getMessageReadPresentation({ readBy: ['a'] }, ['me', 'a', 'b', 'c'], 'me'), {
        state: 'partially_read', symbol: '✓✓', progress: '1/3', title: 'Прочитали 1 из 3'
    });
});

test('fully read and not-yet-read messages remain distinct', () => {
    const users = ['me', 'friend'];
    assert.equal(getMessageReadPresentation({ readBy: [] }, users, 'me').symbol, '✓');
    const read = getMessageReadPresentation({ readBy: ['friend'] }, users, 'me');
    assert.equal(read.state, 'read');
    assert.equal(read.progress, '');
    assert.equal(read.title, 'Прочитано всеми участниками');
});
