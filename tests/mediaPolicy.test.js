import test from 'node:test';
import assert from 'node:assert/strict';
import { mediaStoragePath, validateMediaFile, validateLegacyMediaFile, MAX_STORAGE_FILE_BYTES, MAX_LEGACY_MEDIA_FILE_BYTES } from '../src/services/mediaPolicy.js';

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


test('legacy Firestore fallback rejects active web content without rejecting ordinary files', () => {
    assert.doesNotThrow(() => validateLegacyMediaFile({ size: 12, type: 'application/pdf' }));
    assert.doesNotThrow(() => validateLegacyMediaFile({ size: 12, type: 'application/octet-stream' }));
    assert.doesNotThrow(() => validateLegacyMediaFile({ size: 12, type: '' }));
    assert.throws(() => validateLegacyMediaFile({ size: MAX_LEGACY_MEDIA_FILE_BYTES + 1, type: 'image/png' }), /350 КБ/);
    for (const type of ['text/html', 'image/svg+xml', 'application/javascript', 'text/javascript', 'application/x-javascript', 'application/xhtml+xml', 'application/xml', 'text/xml', 'TEXT/HTML; charset=utf-8']) {
        assert.throws(() => validateLegacyMediaFile({ size: 12, type }), /активным веб-содержимым/);
    }
});
