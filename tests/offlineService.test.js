import test from 'node:test';
import assert from 'node:assert/strict';
import { OfflineService } from '../src/services/offlineService.js';

function createService() {
    let nextId = 0;
    const values = new Map();
    const storage = {
        getItem: key => values.get(key) ?? null,
        setItem: (key, value) => values.set(key, value)
    };
    const service = new OfflineService({ storage, network: { onLine: true }, createId: () => `test-message-${++nextId}` });
    return { service, storage };
}

test('offline messages remain persisted when sending fails and disappear after confirmation', async () => {
    const { service, storage } = createService();
    await service.addToQueue({ type: 'sendMessage', text: 'Привет' });
    assert.equal(service.queue[0].id, 'test-message-1');
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
    assert.equal(service.queue[0].id, 'test-message-1');
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

test('switching accounts only flushes the signed-in owner while retaining the other queue', async () => {
    const { service } = createService();
    service.isOnline = false;
    await service.addToQueue({ type: 'sendMessage', user: { uid: 'alice' }, text: 'Алиса 1' });
    await service.addToQueue({ type: 'sendMessage', user: { uid: 'bob' }, text: 'Боб' });
    await service.addToQueue({ type: 'sendMessage', user: { uid: 'alice' }, text: 'Алиса 2' });

    const delivered = [];
    service.executeAction = async action => { delivered.push(`${action.user.uid}: ${action.text}`); };
    service.isOnline = true;
    service.setActiveUser('bob');
    await service.processingPromise;
    assert.deepEqual(delivered, ['bob: Боб']);
    assert.deepEqual(service.getQueue().map(action => action.text), ['Алиса 1', 'Алиса 2']);

    service.setActiveUser(null);
    await service.processQueue();
    assert.deepEqual(delivered, ['bob: Боб']);

    service.setActiveUser('alice');
    await service.processingPromise;
    assert.deepEqual(delivered, ['bob: Боб', 'alice: Алиса 1', 'alice: Алиса 2']);
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
    storage.setItem('offlineQueue', JSON.stringify([{ id: 'queued-id', type: 'sendMessage', user: { uid: 'alice' }, text: 'После запуска' }]));
    const service = new OfflineService({ storage, network: { onLine: true }, eventTarget: target });
    let sends = 0;
    service.executeAction = async () => { sends++; };
    service.setActiveUser('alice');
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
        a.addToQueue({ type: 'sendMessage', user: { uid: 'alice' }, text: 'Первое' }),
        b.addToQueue({ type: 'sendMessage', user: { uid: 'alice' }, text: 'Второе' })
    ]);
    assert.deepEqual(JSON.parse(storage.getItem('offlineQueue')).map(x => x.id), ['a', 'b']);
    const delivered = [];
    a.activeUid = 'alice';
    b.activeUid = 'alice';
    a.executeAction = async action => { delivered.push(action.id); };
    b.executeAction = async action => { delivered.push(action.id); };
    await Promise.all([a.processQueue(), b.processQueue()]);
    assert.deepEqual(delivered, ['a', 'b']);
    assert.deepEqual(JSON.parse(storage.getItem('offlineQueue')), []);
    assert.deepEqual(b.getQueue(), []);
});

test('account switch during an in-flight flush schedules a pass for the new account', async () => {
    const { service } = createService();
    service.isOnline = false;
    await service.addToQueue({ type: 'sendMessage', user: { uid: 'bob' }, text: 'Боб ждёт' });
    await service.addToQueue({ type: 'sendMessage', user: { uid: 'alice' }, text: 'Алиса отправляет' });
    service.isOnline = true;
    service.activeUid = 'alice';

    let releaseAlice;
    const delivered = [];
    service.executeAction = async action => {
        if (action.user.uid === 'alice') {
            await new Promise(resolve => { releaseAlice = resolve; });
        }
        delivered.push(action.user.uid);
    };

    const firstPass = service.processQueue();
    await new Promise(resolve => setImmediate(resolve));
    assert.deepEqual(delivered, []);
    service.setActiveUser('bob');
    releaseAlice();
    await firstPass;

    assert.deepEqual(delivered, ['alice', 'bob']);
    assert.deepEqual(service.getQueue(), []);
});

test('a storage event refreshes the queue and schedules delivery for the active account', async () => {
    const listeners = new Map();
    const target = { addEventListener: (name, callback) => listeners.set(name, callback) };
    const values = new Map();
    const storage = { getItem: key => values.get(key) ?? null, setItem: (key, value) => values.set(key, value) };
    const service = new OfflineService({ storage, network: { onLine: true }, eventTarget: target });
    service.setActiveUser('alice');
    service.executeAction = async () => {};
    service.init();
    values.set('offlineQueue', JSON.stringify([{ id: 'from-another-tab', type: 'sendMessage', user: { uid: 'alice' }, text: 'Из вкладки B' }]));
    listeners.get('storage')({ key: 'offlineQueue' });
    await service.processingPromise;
    assert.deepEqual(service.getQueue(), []);
});

test('coming online before authentication leaves queued messages untouched until sign-in', async () => {
    const { service } = createService();
    service.goOffline();
    await service.addToQueue({ type: 'sendMessage', user: { uid: 'alice' }, text: 'После входа' });
    let sends = 0;
    service.executeAction = async () => { sends++; };

    service.goOnline();
    assert.equal(sends, 0);
    assert.equal(service.getQueue().length, 1);

    service.setActiveUser('alice');
    await service.processingPromise;
    assert.equal(sends, 1);
    assert.deepEqual(service.getQueue(), []);
});

test('storage quota failure never leaves a phantom queued message', async () => {
    const values = new Map([['offlineQueue', '[]']]);
    const storage = {
        getItem: key => values.get(key) ?? null,
        setItem: () => { throw new Error('QuotaExceededError'); }
    };
    const service = new OfflineService({ storage, network: { onLine: false } });
    const snapshots = [];
    service.onQueueChange(queue => snapshots.push(queue.length));
    await assert.rejects(
        service.addToQueue({ type: 'sendMessage', user: { uid: 'alice' }, text: 'Сохранить черновик' }),
        /Не удалось сохранить сообщение/
    );
    assert.deepEqual(service.getQueue(), []);
    assert.equal(storage.getItem('offlineQueue'), '[]');
    assert.deepEqual(snapshots, [0, 0]);
});

test('an unavailable local store rejects offline delivery instead of pretending to queue', async () => {
    const service = new OfflineService({ storage: null, network: { onLine: false } });
    await assert.rejects(
        service.addToQueue({ type: 'sendMessage', user: { uid: 'alice' }, text: 'Важное сообщение' }),
        /Не удалось сохранить сообщение/
    );
    assert.equal(service.getQueue().length, 0);
});
