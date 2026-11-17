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
