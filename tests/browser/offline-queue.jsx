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

// Capture lock acquisition and durable state in this fixture so a
// cross-tab regression explains which tab entered the critical section.
const lockTrace = [];
const tabId = crypto.randomUUID();
const originalWithQueueLock = service.withQueueLock.bind(service);
service.withQueueLock = callback => originalWithQueueLock(async () => {
    lockTrace.push({ tabId, at: performance.now(), event: 'lock-acquired', before: localStorage.getItem('offlineQueue') });
    try {
        return await callback();
    } finally {
        lockTrace.push({ tabId, at: performance.now(), event: 'lock-released', after: localStorage.getItem('offlineQueue') });
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
            lockTrace: [...lockTrace],
            deliveryAttempts: Number(localStorage.getItem('vortex.browserTest.deliveryAttempts') || 0),
            queue: service.getQueue(),
            remoteMessages: JSON.parse(localStorage.getItem('vortex.browserTest.remoteMessages') || '[]')
        };
    }
};

document.querySelector('#status').textContent = 'Готово';
