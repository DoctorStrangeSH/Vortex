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

    const getChatName = (chat) => {
        const otherEmail = chat.participantEmails?.find(e => e !== user.email);
        const otherName = chat.participantNames?.find((n, i) => chat.participantEmails[i] !== user.email);
        return otherName || otherEmail?.split('@')[0] || 'Чат';
    };

    const handleLogout = async () => {
        await authService.logout();
    };

    const filteredChats = chats.filter(chat => {
        if (!search) return true;
        const name = getChatName(chat).toLowerCase();
        return name.includes(search.toLowerCase());
    });

    return (
        <div style={{
            width: '380px',
            minWidth: '380px',
            background: 'var(--bg-secondary)',
            borderRight: '1px solid var(--border-subtle)',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            position: 'relative'
        }}>
            {/* Шапка */}
            <div style={{
                padding: '1rem 1.25rem',
                borderBottom: '1px solid var(--border-subtle)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div>
                    <h2 style={{
                        background: 'var(--gradient-brand)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontSize: '1.1rem',
                        fontWeight: 700
                    }}>🌪️ Vortex</h2>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', marginTop: '2px' }}>
                        {user.displayName || user.email}
                    </p>
                </div>
                <BurgerMenu
                    user={user}
                    onLogout={handleLogout}
                />
            </div>

            {/* Поиск */}
            <div style={{ padding: '0.75rem 1.25rem' }}>
                <input
                    type="text"
                    value={search}
                    onInput={(e) => setSearch(e.target.value)}
                    placeholder="🔍 Поиск чатов..."
                    style={{
                        width: '100%',
                        padding: '0.7rem 1rem',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-md)',
                        color: 'var(--text-primary)',
                        fontSize: '0.85rem',
                        outline: 'none'
                    }}
                />
            </div>

            {/* Список чатов */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '0.25rem 0.75rem' }}>
                {filteredChats.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-tertiary)' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💬</div>
                        <p>{search ? 'Ничего не найдено' : 'Нет чатов'}</p>
                        {!search && (
                            <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>
                                Нажмите + чтобы создать чат
                            </p>
                        )}
                    </div>
                ) : (
                    filteredChats.map(chat => (
                        <div
                            key={chat.id}
                            onClick={() => onSelectChat(chat)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '0.75rem 1rem',
                                borderRadius: 'var(--radius-md)',
                                cursor: 'pointer',
                                background: activeChat?.id === chat.id ? 'var(--bg-active)' : 'transparent',
                                border: activeChat?.id === chat.id ? '1px solid rgba(124,58,237,0.2)' : '1px solid transparent',
                                marginBottom: '2px',
                                transition: 'all 0.15s'
                            }}
                        >
                            <div style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '50%',
                                background: 'var(--gradient-brand)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontWeight: 700,
                                marginRight: '0.75rem',
                                flexShrink: 0
                            }}>
                                {getChatName(chat).charAt(0).toUpperCase()}
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>
                                    {getChatName(chat)}
                                </div>
                                <div style={{
                                    fontSize: '0.8rem',
                                    color: 'var(--text-secondary)',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                }}>
                                    {chat.lastMessage || 'Нет сообщений'}
                                </div>
                            </div>
                            {chat.lastMessageTime && (
                                <div style={{
                                    fontSize: '0.7rem',
                                    color: 'var(--text-tertiary)',
                                    marginLeft: '0.5rem'
                                }}>
                                    {formatTime(chat.lastMessageTime)}
                                </div>
                            )}
                        </div>
                    ))
                )}
            </div>

            {/* FAB-кнопка "+" */}
            <NewChatFAB />
        </div>
    );
}

function formatTime(timestamp) {
    if (!timestamp?.toDate) return '';
    const date = timestamp.toDate();
    const now = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    if (date.toDateString() === now.toDateString()) {
        return `${hours}:${minutes}`;
    }
    return date.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit' });
}