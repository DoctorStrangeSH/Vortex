import test from 'node:test';
import assert from 'node:assert/strict';
import { assessAttachmentCommit } from '../src/services/attachmentCommit.js';

test('confirmed message prevents destructive upload cleanup', async () => {
    assert.equal(await assessAttachmentCommit(async () => true), 'committed');
});
test('confirmed absent message permits cleanup', async () => {
    assert.equal(await assessAttachmentCommit(async () => false), 'absent');
});
test('failed verification stays unknown and preserves uploaded object', async () => {
    assert.equal(await assessAttachmentCommit(async () => { throw new Error('offline'); }), 'unknown');
});
