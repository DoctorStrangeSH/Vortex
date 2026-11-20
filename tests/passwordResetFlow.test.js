import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const authService = await readFile(new URL('../src/services/authService.js', import.meta.url), 'utf8');
const authScreen = await readFile(new URL('../src/components/Auth/AuthScreen.jsx', import.meta.url), 'utf8');

test('auth service delegates password reset to Firebase Auth', () => {
    assert.match(authService, /sendPasswordResetEmail/);
    assert.match(authService, /async resetPassword\(email\)/);
    assert.match(authService, /await sendPasswordResetEmail\(auth, normalizedEmail\)/);
});

test('auth screen exposes a password reset flow without asking for a password', () => {
    assert.match(authScreen, /setMode\('reset'\)/);
    assert.match(authScreen, /mode === 'reset' \? 'Отправить письмо'/);
    assert.match(authScreen, /mode !== 'reset' && <div style=\{styles\.fieldGroup\}/);
    assert.match(authScreen, /Если аккаунт с такой почтой существует/);
});

test('username availability checks run only during registration completion or signup', () => {
    assert.match(authScreen, /mode !== 'register' && mode !== 'complete'/);
    assert.match(authScreen, /mode === 'register' \|\| mode === 'complete'/);
});
