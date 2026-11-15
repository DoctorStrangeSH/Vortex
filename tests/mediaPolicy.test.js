import test from 'node:test';
import assert from 'node:assert/strict';
import { mediaStoragePath, validateMediaFile, MAX_STORAGE_FILE_BYTES } from '../src/services/mediaPolicy.js';

test('media paths cannot escape their chat or user folder', () => {
    assert.equal(mediaStoragePath('chat_1', 'user-1', 'uuid123'), 'chats/chat_1/media/user-1/uuid123');
    assert.throws(() => mediaStoragePath('../private', 'user-1', 'uuid123'));
    assert.throws(() => mediaStoragePath('chat_1', 'user/2', 'uuid123'));
});

test('media size and MIME metadata are validated', () => {
    assert.doesNotThrow(() => validateMediaFile({ size: MAX_STORAGE_FILE_BYTES, type: 'image/png' }));
    assert.throws(() => validateMediaFile({ size: MAX_STORAGE_FILE_BYTES + 1, type: 'image/png' }));
    assert.throws(() => validateMediaFile({ size: 42, type: '' }));
    assert.throws(() => validateMediaFile({ size: 42, type: 'not-a-mime' }));
    assert.throws(() => validateMediaFile({ size: 42, type: 'image/png; charset=utf-8' }));
    assert.doesNotThrow(() => validateMediaFile({ size: 42, type: 'application/pdf' }));
    assert.doesNotThrow(() => validateMediaFile({ size: 42, type: 'image/jpeg' }));
    for (const type of ["text/html","image/svg+xml","application/javascript","text/javascript","application/x-javascript","application/xhtml+xml","application/xml","text/xml"]) {
        assert.throws(() => validateMediaFile({ size: 42, type }), type);
    }
});
