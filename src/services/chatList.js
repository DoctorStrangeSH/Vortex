export function filterChats(chats, search, getName) {
    const normalized = search.trim().toLocaleLowerCase('ru-RU');
    if (!normalized) return chats;
    return chats.filter(chat =>
        String(getName(chat) || '').toLocaleLowerCase('ru-RU').includes(normalized) ||
        String(chat.lastMessage || '').toLocaleLowerCase('ru-RU').includes(normalized)
    );
}
