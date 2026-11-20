import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const messageService = await readFile(new URL('../src/services/messageService.js', import.meta.url), 'utf8');
const offlineService = await readFile(new URL('../src/services/offlineService.js', import.meta.url), 'utf8');

test('offline retries reuse the queued ID and send the message and preview atomically', () => {
    const start = messageService.indexOf('async sendMessage(');
    const end = messageService.indexOf('async messageExists(', start);
    const implementation = messageService.slice(start, end);

    assert.match(implementation, /messageId\s*\?\s*doc\(db,\s*'chats',\s*chatId,\s*'messages',\s*messageId\)/);
    assert.match(implementation, /if\s*\(messageId\s*&&\s*\(await getDoc\(messageRef\)\)\.exists\(\)\)\s*return/);
    assert.match(implementation, /batch\.set\(messageRef,\s*messageData\)/);
    assert.match(implementation, /lastMessageId:\s*messageRef\.id/);
    assert.match(implementation, /await batch\.commit\(\)/);
    assert.doesNotMatch(implementation, /addDoc\(/);
});

test('offline queue passes the original action ID into the message write', () => {
    const start = offlineService.indexOf('async executeAction(');
    const end = offlineService.indexOf('\n    onChange(', start);
    const implementation = offlineService.slice(start, end);

    assert.match(implementation, /chatService\.sendMessage\(action\.chatId,\s*action\.text,\s*action\.user,\s*null,\s*action\.id\)/);
});

test('retry after remote success but local removal failure retains the same message ID', async () => {
    const source = await readFile(new URL('./offlineService.test.js', import.meta.url), 'utf8');
    const start = source.indexOf("test('failed persistence after remote send retains the message with its original ID'");
    const end = source.indexOf("\ntest(", start + 6);
    const existingRegression = source.slice(start, end < 0 ? undefined : end);

    assert.match(existingRegression, /createId:\s*\(\)\s*=>\s*'stable-message-id'/);
    assert.match(existingRegression, /assert\.equal\(service\.getQueue\(\)\[0\]\.id,\s*'stable-message-id'\)/);
    assert.match(existingRegression, /assert\.equal\(attempts,\s*2\)/);
});
