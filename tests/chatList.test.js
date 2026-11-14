import test from 'node:test';
import assert from 'node:assert/strict';
import { filterChats } from '../src/services/chatList.js';

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
