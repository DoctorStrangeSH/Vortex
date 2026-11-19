# Unread membership history model

`resolveParticipantsAt` resolves the group membership set at a supplied event timestamp.

## Event schema

Each trusted history record contains:
- `uid`: user ID;
- `action`: `join` or `leave`;
- `effectiveAtMs`: non-negative Unix epoch milliseconds.

Intervals are half-open: a join is effective at its timestamp, while a leave excludes the user starting at its timestamp (`joinedAt <= t < leftAt`). The resolver sorts records, rejects impossible transitions and returns stable sorted IDs.

## Required production write path

This is a pure resolver only. It does not write Firestore, infer missing history, or subscribe to chat updates. The history must include initial membership and every subsequent join/leave.

Current chat rules still permit some client-side membership changes. Before relying on this history, membership changes must be moved to a trusted server operation that atomically updates the chat membership and appends the corresponding history event (or uses an equivalent transactional outbox). A delayed message trigger can then resolve recipients against the message event timestamp.

Do not backfill historical membership from the current participants array: that would fabricate past membership. No production Firebase configuration or data is changed.