import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';
import { chromium } from 'playwright-core';

const port = 4188;
const origin = `http://127.0.0.1:${port}`;
const server = spawn(process.execPath, ['node_modules/vite/bin/vite.js', '--host', '127.0.0.1', '--port', String(port), '--strictPort'], { stdio: 'pipe' });
let browser;
let persistentProfileDir;
let persistentContext;

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

    // Repeat with Web Locks deliberately unavailable. Two tabs share one UID;
    // the stable Firestore message ID remains the final duplicate guard.
    const noLocksContext = await browser.newContext();
    const firstTab = await noLocksContext.newPage();
    const secondTab = await noLocksContext.newPage();
    firstTab.on('pageerror', error => errors.push(`no-locks first tab: ${error.message}`));
    secondTab.on('pageerror', error => errors.push(`no-locks second tab: ${error.message}`));
    await Promise.all([
        firstTab.goto(`${origin}/tests/browser/offline-queue.html?no-locks=1`),
        secondTab.goto(`${origin}/tests/browser/offline-queue.html?no-locks=1`)
    ]);
    await Promise.all([
        firstTab.waitForFunction(() => Boolean(window.offlineQueueQA)),
        secondTab.waitForFunction(() => Boolean(window.offlineQueueQA))
    ]);
    await Promise.all([
        firstTab.evaluate(() => window.offlineQueueQA.setActiveUser('shared-user')),
        secondTab.evaluate(() => window.offlineQueueQA.setActiveUser('shared-user'))
    ]);
    assert.equal(await firstTab.evaluate(() => window.offlineQueueQA.snapshot().hasWebLocks), false);
    assert.equal(await secondTab.evaluate(() => window.offlineQueueQA.snapshot().hasWebLocks), false);

    await noLocksContext.setOffline(true);
    await Promise.all([
        firstTab.waitForFunction(() => window.offlineQueueQA.snapshot().isOnline === false),
        secondTab.waitForFunction(() => window.offlineQueueQA.snapshot().isOnline === false)
    ]);
    await firstTab.evaluate(() => window.offlineQueueQA.enqueue('shared-user', 'Без Web Locks'));
    await secondTab.waitForFunction(() => window.offlineQueueQA.snapshot().queue.length === 1);
    await noLocksContext.setOffline(false);
    await firstTab.waitForFunction(() => {
        const state = window.offlineQueueQA.snapshot();
        return state.queue.length === 0 && state.remoteMessages.length === 1;
    });
    await secondTab.waitForFunction(() => window.offlineQueueQA.snapshot().queue.length === 0);
    const noLocksState = await firstTab.evaluate(() => window.offlineQueueQA.snapshot());
    assert.equal(noLocksState.remoteMessages.length, 1, 'stable server message ID must prevent duplicate records without Web Locks');
    assert.equal(noLocksState.remoteMessages[0].uid, 'shared-user');
    assert.equal(noLocksState.remoteMessages[0].text, 'Без Web Locks');
    assert.ok(noLocksState.deliveryAttempts >= 1, 'at least one delivery attempt should reach the idempotent sink');

    await noLocksContext.close();
    console.log('Offline queue without Web Locks passed:', {
        persistedMessages: noLocksState.remoteMessages.length,
        deliveryAttempts: noLocksState.deliveryAttempts,
        messageId: noLocksState.remoteMessages[0].id
    });

    // Close the tab while a message is still queued, then reopen the same
    // origin in the same browser profile. The constructor must restore it.
    const restartContext = await browser.newContext();
    const beforeClose = await restartContext.newPage();
    beforeClose.on('pageerror', error => errors.push(`restart before close: ${error.message}`));
    await beforeClose.goto(`${origin}/tests/browser/offline-queue.html`);
    await beforeClose.waitForFunction(() => Boolean(window.offlineQueueQA));
    await restartContext.setOffline(true);
    await beforeClose.waitForFunction(() => window.offlineQueueQA.snapshot().isOnline === false);
    await beforeClose.evaluate(() => window.offlineQueueQA.setActiveUser('restart-user'));
    await beforeClose.evaluate(() => window.offlineQueueQA.enqueue('restart-user', 'Восстановлено после повторного открытия вкладки'));
    const queuedBeforeClose = await beforeClose.evaluate(() => window.offlineQueueQA.snapshot());
    assert.equal(queuedBeforeClose.queue.length, 1);
    const durableMessageId = queuedBeforeClose.queue[0].id;
    await beforeClose.close();
    // Restore connectivity while no tab is open. Chromium's offline emulation
    // also blocks localhost navigation, so reopen the fixture only after this.
    await restartContext.setOffline(false);

    const afterReopen = await restartContext.newPage();
    afterReopen.on('pageerror', error => errors.push(`restart after reopen: ${error.message}`));
    await afterReopen.goto(`${origin}/tests/browser/offline-queue.html`);
    await afterReopen.waitForFunction(() => Boolean(window.offlineQueueQA));
    await afterReopen.waitForFunction(() => {
        const state = window.offlineQueueQA.snapshot();
        return state.queue.length === 1 && state.queue[0].id;
    });
    const restored = await afterReopen.evaluate(() => window.offlineQueueQA.snapshot());
    assert.equal(restored.queue[0].id, durableMessageId, 'reopened tab must restore the original durable queue ID');
    assert.equal(restored.queue[0].user.uid, 'restart-user', 'reopened tab must preserve original account ownership');

    await afterReopen.evaluate(() => window.offlineQueueQA.setActiveUser('restart-user'));
    await afterReopen.waitForFunction(() => {
        const state = window.offlineQueueQA.snapshot();
        return state.queue.length === 0 && state.remoteMessages.length === 1;
    });
    const afterRestartDelivery = await afterReopen.evaluate(() => window.offlineQueueQA.snapshot());
    assert.equal(afterRestartDelivery.remoteMessages[0].id, durableMessageId);
    assert.equal(afterRestartDelivery.remoteMessages[0].uid, 'restart-user');
    assert.equal(afterRestartDelivery.remoteMessages[0].text, 'Восстановлено после повторного открытия вкладки');
    await afterReopen.evaluate(() => window.dispatchEvent(new Event('focus')));
    await delay(120);
    assert.equal((await afterReopen.evaluate(() => window.offlineQueueQA.snapshot())).remoteMessages.length, 1,
        'reopened tab retry must not duplicate a confirmed delivery');
    await restartContext.close();

    // Verify persistence across an actual Chromium process restart by reusing
    // a persistent user-data directory in a newly launched browser process.
    persistentProfileDir = await mkdtemp(join(tmpdir(), 'vortex-offline-profile-'));
    persistentContext = await chromium.launchPersistentContext(persistentProfileDir, {
        ...browserBinary,
        headless: true,
        args: ['--no-sandbox']
    });
    const beforeBrowserRestart = await persistentContext.newPage();
    beforeBrowserRestart.on('pageerror', error => errors.push(`process restart before: ${error.message}`));
    await beforeBrowserRestart.goto(`${origin}/tests/browser/offline-queue.html`);
    await beforeBrowserRestart.waitForFunction(() => Boolean(window.offlineQueueQA));
    await beforeBrowserRestart.evaluate(() => window.offlineQueueQA.setActiveUser('browser-restart-user'));
    await persistentContext.setOffline(true);
    await beforeBrowserRestart.waitForFunction(() => window.offlineQueueQA.snapshot().isOnline === false);
    await beforeBrowserRestart.evaluate(() => window.offlineQueueQA.enqueue('browser-restart-user', 'Очередь после перезапуска браузера'));
    const queuedBeforeBrowserRestart = await beforeBrowserRestart.evaluate(() => window.offlineQueueQA.snapshot());
    assert.equal(queuedBeforeBrowserRestart.queue.length, 1);
    const browserRestartMessageId = queuedBeforeBrowserRestart.queue[0].id;
    await persistentContext.close();
    persistentContext = null;

    persistentContext = await chromium.launchPersistentContext(persistentProfileDir, {
        ...browserBinary,
        headless: true,
        args: ['--no-sandbox']
    });
    const afterBrowserRestart = await persistentContext.newPage();
    afterBrowserRestart.on('pageerror', error => errors.push(`process restart after: ${error.message}`));
    await afterBrowserRestart.goto(`${origin}/tests/browser/offline-queue.html`);
    await afterBrowserRestart.waitForFunction(() => Boolean(window.offlineQueueQA));
    const restoredAfterBrowserRestart = await afterBrowserRestart.evaluate(() => window.offlineQueueQA.snapshot());
    assert.equal(restoredAfterBrowserRestart.queue.length, 1, 'persistent browser profile must restore the queued message');
    assert.equal(restoredAfterBrowserRestart.queue[0].id, browserRestartMessageId, 'full browser restart must preserve the original message ID');
    assert.equal(restoredAfterBrowserRestart.queue[0].user.uid, 'browser-restart-user', 'full browser restart must preserve message ownership');

    await afterBrowserRestart.evaluate(() => window.offlineQueueQA.setActiveUser('browser-restart-user'));
    await afterBrowserRestart.waitForFunction(() => {
        const state = window.offlineQueueQA.snapshot();
        return state.queue.length === 0 && state.remoteMessages.length === 1;
    });
    const afterBrowserRestartDelivery = await afterBrowserRestart.evaluate(() => window.offlineQueueQA.snapshot());
    assert.equal(afterBrowserRestartDelivery.remoteMessages[0].id, browserRestartMessageId);
    assert.equal(afterBrowserRestartDelivery.remoteMessages[0].uid, 'browser-restart-user');
    assert.equal(afterBrowserRestartDelivery.remoteMessages[0].text, 'Очередь после перезапуска браузера');
    await afterBrowserRestart.evaluate(() => window.dispatchEvent(new Event('focus')));
    await delay(120);
    assert.equal((await afterBrowserRestart.evaluate(() => window.offlineQueueQA.snapshot())).remoteMessages.length, 1,
        'retry after full browser restart must not duplicate the message');
    await persistentContext.close();
    persistentContext = null;

    assert.deepEqual(errors, [], 'all offline queue browser scenarios should have no uncaught page errors');
    console.log('Offline queue full browser process restart recovery passed:', {
        restoredMessageId: browserRestartMessageId,
        deliveredCount: afterBrowserRestartDelivery.remoteMessages.length
    });
    console.log('Offline queue tab close/reopen recovery passed:', {
        restoredMessageId: durableMessageId,
        deliveredCount: afterRestartDelivery.remoteMessages.length
    });
} finally {
    await persistentContext?.close();
    await browser?.close();
    if (persistentProfileDir) await rm(persistentProfileDir, { recursive: true, force: true });
    server.kill('SIGTERM');
}
