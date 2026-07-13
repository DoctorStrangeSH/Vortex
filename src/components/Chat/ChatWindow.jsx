import { useState, useEffect, useRef } from 'preact/hooks';
import { chatService } from '../../services/chatService';

export function ChatWindow({ chat, user }) {
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState('');
    const messagesEndRef = useRef(null);

    useEffect(() => {
        if (!chat) return;
        return chatService.subscribeToMessages(chat.id, setMessages);
    }, [chat?.id]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!text.trim() || !chat) return;
        await chatService.sendMessage(chat.id, text, user);
        setText('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend(e);
        }
    };

    // Получить данные другого участника
    const getOtherParticipant = () => {
        if (!chat) return { name: 'Чат', email: '' };
        const otherIndex = chat.participantEmails?.findIndex(e => e !== user.email);
        const name = chat.participantNames?.[otherIndex] || chat.participantEmails?.[otherIndex]?.split('@')[0] || 'Чат';
        const email = chat.participantEmails?.[otherIndex] || '';
        return { name, email };
    };

    // Генерация цвета аватарки на основе имени
    const getAvatarColor = (name) => {
        const colors = [
            'linear-gradient(135deg, #7C3AED, #6366F1)',
            'linear-gradient(135deg, #06D6A0, #10B981)',
            'linear-gradient(135deg, #F59E0B, #EF4444)',
            'linear-gradient(135deg, #3B82F6, #2563EB)',
            'linear-gradient(135deg, #EC4899, #DB2777)',
            'linear-gradient(135deg, #8B5CF6, #7C3AED)',
        ];
        let hash = 0;
        for (let i = 0; i < name.length; i++) {
            hash = name.charCodeAt(i) + ((hash << 5) - hash);
        }
        return colors[Math.abs(hash) % colors.length];
    };

    // Форматирование времени
    const formatMessageTime = (timestamp) => {
        if (!timestamp?.toDate) return '';
        const date = timestamp.toDate();
        const now = new Date();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');

        if (date.toDateString() === now.toDateString()) {
            return `${hours}:${minutes}`;
        }
        const yesterday = new Date(now);
        yesterday.setDate(yesterday.getDate() - 1);
        if (date.toDateString() === yesterday.toDateString()) {
            return `Вчера ${hours}:${minutes}`;
        }
        return date.toLocaleDateString('ru-RU', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit'
        }) + ` ${hours}:${minutes}`;
    };

    // Группировка сообщений по дням
    const groupMessagesByDate = (msgs) => {
        const groups = [];
        let currentDate = '';

        msgs.forEach(msg => {
            const msgDate = msg.createdAt?.toDate?.();
            const dateStr = msgDate?.toLocaleDateString('ru-RU', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            }) || '';

            if (dateStr !== currentDate) {
                currentDate = dateStr;
                groups.push({ type: 'date', date: dateStr });
            }
            groups.push({ type: 'message', data: msg });
        });

        return groups;
    };

    // Если чат не выбран
    if (!chat) {
        return (
            <div style={styles.emptyContainer}>
                <div style={styles.emptyContent}>
                    <div style={styles.emptyLogo}>🌪️</div>
                    <h2 style={styles.emptyTitle}>Vortex</h2>
                    <p style={styles.emptyText}>
                        Выберите чат или создайте новый,<br/>чтобы начать общение
                    </p>
                </div>
            </div>
        );
    }

    const other = getOtherParticipant();
    const avatarColor = getAvatarColor(other.name);
    const groupedMessages = groupMessagesByDate(messages);

    return (
        <div style={styles.container}>
            {/* ===== ШАПКА ЧАТА ===== */}
            <div style={styles.header}>
                <div style={styles.headerLeft}>
                    {/* Аватарка */}
                    <div style={{
                        ...styles.headerAvatar,
                        background: avatarColor
                    }}>
                        {other.name.charAt(0).toUpperCase()}
                    </div>

                    {/* Имя и статус */}
                    <div style={styles.headerInfo}>
                        <div style={styles.headerName}>{other.name}</div>
                        <div style={styles.headerStatus}>
                            <span style={styles.onlineDot}></span>
                            В сети
                        </div>
                    </div>
                </div>

                {/* Кнопки действий */}
                <div style={styles.headerActions}>
                    <button style={styles.headerBtn} title="Поиск">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="11" cy="11" r="8"/>
                            <path d="m21 21-4.35-4.35"/>
                        </svg>
                    </button>
                    <button style={styles.headerBtn} title="Звонок">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                    </button>
                </div>
            </div>

            {/* ===== СООБЩЕНИЯ ===== */}
            <div style={styles.messagesContainer}>
                {groupedMessages.map((item, index) => {
                    if (item.type === 'date') {
                        return (
                            <div key={`date-${index}`} style={styles.dateDivider}>
                                <span style={styles.dateText}>{item.date}</span>
                            </div>
                        );
                    }

                    const msg = item.data;
                    const isOwn = msg.senderId === user.uid;

                    return (
                        <div
                            key={msg.id}
                            style={{
                                ...styles.messageWrapper,
                                justifyContent: isOwn ? 'flex-end' : 'flex-start'
                            }}
                        >
                            {/* Аватарка (только для чужих сообщений) */}
                            {!isOwn && (
                                <div style={{
                                    ...styles.messageAvatar,
                                    background: avatarColor,
                                    marginRight: '8px'
                                }}>
                                    {other.name.charAt(0).toUpperCase()}
                                </div>
                            )}

                            <div style={{
                                ...styles.messageBubble,
                                background: isOwn
                                    ? 'var(--gradient-brand)'
                                    : 'var(--bg-tertiary)',
                                borderBottomRightRadius: isOwn ? '4px' : '16px',
                                borderBottomLeftRadius: isOwn ? '16px' : '4px',
                                color: isOwn ? 'white' : 'var(--text-primary)',
                                maxWidth: isOwn ? '65%' : '70%'
                            }}>
                                {/* Имя отправителя (для чужих) */}
                                {!isOwn && (
                                    <div style={{
                                        fontSize: '0.75rem',
                                        fontWeight: 600,
                                        color: avatarColor.replace('linear-gradient(135deg, ', '').split(',')[0],
                                        marginBottom: '4px'
                                    }}>
                                        {msg.senderName || other.name}
                                    </div>
                                )}

                                {/* Текст сообщения */}
                                <div style={{
                                    fontSize: '0.9rem',
                                    lineHeight: 1.5,
                                    wordBreak: 'break-word'
                                }}>
                                    {msg.text}
                                </div>

                                {/* Время и статус */}
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    alignItems: 'center',
                                    gap: '4px',
                                    marginTop: '4px',
                                    fontSize: '0.7rem',
                                    opacity: isOwn ? 0.8 : 0.6
                                }}>
                                    {formatMessageTime(msg.createdAt)}
                                    {isOwn && (
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <polyline points="20 6 9 17 4 12"/>
                                        </svg>
                                    )}
                                </div>
                            </div>

                            {/* Аватарка (для своих — пустое место) */}
                            {isOwn && (
                                <div style={{
                                    width: '32px',
                                    height: '32px',
                                    marginLeft: '8px',
                                    flexShrink: 0
                                }} />
                            )}
                        </div>
                    );
                })}
                <div ref={messagesEndRef} />
            </div>

            {/* ===== ПОЛЕ ВВОДА ===== */}
            <div style={styles.inputContainer}>
                <div style={styles.inputWrapper}>
                    {/* Кнопка прикрепить */}
                    <button style={styles.inputBtn} title="Прикрепить файл">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
                        </svg>
                    </button>

                    {/* Поле ввода */}
                    <input
                        type="text"
                        value={text}
                        onInput={(e) => setText(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Сообщение"
                        style={styles.messageInput}
                    />

                    {/* Кнопка эмодзи */}
                    <button style={styles.inputBtn} title="Эмодзи">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                            <line x1="9" y1="9" x2="9.01" y2="9"/>
                            <line x1="15" y1="9" x2="15.01" y2="9"/>
                        </svg>
                    </button>

                    {/* Кнопка отправить */}
                    <button
                        onClick={handleSend}
                        disabled={!text.trim()}
                        style={{
                            ...styles.sendBtn,
                            opacity: text.trim() ? 1 : 0.4,
                            cursor: text.trim() ? 'pointer' : 'not-allowed',
                            transform: text.trim() ? 'scale(1)' : 'scale(0.9)'
                        }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="m3.4 20.4 17.45-7.48a1 1 0 0 0 0-1.84L3.4 3.6a.993.993 0 0 0-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

// ===== СТИЛИ =====
const styles = {
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--bg-primary)',
        height: '100%'
    },

    // Пустое состояние
    emptyContainer: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg-primary)'
    },
    emptyContent: {
        textAlign: 'center',
        color: 'var(--text-tertiary)'
    },
    emptyLogo: {
        fontSize: '5rem',
        marginBottom: '1rem'
    },
    emptyTitle: {
        fontSize: '1.5rem',
        fontWeight: 700,
        color: 'var(--text-primary)',
        marginBottom: '0.5rem'
    },
    emptyText: {
        fontSize: '0.9rem',
        lineHeight: 1.6
    },

    // Шапка
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.75rem 1.25rem',
        borderBottom: '1px solid var(--border-subtle)',
        background: 'rgba(10, 10, 20, 0.9)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        zIndex: 10
    },
    headerLeft: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem'
    },
    headerAvatar: {
        width: '42px',
        height: '42px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 700,
        fontSize: '1.1rem',
        flexShrink: 0
    },
    headerInfo: {
        display: 'flex',
        flexDirection: 'column'
    },
    headerName: {
        fontWeight: 600,
        fontSize: '1rem',
        color: 'var(--text-primary)'
    },
    headerStatus: {
        fontSize: '0.8rem',
        color: 'var(--text-secondary)',
        display: 'flex',
        alignItems: 'center',
        gap: '6px'
    },
    onlineDot: {
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        background: 'var(--vortex-secondary)',
        display: 'inline-block'
    },
    headerActions: {
        display: 'flex',
        gap: '4px'
    },
    headerBtn: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: 'transparent',
        border: 'none',
        color: 'var(--text-secondary)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.15s'
    },

    // Сообщения
    messagesContainer: {
        flex: 1,
        overflowY: 'auto',
        padding: '1rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '2px'
    },
    dateDivider: {
        textAlign: 'center',
        padding: '1rem 0'
    },
    dateText: {
        background: 'rgba(255,255,255,0.06)',
        color: 'var(--text-tertiary)',
        padding: '4px 16px',
        borderRadius: '12px',
        fontSize: '0.75rem',
        fontWeight: 500
    },
    messageWrapper: {
        display: 'flex',
        alignItems: 'flex-end',
        marginBottom: '2px'
    },
    messageAvatar: {
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 600,
        fontSize: '0.8rem',
        flexShrink: 0
    },
    messageBubble: {
        padding: '0.6rem 0.9rem',
        borderRadius: '16px',
        animation: 'messageIn 0.2s ease',
        boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
    },

    // Поле ввода
    inputContainer: {
        padding: '0.75rem 1.25rem',
        borderTop: '1px solid var(--border-subtle)',
        background: 'rgba(10, 10, 20, 0.9)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)'
    },
    inputWrapper: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
    },
    inputBtn: {
        width: '42px',
        height: '42px',
        borderRadius: '50%',
        background: 'transparent',
        border: 'none',
        color: 'var(--text-secondary)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.15s',
        flexShrink: 0
    },
    messageInput: {
        flex: 1,
        padding: '0.7rem 1.25rem',
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid var(--border-default)',
        borderRadius: '24px',
        color: 'var(--text-primary)',
        fontSize: '0.95rem',
        outline: 'none',
        transition: 'all 0.2s',
        fontFamily: 'inherit'
    },
    sendBtn: {
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        background: 'var(--gradient-brand)',
        border: 'none',
        color: 'white',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.2s',
        flexShrink: 0
    }
};