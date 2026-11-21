import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { setTimeout as delay } from 'node:timers/promises';
import { chromium } from 'playwright-core';

const port = 4188;
const origin = `http://127.0.0.1:${port}`;
const widths = [320, 375, 768, 769, 1024, 1440];
const server = spawn(process.execPath, ['node_modules/vite/bin/vite.js', '--host', '127.0.0.1', '--port', String(port), '--strictPort'], { stdio: 'pipe' });
let browser;
let serverOutput = '';
server.stdout.on('data', chunk => { serverOutput += chunk.toString(); });
server.stderr.on('data', chunk => { serverOutput += chunk.toString(); });

try {
    let ready = false;
    for (let attempt = 0; attempt < 60; attempt++) {
        if (server.exitCode !== null) throw new Error('Vite exited before responsive chat test');
        try {
            const response = await fetch(`${origin}/tests/browser/responsive-chat.html`);
            if (response.ok) { ready = true; break; }
        } catch { /* Wait for Vite startup. */ }
        await delay(250);
    }
    assert.ok(ready, `Vite fixture did not become ready: ${serverOutput || '(no output)'}`);

    const browserBinary = existsSync('/usr/bin/chromium') ? { executablePath: '/usr/bin/chromium' } : { channel: 'chrome' };
    browser = await chromium.launch({ ...browserBinary, headless: true, args: ['--no-sandbox'] });
    const page = await browser.newPage({ viewport: { width: 375, height: 800 }, deviceScaleFactor: 1 });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.route(/^https:\/\//, route => route.abort());
    await page.goto(`${origin}/tests/browser/responsive-chat.html`, { waitUntil: 'domcontentloaded' });

    const measurements = [];
    for (const width of widths) {
        await page.setViewportSize({ width, height: 800 });
        await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
        const result = await page.evaluate(() => {
            const rect = selector => {
                const element = document.querySelector(selector);
                const box = element.getBoundingClientRect();
                return { left: box.left, right: box.right, width: box.width };
            };
            const panel = rect('.fixture-chat-panel');
            const sidebar = rect('.fixture-sidebar-panel');
            const header = rect('.vortex-chat-header');
            const composer = rect('.vortex-composer');
            const heading = rect('.vortex-chat-heading');
            const actions = [...document.querySelectorAll('.vortex-header-actions button')].map(button => {
                const box = button.getBoundingClientRect();
                return { left: box.left, right: box.right, width: box.width };
            });
            const composerControls = [...document.querySelectorAll('.vortex-composer-controls button, .vortex-composer-controls input')].map(element => {
                const box = element.getBoundingClientRect();
                return { left: box.left, right: box.right, width: box.width };
            });
            return {
                viewport: window.innerWidth,
                documentWidth: document.documentElement.scrollWidth,
                panel, sidebar, header, composer, heading, actions, composerControls
            };
        });

        assert.ok(result.documentWidth <= width, `document must not overflow at ${width}px: ${JSON.stringify(result)}`);
        assert.ok(result.panel.width > 0 && result.panel.left >= -1 && result.panel.right <= width + 1,
            `chat panel must fit at ${width}px: ${JSON.stringify(result.panel)}`);
        assert.ok(result.header.left >= -1 && result.header.right <= width + 1,
            `chat header must fit at ${width}px: ${JSON.stringify(result.header)}`);
        assert.ok(result.composer.left >= -1 && result.composer.right <= width + 1,
            `composer must fit at ${width}px: ${JSON.stringify(result.composer)}`);
        for (const control of [...result.actions, ...result.composerControls]) {
            assert.ok(control.width > 0 && control.left >= -1 && control.right <= width + 1,
                `chat controls must remain visible at ${width}px: ${JSON.stringify(control)}`);
        }

        if (width > 768) {
            assert.equal(Math.round(result.sidebar.width), 380, 'desktop sidebar retains its 380px width');
            assert.ok(result.panel.width >= 0, 'desktop chat pane is allowed to shrink');
        } else {
            assert.equal(Math.round(result.panel.width), width, 'mobile chat panel uses full viewport width');
        }
        measurements.push({
            width,
            chatPane: Math.round(result.panel.width),
            headerActions: result.actions.length,
            composerControls: result.composerControls.length,
            documentWidth: result.documentWidth
        });
    }

    assert.deepEqual(errors, [], 'responsive chat shell should have no uncaught browser errors');
    console.log('Responsive chat shell viewport matrix passed:', measurements);
} finally {
    await browser?.close();
    server.kill('SIGTERM');
}
