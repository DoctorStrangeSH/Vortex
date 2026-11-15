// Search a bounded number of older history pages for a pinned message.
// The caller owns the cursor and can safely retain fetched pages even if not found.
export async function findPinnedInHistory({ messageId, cursor, fetchPage, isActive = () => true, maxPages = 5 }) {
    const messages = [];
    let nextCursor = cursor;
    let hasMore = !!cursor;
    let found = false;
    let cancelled = false;
    for (let pageIndex = 0; pageIndex < maxPages && hasMore && nextCursor; pageIndex += 1) {
        if (!isActive()) { cancelled = true; break; }
        const page = await fetchPage(nextCursor);
        if (!isActive()) { cancelled = true; break; }
        messages.push(...page.messages);
        nextCursor = page.cursor;
        hasMore = !!page.hasMore && !!nextCursor;
        if (page.messages.some(message => message.id === messageId)) {
            found = true;
            break;
        }
    }
    return { messages, cursor: nextCursor, hasMore, found, cancelled };
}
