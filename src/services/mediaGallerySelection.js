// Keep selection attached to message IDs as new media arrives or old entries are removed.
export function getGalleryMedia(messages = []) {
    return messages.filter(message => message.type === 'image' || message.type === 'video');
}

export function getSelectedGalleryMedia(media, selectedId) {
    if (!selectedId) return null;
    return media.find(message => message.id === selectedId) || null;
}
