import test from 'node:test';
import assert from 'node:assert/strict';
import { getGalleryMedia, getGalleryAttachments, getAdjacentGalleryMedia, getSelectedGalleryMedia } from '../src/services/mediaGallerySelection.js';

test('gallery categories include files but exclude unrelated message types', () => {
    const messages = [{ id: 'image', type: 'image' }, { id: 'video', type: 'video' }, { id: 'file', type: 'file' }, { id: 'audio', type: 'audio' }];
    assert.deepEqual(getGalleryAttachments(messages).map(item => item.id), ['image', 'video', 'file']);
    assert.deepEqual(getGalleryAttachments(messages, 'file').map(item => item.id), ['file']);
    assert.deepEqual(getGalleryAttachments(messages, 'image').map(item => item.id), ['image']);
    assert.deepEqual(getGalleryAttachments(messages, 'video').map(item => item.id), ['video']);
});

test('gallery preview navigation wraps and ignores missing selection', () => {
    const media = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];
    assert.equal(getAdjacentGalleryMedia(media, 'c', 1).id, 'a');
    assert.equal(getAdjacentGalleryMedia(media, 'a', -1).id, 'c');
    assert.equal(getAdjacentGalleryMedia(media, 'missing', 1), null);
});

test('gallery displays only image and video messages', () => {
    const media = getGalleryMedia([{ id: 'a', type: 'image' }, { id: 'b', type: 'text' }, { id: 'c', type: 'video' }]);
    assert.deepEqual(media.map(message => message.id), ['a', 'c']);
});

test('selection stays on the same image when new media changes the order', () => {
    const oldMedia = getGalleryMedia([{ id: 'a', type: 'image' }, { id: 'b', type: 'video' }]);
    const nextMedia = [{ id: 'new', type: 'image' }, ...oldMedia];
    assert.equal(getSelectedGalleryMedia(nextMedia, 'b').id, 'b');
});

test('deleted images and empty selection never open another preview', () => {
    assert.equal(getSelectedGalleryMedia([{ id: 'a', type: 'image' }], 'deleted'), null);
    assert.equal(getSelectedGalleryMedia([{ id: 'a', type: 'image' }], null), null);
    assert.deepEqual(getGalleryMedia([]), []);
});
