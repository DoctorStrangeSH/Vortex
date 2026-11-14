export function normalizeUsername(value) {
    if (typeof value !== 'string') throw new Error('Имя пользователя должно быть строкой');
    const normalized = value.trim().replace(/^@/, '').toLowerCase();
    if (!/^[a-z0-9_]{3,24}$/.test(normalized)) {
        throw new Error('Username: от 3 до 24 латинских букв, цифр или _');
    }
    return normalized;
}
