import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { setTimeout as delay } from 'node:timers/promises';
import { chromium } from 'playwright-core';

const port = 4192;
const origin = `http://127.0.0.1:${port}`;
const server = spawn(process.execPath, ['node_modules/vite/bin/vite.js', '--host', '127.0.0.1', '--port', String(port), '--strictPort'], { stdio: ['ignore', 'pipe', 'pipe'] });
let serverOutput = '';
server.stdout.on('data', chunk => { serverOutput += chunk.toString(); });
server.stderr.on('data', chunk => { serverOutput += chunk.toString(); });
let browser;

try {
    let ready = false;
    for (let attempt = 0; attempt < 60; attempt++) {
        if (server.exitCode !== null) throw new Error('Vite server exited before composer browser test');
        try {
            const response = await fetch(`${origin}/tests/browser/composer.html`);
            if (response.ok) { ready = true; break; }
            if (response.status !== 404) serverOutput += `Fixture HTTP ${response.status}\\n`;
        } catch { /* Wait for Vite startup. */ }
        await delay(250);
    }
    assert.ok(ready, `composer fixture should start; Vite output: ${serverOutput}`);
    const browserBinary = existsSync('/usr/bin/chromium') ? { executablePath: '/usr/bin/chromium' } : { channel: 'chrome' };
    browser = await chromium.launch({ ...browserBinary, headless: true, args: ['--no-sandbox'] });
    const page = await browser.newPage({ viewport: { width: 390, height: 720 } });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(`${origin}/tests/browser/composer.html`);
    const input = page.getByRole('textbox', { name: 'Редактировать сообщение' });
    await input.fill('Проверка отправки');
    await input.press('Enter');
    await page.getByTestId('sent-count').waitFor({ state: 'visible' });
    assert.equal(await page.getByTestId('sent-count').textContent(), '1', 'Enter should send exactly once');
    assert.equal(await page.getByRole('textbox', { name: 'Текст сообщения' }).inputValue(), '', 'successful send should clear the controlled composer');

    const normalInput = page.getByRole('textbox', { name: 'Текст сообщения' });
    await normalInput.fill('Текст во время IME');
    await normalInput.evaluate(element => {
        const event = new KeyboardEvent('keydown', { key: 'Enter', keyCode: 229, bubbles: true, cancelable: true });
        Object.defineProperty(event, 'isComposing', { value: true });
        element.dispatchEvent(event);
    });
    assert.equal(await page.getByTestId('sent-count').textContent(), '1', 'Enter during IME composition must not send');
    assert.equal(await normalInput.inputValue(), 'Текст во время IME', 'IME composition text must remain intact');

    await normalInput.press('Escape');
    assert.equal(await page.getByTestId('cancel-count').textContent(), '1', 'Escape should cancel message editing');
    assert.equal(await page.getByRole('textbox', { name: 'Текст сообщения' }).count(), 1, 'composer should return to normal mode');

    assert.deepEqual(errors, [], 'composer browser scenario should have no uncaught page errors');
    console.log('Message composer real-component browser test passed');
} finally {
    await browser?.close();
    server.kill('SIGTERM');
}
