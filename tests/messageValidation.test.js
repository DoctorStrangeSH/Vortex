import test from 'node:test';
import assert from 'node:assert/strict';
import { validateOutgoingMessage, MAX_MESSAGE_LENGTH, MAX_LEGACY_ATTACHMENT_BYTES } from '../src/services/messageValidation.js';

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
