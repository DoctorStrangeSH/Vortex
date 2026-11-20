export function buildChannelMembershipUpdate(channel, uid, joining) {
    if (!channel || channel.type !== 'channel') throw new Error('Канал не найден');
    if (!uid) throw new Error('Необходимо войти в аккаунт');

    const participants = Array.isArray(channel.participants) ? channel.participants : [];
    const subscribers = Array.isArray(channel.subscribers) ? channel.subscribers : [];
    if (participants.length !== subscribers.length ||
        participants.some(id => !subscribers.includes(id)) ||
        subscribers.some(id => !participants.includes(id)) ||
        new Set(participants).size !== participants.length ||
        channel.subscriberCount !== subscribers.length) {
        throw new Error('Данные подписки канала повреждены. Обратитесь к владельцу канала.');
    }

    const isMember = subscribers.includes(uid);
    if (joining) {
        if (isMember) return null;
        return {
            participants: [...participants, uid],
            subscribers: [...subscribers, uid],
            subscriberCount: subscribers.length + 1
        };
    }

    if (!isMember) return null;
    if (uid === channel.ownerId) throw new Error('Владелец канала не может отписаться');
    return {
        participants: participants.filter(id => id !== uid),
        subscribers: subscribers.filter(id => id !== uid),
        subscriberCount: subscribers.length - 1
    };
}
