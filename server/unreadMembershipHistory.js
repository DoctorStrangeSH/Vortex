const MAX_MEMBERSHIP_EVENTS = 10000;

function validateMembershipEvent(event, index) {
    if (!event || typeof event !== 'object' || Array.isArray(event)) throw new Error(`Invalid membership event at index ${index}`);
    if (typeof event.uid !== 'string' || event.uid.length === 0 || event.uid.includes('/')) throw new Error(`Invalid membership user ID at index ${index}`);
    if (event.action !== 'join' && event.action !== 'leave') throw new Error(`Invalid membership action at index ${index}`);
    if (!Number.isSafeInteger(event.effectiveAtMs) || event.effectiveAtMs < 0) throw new Error(`Invalid membership effectiveAtMs at index ${index}`);
    return event;
}

/**
 * Resolve membership at an event timestamp using half-open membership intervals.
 * A join is effective at its timestamp; a leave is effective at its timestamp,
 * so a member is included when joinedAt <= eventTime < leftAt.
 * The input must be a complete trusted history, including initial joins.
 */
export function resolveParticipantsAt(membershipEvents, eventTimeMs) {
    if (!Array.isArray(membershipEvents) || membershipEvents.length > MAX_MEMBERSHIP_EVENTS) {
        throw new Error(`Membership history must be an array of at most ${MAX_MEMBERSHIP_EVENTS} events`);
    }
    if (!Number.isSafeInteger(eventTimeMs) || eventTimeMs < 0) throw new Error('Invalid membership event time');
    const events = membershipEvents.map(validateMembershipEvent).slice().sort((a, b) => a.effectiveAtMs - b.effectiveAtMs);
    const seen = new Set();
    const active = new Set();
    for (const event of events) {
        const key = `${event.uid}:${event.effectiveAtMs}`;
        if (seen.has(key)) throw new Error('Conflicting membership events share a user and timestamp');
        seen.add(key);
        if (event.effectiveAtMs > eventTimeMs) break;
        if (event.action === 'join') {
            if (active.has(event.uid)) throw new Error(`Membership history joins an already active user: ${event.uid}`);
            active.add(event.uid);
        } else {
            if (!active.has(event.uid)) throw new Error(`Membership history leaves an inactive user: ${event.uid}`);
            active.delete(event.uid);
        }
    }
    return [...active].sort();
}