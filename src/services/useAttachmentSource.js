import { useEffect, useState } from 'preact/hooks';
import { attachmentPool } from './attachmentStoragePool.js';
import { attachmentErrorText } from './attachmentErrors.js';

// Authenticated Storage reads share in-flight downloads across the chat/gallery.
// Blob URLs are released when the last visible consumer unmounts.
export function useAttachmentSource(message, enabled = true) {
    const path = message?.storagePath || '';
    const legacySource = path ? '' : message?.fileData || '';
    const [state, setState] = useState({ source: legacySource, status: path ? 'loading' : 'ready', error: '' });
    const [attempt, setAttempt] = useState(0);

    useEffect(() => {
        if (!enabled) {
            setState({ source: '', status: 'idle', error: '' });
            return;
        }
        if (!path) {
            setState({ source: legacySource, status: 'ready', error: '' });
            return;
        }
        let cancelled = false;
        setState({ source: '', status: 'loading', error: '' });
        const handle = attachmentPool.acquire(path);
        handle.promise.then(source => {
            if (!cancelled) setState({ source, status: 'ready', error: '' });
        }).catch(error => {
            if (!cancelled) {
                console.warn('Не удалось загрузить вложение', error);
                setState({ source: '', status: 'error', error: attachmentErrorText(error?.code) });
            }
        });
        return () => {
            cancelled = true;
            handle.release();
        };
    }, [path, legacySource, attempt, enabled]);

    return { ...state, retry: () => setAttempt(value => value + 1) };
}
