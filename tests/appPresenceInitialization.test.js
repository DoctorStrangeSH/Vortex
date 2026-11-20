import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const appSource = await readFile(new URL('../src/components/App.jsx', import.meta.url), 'utf8');

test('signed-in app initializes presence without depending on post-1.0 E2EE', () => {
    assert.doesNotMatch(appSource, /encryptionService/);
    assert.match(appSource, /presenceService\.startTracking\(\)/);
    assert.match(appSource, /Presence initialization failed/);
});

test('presence initialization remains after profile validation and before chat render', () => {
    const profileCheck = appSource.indexOf('await userService.ensurePublicProfile(firebaseUser.uid)');
    const presenceStart = appSource.indexOf('presenceService.startTracking()');
    const chatRender = appSource.indexOf('return <ChatScreen user={user} />');
    assert.ok(profileCheck >= 0 && presenceStart > profileCheck);
    assert.ok(chatRender > presenceStart);
});
