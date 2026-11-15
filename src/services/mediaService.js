import { deleteObject, ref, uploadBytes } from 'firebase/storage';
import { storage } from './firebase.js';
import { mediaStoragePath, validateMediaFile } from './mediaPolicy.js';
import { messageService } from './messageService.js';
import { assessAttachmentCommit } from './attachmentCommit.js';

// Storage is deliberately opt-in until authenticated staging rules are tested.
export const STORAGE_UPLOADS_ENABLED = import.meta.env.VITE_USE_FIREBASE_STORAGE === 'true';

export async function sendStoredAttachment(chatId, user, file, type, isStillActive = () => true) {
    if (!STORAGE_UPLOADS_ENABLED) throw new Error('Firebase Storage ещё не включён для этого окружения');
    validateMediaFile(file);
    if (!user?.uid) throw new Error('Необходимо войти в аккаунт');

    const messageId = crypto.randomUUID();
    const path = mediaStoragePath(chatId, user.uid, messageId);
    const objectRef = ref(storage, path);
    await uploadBytes(objectRef, file, { contentType: file.type });

    let shouldCleanup = true;
    try {
        if (!isStillActive()) return false;
        try {
            await messageService.sendMessage(chatId, user, '', {
                type, fileData: '', fileName: file.name, fileSize: file.size, storagePath: path
            }, messageId);
            shouldCleanup = false;
            return true;
        } catch (sendError) {
            // A network timeout may happen AFTER the Firestore batch commits.
            // Verify by stable ID before deciding whether the object is orphaned.
            const status = await assessAttachmentCommit(() => messageService.messageExists(chatId, messageId));
            if (status === 'committed') {
                shouldCleanup = false;
                return true;
            }
            // Unknown status: prefer a recoverable orphan over a broken attachment.
            if (status === 'unknown') shouldCleanup = false;
            throw sendError;
        }
    } finally {
        // Never delete an object that a successfully created message references.
        if (shouldCleanup) {
            try { await deleteObject(objectRef); } catch { /* best-effort cleanup */ }
        }
    }
}
