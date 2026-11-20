import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const source = await readFile(new URL('../src/services/messageService.js', import.meta.url), 'utf8');

test('message deletion and preview reconciliation share one transaction', () => {
    const start = source.indexOf('async deleteMessage(');
    const end = source.indexOf('async markAsRead(', start);
    const implementation = source.slice(start, end);

    assert.match(implementation, /runTransaction\(db/);
    assert.match(implementation, /transaction\.delete\(messageRef\)/);
    assert.match(implementation, /transaction\.update\(chatRef, updates\)/);
    assert.match(implementation, /transaction\.get\(replacementRef\)/);
    assert.match(implementation, /chatData\.lastMessageId === messageId/);
    assert.match(implementation, /updates\.lastMessageId = replacementSnapshot\.id/);
    assert.match(implementation, /updates\.lastMessageId = null/);
    assert.doesNotMatch(implementation, /await setDoc\(/);
    assert.doesNotMatch(implementation, /await deleteDoc\(/);
});

test('sending a message writes its stable ID alongside the chat preview', () => {
    const start = source.indexOf('async sendMessage(');
    const end = source.indexOf('async messageExists(', start);
    const implementation = source.slice(start, end);
    assert.match(implementation, /lastMessageId: messageRef\.id/);
    assert.match(implementation, /batch\.set\(messageRef, messageData\)/);
    assert.match(implementation, /batch\.update\(doc\(db, 'chats', chatId\)/);
    assert.match(implementation, /await batch\.commit\(\)/);
});
