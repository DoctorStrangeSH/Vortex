import { OfflineService } from '../../src/services/offlineService.js';

const service = new OfflineService({
    storage: window.localStorage,
    network: navigator,
    eventTarget: window,
    visibilityTarget: document,
    locks: new URLSearchParams(location.search).has('no-locks') ? null : navigator.locks
});

service.executeAction = async action => {
    const attemptsKey = 'vortex.browserTest.deliveryAttempts';
    const attempts = Number(localStorage.getItem(attemptsKey) || 0);
    localStorage.setItem(attemptsKey, String(attempts + 1));

    // Model the server-side create-if-absent transaction by stable message ID.
    // The check-and-write section is synchronous, like one atomic transaction.
    await new Promise(resolve => setTimeout(resolve, 40));
    const key = 'vortex.browserTest.remoteMessages';
    const current = JSON.parse(localStorage.getItem(key) || '[]');
    if (!current.some(message => message.id === action.id)) {
        current.push({
            id: action.id,
            uid: action.user?.uid,
            chatId: action.chatId,
            text: action.text
        });
        localStorage.setItem(key, JSON.stringify(current));
    }
};

// Keep compact per-tab diagnostics. Never serialize the full queue into
// CI failure output: the log truncation previously hid the decisive events.
const operationTrace = [];
const tabId = crypto.randomUUID();
const trace = (event, details = {}) => {
    operationTrace.push({ tabId, at: Math.round(performance.now() * 10) / 10, event, ...details });
    if (operationTrace.length > 80) operationTrace.shift();
};
const originalSetItem = service.storage.setItem.bind(service.storage);
service.storage = {
    getItem: key => window.localStorage.getItem(key),
    setItem: (key, value) => {
        if (key === 'offlineQueue') {
            const queue = JSON.parse(value || '[]');
            trace('storage-write-start', { count: queue.length, lastText: queue.at(-1)?.text || null });
            try {
                originalSetItem(key, value);
                trace('storage-write-ok', { count: queue.length, lastText: queue.at(-1)?.text || null });
            } catch (error) {
                trace('storage-write-error', { name: error.name, message: error.message });
                throw error;
            }
            return;
        }
        originalSetItem(key, value);
    }
};
const originalWithQueueLock = service.withQueueLock.bind(service);
service.withQueueLock = callback => originalWithQueueLock(async () => {
    trace('lock-acquired', { countBefore: JSON.parse(localStorage.getItem('offlineQueue') || '[]').length });
    try {
        return await callback();
    } finally {
        trace('lock-released', { countAfter: JSON.parse(localStorage.getItem('offlineQueue') || '[]').length });
    }
});

service.init();

window.offlineQueueQA = {
    setActiveUser: uid => service.setActiveUser(uid),
    enqueue: (uid, text) => service.addToQueue({
        type: 'sendMessage',
        chatId: 'browser-test-chat',
        text,
        user: { uid }
    }),
    snapshot: () => {
        // A tab does not receive its own storage event. Refresh from durable
        // storage before exposing the shared queue to browser assertions.
        service.refreshQueue();
        return {
            tabId,
            isOnline: service.isOnline,
            activeUid: service.activeUid,
            hasWebLocks: Boolean(service.locks?.request),
            operationTrace: [...operationTrace],
            deliveryAttempts: Number(localStorage.getItem('vortex.browserTest.deliveryAttempts') || 0),
            queue: service.getQueue(),
            remoteMessages: JSON.parse(localStorage.getItem('vortex.browserTest.remoteMessages') || '[]')
        };
    }
};

document.querySelector('#status').textContent = 'Готово';
