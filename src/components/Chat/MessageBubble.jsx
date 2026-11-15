import { useRef, useEffect } from 'preact/hooks';
import { useSwipe } from '../../hooks/useSwipe';
import { getMessageReadStatus } from '../../services/messageReadStatus.js';
import { useAttachmentSource } from '../../services/useAttachmentSource.js';

export function MessageBubble({ msg, own, other, avatarColor, isMobile, isPinned, participants, onContextMenu, onDoubleClick, onImageClick, onReactionClick, onPlayAudio, onReply, onMediaReady }) {
    const messageRef = useRef(null);
    const { source: attachmentSource, status: attachmentStatus, error: attachmentError, retry: retryAttachment } = useAttachmentSource(msg);
    const { attach, detach } = useSwipe(messageRef, 
        () => onReply?.(msg.id), // Свайп влево — ответить
        null // Свайп вправо
    );

    useEffect(() => {
        attach();
        return detach;
    }, []);

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

    const readStatus = own ? getMessageReadStatus(msg, participants, msg.senderId) : null;
    const readTitle = !readStatus ? '' : readStatus.state === 'read' ? 'Прочитано всеми участниками' :
        readStatus.state === 'partially_read' ? `Прочитали ${readStatus.readCount} из ${readStatus.recipientCount}` : 'Отправлено · прочтение не подтверждено';

    return (
        <div ref={messageRef} style={{ ...s.wrapper, justifyContent: own ? 'flex-end' : 'flex-start' }}>
            {!own && (
                <div style={{ ...s.avatar, background: avatarColor, marginRight: 6 }}>
                    {other.name.charAt(0).toUpperCase()}
                </div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: own ? 'flex-end' : 'flex-start', maxWidth: isMobile ? '82%' : '65%' }}>
                {/* Пузырёк сообщения */}
                <div
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
                            {attachmentSource ? (
                                msg.type === 'image' ? (
                                    <img src={attachmentSource} alt={msg.fileName || 'Изображение'} style={s.image}
                                        onClick={() => onImageClick?.(attachmentSource)} onLoad={() => onMediaReady?.()} />
                                ) : (
                                    <video controls src={attachmentSource} style={s.video} preload="metadata" onLoadedMetadata={() => onMediaReady?.()} />
                                )
                            ) : attachmentStatus === 'error' ? (
                                <div role="alert" style={s.mediaPlaceholder}>
                                    <span>{attachmentError || 'Не удалось загрузить вложение'}</span>
                                    <button type="button" onClick={(event) => { event.stopPropagation(); retryAttachment(); }}>Повторить</button>
                                </div>
                            ) : (
                                <span role="status" style={s.mediaPlaceholder}>
                                    {attachmentStatus === 'loading' ? 'Загрузка вложения…' : 'Вложение недоступно'}
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
                        <a href={attachmentSource || undefined} download={msg.fileName} style={s.fileLink}>
                            <span style={{ fontSize: '1.5rem' }}>📄</span>
                            <div>
                                <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>{msg.fileName || 'Файл'}</div>
                                <div style={{ fontSize: '0.7rem', opacity: 0.7 }}>{formatFileSize(msg.fileSize)}</div>
                            </div>
                        </a>
                    )}
                    {msg.isPoll && (
                        <div>📊 Опрос: {msg.question}</div>
                    )}
                    {(!msg.type || msg.type === 'text') && (
                        <div style={s.text}>
                            {msg.isEdited && <span style={s.edited}>(изм.) </span>}
                            {msg.selfDestruct && <span style={s.destruct}>⏱️ {msg.selfDestruct}</span>}
                            {msg.text}
                        </div>
                    )}

                    {/* Время и статус */}
                    <div style={s.meta}>
                        {msg.isEdited && <span style={s.editedSmall}>изм.</span>}
                        <span>{formatMessageTime(msg.createdAt)}</span>
                        {own && (
                            <span title={readTitle} aria-label={readTitle} style={{
                                color: readStatus.state === 'read' ? 'var(--vortex-secondary)' : 'inherit',
                                marginLeft: '2px'
                            }}>
                                {readStatus.state === 'sent' ? '✓' : '✓✓'}
                            </span>
                        )}
                    </div>
                </div>

                {/* Реакции — снизу как в Telegram */}
                {msg.reactions && Object.keys(msg.reactions).length > 0 && (
                    <div style={{
                        display: 'flex',
                        gap: '3px',
                        marginTop: '3px',
                        flexWrap: 'wrap',
                        justifyContent: own ? 'flex-end' : 'flex-start'
                    }}>
                        {Object.entries(msg.reactions).map(([emoji, users]) => (
                            <span
                                key={emoji}
                                onClick={() => onReactionClick?.(msg.id, emoji)}
                                style={{
                                    background: 'rgba(124, 58, 237, 0.12)',
                                    border: '1px solid rgba(124, 58, 237, 0.2)',
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
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {own && <div style={{ width: 28, marginLeft: 6 }} />}
        </div>
    );
}

const s = {
    wrapper: { display: 'flex', alignItems: 'flex-end', marginBottom: '2px' },
    avatar: { width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 600, fontSize: '0.7rem', flexShrink: 0 },
    bubble: { padding: '0.5rem 0.75rem', borderRadius: '14px', animation: 'messageIn 0.2s ease', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' },
    pinnedBadge: { position: 'absolute', top: '-8px', right: '-4px', fontSize: '0.9rem', filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))', zIndex: 1 },
    text: { fontSize: '0.9rem', lineHeight: 1.45, wordBreak: 'break-word' },
    mediaFrame: { width: '260px', maxWidth: '100%', height: '180px', borderRadius: '10px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'rgba(0,0,0,0.12)' },
    mediaPlaceholder: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px', textAlign: 'center', fontSize: '0.75rem' },
    image: { display: 'block', width: '100%', height: '100%', objectFit: 'contain', cursor: 'pointer' },
    video: { display: 'block', width: '100%', height: '100%', objectFit: 'contain' },
    audio: { maxWidth: '240px', height: '30px' },
    fileLink: { color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' },
    edited: { fontSize: '0.7rem', opacity: 0.7, fontStyle: 'italic' },
    editedSmall: { fontSize: '0.6rem', opacity: 0.5, fontStyle: 'italic', marginRight: '4px' },
    destruct: { fontSize: '0.7rem', opacity: 0.7, marginRight: '4px' },
    meta: { display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '2px', marginTop: '3px', fontSize: '0.65rem', opacity: 0.7 }
};
