// Ignore vertical page gestures and small movements; only a deliberate horizontal swipe navigates.
export function getImageSwipeDirection(start, end, zoom = 1, threshold = 55) {
    if (!start || !end || zoom !== 1) return 0;
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    if (![dx, dy, threshold].every(Number.isFinite) || threshold <= 0) return 0;
    if (Math.abs(dx) < threshold || Math.abs(dx) <= Math.abs(dy) * 1.3) return 0;
    return dx < 0 ? 1 : -1;
}
