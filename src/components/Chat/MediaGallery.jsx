import { useState, useEffect } from 'preact/hooks';
import { useAttachmentSource } from '../../services/useAttachmentSource.js';

function GalleryMedia({ message, style, preview = false }) {
    const { source, status, error, retry } = useAttachmentSource(message);
    if (!message) return null;
    if (!source) return (
        <div style={{ ...style, display: 'grid', placeItems: 'center', textAlign: 'center', padding: '0.5rem' }}>
            {status === 'loading' ? <span role="status">Загрузка…</span> : (
                <div role="alert">
                    <span>{error || 'Вложение недоступно'}</span>{' '}
                    <button type="button" onClick={event => { event.stopPropagation(); retry(); }}>Повторить</button>
                </div>
            )}
        </div>
    );
    return message.type === 'video'
        ? <video controls={preview} src={source} style={style} preload="metadata" autoPlay={preview} />
        : <img src={source} alt={message.fileName || ''} style={style} loading={preview ? 'eager' : 'lazy'} />;
}


export function MediaGallery({ messages, onClose }) {
    const [media, setMedia] = useState([]);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        const images = messages.filter(m => m.type === 'image' || m.type === 'video');
        setMedia(images);
    }, [messages]);

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
                        media.map((msg, i) => (
                            <div key={msg.id} style={s.item} onClick={() => setSelected(i)}>
                                <GalleryMedia message={msg} style={s.thumb} />
                            </div>
                        ))
                    )}
                </div>
                
                {selected !== null && (
                    <div style={s.preview} onClick={() => setSelected(null)}>
                        <GalleryMedia message={media[selected]} style={s.previewMedia} preview />
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