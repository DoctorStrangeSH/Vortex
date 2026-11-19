// Adapt grouped chat items to stable virtual-list rows without changing message payloads.
// Date dividers are keyed by their calendar label, not by a shifting array index.
export function buildVirtualChatRows(groupedItems, firstUnreadMessageId = null) {
    const dateOccurrences = new Map();
    return groupedItems.map(item => {
        if (item.type === 'message') {
            return {
                id: item.data.id,
                type: 'message',
                data: item.data,
                unreadDivider: item.data.id === firstUnreadMessageId
            };
        }
        if (item.type === 'date') {
            const count = dateOccurrences.get(item.date) ?? 0;
            dateOccurrences.set(item.date, count + 1);
            return { id: `date:${item.date}:${count}`, type: 'date', date: item.date };
        }
        throw new Error(`Unsupported chat row type: ${item.type}`);
    });
}
