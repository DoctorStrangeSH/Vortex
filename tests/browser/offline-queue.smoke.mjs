import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { setTimeout as delay } from 'node:timers/promises';
import { chromium } from 'playwright-core';

const port = 4188;
const origin = `http://127.0.0.1:${port}`;
const server = spawn(process.execPath, ['node_modules/vite/bin/vite.js', '--host', '127.0.0.1', '--port', String(port), '--strictPort'], { stdio: 'pipe' });
let browser;

try {
    let ready = false;
    for (let attempt = 0; attempt < 60; attempt++) {
        if (server.exitCode !== null) throw new Error('Vite server exited before offline queue browser test');
        try {
            const response = await fetch(`${origin}/tests/browser/offline-queue.html`);
            if (response.ok) { ready = true; break; }
        } catch { /* Wait for Vite startup. */ }
        await delay(250);
    }
    assert.ok(ready, 'offline queue fixture should start');

    const browserBinary = existsSync('/usr/bin/chromium') ? { executablePath: '/usr/bin/chromium' } : { channel: 'chrome' };
    browser = await chromium.launch({ ...browserBinary, headless: true, args: ['--no-sandbox'] });
    const context = await browser.newContext();
    const alicePage = await context.newPage();
    const bobPage = await context.newPage();
    const errors = [];
    alicePage.on('pageerror', error => errors.push(`alice: ${error.message}`));
    bobPage.on('pageerror', error => errors.push(`bob: ${error.message}`));

    await Promise.all([
        alicePage.goto(`${origin}/tests/browser/offline-queue.html`),
        bobPage.goto(`${origin}/tests/browser/offline-queue.html`)
    ]);
    await Promise.all([
        alicePage.waitForFunction(() => Boolean(window.offlineQueueQA)),
        bobPage.waitForFunction(() => Boolean(window.offlineQueueQA))
    ]);

    await alicePage.evaluate(() => window.offlineQueueQA.setActiveUser('alice'));
    await bobPage.evaluate(() => window.offlineQueueQA.setActiveUser('bob'));

    // Use the browser's actual offline emulation, not only a mocked service flag.
    await context.setOffline(true);
    await Promise.all([
        alicePage.waitForFunction(() => window.offlineQueueQA.snapshot().isOnline === false),
        bobPage.waitForFunction(() => window.offlineQueueQA.snapshot().isOnline === false)
    ]);

    await alicePage.evaluate(() => window.offlineQueueQA.enqueue('alice', 'Сообщение после восстановления сети'));
    await bobPage.waitForFunction(() => window.offlineQueueQA.snapshot().queue.length === 1);

    const queuedByAlice = await alicePage.evaluate(() => window.offlineQueueQA.snapshot());
    assert.equal(queuedByAlice.queue[0].user.uid, 'alice', 'offline message must remain owned by the originating account');
    assert.equal(queuedByAlice.remoteMessages.length, 0, 'offline message must not be reported as delivered');

    // Both tabs reconnect. Bob must not send or consume Alice's queued action.
    await context.setOffline(false);
    await alicePage.waitForFunction(() => {
        const state = window.offlineQueueQA.snapshot();
        return state.queue.length === 0 && state.remoteMessages.length === 1;
    });
    await bobPage.waitForFunction(() => window.offlineQueueQA.snapshot().queue.length === 0);

    const finalState = await alicePage.evaluate(() => window.offlineQueueQA.snapshot());
    assert.deepEqual(finalState.remoteMessages, [{
        id: finalState.remoteMessages[0]?.id,
        uid: 'alice',
        chatId: 'browser-test-chat',
        text: 'Сообщение после восстановления сети'
    }], 'the originating account should deliver exactly one copy after reconnect');
    assert.ok(finalState.remoteMessages[0].id, 'the delivered message must keep its durable queue ID');

    // A second focus/reconnect cycle must not duplicate the confirmed write.
    await alicePage.evaluate(() => window.dispatchEvent(new Event('focus')));
    await bobPage.evaluate(() => window.dispatchEvent(new Event('focus')));
    await delay(150);
    const afterRetry = await alicePage.evaluate(() => window.offlineQueueQA.snapshot());
    assert.equal(afterRetry.remoteMessages.length, 1, 'confirmed message must not be duplicated on a later retry');
    assert.deepEqual(errors, [], 'offline queue browser scenario should have no uncaught page errors');

    console.log('Two-account offline → online browser test passed:', {
        deliveredCount: afterRetry.remoteMessages.length,
        senderUid: afterRetry.remoteMessages[0].uid,
        messageId: afterRetry.remoteMessages[0].id
    });
} finally {
    await browser?.close();
    server.kill('SIGTERM');
}
