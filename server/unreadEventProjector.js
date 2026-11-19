import { getUnreadCounterDeltas } from './unreadCounterModel.js';

// Participant membership is loaded by the storage adapter inside the same
// transaction as the counters. Never accept it from a client event payload.
export async function projectUnreadEvent(store, { eventId, chatId, before = null, after = null }) {
    if (typeof eventId !== 'string' || !eventId || typeof chatId !== 'string' || !chatId) {
        throw new Error('Unread event requires stable eventId and chatId');
    }

    return store.runTransaction(async tx => {
        if (await tx.hasProcessed(eventId)) return { applied: false, deltas: {} };

        const participants = await tx.getParticipants(chatId);
        const deltas = getUnreadCounterDeltas(before, after, participants);

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
