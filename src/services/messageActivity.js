// Snapshot updates also arrive for edits, reactions, and read receipts.
// Only genuinely new incoming message IDs should make an audible alert.
export function getNewIncomingIds(previousIds, messages, ownUid) {
    return messages.filter(message => message.senderId !== ownUid && !previousIds.has(message.id)).map(message => message.id);
}

export function getUnreadIncomingIds(messages, ownUid, attemptedIds) {
    return messages.filter(message => message.senderId !== ownUid && !message.readBy?.includes(ownUid) && !attemptedIds.has(message.id)).map(message => message.id);
}
