# Trusted Firestore message-event mapping

This module maps Firestore message before/after snapshots into the pure unread projector input.

## Trust boundary

- The participants list is read only from a chat snapshot supplied by trusted server code (normally the Admin SDK).
- Any participants field on a message document is ignored.
- Missing chat snapshots, malformed membership lists, duplicate IDs, malformed message data, and invalid event IDs are rejected.
- The mapper does not fetch Firestore itself and is not a Cloud Function trigger.

## Important membership race

Reading the current chat document when a delayed message trigger runs does not necessarily reproduce the membership list at the exact time the message was created. A user may join or leave between the message write and trigger execution. This mapper establishes a trust boundary, but does not solve historical membership semantics.

Before production activation, choose and implement one explicit policy:
1. Snapshot recipient IDs atomically as part of a trusted message-send operation; or
2. Maintain membership history/effective timestamps and resolve participants at the message event time.

Do not claim exact historical unread counts until this race is addressed. No production data or Firebase configuration is changed by this module.