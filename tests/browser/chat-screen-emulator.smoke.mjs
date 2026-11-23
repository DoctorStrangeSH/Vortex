import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { setTimeout as delay } from 'node:timers/promises';
import { chromium } from 'playwright-core';

const port = 4192;
const origin = `http://127.0.0.1:${port}`;
const server = spawn(process.execPath, ['node_modules/vite/bin/vite.js', '--host', '127.0.0.1', '--port', String(port), '--strictPort'], {
    stdio: 'pipe',
    env: {
        ...process.env,
        VITE_APP_ENV: 'staging',
        VITE_USE_FIREBASE_EMULATORS: 'true',
        VITE_FIREBASE_API_KEY: 'demo-api-key',
        VITE_FIREBASE_AUTH_DOMAIN: 'demo-vortex.firebaseapp.com',
        VITE_FIREBASE_PROJECT_ID: 'demo-vortex',
        VITE_FIREBASE_STORAGE_BUCKET: 'demo-vortex.appspot.com',
        VITE_FIREBASE_MESSAGING_SENDER_ID: '1234567890',
        VITE_FIREBASE_APP_ID: '1:1234567890:web:demo-vortex'
    }
});
let browser;
let serverOutput = '';
server.stdout.on('data', chunk => { serverOutput += chunk.toString(); });
server.stderr.on('data', chunk => { serverOutput += chunk.toString(); });

const unique = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
const alice = { name: 'Vortex Alice', username: `alice_${unique.replaceAll('-', '_')}`, email: `alice-${unique}@example.test` };
const bob = { name: 'Vortex Bob', username: `bob_${unique.replaceAll('-', '_')}`, email: `bob-${unique}@example.test` };
const password = 'Vortex-test-password-123!';
const firstMessage = `Привет из настоящего ChatScreen ${unique}`;
const secondMessage = `Ответ второго аккаунта ${unique}`;

async function waitForApp(page) {
    await page.locator('.vortex-auth-screen, .vortex-sidebar').first().waitFor({ timeout: 15000 });
}
async function register(page, user) {
    await page.getByRole('tab', { name: 'Регистрация' }).click();
    await page.getByLabel('Имя').fill(user.name);
    await page.getByLabel('Логин').fill(user.username);
    await page.getByLabel('Электронная почта').fill(user.email);
    await page.getByLabel('Пароль').fill(password);
    await page.getByRole('button', { name: 'Зарегистрироваться' }).click();
    await page.locator('.vortex-sidebar').waitFor({ timeout: 20000 });
}
async function login(page, user) {
    await page.getByLabel('Электронная почта').fill(user.email);
    await page.getByLabel('Пароль').fill(password);
    await page.getByRole('button', { name: 'Войти', exact: true }).click();
    await page.locator('.vortex-sidebar').waitFor({ timeout: 20000 });
}
async function openChatFromSearch(page, user) {
    const search = page.getByRole('textbox', { name: 'Поиск чатов и людей' });
    await search.fill(`@${user.username}`);
    const result = page.getByRole('button', { name: new RegExp(`@${user.username}`) });
    await result.waitFor({ timeout: 10000 });
    await result.click();
    await page.locator('.vortex-chat-header').waitFor({ state: 'visible', timeout: 15000 });
    await page.getByRole('textbox', { name: 'Текст сообщения' }).waitFor({ state: 'visible' });
}
async function sendMessage(page, text) {
    await page.getByRole('textbox', { name: 'Текст сообщения' }).fill(text);
    await page.getByRole('button', { name: 'Отправить сообщение' }).click();
    await page.getByText(text, { exact: true }).waitFor({ timeout: 15000 });
}

try {
    let ready = false;
    for (let attempt = 0; attempt < 60; attempt++) {
        if (server.exitCode !== null) throw new Error('Vite exited before ChatScreen E2E');
        try {
            const response = await fetch(`${origin}/tests/browser/chat-screen-emulator.html`);
            if (response.ok) { ready = true; break; }
        } catch { /* Wait for Vite startup. */ }
        await delay(250);
    }
    assert.ok(ready, `Vite fixture did not become ready: ${serverOutput || '(no output)'}`);

    const browserBinary = existsSync('/usr/bin/chromium') ? { executablePath: '/usr/bin/chromium' } : { channel: 'chrome' };
    browser = await chromium.launch({ ...browserBinary, headless: true, args: ['--no-sandbox'] });
    const contextA = await browser.newContext({ viewport: { width: 1280, height: 900 } });
    const contextB = await browser.newContext({ viewport: { width: 1280, height: 900 } });
    const pageA = await contextA.newPage();
    const pageB = await contextB.newPage();
    const pageErrors = [];
    pageA.on('pageerror', error => pageErrors.push(`A: ${error.message}`));
    pageB.on('pageerror', error => pageErrors.push(`B: ${error.message}`));
    await pageA.route(/^https:\/\//, route => route.abort());
    await pageB.route(/^https:\/\//, route => route.abort());

    await pageA.goto(`${origin}/tests/browser/chat-screen-emulator.html`, { waitUntil: 'domcontentloaded' });
    await pageB.goto(`${origin}/tests/browser/chat-screen-emulator.html`, { waitUntil: 'domcontentloaded' });
    await Promise.all([waitForApp(pageA), waitForApp(pageB)]);

    // Two separate browser contexts create independent Firebase Auth sessions.
    await register(pageA, alice);
    await register(pageB, bob);
    assert.notEqual(await pageA.evaluate(() => localStorage.getItem('vortex-user')), null);
    assert.notEqual(await pageB.evaluate(() => localStorage.getItem('vortex-user')), null);

    // Alice discovers Bob through the real public username search and creates a DM.
    await openChatFromSearch(pageA, bob);
    await sendMessage(pageA, firstMessage);

    // Bob receives the chat via the real Firestore subscription and opens it.
    const bobChat = pageB.getByRole('button', { name: new RegExp(`Открыть чат ${alice.name}`) });
    await bobChat.waitFor({ timeout: 15000 });
    await bobChat.click();
    await pageB.getByText(firstMessage, { exact: true }).waitFor({ timeout: 15000 });
    await sendMessage(pageB, secondMessage);
    await pageA.getByText(secondMessage, { exact: true }).waitFor({ timeout: 15000 });

    // Exercise the actual ChatScreen mobile navigation and breakpoint transitions.
    const aliceChat = pageA.getByRole('button', { name: new RegExp(`Открыть чат ${bob.name}`) });
    await pageA.setViewportSize({ width: 375, height: 812 });
    await aliceChat.waitFor({ state: 'visible', timeout: 10000 });
    await aliceChat.click();
    await pageA.getByRole('button', { name: 'Назад к списку чатов' }).waitFor({ state: 'visible', timeout: 10000 });
    await pageA.getByRole('button', { name: 'Назад к списку чатов' }).click();
    await aliceChat.waitFor({ state: 'visible', timeout: 10000 });
    await pageA.setViewportSize({ width: 1024, height: 900 });
    await pageA.locator('.vortex-chat-header').waitFor({ state: 'visible', timeout: 10000 });
    await pageA.setViewportSize({ width: 769, height: 900 });
    await pageA.locator('.vortex-chat-header').waitFor({ state: 'visible', timeout: 10000 });
    await pageA.setViewportSize({ width: 768, height: 900 });
    await aliceChat.waitFor({ state: 'visible', timeout: 10000 });
    await aliceChat.click();
    await pageA.getByRole('button', { name: 'Назад к списку чатов' }).waitFor({ state: 'visible', timeout: 10000 });

    // Switch the same browser session to Bob. Account-keyed ChatScreen must reset selection.
    await pageA.getByRole('button', { name: 'Открыть меню' }).click();
    await pageA.getByRole('button', { name: /Выйти из аккаунта/ }).click();
    await pageA.locator('.vortex-auth-screen').waitFor({ timeout: 15000 });
    await login(pageA, bob);
    await pageA.locator('.vortex-chat-header').waitFor({ state: 'hidden', timeout: 10000 });
    await pageA.getByRole('button', { name: new RegExp(`Открыть чат ${alice.name}`) }).click();
    await pageA.getByText(firstMessage, { exact: true }).waitFor({ timeout: 15000 });
    await pageA.getByText(secondMessage, { exact: true }).waitFor({ timeout: 15000 });

    assert.deepEqual(pageErrors, [], 'real authenticated ChatScreen must have no uncaught browser errors');
    console.log('Authenticated ChatScreen Emulator E2E passed:', {
        users: 2,
        realtimeMessages: 2,
        navigation: 'sidebar -> chat -> back',
        viewports: [375, 768, 769, 1024],
        accountSwitch: 'A -> sign out -> B; selection reset'
    });

    await contextA.close();
    await contextB.close();
} finally {
    await browser?.close();
    server.kill('SIGTERM');
}
