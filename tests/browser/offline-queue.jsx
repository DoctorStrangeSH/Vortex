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

service.init();

window.offlineQueueQA = {
    setActiveUser: uid => service.setActiveUser(uid),
    enqueue: (uid, text) => service.addToQueue({
        type: 'sendMessage',
        chatId: 'browser-test-chat',
        text,
        user: { uid }
    }),
    snapshot: () => ({
        isOnline: service.isOnline,
        activeUid: service.activeUid,
        hasWebLocks: Boolean(service.locks?.request),
        deliveryAttempts: Number(localStorage.getItem('vortex.browserTest.deliveryAttempts') || 0),
        queue: service.getQueue(),
        remoteMessages: JSON.parse(localStorage.getItem('vortex.browserTest.remoteMessages') || '[]')
    })
};

document.querySelector('#status').textContent = 'Готово';
