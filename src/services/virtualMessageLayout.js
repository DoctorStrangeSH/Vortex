// Estimates are replaced with measured heights as message rows enter the viewport.
export function estimatedMessageHeight(message) {
    return message?.type === 'date' ? 36 : 72;
}

export function buildMessageOffsets(messages, measuredHeights, estimatedHeight = estimatedMessageHeight) {
    const offsets = [0];
    for (const message of messages) {
        const height = measuredHeights.get(message.id);
        offsets.push(offsets[offsets.length - 1] + (Number.isFinite(height) && height > 0 ? height : (typeof estimatedHeight === 'function' ? estimatedHeight(message) : estimatedHeight)));
    }
    return offsets;
}

function indexAtOffset(offsets, position) {
    let low = 0;
    let high = offsets.length - 1;
    while (low < high) {
        const mid = Math.floor((low + high + 1) / 2);
        if (offsets[mid] <= position) low = mid;
        else high = mid - 1;
    }
    return Math.min(low, offsets.length - 2);
}

export function getVisibleMessageRange(offsets, scrollTop, viewportHeight, overscan = 8) {
    const count = offsets.length - 1;
    if (count <= 0) return { start: 0, end: 0 };
    const top = Math.max(0, scrollTop);
    const bottom = top + Math.max(0, viewportHeight);
    const start = Math.max(0, indexAtOffset(offsets, top) - overscan);
    const end = Math.min(count, indexAtOffset(offsets, bottom) + overscan + 1);
    return { start, end };
}

// Keep ResizeObserver callbacks O(1) per measured row, even in large chats.
export function indexMessagesById(messages) {
    return new Map(messages.map((message, index) => [message.id, index]));
}

export function shouldUpdateMeasuredHeight(height, previousHeight) {
    return Number.isFinite(height) && height > 0 &&
        Number.isFinite(previousHeight) && Math.abs(height - previousHeight) >= 0.5;
}

export function scrollAnchorAdjustment(rowBottom, scrollTop, oldHeight, newHeight) {
    if (!Number.isFinite(rowBottom) || !Number.isFinite(scrollTop) ||
        !shouldUpdateMeasuredHeight(newHeight, oldHeight)) return 0;
    return rowBottom <= scrollTop ? newHeight - oldHeight : 0;
}

// A late-loading image should keep the latest message visible if the reader
// was already near the bottom; scrolling through history must not be overridden.
export function isNearVirtualBottom(scrollHeight, scrollTop, viewportHeight, threshold = 100) {
    if (![scrollHeight, scrollTop, viewportHeight].every(Number.isFinite)) return false;
    return scrollHeight - scrollTop - viewportHeight <= threshold;
}

export function getMessageNavigationTop(messages, offsets, messageId, viewportHeight, align = 'start') {
    if (!messageId || offsets.length !== messages.length + 1) return null;
    const index = messages.findIndex(message => message.id === messageId);
    if (index < 0) return null;
    const rowTop = offsets[index];
    const rowHeight = offsets[index + 1] - rowTop;
    const height = Math.max(0, Number.isFinite(viewportHeight) ? viewportHeight : 0);
    const totalHeight = offsets[offsets.length - 1];
    let top = rowTop;
    if (align === 'center') top -= (height - rowHeight) / 2;
    if (align === 'end') top -= height - rowHeight;
    return Math.max(0, Math.min(Math.max(0, totalHeight - height), top));
}

// When older messages are prepended, preserve the previously visible content.
// The former first row is the anchor; its new top equals the inserted height.
export function getPrependedScrollOffset(previousFirstId, messages, offsets, previousAnchorTop = 0) {
    if (!previousFirstId || !messages.length || messages[0].id === previousFirstId ||
        offsets.length !== messages.length + 1) return 0;
    const index = messages.findIndex(message => message.id === previousFirstId);
    const delta = offsets[index] - previousAnchorTop;
    return index > 0 && Number.isFinite(delta) && delta > 0 ? delta : 0;
}
