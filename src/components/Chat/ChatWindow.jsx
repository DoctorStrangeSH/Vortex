import { useState, useEffect, useRef } from 'preact/hooks';
import { chatService } from '../../services/chatService';
import { messageService } from '../../services/messageService';
import { presenceService } from '../../services/presenceService';
import { voiceService } from '../../services/voiceService';
import { aiService } from '../../services/aiService';

export function ChatWindow({ chat, user, onBack, isMobile }) {
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
        if (otherId) return presenceService.watchUser(otherId, setOtherStatus);
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

    const startVoiceRecording = async () => {
        const hasPermission = await voiceService.requestPermission();
        if (!hasPermission) {
            alert('Нужен доступ к микрофону');
            return;
        }
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

    const showAIMenu = () => setShowAI(!showAI);

    const handleSmartReply = async () => {
        try {
            const replies = await aiService.getSmartReplies(messages);
            if (replies.length > 0) setText(replies[0]);
        } catch (e) { alert('AI: ' + e.message); }
        setShowAI(false);
    };

    const handleTranslate = async () => {
        const lastMsg = messages[messages.length - 1];
        if (lastMsg) {
            try {
                const translated = await aiService.translate(lastMsg.text);
                alert(translated);
            } catch (e) { alert('AI: ' + e.message); }
        }
        setShowAI(false);
    };

    const handleSummarize = async () => {
        try {
            const summary = await aiService.summarize(messages);
            alert(summary);
        } catch (e) { alert('AI: ' + e.message); }
        setShowAI(false);
    };

    const getOtherParticipant = () => {
        if (!chat) return { name: 'Чат' };
        const idx = chat.participantEmails?.findIndex(e => e !== user.email);
        return { name: chat.participantNames?.[idx] || chat.participantEmails?.[idx]?.split('@')[0] || 'Чат' };
    };

    const getAvatarColor = (name) => {
        const colors = ['linear-gradient(135deg, #7C3AED, #6366F1)', 'linear-gradient(135deg, #06D6A0, #10B981)', 'linear-gradient(135deg, #F59E0B, #EF4444)', 'linear-gradient(135deg, #3B82F6, #2563EB)', 'linear-gradient(135deg, #EC4899, #DB2777)'];
        let hash = 0;
        for (let i = 0; i < (name || '').length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
        return colors[Math.abs(hash) % colors.length];
    };

    const formatMessageTime = (ts) => {
        if (!ts?.toDate) return '';
        const d = ts.toDate();
        return `${d.getHours().toString().padStart(2,'0')}:${d.getMinutes().toString().padStart(2,'0')}`;
    };

    const formatLastSeen = (date) => {
        if (!date) return '';
        const diff = Math.floor((new Date() - date) / 1000);
        if (diff < 60) return 'только что';
        if (diff < 3600) return `${Math.floor(diff/60)} мин`;
        if (diff < 86400) return `${Math.floor(diff/3600)} ч`;
        return date.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit' });
    };

    const groupMessages = (msgs) => {
        const groups = [];
        let cur = '';
        msgs.forEach(msg => {
            const d = msg.createdAt?.toDate?.();
            const s = d?.toLocaleDateString('ru-RU', { day: '2-digit', month: 'long', year: 'numeric' }) || '';
            if (s !== cur) { cur = s; groups.push({ type: 'date', date: s }); }
            groups.push({ type: 'message', data: msg });
        });
        return groups;
    };

    // ПУСТОЙ ЭКРАН
    if (!chat) {
        return (
            <div style={s.emptyContainer}>
                <div style={s.emptyContent}>
                    <div style={s.emptyLogo}>🌪️</div>
                    <h2 style={s.emptyTitle}>Vortex</h2>
                    <p style={s.emptyText}>Выберите чат или создайте новый,<br/>чтобы начать общение</p>
                </div>
            </div>
        );
    }

    const other = getOtherParticipant();
    const avatarColor = getAvatarColor(other.name);
    const grouped = groupMessages(messages);

    return (
        <div style={s.container}>
            {/* ШАПКА */}
            <div style={s.header}>
                <div style={s.headerLeft}>
                    {isMobile && (
                        <button onClick={onBack} style={s.backBtn}>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
                        </button>
                    )}
                    <div style={{...s.headerAvatar, background: avatarColor}}>{other.name.charAt(0).toUpperCase()}</div>
                    <div style={s.headerInfo}>
                        <div style={s.headerName}>{other.name}</div>
                        <div style={s.headerStatus}>
                            <span style={{...s.onlineDot, background: otherStatus.isOnline ? 'var(--vortex-secondary)' : 'var(--text-tertiary)'}}/>
                            {otherStatus.isOnline ? 'В сети' : otherStatus.lastSeen ? `Был(а) ${formatLastSeen(otherStatus.lastSeen)}` : 'Не в сети'}
                        </div>
                    </div>
                </div>
            </div>

            {/* СООБЩЕНИЯ */}
            <div style={s.messagesContainer}>
                {grouped.map((item, i) => {
                    if (item.type === 'date') return <div key={`d${i}`} style={s.dateDivider}><span style={s.dateText}>{item.date}</span></div>;
                    const msg = item.data;
                    const own = msg.senderId === user.uid;
                    return (
                        <div key={msg.id} style={{...s.msgWrapper, justifyContent: own ? 'flex-end' : 'flex-start'}} onContextMenu={(e) => handleContextMenu(e, msg.id, own, msg.text)}>
                            {!own && <div style={{...s.msgAvatar, background: avatarColor, marginRight: 6}}>{other.name.charAt(0).toUpperCase()}</div>}
                            <div style={{...s.msgBubble, background: own ? 'var(--gradient-brand)' : 'var(--bg-tertiary)', borderBottomRightRadius: own ? '4px' : '16px', borderBottomLeftRadius: own ? '16px' : '4px', color: own ? '#fff' : 'var(--text-primary)', maxWidth: isMobile ? '82%' : '65%'}}>
                                {msg.type === 'image' ? <img src={msg.fileData} alt="" style={s.msgImage}/> :
                                 msg.type === 'voice' ? <audio controls src={msg.fileData} style={s.msgAudio}/> :
                                 <div style={s.msgText}>{msg.isEdited && <span style={s.edited}>(изм.) </span>}{msg.text}</div>}
                                <div style={s.msgMeta}>{formatMessageTime(msg.createdAt)}{own && ' ✓✓'}</div>
                            </div>
                            {own && <div style={{width:28, marginLeft:6}}/>}
                        </div>
                    );
                })}
                <div ref={messagesEndRef}/>
            </div>

            {/* КОНТЕКСТНОЕ МЕНЮ */}
            {contextMenu && (
                <div style={{...s.ctxMenu, top: contextMenu.y, left: contextMenu.x}}>
                    <button style={s.ctxItem} onClick={() => handleEdit(contextMenu.messageId, contextMenu.text)}>✏️ Редактировать</button>
                    <button style={{...s.ctxItem, color:'var(--vortex-danger)'}} onClick={() => handleDelete(contextMenu.messageId)}>🗑️ Удалить</button>
                </div>
            )}

            {/* AI МЕНЮ */}
            {showAI && (
                <div style={s.aiMenu}>
                    <button onClick={handleSmartReply} style={s.aiItem}>💡 Умный ответ</button>
                    <button onClick={handleTranslate} style={s.aiItem}>🌍 Перевести</button>
                    <button onClick={handleSummarize} style={s.aiItem}>📊 Саммари</button>
                </div>
            )}

            {/* ПОЛЕ ВВОДА */}
            <div style={s.inputContainer}>
                {editingMessage && (
                    <div style={s.editBar}>
                        <span>✏️ Редактирование</span>
                        <button onClick={cancelEdit} style={s.cancelEditBtn}>✕</button>
                    </div>
                )}
                <div style={s.inputWrapper}>
                    <button style={s.inputBtn} onClick={() => fileInputRef.current?.click()}>📎</button>
                    <input type="file" ref={fileInputRef} onChange={handleFileSend} accept="image/*" style={{display:'none'}}/>
                    <button style={{...s.inputBtn, background: isRecording ? 'var(--vortex-danger)' : 'transparent', color: isRecording ? '#fff' : 'var(--text-secondary)'}} onMouseDown={startVoiceRecording} onMouseUp={stopVoiceRecording} onMouseLeave={stopVoiceRecording} onTouchStart={startVoiceRecording} onTouchEnd={stopVoiceRecording}>🎙️</button>
                    <input type="text" value={text} onInput={(e) => setText(e.target.value)} onKeyDown={(e) => e.key==='Enter' && handleSend()} placeholder="Сообщение" style={s.msgInput}/>
                    <button style={s.inputBtn} onClick={showAIMenu}>🤖</button>
                    <button onClick={handleSend} disabled={!text.trim()} style={{...s.sendBtn, opacity: text.trim()?1:0.4}}>➤</button>
                </div>
            </div>
        </div>
    );
}

const s = {
    container: {flex:1, display:'flex', flexDirection:'column', background:'var(--bg-primary)', height:'100%', position:'relative'},
    emptyContainer: {flex:1, display:'flex', alignItems:'center', justifyContent:'center', background:'var(--bg-primary)'},
    emptyContent: {textAlign:'center', color:'var(--text-tertiary)'},
    emptyLogo: {fontSize:'5rem', marginBottom:'1rem'},
    emptyTitle: {fontSize:'1.5rem', fontWeight:700, color:'var(--text-primary)', marginBottom:'0.5rem'},
    emptyText: {fontSize:'0.9rem', lineHeight:1.6},
    header: {display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0.6rem 1rem', borderBottom:'1px solid var(--border-subtle)', background:'rgba(10,10,20,0.9)', backdropFilter:'blur(20px)', WebkitBackdropFilter:'blur(20px)', zIndex:10},
    headerLeft: {display:'flex', alignItems:'center', gap:'0.6rem'},
    headerAvatar: {width:'38px', height:'38px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:700, fontSize:'1rem', flexShrink:0},
    headerInfo: {display:'flex', flexDirection:'column'},
    headerName: {fontWeight:600, fontSize:'0.95rem'},
    headerStatus: {fontSize:'0.75rem', color:'var(--text-secondary)', display:'flex', alignItems:'center', gap:'5px'},
    onlineDot: {width:'7px', height:'7px', borderRadius:'50%', display:'inline-block'},
    backBtn: {background:'none', border:'none', color:'var(--text-primary)', cursor:'pointer', padding:'2px', display:'flex', alignItems:'center'},
    messagesContainer: {flex:1, overflowY:'auto', padding:'0.6rem 0.8rem', display:'flex', flexDirection:'column', gap:'2px'},
    dateDivider: {textAlign:'center', padding:'0.8rem 0'},
    dateText: {background:'rgba(255,255,255,0.06)', color:'var(--text-tertiary)', padding:'3px 14px', borderRadius:'10px', fontSize:'0.7rem', fontWeight:500},
    msgWrapper: {display:'flex', alignItems:'flex-end', marginBottom:'2px'},
    msgAvatar: {width:'28px', height:'28px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:600, fontSize:'0.7rem', flexShrink:0},
    msgBubble: {padding:'0.5rem 0.75rem', borderRadius:'14px', animation:'messageIn 0.2s ease', boxShadow:'0 1px 2px rgba(0,0,0,0.1)'},
    msgText: {fontSize:'0.9rem', lineHeight:1.45, wordBreak:'break-word'},
    msgImage: {maxWidth:'260px', borderRadius:'10px'},
    msgAudio: {maxWidth:'240px', height:'30px'},
    edited: {fontSize:'0.7rem', opacity:0.7, fontStyle:'italic'},
    msgMeta: {display:'flex', justifyContent:'flex-end', alignItems:'center', gap:'4px', marginTop:'3px', fontSize:'0.65rem', opacity:0.7},
    ctxMenu: {position:'fixed', background:'var(--bg-secondary)', border:'1px solid var(--border-default)', borderRadius:'12px', boxShadow:'0 8px 24px rgba(0,0,0,0.4)', zIndex:9999, minWidth:'160px', padding:'4px'},
    ctxItem: {display:'block', width:'100%', padding:'10px 14px', background:'transparent', border:'none', borderRadius:'8px', color:'var(--text-primary)', cursor:'pointer', textAlign:'left', fontSize:'0.85rem'},
    aiMenu: {position:'absolute', bottom:'70px', right:'16px', background:'var(--bg-secondary)', border:'1px solid var(--border-default)', borderRadius:'14px', boxShadow:'0 12px 40px rgba(0,0,0,0.5)', padding:'8px', zIndex:50, minWidth:'180px'},
    aiItem: {display:'block', width:'100%', padding:'10px 14px', background:'transparent', border:'none', borderRadius:'10px', color:'var(--text-primary)', cursor:'pointer', textAlign:'left', fontSize:'0.85rem'},
    editBar: {display:'flex', justifyContent:'space-between', alignItems:'center', padding:'0.4rem 0.8rem', background:'rgba(124,58,237,0.1)', borderBottom:'1px solid var(--border-subtle)', fontSize:'0.75rem', color:'var(--vortex-primary-light)'},
    cancelEditBtn: {background:'none', border:'none', color:'var(--text-secondary)', cursor:'pointer'},
    inputContainer: {padding:'0.5rem 0.6rem', borderTop:'1px solid var(--border-subtle)', background:'rgba(10,10,20,0.9)', backdropFilter:'blur(20px)', WebkitBackdropFilter:'blur(20px)'},
    inputWrapper: {display:'flex', alignItems:'center', gap:'6px'},
    inputBtn: {width:'36px', height:'36px', borderRadius:'50%', background:'transparent', border:'none', color:'var(--text-secondary)', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.1rem', flexShrink:0},
    msgInput: {flex:1, padding:'0.55rem 1rem', background:'rgba(255,255,255,0.04)', border:'1px solid var(--border-default)', borderRadius:'20px', color:'var(--text-primary)', fontSize:'16px', outline:'none', fontFamily:'inherit'},
    sendBtn: {width:'38px', height:'38px', borderRadius:'50%', background:'var(--gradient-brand)', border:'none', color:'#fff', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1rem', transition:'all 0.2s', flexShrink:0}
};