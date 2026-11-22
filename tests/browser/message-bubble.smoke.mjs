import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';
import { chromium } from 'playwright-core';

const port = 4193;
const origin = `http://127.0.0.1:${port}`;
const server = spawn(process.execPath, ['node_modules/vite/bin/vite.js', '--host', '127.0.0.1', '--port', String(port), '--strictPort'], { stdio: 'ignore' });
let browser;
try {
    let ready = false;
    for (let attempt = 0; attempt < 60; attempt++) {
        if (server.exitCode !== null) throw new Error('Vite server exited before message bubble test');
        try { const response = await fetch(`${origin}/tests/browser/message-bubble.html`); if (response.ok) { ready = true; break; } } catch {}
        await delay(250);
    }
    assert.ok(ready, 'message bubble fixture should start');
    browser = await chromium.launch({ ...(process.env.CI ? { executablePath: '/usr/bin/chromium' } : { channel: 'chrome' }), headless: true, args: ['--no-sandbox'] });
    const page = await browser.newPage({ viewport: { width: 390, height: 720 } });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(`${origin}/tests/browser/message-bubble.html`);
    const bubble = page.getByRole('group', { name: 'Сообщение от Sherlock' });
    await bubble.waitFor({ state: 'visible' });
    assert.match(await bubble.textContent(), /Проверка настоящего компонента сообщения/);
    assert.match(await bubble.textContent(), /изм\./);
    assert.equal(await page.getByText('📌', { exact: true }).count(), 1, 'pinned state should be visible');
    await page.getByRole('button', { name: 'Реакция 👍: 2' }).click();
    let events = JSON.parse(await page.getByTestId('events').textContent());
    assert.equal(events.at(-1).type, 'reaction');
    assert.equal(events.at(-1).messageId, 'message-browser-1');
    assert.equal(events.at(-1).emoji, '👍');
    await bubble.dblclick();
    events = JSON.parse(await page.getByTestId('events').textContent());
    assert.equal(events.at(-1).type, 'double-click');
    assert.equal(events.at(-1).messageId, 'message-browser-1');
    await bubble.focus();
    await bubble.press('Shift+F10');
    events = JSON.parse(await page.getByTestId('events').textContent());
    assert.equal(events.at(-1).type, 'context-menu');
    assert.equal(events.at(-1).own, true);
    assert.equal(events.at(-1).messageId, 'message-browser-1');
    assert.deepEqual(errors, [], 'message bubble should have no uncaught browser errors');
    console.log('Message bubble real-component browser test passed');
} finally {
    await browser?.close();
    server.kill('SIGTERM');
}
