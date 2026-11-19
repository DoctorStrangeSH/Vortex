import test from 'node:test';
import assert from 'node:assert/strict';
import { privateChatId } from '../src/services/privateChatId.js';

test('private chat ID is stable regardless of participant order', () => {
    assert.equal(privateChatId('alice', 'bob'), privateChatId('bob', 'alice'));
});

test('length-prefixing prevents delimiter ambiguities', () => {
    assert.notEqual(privateChatId('a_b', 'c'), privateChatId('a', 'b_c'));
});

test('rejects missing and identical users', () => {
    assert.throws(() => privateChatId('a', 'a'));
    assert.throws(() => privateChatId('', 'b'));
});
