import { deleteObject, ref, uploadBytes } from 'firebase/storage';
import { storage } from './firebase.js';
import { mediaStoragePath, validateMediaFile } from './mediaPolicy.js';
import { messageService } from './messageService.js';
import { commitAttachmentWithRecovery } from './attachmentCommit.js';

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
        try {
            const outcome = await commitAttachmentWithRecovery(
                () => messageService.sendMessage(chatId, user, '', {
                    type, fileData: '', fileName: file.name, fileSize: file.size, storagePath: path
                }, messageId),
                () => messageService.messageExists(chatId, messageId),
                isStillActive
            );
            shouldCleanup = outcome !== 'committed';
            return outcome === 'committed';
        } catch (sendError) {
            // If the server cannot verify the write, never delete a potentially
            // referenced file. The user can check the chat after reconnecting.
            if (sendError.attachmentCommitUnknown) shouldCleanup = false;
            throw sendError;
        }
    } finally {
        // Never delete an object that a successfully created message references.
        if (shouldCleanup) {
            try { await deleteObject(objectRef); } catch { /* best-effort cleanup */ }
        }
    }
}
