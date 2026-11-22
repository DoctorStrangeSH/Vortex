export function watchChatActivity({
    chatId,
    otherId,
    watchPresence,
    watchTyping,
    onPresenceChange,
    onTypingChange
}) {
    if (!chatId || !otherId) return () => {};

    let active = true;
    let stopPresence = () => {};
    let stopTyping = () => {};
    const guard = callback => value => {
        if (active) callback(value);
    };

    try {
        stopPresence = watchPresence(otherId, guard(onPresenceChange)) || (() => {});
        stopTyping = watchTyping(chatId, otherId, guard(onTypingChange)) || (() => {});
    } catch (error) {
        active = false;
        stopTyping();
        stopPresence();
        throw error;
    }

    return () => {
        if (!active) return;
        active = false;
        stopTyping();
        stopPresence();
    };
}
