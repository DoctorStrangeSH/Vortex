const safeDocumentId = value =>
    typeof value === 'string' && value.length > 0 && !value.includes('/') && value !== '.' && value !== '..';

function validateParticipants(value, chatId) {
    if (!Array.isArray(value) || value.length < 1 || value.length > 100 ||
        value.some(uid => !safeDocumentId(uid)) || new Set(value).size !== value.length) {
        throw new Error(`Chat ${chatId} has invalid trusted participants`);
    }
    return value;
}

export function createFirestoreUnreadStore({ db, serverTimestamp }) {
    if (!db || typeof db.doc !== 'function' || typeof db.runTransaction !== 'function') {
        throw new TypeError('A Firestore Admin database instance is required');
    }
    if (typeof serverTimestamp !== 'function') {
        throw new TypeError('A serverTimestamp factory is required');
    }

    return {
        runTransaction(callback) {
            return db.runTransaction(async transaction => {
                const pendingWrites = [];
                const eventRefs = new Map();
                const counterRefs = new Map();

                const tx = {
                    async hasProcessed(eventId) {
                        if (!safeDocumentId(eventId)) throw new Error('Invalid unread event ID');
                        const ref = db.doc(`unreadProjectionEvents/${eventId}`);
                        eventRefs.set(eventId, ref);
                        const snapshot = await transaction.get(ref);
                        return snapshot.exists;
                    },
                    async getParticipants(chatId) {
                        if (!safeDocumentId(chatId)) throw new Error('Invalid unread chat ID');
                        const snapshot = await transaction.get(db.doc(`chats/${chatId}`));
                        if (!snapshot.exists) throw new Error(`Unread event references missing chat: ${chatId}`);
                        return validateParticipants(snapshot.data()?.participants, chatId);
                    },
                    async getCount(userId, chatId) {
                        if (!safeDocumentId(userId) || !safeDocumentId(chatId)) {
                            throw new Error('Invalid unread counter identity');
                        }
                        const key = `${userId}/${chatId}`;
                        const ref = db.doc(`users/${userId}/unreadChats/${chatId}`);
                        counterRefs.set(key, ref);
                        const snapshot = await transaction.get(ref);
                        if (!snapshot.exists) return 0;
                        return snapshot.data()?.count;
                    },
                    setCount(userId, chatId, count) {
                        if (!Number.isSafeInteger(count)) throw new Error('Unread counter must be a safe integer');
                        const key = `${userId}/${chatId}`;
                        const ref = counterRefs.get(key) || db.doc(`users/${userId}/unreadChats/${chatId}`);
                        counterRefs.set(key, ref);
                        pendingWrites.push(() => transaction.set(ref, {
                            count,
                            updatedAt: serverTimestamp(),
                            schemaVersion: 1
                        }, { merge: true }));
                    },
                    markProcessed(eventId) {
                        if (!safeDocumentId(eventId)) throw new Error('Invalid unread event ID');
                        const ref = eventRefs.get(eventId) || db.doc(`unreadProjectionEvents/${eventId}`);
                        eventRefs.set(eventId, ref);
                        pendingWrites.push(() => transaction.create(ref, {
                            processedAt: serverTimestamp(),
                            schemaVersion: 1
                        }));
                    }
                };

                const result = await callback(tx);
                for (const write of pendingWrites) write();
                return result;
            });
        }
    };
}
