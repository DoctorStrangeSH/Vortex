export function isNearChatBottom({ scrollHeight, scrollTop, clientHeight }, threshold = 60) {
    return scrollHeight - scrollTop - clientHeight <= threshold;
}

export function getInitialChatScrollTarget(firstUnreadMessageId) {
    return firstUnreadMessageId ? { type: 'unread', messageId: firstUnreadMessageId } : { type: 'latest' };
}

export function getMessageScrollTop({ scrollTop, containerTop, messageTop, margin = 12 }) {
    return Math.max(0, scrollTop + messageTop - containerTop - margin);
}

// Scroll only the conversation pane, never an outer page or modal.
export function getBottomScrollTop({ scrollHeight, clientHeight }) {
    return Math.max(0, scrollHeight - clientHeight);
}

export function getCenteredMessageScrollTop({ scrollTop, scrollHeight, clientHeight, containerTop, messageTop, messageHeight }) {
    const desired = scrollTop + messageTop - containerTop - (clientHeight - messageHeight) / 2;
    return Math.min(Math.max(0, desired), Math.max(0, scrollHeight - clientHeight));
}
