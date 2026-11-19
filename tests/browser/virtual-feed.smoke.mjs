// Runs explicitly in CI, not as part of the Node unit-test discovery.
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { setTimeout as delay } from 'node:timers/promises';
import { chromium } from 'playwright-core';

const port = 4187;
const origin = `http://127.0.0.1:${port}`;
const server = spawn(process.execPath, ['node_modules/vite/bin/vite.js', '--host', '127.0.0.1', '--port', String(port), '--strictPort'], { stdio: 'pipe' });
let browser;

try {
    let ready = false;
    for (let attempt = 0; attempt < 60; attempt++) {
        if (server.exitCode !== null) throw new Error('Vite server exited before browser test');
        try {
            const response = await fetch(`${origin}/tests/browser/virtual-feed.html`);
            if (response.ok) { ready = true; break; }
        } catch { /* Wait for Vite startup. */ }
        await delay(250);
    }
    assert.ok(ready, 'Vite browser-test fixture should start');

    const browserBinary = existsSync('/usr/bin/chromium') ? { executablePath: '/usr/bin/chromium' } : { channel: 'chrome' };
    browser = await chromium.launch({ ...browserBinary, headless: true, args: ['--no-sandbox'] });
    const page = await browser.newPage({ viewport: { width: 1000, height: 800 } });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(`${origin}/tests/browser/virtual-feed.html`);
    await page.waitForFunction(() => Boolean(window.virtualFeedQA));

    await page.waitForFunction(() => window.virtualFeedQA.metrics().mountedRows > 0);
    assert.ok((await page.evaluate(() => window.virtualFeedQA.metrics().mountedRows)) < 50, 'virtual feed should mount fewer than 50 of 1500 rows');

    await page.evaluate(() => window.virtualFeedQA.navigate('message-1200'));
    await page.waitForSelector('[data-qa-id="message-1200"]');
    const beforePrepend = await page.evaluate(() => window.virtualFeedQA.metrics().scrollTop);
    await page.evaluate(() => window.virtualFeedQA.prepend());
    await page.waitForFunction(previous => window.virtualFeedQA.metrics().scrollTop > previous + 2000, beforePrepend);
    assert.ok(await page.locator('[data-qa-id="message-1200"]').count(), 'prepending older history should preserve the visible target');

    await page.evaluate(() => window.virtualFeedQA.scrollBottom());
    await page.waitForSelector('[data-qa-id="message-1499"]');
    await page.waitForFunction(() => {
        const { scrollTop, scrollHeight, clientHeight } = window.virtualFeedQA.metrics();
        return scrollHeight - scrollTop - clientHeight < 110;
    });
    await page.evaluate(() => window.virtualFeedQA.expandLast());
    try {
        await page.waitForFunction(() => {
            const { scrollTop, scrollHeight, clientHeight } = window.virtualFeedQA.metrics();
            return scrollHeight - scrollTop - clientHeight < 110;
        }, null, { timeout: 6000 });
    } catch (error) {
        console.error('Bottom-stick diagnostics:', await page.evaluate(() => window.virtualFeedQA.metrics()));
        throw error;
    }
    const metrics = await page.evaluate(() => window.virtualFeedQA.metrics());
    assert.ok(metrics.visibleChanges > 2, 'virtual range should notify after it changes');

    // A narrow phone viewport must keep navigation and scrolling usable.
    await page.setViewportSize({ width: 390, height: 720 });
    await page.evaluate(() => window.virtualFeedQA.navigate('message-300'));
    await page.waitForSelector('[data-qa-id="message-300"]');
    const mobileMetrics = await page.evaluate(() => window.virtualFeedQA.metrics());
    assert.ok(mobileMetrics.mountedRows < 50, 'phone viewport should still virtualize the message list');
    assert.ok(mobileMetrics.scrollTop > 0, 'phone navigation should reach historical messages');

    const messageRegion = page.getByRole('region', { name: 'Сообщения' });
    await messageRegion.focus();
    assert.ok(await messageRegion.evaluate(node => document.activeElement === node), 'message region should be keyboard focusable');
    const beforeKeyboardScroll = await page.evaluate(() => window.virtualFeedQA.metrics().scrollTop);
    await page.keyboard.press('PageDown');
    await page.waitForFunction(previous => window.virtualFeedQA.metrics().scrollTop > previous + 100, beforeKeyboardScroll);

    await page.evaluate(() => window.virtualFeedQA.navigate('message-1100'));
    await page.waitForSelector('[data-qa-id="message-1100"]');
    assert.ok(await page.locator('[data-qa-id="message-1100"]').count(), 'a second navigation should replace an older request');

    // New incoming messages must not drag the user away from old history.
    const beforeAppend = await page.evaluate(() => window.virtualFeedQA.metrics().scrollTop);
    await page.evaluate(() => window.virtualFeedQA.append());
    await page.waitForFunction(previous => Math.abs(window.virtualFeedQA.metrics().scrollTop - previous) < 100, beforeAppend);
    assert.ok(await page.locator('[data-qa-id="message-1100"]').count(), 'incoming message should not hide a historical target');

    // Reusing one ChatWindow with a different chat id must discard stale offsets.
    await page.evaluate(() => window.virtualFeedQA.switchChat());
    await page.waitForFunction(() => window.virtualFeedQA.metrics().chatId === 'second' && window.virtualFeedQA.metrics().mountedRows > 0);
    await page.waitForFunction(() => window.virtualFeedQA.metrics().firstMountedId === 'other-0');
    assert.ok((await page.evaluate(() => window.virtualFeedQA.metrics().scrollTop)) < 100, 'new chat must start at its own scroll position');
    assert.equal(await page.locator('[data-qa-id="message-1100"]').count(), 0, 'old chat rows must not remain mounted');

    await page.evaluate(() => window.virtualFeedQA.switchChat());
    await page.waitForFunction(() => window.virtualFeedQA.metrics().chatId === 'first');
    await page.evaluate(() => window.virtualFeedQA.navigate('message-600'));
    await page.waitForSelector('[data-qa-id="message-600"]');

    // The unread marker is attached to a virtualized row, including after an older page is inserted.
    await page.evaluate(() => {
        window.virtualFeedQA.markUnread('message-800');
        window.virtualFeedQA.navigate('message-800');
    });
    await page.waitForSelector('[data-qa-id="message-800"] [data-unread-divider]');
    await page.evaluate(() => window.virtualFeedQA.prepend());
    await page.waitForSelector('[data-qa-id="message-800"] [data-unread-divider]');
    const unreadMetrics = await page.evaluate(() => window.virtualFeedQA.metrics());
    assert.ok(unreadMetrics.mountedRows < 50, 'unread navigation with older history must remain virtualized');
    assert.ok(await page.locator('[data-qa-id="message-800"] [data-unread-divider]').count(), 'unread marker must remain attached to its message after history expands');

    // Restoring a reading position may target a point inside a long message.
    await page.evaluate(() => window.virtualFeedQA.navigateWithin('message-700', 32));
    await page.waitForSelector('[data-qa-id="message-700"]');
    await page.waitForFunction(() => {
        const container = document.querySelector('[role="region"][aria-label="Сообщения"]');
        const row = document.querySelector('[data-message-id="message-700"]');
        if (!container || !row) return false;
        const position = container.getBoundingClientRect().top - row.getBoundingClientRect().top;
        return position > 15 && position < 55;
    });

    // A small browser window must allow reaching the registration submit button.
    await page.setViewportSize({ width: 360, height: 420 });
    await page.goto(`${origin}/tests/browser/auth-scroll.html`);
    await page.getByRole('tab', { name: 'Регистрация' }).click();
    await page.locator('#vortex-auth-username').fill('sherlocktest');
    await page.getByText('Доступность проверим после создания аккаунта').waitFor();
    // An unauthenticated signup must not query the protected usernames collection.
    const usernameLookupRequests = [];
    page.on('request', request => {
        if (request.url().includes('firestore.googleapis.com') && request.url().includes('usernames')) {
            usernameLookupRequests.push(request.url());
        }
    });
    await page.locator('#vortex-auth-username').fill('sherlocktest2');
    await page.waitForTimeout(450);
    assert.deepEqual(usernameLookupRequests, [], 'signup should defer Firestore username lookup until sign-in');
    const submit = page.getByRole('button', { name: 'Зарегистрироваться', exact: true });
    const scrollInfo = await page.evaluate(() => {
        const screen = document.querySelector('.vortex-auth-screen');
        return { clientHeight: screen.clientHeight, scrollHeight: screen.scrollHeight };
    });
    assert.ok(scrollInfo.scrollHeight > scrollInfo.clientHeight, 'small-height signup screen should be scrollable');
    await submit.scrollIntoViewIfNeeded();
    assert.ok(await submit.isVisible(), 'signup button should become visible on a small screen');
    const buttonBounds = await submit.boundingBox();
    assert.ok(buttonBounds.y >= 0 && buttonBounds.y + buttonBounds.height <= 420, 'signup button should fit inside the small viewport after scrolling');

    assert.deepEqual(errors, [], 'the browser should have no uncaught page errors');
    console.log('Virtual browser smoke test passed:', { desktop: metrics, mobile: mobileMetrics });
} finally {
    await browser?.close();
    server.kill('SIGTERM');
}
