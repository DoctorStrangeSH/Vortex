export const MAX_STORAGE_FILE_BYTES = 25 * 1024 * 1024;

function invalidMediaError(message) {
    return Object.assign(new Error(message), { code: 'invalid-argument' });
}

const BLOCKED_ACTIVE_CONTENT_MIME = new Set(["text/html","image/svg+xml","application/javascript","text/javascript","application/x-javascript","application/xhtml+xml","application/xml","text/xml"]);

export function validateMediaFile(file) {
    if (!file || !Number.isSafeInteger(file.size) || file.size <= 0 || file.size > MAX_STORAGE_FILE_BYTES) {
        throw invalidMediaError('Файл должен быть размером от 1 байта до 25 МБ');
    }
    if (typeof file.type !== 'string' || !file.type || file.type.length > 128) {
        throw invalidMediaError('Не удалось определить тип файла');
    }
    // Keep the client-side MIME constraints aligned with Storage Rules.
    if (!/^[a-z0-9][a-z0-9.+-]*\/[a-z0-9][a-z0-9.+-]*$/.test(file.type)) {
        throw invalidMediaError('Некорректный MIME-тип файла');
    }
    if (BLOCKED_ACTIVE_CONTENT_MIME.has(file.type)) {
        throw invalidMediaError('Файлы с активным веб-содержимым нельзя отправлять');
    }
    return file;
}

export function mediaStoragePath(chatId, userId, mediaId) {
    if (![chatId, userId, mediaId].every(value => typeof value === 'string' && /^[a-zA-Z0-9_-]{1,128}$/.test(value))) {
        throw invalidMediaError('Недопустимый идентификатор медиафайла');
    }
    return `chats/${chatId}/media/${userId}/${mediaId}`;
}


export const MAX_LEGACY_MEDIA_FILE_BYTES = 350_000;

// Legacy Firestore attachments bypass Storage's MIME rules, so reject active
// web content here as well. Keep unknown/octet-stream documents usable.
export function validateLegacyMediaFile(file) {
    if (!file || !Number.isSafeInteger(file.size) || file.size <= 0 || file.size > MAX_LEGACY_MEDIA_FILE_BYTES) {
        throw invalidMediaError('Файл должен быть размером от 1 байта до 350 КБ');
    }
    const mimeType = typeof file.type === 'string' ? file.type.toLowerCase().split(';', 1)[0].trim() : '';
    if (BLOCKED_ACTIVE_CONTENT_MIME.has(mimeType)) {
        throw invalidMediaError('Файлы с активным веб-содержимым нельзя отправлять');
    }
    return file;
}
