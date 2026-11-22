import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { chromium } from 'playwright-core';

const viewports = [
    { width: 320, height: 480 },
    { width: 375, height: 480 },
    { width: 375, height: 800 },
    { width: 1024, height: 480 }
];
let browser;
try {
    const [fixture, styles] = await Promise.all([
        readFile(resolve('tests/browser/profile-dialog-compact.html'), 'utf8'),
        readFile(resolve('src/styles/global.css'), 'utf8')
    ]);
    const html = fixture.replace('</head>', `<style>${styles}</style></head>`);
    browser = await chromium.launch({
        ...(process.platform === 'linux' ? { executablePath: '/usr/bin/chromium' } : { channel: 'chrome' }),
        headless: true,
        args: ['--no-sandbox']
    });
    const page = await browser.newPage({ viewport: viewports[0] });
    await page.setContent(html, { waitUntil: 'domcontentloaded' });
    const results = [];
    for (const viewport of viewports) {
        await page.setViewportSize(viewport);
        const result = await page.evaluate(() => {
            const dialog = document.querySelector('.vortex-profile-modal');
            const body = document.querySelector('.vortex-profile-body');
            const rect = dialog.getBoundingClientRect();
            const controls = [...dialog.querySelectorAll('button,input,textarea')].map(element => {
                const box = element.getBoundingClientRect();
                return { left: box.left, right: box.right, width: box.width };
            });
            return {
                rect: { left: rect.left, right: rect.right, top: rect.top, bottom: rect.bottom, height: rect.height },
                body: { clientHeight: body.clientHeight, scrollHeight: body.scrollHeight, overflowY: getComputedStyle(body).overflowY },
                dialogOverflow: getComputedStyle(dialog).overflow
            };
        });
        assert.ok(result.rect.left >= -1 && result.rect.right <= viewport.width + 1,
            `profile dialog should fit width at ${viewport.width}px: ${JSON.stringify(result.rect)}`);
        assert.ok(result.rect.top >= -1 && result.rect.bottom <= viewport.height + 1,
            `profile dialog should fit height at ${viewport.height}px: ${JSON.stringify(result.rect)}`);
        assert.ok(result.body.scrollHeight > result.body.clientHeight,
            `profile body should scroll internally at ${viewport.width}x${viewport.height}: ${JSON.stringify(result.body)}`);
        assert.equal(result.body.overflowY, 'auto');
        assert.equal(result.dialogOverflow, 'hidden');
        for (const control of result.controls) {
            assert.ok(control.width > 0 && control.left >= -1 && control.right <= viewport.width + 1,
                `profile control should remain visible: ${JSON.stringify(control)}`);
        }
        results.push({ viewport: `${viewport.width}x${viewport.height}`, dialogHeight: Math.round(result.rect.bottom - result.rect.top), bodyScrolls: true });
    }
    console.log('Profile dialog compact viewport matrix passed:', results);
} finally {
    await browser?.close();
}
