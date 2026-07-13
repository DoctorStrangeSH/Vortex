import { useState, useEffect, useRef } from 'preact/hooks';
import { chatService } from '../../services/chatService';
import { messageService } from '../../services/messageService';
import { presenceService } from '../../services/presenceService';
import { voiceService } from '../../services/voiceService';
import { aiService } from '../../services/aiService';

export function ChatWindow({ chat, user }) {
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState('');
    const [editingMessage, setEditingMessage] = useState(null);
    const [otherStatus, setOtherStatus] = useState({ isOnline: false, lastSeen: null });
    const [contextMenu, setContextMenu] = useState(null);
    const [isRecording, setIsRecording] = useState(false);
    const [showAI, setShowAI] = useState(false);
    const messagesEndRef = useRef(null);
    const fileInputRef = useRef(null);

    useEffect(() => {
        if (!chat) return;
        return chatService.subscribeToMessages(chat.id, setMessages);
    }, [chat?.id]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    useEffect(() => {
        if (!chat) return;
        const otherId = chat.participants?.find(id => id !== user.uid);
        if (otherId) {
            return presenceService.watchUser(otherId, setOtherStatus);
        }
    }, [chat?.id, user.uid]);

    useEffect(() => {
        const close = () => setContextMenu(null);
        document.addEventListener('click', close);
        return () => document.removeEventListener('click', close);
    }, []);

    const handleSend = async (e) => {
        e?.preventDefault();
        const finalText = editingMessage ? editingMessage.text : text;
        
        if (!finalText.trim() || !chat) return;

        if (editingMessage) {
            await messageService.editMessage(chat.id, editingMessage.id, finalText);
            setEditingMessage(null);
        } else {
            await chatService.sendMessage(chat.id, finalText, user);
        }
        setText('');
    };

    const handleFileSend = async (e) => {
        const file = e.target.files?.[0];
        if (!file || !chat) return;

        const reader = new FileReader();
        reader.onload = async (ev) => {
            await chatService.sendMessage(chat.id, '', user, {
                type: file.type.startsWith('image/') ? 'image' : 'file',
                fileData: ev.target.result,
                fileName: file.name
            });
        };
        reader.readAsDataURL(file);
        e.target.value = '';
    };

    const handleDelete = async (messageId) => {
        if (!confirm('Удалить сообщение?')) return;
        await messageService.deleteMessage(chat.id, messageId);
        setContextMenu(null);
    };

    const handleEdit = (messageId, oldText) => {
        setEditingMessage({ id: messageId, text: oldText });
        setText(oldText);
        setContextMenu(null);
    };

    const handleContextMenu = (e, messageId, isOwn, msgText) => {
        e.preventDefault();
        if (!isOwn) return;
        setContextMenu({ x: e.clientX, y: e.clientY, messageId, text: msgText });
    };

    const cancelEdit = () => {
        setEditingMessage(null);
        setText('');
    };

    // Голосовые сообщения
    const startVoiceRecording = async () => {
        const started = await voiceService.startRecording();
        if (started) setIsRecording(true);
    };

    const stopVoiceRecording = async () => {
        if (!isRecording) return;
        try {
            const base64 = await voiceService.stopRecording();
            await chatService.sendMessage(chat.id, '', user, {
                type: 'voice',
                fileData: base64,
                fileName: 'voice.webm'
            });
        } catch (e) {
            console.error('Ошибка голосового:', e);
        }
        setIsRecording(false);
    };

    // AI функции
    const showAIMenu = () => setShowAI(!showAI);

    const handleSmartReply = async () => {
        try {
            const replies = await aiService.getSmartReplies(messages);
            if (replies.length > 0) setText(replies[0]);
        } catch (e) {
            alert('AI: ' + e.message);
        }
        setShowAI(false);
    };

    const handleTranslate = async () => {
        const lastMsg = messages[messages.length - 1];
        if (lastMsg) {
            try {
                const translated = await aiService.translate(lastMsg.text);
                alert(translated);
            } catch (e) {
                alert('AI: ' + e.message);
            }
        }
        setShowAI(false);
    };

    const handleSummarize = async () => {
        try {
            const summary = await aiService.summarize(messages);
            alert(summary);
        } catch (e) {
            alert('AI: ' + e.message);
        }
        setShowAI(false);
    };

    const getOtherParticipant = () => {
        if (!chat) return { name: 'Чат', email: '' };
        const otherIndex = chat.participantEmails?.findIndex(e => e !== user.email);
        const name = chat.participantNames?.[otherIndex] || chat.participantEmails?.[otherIndex]?.split('@')[0] || 'Чат';
        return { name };
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
        for (let i = 0; i < (name || '').length; i++) {
            hash = name.charCodeAt(i) + ((hash << 5) - hash);
        }
        return colors[Math.abs(hash) % colors.length];
    };

    const formatMessageTime = (timestamp) => {
        if (!timestamp?.toDate) return '';
        const date = timestamp.toDate();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    const formatLastSeen = (date) => {
        if (!date) return '';
        const now = new Date();
        const diff = Math.floor((now - date) / 1000);
        if (diff < 60) return 'только что';
        if (diff < 3600) return `${Math.floor(diff / 60)} мин назад`;
        if (diff < 86400) return `${Math.floor(diff / 3600)} ч назад`;
        return date.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit' });
    };

    const groupMessagesByDate = (msgs) => {
        const groups = [];
        let currentDate = '';
        msgs.forEach(msg => {
            const msgDate = msg.createdAt?.toDate?.();
            const dateStr = msgDate?.toLocaleDateString('ru-RU', { day: '2-digit', month: 'long', year: 'numeric' }) || '';
            if (dateStr !== currentDate) {
                currentDate = dateStr;
                groups.push({ type: 'date', date: dateStr });
            }
            groups.push({ type: 'message', data: msg });
        });
        return groups;
    };

    if (!chat) {
        return (
            <div style={styles.emptyContainer}>
                <div style={styles.emptyContent}>
                    <div style={styles.emptyLogo}>🌪️</div>
                    <h2 style={styles.emptyTitle}>Vortex</h2>
                    <p style={styles.emptyText}>Выберите чат или создайте новый,<br/>чтобы начать общение</p>
                </div>
            </div>
        );
    }

    const other = getOtherParticipant();
    const avatarColor = getAvatarColor(other.name);
    const groupedMessages = groupMessagesByDate(messages);

    return (
        <div style={styles.container}>
            {/* Шапка */}
            <div style={styles.header}>
                <div style={styles.headerLeft}>
                    <div style={{ ...styles.headerAvatar, background: avatarColor }}>
                        {other.name.charAt(0).toUpperCase()}
                    </div>
                    <div style={styles.headerInfo}>
                        <div style={styles.headerName}>{other.name}</div>
                        <div style={styles.headerStatus}>
                            <span style={{
                                ...styles.onlineDot,
                                background: otherStatus.isOnline ? 'var(--vortex-secondary)' : 'var(--text-tertiary)'
                            }}/>
                            {otherStatus.isOnline ? 'В сети' : 
                             otherStatus.lastSeen ? `Был(а) ${formatLastSeen(otherStatus.lastSeen)}` : 'Не в сети'}
                        </div>
                    </div>
                </div>
            </div>

            {/* Сообщения */}
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
                        <div key={msg.id} style={{ ...styles.messageWrapper, justifyContent: isOwn ? 'flex-end' : 'flex-start' }}
                             onContextMenu={(e) => handleContextMenu(e, msg.id, isOwn, msg.text)}>
                            {!isOwn && (
                                <div style={{ ...styles.messageAvatar, background: avatarColor, marginRight: '8px' }}>
                                    {other.name.charAt(0).toUpperCase()}
                                </div>
                            )}
                            <div style={{
                                ...styles.messageBubble,
                                background: isOwn ? 'var(--gradient-brand)' : 'var(--bg-tertiary)',
                                borderBottomRightRadius: isOwn ? '4px' : '16px',
                                borderBottomLeftRadius: isOwn ? '16px' : '4px',
                                color: isOwn ? 'white' : 'var(--text-primary)',
                                maxWidth: '65%'
                            }}>
                                {msg.type === 'image' ? (
                                    <img src={msg.fileData} alt={msg.fileName} style={styles.messageImage} />
                                ) : msg.type === 'voice' ? (
                                    <audio controls src={msg.fileData} style={styles.messageAudio} />
                                ) : (
                                    <div style={styles.messageText}>
                                        {msg.isEdited && <span style={styles.editedMark}>(изм.) </span>}
                                        {msg.text}
                                    </div>
                                )}
                                <div style={styles.messageMeta}>
                                    {formatMessageTime(msg.createdAt)}
                                    {isOwn && (
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <polyline points="20 6 9 17 4 12"/>
                                        </svg>
                                    )}
                                </div>
                            </div>
                            {isOwn && <div style={{ width: '32px', marginLeft: '8px' }} />}
                        </div>
                    );
                })}
                <div ref={messagesEndRef} />
            </div>

            {/* Контекстное меню */}
            {contextMenu && (
                <div style={{
                    ...styles.contextMenu,
                    top: contextMenu.y,
                    left: contextMenu.x
                }}>
                    <button style={styles.contextMenuItem} onClick={() => handleEdit(contextMenu.messageId, contextMenu.text)}>
                        ✏️ Редактировать
                    </button>
                    <button style={{...styles.contextMenuItem, color: 'var(--vortex-danger)'}} onClick={() => handleDelete(contextMenu.messageId)}>
                        🗑️ Удалить
                    </button>
                </div>
            )}

            {/* AI меню */}
            {showAI && (
                <div style={styles.aiMenu}>
                    <button onClick={handleSmartReply} style={styles.aiMenuItem}>
                        💡 Умный ответ
                    </button>
                    <button onClick={handleTranslate} style={styles.aiMenuItem}>
                        🌍 Перевести
                    </button>
                    <button onClick={handleSummarize} style={styles.aiMenuItem}>
                        📊 Саммари
                    </button>
                </div>
            )}

            {/* Поле ввода */}
            <div style={styles.inputContainer}>
                {editingMessage && (
                    <div style={styles.editingBar}>
                        <span>✏️ Редактирование</span>
                        <button onClick={cancelEdit} style={styles.cancelEditBtn}>✕</button>
                    </div>
                )}
                <div style={styles.inputWrapper}>
                    <button style={styles.inputBtn} onClick={() => fileInputRef.current?.click()} title="Прикрепить">
                        📎
                    </button>
                    <input type="file" ref={fileInputRef} onChange={handleFileSend} accept="image/*" style={{ display: 'none' }} />
                    
                    <button 
                        style={{
                            ...styles.inputBtn,
                            background: isRecording ? 'var(--vortex-danger)' : 'transparent',
                            color: isRecording ? 'white' : 'var(--text-secondary)'
                        }}
                        onMouseDown={startVoiceRecording}
                        onMouseUp={stopVoiceRecording}
                        onMouseLeave={stopVoiceRecording}
                        title="Голосовое сообщение"
                    >
                        🎙️
                    </button>

                    <input
                        type="text"
                        value={text}
                        onInput={(e) => setText(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Сообщение"
                        style={styles.messageInput}
                    />

                    <button style={styles.inputBtn} onClick={showAIMenu} title="AI-помощник">
                        🤖
                    </button>

                    <button onClick={handleSend} disabled={!text.trim()}
                        style={{ ...styles.sendBtn, opacity: text.trim() ? 1 : 0.4 }}>
                        ➤
                    </button>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: { flex: 1, display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)', height: '100%', position: 'relative' },
    emptyContainer: { flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-primary)' },
    emptyContent: { textAlign: 'center', color: 'var(--text-tertiary)' },
    emptyLogo: { fontSize: '5rem', marginBottom: '1rem' },
    emptyTitle: { fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' },
    emptyText: { fontSize: '0.9rem', lineHeight: 1.6 },
    header: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 1.25rem', borderBottom: '1px solid var(--border-subtle)', background: 'rgba(10, 10, 20, 0.9)', backdropFilter: 'blur(20px)', zIndex: 10 },
    headerLeft: { display: 'flex', alignItems: 'center', gap: '0.75rem' },
    headerAvatar: { width: '42px', height: '42px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '1.1rem', flexShrink: 0 },
    headerInfo: { display: 'flex', flexDirection: 'column' },
    headerName: { fontWeight: 600, fontSize: '1rem' },
    headerStatus: { fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' },
    onlineDot: { width: '8px', height: '8px', borderRadius: '50%', display: 'inline-block' },
    messagesContainer: { flex: 1, overflowY: 'auto', padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '2px' },
    dateDivider: { textAlign: 'center', padding: '1rem 0' },
    dateText: { background: 'rgba(255,255,255,0.06)', color: 'var(--text-tertiary)', padding: '4px 16px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 500 },
    messageWrapper: { display: 'flex', alignItems: 'flex-end', marginBottom: '2px' },
    messageAvatar: { width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 600, fontSize: '0.8rem', flexShrink: 0 },
    messageBubble: { padding: '0.6rem 0.9rem', borderRadius: '16px', animation: 'messageIn 0.2s ease', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' },
    messageText: { fontSize: '0.9rem', lineHeight: 1.5, wordBreak: 'break-word' },
    messageImage: { maxWidth: '280px', borderRadius: '12px', cursor: 'pointer' },
    messageAudio: { maxWidth: '250px', height: '32px' },
    editedMark: { fontSize: '0.7rem', opacity: 0.7, fontStyle: 'italic' },
    messageMeta: { display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '4px', marginTop: '4px', fontSize: '0.7rem', opacity: 0.7 },
    contextMenu: { position: 'fixed', background: 'var(--bg-secondary)', border: '1px solid var(--border-default)', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.4)', zIndex: 9999, minWidth: '180px', padding: '6px' },
    contextMenuItem: { display: 'block', width: '100%', padding: '10px 14px', background: 'transparent', border: 'none', borderRadius: '8px', color: 'var(--text-primary)', cursor: 'pointer', textAlign: 'left', fontSize: '0.85rem' },
    aiMenu: { position: 'absolute', bottom: '80px', right: '20px', background: 'var(--bg-secondary)', border: '1px solid var(--border-default)', borderRadius: '14px', boxShadow: '0 12px 40px rgba(0,0,0,0.5)', padding: '8px', zIndex: 50, minWidth: '200px' },
    aiMenuItem: { display: 'block', width: '100%', padding: '12px 16px', background: 'transparent', border: 'none', borderRadius: '10px', color: 'var(--text-primary)', cursor: 'pointer', textAlign: 'left', fontSize: '0.9rem' },
    editingBar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 1rem', background: 'rgba(124,58,237,0.1)', borderBottom: '1px solid var(--border-subtle)', fontSize: '0.8rem', color: 'var(--vortex-primary-light)' },
    cancelEditBtn: { background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '1rem' },
    inputContainer: { padding: '0.75rem 1.25rem', borderTop: '1px solid var(--border-subtle)', background: 'rgba(10, 10, 20, 0.9)', backdropFilter: 'blur(20px)' },
    inputWrapper: { display: 'flex', alignItems: 'center', gap: '8px' },
    inputBtn: { width: '42px', height: '42px', borderRadius: '50%', background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 },
    messageInput: { flex: 1, padding: '0.7rem 1.25rem', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-default)', borderRadius: '24px', color: 'var(--text-primary)', fontSize: '0.95rem', outline: 'none', fontFamily: 'inherit' },
    sendBtn: { width: '44px', height: '44px', borderRadius: '50%', background: 'var(--gradient-brand)', border: 'none', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', transition: 'all 0.2s', flexShrink: 0 }
};