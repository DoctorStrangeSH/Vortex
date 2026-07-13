import { useState, useEffect } from 'preact/hooks';
import { chatService } from '../../services/chatService';
import { authService } from '../../services/authService';
import { BurgerMenu } from '../Burger/BurgerMenu';
import { NewChatFAB } from '../NewChat/NewChatFAB';

export function Sidebar({ user, activeChat, onSelectChat }) {
    const [chats, setChats] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        return chatService.subscribeToChats(user.uid, setChats);
    }, [user.uid]);

    const getChatData = (chat) => {
        const otherIndex = chat.participantEmails?.findIndex(e => e !== user.email);
        const name = chat.participantNames?.[otherIndex] || 
                     chat.participantEmails?.[otherIndex]?.split('@')[0] || 'Чат';
        const email = chat.participantEmails?.[otherIndex] || '';
        return { name, email };
    };

    const getAvatarColor = (name) => {
        const colors = [
            'linear-gradient(135deg, #7C3AED, #6366F1)',
            'linear-gradient(135deg, #06D6A0, #10B981)',
            'linear-gradient(135deg, #F59E0B, #EF4444)',
            'linear-gradient(135deg, #3B82F6, #2563EB)',
            'linear-gradient(135deg, #EC4899, #DB2777)',
        ];
        let hash = 0;
        for (let i = 0; i < name.length; i++) {
            hash = name.charCodeAt(i) + ((hash << 5) - hash);
        }
        return colors[Math.abs(hash) % colors.length];
    };

    const formatChatTime = (timestamp) => {
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
            return 'Вчера';
        }
        return date.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit' });
    };

    const handleLogout = async () => {
        await authService.logout();
    };

    const filteredChats = chats.filter(chat => {
        if (!search) return true;
        const { name } = getChatData(chat);
        return name.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <div style={styles.container}>
            {/* Шапка */}
            <div style={styles.header}>
                <h2 style={styles.logo}>🌪️ Vortex</h2>
                <BurgerMenu user={user} onLogout={handleLogout} />
            </div>

            {/* Поиск */}
            <div style={styles.searchContainer}>
                <div style={styles.searchWrapper}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style={styles.searchIcon}>
                        <circle cx="11" cy="11" r="8"/>
                        <path d="m21 21-4.35-4.35"/>
                    </svg>
                    <input
                        type="text"
                        value={search}
                        onInput={(e) => setSearch(e.target.value)}
                        placeholder="Поиск чатов"
                        style={styles.searchInput}
                    />
                </div>
            </div>

            {/* Список чатов */}
            <div style={styles.chatList}>
                {filteredChats.length === 0 ? (
                    <div style={styles.emptyState}>
                        <div style={styles.emptyIcon}>💬</div>
                        <p style={styles.emptyText}>
                            {search ? 'Ничего не найдено' : 'Нет чатов'}
                        </p>
                        {!search && (
                            <p style={styles.emptyHint}>
                                Нажмите + чтобы создать чат
                            </p>
                        )}
                    </div>
                ) : (
                    filteredChats.map(chat => {
                        const { name, email } = getChatData(chat);
                        const avatarColor = getAvatarColor(name);
                        const isActive = activeChat?.id === chat.id;

                        return (
                            <div
                                key={chat.id}
                                onClick={() => onSelectChat(chat)}
                                style={{
                                    ...styles.chatItem,
                                    background: isActive ? 'var(--bg-active)' : 'transparent',
                                    border: isActive ? '1px solid rgba(124, 58, 237, 0.2)' : '1px solid transparent'
                                }}
                            >
                                {/* Аватарка */}
                                <div style={{
                                    ...styles.chatAvatar,
                                    background: avatarColor
                                }}>
                                    {name.charAt(0).toUpperCase()}
                                </div>

                                {/* Инфо */}
                                <div style={styles.chatInfo}>
                                    <div style={styles.chatName}>{name}</div>
                                    <div style={styles.chatLastMsg}>
                                        {chat.lastMessage || 'Нет сообщений'}
                                    </div>
                                </div>

                                {/* Время */}
                                <div style={styles.chatMeta}>
                                    <div style={styles.chatTime}>
                                        {formatChatTime(chat.lastMessageTime)}
                                    </div>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>

            {/* FAB кнопка */}
            <NewChatFAB />
        </div>
    );
}

const styles = {
    container: {
        width: '380px',
        minWidth: '380px',
        background: 'var(--bg-secondary)',
        borderRight: '1px solid var(--border-subtle)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        position: 'relative'
    },
    header: {
        padding: '1rem 1.25rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        background: 'var(--gradient-brand)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontSize: '1.2rem',
        fontWeight: 700,
        margin: 0
    },
    searchContainer: {
        padding: '0.5rem 1rem'
    },
    searchWrapper: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center'
    },
    searchIcon: {
        position: 'absolute',
        left: '12px',
        color: 'var(--text-tertiary)',
        pointerEvents: 'none'
    },
    searchInput: {
        width: '100%',
        padding: '0.6rem 1rem 0.6rem 2.5rem',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '12px',
        color: 'var(--text-primary)',
        fontSize: '0.85rem',
        outline: 'none'
    },
    chatList: {
        flex: 1,
        overflowY: 'auto',
        padding: '0.25rem 0.75rem'
    },
    chatItem: {
        display: 'flex',
        alignItems: 'center',
        padding: '0.7rem 0.75rem',
        borderRadius: '12px',
        cursor: 'pointer',
        marginBottom: '2px',
        transition: 'all 0.15s ease'
    },
    chatAvatar: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 700,
        fontSize: '1.1rem',
        marginRight: '0.75rem',
        flexShrink: 0
    },
    chatInfo: {
        flex: 1,
        minWidth: 0
    },
    chatName: {
        fontWeight: 600,
        fontSize: '0.9rem',
        marginBottom: '2px'
    },
    chatLastMsg: {
        fontSize: '0.8rem',
        color: 'var(--text-secondary)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    chatMeta: {
        marginLeft: '0.5rem',
        flexShrink: 0
    },
    chatTime: {
        fontSize: '0.7rem',
        color: 'var(--text-tertiary)'
    },
    emptyState: {
        textAlign: 'center',
        padding: '2rem',
        color: 'var(--text-tertiary)'
    },
    emptyIcon: {
        fontSize: '3rem',
        marginBottom: '0.5rem'
    },
    emptyText: {
        fontSize: '0.9rem'
    },
    emptyHint: {
        fontSize: '0.75rem',
        marginTop: '0.25rem'
    }
};