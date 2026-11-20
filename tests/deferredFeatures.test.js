import test from 'node:test';
import assert from 'node:assert/strict';
import { encryptionService } from '../src/services/encryptionService.js';
import { secretChatService } from '../src/services/secretChatService.js';
import { pushService } from '../src/services/pushService.js';

test('partial E2EE prototype fails closed for every cryptographic operation', async () => {
    for (const operation of [
        () => encryptionService.generateKeys(),
        () => encryptionService.exportPublicKey(),
        () => encryptionService.importPublicKey('key'),
        () => encryptionService.encrypt('text', 'key'),
        () => encryptionService.decrypt('ciphertext', 'key'),
        () => encryptionService.saveKeys(),
        () => encryptionService.loadKeys()
    ]) {
        await assert.rejects(Promise.resolve().then(operation), /не входит в Vortex 1\.0/);
    }
});

test('secret chat creation and destructive deletion are unavailable in 1.0', async () => {
    await assert.rejects(secretChatService.createSecretChat({ uid: 'alice' }, { uid: 'bob' }), /не входят в Vortex 1\.0/);
    await assert.rejects(secretChatService.destroySecretChat('chat-id'), /не входят в Vortex 1\.0/);
});

test('push prototype never requests permission or simulates server delivery', async () => {
    assert.equal(await pushService.init(), false);
    assert.equal(await pushService.subscribe('alice'), null);
    assert.equal(await pushService.unsubscribe('alice'), false);
    assert.equal(await pushService.sendNotification('bob', 'title', 'body', 'chat'), false);
});
