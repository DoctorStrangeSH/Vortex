import { useState, useEffect, useRef } from 'preact/hooks';
import { chatService } from '../../services/chatService';
import { messageService } from '../../services/messageService';
import { MAX_LEGACY_ATTACHMENT_BYTES } from '../../services/messageValidation';
import { sendStoredAttachment, STORAGE_UPLOADS_ENABLED } from '../../services/mediaService.js';
import { MAX_STORAGE_FILE_BYTES } from '../../services/mediaPolicy.js';
import { presenceService } from '../../services/presenceService';
import { voiceService } from '../../services/voiceService';
import { aiService } from '../../services/aiService';
import { typingService } from '../../services/typingService';
import { reactionService } from '../../services/reactionService';
import { soundService } from '../../services/soundService';
import { offlineService } from '../../services/offlineService';
import { selfDestructService } from '../../services/selfDestructService';
import { exportService } from '../../services/exportService';
import { wallpaperService } from '../../services/wallpaperService';
import { ChatHeader } from './ChatHeader';
import { GroupMembersPanel } from './GroupMembersPanel';
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
import { mergeMessagePages } from '../../services/messagePagination.js';
import { isNearChatBottom, getInitialChatScrollTarget, getMessageScrollTop } from '../../services/chatScroll.js';
import { getNewIncomingIds, getUnreadIncomingIds, getFirstUnreadIncomingId, shouldPlayIncomingSound, shouldMarkMessagesRead, isMessageVisible } from '../../services/messageActivity.js';
import { createFrameScheduler } from '../../services/frameScheduler.js';

export function ChatWindow({ chat, user, onBack, isMobile }) {
    const [messages, setMessages] = useState([]);
    const [messagesLoading, setMessagesLoading] = useState(true);
    const [olderMessagesLoading, setOlderMessagesLoading] = useState(false);
    const [hasOlderMessages, setHasOlderMessages] = useState(false);
    const oldestCursorRef = useRef(null);
    const olderMessagesRef = useRef([]);
    const latestMessagesRef = useRef([]);
    const loadingOlderRef = useRef(false);
    const activeChatIdRef = useRef(null);
    const activeSubscriptionRef = useRef(null);
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
    const [showMembers, setShowMembers] = useState(false);
    const [nowPlaying, setNowPlaying] = useState(null);
    const [selectedMessages, setSelectedMessages] = useState([]);
    const [selectionMode, setSelectionMode] = useState(false);
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const [sending, setSending] = useState(false);
    const [sendNotice, setSendNotice] = useState('');
    const [showJumpToLatest, setShowJumpToLatest] = useState(false);
    const [newIncomingCount, setNewIncomingCount] = useState(0);
    const [firstUnreadMessageId, setFirstUnreadMessageId] = useState(null);
    const [pendingActions, setPendingActions] = useState([]);
    const sendingRef = useRef(false);
    const messagesEndRef = useRef(null);
    const shouldAutoScroll = useRef(true);
    const messagesContainerRef = useRef(null);
    const seenMessageIdsRef = useRef(null);
    const unreadBoundaryCapturedRef = useRef(false);
    const initialScrollDoneRef = useRef(false);
    const readAttemptIdsRef = useRef(new Set());
    const markVisibleAsReadRef = useRef(null);

    // Offline listener
    useEffect(() => {
        offlineService.init();
        const unsubscribeNetwork = offlineService.onChange(setIsOnline);
        const unsubscribeQueue = offlineService.onQueueChange(setPendingActions);
        return () => { unsubscribeNetwork(); unsubscribeQueue(); };
    }, []);

    // Очистка при смене чата
    useEffect(() => {
        if (!chat) {
            setMessages([]);
            setMessagesLoading(false);
            sendingRef.current = false;
            setSending(false);
            setSendNotice('');
            return;
        }
        const currentChatId = chat.id;
        const subscriptionToken = Symbol('chat-subscription');
        activeSubscriptionRef.current = subscriptionToken;
        activeChatIdRef.current = currentChatId;
        const currentUserId = user.uid;
        setMessages([]);
        setMessagesLoading(true);
        setOlderMessagesLoading(false);
        setHasOlderMessages(false);
        oldestCursorRef.current = null;
        olderMessagesRef.current = [];
        latestMessagesRef.current = [];
        seenMessageIdsRef.current = null;
        unreadBoundaryCapturedRef.current = false;
        initialScrollDoneRef.current = false;
        setFirstUnreadMessageId(null);
        readAttemptIdsRef.current = new Set();
        loadingOlderRef.current = false;
        shouldAutoScroll.current = true;
        setShowJumpToLatest(false);
        setNewIncomingCount(0);
        setText('');
        setEditingMessage(null);
        sendingRef.current = false;
        setSending(false);
        setSendNotice('');
        setOtherStatus({ isOnline: false, lastSeen: null });
        const readAttempts = readAttemptIdsRef.current;
        const markVisibleAsRead = () => {
            if (activeSubscriptionRef.current !== subscriptionToken || !initialScrollDoneRef.current || !shouldMarkMessagesRead({ visibilityState: document.visibilityState, hasFocus: document.hasFocus() })) return;
            const container = messagesContainerRef.current;
            if (!container) return;
            const loadedMessages = mergeMessagePages(olderMessagesRef.current, latestMessagesRef.current);
            const unreadIds = new Set(getUnreadIncomingIds(loadedMessages, currentUserId, readAttempts));
            if (!unreadIds.size) return;
            const viewport = container.getBoundingClientRect();
            const visibleIds = Array.from(container.querySelectorAll('[data-msg-id]'))
                .filter(element => unreadIds.has(element.dataset.msgId) && isMessageVisible(element.getBoundingClientRect(), viewport))
                .map(element => element.dataset.msgId);
            for (const messageId of visibleIds) {
                readAttempts.add(messageId);
                messageService.markAsRead(currentChatId, currentUserId, messageId).catch(error => {
                    readAttempts.delete(messageId);
                    console.warn('Не удалось отметить сообщение прочитанным', error);
                });
            }
        };
        const readScheduler = createFrameScheduler(markVisibleAsRead, requestAnimationFrame, cancelAnimationFrame);
        markVisibleAsReadRef.current = readScheduler.schedule;
        document.addEventListener('visibilitychange', readScheduler.schedule);
        window.addEventListener('focus', readScheduler.schedule);
        const unsubscribe = messageService.subscribeToMessages(chat.id, (msgs, cursor, hasMore) => {
            // A queued Firestore callback may arrive after the user switched chats.
            // Never apply data or notifications from the previous subscription.
            if (activeSubscriptionRef.current !== subscriptionToken) return;
            if (!unreadBoundaryCapturedRef.current && msgs.length) {
                unreadBoundaryCapturedRef.current = true;
                setFirstUnreadMessageId(getFirstUnreadIncomingId(msgs, currentUserId));
            }
            const ids = new Set(msgs.map(message => message.id));
            if (seenMessageIdsRef.current) {
                const newIncoming = getNewIncomingIds(seenMessageIdsRef.current, msgs, currentUserId);
                if (newIncoming.length && !shouldAutoScroll.current) {
                    setNewIncomingCount(count => count + newIncoming.length);
                    setShowJumpToLatest(true);
                }
                if (newIncoming.length > 0 &&
                    shouldPlayIncomingSound({ visibilityState: document.visibilityState, hasFocus: document.hasFocus() })) {
                    soundService.playMessageSound();
                }
            }
            seenMessageIdsRef.current = ids;
            latestMessagesRef.current = msgs;
            if (!olderMessagesRef.current.length) {
                oldestCursorRef.current = cursor;
                setHasOlderMessages(hasMore);
            }
            setMessages(mergeMessagePages(olderMessagesRef.current, msgs));
            setMessagesLoading(false);
        });
        return () => {
            activeSubscriptionRef.current = null;
            activeChatIdRef.current = null;
            markVisibleAsReadRef.current = null;
            readScheduler.cancel();
            document.removeEventListener('visibilitychange', readScheduler.schedule);
            window.removeEventListener('focus', readScheduler.schedule);
            unsubscribe?.();
            setMessages([]);
            typingService.stopTyping(currentChatId, currentUserId);
        };
    }, [chat?.id, user.uid]);

    const loadOlderMessages = async () => {
        if (!chat || !oldestCursorRef.current || loadingOlderRef.current || !hasOlderMessages) return;
        loadingOlderRef.current = true;
        setOlderMessagesLoading(true);
        const currentChatId = chat.id;
        const container = messagesContainerRef.current;
        const previousHeight = container?.scrollHeight || 0;
        shouldAutoScroll.current = false;
        setShowJumpToLatest(true);
        try {
            const page = await messageService.fetchOlderMessages(currentChatId, oldestCursorRef.current);
            if (activeChatIdRef.current !== currentChatId) return;
            oldestCursorRef.current = page.cursor;
            olderMessagesRef.current = mergeMessagePages(page.messages, olderMessagesRef.current);
            setHasOlderMessages(page.hasMore);
            setMessages(mergeMessagePages(olderMessagesRef.current, latestMessagesRef.current));
            requestAnimationFrame(() => {
                if (container) container.scrollTop += container.scrollHeight - previousHeight;
            });
        } catch (error) {
            if (activeChatIdRef.current === currentChatId) {
                alert(error.message || 'Не удалось загрузить историю');
            }
        } finally {
            if (activeChatIdRef.current === currentChatId) {
                loadingOlderRef.current = false;
                setOlderMessagesLoading(false);
            }
        }
    };

    // Автоскролл
    const handleScroll = () => {
        const el = messagesContainerRef.current;
        if (!el) return;
        const atBottom = isNearChatBottom(el);
        shouldAutoScroll.current = atBottom;
        setShowJumpToLatest(!atBottom);
        if (atBottom) setNewIncomingCount(0);
        markVisibleAsReadRef.current?.();
    };

    const jumpToLatest = () => {
        shouldAutoScroll.current = true;
        setShowJumpToLatest(false);
        setNewIncomingCount(0);
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    };
    const jumpToUnread = (behavior = 'smooth') => {
        const container = messagesContainerRef.current;
        const divider = container?.querySelector('[data-unread-divider]');
        if (!container || !divider) return false;
        container.scrollTo({
            top: getMessageScrollTop({
                scrollTop: container.scrollTop,
                containerTop: container.getBoundingClientRect().top,
                messageTop: divider.getBoundingClientRect().top
            }),
            behavior
        });
        shouldAutoScroll.current = false;
        return true;
    };
    useEffect(() => {
        if (messagesLoading || initialScrollDoneRef.current) return;
        const target = getInitialChatScrollTarget(firstUnreadMessageId);
        if (target.type === 'unread' && jumpToUnread('auto')) {
            initialScrollDoneRef.current = true;
            setShowJumpToLatest(true);
            requestAnimationFrame(() => markVisibleAsReadRef.current?.());
            return;
        }
        initialScrollDoneRef.current = true;
        shouldAutoScroll.current = true;
        messagesEndRef.current?.scrollIntoView({ behavior: 'auto' });
        requestAnimationFrame(() => markVisibleAsReadRef.current?.());
    }, [messagesLoading, firstUnreadMessageId]);
    useEffect(() => {
        if (!initialScrollDoneRef.current) return;
        if (shouldAutoScroll.current && messagesEndRef.current && !messagesLoading) {
            messagesEndRef.current.scrollIntoView({ behavior: 'auto' });
        }
        if (!messagesLoading) requestAnimationFrame(() => markVisibleAsReadRef.current?.());
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

    // Закрытие меню
    useEffect(() => {
        const close = () => { setContextMenu(null); setShowReactions(null); };
        document.addEventListener('click', close);
        return () => document.removeEventListener('click', close);
    }, []);

    // Отправка
    const handleSend = async (e) => {
        e?.preventDefault();
        const finalText = text;
        if (!finalText.trim() || !chat || sendingRef.current) return;
        const targetChatId = chat.id;
        const sendSubscriptionToken = activeSubscriptionRef.current;
        const isEditing = !!editingMessage;
        sendingRef.current = true;
        setSending(true);
        setSendNotice(isEditing ? 'Сохранение изменений…' : navigator.onLine ? 'Отправляется…' : 'Добавляется в очередь…');

        try {
            if (!navigator.onLine && !isEditing) {
                await offlineService.addToQueue({ type: 'sendMessage', chatId: targetChatId, text: finalText, user: { uid: user.uid, displayName: user.displayName } });
            } else if (isEditing) {
                if (!navigator.onLine) throw new Error('Редактирование требует подключения к интернету');
                await messageService.editMessage(targetChatId, editingMessage.id, finalText);
            } else {
                await chatService.sendMessage(targetChatId, finalText, user);
            }
            if (activeSubscriptionRef.current === sendSubscriptionToken) {
                setText(current => current === finalText ? '' : current);
                if (isEditing) setEditingMessage(null);
                setSendNotice(isEditing ? 'Изменения сохранены' : navigator.onLine ? 'Отправлено' : 'Ожидает подключения');
            }
        } catch (error) {
            if (activeSubscriptionRef.current === sendSubscriptionToken) setSendNotice(error.message || 'Ошибка отправки — сообщение осталось в поле ввода');
        } finally {
            if (activeSubscriptionRef.current === sendSubscriptionToken) {
                sendingRef.current = false;
                setSending(false);
            }
        }
    };

    const queuedForChat = pendingActions.filter(action => action.type === 'sendMessage' && action.chatId === chat?.id && action.user?.uid === user.uid);
    const failedForChat = queuedForChat.filter(action => action.status === 'failed').length;

    const handleTyping = () => { if (chat && user) typingService.startTyping(chat.id, user.uid); };

    const sendAttachmentFile = async (file) => {
        const maximum = STORAGE_UPLOADS_ENABLED ? MAX_STORAGE_FILE_BYTES : MAX_LEGACY_ATTACHMENT_BYTES;
        if (file.size > maximum) throw new Error(`Файл слишком большой (максимум ${STORAGE_UPLOADS_ENABLED ? '25 МБ' : '350 КБ'})`);
        const type = file.type.startsWith('image/') ? 'image' :
            file.type.startsWith('video/') ? 'video' :
            file.type.startsWith('audio/') ? 'audio' : 'file';
        if (STORAGE_UPLOADS_ENABLED) {
            await sendStoredAttachment(chat.id, user, file, type);
            return;
        }
        const dataUrl = await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = () => reject(new Error('Не удалось прочитать файл'));
            reader.readAsDataURL(file);
        });
        await chatService.sendMessage(chat.id, '', user, {
            type, fileData: dataUrl, fileName: file.name, fileSize: file.size
        });
    };

    // Файлы + Drag & Drop
    const handleFileSend = async (e) => {
        const file = e.target.files?.[0];
        if (!file || !chat) return;
        try { await sendAttachmentFile(file); }
        catch (error) { alert(error.message || 'Не удалось отправить файл'); }
        e.target.value = '';
    };

    const handleDragOver = (e) => { e.preventDefault(); setIsDragOver(true); };
    const handleDragLeave = (e) => { e.preventDefault(); setIsDragOver(false); };
    const handleDrop = async (e) => {
        e.preventDefault();
        setIsDragOver(false);
        for (const file of e.dataTransfer.files) {
            try { await sendAttachmentFile(file); }
            catch (error) { alert(`«${file.name}»: ${error.message || 'Не удалось отправить файл'}`); }
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
        const idx = chat.participants?.findIndex(uid => uid !== user.uid);
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
            {queuedForChat.length > 0 && (
                <div style={s.queueBar} role="status">
                    <span>{failedForChat ? `⚠️ Ошибка отправки: ${failedForChat}` : !isOnline ? '⏳ Ожидает подключения' : '⏳ Ожидает отправки'} · В очереди: {queuedForChat.length}</span>
                    {isOnline && <button type="button" style={s.retryBtn} disabled={queuedForChat.some(action => action.status === 'sending')} onClick={() => offlineService.processQueue()}>
                        Повторить
                    </button>}
                </div>
            )}

            <ChatHeader
                chat={chat} user={user} other={other} avatarColor={avatarColor}
                otherStatus={otherStatus} isTyping={isTyping} isMobile={isMobile}
                onBack={onBack} onShowGallery={() => setShowGallery(true)}
                onShowTheme={() => setShowTheme(true)} onShowStatus={() => setShowStatus(true)}
                onShowMembers={() => setShowMembers(true)}
                onExport={handleExport}
            />

            {showMembers && chat.type === 'group' && <GroupMembersPanel chat={chat} user={user}
                onClose={() => setShowMembers(false)} onLeave={onBack} />}

            <PinnedMessage messages={pinnedMessages} onUnpin={(id) => id === null ? setShowAllPinned(true) : chatService.unpinMessage(chat.id, id)} onScrollTo={handleScrollToPinned} />

            <div style={{ ...s.messagesContainer, background: wallpaper || 'var(--bg-primary)' }} ref={messagesContainerRef} onScroll={handleScroll}>
                {!messagesLoading && hasOlderMessages && <button type="button" disabled={olderMessagesLoading} onClick={loadOlderMessages} style={{ display:'block', margin:'12px auto', padding:'9px 16px', borderRadius:'12px', cursor:'pointer' }}>
                    {olderMessagesLoading ? 'Загружаем историю…' : '↑ Загрузить ранние сообщения'}
                </button>}
                {messagesLoading ? <div style={s.loading}>Загрузка...</div> :
                 grouped.length === 0 ? <div style={s.emptyChat}><div style={{ fontSize:'3rem' }}>💬</div><p>Нет сообщений</p></div> :
                 grouped.map((item, i) => {
                    if (item.type === 'date') return <div key={`d${i}`} style={s.dateDivider}><span style={s.dateText}>{item.date}</span></div>;
                    const msg = item.data;
                    return (
                        <div key={msg.id}>
                        {msg.id === firstUnreadMessageId && <div data-unread-divider style={s.unreadDivider} role="separator">Непрочитанные сообщения</div>}
                        <div data-msg-id={msg.id}
                             onClick={() => toggleSelection(msg.id)}
                             onTouchStart={(e) => { const t = setTimeout(() => handleLongPress(msg.id), 500); e.target.addEventListener('touchend', () => clearTimeout(t), { once:true }); }}
                             style={{ background: selectedMessages.includes(msg.id) ? 'rgba(124,58,237,0.15)' : 'transparent', borderRadius: '8px', cursor: selectionMode ? 'pointer' : 'default' }}>
                            <MessageBubble msg={msg} own={msg.senderId === user.uid} other={other} avatarColor={avatarColor} participants={chat.participants}
                                isMobile={isMobile} isPinned={pinnedMessages.some(m => m.id === msg.id)}
                                onContextMenu={handleContextMenu} onDoubleClick={handleDoubleClick}
                                onImageClick={setPreviewImage} onReactionClick={handleReactionClick}
                                onPlayAudio={setNowPlaying} onReply={handleReply} />
                        </div>
                        </div>
                    );
                 })}
                <div ref={messagesEndRef} />
            </div>

            {showJumpToLatest && !messagesLoading && (
                <button type="button" onClick={jumpToLatest} style={s.jumpToLatest} aria-label="Перейти к последним сообщениям">
                    ↓ К последним{newIncomingCount ? ` · Новых: ${newIncomingCount}` : ''}
                </button>
            )}

            {firstUnreadMessageId && !messagesLoading && (
                <button type="button" onClick={() => jumpToUnread()} style={s.jumpToUnread} aria-label="Перейти к первым непрочитанным сообщениям">
                    ↑ К непрочитанным
                </button>
            )}

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

            {sendNotice && <div style={s.sendNotice} role="status">{sendNotice}</div>}
            <MessageInput text={text} onTextChange={setText} onSend={handleSend} sending={sending} onTyping={handleTyping} isRecording={isRecording} onStartVoice={startVoiceRecording} onStopVoice={stopVoiceRecording} onShowAI={() => setShowAI(!showAI)} onFileSend={handleFileSend} editingMessage={editingMessage} onCancelEdit={cancelEdit} onShowPoll={() => setShowPollCreator(true)} />
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
    jumpToLatest: { position:'absolute', right:'18px', bottom:'88px', zIndex:12, border:'1px solid var(--border-default)', background:'var(--bg-secondary)', color:'var(--text-primary)', borderRadius:'24px', padding:'9px 14px', cursor:'pointer', boxShadow:'0 3px 14px rgba(0,0,0,0.25)', fontSize:'0.82rem' },
    jumpToUnread: { position:'absolute', left:'18px', bottom:'88px', zIndex:12, border:'1px solid rgba(124,58,237,0.35)', background:'var(--bg-secondary)', color:'var(--vortex-primary-light)', borderRadius:'24px', padding:'9px 14px', cursor:'pointer', boxShadow:'0 3px 14px rgba(0,0,0,0.25)', fontSize:'0.82rem' },
    unreadDivider: { margin:'14px 0', padding:'7px 12px', borderRadius:'12px', color:'var(--vortex-primary-light)', textAlign:'center', fontSize:'0.77rem', fontWeight:600, background:'rgba(124,58,237,0.12)', border:'1px solid rgba(124,58,237,0.22)' },
    queueBar: { display:'flex', justifyContent:'space-between', alignItems:'center', gap:'12px', background:'var(--bg-secondary)', color:'var(--text-primary)', padding:'7px 12px', fontSize:'0.78rem' },
    retryBtn: { border:'1px solid var(--border-default)', background:'var(--bg-tertiary)', borderRadius:'8px', padding:'5px 10px', color:'var(--text-primary)', cursor:'pointer' },
    sendNotice: { color:'var(--text-tertiary)', fontSize:'0.72rem', padding:'4px 14px', textAlign:'right' },
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
