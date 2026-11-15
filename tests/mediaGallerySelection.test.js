import test from 'node:test';
import assert from 'node:assert/strict';
import { getGalleryMedia, getSelectedGalleryMedia } from '../src/services/mediaGallerySelection.js';

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
