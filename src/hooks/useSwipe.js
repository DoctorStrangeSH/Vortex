import { useEffect, useRef } from 'preact/hooks';

// Return a reply gesture only when horizontal travel clearly dominates.
export function getSwipeDirection(deltaX, deltaY, threshold = 80) {
    if (!Number.isFinite(deltaX) || !Number.isFinite(deltaY) ||
        !Number.isFinite(threshold) || threshold <= 0) return null;
    if (Math.abs(deltaX) < threshold || Math.abs(deltaX) <= Math.abs(deltaY)) return null;
    return deltaX < 0 ? 'left' : 'right';
}

export function useSwipe(elementRef, onSwipeLeft, onSwipeRight, threshold = 80) {
    const callbacksRef = useRef({ onSwipeLeft, onSwipeRight, threshold });
    callbacksRef.current = { onSwipeLeft, onSwipeRight, threshold };

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return undefined;
        let start = null;

        const onStart = (event) => {
            if (event.touches.length !== 1) { start = null; return; }
            const touch = event.touches[0];
            start = { x: touch.clientX, y: touch.clientY, id: touch.identifier };
        };
        const onEnd = (event) => {
            if (!start) return;
            const touch = Array.from(event.changedTouches).find(item => item.identifier === start.id);
            if (!touch) return;
            const direction = getSwipeDirection(touch.clientX - start.x, touch.clientY - start.y, callbacksRef.current.threshold);
            start = null;
            if (direction === 'left') callbacksRef.current.onSwipeLeft?.();
            if (direction === 'right') callbacksRef.current.onSwipeRight?.();
        };
        const onCancel = () => { start = null; };

        element.addEventListener('touchstart', onStart, { passive: true });
        element.addEventListener('touchend', onEnd);
        element.addEventListener('touchcancel', onCancel);
        return () => {
            element.removeEventListener('touchstart', onStart);
            element.removeEventListener('touchend', onEnd);
            element.removeEventListener('touchcancel', onCancel);
        };
    }, [elementRef]);
}
