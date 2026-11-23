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

    // Two tabs enqueue separate messages for the same account at the same time.
    // Web Locks must serialize read-modify-write so neither queue entry is lost.
    const sharedAccountContext = await browser.newContext();
    const sharedTabA = await sharedAccountContext.newPage();
    const sharedTabB = await sharedAccountContext.newPage();
    sharedTabA.on('pageerror', error => errors.push(`shared account tab A: ${error.message}`));
    sharedTabB.on('pageerror', error => errors.push(`shared account tab B: ${error.message}`));
    await Promise.all([
        sharedTabA.goto(`${origin}/tests/browser/offline-queue.html`),
        sharedTabB.goto(`${origin}/tests/browser/offline-queue.html`)
    ]);
    await Promise.all([
        sharedTabA.waitForFunction(() => Boolean(window.offlineQueueQA)),
        sharedTabB.waitForFunction(() => Boolean(window.offlineQueueQA))
    ]);
    await Promise.all([
        sharedTabA.evaluate(() => window.offlineQueueQA.setActiveUser('shared-account-user')),
        sharedTabB.evaluate(() => window.offlineQueueQA.setActiveUser('shared-account-user'))
    ]);
    await sharedAccountContext.setOffline(true);
    await Promise.all([
        sharedTabA.waitForFunction(() => window.offlineQueueQA.snapshot().isOnline === false),
        sharedTabB.waitForFunction(() => window.offlineQueueQA.snapshot().isOnline === false)
    ]);

    // Prove that Chromium shares the same Web Lock between two tabs in this
    // browser context before attributing any queue failure to OfflineService.
    const lockProbeKey = 'vortex.browserTest.lockProbe';
    await sharedTabA.evaluate(() => {
        window.__releaseQueueLockProbe = null;
        window.__queueLockProbe = navigator.locks.request('vortex-offline-queue', async () => {
            localStorage.setItem('vortex.browserTest.lockProbe', 'A-entered');
            await new Promise(resolve => { window.__releaseQueueLockProbe = resolve; });
            localStorage.setItem('vortex.browserTest.lockProbe', 'A-released');
        });
    });
    await sharedTabA.waitForFunction(() => localStorage.getItem('vortex.browserTest.lockProbe') === 'A-entered');
    const secondLockProbe = sharedTabB.evaluate(async () => {
        await navigator.locks.request('vortex-offline-queue', async () => {
            localStorage.setItem('vortex.browserTest.lockProbe', 'B-entered');
        });
    });
    await delay(150);
    assert.equal(
        await sharedTabA.evaluate(() => localStorage.getItem('vortex.browserTest.lockProbe')),
        'A-entered',
        'Web Locks must serialize requests across tabs in one browser context'
    );
    await sharedTabA.evaluate(() => window.__releaseQueueLockProbe?.());
    await Promise.all([sharedTabA.evaluate(() => window.__queueLockProbe), secondLockProbe]);
    await sharedTabA.waitForFunction(() => localStorage.getItem('vortex.browserTest.lockProbe') === 'B-entered');
    await sharedTabA.evaluate(() => localStorage.removeItem('vortex.browserTest.lockProbe'));

    assert.equal(
        await sharedTabA.evaluate(() => window.offlineQueueQA.snapshot().hasWebLocks),
        true,
        'the shared-account race scenario requires browser Web Locks support'
    );

    // Stress the same-account read-modify-write race repeatedly. Each round
    // starts two independent enqueue calls in separate tabs at the same time.
    // localStorage is the durable source of truth; wait for both writes before
    // starting the next round so failures are attributable to that exact race.
    const expectedConcurrentMessages = [];
    for (let round = 0; round < 100; round++) {
        await Promise.all([
            sharedTabA.evaluate(round => localStorage.setItem('vortex.browserTest.currentRound', String(round)), round + 1),
            sharedTabB.evaluate(round => localStorage.setItem('vortex.browserTest.currentRound', String(round)), round + 1)
        ]);
        const offlineState = await Promise.all([
            sharedTabA.evaluate(() => window.offlineQueueQA.snapshot()),
            sharedTabB.evaluate(() => window.offlineQueueQA.snapshot())
        ]);
        assert.ok(offlineState.every(state => state.isOnline === false), `both tabs must remain offline before round ${round + 1}`);
        assert.ok(offlineState.every(state => state.remoteMessages.length === 0), `no messages may be delivered during offline enqueue round ${round + 1}`);
        const messageA = `Раунд ${round + 1}: сообщение из вкладки A`;
        const messageB = `Раунд ${round + 1}: сообщение из вкладки B`;
        expectedConcurrentMessages.push(messageA, messageB);
        // Capture each tab's actual enqueue settlement and the durable queue
        // observed immediately after that operation, instead of inferring success
        // from the outer Playwright Promise.all alone.
        const enqueueOutcomes = await Promise.all([
            sharedTabA.evaluate(async text => {
                try {
                    await window.offlineQueueQA.enqueue('shared-account-user', text);
                    const state = window.offlineQueueQA.snapshot();
                    return {
                        status: 'fulfilled',
                        tabId: state.tabId,
                        durableCount: state.queue.length,
                        remoteCount: state.remoteMessages.length,
                        deliveryAttempts: state.deliveryAttempts,
                        isOnline: state.isOnline,
                        tail: state.queue.slice(-3).map(item => item.text)
                    };
                } catch (error) {
                    return { status: 'rejected', name: error.name, message: error.message };
                }
            }, messageA),
            sharedTabB.evaluate(async text => {
                try {
                    await window.offlineQueueQA.enqueue('shared-account-user', text);
                    const state = window.offlineQueueQA.snapshot();
                    return {
                        status: 'fulfilled',
                        tabId: state.tabId,
                        durableCount: state.queue.length,
                        tail: state.queue.slice(-3).map(item => item.text)
                    };
                } catch (error) {
                    return { status: 'rejected', name: error.name, message: error.message };
                }
            }, messageB)
        ]);

        const expectedCount = (round + 1) * 2;
        try {
            await sharedTabA.waitForFunction(messages => {
                const queue = window.offlineQueueQA.snapshot().queue;
                const texts = new Set(queue.map(item => item.text));
                return messages.every(message => texts.has(message));
            }, [messageA, messageB], { timeout: 10000 });
        } catch (error) {
            const diagnostics = await Promise.all([
                sharedTabA.evaluate(async () => {
                    const state = window.offlineQueueQA.snapshot();
                    return {
                        durableCount: state.queue.length,
                        durableTail: state.queue.slice(-4).map(item => item.text),
                        tabId: state.tabId,
                        trace: state.operationTrace.filter(entry => entry.round === Number(localStorage.getItem('vortex.browserTest.currentRound') || 0)),
                        locks: navigator.locks?.query ? await navigator.locks.query() : null
                    };
                }),
                sharedTabB.evaluate(async () => {
                    const state = window.offlineQueueQA.snapshot();
                    return {
                        durableCount: state.queue.length,
                        durableTexts: state.queue.map(item => item.text),
                        tabId: state.tabId,
                        trace: state.operationTrace.filter(entry => entry.round === Number(localStorage.getItem('vortex.browserTest.currentRound') || 0)),
                        locks: navigator.locks?.query ? await navigator.locks.query() : null
                    };
                })
            ]);
            throw new Error(`Concurrent same-account enqueue round ${round + 1} did not persist both messages. Enqueue outcomes:\n${JSON.stringify(enqueueOutcomes, null, 2)}\nDiagnostics:\n${JSON.stringify(diagnostics, null, 2)}`, { cause: error });
        }
    }

    const queuedFromBothTabs = await sharedTabA.evaluate(() => window.offlineQueueQA.snapshot());
    const queuedFromSecondTab = await sharedTabB.evaluate(() => window.offlineQueueQA.snapshot());
    assert.equal(queuedFromBothTabs.queue.length, expectedConcurrentMessages.length, 'all concurrent enqueues must be durable');
    assert.equal(queuedFromSecondTab.queue.length, expectedConcurrentMessages.length, 'both tabs must read the same durable queue');
    assert.deepEqual(
        queuedFromBothTabs.queue.map(item => item.text).sort(),
        expectedConcurrentMessages.sort(),
        'all concurrent same-account enqueues must remain durable'
    );

    await sharedAccountContext.setOffline(false);
    await sharedTabA.waitForFunction(expectedCount => {
        const state = window.offlineQueueQA.snapshot();
        return state.queue.length === 0 && state.remoteMessages.length === expectedCount;
    }, expectedConcurrentMessages.length);
    await sharedTabB.waitForFunction(() => window.offlineQueueQA.snapshot().queue.length === 0);
    const sharedAccountDelivered = await sharedTabA.evaluate(() => window.offlineQueueQA.snapshot());
    assert.deepEqual(
        sharedAccountDelivered.remoteMessages.map(item => item.text).sort(),
        expectedConcurrentMessages.sort(),
        'all concurrently queued messages must be delivered exactly once'
    );
    assert.equal(new Set(sharedAccountDelivered.remoteMessages.map(item => item.id)).size, expectedConcurrentMessages.length);
    await sharedAccountContext.close();
    console.log('Concurrent same-account multi-tab queue stress test passed:', {
        rounds: 100,
        queuedCount: queuedFromBothTabs.queue.length,
        deliveredCount: sharedAccountDelivered.remoteMessages.length
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
