export function normalizeDisplayName(value) {
    if (typeof value !== 'string') throw new Error('Имя должно быть текстом');
    const normalized = value.trim();
    if (normalized.length < 2 || normalized.length > 80) {
        throw new Error('Имя должно содержать от 2 до 80 символов');
    }
    return normalized;
}
