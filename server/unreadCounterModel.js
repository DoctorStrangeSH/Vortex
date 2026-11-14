// Pure projection shared by the future trusted unread counter worker.
// No client should write unread totals directly: Firestore Rules cannot
// verify an arbitrary count against every message in a conversation.
export function unreadForParticipant(message, participantId) {
    if (!message || message.senderId === participantId) return 0;
    return Array.isArray(message.readBy) && message.readBy.includes(participantId) ? 0 : 1;
}

export function getUnreadCounterDeltas(before, after, participants) {
    const uniqueIds = [...new Set(participants || [])].filter(id => typeof id === 'string' && id.length > 0);
    return Object.fromEntries(uniqueIds
        .map(id => [id, unreadForParticipant(after, id) - unreadForParticipant(before, id)])
        .filter(([, delta]) => delta !== 0));
}
