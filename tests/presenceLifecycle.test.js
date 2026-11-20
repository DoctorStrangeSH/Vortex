import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const presenceSource = await readFile(new URL('../src/services/presenceService.js', import.meta.url), 'utf8');
const appSource = await readFile(new URL('../src/components/App.jsx', import.meta.url), 'utf8');

test('presence tracking is idempotent for repeated auth notifications', () => {
    assert.match(presenceSource, /if \(this\.activeUid === uid && this\.intervalId !== null\) return/);
    assert.match(presenceSource, /this\.intervalId = setInterval\(publishOnline, 30000\)/);
});

test('presence cleanup clears its timer and removes lifecycle listeners', () => {
    assert.match(presenceSource, /clearInterval\(this\.intervalId\)/);
    assert.match(presenceSource, /removeEventListener\('pagehide', this\.handlePageHide\)/);
    assert.match(presenceSource, /removeEventListener\('beforeunload', this\.handlePageHide\)/);
});

test('app stops presence when auth changes and when the app unmounts', () => {
    assert.ok((appSource.match(/presenceService\.stopTracking\(\)/g) || []).length >= 3);
});
