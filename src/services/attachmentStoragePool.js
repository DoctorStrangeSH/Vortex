import { getBlob, ref } from 'firebase/storage';
import { storage } from './firebase.js';
import { createAttachmentPool } from './attachmentPool.js';

export const attachmentPool = createAttachmentPool({
    download: path => getBlob(ref(storage, path)),
    createUrl: blob => URL.createObjectURL(blob),
    revokeUrl: url => URL.revokeObjectURL(url),
    maxConcurrent: 3
});
