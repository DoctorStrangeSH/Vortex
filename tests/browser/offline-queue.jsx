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
    operationTrace.push({
        tabId,
        at: Date.now(),
        monotonicAt: Math.round((performance.timeOrigin + performance.now()) * 10) / 10,
        round: Number(localStorage.getItem('vortex.browserTest.currentRound') || 0),
        event,
        ...details
    });
    if (operationTrace.length > 80) operationTrace.shift();
};
const originalGetItem = service.storage.getItem.bind(service.storage);
const originalSetItem = service.storage.setItem.bind(service.storage);
const originalRemoveItem = service.storage.removeItem.bind(service.storage);
const originalKey = service.storage.key.bind(service.storage);
const readDurableQueue = () => {
    const items = [];
    for (let index = 0; index < localStorage.length; index++) {
        const key = localStorage.key(index);
        if (!key?.startsWith('offlineQueue:item:')) continue;
        try {
            const item = JSON.parse(localStorage.getItem(key) || 'null');
            if (item) items.push(item);
        } catch { /* Corrupt entries are reported by OfflineService. */ }
    }
    const legacy = localStorage.getItem('offlineQueue');
    if (legacy) {
        try { items.push(...JSON.parse(legacy)); } catch { /* Keep legacy corruption visible to the service. */ }
    }
    return items.sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));
};
service.storage = {
    get length() { return localStorage.length; },
    key: index => originalKey(index),
    getItem: key => {
        const value = originalGetItem(key);
        if (key === 'offlineQueue' || key.startsWith('offlineQueue:item:')) {
            trace('storage-read', {
                count: readDurableQueue().length,
                key,
                valuePresent: value !== null
            });
        }
        return value;
    },
    setItem: (key, value) => {
        if (key.startsWith('offlineQueue:item:')) {
            const item = JSON.parse(value);
            trace('storage-write-start', { count: readDurableQueue().length + 1, key, lastText: item.text || null, lastId: item.id || null });
            try {
                originalSetItem(key, value);
                trace('storage-write-ok', { count: readDurableQueue().length, key, lastText: item.text || null, lastId: item.id || null });
            } catch (error) {
                trace('storage-write-error', { key, name: error.name, message: error.message });
                throw error;
            }
            return;
        }
        originalSetItem(key, value);
    },
    removeItem: key => {
        originalRemoveItem(key);
        if (key.startsWith('offlineQueue:item:')) trace('storage-remove', { key, durableCount: readDurableQueue().length });
    }
};
// Trace every queue boundary, not only successful writes. The intermittent
// race previously showed two successful writes based on the same queue size.
const originalRefreshQueue = service.refreshQueue.bind(service);
service.refreshQueue = () => {
    const before = service.queue.length;
    trace('refresh-start', { memoryCount: before, durableCount: readDurableQueue().length });
    const result = originalRefreshQueue();
    trace('refresh-end', {
        memoryCount: service.queue.length,
        durableCount: readDurableQueue().length,
        memoryTail: service.queue.slice(-3).map(item => item.text),
        memoryRecentIds: service.queue.slice(-4).map(item => item.id)
    });
    return result;
};
const originalAddToQueue = service.addToQueue.bind(service);
service.addToQueue = async action => {
    trace('enqueue-start', { text: action.text, memoryCount: service.queue.length, durableCount: readDurableQueue().length });
    try {
        const result = await originalAddToQueue(action);
        trace('enqueue-complete', { text: action.text, memoryCount: service.queue.length, durableCount: readDurableQueue().length });
        return result;
    } catch (error) {
        trace('enqueue-error', { text: action.text, name: error.name, message: error.message });
        throw error;
    }
};
const originalProcessQueue = service.processQueue.bind(service);
service.processQueue = async () => {
    trace('process-start', { online: service.isOnline, activeUid: service.activeUid, memoryCount: service.queue.length, durableCount: readDurableQueue().length });
    try {
        return await originalProcessQueue();
    } finally {
        trace('process-finish', { online: service.isOnline, memoryCount: service.queue.length, durableCount: readDurableQueue().length });
    }
};

const originalWithQueueLock = service.withQueueLock.bind(service);
service.withQueueLock = callback => {
    trace('lock-requested', {
        lockName: 'vortex-offline-queue',
        hasLockManager: Boolean(service.locks?.request),
        countAtRequest: readDurableQueue().length
    });
    return originalWithQueueLock(async () => {
    const heldLocks = service.locks?.query ? await service.locks.query() : null;
    trace('lock-acquired', {
        lockName: 'vortex-offline-queue',
        countBefore: readDurableQueue().length,
        queueTailBefore: service.queue.slice(-3).map(item => item.text),
        queueRecentIdsBefore: service.queue.slice(-4).map(item => item.id),
        heldLocks
    });
    try {
        return await callback();
    } finally {
        trace('lock-released', { countAfter: readDurableQueue().length });
    }
    });
};

// Capture cross-tab storage notifications separately from queue mutations. The
// storage event is delivered to the other document after the originating write.
window.addEventListener('storage', event => {
    if (event.key !== 'offlineQueue' && !event.key?.startsWith('offlineQueue:item:')) return;
    trace('storage-event', {
        key: event.key,
        oldValuePresent: event.oldValue !== null,
        newValuePresent: event.newValue !== null,
        currentCount: readDurableQueue().length
    });
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
