import test from 'node:test';
import assert from 'node:assert/strict';
import { attachmentErrorText } from '../src/services/attachmentErrors.js';

test('attachment errors show a distinct access message', () => {
    assert.match(attachmentErrorText('storage/unauthorized'), /Нет доступа/);
    assert.match(attachmentErrorText('storage/unauthenticated'), /Нет доступа/);
});

test('missing files and transient failures have useful messages', () => {
    assert.match(attachmentErrorText('storage/object-not-found'), /не найден/);
    assert.match(attachmentErrorText('storage/retry-limit-exceeded'), /соединение/);
    assert.match(attachmentErrorText(undefined), /Не удалось/);
});


test('quota and network errors explain the next safe action', () => {
    assert.match(attachmentErrorText('storage/quota-exceeded'), /квота хранилища/);
    assert.match(attachmentErrorText('storage/network-request-failed'), /Соединение прервано/);
    assert.match(attachmentErrorText('storage/retry-limit-exceeded'), /Соединение прервано/);
});
