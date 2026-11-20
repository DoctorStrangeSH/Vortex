import { useRef, useState, useEffect } from 'preact/hooks';
import { useSwipe } from '../../hooks/useSwipe';
import { getMessageReadPresentation } from '../../services/messageReadStatus.js';
import { useAttachmentSource } from '../../services/useAttachmentSource.js';
import { shouldDeferStoredMedia } from '../../services/attachmentVisibility.js';

export function MessageBubble({ msg, own, other, avatarColor, isMobile, isPinned, participants, onContextMenu, onDoubleClick, onImageClick, onReactionClick, onPlayAudio, onReply, onMediaReady }) {
    const messageRef = useRef(null);
    const deferMedia = shouldDeferStoredMedia(msg);
    const [attachmentVisible, setAttachmentVisible] = useState(!deferMedia);
    const [decodeFailedSource, setDecodeFailedSource] = useState('');

    useEffect(() => {
        if (!deferMedia) {
            setAttachmentVisible(true);
            return undefined;
        }
        const element = messageRef.current;
        if (!element || typeof IntersectionObserver === 'undefined') {
            setAttachmentVisible(true);
            return undefined;
        }
        const observer = new IntersectionObserver(entries => {
            if (!entries.some(entry => entry.isIntersecting)) return;
            // Keep a viewed attachment available for open image previews.
            setAttachmentVisible(true);
            observer.disconnect();
        }, { rootMargin: '360px 0px', threshold: 0 });
        observer.observe(element);
        return () => observer.disconnect();
    }, [deferMedia, msg.id, msg.storagePath]);

    const { source: attachmentSource, status: attachmentStatus, error: attachmentError, retry: retryAttachment } = useAttachmentSource(msg, !deferMedia || attachmentVisible);
    useSwipe(messageRef, () => onReply?.(msg.id), null);
    const mediaFailed = attachmentSource && decodeFailedSource === attachmentSource;
    const retryMedia = () => { setDecodeFailedSource(''); retryAttachment(); };

    const formatFileSize = (bytes) => {
        if (!bytes) return '';
        if (bytes < 1024) return bytes + ' B';
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
        return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
    };

    const formatMessageTime = (ts) => {
        if (!ts?.toDate) return '';
        const d = ts.toDate();
        return `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`;
    };

    const readStatus = own ? getMessageReadPresentation(msg, participants, msg.senderId) : null;

    return (
        <div ref={messageRef} class="vortex-message-row" style={{ ...s.wrapper, justifyContent: own ? 'flex-end' : 'flex-start' }}>
            {!own && (
                <div style={{ ...s.avatar, background: avatarColor, marginRight: 6 }}>
                    {other.name.charAt(0).toUpperCase()}
                </div>
            )}

            <div class="vortex-message-stack" style={{ display: 'flex', flexDirection: 'column', alignItems: own ? 'flex-end' : 'flex-start', maxWidth: isMobile ? '82%' : '65%' }}>
                {/* Пузырёк сообщения */}
                <div
                    class={own ? "vortex-bubble vortex-bubble-own" : "vortex-bubble vortex-bubble-other"}
                    style={{
                        ...s.bubble,
                        background: own ? 'var(--gradient-brand)' : 'var(--bg-tertiary)',
                        borderBottomRightRadius: own ? '4px' : '16px',
                        borderBottomLeftRadius: own ? '16px' : '4px',
                        color: own ? '#fff' : 'var(--text-primary)',
                        position: 'relative'
                    }}
                    onContextMenu={(e) => onContextMenu?.(e, msg.id, own, msg.text)}
                    onDblClick={(e) => {
                        e.preventDefault();
                        const r = e.currentTarget.getBoundingClientRect();
                        onDoubleClick?.({ messageId: msg.id, x: r.left + r.width / 2, y: r.top - 50 });
                    }}
                >
                    {/* Значок закрепления */}
                    {isPinned && (
                        <div style={s.pinnedBadge} title="Закреплено">📌</div>
                    )}

                    {/* Размер медиа зарезервирован до получения файла, чтобы чат не прыгал. */}
                    {(msg.type === 'image' || msg.type === 'video') && (
                        <div style={s.mediaFrame}>
                            {attachmentSource && !mediaFailed ? (
                                msg.type === 'image' ? (
                                    <img src={attachmentSource} alt={msg.fileName || 'Изображение'} role="button" tabIndex={0} aria-label={`Открыть изображение ${msg.fileName || ''}`.trim()} style={s.image}
                                        onClick={() => onImageClick?.(msg.id)} onLoad={() => onMediaReady?.()}
                                        onKeyDown={event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); onImageClick?.(msg.id); } }}
                                        onError={() => setDecodeFailedSource(attachmentSource)} />
                                ) : (
                                    <video controls src={attachmentSource} style={s.video} preload="metadata" onLoadedMetadata={() => onMediaReady?.()}
                                        onError={() => setDecodeFailedSource(attachmentSource)} />
                                )
                            ) : mediaFailed || attachmentStatus === 'error' ? (
                                <div role="alert" style={s.mediaPlaceholder}>
                                    <span>{mediaFailed ? 'Не удалось открыть файл. Возможно, формат повреждён или не поддерживается.' : attachmentError || 'Не удалось загрузить вложение'}</span>
                                    <button type="button" onClick={(event) => { event.stopPropagation(); retryMedia(); }}>Повторить</button>
                                </div>
                            ) : (
                                <span role="status" style={s.mediaPlaceholder}>
                                    {!attachmentVisible && deferMedia ? 'Вложение загрузится при прокрутке' : attachmentStatus === 'loading' || attachmentStatus === 'idle' ? 'Загрузка вложения…' : 'Вложение недоступно'}
                                </span>
                            )}
                        </div>
                    )}
                    {msg.type !== 'image' && msg.type !== 'video' && msg.storagePath && attachmentStatus === 'loading' && <span role="status" style={{ fontSize: '0.75rem' }}>Загрузка вложения…</span>}
                    {msg.type !== 'image' && msg.type !== 'video' && msg.storagePath && attachmentStatus === 'error' && (
                        <div role="alert" style={{ fontSize: '0.75rem' }}>
                            <span>{attachmentError}</span>{' '}
                            <button type="button" onClick={(event) => { event.stopPropagation(); retryAttachment(); }}>Повторить</button>
                        </div>
                    )}
                    {msg.type === 'voice' && attachmentSource && (
                        <audio controls src={attachmentSource} style={s.audio} />
                    )}
                    {msg.type === 'audio' && attachmentSource && (
                        <div>
                            <div style={{ marginBottom: '4px', fontSize: '0.8rem' }}>🎵 {msg.fileName || 'Аудио'}</div>
                            <audio controls src={attachmentSource} style={s.audio} onClick={() => onPlayAudio?.({ src: attachmentSource, name: msg.fileName })} />
                        </div>
                    )}
                    {msg.type === 'file' && attachmentSource && (
                        <a class="vortex-file-attachment" href={attachmentSource || undefined} download={msg.fileName} style={s.fileLink}>
                            <span style={{ fontSize: '1.5rem' }}>📄</span>
                            <div>
                                <div class="vortex-file-name" style={{ fontWeight: 600, fontSize: '0.85rem' }}>{msg.fileName || 'Файл'}</div>
                                <div style={{ fontSize: '0.7rem', opacity: 0.7 }}>{formatFileSize(msg.fileSize)}</div>
                            </div>
                        </a>
                    )}
                    {msg.isPoll && (
                        <div>📊 Опрос: {msg.question}</div>
                    )}
                    {(!msg.type || msg.type === 'text') && (
                        <div class="vortex-message-text" style={s.text}>
                            {msg.text}
                        </div>
                    )}

                    {/* Время и статус */}
                    <div class="vortex-message-meta" style={s.meta}>
                        {msg.isEdited && <span style={s.editedSmall}>изм.</span>}
                        <span>{formatMessageTime(msg.createdAt)}</span>
                        {own && (
                            <span title={readStatus.title} aria-label={readStatus.title} style={{
                                color: readStatus.state === 'read' ? 'var(--vortex-secondary)' : readStatus.state === 'partially_read' ? 'var(--vortex-primary-light)' : 'inherit',
                                marginLeft: '2px', display: 'inline-flex', alignItems: 'center', gap: '3px'
                            }}>
                                <span>{readStatus.symbol}</span>
                                {readStatus.progress && <span style={{ fontSize: '0.62rem', fontVariantNumeric: 'tabular-nums' }}>{readStatus.progress}</span>}
                            </span>
                        )}
                    </div>
                </div>

                {/* Реакции — снизу как в Telegram */}
                {msg.reactions && Object.keys(msg.reactions).length > 0 && (
                    <div class="vortex-reaction-list" style={{
                        display: 'flex',
                        gap: '3px',
                        marginTop: '3px',
                        flexWrap: 'wrap',
                        justifyContent: own ? 'flex-end' : 'flex-start'
                    }}>
                        {Object.entries(msg.reactions).map(([emoji, users]) => (
                            <button
                                type="button"
                                class="vortex-reaction"
                                key={emoji}
                                aria-label={`Реакция ${emoji}: ${users?.length || 0}`}
                                onClick={() => onReactionClick?.(msg.id, emoji)}
                                style={{
                                    background: 'rgba(137, 104, 255, 0.12)',
                                    border: '1px solid rgba(172, 150, 255, 0.22)',
                                    padding: '2px 8px',
                                    borderRadius: '12px',
                                    fontSize: '0.8rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.15s',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '3px',
                                    backdropFilter: 'blur(4px)'
                                }}
                            >
                                {emoji}
                                <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                                    {users?.length || 0}
                                </span>
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {own && <div style={{ width: 28, marginLeft: 6 }} />}
        </div>
    );
}

const s = {
    wrapper: { display: 'flex', alignItems: 'flex-end', marginBottom: '8px' },
    avatar: { width: '30px', height: '30px', borderRadius: '11px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 600, fontSize: '0.7rem', flexShrink: 0 },
    bubble: { padding: '0.65rem 0.9rem', borderRadius: '17px', animation: 'messageIn 0.2s ease', boxShadow: '0 7px 20px rgba(0,0,0,0.12)' },
    pinnedBadge: { position: 'absolute', top: '-8px', right: '-4px', fontSize: '0.9rem', filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))', zIndex: 1 },
    text: { fontSize: '0.92rem', lineHeight: 1.54, wordBreak: 'break-word' },
    mediaFrame: { width: '260px', maxWidth: '100%', height: '180px', borderRadius: '12px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'rgba(0,0,0,0.12)' },
    mediaPlaceholder: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px', textAlign: 'center', fontSize: '0.75rem' },
    image: { display: 'block', width: '100%', height: '100%', objectFit: 'contain', cursor: 'pointer' },
    video: { display: 'block', width: '100%', height: '100%', objectFit: 'contain' },
    audio: { maxWidth: '240px', height: '30px' },
    fileLink: { color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' },
    edited: { fontSize: '0.7rem', opacity: 0.7, fontStyle: 'italic' },
    editedSmall: { fontSize: '0.6rem', opacity: 0.5, fontStyle: 'italic', marginRight: '4px' },
    meta: { display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '4px', marginTop: '6px', fontSize: '0.66rem', opacity: 0.75 }
};
