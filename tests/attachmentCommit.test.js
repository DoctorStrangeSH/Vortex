import test from 'node:test';
import assert from 'node:assert/strict';
import { assessAttachmentCommit, commitAttachmentWithRecovery } from '../src/services/attachmentCommit.js';

test('confirmed message prevents destructive upload cleanup', async () => {
    assert.equal(await assessAttachmentCommit(async () => true), 'committed');
});
test('confirmed absent message permits cleanup', async () => {
    assert.equal(await assessAttachmentCommit(async () => false), 'absent');
});
test('failed verification stays unknown and preserves uploaded object', async () => {
    assert.equal(await assessAttachmentCommit(async () => { throw new Error('offline'); }), 'unknown');
});


test('recover a confirmed missing write without a second upload', async () => {
    let attempts = 0;
    const outcome = await commitAttachmentWithRecovery(
        async () => { if (++attempts === 1) throw new Error('write failed'); },
        async () => false
    );
    assert.equal(outcome, 'committed');
    assert.equal(attempts, 2);
});
test('acknowledgement lost after commit never writes a duplicate', async () => {
    let attempts = 0;
    const outcome = await commitAttachmentWithRecovery(
        async () => { attempts++; throw new Error('timeout'); },
        async () => true
    );
    assert.equal(outcome, 'committed');
    assert.equal(attempts, 1);
});
test('uncertain server state preserves upload and does not retry', async () => {
    let attempts = 0;
    await assert.rejects(
        commitAttachmentWithRecovery(
            async () => { attempts++; throw new Error('offline'); },
            async () => { throw new Error('cannot reach server'); }
        ),
        error => error.message === 'offline' && error.attachmentCommitUnknown === true
    );
    assert.equal(attempts, 1);
});
test('a second confirmed failure is bounded to two attempts', async () => {
    let attempts = 0;
    await assert.rejects(
        commitAttachmentWithRecovery(
            async () => { attempts++; throw new Error('permission denied'); },
            async () => false
        ),
        /permission denied/
    );
    assert.equal(attempts, 2);
});
test('chat switch stops retry after first failed write', async () => {
    let active = true;
    let attempts = 0;
    await assert.rejects(
        commitAttachmentWithRecovery(
            async () => { attempts++; active = false; throw new Error('write failed'); },
            async () => false,
            () => active
        ),
        /write failed/
    );
    assert.equal(attempts, 1);
});
