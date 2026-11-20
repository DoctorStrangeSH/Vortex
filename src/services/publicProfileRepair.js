import { normalizeUsername } from './usernamePolicy.js';

/**
 * Plan a safe, owner-authenticated migration of a legacy private profile.
 * A username claim is authoritative: never publish a public profile that
 * advertises a name claimed by another UID.
 */
export function planPublicProfileRepair(profile, claim, publicProfileExists) {
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
        // Do not silently rewrite a legacy username: the private profile is
        // immutable with respect to username in the current Rules.
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

    return {
        status: 'ready',
        createPublicProfile: !publicProfileExists,
        publicProfile: {
            uid,
            username,
            displayName: typeof profile.displayName === 'string' ? profile.displayName.slice(0, 80) : '',
            bio: typeof profile.bio === 'string' ? profile.bio.slice(0, 500) : ''
        },
        createUsernameClaim: !!username && !claim?.exists,
        usernameClaim: username ? { uid, username } : null,
        removeLegacyClaimEmail: !!username && !!claim?.exists &&
            claim.data?.uid === uid && Object.hasOwn(claim.data, 'email')
    };
}
