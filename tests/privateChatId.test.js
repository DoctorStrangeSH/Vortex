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

import { findLegacyPrivateChat } from '../src/services/findLegacyPrivateChat.js';

test('legacy private chat lookup reuses old two-person chats with arbitrary IDs', () => {
    const legacy = { id: 'old-random-id', data: () => ({ participants: ['alice', 'bob'] }) };
    assert.equal(findLegacyPrivateChat([legacy], 'alice', 'bob'), legacy);
    assert.equal(findLegacyPrivateChat([legacy], 'bob', 'alice'), legacy);
});

test('legacy lookup accepts explicit private type and ignores group or malformed chats', () => {
    const group = { id: 'group', data: () => ({ type: 'group', participants: ['alice', 'bob'] }) };
    const threePeople = { id: 'three', data: () => ({ participants: ['alice', 'bob', 'eve'] }) };
    const wrongPair = { id: 'wrong', data: () => ({ participants: ['alice', 'charlie'] }) };
    const explicitPrivate = { id: 'private-old', data: () => ({ type: 'private', participants: ['alice', 'bob'] }) };
    assert.equal(findLegacyPrivateChat([group, threePeople, wrongPair, explicitPrivate], 'alice', 'bob'), explicitPrivate);
});

test('legacy lookup returns null for invalid users or when no exact pair exists', () => {
    const legacy = { id: 'old', data: { participants: ['alice', 'bob'] } };
    assert.equal(findLegacyPrivateChat([legacy], 'alice', 'alice'), null);
    assert.equal(findLegacyPrivateChat([legacy], '', 'bob'), null);
    assert.equal(findLegacyPrivateChat([], 'alice', 'bob'), null);
});
