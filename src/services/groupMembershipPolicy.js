export function buildGroupLeaveUpdate(group, uid) {
    if (!group || group.type !== 'group') throw new Error('Группа не найдена');
    if (!uid || !Array.isArray(group.participants) || !group.participants.includes(uid)) {
        throw new Error('Вы не состоите в этой группе');
    }
    if (uid === group.createdBy) throw new Error('Владелец не может покинуть группу');
    const admins = Array.isArray(group.admins) ? group.admins : [];
    const participants = group.participants.filter(id => id !== uid);
    const nextAdmins = admins.filter(id => id !== uid);
    if (admins.includes(uid) && (nextAdmins.length === 0 || !nextAdmins.includes(group.createdBy))) {
        throw new Error('Нельзя оставить группу без владельца и администратора');
    }
    return admins.includes(uid)
        ? { participants, admins: nextAdmins }
        : { participants };
}

export function buildGroupAdminUpdate(group, actorUid, targetUid, enabled) {
    if (!group || group.type !== 'group') throw new Error('Группа не найдена');
    if (actorUid !== group.createdBy) throw new Error('Только владелец может управлять администраторами');
    if (!group.participants?.includes(targetUid)) throw new Error('Администратором может быть только участник группы');
    if (targetUid === group.createdBy) throw new Error('Нельзя изменить роль владельца');
    const admins = Array.isArray(group.admins) ? group.admins : [];
    const isAdmin = admins.includes(targetUid);
    if (enabled === isAdmin) return null;
    if (enabled) return { admins: [...admins, targetUid] };
    const nextAdmins = admins.filter(id => id !== targetUid);
    if (nextAdmins.length === 0 || !nextAdmins.includes(group.createdBy)) {
        throw new Error('В группе должен остаться владелец-администратор');
    }
    return { admins: nextAdmins };
}
