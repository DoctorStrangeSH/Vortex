// Snapshot updates also arrive for edits, reactions, and read receipts.
// Only genuinely new incoming message IDs should make an audible alert.
export function getNewIncomingIds(previousIds, messages, ownUid) {
    return messages.filter(message => message.senderId !== ownUid && !previousIds.has(message.id)).map(message => message.id);
}

export function getUnreadIncomingIds(messages, ownUid, attemptedIds) {
    return messages.filter(message => message.senderId !== ownUid && !message.readBy?.includes(ownUid) && !attemptedIds.has(message.id)).map(message => message.id);
}

export function getFirstUnreadIncomingId(messages, ownUid) {
    return messages.find(message => message.senderId !== ownUid && !message.readBy?.includes(ownUid))?.id ?? null;
}

// Only the foreground, focused tab should play in-app sounds. Background
// notifications require a separate server-backed push implementation.
export function shouldPlayIncomingSound({ visibilityState, hasFocus }) {
    return visibilityState === 'visible' && hasFocus;
}

export function shouldMarkMessagesRead({ visibilityState, hasFocus }) {
    return visibilityState === 'visible' && hasFocus;
}

// A message is read only after a meaningful part of its bubble enters the
// scroll viewport, not merely because its chat is open.
export function isMessageVisible(messageRect, containerRect) {
    const height = Math.max(0, messageRect.bottom - messageRect.top);
    const overlap = Math.max(0, Math.min(messageRect.bottom, containerRect.bottom) - Math.max(messageRect.top, containerRect.top));
    return height > 0 && overlap >= Math.min(24, height / 2);
}
