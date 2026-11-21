import { useEffect, useMemo, useRef, useState } from 'preact/hooks';
import { useAttachmentSource } from '../../services/useAttachmentSource.js';
import { getAdjacentGalleryMedia } from '../../services/mediaGallerySelection.js';
import { getImageSwipeDirection } from '../../services/imageViewerGestures.js';
import { trapDialogTab } from '../../utils/dialogFocus.js';
import { Icon } from '../UI/Icon';

const ZOOM_MIN = 1;
const ZOOM_MAX = 3;
const ZOOM_STEP = 0.5;

function ImageViewerContent({ message, zoom }) {
    const { source, status, error, retry } = useAttachmentSource(message);
    const [failedSource, setFailedSource] = useState('');

    if (!message) return <div role="status" class="vortex-image-viewer-placeholder">Изображение больше не доступно в загруженной истории.</div>;
    if (status === 'error' || (source && source === failedSource)) {
        return <div role="alert" class="vortex-image-viewer-placeholder"><p>{error || 'Не удалось открыть изображение.'}</p><button type="button" onClick={() => { setFailedSource(''); retry(); }}>Повторить</button></div>;
    }
    if (!source) return <div role="status" class="vortex-image-viewer-placeholder">Загружаем изображение…</div>;

    return <img key={message.id} src={source} alt={message.fileName || 'Изображение из переписки'}
        onError={() => setFailedSource(source)} draggable={false}
        style={{ width: `${zoom * 100}%`, maxWidth: zoom === 1 ? '100%' : 'none', maxHeight: zoom === 1 ? '100%' : 'none', objectFit: 'contain' }} />;
}

export function ImageViewer({ messages, selectedId, onClose }) {
    const images = useMemo(() => messages.filter(message => message.type === 'image'), [messages]);
    const [currentId, setCurrentId] = useState(selectedId);
    const [zoom, setZoom] = useState(1);
    const closeRef = useRef(null);
    const dialogRef = useRef(null);
    const touchStartRef = useRef(null);
    const stateRef = useRef({ images, currentId, onClose });
    stateRef.current = { images, currentId, onClose };
    const current = images.find(image => image.id === currentId);
    const position = images.findIndex(image => image.id === currentId) + 1;

    const navigate = direction => {
        const adjacent = getAdjacentGalleryMedia(stateRef.current.images, stateRef.current.currentId, direction);
        if (adjacent) { setCurrentId(adjacent.id); setZoom(1); }
    };

    const handleTouchStart = event => {
        touchStartRef.current = event.touches.length === 1
            ? { x: event.touches[0].clientX, y: event.touches[0].clientY } : null;
    };
    const handleTouchEnd = event => {
        const start = touchStartRef.current;
        touchStartRef.current = null;
        if (!start || event.changedTouches.length !== 1) return;
        const direction = getImageSwipeDirection(start, { x: event.changedTouches[0].clientX, y: event.changedTouches[0].clientY }, zoom);
        if (direction) navigate(direction);
    };

    useEffect(() => {
        const previousFocus = document.activeElement;
        closeRef.current?.focus();
        const handleKeyDown = event => {
            if (event.key === 'Escape') { event.preventDefault(); stateRef.current.onClose(); return; }
            if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
                event.preventDefault(); navigate(event.key === 'ArrowRight' ? 1 : -1);
                return;
            }
            trapDialogTab(event, dialogRef.current);
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => { document.removeEventListener('keydown', handleKeyDown); previousFocus?.focus?.(); };
    }, []);

    return (
        <div ref={dialogRef} class="vortex-image-viewer" role="dialog" aria-modal="true" aria-labelledby="vortex-image-viewer-title" tabIndex={-1}>
            <header class="vortex-image-viewer-toolbar">
                <div class="vortex-image-viewer-title"><span aria-live="polite">МЕДИА · {position || '—'} / {images.length}</span><strong id="vortex-image-viewer-title">{current?.fileName || 'Изображение'}</strong></div>
                <div class="vortex-image-viewer-tools">
                    <button type="button" aria-label="Уменьшить изображение" disabled={zoom <= ZOOM_MIN} onClick={() => setZoom(value => Math.max(ZOOM_MIN, value - ZOOM_STEP))}>−</button>
                    <button type="button" aria-label="Вернуть исходный масштаб" onClick={() => setZoom(1)}>{Math.round(zoom * 100)}%</button>
                    <button type="button" aria-label="Увеличить изображение" disabled={zoom >= ZOOM_MAX} onClick={() => setZoom(value => Math.min(ZOOM_MAX, value + ZOOM_STEP))}>+</button>
                    <button ref={closeRef} type="button" aria-label="Закрыть изображение" onClick={onClose}><Icon name="close" /></button>
                </div>
            </header>
            <div class="vortex-image-viewer-stage" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onTouchCancel={() => { touchStartRef.current = null; }}
                onDblClick={() => setZoom(value => value === 1 ? 2 : 1)}>
                <ImageViewerContent key={currentId} message={current} zoom={zoom} />
            </div>
            {images.length > 1 && <nav class="vortex-image-viewer-navigation" aria-label="Навигация по изображениям">
                <button type="button" aria-label="Предыдущее изображение" onClick={() => navigate(-1)}>←</button>
                <span>{position} из {images.length}</span>
                <button type="button" aria-label="Следующее изображение" onClick={() => navigate(1)}>→</button>
            </nav>}
        </div>
    );
}
