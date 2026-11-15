// Distinguish a known missing message from a lost network acknowledgement.
// Do not destroy an uploaded object while the write outcome is uncertain.
export async function assessAttachmentCommit(lookup) {
    try { return (await lookup()) ? 'committed' : 'absent'; }
    catch { return 'unknown'; }
}
