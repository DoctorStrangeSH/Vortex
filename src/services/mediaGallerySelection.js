// Keep selection attached to message IDs as new media arrives or old entries are removed.
export function getGalleryMedia(messages = []) {
    return messages.filter(message => message.type === 'image' || message.type === 'video');
}

export function getGalleryAttachments(messages = [], category = 'all') {
    const categories = { all: ['image', 'video', 'file'], image: ['image'], video: ['video'], file: ['file'] };
    const allowed = categories[category] || categories.all;
    return messages.filter(message => allowed.includes(message.type));
}

export function getAdjacentGalleryMedia(media, selectedId, direction) {
    const index = media.findIndex(message => message.id === selectedId);
    if (index < 0 || media.length < 2) return null;
    return media[(index + (direction > 0 ? 1 : -1) + media.length) % media.length];
}

export function getSelectedGalleryMedia(media, selectedId) {
    if (!selectedId) return null;
    return media.find(message => message.id === selectedId) || null;
}
