import test from 'node:test';
import assert from 'node:assert/strict';
import { shouldDeferStoredMedia } from '../src/services/attachmentVisibility.js';

test('stored images and videos are deferred until near the viewport', () => {
    assert.equal(shouldDeferStoredMedia({ type: 'image', storagePath: 'chats/photo' }), true);
    assert.equal(shouldDeferStoredMedia({ type: 'video', storagePath: 'chats/video' }), true);
});

test('legacy sources and nonvisual attachment controls keep existing behavior', () => {
    assert.equal(shouldDeferStoredMedia({ type: 'image', fileData: 'data:image/png;base64,AA' }), false);
    assert.equal(shouldDeferStoredMedia({ type: 'audio', storagePath: 'chats/audio' }), false);
    assert.equal(shouldDeferStoredMedia({ type: 'file', storagePath: 'chats/file' }), false);
    assert.equal(shouldDeferStoredMedia(null), false);
});
