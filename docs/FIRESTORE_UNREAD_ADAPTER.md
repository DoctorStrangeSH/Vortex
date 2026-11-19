# Firestore unread-counter adapter

**Status: adapter implemented and locally testable; not connected to a Cloud Function and not deployed.**

`server/firestoreUnreadStore.js` adapts the existing pure `projectUnreadEvent` workflow to a Firestore Admin SDK database instance. The adapter receives `db` and `serverTimestamp` as dependencies so unit tests do not require credentials or a live Firebase project.

## Document layout

- Counter projection: `users/{uid}/unreadChats/{chatId}`
- Idempotency receipt: `unreadProjectionEvents/{eventId}`

A single Firestore transaction reads the event receipt and every affected counter before queuing writes. Counter updates and the receipt are committed together. Repeated event IDs become no-ops. The Admin SDK bypasses Firestore Security Rules; client writes must remain denied by rules.

## Guarantees and limits

- The adapter does not decide who the chat participants are; the trusted event handler must supply a participant snapshot consistent with the message event.
- Event IDs and path identifiers are validated against slash/path traversal.
- Missing counters are treated as zero for first-time projections.
- The existing model intentionally allows negative intermediate counts when events arrive out of order. Do not clamp stored values in this adapter.
- The adapter uses Firestore server timestamps and schema version 1.

## Not included

- No Cloud Functions trigger or Firebase deployment.
- No migration/backfill for existing chats.
- No production credentials, secrets, billing, or live data changes.
- A deployment must add bounded event-receipt retention and verify event ordering, membership changes, transaction contention, and historical reconciliation.
