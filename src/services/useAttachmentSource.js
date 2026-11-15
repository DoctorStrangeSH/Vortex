import { useEffect, useState } from 'preact/hooks';
import { getBlob, ref } from 'firebase/storage';
import { storage } from './firebase.js';
import { attachmentErrorText } from './attachmentErrors.js';

// Storage downloads use Firebase authentication. Local blob URLs are scoped
// to the mounted component and are revoked when that component changes.
export function useAttachmentSource(message) {
    const path = message?.storagePath || '';
    const legacySource = path ? '' : message?.fileData || '';
    const [state, setState] = useState({
        source: legacySource,
        status: path ? 'loading' : 'ready',
        error: ''
    });
    const [attempt, setAttempt] = useState(0);

    useEffect(() => {
        if (!path) {
            setState({ source: legacySource, status: 'ready', error: '' });
            return;
        }
        let cancelled = false;
        let objectUrl = null;
        setState({ source: '', status: 'loading', error: '' });
        getBlob(ref(storage, path)).then(blob => {
            if (cancelled) return;
            objectUrl = URL.createObjectURL(blob);
            setState({ source: objectUrl, status: 'ready', error: '' });
        }).catch(error => {
            if (!cancelled) {
                console.warn('Не удалось загрузить вложение', error);
                setState({ source: '', status: 'error', error: attachmentErrorText(error?.code) });
            }
        });
        return () => {
            cancelled = true;
            if (objectUrl) URL.revokeObjectURL(objectUrl);
        };
    }, [path, legacySource, attempt]);

    return { ...state, retry: () => setAttempt(value => value + 1) };
}
