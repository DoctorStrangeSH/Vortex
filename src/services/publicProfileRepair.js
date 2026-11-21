import { normalizeUsername } from './usernamePolicy.js';

const isOptionalTimestamp = value => value && typeof value.toDate === 'function';

function safePublicProfileFields(existing = {}) {
    const safe = {};
    if (typeof existing.bio === 'string' && existing.bio.length <= 500) safe.bio = existing.bio;
    if (typeof existing.isOnline === 'boolean') safe.isOnline = existing.isOnline;
    if (isOptionalTimestamp(existing.lastSeen)) safe.lastSeen = existing.lastSeen;
    if (existing.emojiStatus === null || (typeof existing.emojiStatus === 'string' && existing.emojiStatus.length <= 16)) {
        if (Object.hasOwn(existing, 'emojiStatus')) safe.emojiStatus = existing.emojiStatus;
    }
    if (existing.customStatus === null || (typeof existing.customStatus === 'string' && existing.customStatus.length <= 100)) {
        if (Object.hasOwn(existing, 'customStatus')) safe.customStatus = existing.customStatus;
    }
    if (existing.statusUpdatedAt === null || isOptionalTimestamp(existing.statusUpdatedAt)) {
        if (Object.hasOwn(existing, 'statusUpdatedAt')) safe.statusUpdatedAt = existing.statusUpdatedAt;
    }
    return safe;
}

function sameFlatDocument(left, right) {
    const leftKeys = Object.keys(left);
    const rightKeys = Object.keys(right);
    return leftKeys.length === rightKeys.length &&
        leftKeys.every(key => Object.hasOwn(right, key) && left[key] === right[key]);
}

/**
 * Plan an owner-authenticated migration of a legacy private profile and its
 * searchable projection. Username claims remain authoritative.
 */
export function planPublicProfileRepair(profile, claim, existingPublicProfile) {
    const uid = profile?.uid;
    if (typeof uid !== 'string' || !uid) throw new Error('Profile repair requires an authenticated UID');

    const storedUsername = profile.username ?? '';
    let username = '';
    if (storedUsername !== '') {
        try {
            username = normalizeUsername(storedUsername);
        } catch {
            return { status: 'skipped', reason: 'invalid_legacy_username' };
        }
        if (username !== storedUsername) {
            return { status: 'skipped', reason: 'non_canonical_legacy_username' };
        }
    }

    if (username && claim?.exists && claim.data?.uid !== uid) {
        return { status: 'skipped', reason: 'username_claim_conflict' };
    }
    if (username && claim?.exists && claim.data?.username !== username) {
        return { status: 'skipped', reason: 'username_claim_mismatch' };
    }

    const hasPublicProfile = !!existingPublicProfile;
    if (hasPublicProfile && existingPublicProfile.uid !== uid) {
        return { status: 'skipped', reason: 'public_profile_uid_mismatch' };
    }
    if (hasPublicProfile && existingPublicProfile.username !== username) {
        return { status: 'skipped', reason: 'public_profile_username_mismatch' };
    }

    const publicProfile = {
        uid,
        username,
        displayName: typeof profile.displayName === 'string' ? profile.displayName.slice(0, 80) : '',
        ...(hasPublicProfile ? safePublicProfileFields(existingPublicProfile) : {})
    };

    return {
        status: 'ready',
        writePublicProfile: !hasPublicProfile || !sameFlatDocument(existingPublicProfile, publicProfile),
        publicProfile,
        createUsernameClaim: !!username && !claim?.exists,
        usernameClaim: username ? { uid, username } : null,
        removeLegacyClaimEmail: !!username && !!claim?.exists &&
            claim.data?.uid === uid && Object.hasOwn(claim.data, 'email')
    };
}
