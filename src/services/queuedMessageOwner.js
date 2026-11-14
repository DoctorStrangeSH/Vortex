// Offline data is stored per browser profile, not per Firebase session.
// Never replay a queued message after another account signs in.
export function assertQueuedMessageOwner(action, activeUid) {
    if (!action?.user?.uid || !activeUid || action.user.uid !== activeUid) {
        throw new Error('Сообщение ожидает входа в исходный аккаунт');
    }
}
