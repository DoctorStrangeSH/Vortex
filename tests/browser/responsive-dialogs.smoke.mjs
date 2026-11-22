import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { chromium } from 'playwright-core';

const viewports = [
    { width: 320, height: 720 }, { width: 375, height: 800 },
    { width: 560, height: 800 }, { width: 561, height: 800 },
    { width: 768, height: 800 }, { width: 1024, height: 800 },
    { width: 1440, height: 900 }, { width: 375, height: 480 },
    { width: 1024, height: 480 }
];
let browser;

try {
    // This is a static layout fixture. Load the repository's actual CSS and
    // fixture HTML directly, avoiding an unnecessary Vite server/process race.
    const [fixture, styles] = await Promise.all([
        readFile(resolve('tests/browser/responsive-dialogs.html'), 'utf8'),
        readFile(resolve('src/styles/global.css'), 'utf8')
    ]);
    const html = fixture.replace(
        '<link rel="stylesheet" href="/src/styles/global.css">',
        `<style>${styles}</style>`
    );
    assert.notEqual(html, fixture, 'fixture must include the real global stylesheet');
    const browserBinary = existsSync('/usr/bin/chromium') ? { executablePath: '/usr/bin/chromium' } : { channel: 'chrome' };
    browser = await chromium.launch({ ...browserBinary, headless: true, args: ['--no-sandbox'] });
    const page = await browser.newPage({ viewport: viewports[0], deviceScaleFactor: 1 });
    // Layout assertions should measure the settled geometry, not the dialog's entrance animation.
    await page.emulateMedia({ reducedMotion: 'reduce' });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.setContent(html, { waitUntil: 'domcontentloaded' });

    const results = [];
    for (const viewport of viewports) {
        await page.setViewportSize(viewport);
        await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
        const measurements = await page.evaluate(() => [...document.querySelectorAll('[data-dialog]')].map(overlay => {
            const dialog = overlay.querySelector('[role="dialog"], section');
            const box = dialog.getBoundingClientRect();
            const overlayBox = overlay.getBoundingClientRect();
            const scrollable = [...dialog.querySelectorAll('*'), dialog].filter(node => node.scrollHeight > node.clientHeight + 2);
            const controls = [...dialog.querySelectorAll('button,input')].map(node => {
                const rect = node.getBoundingClientRect();
                return { left: rect.left, right: rect.right, width: rect.width };
            });
            return {
                name: overlay.dataset.dialog,
                rect: { left: box.left, right: box.right, top: box.top, bottom: box.bottom, width: box.width, height: box.height },
                overlay: { left: overlayBox.left, right: overlayBox.right, top: overlayBox.top, bottom: overlayBox.bottom },
                scrollableCount: scrollable.length,
                controls
            };
        }));
        assert.deepEqual(measurements.map(item => item.name), ['chat-info','gallery','pinned','profile','group']);
        for (const item of measurements) {
            assert.ok(item.rect.width > 0 && item.rect.height > 0, `${item.name} should render at ${viewport.width}x${viewport.height}`);
            assert.ok(item.rect.left >= -1 && item.rect.right <= viewport.width + 1,
                `${item.name} must fit horizontally at ${viewport.width}px: ${JSON.stringify(item.rect)}`);
            assert.ok(item.rect.top >= -1 && item.rect.bottom <= viewport.height + 1,
                `${item.name} must fit vertically at ${viewport.height}px: ${JSON.stringify(item.rect)}`);
            assert.ok(item.scrollableCount > 0, `${item.name} should retain an internal scroll region for long content`);
            for (const control of item.controls) {
                assert.ok(control.width > 0 && control.left >= -1 && control.right <= viewport.width + 1,
                    `${item.name} control must fit at ${viewport.width}px: ${JSON.stringify(control)}`);
            }
        }
        results.push({ viewport: `${viewport.width}x${viewport.height}`, dialogs: measurements.length, allFit: true });
    }
    assert.deepEqual(errors, [], 'responsive dialog fixtures should have no uncaught browser errors');
    console.log('Responsive dialog viewport matrix passed:', results);
} finally {
    await browser?.close();
}
