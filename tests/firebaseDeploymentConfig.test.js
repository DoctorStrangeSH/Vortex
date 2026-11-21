import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const firebaseConfig = JSON.parse(readFileSync(new URL('../firebase.json', import.meta.url), 'utf8'));

test('Spark deployment config does not register deferred Cloud Functions', () => {
    assert.equal(Object.hasOwn(firebaseConfig, 'functions'), false);
    assert.equal(Object.hasOwn(firebaseConfig.emulators || {}, 'functions'), false);
});
