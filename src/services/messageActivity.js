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
