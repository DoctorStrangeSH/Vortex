import test from 'node:test';
import assert from 'node:assert/strict';
import { validateOutgoingMessage, MAX_MESSAGE_LENGTH, MAX_LEGACY_ATTACHMENT_BYTES, resolveMessageSenderName } from '../src/services/messageValidation.js';

const valid = { chatId: 'chat-1', user: { uid: 'user-1' }, text: 'Привет!' };

test('accepts a valid message', () => {
    assert.doesNotThrow(() => validateOutgoingMessage(valid));
});

test('rejects empty and oversized messages', () => {
    assert.throws(() => validateOutgoingMessage({ ...valid, text: '  ' }));
    assert.throws(() => validateOutgoingMessage({ ...valid, text: 'a'.repeat(MAX_MESSAGE_LENGTH + 1) }));
});

test('rejects unauthenticated and missing-chat sends', () => {
    assert.throws(() => validateOutgoingMessage({ ...valid, user: null }));
    assert.throws(() => validateOutgoingMessage({ ...valid, chatId: '' }));
});

test('rejects oversized and malformed embedded attachments', () => {
    assert.throws(() => validateOutgoingMessage({ ...valid, attachment: { type: 'image', fileData: 'data:image/png;base64,AAAA', fileSize: MAX_LEGACY_ATTACHMENT_BYTES + 1 } }));
    assert.throws(() => validateOutgoingMessage({ ...valid, attachment: { type: 'image', fileData: 'https://example.com/', fileSize: 10 } }));
});

test('accepts a stored file reference and rejects mismatched owner', () => {
    const stored = { type: 'image', fileData: '', fileSize: 1000000, storagePath: 'chats/chat-1/media/user-1/media123' };
    assert.doesNotThrow(() => validateOutgoingMessage({ ...valid, text: '', attachment: stored }));
    assert.throws(() => validateOutgoingMessage({ ...valid, attachment: { ...stored, storagePath: 'chats/chat-1/media/someone-else/media123' } }));
    assert.throws(() => validateOutgoingMessage({ ...valid, attachment: { ...stored, fileData: 'https://example.com/token' } }));
});

test('message sender label never falls back to private email', () => {
    assert.equal(resolveMessageSenderName({ displayName: '  Alice  ', username: 'alice', email: 'alice@example.com' }), 'Alice');
    assert.equal(resolveMessageSenderName({ displayName: '', username: 'alice', email: 'alice@example.com' }), 'alice');
    assert.equal(resolveMessageSenderName({ displayName: '', email: 'alice@example.com' }), 'Пользователь');
    assert.equal(resolveMessageSenderName({ email: 'alice@example.com' }).includes('@'), false);
});
