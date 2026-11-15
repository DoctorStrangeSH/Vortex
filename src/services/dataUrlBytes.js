// Exact byte length of a browser FileReader data URL without decoding it.
export function dataUrlByteLength(value) {
    if (typeof value !== 'string') throw new Error('Запись недоступна');
    const match = /^data:[^,]*;base64,([A-Za-z0-9+/]*={0,2})$/.exec(value);
    if (!match || match[1].length === 0 || match[1].length % 4 !== 0) {
        throw new Error('Не удалось прочитать запись');
    }
    const payload = match[1];
    const padding = payload.endsWith('==') ? 2 : payload.endsWith('=') ? 1 : 0;
    return (payload.length / 4) * 3 - padding;
}
