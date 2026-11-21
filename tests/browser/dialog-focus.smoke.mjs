import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { setTimeout as delay } from 'node:timers/promises';
import { chromium } from 'playwright-core';

const port = 4189;
const origin = `http://127.0.0.1:${port}`;
const server = spawn(process.execPath, ['node_modules/vite/bin/vite.js', '--host', '127.0.0.1', '--port', String(port), '--strictPort'], { stdio: 'pipe' });
let browser;

try {
    let ready = false;
    for (let attempt = 0; attempt < 60; attempt++) {
        if (server.exitCode !== null) throw new Error('Vite server exited before dialog focus browser test');
        try {
            const response = await fetch(`${origin}/tests/browser/dialog-focus.html`);
            if (response.ok) { ready = true; break; }
        } catch { /* Wait for Vite startup. */ }
        await delay(250);
    }
    assert.ok(ready, 'dialog focus fixture should start');

    const browserBinary = existsSync('/usr/bin/chromium') ? { executablePath: '/usr/bin/chromium' } : { channel: 'chrome' };
    browser = await chromium.launch({ ...browserBinary, headless: true, args: ['--no-sandbox'] });
    const page = await browser.newPage({ viewport: { width: 390, height: 720 } });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(`${origin}/tests/browser/dialog-focus.html`);

    const result = await page.evaluate(async () => {
        const { trapDialogTab } = await import('/src/utils/dialogFocus.js');
        const dialog = document.querySelector('#dialog');
        const first = document.querySelector('#first');
        const last = document.querySelector('#last');
        const outside = document.querySelector('#outside');
        const emptyDialog = document.querySelector('#empty-dialog');

        first.focus();
        const reverseTab = new KeyboardEvent('keydown', { key: 'Tab', shiftKey: true, bubbles: true, cancelable: true });
        trapDialogTab(reverseTab, dialog);
        const reverseWrappedToLast = document.activeElement === last && reverseTab.defaultPrevented;

        outside.focus();
        const forwardTab = new KeyboardEvent('keydown', { key: 'Tab', bubbles: true, cancelable: true });
        trapDialogTab(forwardTab, dialog);
        const escapedFocusReturnedToFirst = document.activeElement === first && forwardTab.defaultPrevented;

        const emptyTab = new KeyboardEvent('keydown', { key: 'Tab', bubbles: true, cancelable: true });
        trapDialogTab(emptyTab, emptyDialog);
        const emptyDialogFallbackFocused = document.activeElement === emptyDialog && emptyTab.defaultPrevented;

        return { reverseWrappedToLast, escapedFocusReturnedToFirst, emptyDialogFallbackFocused };
    });

    assert.deepEqual(result, {
        reverseWrappedToLast: true,
        escapedFocusReturnedToFirst: true,
        emptyDialogFallbackFocused: true
    }, 'focus trap must ignore display:none, visibility:hidden, hidden, inert, and aria-hidden targets');
    assert.deepEqual(errors, [], 'dialog focus browser scenario should have no uncaught page errors');
    console.log('Dialog focus real-browser smoke test passed:', result);
} finally {
    await browser?.close();
    server.kill('SIGTERM');
}
