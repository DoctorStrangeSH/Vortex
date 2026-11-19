// Length-prefixing avoids collisions even when a user ID contains separators.
export function privateChatId(firstUserId, secondUserId) {
    if (typeof firstUserId !== 'string' || !firstUserId ||
        typeof secondUserId !== 'string' || !secondUserId) {
        throw new Error('Нужно выбрать двух пользователей');
    }
    if (firstUserId === secondUserId) {
        throw new Error('Нельзя создать личный чат с самим собой');
    }
    return 'dm_' + [firstUserId, secondUserId].sort()
        .map(id => `${encodeURIComponent(id).length}_${encodeURIComponent(id)}`).join('_');
}
