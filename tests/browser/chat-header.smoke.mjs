import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { setTimeout as delay } from 'node:timers/promises';
import { chromium } from 'playwright-core';

const port = 4191;
const origin = `http://127.0.0.1:${port}`;
const widths = [320, 360, 375, 390, 768, 769, 1024, 1440];
const server = spawn(process.execPath, ['node_modules/vite/bin/vite.js', '--host', '127.0.0.1', '--port', String(port), '--strictPort'], { stdio: 'pipe' });
let browser;
let serverOutput = '';
server.stdout.on('data', chunk => { serverOutput += chunk.toString(); });
server.stderr.on('data', chunk => { serverOutput += chunk.toString(); });

try {
    let ready = false;
    for (let attempt = 0; attempt < 60; attempt++) {
        if (server.exitCode !== null) throw new Error('Vite exited before ChatHeader browser test');
        try {
            const response = await fetch(`${origin}/tests/browser/chat-header.html`);
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
    await page.goto(`${origin}/tests/browser/chat-header.html`, { waitUntil: 'domcontentloaded' });

    const measurements = [];
    for (const width of widths) {
        await page.setViewportSize({ width, height: 800 });
        await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
        const result = await page.evaluate(() => {
            const header = document.querySelector('.vortex-chat-header');
            const left = header.querySelector(':scope > div:first-child');
            const actions = header.querySelector('.vortex-header-actions');
            const heading = header.querySelector('.vortex-chat-heading');
            const rect = element => {
                const box = element.getBoundingClientRect();
                return { left: box.left, right: box.right, width: box.width };
            };
            return {
                viewport: window.innerWidth,
                documentWidth: document.documentElement.scrollWidth,
                header: rect(header),
                left: rect(left),
                actions: rect(actions),
                heading: rect(heading),
                buttons: [...actions.querySelectorAll('button')].map(button => ({
                    label: button.getAttribute('aria-label'),
                    ...rect(button)
                })),
                backVisible: !!header.querySelector('button[aria-label="Назад к списку чатов"]')
            };
        });

        assert.ok(result.documentWidth <= width, `document must not overflow at ${width}px: ${JSON.stringify(result)}`);
        assert.ok(result.header.left >= -1 && result.header.right <= width + 1,
            `header must fit at ${width}px: ${JSON.stringify(result.header)}`);
        assert.ok(result.left.left >= -1 && result.left.right <= width + 1,
            `chat identity must fit at ${width}px: ${JSON.stringify(result.left)}`);
        assert.ok(result.actions.left >= -1 && result.actions.right <= width + 1,
            `header actions must fit at ${width}px: ${JSON.stringify(result.actions)}`);
        assert.ok(result.heading.width > 0, `chat title must remain visible at ${width}px`);

        if (width <= 768) {
            assert.equal(result.backVisible, true, 'mobile header must expose the back action');
            assert.deepEqual(result.buttons.map(button => button.label), [
                'Информация о чате', 'Открыть галерею', 'Дополнительные действия'
            ]);
        } else {
            assert.equal(result.backVisible, false, 'desktop header must not show mobile back action');
            assert.deepEqual(result.buttons.map(button => button.label), [
                'Информация о чате', 'Открыть галерею', 'Участники группы',
                'Оформление', 'Статус', 'Экспорт переписки'
            ]);
        }
        for (const button of result.buttons) {
            assert.ok(button.width > 0 && button.left >= -1 && button.right <= width + 1,
                `header button must remain visible at ${width}px: ${JSON.stringify(button)}`);
        }
        measurements.push({ width, header: Math.round(result.header.width), title: Math.round(result.heading.width), actions: result.buttons.length });
    }

    // Exercise the real mobile overflow menu, including roving keyboard focus and action dispatch.
    await page.setViewportSize({ width: 320, height: 800 });
    const menuTrigger = page.getByRole('button', { name: 'Дополнительные действия' });
    assert.equal(await menuTrigger.getAttribute('aria-haspopup'), 'menu',
        'mobile overflow trigger must announce that it opens a menu');
    assert.equal(await menuTrigger.getAttribute('aria-expanded'), 'false');

    // The menu must be operable without a pointer: Enter opens it and moves
    // focus to the first item, Escape closes it and restores the trigger.
    await menuTrigger.focus();
    await page.keyboard.press('Enter');
    const menuItems = page.getByRole('menuitem');
    await menuItems.first().waitFor();
    assert.equal(await menuTrigger.getAttribute('aria-expanded'), 'true');
    await page.waitForFunction(() => document.activeElement?.getAttribute('role') === 'menuitem');
    assert.equal(await page.evaluate(() => document.activeElement?.querySelector('span')?.textContent.trim()),
        'Участники группы');
    await page.keyboard.press('Escape');
    await page.getByRole('menu').waitFor({ state: 'detached' });
    assert.equal(await menuTrigger.evaluate(element => element === document.activeElement), true);
    assert.equal(await menuTrigger.getAttribute('aria-expanded'), 'false');

    // Space is also a native keyboard activation key for the trigger.
    await menuTrigger.focus();
    await page.keyboard.press('Space');
    await menuItems.first().waitFor();
    assert.equal(await menuTrigger.getAttribute('aria-expanded'), 'true');
    await page.keyboard.press('Escape');
    await page.getByRole('menu').waitFor({ state: 'detached' });
    assert.equal(await menuTrigger.evaluate(element => element === document.activeElement), true);

    await menuTrigger.click();
    await menuItems.first().waitFor();
    assert.equal(await menuItems.count(), 4, 'group menu must expose members, theme, status and export');
    await page.waitForFunction(() => {
        const active = document.activeElement;
        return active?.getAttribute('role') === 'menuitem'
            && active.querySelector('span')?.textContent.trim() === 'Участники группы';
    });
    const focusedMenuLabel = () => page.evaluate(() =>
        document.activeElement?.querySelector('span')?.textContent.trim() || ''
    );
    assert.equal(await focusedMenuLabel(), 'Участники группы');

    await page.keyboard.press('ArrowDown');
    assert.equal(await focusedMenuLabel(), 'Оформление');
    await page.keyboard.press('End');
    assert.equal(await focusedMenuLabel(), 'Экспорт переписки');
    await page.keyboard.press('ArrowDown');
    assert.equal(await focusedMenuLabel(), 'Участники группы');
    await page.keyboard.press('Escape');
    await page.getByRole('menu').waitFor({ state: 'detached' });
    assert.equal(await menuTrigger.evaluate(element => element === document.activeElement),
        true, 'Escape must restore focus to the menu trigger');

    await menuTrigger.click();
    await page.getByRole('menuitem', { name: 'Оформление' }).click();
    assert.deepEqual(await page.evaluate(() => window.__vortexCalls), ['theme'],
        'choosing a mobile menu action must call the matching handler exactly once');
    assert.equal(await page.getByRole('menu').count(), 0, 'menu must close after an action');

    await page.getByRole('button', { name: 'Назад к списку чатов' }).click();
    assert.deepEqual(await page.evaluate(() => window.__vortexCalls), ['theme', 'back'],
        'mobile back action must call its handler');

    // Desktop actions remain directly available and wired.
    await page.setViewportSize({ width: 1024, height: 800 });
    for (const [label, expected] of [
        ['Информация о чате', 'info'],
        ['Открыть галерею', 'gallery'],
        ['Участники группы', 'members'],
        ['Оформление', 'theme'],
        ['Статус', 'status'],
        ['Экспорт переписки', 'export']
    ]) {
        await page.getByRole('button', { name: label }).click();
        const calls = await page.evaluate(() => window.__vortexCalls);
        assert.equal(calls.at(-1), expected, `desktop action ${label} must call its handler`);
    }

    assert.deepEqual(errors, [], 'real ChatHeader should have no uncaught browser errors');
    console.log('Real ChatHeader viewport and interaction checks passed:', measurements);
} finally {
    await browser?.close();
    server.kill('SIGTERM');
}
