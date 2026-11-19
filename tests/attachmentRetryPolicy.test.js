import test from 'node:test';
import assert from 'node:assert/strict';
import { attachmentRetryNotice, mayRetryAttachment } from '../src/services/attachmentRetryPolicy.js';

test('confirmed failure can be retried', () => {
    assert.equal(mayRetryAttachment(new Error('network')), true);
});
test('uncertain commit must not offer a duplicate upload', () => {
    const error = Object.assign(new Error('offline'), { attachmentCommitUnknown: true });
    assert.equal(mayRetryAttachment(error), false);
    assert.match(attachmentRetryNotice('photo.png', error, 0, 2), /создать дубликат/);
});
test('retry notice describes already sent files', () => {
    const text = attachmentRetryNotice('video.mp4', new Error('timeout'), 2, 3);
    assert.match(text, /Отправлено 2 из 3/);
    assert.match(text, /повторить оставшиеся файлы/);
});

test('permission errors are actionable and never suggest retry', () => {
    const denied = Object.assign(new Error('Permission denied'), { code: 'permission-denied' });
    assert.equal(mayRetryAttachment(denied), false);
    assert.match(attachmentRetryNotice('secret.pdf', denied, 0, 1), /Проверьте авторизацию/);
    assert.doesNotMatch(attachmentRetryNotice('secret.pdf', denied, 0, 1), /дубликат/);
});
test('storage authorization errors also disable retry', () => {
    assert.equal(mayRetryAttachment({ code: 'storage/unauthorized' }), false);
    assert.equal(mayRetryAttachment({ code: 'storage/unauthenticated' }), false);
});
