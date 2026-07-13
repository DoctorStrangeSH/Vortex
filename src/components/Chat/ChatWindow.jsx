import { useState, useEffect, useRef } from 'preact/hooks';
import { chatService } from '../../services/chatService';
import { messageService } from '../../services/messageService';
import { presenceService } from '../../services/presenceService';
import { voiceService } from '../../services/voiceService';
import { aiService } from '../../services/aiService';
import { typingService } from '../../services/typingService';
import { reactionService } from '../../services/reactionService';
import { soundService } from '../../services/soundService';
import { offlineService } from '../../services/offlineService';
import { pushService } from '../../services/pushService';
import { selfDestructService } from '../../services/selfDestructService';
import { exportService } from '../../services/exportService';
import { wallpaperService } from '../../services/wallpaperService';
import { ChatHeader } from './ChatHeader';
import { MessageBubble } from './MessageBubble';
import { MessageInput } from './MessageInput';
import { ContextMenu } from './ContextMenu';
import { ReactionPicker } from './ReactionPicker';
import { PinnedMessage } from './PinnedMessage';
import { MediaGallery } from './MediaGallery';
import { PollCreator } from './PollCreator';
import { PollMessage } from './PollMessage';
import { ThemeCustomizer } from '../Theme/ThemeCustomizer';
import { StatusPicker } from '../Status/StatusPicker';

export function ChatWindow({ chat, user, onBack, isMobile }) {
    const [messages, setMessages] = useState([]);
    const [messagesLoading, setMessagesLoading] = useState(true);
    const [text, setText] = useState('');
    const [editingMessage, setEditingMessage] = useState(null);
    const [otherStatus, setOtherStatus] = useState({ isOnline: false, lastSeen: null });
    const [contextMenu, setContextMenu] = useState(null);
    const [isRecording, setIsRecording] = useState(false);
    const [showAI, setShowAI] = useState(false);
    const [micDenied, setMicDenied] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [isDragOver, setIsDragOver] = useState(false);
    const [previewImage, setPreviewImage] = useState(null);
    const [showReactions, setShowReactions] = useState(null);
    const [showGallery, setShowGallery] = useState(false);
    const [showAllPinned, setShowAllPinned] = useState(false);
    const [showPollCreator, setShowPollCreator] = useState(false);
    const [showTheme, setShowTheme] = useState(false);
    const [showStatus, setShowStatus] = useState(false);
    const [nowPlaying, setNowPlaying] = useState(null);
    const [selectedMessages, setSelectedMessages] = useState([]);
    const [selectionMode, setSelectionMode] = useState(false);
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const messagesEndRef = useRef(null);
    const shouldAutoScroll = useRef(true);
    const messagesContainerRef = useRef(null);

    // Offline listener
    useEffect(() => {
        return offlineService.onChange(setIsOnline);
    }, []);

    // Push init
    useEffect(() => {
        pushService.init();
        pushService.subscribe(user.uid);
    }, []);

    // Очистка при смене чата
    useEffect(() => {
        if (!chat) {
            setMessages([]);
            setMessagesLoading(false);
            return;
        }
        const currentChatId = chat.id;
        const currentUserId = user.uid;
        setMessages([]);
        setMessagesLoading(true);
        setText('');
        setEditingMessage(null);
        setOtherStatus({ isOnline: false, lastSeen: null });
        const unsubscribe = chatService.subscribeToMessages(chat.id, (msgs) => {
            setMessages(msgs);
            setMessagesLoading(false);
        });
        return () => {
            unsubscribe?.();
            setMessages([]);
            typingService.stopTyping(currentChatId, currentUserId);
        };
    }, [chat?.id]);

    // Автоскролл
    const handleScroll = () => {
        const el = messagesContainerRef.current;
        if (!el) return;
        const atBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 60;
        shouldAutoScroll.current = atBottom;
    };
    useEffect(() => {
        if (shouldAutoScroll.current && messagesEndRef.current && !messagesLoading) {
            messagesEndRef.current.scrollIntoView({ behavior: 'auto' });
        }
    }, [messages, messagesLoading]);

    // Онлайн-статус + печатает
    useEffect(() => {
        if (!chat) return;
        const otherId = chat.participants?.find(id => id !== user.uid);
        if (otherId) {
            presenceService.watchUser(otherId, setOtherStatus);
            typingService.watchTyping(chat.id, otherId, setIsTyping);
        }
    }, [chat?.id, user.uid]);

    // Звук + прочитано
    useEffect(() => {
        if (messages.length > 0 && !messagesLoading) {
            const lastMsg = messages[messages.length - 1];
            if (lastMsg.senderId !== user.uid) {
                soundService.playMessageSound();
            }
        }
        if (chat && messages.length) {
            const otherMsgs = messages.filter(m => m.senderId !== user.uid && !m.readBy?.includes(user.uid));
            otherMsgs.forEach(m => messageService.markAsRead(chat.id, user.uid, m.id));
        }
    }, [messages.length]);

    // Закрытие меню
    useEffect(() => {
        const close = () => { setContextMenu(null); setShowReactions(null); };
        document.addEventListener('click', close);
        return () => document.removeEventListener('click', close);
    }, []);

    // Отправка
    const handleSend = async (e) => {
        e?.preventDefault();
        const finalText = editingMessage ? editingMessage.text : text;
        if (!finalText.trim() || !chat) return;

        if (!navigator.onLine) {
            await offlineService.addToQueue({ type: 'sendMessage', chatId: chat.id, text: finalText, user });
            setText('');
            alert('📴 Сообщение отправится при подключении к интернету');
            return;
        }

        if (editingMessage) {
            await messageService.editMessage(chat.id, editingMessage.id, finalText);
            setEditingMessage(null);
        } else {
            await chatService.sendMessage(chat.id, finalText, user);
        }
        setText('');
    };

    const handleTyping = () => { if (chat && user) typingService.startTyping(chat.id, user.uid); };

    // Файлы + Drag & Drop
    const handleFileSend = async (e) => {
        const file = e.target.files?.[0];
        if (!file || !chat) return;
        let type = 'file';
        if (file.type.startsWith('image/')) type = 'image';
        else if (file.type.startsWith('video/')) type = 'video';
        else if (file.type.startsWith('audio/')) type = 'audio';
        const reader = new FileReader();
        reader.onload = async (ev) => {
            await chatService.sendMessage(chat.id, '', user, { type, fileData: ev.target.result, fileName: file.name, fileSize: file.size });
        };
        reader.readAsDataURL(file);
        e.target.value = '';
    };

    const handleDragOver = (e) => { e.preventDefault(); setIsDragOver(true); };
    const handleDragLeave = (e) => { e.preventDefault(); setIsDragOver(false); };
    const handleDrop = async (e) => {
        e.preventDefault();
        setIsDragOver(false);
        for (const file of e.dataTransfer.files) {
            let type = 'file';
            if (file.type.startsWith('image/')) type = 'image';
            else if (file.type.startsWith('video/')) type = 'video';
            else if (file.type.startsWith('audio/')) type = 'audio';
            const reader = new FileReader();
            reader.onload = async (ev) => {
                await chatService.sendMessage(chat.id, '', user, { type, fileData: ev.target.result, fileName: file.name, fileSize: file.size });
            };
            reader.readAsDataURL(file);
        }
    };

    // Контекстное меню
    const handleContextMenu = (e, messageId, isOwn, msgText) => {
        e.preventDefault();
        setContextMenu({ x: Math.min(e.clientX, window.innerWidth - 190), y: Math.min(e.clientY, window.innerHeight - 260), messageId, text: msgText, isOwn });
    };
    const handleCopy = (text) => { navigator.clipboard.writeText(text); setContextMenu(null); };
    const handleEdit = (messageId, oldText) => { setEditingMessage({ id: messageId, text: oldText }); setText(oldText); setContextMenu(null); };
    const handleDelete = async (messageId) => {
        if (!confirm('Удалить сообщение?')) return;
        await messageService.deleteMessage(chat.id, messageId);
        setContextMenu(null);
    };
    const handlePin = async (messageId, messageText) => {
        const msg = messages.find(m => m.id === messageId);
        if (!msg) return;
        await chatService.pinMessage(chat.id, messageId, messageText, msg.senderName || '');
        setContextMenu(null);
    };
    const handleReply = (messageId) => {
        const msg = messages.find(m => m.id === messageId);
        if (msg) setText(`@${msg.senderName || 'пользователь'} `);
        setContextMenu(null);
    };
    const handleSelfDestruct = (messageId) => {
        const seconds = prompt('Через сколько секунд удалить? (5, 30, 60, 3600)');
        if (seconds) selfDestructService.setTimer(chat.id, messageId, parseInt(seconds));
        setContextMenu(null);
    };
    const cancelEdit = () => { setEditingMessage(null); setText(''); };

    // Реакции
    const handleDoubleClick = (data) => setShowReactions(data);
    const handleReaction = async (messageId, emoji) => { await reactionService.toggleReaction(chat.id, messageId, user.uid, emoji); setShowReactions(null); };
    const handleReactionClick = async (messageId, emoji) => { await reactionService.toggleReaction(chat.id, messageId, user.uid, emoji); };

    // Голосовые
    const startVoiceRecording = async () => {
        const result = await voiceService.startRecording();
        if (result === true) { setIsRecording(true); setMicDenied(false); }
        else if (result?.error === 'denied') setMicDenied(true);
        else if (result?.error) alert(result.message);
    };
    const retryMicAccess = async () => { setMicDenied(false); const r = await voiceService.startRecording(); if (r === true) setIsRecording(true); else if (r?.error === 'denied') setMicDenied(true); };
    const stopVoiceRecording = async () => {
        if (!isRecording) return;
        setIsRecording(false);
        try {
            const base64 = await voiceService.stopRecording();
            if (base64 && chat) await chatService.sendMessage(chat.id, '', user, { type: 'voice', fileData: base64, fileName: 'voice.webm' });
        } catch (e) { console.error(e); }
    };

    // AI
    const handleSmartReply = async () => { try { const r = await aiService.getSmartReplies(messages); if (r.length) setText(r[0]); } catch(e){} setShowAI(false); };
    const handleTranslate = async () => { const m = messages[messages.length-1]; if(m) { try { alert(await aiService.translate(m.text)); } catch(e){} } setShowAI(false); };
    const handleSummarize = async () => { try { alert(await aiService.summarize(messages)); } catch(e){} setShowAI(false); };

    // Опрос
    const handlePollSend = async (pollData) => {
        await chatService.sendMessage(chat.id, '', user, { type: 'poll', ...pollData });
        setShowPollCreator(false);
    };

    // Выделение
    const toggleSelection = (messageId) => {
        if (!selectionMode) return;
        setSelectedMessages(prev => prev.includes(messageId) ? prev.filter(id => id !== messageId) : [...prev, messageId]);
    };
    const handleLongPress = (messageId) => { setSelectionMode(true); setSelectedMessages([messageId]); };
    const cancelSelection = () => { setSelectionMode(false); setSelectedMessages([]); };
    const deleteSelected = async () => {
        if (!confirm(`Удалить ${selectedMessages.length} сообщений?`)) return;
        for (const id of selectedMessages) await messageService.deleteMessage(chat.id, id);
        cancelSelection();
    };

    // Экспорт
    const handleExport = () => exportService.exportChat(messages, getOtherParticipant().name);

    // Закрепление
    const pinnedMessages = chat?.pinnedMessages || [];
    const handleScrollToPinned = (messageId) => {
        const el = messagesContainerRef.current?.querySelector(`[data-msg-id="${messageId}"]`);
        if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'center' }); el.style.background = 'rgba(124, 58, 237, 0.2)'; setTimeout(() => el.style.background = '', 2000); }
    };

    const getOtherParticipant = () => {
        if (!chat) return { name: 'Чат' };
        if (chat.type === 'group') return { name: chat.name || 'Группа' };
        const idx = chat.participantEmails?.findIndex(e => e !== user.email);
        return { name: chat.participantNames?.[idx] || chat.participantEmails?.[idx]?.split('@')[0] || 'Чат' };
    };

    const getAvatarColor = (name) => {
        const colors = ['linear-gradient(135deg, #7C3AED, #6366F1)','linear-gradient(135deg, #06D6A0, #10B981)','linear-gradient(135deg, #F59E0B, #EF4444)','linear-gradient(135deg, #3B82F6, #2563EB)','linear-gradient(135deg, #EC4899, #DB2777)'];
        let hash = 0; for (let i = 0; i < (name||'').length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
        return colors[Math.abs(hash) % colors.length];
    };

    const groupMessages = (msgs) => {
        const g = []; let c = '';
        msgs.forEach(m => {
            const d = m.createdAt?.toDate?.();
            const s = d?.toLocaleDateString('ru-RU', { day:'2-digit', month:'long', year:'numeric' }) || '';
            if (s !== c) { c = s; g.push({ type:'date', date:s }); }
            g.push({ type:'message', data:m });
        });
        return g;
    };

    const wallpaper = wallpaperService.getWallpaper(chat?.id);

    if (!chat) {
        return (
            <div style={s.emptyContainer}>
                <div style={s.emptyContent}>
                    <div style={s.emptyLogo}>🌪️</div>
                    <h2 style={s.emptyTitle}>Vortex</h2>
                    <p style={s.emptyText}>Выберите чат или создайте новый</p>
                </div>
            </div>
        );
    }

    const other = getOtherParticipant();
    const avatarColor = getAvatarColor(other.name);
    const grouped = groupMessages(messages);

    return (
        <div style={{ ...s.container, opacity: isDragOver ? 0.8 : 1 }} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
            {!isOnline && (
                <div style={s.offlineBar}>📴 Нет соединения. Сообщения отправятся при подключении.</div>
            )}

            <ChatHeader
                chat={chat} user={user} other={other} avatarColor={avatarColor}
                otherStatus={otherStatus} isTyping={isTyping} isMobile={isMobile}
                onBack={onBack} onShowGallery={() => setShowGallery(true)}
                onShowTheme={() => setShowTheme(true)} onShowStatus={() => setShowStatus(true)}
                onExport={handleExport}
            />

            <PinnedMessage messages={pinnedMessages} onUnpin={(id) => id === null ? setShowAllPinned(true) : chatService.unpinMessage(chat.id, id)} onScrollTo={handleScrollToPinned} />

            <div style={{ ...s.messagesContainer, background: wallpaper || 'var(--bg-primary)' }} ref={messagesContainerRef} onScroll={handleScroll}>
                {messagesLoading ? <div style={s.loading}>Загрузка...</div> :
                 grouped.length === 0 ? <div style={s.emptyChat}><div style={{ fontSize:'3rem' }}>💬</div><p>Нет сообщений</p></div> :
                 grouped.map((item, i) => {
                    if (item.type === 'date') return <div key={`d${i}`} style={s.dateDivider}><span style={s.dateText}>{item.date}</span></div>;
                    const msg = item.data;
                    return (
                        <div key={msg.id} data-msg-id={msg.id}
                             onClick={() => toggleSelection(msg.id)}
                             onTouchStart={(e) => { const t = setTimeout(() => handleLongPress(msg.id), 500); e.target.addEventListener('touchend', () => clearTimeout(t), { once:true }); }}
                             style={{ background: selectedMessages.includes(msg.id) ? 'rgba(124,58,237,0.15)' : 'transparent', borderRadius: '8px', cursor: selectionMode ? 'pointer' : 'default' }}>
                            <MessageBubble msg={msg} own={msg.senderId === user.uid} other={other} avatarColor={avatarColor}
                                isMobile={isMobile} isPinned={pinnedMessages.some(m => m.id === msg.id)}
                                onContextMenu={handleContextMenu} onDoubleClick={handleDoubleClick}
                                onImageClick={setPreviewImage} onReactionClick={handleReactionClick}
                                onPlayAudio={setNowPlaying} onReply={handleReply} />
                        </div>
                    );
                 })}
                <div ref={messagesEndRef} />
            </div>

            {selectionMode && selectedMessages.length > 0 && (
                <div style={s.selectionBar}>
                    <span>Выбрано: {selectedMessages.length}</span>
                    <button onClick={deleteSelected} style={s.selectionBtn}>🗑️ Удалить</button>
                    <button onClick={cancelSelection} style={s.selectionBtn}>✕ Отмена</button>
                </div>
            )}

            {contextMenu && <ContextMenu x={contextMenu.x} y={contextMenu.y} messageId={contextMenu.messageId} text={contextMenu.text} isOwn={contextMenu.isOwn} isPinned={pinnedMessages.some(m => m.id === contextMenu.messageId)} onCopy={handleCopy} onEdit={contextMenu.isOwn ? handleEdit : null} onPin={handlePin} onDelete={contextMenu.isOwn ? handleDelete : null} onReply={handleReply} onSelfDestruct={handleSelfDestruct} />}
            {showReactions && <ReactionPicker x={Math.min(showReactions.x, window.innerWidth - 200)} y={showReactions.y} onReaction={(emoji) => handleReaction(showReactions.messageId, emoji)} />}
            {showAI && <div style={s.aiMenu}><button onClick={handleSmartReply} style={s.aiItem}>💡 Умный ответ</button><button onClick={handleTranslate} style={s.aiItem}>🌍 Перевести</button><button onClick={handleSummarize} style={s.aiItem}>📊 Саммари</button></div>}
            {micDenied && <div style={s.micOverlay} onClick={() => setMicDenied(false)}><div style={s.micPrompt}><div>🎙️</div><h3>Микрофон запрещён</h3><p>📱 iPhone: Настройки → Safari → Микрофон<br/>📱 Android: Настройки → Приложения → Браузер → Разрешения</p><button onClick={retryMicAccess} style={s.micAllowBtn}>🔄 Попробовать снова</button></div></div>}
            {showGallery && <MediaGallery messages={messages} onClose={() => setShowGallery(false)} />}
            {showAllPinned && <div style={s.modalOverlay} onClick={() => setShowAllPinned(false)}><div style={s.modal}><div style={s.modalHeader}><h3>📌 Закреплённые ({pinnedMessages.length})</h3></div><div style={s.modalBody}>{pinnedMessages.map((msg, i) => <div key={msg.id} style={s.pinnedItem} onClick={() => { handleScrollToPinned(msg.id); setShowAllPinned(false); }}><div style={s.pinnedNumber}>{i+1}</div><div><div style={s.pinnedSender}>{msg.senderName}</div><div>{msg.text}</div></div></div>)}</div></div></div>}
            {showPollCreator && <PollCreator onSend={handlePollSend} onClose={() => setShowPollCreator(false)} />}
            {showTheme && <ThemeCustomizer onClose={() => setShowTheme(false)} />}
            {showStatus && <StatusPicker userId={user.uid} onClose={() => setShowStatus(false)} />}
            {previewImage && <div style={s.imageOverlay} onClick={() => setPreviewImage(null)}><img src={previewImage} style={s.imagePreview} /></div>}
            {nowPlaying && <div style={s.miniPlayer}><span>🎵</span><div>{nowPlaying.name}</div><audio controls src={nowPlaying.src} autoPlay /><button onClick={() => setNowPlaying(null)}>✕</button></div>}

            <MessageInput text={text} onTextChange={setText} onSend={handleSend} onTyping={handleTyping} isRecording={isRecording} onStartVoice={startVoiceRecording} onStopVoice={stopVoiceRecording} onShowAI={() => setShowAI(!showAI)} onFileSend={handleFileSend} editingMessage={editingMessage} onCancelEdit={cancelEdit} onShowPoll={() => setShowPollCreator(true)} />
        </div>
    );
}

const s = {
    container: { flex:1, display:'flex', flexDirection:'column', background:'var(--bg-primary)', height:'100%', position:'relative' },
    emptyContainer: { flex:1, display:'flex', alignItems:'center', justifyContent:'center' },
    emptyContent: { textAlign:'center', color:'var(--text-tertiary)' },
    emptyLogo: { fontSize:'5rem' },
    emptyTitle: { fontSize:'1.5rem', fontWeight:700 },
    emptyText: { fontSize:'0.9rem' },
    offlineBar: { background:'var(--vortex-danger)', color:'white', textAlign:'center', padding:'4px', fontSize:'0.75rem' },
    messagesContainer: { flex:1, overflowY:'auto', padding:'0.6rem 0.8rem', display:'flex', flexDirection:'column', gap:'2px', backgroundSize:'cover' },
    loading: { textAlign:'center', padding:'2rem', color:'var(--text-tertiary)' },
    emptyChat: { textAlign:'center', padding:'3rem', color:'var(--text-tertiary)' },
    dateDivider: { textAlign:'center', padding:'0.8rem 0' },
    dateText: { background:'rgba(255,255,255,0.06)', color:'var(--text-tertiary)', padding:'3px 14px', borderRadius:'10px', fontSize:'0.7rem', fontWeight:500 },
    aiMenu: { position:'absolute', bottom:'70px', right:'16px', background:'var(--bg-secondary)', border:'1px solid var(--border-default)', borderRadius:'14px', padding:'8px', zIndex:50, minWidth:'180px' },
    aiItem: { display:'block', width:'100%', padding:'10px 14px', background:'transparent', border:'none', borderRadius:'10px', color:'var(--text-primary)', cursor:'pointer', textAlign:'left', fontSize:'0.85rem' },
    micOverlay: { position:'fixed', inset:0, background:'rgba(0,0,0,0.7)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:9999 },
    micPrompt: { background:'var(--bg-secondary)', borderRadius:'20px', padding:'2rem', maxWidth:'380px', textAlign:'center' },
    micAllowBtn: { width:'100%', padding:'0.85rem', background:'var(--gradient-brand)', border:'none', borderRadius:'12px', color:'#fff', fontWeight:600, cursor:'pointer' },
    modalOverlay: { position:'fixed', inset:0, background:'rgba(0,0,0,0.6)', zIndex:1000, display:'flex', alignItems:'center', justifyContent:'center' },
    modal: { background:'var(--bg-secondary)', borderRadius:'16px', width:'440px', maxWidth:'90vw', maxHeight:'70vh' },
    modalHeader: { padding:'1rem', borderBottom:'1px solid var(--border-subtle)' },
    modalBody: { overflowY:'auto', padding:'0.5rem' },
    pinnedItem: { display:'flex', alignItems:'center', gap:'0.75rem', padding:'0.75rem', cursor:'pointer' },
    pinnedNumber: { width:'28px', height:'28px', borderRadius:'50%', background:'var(--bg-tertiary)', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:600 },
    pinnedSender: { fontWeight:600, fontSize:'0.85rem', color:'var(--vortex-primary-light)' },
    selectionBar: { display:'flex', alignItems:'center', gap:'12px', padding:'0.5rem 1rem', background:'rgba(124,58,237,0.1)', borderBottom:'1px solid var(--border-subtle)', fontSize:'0.85rem' },
    selectionBtn: { padding:'0.4rem 0.8rem', background:'rgba(255,255,255,0.06)', border:'1px solid var(--border-default)', borderRadius:'8px', color:'var(--text-primary)', cursor:'pointer', fontSize:'0.8rem' },
    imageOverlay: { position:'fixed', inset:0, background:'rgba(0,0,0,0.9)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:10000 },
    imagePreview: { maxWidth:'95vw', maxHeight:'95vh', objectFit:'contain', borderRadius:'8px' },
    miniPlayer: { position:'absolute', bottom:'80px', left:'50%', transform:'translateX(-50%)', background:'var(--bg-secondary)', border:'1px solid var(--border-default)', borderRadius:'20px', padding:'0.75rem', display:'flex', alignItems:'center', gap:'12px', zIndex:50 }
};