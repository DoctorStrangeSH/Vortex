import { deleteObject, ref } from 'firebase/storage';
import { storage } from './firebase.js';
import { AttachmentCleanupQueue } from './attachmentCleanupQueue.js';

export const attachmentCleanupQueue = new AttachmentCleanupQueue({
    removeObject: path => deleteObject(ref(storage, path))
});

export function retryPendingAttachmentCleanup() {
    return attachmentCleanupQueue.process();
}
