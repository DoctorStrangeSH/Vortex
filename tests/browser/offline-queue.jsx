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
    operationTrace.push({ tabId, at: Date.now(), monotonicAt: Math.round((performance.timeOrigin + performance.now()) * 10) / 10, event, ...details });
    if (operationTrace.length > 80) operationTrace.shift();
};
const originalSetItem = service.storage.setItem.bind(service.storage);
service.storage = {
    getItem: key => window.localStorage.getItem(key),
    setItem: (key, value) => {
        if (key === 'offlineQueue') {
            const queue = JSON.parse(value || '[]');
            trace('storage-write-start', { count: queue.length, lastText: queue.at(-1)?.text || null, lastId: queue.at(-1)?.id || null, ids: queue.map(item => item.id) });
            try {
                originalSetItem(key, value);
                trace('storage-write-ok', { count: queue.length, lastText: queue.at(-1)?.text || null, lastId: queue.at(-1)?.id || null, ids: queue.map(item => item.id) });
            } catch (error) {
                trace('storage-write-error', { name: error.name, message: error.message });
                throw error;
            }
            return;
        }
        originalSetItem(key, value);
    }
};
// Trace every queue boundary, not only successful writes. The intermittent
// race previously showed two successful writes based on the same queue size.
const originalRefreshQueue = service.refreshQueue.bind(service);
service.refreshQueue = () => {
    const before = service.queue.length;
    trace('refresh-start', { memoryCount: before, durableCount: JSON.parse(localStorage.getItem('offlineQueue') || '[]').length });
    const result = originalRefreshQueue();
    trace('refresh-end', { memoryCount: service.queue.length, durableCount: JSON.parse(localStorage.getItem('offlineQueue') || '[]').length });
    return result;
};
const originalAddToQueue = service.addToQueue.bind(service);
service.addToQueue = async action => {
    trace('enqueue-start', { text: action.text, memoryCount: service.queue.length, durableCount: JSON.parse(localStorage.getItem('offlineQueue') || '[]').length });
    try {
        const result = await originalAddToQueue(action);
        trace('enqueue-complete', { text: action.text, memoryCount: service.queue.length, durableCount: JSON.parse(localStorage.getItem('offlineQueue') || '[]').length });
        return result;
    } catch (error) {
        trace('enqueue-error', { text: action.text, name: error.name, message: error.message });
        throw error;
    }
};
const originalProcessQueue = service.processQueue.bind(service);
service.processQueue = async () => {
    trace('process-start', { online: service.isOnline, activeUid: service.activeUid, memoryCount: service.queue.length, durableCount: JSON.parse(localStorage.getItem('offlineQueue') || '[]').length });
    try {
        return await originalProcessQueue();
    } finally {
        trace('process-finish', { online: service.isOnline, memoryCount: service.queue.length, durableCount: JSON.parse(localStorage.getItem('offlineQueue') || '[]').length });
    }
};

const originalWithQueueLock = service.withQueueLock.bind(service);
service.withQueueLock = callback => {
    trace('lock-requested', { countAtRequest: JSON.parse(localStorage.getItem('offlineQueue') || '[]').length });
    return originalWithQueueLock(async () => {
    trace('lock-acquired', { countBefore: JSON.parse(localStorage.getItem('offlineQueue') || '[]').length });
    try {
        return await callback();
    } finally {
        trace('lock-released', { countAfter: JSON.parse(localStorage.getItem('offlineQueue') || '[]').length });
    }
    });
};

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
