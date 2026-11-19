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
    if (!['add', 'remove', 'leave', 'promote', 'demote'].includes(action)) throw new Error('Неизвестная операция с участниками');
    if (action === 'leave' && memberUid !== actorUid) throw new Error('Покинуть группу можно только от своего имени');
    return { chatId, memberUid, action, actorUid };
}

export function buildGroupMembershipChange(chat, command) {
    if (!chat || chat.type !== 'group' || !Array.isArray(chat.participants) || !Array.isArray(chat.admins)) throw new Error('Группа не найдена или имеет некорректный формат');
    const { actorUid, memberUid, action } = command;
    if (chat.participants.length < 1 || chat.participants.length > MAX_GROUP_MEMBERS ||
        new Set(chat.participants).size !== chat.participants.length ||
        chat.admins.length < 1 || chat.admins.length > 10 ||
        new Set(chat.admins).size !== chat.admins.length ||
        !chat.participants.includes(chat.createdBy) ||
        chat.admins.some(uid => !chat.participants.includes(uid))) {
        throw new Error('Состав группы или список администраторов повреждён');
    }
    if (!chat.participants.includes(actorUid)) throw new Error('Операцию может выполнить только участник группы');
    const isAdmin = chat.admins.includes(actorUid);
    const isMember = chat.participants.includes(memberUid);
    const isMemberAdmin = chat.admins.includes(memberUid);
    if (['promote', 'demote'].includes(action)) {
        if (actorUid !== chat.createdBy) throw new Error('Только владелец может управлять администраторами');
        if (!isMember) throw new Error('Пользователь не состоит в группе');
        if (memberUid === chat.createdBy) throw new Error('Нельзя изменить права владельца');
        if (action === 'promote' && isMemberAdmin) throw new Error('Пользователь уже администратор');
        if (action === 'demote' && !isMemberAdmin) throw new Error('Пользователь не является администратором');
        const admins = action === 'promote' ? [...chat.admins, memberUid] : chat.admins.filter(uid => uid !== memberUid);
        if (admins.length > 10) throw new Error('В группе может быть не более 10 администраторов');
        return { participants: [...chat.participants], admins, event: { uid: memberUid, action, actorUid } };
    }
    if (action !== 'leave' && !isAdmin) throw new Error('Только администратор может управлять участниками');
    if (action === 'leave' && actorUid !== memberUid) throw new Error('Можно покинуть только собственную группу');
    if (action === 'add' && chat.participants.length >= MAX_GROUP_MEMBERS) throw new Error('В группе достигнут лимит участников');
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