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

test('a corrupted stored queue cannot prevent the messenger from starting', async () => {
    const { storage } = createService();
    storage.setItem('offlineQueue', '{broken-json');
    const originalWarn = console.warn;
    console.warn = () => {};
    try {
        const recovered = new OfflineService({ storage, network: { onLine: false } });
        assert.deepEqual(recovered.getQueue(), []);
        await recovered.addToQueue({ type: 'sendMessage', text: 'Новое сообщение' });
        assert.equal(JSON.parse(storage.getItem('offlineQueue')).length, 1);
    } finally { console.warn = originalWarn; }
});

test('later offline messages wait behind a failed send and preserve delivery order', async () => {
    const values = new Map();
    let id = 0;
    const storage = { getItem: key => values.get(key) ?? null, setItem: (key, value) => values.set(key, value) };
    const service = new OfflineService({ storage, network: { onLine: false }, createId: () => String(++id) });
    await service.addToQueue({ type: 'sendMessage', text: 'Первое' });
    await service.addToQueue({ type: 'sendMessage', text: 'Второе' });
    service.isOnline = true;
    const delivered = [];
    let failOnce = true;
    service.executeAction = async action => {
        if (failOnce) { failOnce = false; throw new Error('temporary'); }
        delivered.push(action.text);
    };
    const originalWarn = console.warn;
    console.warn = () => {};
    try { await service.processQueue(); }
    finally { console.warn = originalWarn; }
    assert.deepEqual(delivered, []);
    assert.deepEqual(service.getQueue().map(item => item.text), ['Первое', 'Второе']);
    await service.processQueue();
    assert.deepEqual(delivered, ['Первое', 'Второе']);
    assert.deepEqual(service.getQueue(), []);
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

test('queue subscribers receive sending, failure, and confirmed removal states', async () => {
    const { service } = createService();
    const states = [];
    const unsubscribe = service.onQueueChange(items => states.push(items.map(item => item.status || 'queued')));
    await service.addToQueue({ type: 'sendMessage', chatId: 'chat-1', user: { uid: 'user-1' }, text: 'Тест' });
    service.executeAction = async () => { throw new Error('temporary'); };
    const originalWarn = console.warn;
    console.warn = () => {};
    try { await service.processQueue(); }
    finally { console.warn = originalWarn; }
    assert.equal(service.getQueue()[0].status, 'failed');
    service.executeAction = async () => {};
    await service.processQueue();
    assert.deepEqual(states, [[], ['queued'], ['sending'], ['failed'], ['sending'], []]);
    unsubscribe();
    await service.addToQueue({ type: 'sendMessage', text: 'Другое' });
    assert.equal(states.length, 6);
});

test('two tabs share one queue and send each queued action only once with Web Locks', async () => {
    const values = new Map();
    const storage = { getItem: key => values.get(key) ?? null, setItem: (key, value) => values.set(key, value) };
    let current = Promise.resolve();
    const locks = { request: (_name, _options, callback) => {
        const next = current.then(callback);
        current = next.catch(() => {});
        return next;
    } };
    const a = new OfflineService({ storage, network: { onLine: true }, locks, createId: () => 'a' });
    const b = new OfflineService({ storage, network: { onLine: true }, locks, createId: () => 'b' });
    await Promise.all([
        a.addToQueue({ type: 'sendMessage', text: 'Первое' }),
        b.addToQueue({ type: 'sendMessage', text: 'Второе' })
    ]);
    assert.deepEqual(JSON.parse(storage.getItem('offlineQueue')).map(x => x.id), ['a', 'b']);
    const delivered = [];
    a.executeAction = async action => { delivered.push(action.id); };
    b.executeAction = async action => { delivered.push(action.id); };
    await Promise.all([a.processQueue(), b.processQueue()]);
    assert.deepEqual(delivered, ['a', 'b']);
    assert.deepEqual(JSON.parse(storage.getItem('offlineQueue')), []);
    assert.deepEqual(b.getQueue(), []);
});
