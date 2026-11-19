// Store a message anchor, not scrollTop: media and virtualized row heights may
// differ the next time this conversation is opened.
export function getVisibleReadingAnchor(container) {
    if (!container) return null;
    const viewport = container.getBoundingClientRect();
    const rows = container.querySelectorAll('[data-message-id], [data-msg-id]');
    for (const row of rows) {
        const rect = row.getBoundingClientRect();
        if (rect.bottom <= viewport.top + 1) continue;
        if (rect.top >= viewport.bottom) break;
        const id = row.dataset.messageId ?? row.dataset.msgId;
        if (id && !id.startsWith('date:')) return {
            id,
            offset: Math.max(0, viewport.top - rect.top)
        };
    }
    return null;
}

export function canRestoreReadingAnchor(position, messages) {
    return Boolean(position?.id && messages.some(message => message.id === position.id));
}

export function getRememberedReadingPosition(positions, chatId) {
    if (!chatId) return null;
    return positions.get(chatId) ?? null;
}

export function rememberReadingPosition(positions, chatId, position, maxChats = 30) {
    if (!chatId) return;
    positions.delete(chatId);
    if (position?.id && Number.isFinite(position.offset) && position.offset >= 0) positions.set(chatId, position);
    while (positions.size > maxChats) positions.delete(positions.keys().next().value);
}

// A per-account, per-tab checkpoint survives reloads without storing message
// content. sessionStorage intentionally does not sync reading history to a server.
const storageKey = userId => `vortex:reading-positions:v1:${userId}`;

export function loadReadingPositions(userId, storage) {
    const positions = new Map();
    if (typeof userId !== 'string' || !userId || !storage) return positions;
    try {
        const parsed = JSON.parse(storage.getItem(storageKey(userId)) ?? 'null');
        if (parsed?.version !== 1 || !Array.isArray(parsed.items)) return positions;
        for (const entry of parsed.items.slice(-30)) {
            if (!Array.isArray(entry) || entry.length !== 2) continue;
            const [chatId, position] = entry;
            if (typeof chatId !== 'string' || !chatId || typeof position?.id !== 'string' || !position.id ||
                !Number.isFinite(position.offset) || position.offset < 0 || position.offset > 1000000) continue;
            rememberReadingPosition(positions, chatId, { id: position.id, offset: position.offset });
        }
    } catch { /* Corrupt or inaccessible storage must not break chat navigation. */ }
    return positions;
}

export function saveReadingPositions(userId, positions, storage) {
    if (typeof userId !== 'string' || !userId || !storage) return false;
    try {
        const items = [...positions].slice(-30).filter(([chatId, position]) =>
            typeof chatId === 'string' && chatId && typeof position?.id === 'string' && position.id &&
            Number.isFinite(position.offset) && position.offset >= 0 && position.offset <= 1000000);
        storage.setItem(storageKey(userId), JSON.stringify({ version: 1, items }));
        return true;
    } catch { return false; }
}
