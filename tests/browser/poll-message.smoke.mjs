import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';
import { chromium } from 'playwright-core';

const port = 4194;
const origin = `http://127.0.0.1:${port}`;
const server = spawn(process.execPath, ['node_modules/vite/bin/vite.js', '--host', '127.0.0.1', '--port', String(port), '--strictPort'], { stdio: 'ignore' });
let browser;
try {
    let ready = false;
    for (let attempt = 0; attempt < 60; attempt++) {
        if (server.exitCode !== null) throw new Error('Vite server exited before poll accessibility test');
        try {
            const response = await fetch(`${origin}/tests/browser/poll-message.html`);
            if (response.ok) { ready = true; break; }
        } catch {}
        await delay(250);
    }
    assert.ok(ready, 'poll message fixture should start');
    browser = await chromium.launch({ ...(process.env.CI ? { executablePath: '/usr/bin/chromium' } : { channel: 'chrome' }), headless: true, args: ['--no-sandbox'] });
    const page = await browser.newPage({ viewport: { width: 390, height: 720 } });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(`${origin}/tests/browser/poll-message.html`);

    const red = page.getByRole('button', { name: 'Red, 33%, 1 голосов' });
    const blue = page.getByRole('button', { name: 'Blue, 67%, 2 голосов' });
    await red.waitFor({ state: 'visible' });
    assert.equal(await red.getAttribute('aria-pressed'), 'false');
    assert.equal(await blue.getAttribute('aria-pressed'), 'true');

    await red.focus();
    await page.keyboard.press('Space');
    assert.equal(await red.getAttribute('aria-pressed'), 'true', 'Space must cast the focused poll vote');
    assert.equal(await blue.getAttribute('aria-pressed'), 'false');
    assert.deepEqual(JSON.parse(await page.getByTestId('vote-events').textContent()), ['Red']);

    await blue.focus();
    await page.keyboard.press('Enter');
    assert.equal(await blue.getAttribute('aria-pressed'), 'true', 'Enter must cast the focused poll vote');
    assert.equal(await red.getAttribute('aria-pressed'), 'false');
    assert.deepEqual(JSON.parse(await page.getByTestId('vote-events').textContent()), ['Red', 'Blue']);
    assert.deepEqual(errors, [], 'poll voting should have no uncaught browser errors');
    console.log('Poll message keyboard accessibility browser test passed');
} finally {
    await browser?.close();
    server.kill('SIGTERM');
}
