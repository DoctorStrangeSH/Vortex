export const MAX_STORAGE_FILE_BYTES = 25 * 1024 * 1024;

export function validateMediaFile(file) {
    if (!file || !Number.isSafeInteger(file.size) || file.size <= 0 || file.size > MAX_STORAGE_FILE_BYTES) {
        throw new Error('Файл должен быть размером от 1 байта до 25 МБ');
    }
    if (typeof file.type !== 'string' || !file.type || file.type.length > 128) {
        throw new Error('Не удалось определить тип файла');
    }
    return file;
}

export function mediaStoragePath(chatId, userId, mediaId) {
    if (![chatId, userId, mediaId].every(value => typeof value === 'string' && /^[a-zA-Z0-9_-]{1,128}$/.test(value))) {
        throw new Error('Недопустимый идентификатор медиафайла');
    }
    return `chats/${chatId}/media/${userId}/${mediaId}`;
}
