// Distinguish a known missing message from a lost network acknowledgement.
// Do not destroy an uploaded object while the write outcome is uncertain.
export async function assessAttachmentCommit(lookup) {
    try { return (await lookup()) ? 'committed' : 'absent'; }
    catch { return 'unknown'; }
}


// Retry only a confirmed-missing Firestore write, preserving the exact message ID.
// An unknown outcome must be surfaced so the caller keeps the uploaded object.
export async function commitAttachmentWithRecovery(send, lookup, isStillActive = () => true) {
    for (let attempt = 0; attempt < 2; attempt += 1) {
        if (!isStillActive()) return 'cancelled';
        try {
            await send();
            return 'committed';
        } catch (error) {
            const status = await assessAttachmentCommit(lookup);
            if (status === 'committed') return 'committed';
            if (status === 'unknown') {
                error.attachmentCommitUnknown = true;
                throw error;
            }
            // A confirmed absent message can be retried once without re-uploading.
            if (attempt === 1 || !isStillActive()) throw error;
        }
    }
    return 'cancelled';
}
