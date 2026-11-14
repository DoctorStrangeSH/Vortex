import test from 'node:test';
import assert from 'node:assert/strict';
import { OfflineService } from '../src/services/offlineService.js';

function createService() {
    const values = new Map();
    const storage = {
        getItem: key => values.get(key) ?? null,
        setItem: (key, value) => values.set(key, value)
    };
    const service = new OfflineService({ storage, network: { onLine: true }, createId: () => 'stable-message-id' });
    return { service, storage };
}

test('offline messages remain persisted when sending fails and disappear after confirmation', async () => {
    const { service, storage } = createService();
    await service.addToQueue({ type: 'sendMessage', text: 'Привет' });
    assert.equal(service.queue[0].id, 'stable-message-id');
    service.executeAction = async () => { throw new Error('network unavailable'); };
    const originalWarn = console.warn;
    console.warn = () => {};
    try { await service.processQueue(); }
    finally { console.warn = originalWarn; }
    assert.equal(JSON.parse(storage.getItem('offlineQueue')).length, 1);

    let sends = 0;
    service.executeAction = async () => { sends++; };
    await service.processQueue();
    assert.equal(sends, 1);
    assert.deepEqual(service.queue, []);
    assert.deepEqual(JSON.parse(storage.getItem('offlineQueue')), []);
});

test('parallel queue flushes cannot send the same action twice', async () => {
    const { service, storage } = createService();
    await service.addToQueue({ type: 'sendMessage', text: 'Один раз' });
    let release;
    let calls = 0;
    service.executeAction = async () => { calls++; await new Promise(resolve => { release = resolve; }); };

    const first = service.processQueue();
    const second = service.processQueue();
    assert.equal(calls, 1);
    assert.equal(JSON.parse(storage.getItem('offlineQueue')).length, 1);
    release();
    await Promise.all([first, second]);
    assert.equal(calls, 1);
    assert.deepEqual(service.queue, []);
});

test('queue stops on disconnection and resumes with unchanged IDs', async () => {
    const { service } = createService();
    await service.addToQueue({ type: 'sendMessage', text: 'После сети' });
    service.isOnline = false;
    let calls = 0;
    service.executeAction = async () => { calls++; };
    await service.processQueue();
    assert.equal(calls, 0);
    assert.equal(service.queue[0].id, 'stable-message-id');
    service.isOnline = true;
    await service.processQueue();
    assert.equal(calls, 1);
});

test('initialization registers connectivity handlers once and flushes persisted work', async () => {
    const listeners = new Map();
    const target = { addEventListener: (name, callback) => {
        const callbacks = listeners.get(name) || [];
        callbacks.push(callback);
        listeners.set(name, callbacks);
    } };
    const { storage } = createService();
    storage.setItem('offlineQueue', JSON.stringify([{ id: 'queued-id', type: 'sendMessage', text: 'После запуска' }]));
    const service = new OfflineService({ storage, network: { onLine: true }, eventTarget: target });
    let sends = 0;
    service.executeAction = async () => { sends++; };
    service.init();
    service.init();
    await service.processingPromise;
    assert.equal(listeners.get('online').length, 1);
    assert.equal(listeners.get('offline').length, 1);
    assert.equal(sends, 1);
    assert.deepEqual(service.queue, []);
});
