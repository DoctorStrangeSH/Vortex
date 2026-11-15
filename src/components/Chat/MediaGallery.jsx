import { useState, useEffect, useRef, useMemo } from 'preact/hooks';
import { useAttachmentSource } from '../../services/useAttachmentSource.js';
import { getGalleryMedia, getSelectedGalleryMedia } from '../../services/mediaGallerySelection.js';

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
    const [selectedId, setSelectedId] = useState(null);
    const selectedMedia = getSelectedGalleryMedia(media, selectedId);

    useEffect(() => {
        if (selectedId && !selectedMedia) setSelectedId(null);
    }, [selectedId, selectedMedia]);

    return (
        <div style={s.overlay} onClick={onClose}>
            <div style={s.modal} onClick={e => e.stopPropagation()}>
                <div style={s.header}>
                    <h3>🖼️ Галерея ({media.length})</h3>
                    <button onClick={onClose} style={s.closeBtn}>✕</button>
                </div>
                <div style={s.grid}>
                    {media.length === 0 ? (
                        <p style={{ color: 'var(--text-tertiary)', textAlign: 'center', padding: '2rem' }}>Нет медиа</p>
                    ) : (
                        media.map(msg => (
                            <div key={msg.id} style={s.item} onClick={() => setSelectedId(msg.id)}>
                                <GalleryMedia message={msg} style={s.thumb} />
                            </div>
                        ))
                    )}
                </div>
                
                {selectedMedia && (
                    <div style={s.preview} onClick={() => setSelectedId(null)}>
                        <GalleryMedia message={selectedMedia} style={s.previewMedia} preview />
                        <button style={s.previewClose}>✕</button>
                    </div>
                )}
            </div>
        </div>
    );
}

const s = {
    overlay: { position:'fixed', inset:0, background:'rgba(0,0,0,0.8)', zIndex:1000, display:'flex', alignItems:'center', justifyContent:'center' },
    modal: { background:'var(--bg-secondary)', borderRadius:'16px', width:'90vw', maxWidth:'600px', maxHeight:'80vh', display:'flex', flexDirection:'column', overflow:'hidden' },
    header: { display:'flex', justifyContent:'space-between', alignItems:'center', padding:'1rem 1.5rem', borderBottom:'1px solid var(--border-subtle)' },
    closeBtn: { background:'none', border:'none', color:'var(--text-secondary)', cursor:'pointer', fontSize:'1.2rem' },
    grid: { display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'4px', padding:'4px', overflowY:'auto', flex:1 },
    item: { aspectRatio:'1', overflow:'hidden', borderRadius:'8px', cursor:'pointer' },
    thumb: { width:'100%', height:'100%', objectFit:'cover' },
    preview: { position:'fixed', inset:0, background:'rgba(0,0,0,0.95)', zIndex:2000, display:'flex', alignItems:'center', justifyContent:'center' },
    previewMedia: { maxWidth:'95vw', maxHeight:'95vh', objectFit:'contain', borderRadius:'8px' },
    previewClose: { position:'absolute', top:'20px', right:'20px', background:'rgba(255,255,255,0.2)', border:'none', color:'#fff', width:'40px', height:'40px', borderRadius:'50%', cursor:'pointer', fontSize:'1.2rem' }
};