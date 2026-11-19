// Coalesce rapid scroll, focus and snapshot events into one DOM read per frame.
export function createFrameScheduler(callback, requestFrame, cancelFrame) {
    let pendingFrame = null;
    return {
        schedule() {
            if (pendingFrame !== null) return;
            pendingFrame = requestFrame(() => {
                pendingFrame = null;
                callback();
            });
        },
        cancel() {
            if (pendingFrame === null) return;
            cancelFrame(pendingFrame);
            pendingFrame = null;
        }
    };
}
