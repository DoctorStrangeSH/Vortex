/**
 * Find a pre-deterministic direct conversation in a participant query result.
 * Legacy private chats may have arbitrary document IDs and omit the type field.
 */
export function findLegacyPrivateChat(documents, firstUid, secondUid) {
    if (!Array.isArray(documents) || !firstUid || !secondUid || firstUid === secondUid) return null;
    return documents.find(item => {
        const data = typeof item?.data === 'function' ? item.data() : item?.data;
        const participants = data?.participants;
        return Array.isArray(participants) &&
            participants.length === 2 &&
            participants.includes(firstUid) &&
            participants.includes(secondUid) &&
            (data.type === 'private' || data.type === undefined || data.type === null);
    }) || null;
}
