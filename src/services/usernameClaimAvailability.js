export function isUsernameClaimAvailable(claim, ownerUid = null, username = null) {
    if (!claim?.exists) return true;
    return typeof ownerUid === 'string' && ownerUid.length > 0 &&
        claim.data?.uid === ownerUid && claim.data?.username === username;
}
