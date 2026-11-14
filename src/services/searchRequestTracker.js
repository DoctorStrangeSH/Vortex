// A response may arrive after a newer query, account change, or component disposal.
// Only the latest issued request is allowed to update the search UI.
export function createSearchRequestTracker() {
    let generation = 0;
    let disposed = false;

    return {
        issue() {
            if (disposed) return null;
            generation += 1;
            return generation;
        },
        isCurrent(requestId) {
            return !disposed && requestId !== null && requestId === generation;
        },
        invalidate() {
            generation += 1;
        },
        dispose() {
            disposed = true;
            generation += 1;
        }
    };
}
