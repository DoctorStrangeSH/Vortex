import test from 'node:test';
import assert from 'node:assert/strict';
import { CHAT_MOBILE_BREAKPOINT, createChatScreenState, reduceChatScreenState } from '../src/services/chatScreenState.js';

test('mobile breakpoint is inclusive at 768 CSS pixels', () => {
    assert.equal(createChatScreenState(320).isMobile, true);
    assert.equal(createChatScreenState(768).isMobile, true);
    assert.equal(createChatScreenState(769).isMobile, false);
});

test('selecting a chat opens the conversation on mobile and keeps desktop split view', () => {
    const chat = { id: 'chat-1', title: 'Друзья' };
    const mobile = reduceChatScreenState(createChatScreenState(375), { type: 'select-chat', chat });
    const desktop = reduceChatScreenState(createChatScreenState(1024), { type: 'select-chat', chat });
    assert.deepEqual(mobile, { activeChat: chat, isMobile: true, showChat: true });
    assert.deepEqual(desktop, { activeChat: chat, isMobile: false, showChat: false });
});

test('back returns to the chat list without discarding the selected conversation', () => {
    const chat = { id: 'chat-1' };
    const opened = reduceChatScreenState(createChatScreenState(390), { type: 'select-chat', chat });
    assert.deepEqual(reduceChatScreenState(opened, { type: 'back' }), {
        activeChat: chat, isMobile: true, showChat: false
    });
});

test('resizing across the breakpoint restores the correct layout without losing selection', () => {
    const chat = { id: 'chat-1' };
    const opened = reduceChatScreenState(createChatScreenState(390), { type: 'select-chat', chat });
    const desktop = reduceChatScreenState(opened, { type: 'resize', viewportWidth: 1024 });
    assert.deepEqual(desktop, { activeChat: chat, isMobile: false, showChat: false });
    const mobileAgain = reduceChatScreenState(desktop, { type: 'resize', viewportWidth: 390 });
    assert.deepEqual(mobileAgain, { activeChat: chat, isMobile: true, showChat: false });
    const reopened = reduceChatScreenState(mobileAgain, { type: 'select-chat', chat });
    assert.equal(reopened.showChat, true);
});

test('chat snapshots update only the currently selected conversation', () => {
    const original = { id: 'chat-1', title: 'Старое название' };
    const opened = reduceChatScreenState(createChatScreenState(1024), { type: 'select-chat', chat: original });
    const updated = { id: 'chat-1', title: 'Новое название' };
    assert.equal(reduceChatScreenState(opened, { type: 'update-chat', chat: { id: 'other' } }), opened);
    assert.deepEqual(reduceChatScreenState(opened, { type: 'update-chat', chat: updated }), {
        activeChat: updated, isMobile: false, showChat: false
    });
});

test('revoking the selected chat closes it but ignores stale revocation events', () => {
    const chat = { id: 'chat-1' };
    const opened = reduceChatScreenState(createChatScreenState(390), { type: 'select-chat', chat });
    assert.equal(reduceChatScreenState(opened, { type: 'revoke-chat', chatId: 'old-chat' }), opened);
    assert.deepEqual(reduceChatScreenState(opened, { type: 'revoke-chat', chatId: chat.id }), {
        activeChat: null, isMobile: true, showChat: false
    });
});

test('unknown actions leave navigation state unchanged', () => {
    const state = createChatScreenState(1024);
    assert.equal(reduceChatScreenState(state, { type: 'not-an-action' }), state);
    assert.equal(CHAT_MOBILE_BREAKPOINT, 768);
});
