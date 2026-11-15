// A group must never be created with a silently incomplete participant list.
export function parseParticipantNames(input) {
    return [...new Set(String(input || '').split(',').map(name => name.trim().toLowerCase()).filter(Boolean))];
}

export async function resolveGroupParticipants(input, selfUid, findUser) {
    const names = parseParticipantNames(input);
    if (!names.length) return { ids: [], missing: [], reason: 'Добавьте участников' };

    const found = await Promise.all(names.map(async name => {
        try { return await findUser(name); }
        catch { return null; }
    }));
    const ids = [];
    const missing = [];
    for (let i = 0; i < names.length; i++) {
        const person = found[i];
        if (!person?.uid || person.uid === selfUid) missing.push(names[i]);
        else if (!ids.includes(person.uid)) ids.push(person.uid);
    }
    return { ids, missing, reason: missing.length ? `Не удалось добавить: ${missing.join(', ')}` : '' };
}
