import test from 'node:test';
import assert from 'node:assert/strict';
import {
    ATTACHMENT_CLEANUP_STORAGE_KEY,
    AttachmentCleanupQueue,
    isOwnedAttachmentStoragePath
} from '../src/services/attachmentCleanupQueue.js';

function createStorage(initial = []) {
    const values = new Map([[ATTACHMENT_CLEANUP_STORAGE_KEY, JSON.stringify(initial)]]);
    return {
        values,
        getItem: key => values.get(key) ?? null,
        setItem: (key, value) => values.set(key, value)
    };
}

const path = 'chats/chat-1/media/alice/message-1';

test('only normalized chat attachment paths can enter the cleanup queue', () => {
    assert.equal(isOwnedAttachmentStoragePath(path), true);
    assert.equal(isOwnedAttachmentStoragePath('../private/file'), false);
    assert.equal(isOwnedAttachmentStoragePath('chats/chat-1/media/alice/../../other'), false);
    const queue = new AttachmentCleanupQueue({ storage: createStorage() });
    assert.throws(() => queue.enqueue('../private/file'), /Недопустимый путь/);
});

test('cleanup paths are persisted and duplicate enqueue is idempotent', () => {
    const storage = createStorage();
    const queue = new AttachmentCleanupQueue({ storage });
    queue.enqueue(path);
    queue.enqueue(path);
    assert.deepEqual(queue.getQueue(), [path]);
});

test('offline cleanup remains queued until connectivity returns', async () => {
    const storage = createStorage();
    let online = false;
    let calls = 0;
    const queue = new AttachmentCleanupQueue({
        storage,
        isOnline: () => online,
        removeObject: async () => { calls++; }
    });
    queue.enqueue(path);
    await queue.process();
    assert.equal(calls, 0);
    assert.deepEqual(queue.getQueue(), [path]);
    online = true;
    await queue.process();
    assert.equal(calls, 1);
    assert.deepEqual(queue.getQueue(), []);
});

test('transient Storage failure retains the path for a later retry', async () => {
    const storage = createStorage();
    let attempts = 0;
    const queue = new AttachmentCleanupQueue({
        storage,
        removeObject: async () => {
            attempts++;
            if (attempts === 1) throw new Error('network unavailable');
        }
    });
    queue.enqueue(path);
    await queue.process();
    assert.deepEqual(queue.getQueue(), [path]);
    await queue.process();
    assert.equal(attempts, 2);
    assert.deepEqual(queue.getQueue(), []);
});

test('already missing Storage objects are treated as successfully cleaned', async () => {
    const queue = new AttachmentCleanupQueue({
        storage: createStorage(),
        removeObject: async () => { throw Object.assign(new Error('missing'), { code: 'storage/object-not-found' }); }
    });
    queue.enqueue(path);
    await queue.process();
    assert.deepEqual(queue.getQueue(), []);
});

test('corrupt cleanup queue is backed up and never overwritten automatically', async () => {
    const storage = createStorage();
    storage.setItem(ATTACHMENT_CLEANUP_STORAGE_KEY, '{broken-json');
    const queue = new AttachmentCleanupQueue({ storage });
    assert.throws(() => queue.getQueue());
    assert.equal(storage.getItem(`${ATTACHMENT_CLEANUP_STORAGE_KEY}.corruptBackup`), '{broken-json');
    assert.equal(storage.getItem(ATTACHMENT_CLEANUP_STORAGE_KEY), '{broken-json');
    assert.throws(() => queue.enqueue(path), /восстановления/);
});
