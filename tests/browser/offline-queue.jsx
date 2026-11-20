import { OfflineService } from '../../src/services/offlineService.js';

const service = new OfflineService({
    storage: window.localStorage,
    network: navigator,
    eventTarget: window,
    visibilityTarget: document,
    locks: navigator.locks
});

service.executeAction = async action => {
    const key = 'vortex.browserTest.remoteMessages';
    const current = JSON.parse(localStorage.getItem(key) || '[]');
    current.push({
        id: action.id,
        uid: action.user?.uid,
        chatId: action.chatId,
        text: action.text
    });
    localStorage.setItem(key, JSON.stringify(current));
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
        queue: service.getQueue(),
        remoteMessages: JSON.parse(localStorage.getItem('vortex.browserTest.remoteMessages') || '[]')
    })
};

document.querySelector('#status').textContent = 'Готово';
