import { useEffect, useState } from 'preact/hooks';
import { getBlob, ref } from 'firebase/storage';
import { storage } from './firebase.js';

// Object URLs are local to this browser tab and are revoked when a message
// disappears. Storage reads go through the authenticated Firebase SDK.
export function useAttachmentSource(message) {
    const path = message?.storagePath || '';
    const legacySource = path ? '' : message?.fileData || '';
    const [source, setSource] = useState(legacySource);

    useEffect(() => {
        if (!path) {
            setSource(legacySource);
            return;
        }
        let cancelled = false;
        let objectUrl = null;
        setSource('');
        getBlob(ref(storage, path)).then(blob => {
            objectUrl = URL.createObjectURL(blob);
            if (cancelled) URL.revokeObjectURL(objectUrl);
            else setSource(objectUrl);
        }).catch(error => {
            if (!cancelled) {
                console.warn('Вложение недоступно текущему пользователю', error);
                setSource('');
            }
        });
        return () => {
            cancelled = true;
            if (objectUrl) URL.revokeObjectURL(objectUrl);
        };
    }, [path, legacySource]);
    return source;
}
