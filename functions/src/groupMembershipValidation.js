const MAX_GROUP_MEMBERS = 100;

export function parseCreateGroupInput(data, actorUid) {
    if (!actorUid || typeof actorUid !== 'string') throw new Error('Требуется авторизация');
    const name = typeof data?.name === 'string' ? data.name.trim() : '';
    if (!name || name.length > 100) throw new Error('Название группы должно содержать от 1 до 100 символов');
    if (!Array.isArray(data?.participantIds) || data.participantIds.length > MAX_GROUP_MEMBERS - 1) throw new Error('Некорректный список участников группы');
    const ids = data.participantIds;
    if (ids.some(uid => typeof uid !== 'string' || !uid || uid.includes('/'))) throw new Error('Некорректный идентификатор участника');
    if (new Set(ids).size !== ids.length || ids.includes(actorUid)) throw new Error('Список участников содержит повторы или создателя');
    return { name, participants: [actorUid, ...ids] };
}

export function parseGroupMembershipCommand(data, actorUid) {
    if (!actorUid || typeof actorUid !== 'string') throw new Error('Требуется авторизация');
    const { chatId, memberUid, action } = data || {};
    if (typeof chatId !== 'string' || !chatId || chatId.includes('/')) throw new Error('Некорректная группа');
    if (typeof memberUid !== 'string' || !memberUid || memberUid.includes('/')) throw new Error('Некорректный участник');
    if (!['add', 'remove', 'leave'].includes(action)) throw new Error('Неизвестная операция с участниками');
    if (action === 'leave' && memberUid !== actorUid) throw new Error('Покинуть группу можно только от своего имени');
    return { chatId, memberUid, action, actorUid };
}

export function buildGroupMembershipChange(chat, command) {
    if (!chat || chat.type !== 'group' || !Array.isArray(chat.participants) || !Array.isArray(chat.admins)) throw new Error('Группа не найдена или имеет некорректный формат');
    const { actorUid, memberUid, action } = command;
    const isAdmin = chat.admins.includes(actorUid);
    const isMember = chat.participants.includes(memberUid);
    if (action !== 'leave' && !isAdmin) throw new Error('Только администратор может управлять участниками');
    if (action === 'leave' && actorUid !== memberUid) throw new Error('Можно покинуть только собственную группу');
    if (action === 'add' && isMember) throw new Error('Пользователь уже состоит в группе');
    if (action !== 'add' && !isMember) throw new Error('Пользователь не состоит в группе');
    if (memberUid === chat.createdBy && action !== 'add') throw new Error('Создатель группы не может покинуть её или быть удалён');
    const participants = action === 'add'
        ? [...chat.participants, memberUid]
        : chat.participants.filter(uid => uid !== memberUid);
    if (participants.length < 1 || participants.length > MAX_GROUP_MEMBERS) throw new Error('Недопустимое количество участников');
    const admins = action === 'add' ? [...chat.admins] : chat.admins.filter(uid => uid !== memberUid);
    if (!admins.length) throw new Error('В группе должен остаться хотя бы один администратор');
    return { participants, admins, event: { uid: memberUid, action: action === 'add' ? 'join' : 'leave', actorUid } };
}