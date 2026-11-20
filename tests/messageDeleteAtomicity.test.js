import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const source = await readFile(new URL('../src/services/messageService.js', import.meta.url), 'utf8');

test('message deletion batches the message and pinned-reference updates', () => {
    const start = source.indexOf('async deleteMessage(');
    const end = source.indexOf('\n    async markAsRead(', start);
    const implementation = source.slice(start, end);

    assert.match(implementation, /const batch = writeBatch\(db\)/);
    assert.match(implementation, /batch\.delete\(doc\(db, 'chats', chatId, 'messages', messageId\)\)/);
    assert.match(implementation, /batch\.set\(chatRef, \{ pinnedMessages \}, \{ merge: true \}\)/);
    assert.match(implementation, /await batch\.commit\(\)/);
    assert.doesNotMatch(implementation, /await deleteDoc\(/);
    assert.doesNotMatch(implementation, /await setDoc\(chatRef, \{ pinnedMessages \}/);
});
