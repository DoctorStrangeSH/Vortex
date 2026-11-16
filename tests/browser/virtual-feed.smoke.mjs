// Runs explicitly in CI, not as part of the Node unit-test discovery.
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
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

    browser = await chromium.launch({ channel: 'chrome', headless: true, args: ['--no-sandbox'] });
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
    assert.deepEqual(errors, [], 'the browser should have no uncaught page errors');
    console.log('Virtual browser smoke test passed:', metrics);
} finally {
    await browser?.close();
    server.kill('SIGTERM');
}
