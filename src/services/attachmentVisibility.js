// Off-screen stored images and videos are the largest avoidable downloads
// during history pagination. Other attachments preserve their existing UI.
export function shouldDeferStoredMedia(message) {
    return !!message?.storagePath && (message.type === 'image' || message.type === 'video');
}
