import { useState, useEffect } from 'preact/hooks';

export function PinnedMessage({ messages, onUnpin, onScrollTo, currentUserId }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex >= (messages?.length || 0)) {
            setCurrentIndex(0);
        }
    }, [messages?.length]);

    if (!messages || messages.length === 0) return null;

    const current = messages[currentIndex];
    if (!current) return null;

    const handleClick = () => {
        // Показываем следующее по кругу
        if (messages.length > 1) {
            setCurrentIndex(prev => prev < messages.length - 1 ? prev + 1 : 0);
        }
        onScrollTo(current.id);
    };

    return (
        <div style={s.container} onClick={handleClick}>
            <div style={s.content}>
                <div style={s.info}>
                    <div style={s.topRow}>
                        <span style={s.icon}>📌</span>
                        <span style={s.counter}>
                            {currentIndex + 1}/{messages.length}
                        </span>
                    </div>
                    <div style={s.messageText}>
                        {current.senderName && (
                            <span style={s.sender}>{current.senderName}: </span>
                        )}
                        <span style={s.text}>{current.text}</span>
                    </div>
                </div>

                {/* Кнопка "Все" */}
                {messages.length > 1 && (
                    <button 
                        onClick={(e) => { e.stopPropagation(); onUnpin(null); }} 
                        style={s.showAll}
                        title="Показать все закреплённые"
                    >
                        Все
                    </button>
                )}

                {/* Открепить текущее */}
                <button 
                    onClick={(e) => { e.stopPropagation(); onUnpin(current.id); }} 
                    style={s.close}
                    title="Открепить"
                >✕</button>
            </div>

            {/* Точки-индикаторы */}
            {messages.length > 1 && (
                <div style={s.dots}>
                    {messages.map((_, i) => (
                        <div 
                            key={i} 
                            style={{
                                ...s.dot,
                                background: i === currentIndex ? 'var(--vortex-primary)' : 'rgba(255,255,255,0.2)'
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

const s = {
    container: {
        background: 'rgba(124, 58, 237, 0.08)',
        borderBottom: '1px solid var(--border-subtle)',
        cursor: 'pointer',
        transition: 'background 0.15s',
        userSelect: 'none'
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        padding: '0.5rem 0.75rem'
    },
    info: {
        flex: 1,
        minWidth: 0,
        overflow: 'hidden'
    },
    topRow: {
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        marginBottom: '2px'
    },
    icon: {
        fontSize: '0.8rem',
        flexShrink: 0
    },
    counter: {
        fontSize: '0.65rem',
        color: 'var(--text-tertiary)',
        fontWeight: 500,
        background: 'rgba(255,255,255,0.06)',
        padding: '1px 6px',
        borderRadius: '8px'
    },
    messageText: {
        fontSize: '0.8rem',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        color: 'var(--text-secondary)',
        paddingLeft: '2px'
    },
    sender: {
        fontWeight: 600,
        color: 'var(--vortex-primary-light)',
        fontSize: '0.75rem'
    },
    text: {
        fontSize: '0.8rem'
    },
    showAll: {
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '10px',
        color: 'var(--text-secondary)',
        cursor: 'pointer',
        padding: '3px 10px',
        fontSize: '0.7rem',
        fontWeight: 500,
        flexShrink: 0,
        transition: 'all 0.15s',
        fontFamily: 'inherit'
    },
    close: {
        background: 'none',
        border: 'none',
        color: 'var(--text-tertiary)',
        cursor: 'pointer',
        padding: '4px 6px',
        borderRadius: '6px',
        fontSize: '0.85rem',
        flexShrink: 0,
        transition: 'color 0.15s'
    },
    dots: {
        display: 'flex',
        justifyContent: 'center',
        gap: '4px',
        padding: '0 0 6px 0'
    },
    dot: {
        width: '5px',
        height: '5px',
        borderRadius: '50%',
        transition: 'background 0.2s'
    }
};