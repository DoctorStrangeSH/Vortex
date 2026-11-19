import test from 'node:test';
import assert from 'node:assert/strict';
import { createAttachmentPool } from '../src/services/attachmentPool.js';

const flush = () => new Promise(resolve => setImmediate(resolve));
const deferred = () => {
    let resolve, reject;
    const promise = new Promise((ok, fail) => { resolve = ok; reject = fail; });
    return { promise, resolve, reject };
};

test('concurrent viewers reuse one download and release the URL only after the last viewer', async () => {
    const pending = deferred();
    const downloads = [], revoked = [];
    const pool = createAttachmentPool({
        download: path => { downloads.push(path); return pending.promise; },
        createUrl: () => 'blob:shared', revokeUrl: url => revoked.push(url)
    });
    const first = pool.acquire('photo');
    const second = pool.acquire('photo');
    await flush();
    assert.deepEqual(downloads, ['photo']);
    pending.resolve('bytes');
    assert.equal(await first.promise, 'blob:shared');
    assert.equal(await second.promise, 'blob:shared');
    first.release();
    assert.deepEqual(revoked, []);
    second.release();
    assert.deepEqual(revoked, ['blob:shared']);
    second.release();
    assert.deepEqual(revoked, ['blob:shared']);
});

test('at most two downloads run concurrently and released queued items never start', async () => {
    const pending = new Map();
    const started = [];
    const pool = createAttachmentPool({
        maxConcurrent: 2,
        download: path => {
            started.push(path);
            const d = deferred();
            pending.set(path, d);
            return d.promise;
        },
        createUrl: blob => 'blob:' + blob,
        revokeUrl: () => {}
    });
    const a = pool.acquire('a'), b = pool.acquire('b'), c = pool.acquire('c'), d = pool.acquire('d');
    d.release();
    await flush();
    assert.deepEqual(started, ['a', 'b']);
    pending.get('a').resolve('a');
    assert.equal(await a.promise, 'blob:a');
    await flush();
    assert.deepEqual(started, ['a', 'b', 'c']);
    pending.get('b').resolve('b');
    pending.get('c').resolve('c');
    assert.equal(await b.promise, 'blob:b');
    assert.equal(await c.promise, 'blob:c');
    assert.equal(await d.promise, '');
    a.release(); b.release(); c.release();
    await flush();
    assert.equal(started.includes('d'), false);
});

test('errors allow a fresh retry and late downloads do not retain released blobs', async () => {
    let calls = 0;
    const late = deferred();
    const revoked = [];
    const pool = createAttachmentPool({
        download: () => (++calls === 1 ? Promise.reject(new Error('offline')) : late.promise),
        createUrl: () => 'blob:retry',
        revokeUrl: url => revoked.push(url)
    });
    const failed = pool.acquire('file');
    await assert.rejects(failed.promise, /offline/);
    failed.release();
    const retry = pool.acquire('file');
    await flush();
    retry.release();
    late.resolve('bytes');
    assert.equal(await retry.promise, '');
    await flush();
    assert.equal(calls, 2);
    assert.deepEqual(revoked, []);
});
