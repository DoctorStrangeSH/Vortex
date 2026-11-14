import test from 'node:test';
import assert from 'node:assert/strict';
import { filterChats, orderPinnedChats } from '../src/services/chatList.js';

const chats = [
    { id: 'one', name: 'Семья', lastMessage: 'Увидимся завтра' },
    { id: 'two', name: 'Работа', lastMessage: 'Готов отчёт' },
    { id: 'three', name: 'Друзья', lastMessage: 'Пойдём в кино' }
];

test('finds chats by title without changing their order', () => {
    assert.deepEqual(filterChats(chats, '  РАБО  ', chat => chat.name).map(chat => chat.id), ['two']);
    assert.deepEqual(filterChats(chats, '', chat => chat.name), chats);
});

test('finds chats by message preview and handles missing previews', () => {
    assert.deepEqual(filterChats(chats, 'отчЁТ', chat => chat.name).map(chat => chat.id), ['two']);
    assert.deepEqual(filterChats([{ id: 'empty' }], 'что-то', () => undefined), []);
});

test('pinned chats stay above recent chats while preserving relative order', () => {
    const ordered = orderPinnedChats(chats, ['three', 'one']);
    assert.deepEqual(ordered.map(chat => chat.id), ['one', 'three', 'two']);
    assert.deepEqual(chats.map(chat => chat.id), ['one', 'two', 'three']);
    assert.deepEqual(orderPinnedChats(chats, []), chats);
});
