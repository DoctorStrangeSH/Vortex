export const OLDER_MESSAGES_TRIGGER_PX = 160;

export function shouldLoadOlderMessages({
    scrollTop,
    initialized,
    loading,
    hasMore,
    hasCursor,
    triggerPx = OLDER_MESSAGES_TRIGGER_PX
}) {
    return initialized && !loading && hasMore && hasCursor &&
        Number.isFinite(scrollTop) && scrollTop >= 0 && scrollTop <= triggerPx;
}
