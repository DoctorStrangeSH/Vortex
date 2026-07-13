export function useSwipe(elementRef, onSwipeLeft, onSwipeRight, threshold = 80) {
    let startX = 0;
    let startY = 0;

    const handleTouchStart = (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        const diffX = endX - startX;
        const diffY = endY - startY;

        // Только горизонтальный свайп
        if (Math.abs(diffX) < Math.abs(diffY)) return;
        if (Math.abs(diffX) < threshold) return;

        if (diffX > 0) {
            onSwipeRight?.();
        } else {
            onSwipeLeft?.();
        }
    };

    const attach = () => {
        const el = elementRef.current;
        if (!el) return;
        el.addEventListener('touchstart', handleTouchStart);
        el.addEventListener('touchend', handleTouchEnd);
    };

    const detach = () => {
        const el = elementRef.current;
        if (!el) return;
        el.removeEventListener('touchstart', handleTouchStart);
        el.removeEventListener('touchend', handleTouchEnd);
    };

    return { attach, detach };
}