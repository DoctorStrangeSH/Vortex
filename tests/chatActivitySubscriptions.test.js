import test from 'node:test';
import assert from 'node:assert/strict';
import { watchChatActivity } from '../src/services/chatActivitySubscriptions.js';

test('chat activity subscriptions are released when the chat changes', () => {
    const calls = [];
    let presenceCallback;
    let typingCallback;
    const stop = watchChatActivity({
        chatId: 'chat-a',
        otherId: 'user-b',
        watchPresence: (uid, callback) => {
            calls.push(['watch-presence', uid]);
            presenceCallback = callback;
            return () => calls.push(['stop-presence']);
        },
        watchTyping: (chatId, uid, callback) => {
            calls.push(['watch-typing', chatId, uid]);
            typingCallback = callback;
            return () => calls.push(['stop-typing']);
        },
        onPresenceChange: value => calls.push(['presence', value]),
        onTypingChange: value => calls.push(['typing', value])
    });

    presenceCallback({ isOnline: true });
    typingCallback(true);
    stop();
    stop();
    presenceCallback({ isOnline: false });
    typingCallback(false);

    assert.deepEqual(calls, [
        ['watch-presence', 'user-b'],
        ['watch-typing', 'chat-a', 'user-b'],
        ['presence', { isOnline: true }],
        ['typing', true],
        ['stop-typing'],
        ['stop-presence']
    ]);
});

test('missing chat participants do not create subscriptions', () => {
    let subscriptions = 0;
    const stop = watchChatActivity({
        chatId: null,
        otherId: 'user-b',
        watchPresence: () => { subscriptions++; },
        watchTyping: () => { subscriptions++; },
        onPresenceChange() {},
        onTypingChange() {}
    });
    stop();
    assert.equal(subscriptions, 0);
});

test('a partial setup failure releases an already-created subscription', () => {
    let presenceStopped = 0;
    assert.throws(() => watchChatActivity({
        chatId: 'chat-a',
        otherId: 'user-b',
        watchPresence: () => () => { presenceStopped++; },
        watchTyping: () => { throw new Error('subscription failed'); },
        onPresenceChange() {},
        onTypingChange() {}
    }), /subscription failed/);
    assert.equal(presenceStopped, 1);
});
