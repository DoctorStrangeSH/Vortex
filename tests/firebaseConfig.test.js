import test from 'node:test';
import assert from 'node:assert/strict';
import { resolveFirebaseConfig } from '../src/services/firebaseConfig.js';

const prod = {
    apiKey: 'prod-key', authDomain: 'prod.firebaseapp.com', projectId: 'prod',
    storageBucket: 'prod.firebasestorage.app', messagingSenderId: '111', appId: 'prod-app'
};
const staging = {
    VITE_APP_ENV: 'staging',
    VITE_FIREBASE_API_KEY: 'staging-key',
    VITE_FIREBASE_AUTH_DOMAIN: 'staging.firebaseapp.com',
    VITE_FIREBASE_PROJECT_ID: 'staging',
    VITE_FIREBASE_STORAGE_BUCKET: 'staging.firebasestorage.app',
    VITE_FIREBASE_MESSAGING_SENDER_ID: '222',
    VITE_FIREBASE_APP_ID: 'staging-app'
};

test('default build retains existing Firebase production configuration', () => {
    assert.deepEqual(resolveFirebaseConfig({}, prod), prod);
});

test('staging uses a complete separate project configuration', () => {
    assert.deepEqual(resolveFirebaseConfig(staging, prod), {
        apiKey: 'staging-key', authDomain: 'staging.firebaseapp.com', projectId: 'staging',
        storageBucket: 'staging.firebasestorage.app', messagingSenderId: '222', appId: 'staging-app'
    });
});

test('incomplete and mixed Firebase configurations fail closed', () => {
    assert.throws(() => resolveFirebaseConfig({ VITE_APP_ENV: 'staging' }, prod));
    assert.throws(() => resolveFirebaseConfig({ MODE: 'staging' }, prod));
    assert.throws(() => resolveFirebaseConfig({ VITE_FIREBASE_PROJECT_ID: 'staging' }, prod));
    assert.throws(() => resolveFirebaseConfig({ ...staging, VITE_FIREBASE_APP_ID: '' }, prod));
    assert.throws(() => resolveFirebaseConfig({ ...staging, VITE_FIREBASE_PROJECT_ID: 'prod' }, prod));
    assert.throws(() => resolveFirebaseConfig({ ...staging, VITE_FIREBASE_STORAGE_BUCKET: prod.storageBucket }, prod));
    assert.throws(() => resolveFirebaseConfig({ ...staging, VITE_FIREBASE_AUTH_DOMAIN: prod.authDomain }, prod));
    assert.throws(() => resolveFirebaseConfig({ ...staging, VITE_APP_ENV: 'production' }, prod));
});
