import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from './firebase.js';
import { mediaStoragePath, validateMediaFile } from './mediaPolicy.js';
import { messageService } from './messageService.js';

// Storage is deliberately opt-in until authenticated staging rules are tested.
export const STORAGE_UPLOADS_ENABLED = import.meta.env.VITE_USE_FIREBASE_STORAGE === 'true';

export async function sendStoredAttachment(chatId, user, file, type) {
    if (!STORAGE_UPLOADS_ENABLED) throw new Error('Firebase Storage ещё не включён для этого окружения');
    validateMediaFile(file);
    if (!user?.uid) throw new Error('Необходимо войти в аккаунт');

    const path = mediaStoragePath(chatId, user.uid, crypto.randomUUID());
    const objectRef = ref(storage, path);
    await uploadBytes(objectRef, file, { contentType: file.type });

    try {
        const fileData = await getDownloadURL(objectRef);
        await messageService.sendMessage(chatId, user, '', {
            type, fileData, fileName: file.name, fileSize: file.size, storagePath: path
        });
    } catch (error) {
        // A failed message should not leave a chargeable orphan in Storage.
        try { await deleteObject(objectRef); } catch { /* log during production rollout */ }
        throw error;
    }
}
