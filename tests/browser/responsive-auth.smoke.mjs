import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { setTimeout as delay } from 'node:timers/promises';
import { chromium } from 'playwright-core';

const port = 4190;
const origin = `http://127.0.0.1:${port}`;
const widths = [320, 375, 768, 1024, 1440];
const server = spawn(process.execPath, ['node_modules/vite/bin/vite.js', '--host', '127.0.0.1', '--port', String(port), '--strictPort'], { stdio: 'pipe' });
let browser;
let serverOutput = '';
server.stdout.on('data', chunk => { serverOutput += chunk.toString(); });
server.stderr.on('data', chunk => { serverOutput += chunk.toString(); });

try {
    let ready = false;
    for (let attempt = 0; attempt < 60; attempt++) {
        if (server.exitCode !== null) throw new Error('Vite server exited before responsive auth browser test');
        try {
            const response = await fetch(`${origin}/index.html`);
            if (response.ok) { ready = true; break; }
        } catch { /* Wait for Vite startup. */ }
        await delay(250);
    }
    assert.ok(ready, `Vite app should start for responsive auth test. Server output: ${serverOutput || '(no output)'}`);

    const browserBinary = existsSync('/usr/bin/chromium') ? { executablePath: '/usr/bin/chromium' } : { channel: 'chrome' };
    browser = await chromium.launch({ ...browserBinary, headless: true, args: ['--no-sandbox'] });
    const page = await browser.newPage({ viewport: { width: 375, height: 800 }, deviceScaleFactor: 1 });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    // The test validates local UI layout only; it must not contact production Firebase or third-party fonts.
    await page.route(/^https:\/\//, route => route.abort());
    await page.goto(origin, { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('.vortex-auth-card', { timeout: 15000 });

    const measurements = [];
    for (const width of widths) {
        await page.setViewportSize({ width, height: 800 });
        await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
        const layout = await page.evaluate(() => {
            const rect = element => {
                const box = element.getBoundingClientRect();
                return { left: box.left, right: box.right, width: box.width, top: box.top, bottom: box.bottom };
            };
            const card = document.querySelector('.vortex-auth-card');
            const story = document.querySelector('.vortex-auth-story');
            const controls = [...card.querySelectorAll('input, button, textarea, select')]
                .filter(element => {
                    const style = getComputedStyle(element);
                    return style.display !== 'none' && style.visibility !== 'hidden' && element.getClientRects().length > 0;
                })
                .map(element => ({ tag: element.tagName, label: element.getAttribute('aria-label') || element.textContent.trim().slice(0, 32), ...rect(element) }));
            return {
                viewportWidth: window.innerWidth,
                card: rect(card),
                storyDisplay: getComputedStyle(story).display,
                story: rect(story),
                controls
            };
        });

        assert.ok(layout.card.width > 0, `auth card should render at ${width}px`);
        assert.ok(layout.card.left >= -1 && layout.card.right <= width + 1,
            `auth card must fit horizontally at ${width}px: ${JSON.stringify(layout.card)}`);
        for (const control of layout.controls) {
            assert.ok(control.width > 0, `auth control must have width at ${width}px: ${JSON.stringify(control)}`);
            assert.ok(control.left >= -1 && control.right <= width + 1,
                `auth control must fit horizontally at ${width}px: ${JSON.stringify(control)}`);
        }

        if (width <= 980) {
            assert.equal(layout.storyDisplay, 'none', `story panel should collapse at ${width}px`);
        } else {
            assert.notEqual(layout.storyDisplay, 'none', `story panel should be visible at ${width}px`);
            assert.ok(layout.story.left >= -1 && layout.story.right <= width + 1,
                `story panel must fit at ${width}px: ${JSON.stringify(layout.story)}`);
        }
        measurements.push({ width, cardWidth: Math.round(layout.card.width), controls: layout.controls.length, story: layout.storyDisplay });
    }

    assert.deepEqual(errors, [], 'responsive auth layout should not produce uncaught page errors');
    console.log('Responsive auth viewport matrix passed:', measurements);
} finally {
    await browser?.close();
    server.kill('SIGTERM');
}
