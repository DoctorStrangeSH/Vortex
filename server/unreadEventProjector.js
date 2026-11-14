import { getUnreadCounterDeltas } from './unreadCounterModel.js';

// Storage adapter contract:
// store.runTransaction(async tx => {
//   await tx.hasProcessed(eventId);
//   await tx.getCount(userId, chatId);
//   tx.setCount(userId, chatId, count);
//   tx.markProcessed(eventId);
// });
// The adapter must atomically commit all counter writes and the event receipt.
export async function projectUnreadEvent(store, { eventId, chatId, before = null, after = null, participants }) {
    if (typeof eventId !== 'string' || !eventId || typeof chatId !== 'string' || !chatId) {
        throw new Error('Unread event requires stable eventId and chatId');
    }
    if (!Array.isArray(participants)) throw new Error('Unread event requires chat participants');

    const deltas = getUnreadCounterDeltas(before, after, participants);
    return store.runTransaction(async tx => {
        if (await tx.hasProcessed(eventId)) return { applied: false, deltas: {} };
        // Read every counter before any writes (required by Firestore transactions).
        const existing = {};
        for (const uid of Object.keys(deltas)) {
            const count = await tx.getCount(uid, chatId);
            if (!Number.isSafeInteger(count)) throw new Error('Unread counter requires a numeric baseline');
            existing[uid] = count;
        }
        for (const [uid, delta] of Object.entries(deltas)) {
            const next = existing[uid] + delta;
            if (!Number.isSafeInteger(next)) throw new Error('Unread counter overflow');
            tx.setCount(uid, chatId, next);
        }
        tx.markProcessed(eventId);
        return { applied: true, deltas };
    });
}
