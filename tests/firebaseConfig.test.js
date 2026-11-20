import test from 'node:test';
import assert from 'node:assert/strict';
import { resolveFirebaseConfig } from '../src/services/firebaseConfig.js';

const production = {
    apiKey: 'production-key',
    authDomain: 'vortex-production.firebaseapp.com',
    projectId: 'vortex-production',
    storageBucket: 'vortex-production.firebasestorage.app',
    messagingSenderId: '100000000000',
    appId: '1:100000000000:web:production'
};

const staging = {
    VITE_APP_ENV: 'staging',
    VITE_FIREBASE_API_KEY: 'staging-key',
    VITE_FIREBASE_AUTH_DOMAIN: 'vortex-staging.firebaseapp.com',
    VITE_FIREBASE_PROJECT_ID: 'vortex-staging',
    VITE_FIREBASE_STORAGE_BUCKET: 'vortex-staging.firebasestorage.app',
    VITE_FIREBASE_MESSAGING_SENDER_ID: '200000000000',
    VITE_FIREBASE_APP_ID: '1:200000000000:web:staging'
};

test('default and production builds retain the existing production configuration', () => {
    assert.equal(resolveFirebaseConfig({}, production), production);
    assert.equal(resolveFirebaseConfig({ MODE: 'production' }, production), production);
});

test('a complete isolated staging configuration is selected', () => {
    const selected = resolveFirebaseConfig(staging, production);
    assert.deepEqual(selected, {
        apiKey: 'staging-key',
        authDomain: 'vortex-staging.firebaseapp.com',
        projectId: 'vortex-staging',
        storageBucket: 'vortex-staging.firebasestorage.app',
        messagingSenderId: '200000000000',
        appId: '1:200000000000:web:staging'
    });
});

test('staging rejects incomplete configuration', () => {
    assert.throws(() => resolveFirebaseConfig({ VITE_APP_ENV: 'staging' }, production), /заполнить все/);
    assert.throws(() => resolveFirebaseConfig({ MODE: 'staging' }, production), /заполнить все/);
    assert.throws(() => resolveFirebaseConfig({ ...staging, VITE_FIREBASE_APP_ID: '' }, production), /заполнить все/);
});

test('staging rejects production project, bucket and auth domain reuse', () => {
    assert.throws(() => resolveFirebaseConfig({ ...staging, VITE_FIREBASE_PROJECT_ID: production.projectId }, production), /не должен использовать ресурсы production/);
    assert.throws(() => resolveFirebaseConfig({ ...staging, VITE_FIREBASE_STORAGE_BUCKET: production.storageBucket }, production), /не должен использовать ресурсы production/);
    assert.throws(() => resolveFirebaseConfig({ ...staging, VITE_FIREBASE_AUTH_DOMAIN: production.authDomain }, production), /не должен использовать ресурсы production/);
});

test('Firebase overrides are rejected outside staging mode', () => {
    assert.throws(() => resolveFirebaseConfig({ ...staging, VITE_APP_ENV: 'production' }, production), /разрешено только при VITE_APP_ENV=staging/);
    assert.throws(() => resolveFirebaseConfig({ MODE: 'production', VITE_FIREBASE_PROJECT_ID: 'staging' }, production), /заполнить все/);
});
