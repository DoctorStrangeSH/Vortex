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
const usernameSuffix = `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
const alice = { name: 'Vortex Alice', username: `a${usernameSuffix}`, email: `alice-${unique}@example.test` };
const bob = { name: 'Vortex Bob', username: `b${usernameSuffix}`, email: `bob-${unique}@example.test` };
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
    await page.locator('#vortex-auth-password').fill(password);
    await page.getByRole('button', { name: 'Зарегистрироваться' }).click();
    await page.locator('.vortex-sidebar').waitFor({ timeout: 20000 });
}
async function login(page, user) {
    await page.getByLabel('Электронная почта').fill(user.email);
    await page.locator('#vortex-auth-password').fill(password);
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
async function waitForMessage(page, text) {
    // The same content is also rendered in the Sidebar preview; assert the
    // actual message body to avoid matching both the preview and the bubble.
    await page.locator('.vortex-message-text').filter({ hasText: text }).first().waitFor({ timeout: 15000 });
}
async function sendMessage(page, text) {
    await page.getByRole('textbox', { name: 'Текст сообщения' }).fill(text);
    await page.getByRole('button', { name: 'Отправить сообщение' }).click();
    await waitForMessage(page, text);
}
async function assertActiveMenuItem(page, expected) {
    const active = await page.evaluate(() => document.activeElement?.textContent?.trim());
    assert.equal(active, expected, `Expected focused menu item "${expected}", got "${active}"`);
}
async function assertResponsiveShell(page, width, height = 900) {
    await page.setViewportSize({ width, height });
    await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
    const geometry = await page.evaluate(() => {
        const header = document.querySelector('.vortex-chat-header')?.getBoundingClientRect();
        const composer = document.querySelector('.vortex-composer')?.getBoundingClientRect();
        const input = document.querySelector('.vortex-composer-input')?.getBoundingClientRect();
        return {
            viewport: window.innerWidth,
            documentWidth: document.documentElement.scrollWidth,
            header: header && { left: header.left, right: header.right, width: header.width },
            composer: composer && { left: composer.left, right: composer.right, width: composer.width },
            input: input && { left: input.left, right: input.right, width: input.width }
        };
    });
    assert.ok(geometry.header, `ChatHeader missing at ${width}px`);
    assert.ok(geometry.composer, `Composer missing at ${width}px`);
    assert.ok(geometry.input && geometry.input.width >= 48, `Composer input is too narrow at ${width}px: ${JSON.stringify(geometry)}`);
    assert.ok(geometry.header.left >= 0 && geometry.header.right <= width + 1, `Header overflow at ${width}px: ${JSON.stringify(geometry)}`);
    assert.ok(geometry.composer.left >= 0 && geometry.composer.right <= width + 1, `Composer overflow at ${width}px: ${JSON.stringify(geometry)}`);
    assert.ok(geometry.documentWidth <= width + 1, `Document horizontal overflow at ${width}px: ${JSON.stringify(geometry)}`);
    return geometry;
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
    await waitForMessage(pageB, firstMessage);
    await sendMessage(pageB, secondMessage);
    await waitForMessage(pageA, secondMessage);

    // Verify a long Unicode message remains readable and does not force horizontal overflow.
    const longMessage = `Длинное сообщение для проверки переноса текста на узком экране. ${'Vortex_тест_сообщения_без_горизонтального_скролла '.repeat(24)}`;
    await assertResponsiveShell(pageA, 320, 812);
    await sendMessage(pageA, longMessage);
    await waitForMessage(pageB, longMessage);
    const longBubble = await pageA.locator('.vortex-message-text').filter({ hasText: longMessage }).first().evaluate(element => {
        const rect = element.getBoundingClientRect();
        return { left: rect.left, right: rect.right, width: rect.width, scrollWidth: element.scrollWidth, clientWidth: element.clientWidth };
    });
    assert.ok(longBubble.left >= 0 && longBubble.right <= 321, `Long message exceeds 320px viewport: ${JSON.stringify(longBubble)}`);
    assert.ok(longBubble.scrollWidth <= longBubble.clientWidth + 1, `Long message text overflows its bubble: ${JSON.stringify(longBubble)}`);

    // Mobile header menu supports keyboard navigation and restores focus on Escape.
    await pageA.getByRole('button', { name: 'Дополнительные действия' }).click();
    const headerMenu = pageA.getByRole('menu', { name: 'Дополнительные действия с чатом' });
    await headerMenu.waitFor({ state: 'visible' });
    await pageA.keyboard.press('ArrowDown');
    await assertActiveMenuItem(pageA, 'Статус');
    await pageA.keyboard.press('Escape');
    await headerMenu.waitFor({ state: 'hidden' });
    assert.equal(await pageA.evaluate(() => document.activeElement?.getAttribute('aria-label')), 'Дополнительные действия');

    // Verify both primary header dialogs open and close from the real chat.
    await pageA.getByRole('button', { name: 'Информация о чате' }).click();
    await pageA.getByRole('dialog', { name: 'Информация о чате' }).waitFor({ state: 'visible' });
    await pageA.getByRole('button', { name: 'Закрыть информацию о чате' }).click();
    await pageA.getByRole('button', { name: 'Открыть галерею' }).click();
    await pageA.getByRole('dialog', { name: 'Медиа и файлы' }).waitFor({ state: 'visible' });
    await pageA.getByRole('button', { name: 'Закрыть галерею' }).click();

    // Check real composer/header geometry at every important narrow and wide breakpoint.
    for (const width of [320, 375, 390, 768, 769, 1024, 1440]) {
        await assertResponsiveShell(pageA, width, width === 320 ? 812 : 900);
    }

    // Desktop header exposes its actions without the mobile overflow menu.
    await pageA.getByRole('button', { name: 'Оформление' }).waitFor({ state: 'visible' });
    await pageA.getByRole('button', { name: 'Статус' }).waitFor({ state: 'visible' });
    await pageA.getByRole('button', { name: 'Экспорт переписки' }).waitFor({ state: 'visible' });

    // Message context menu is available from the actual message bubble.
    await pageA.locator('.vortex-bubble-own').filter({ hasText: firstMessage }).click({ button: 'right' });
    const messageMenu = pageA.getByRole('menu', { name: 'Действия с сообщением' });
    await messageMenu.waitFor({ state: 'visible' });
    await pageA.getByRole('menuitem', { name: /Редактировать/ }).waitFor({ state: 'visible' });
    await pageA.getByRole('menuitem', { name: /Удалить/ }).waitFor({ state: 'visible' });
    await pageA.keyboard.press('Escape');
    await messageMenu.waitFor({ state: 'hidden' });

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
    await pageA.getByRole('button', { name: 'Назад к списку чатов' }).click();
    await pageA.setViewportSize({ width: 1024, height: 900 });

    // Switch the same browser session to Bob. Account-keyed ChatScreen must reset selection.
    await pageA.getByRole('button', { name: 'Открыть меню' }).click();
    await pageA.getByRole('button', { name: /Выйти из аккаунта/ }).click();
    await pageA.locator('.vortex-auth-screen').waitFor({ timeout: 15000 });
    await login(pageA, bob);
    await pageA.locator('.vortex-chat-header').waitFor({ state: 'hidden', timeout: 10000 });
    await pageA.getByRole('button', { name: new RegExp(`Открыть чат ${alice.name}`) }).click();
    await waitForMessage(pageA, firstMessage);
    await waitForMessage(pageA, secondMessage);

    assert.deepEqual(pageErrors, [], 'real authenticated ChatScreen must have no uncaught browser errors');
    console.log('Authenticated ChatScreen Emulator E2E passed:', {
        users: 2,
        realtimeMessages: 2,
        navigation: 'sidebar -> chat -> back',
        viewports: [320, 375, 390, 768, 769, 1024, 1440],
        longMessage: 'wrapped without horizontal overflow',
        headerActions: 'mobile keyboard menu + info/gallery dialogs + desktop actions',
        messageContextMenu: 'edit/delete actions available',
        accountSwitch: 'A -> sign out -> B; selection reset'
    });

    await contextA.close();
    await contextB.close();
} finally {
    await browser?.close();
    server.kill('SIGTERM');
}
