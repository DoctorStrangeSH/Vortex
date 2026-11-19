export function clampOverlayPosition(x, y, width, height, viewportWidth, viewportHeight, gap = 8) {
    const safeX = Number.isFinite(x) ? x : gap;
    const safeY = Number.isFinite(y) ? y : gap;
    return {
        x: Math.max(gap, Math.min(safeX, Math.max(gap, viewportWidth - width - gap))),
        y: Math.max(gap, Math.min(safeY, Math.max(gap, viewportHeight - height - gap)))
    };
}
