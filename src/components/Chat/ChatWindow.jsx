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

    if (!chat) {
        return (
            <div style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--bg-primary)',
                color: 'var(--text-tertiary)'
            }}>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🌪️</div>
                    <h2>Vortex</h2>
                    <p style={{ marginTop: '0.5rem' }}>Выберите чат или создайте новый</p>
                </div>
            </div>
        );
    }

    const chatName = chat.participantNames?.find((n, i) => chat.participantEmails[i] !== user.email) || 'Чат';

    return (
        <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            background: 'var(--bg-primary)'
        }}>
            {/* Шапка */}
            <div style={{
                padding: '1rem 1.5rem',
                borderBottom: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center'
            }}>
                <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'var(--gradient-brand)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 700,
                    marginRight: '0.75rem'
                }}>
                    {chatName.charAt(0).toUpperCase()}
                </div>
                <div>
                    <div style={{ fontWeight: 600 }}>{chatName}</div>
                </div>
            </div>

            {/* Сообщения */}
            <div style={{
                flex: 1,
                overflowY: 'auto',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
            }}>
                {messages.map(msg => {
                    const isOwn = msg.senderId === user.uid;
                    return (
                        <div
                            key={msg.id}
                            style={{
                                maxWidth: '70%',
                                padding: '0.75rem 1rem',
                                borderRadius: 'var(--radius-md)',
                                background: isOwn ? 'var(--gradient-brand)' : 'var(--bg-tertiary)',
                                alignSelf: isOwn ? 'flex-end' : 'flex-start',
                                borderBottomRightRadius: isOwn ? '4px' : 'var(--radius-md)',
                                borderBottomLeftRadius: isOwn ? 'var(--radius-md)' : '4px',
                                color: isOwn ? 'white' : 'var(--text-primary)',
                                fontSize: '0.9rem',
                                lineHeight: 1.5,
                                animation: 'messageIn 0.2s ease'
                            }}
                        >
                            <div>{msg.text}</div>
                            <div style={{
                                fontSize: '0.7rem',
                                opacity: 0.7,
                                textAlign: 'right',
                                marginTop: '4px'
                            }}>
                                {msg.createdAt?.toDate?.()?.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}
                                {isOwn && ' ✓'}
                            </div>
                        </div>
                    );
                })}
                <div ref={messagesEndRef} />
            </div>

            {/* Поле ввода */}
            <form onSubmit={handleSend} style={{
                padding: '1rem 1.5rem',
                borderTop: '1px solid var(--border-subtle)',
                display: 'flex',
                gap: '0.75rem'
            }}>
                <input
                    type="text"
                    value={text}
                    onInput={(e) => setText(e.target.value)}
                    placeholder="Введите сообщение..."
                    style={{
                        flex: 1,
                        padding: '0.75rem 1.25rem',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid var(--border-default)',
                        borderRadius: 'var(--radius-xl)',
                        color: 'var(--text-primary)',
                        fontSize: '0.9rem',
                        outline: 'none'
                    }}
                />
                <button
                    type="submit"
                    disabled={!text.trim()}
                    style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        background: text.trim() ? 'var(--gradient-brand)' : 'rgba(255,255,255,0.05)',
                        border: 'none',
                        color: 'white',
                        cursor: text.trim() ? 'pointer' : 'not-allowed',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.2rem'
                    }}
                >➤</button>
            </form>
        </div>
    );
}