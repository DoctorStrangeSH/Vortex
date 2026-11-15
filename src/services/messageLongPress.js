// Cancel hold-to-select when the user is scrolling or swiping.
export function shouldCancelLongPress(startX, startY, currentX, currentY, tolerance = 12) {
    if (![startX, startY, currentX, currentY, tolerance].every(Number.isFinite) || tolerance < 0) return true;
    return Math.hypot(currentX - startX, currentY - startY) > tolerance;
}

// Mobile browsers may synthesize a click after a completed long press.
export function shouldSuppressMessageClick(messageId, suppression, now) {
    return !!suppression && suppression.messageId === messageId &&
        Number.isFinite(now) && now <= suppression.expiresAt;
}
