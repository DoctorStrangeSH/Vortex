const dateFormatter = new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit', month: 'long', year: 'numeric'
});

// Group only when message data changes, not on every keystroke, timer or hover.
export function groupChatMessages(messages) {
    const grouped = [];
    let previousDate = null;
    for (const message of messages) {
        const date = message.createdAt?.toDate?.();
        const label = date ? dateFormatter.format(date) : '';
        if (label !== previousDate) {
            previousDate = label;
            grouped.push({ type: 'date', date: label });
        }
        grouped.push({ type: 'message', data: message });
    }
    return grouped;
}
