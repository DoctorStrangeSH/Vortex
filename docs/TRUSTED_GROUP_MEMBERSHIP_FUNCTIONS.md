# Trusted group membership functions

This additive backend scaffold introduces two Firebase callable functions in `europe-west1`: `createGroupChat` and `updateGroupMembership`.

## Guarantees
- Authentication is taken from the callable context, never from client-supplied actor IDs.
- Group creation writes the initial participant list and one membership-history join event per participant in a single batch.
- Add/remove operations require an administrator; self-leave is allowed only for the authenticated user.
- The chat participant/admin update and the membership-history event are committed in one Firestore transaction.
- The creator cannot be removed or leave; the group cannot be left without an administrator.

## Rollout requirements

This PR is additive. It does not yet change Firestore rules or switch the web client to callable functions. Do not deploy or rely on membership history until the client migration and restrictive rules land together. Existing groups have no trustworthy historical baseline; do not fabricate pre-migration history. At rollout, establish a baseline event for each existing group's current participants and treat it as the start of reliable history.

Deploying Cloud Functions may require the Firebase project to use the Blaze billing plan. No deployment, billing change, production data migration, or rules change is performed by this PR.