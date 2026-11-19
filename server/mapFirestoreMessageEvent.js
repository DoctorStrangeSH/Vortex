function readSnapshot(snapshot, label) {
    if (!snapshot || snapshot.exists === false) return null;
    const value = typeof snapshot.data === 'function' ? snapshot.data() : snapshot;
    if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error(`Unread event has invalid ${label} snapshot`);
    return value;
}

function readParticipants(chatSnapshot) {
    const chat = readSnapshot(chatSnapshot, 'chat');
    if (!chat) throw new Error('Unread event requires an existing trusted chat snapshot');
    const participants = chat.participants;
    if (!Array.isArray(participants) || participants.length < 1 || participants.length > 100) throw new Error('Trusted chat participants must be a list of 1 to 100 user IDs');
    const unique = new Set();
    for (const uid of participants) {
        if (typeof uid !== 'string' || uid.length === 0 || uid.includes('/')) throw new Error('Trusted chat contains an invalid participant ID');
        if (unique.has(uid)) throw new Error('Trusted chat contains duplicate participants');
        unique.add(uid);
    }
    return [...unique];
}

function validateMessage(message, label) {
    if (message === null) return;
    if (typeof message.senderId !== 'string' || message.senderId.length === 0) throw new Error(`Unread event has invalid ${label} senderId`);
    if (message.readBy !== undefined && (!Array.isArray(message.readBy) || message.readBy.some(uid => typeof uid !== 'string'))) throw new Error(`Unread event has invalid ${label} readBy list`);
}

/**
 * Maps a Firestore message trigger to the pure unread projector input.
 * chatSnapshot must be loaded by trusted server code (Admin SDK); never pass
 * participants copied from message data or a client request.
 */
export function mapFirestoreMessageEvent({ eventId, chatId, beforeSnapshot, afterSnapshot, chatSnapshot }) {
    if (typeof eventId !== 'string' || eventId.length === 0 || eventId.includes('/')) throw new Error('Unread event requires a valid Firestore event ID');
    if (typeof chatId !== 'string' || chatId.length === 0 || chatId.includes('/')) throw new Error('Unread event requires a valid chat ID');
    const before = readSnapshot(beforeSnapshot, 'before message');
    const after = readSnapshot(afterSnapshot, 'after message');
    if (before === null && after === null) throw new Error('Unread event must contain a before or after message');
    validateMessage(before, 'before');
    validateMessage(after, 'after');
    return { eventId, chatId, before, after, participants: readParticipants(chatSnapshot) };
}