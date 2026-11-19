export function mergeMessagePages(older, latest) {
    const byId = new Map();
    for (const message of older) byId.set(message.id, message);
    for (const message of latest) byId.set(message.id, message);
    return Array.from(byId.values()).sort((a, b) => {
        const left = a.createdAt?.toMillis?.() ?? 0;
        const right = b.createdAt?.toMillis?.() ?? 0;
        return left - right || a.id.localeCompare(b.id);
    });
}
