import { useState, useEffect, useRef, useMemo } from 'preact/hooks';
import { useAttachmentSource } from '../../services/useAttachmentSource.js';
import { getGalleryMedia, getGalleryAttachments, getAdjacentGalleryMedia, getSelectedGalleryMedia } from '../../services/mediaGallerySelection.js';
import { Icon } from '../UI/Icon';

function GalleryMedia({ message, style, preview = false }) {
    const containerRef = useRef(null);
    const [visible, setVisible] = useState(preview);
    const [decodeFailedSource, setDecodeFailedSource] = useState('');

    useEffect(() => {
        if (preview) {
            setVisible(true);
            return;
        }
        const element = containerRef.current;
        if (!element || typeof IntersectionObserver === 'undefined') {
            setVisible(true);
            return;
        }
        const observer = new IntersectionObserver(
            entries => setVisible(entries.some(entry => entry.isIntersecting)),
            { rootMargin: '120px 0px', threshold: 0 }
        );
        observer.observe(element);
        return () => observer.disconnect();
    }, [preview, message?.id]);

    const { source, status, error, retry } = useAttachmentSource(message, visible);
    const mediaFailed = !!source && decodeFailedSource === source;
    const retryMedia = () => { setDecodeFailedSource(''); retry(); };
    if (!message) return null;
    return (
        <div ref={containerRef} onClick={preview ? event => event.stopPropagation() : undefined} style={{ ...style, display: 'grid', placeItems: 'center', overflow: 'hidden' }}>
            {!visible ? null : !source || mediaFailed ? (
                status === 'loading' || status === 'idle' ? <span role="status">Загрузка…</span> : (
                    <div role="alert" style={{ textAlign: 'center', padding: '0.5rem' }}>
                        <span>{mediaFailed ? 'Не удалось открыть файл. Формат повреждён или не поддерживается.' : error || 'Вложение недоступно'}</span>{' '}
                        <button type="button" onClick={event => { event.stopPropagation(); retryMedia(); }}>Повторить</button>
                    </div>
                )
            ) : message.type === 'video'
                ? <video controls={preview} src={source} style={{ ...style, width: '100%', height: '100%' }} preload="metadata" autoPlay={preview} onError={() => setDecodeFailedSource(source)} />
                : <img src={source} alt={message.fileName || ''} style={{ ...style, width: '100%', height: '100%' }} loading={preview ? 'eager' : 'lazy'} onError={() => setDecodeFailedSource(source)} />}
        </div>
    );
}

export function MediaGallery({ messages, onClose }) {
    const media = useMemo(() => getGalleryMedia(messages), [messages]);
    const [category, setCategory] = useState('all');
    const attachments = useMemo(() => getGalleryAttachments(messages, category), [messages, category]);
    const [selectedId, setSelectedId] = useState(null);
    const selectedMedia = getSelectedGalleryMedia(media, selectedId);
    const closeRef = useRef(null);
    const galleryRef = useRef(null);
    const openerRef = useRef(null);
    const callbacksRef = useRef({ onClose, selectedId, media });
    callbacksRef.current = { onClose, selectedId, media };

    useEffect(() => {
        openerRef.current = document.activeElement;
        closeRef.current?.focus();
        const handleKeyDown = event => {
            const current = callbacksRef.current;
            if (event.key === 'Escape') {
                event.preventDefault();
                if (current.selectedId) setSelectedId(null);
                else current.onClose();
                return;
            }
            if (current.selectedId && (event.key === 'ArrowRight' || event.key === 'ArrowLeft')) {
                event.preventDefault();
                const adjacent = getAdjacentGalleryMedia(current.media, current.selectedId, event.key === 'ArrowRight' ? 1 : -1);
                if (adjacent) setSelectedId(adjacent.id);
                return;
            }
            if (event.key !== 'Tab') return;
            const scope = current.selectedId ? document.querySelector('.vortex-gallery-preview') : galleryRef.current;
            const buttons = [...(scope?.querySelectorAll('button:not([disabled]), a[href]') || [])];
            if (!buttons.length) return;
            if (event.shiftKey && document.activeElement === buttons[0]) {
                event.preventDefault(); buttons[buttons.length - 1].focus();
            } else if (!event.shiftKey && document.activeElement === buttons[buttons.length - 1]) {
                event.preventDefault(); buttons[0].focus();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => { document.removeEventListener('keydown', handleKeyDown); openerRef.current?.focus?.(); };
    }, []);

    useEffect(() => {
        if (selectedId && !selectedMedia) setSelectedId(null);
    }, [selectedId, selectedMedia]);

    useEffect(() => {
        if (selectedId) document.querySelector('.vortex-gallery-preview-close')?.focus();
    }, [selectedId]);

    return (
        <div class="vortex-dialog-overlay vortex-gallery-overlay" onClick={onClose}>
            <div ref={galleryRef} class="vortex-dialog-surface vortex-gallery" role="dialog" aria-modal="true" aria-labelledby="vortex-gallery-title" onClick={e => e.stopPropagation()}>
                <div class="vortex-gallery-header">
                    <div><span class="vortex-gallery-eyebrow">МЕДИАТЕКА</span><h3 id="vortex-gallery-title">Медиа и файлы</h3><p>Вложения из загруженной истории · {getGalleryAttachments(messages).length}</p></div>
                    <button ref={closeRef} type="button" class="vortex-icon-button vortex-gallery-close" aria-label="Закрыть галерею" onClick={onClose}><Icon name="close" /></button>
                </div>
                <div class="vortex-gallery-tabs" role="group" aria-label="Тип вложений">
                    {[['all', 'Все'], ['image', 'Фото'], ['video', 'Видео'], ['file', 'Файлы']].map(([key, title]) => (
                        <button key={key} type="button" class={category === key ? 'vortex-gallery-tab active' : 'vortex-gallery-tab'} aria-pressed={category === key} onClick={() => setCategory(key)}>{title}<span>{getGalleryAttachments(messages, key).length}</span></button>
                    ))}
                </div>
                <div class="vortex-gallery-grid" role="region" aria-label="Вложения" tabIndex={0}>
                    {attachments.length === 0 ? (
                        <div class="vortex-gallery-empty"><Icon name="image" size={32} /><strong>Здесь пока пусто</strong><span>В загруженной истории нет вложений этого типа.</span></div>
                    ) : (
                        attachments.map(msg => msg.type === 'file' ? (
                            <GalleryFile key={msg.id} message={msg} />
                        ) : (
                            <button type="button" aria-label={`Открыть ${msg.type === 'video' ? 'видео' : 'изображение'} ${msg.fileName || ''}`} key={msg.id} class="vortex-gallery-item" onClick={() => setSelectedId(msg.id)}>
                                <GalleryMedia message={msg} style={s.thumb} />
                                <span class="vortex-gallery-badge">{msg.type === 'video' ? '▶ Видео' : 'Фото'}</span>
                            </button>
                        ))
                    )}
                </div>
                
                {selectedMedia && (
                    <div class="vortex-gallery-preview" role="dialog" aria-modal="true" aria-label="Просмотр медиа" onClick={() => setSelectedId(null)}>
                        <GalleryMedia message={selectedMedia} style={s.previewMedia} preview />
                        <button type="button" class="vortex-gallery-preview-close" aria-label="Закрыть просмотр" onClick={() => setSelectedId(null)}><Icon name="close" /></button>
                        {media.length > 1 && <div class="vortex-gallery-preview-navigation" onClick={event => event.stopPropagation()}>
                            <button type="button" aria-label="Предыдущее вложение" onClick={() => setSelectedId(getAdjacentGalleryMedia(media, selectedId, -1)?.id)}>←</button>
                            <span>{media.findIndex(item => item.id === selectedId) + 1} / {media.length}</span>
                            <button type="button" aria-label="Следующее вложение" onClick={() => setSelectedId(getAdjacentGalleryMedia(media, selectedId, 1)?.id)}>→</button>
                        </div>}
                    </div>
                )}
            </div>
        </div>
    );
}

function GalleryFile({ message }) {
    const { source, status, error, retry } = useAttachmentSource(message);
    return <div class="vortex-gallery-file">
        <span class="vortex-gallery-file-icon"><Icon name="paperclip" /></span>
        <span class="vortex-gallery-file-name" title={message.fileName || 'Файл'}>{message.fileName || 'Файл'}</span>
        {source ? <a href={source} download={message.fileName || 'attachment'} aria-label={`Скачать ${message.fileName || 'файл'}`}>Скачать</a>
            : status === 'error' ? <button type="button" title={error} onClick={retry}>Повторить</button>
                : <span class="vortex-gallery-file-pending">Загрузка…</span>}
    </div>;
}

const s = {
    overlay: { position:'fixed', inset:0, background:'rgba(0,0,0,0.8)', zIndex:1000, display:'flex', alignItems:'center', justifyContent:'center' },
    modal: { background:'var(--bg-secondary)', border:'1px solid var(--border-default)', boxShadow:'0 28px 90px rgba(0,0,0,.58)', borderRadius:'22px', width:'90vw', maxWidth:'720px', maxHeight:'80vh', display:'flex', flexDirection:'column', overflow:'hidden' },
    header: { display:'flex', justifyContent:'space-between', alignItems:'center', padding:'1rem 1.5rem', borderBottom:'1px solid var(--border-subtle)' },
    closeBtn: { background:'none', border:'none', color:'var(--text-secondary)', cursor:'pointer', fontSize:'1.2rem' },
    grid: { display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'10px', padding:'14px', overflowY:'auto', flex:1 },
    item: { aspectRatio:'1', overflow:'hidden', borderRadius:'14px', border:'1px solid var(--border-default)', background:'var(--bg-tertiary)', cursor:'pointer', padding:0 },
    thumb: { width:'100%', height:'100%', objectFit:'cover' },
    preview: { position:'fixed', inset:0, background:'rgba(0,0,0,0.95)', zIndex:2000, display:'flex', alignItems:'center', justifyContent:'center' },
    previewMedia: { maxWidth:'95vw', maxHeight:'85dvh', objectFit:'contain', borderRadius:'8px' },
    previewClose: { position:'absolute', top:'20px', right:'20px', background:'rgba(255,255,255,0.2)', border:'none', color:'#fff', width:'40px', height:'40px', borderRadius:'50%', cursor:'pointer', fontSize:'1.2rem' }
};
