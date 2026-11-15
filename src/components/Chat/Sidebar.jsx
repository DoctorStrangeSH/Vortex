import { useState, useEffect, useRef } from 'preact/hooks';
import { BrandMark } from '../UI/BrandMark';
import { chatService } from '../../services/chatService';
import { authService } from '../../services/authService';
import { userService } from '../../services/userService';
import { BurgerMenu } from '../Burger/BurgerMenu';
import { NewChatFAB } from '../NewChat/NewChatFAB';
import { NewChatModal } from '../NewChat/NewChatModal';
import { ProfileModal } from '../Profile/ProfileModal';
import { ThemeCustomizer } from '../Theme/ThemeCustomizer';
import { filterChats, orderPinnedChats } from '../../services/chatList.js';
import { createSearchRequestTracker } from '../../services/searchRequestTracker.js';

const readLocalIds = key => {
    try { const saved = JSON.parse(localStorage.getItem(key) || '[]'); return Array.isArray(saved) ? saved.filter(id => typeof id === 'string') : []; }
    catch { return []; }
};

export function Sidebar({ user, activeChat, onSelectChat }) {
    const [chats, setChats] = useState([]);
    const [showNewChatModal, setShowNewChatModal] = useState(false);
    const [newChatMode, setNewChatMode] = useState('personal');
    const [showProfile, setShowProfile] = useState(false);
    const [showTheme, setShowTheme] = useState(false);
    const [globalSearch, setGlobalSearch] = useState('');
    const [globalResults, setGlobalResults] = useState([]);
    const [showGlobalResults, setShowGlobalResults] = useState(false);
    const hiddenChatsKey = `hiddenChats:${user.uid}`;
    const pinnedChatsKey = `pinnedChats:${user.uid}`;
    const [hiddenChats, setHiddenChats] = useState(() => readLocalIds(hiddenChatsKey));
    const [pinnedChats, setPinnedChats] = useState(() => readLocalIds(pinnedChatsKey));
    const [showHiddenChats, setShowHiddenChats] = useState(false);
    const [chatOptionsId, setChatOptionsId] = useState(null);
    const searchTimeoutRef = useRef(null);
    const searchRequestRef = useRef(null);
    if (!searchRequestRef.current) searchRequestRef.current = createSearchRequestTracker();
    const optionsMenuRef = useRef(null);

    useEffect(() => {
        return chatService.subscribeToChats(user.uid, setChats);
    }, [user.uid]);

    useEffect(() => {
        setHiddenChats(readLocalIds(hiddenChatsKey));
        setPinnedChats(readLocalIds(pinnedChatsKey));
        setChatOptionsId(null);
        setShowHiddenChats(false);
        searchRequestRef.current.invalidate();
        if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
        setGlobalSearch('');
        setGlobalResults([]);
        setShowGlobalResults(false);
    }, [hiddenChatsKey, pinnedChatsKey]);

    useEffect(() => () => {
        searchRequestRef.current.dispose();
        if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
    }, []);

    useEffect(() => {
        if (!chatOptionsId) return;
        const handlePointerDown = event => {
            if (!optionsMenuRef.current?.contains(event.target)) setChatOptionsId(null);
        };
        const handleKeyDown = event => {
            if (event.key !== 'Escape') return;
            setChatOptionsId(null);
            optionsMenuRef.current?.querySelector('button')?.focus();
        };
        document.addEventListener('pointerdown', handlePointerDown);
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('pointerdown', handlePointerDown);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [chatOptionsId]);

    const getChatData = (chat) => {
        if (chat.isChannel) return { name: chat.name || 'Канал' };
        if (chat.type === 'group') return { name: chat.name || 'Группа' };
        const otherIndex = chat.participants?.findIndex(uid => uid !== user.uid);
        return { name: chat.participantNames?.[otherIndex] || chat.participantEmails?.[otherIndex]?.split('@')[0] || 'Чат' };
    };

    const getAvatarColor = (name) => {
        const colors = ['linear-gradient(135deg, #7C3AED, #6366F1)','linear-gradient(135deg, #06D6A0, #10B981)','linear-gradient(135deg, #F59E0B, #EF4444)','linear-gradient(135deg, #3B82F6, #2563EB)','linear-gradient(135deg, #EC4899, #DB2777)'];
        let hash = 0; for (let i = 0; i < (name||'').length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
        return colors[Math.abs(hash) % colors.length];
    };

    const formatChatTime = (ts) => {
        if (!ts?.toDate) return '';
        const d = ts.toDate(); const now = new Date();
        const h = d.getHours().toString().padStart(2,'0'), m = d.getMinutes().toString().padStart(2,'0');
        if (d.toDateString() === now.toDateString()) return `${h}:${m}`;
        return d.toLocaleDateString('ru-RU', { day:'2-digit', month:'2-digit' });
    };

    const handleLogout = async () => { await authService.logout(); };

    const handleGlobalSearch = (value) => {
        const requestId = searchRequestRef.current.issue();
        setGlobalSearch(value);
        if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
        setGlobalResults([]);
        if (value.trim().length < 2) { setShowGlobalResults(false); return; }
        setShowGlobalResults(false);
        searchTimeoutRef.current = setTimeout(async () => {
            try {
                const r = await userService.searchUsers(value);
                if (!searchRequestRef.current.isCurrent(requestId)) return;
                setGlobalResults(r.filter(u => u.uid !== user.uid)); setShowGlobalResults(true);
            } catch { if (searchRequestRef.current.isCurrent(requestId)) setGlobalResults([]); }
        }, 300);
    };

    const handleStartChat = async (foundUser) => {
        try { const id = await chatService.createChat(user, foundUser); handleGlobalSearch(''); onSelectChat?.({ id }); }
        catch (err) { console.error(err); }
    };

    const openChat = (chat) => {
        setChatOptionsId(null);
        handleGlobalSearch('');
        onSelectChat(chat);
    };

    const toggleHidden = (chatId) => {
        setHiddenChats(prev => {
            const updated = prev.includes(chatId) ? prev.filter(id => id !== chatId) : [...prev, chatId];
            localStorage.setItem(hiddenChatsKey, JSON.stringify(updated));
            return updated;
        });
        setChatOptionsId(null);
    };

    const togglePinned = (chatId) => {
        setPinnedChats(prev => {
            const updated = prev.includes(chatId) ? prev.filter(id => id !== chatId) : [...prev, chatId];
            localStorage.setItem(pinnedChatsKey, JSON.stringify(updated));
            return updated;
        });
        setChatOptionsId(null);
    };

    const visibleChats = orderPinnedChats(filterChats(chats.filter(c => !hiddenChats.includes(c.id)), globalSearch, chat => getChatData(chat).name), pinnedChats);
    const hiddenAvailable = chats.filter(c => hiddenChats.includes(c.id));

    return (
        <div class="vortex-sidebar" style={st.container}>
            <div class="vortex-sidebar-header" style={st.header}>
                <BurgerMenu user={user} onLogout={handleLogout} onProfile={() => setShowProfile(true)} onTheme={() => setShowTheme(true)} />
                <h2 class="vortex-brand" style={st.logo}><BrandMark size={29} /><span>Vortex</span></h2>
                <div style={{ width: 40 }} />
            </div>

            <div style={st.searchContainer}>
                <div style={st.searchWrapper}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style={st.searchIcon}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                    <input value={globalSearch} onInput={e => handleGlobalSearch(e.target.value)} onKeyDown={e => { if (e.key === 'Escape') { handleGlobalSearch(''); e.currentTarget.blur(); } }} placeholder="Поиск чатов и людей" aria-label="Поиск чатов и людей" class="vortex-search" style={{...st.searchInput, paddingRight: globalSearch ? '2.3rem' : '0.75rem'}} />
                    {globalSearch && <button type="button" aria-label="Очистить поиск" title="Очистить поиск" style={st.clearSearch} onClick={() => handleGlobalSearch('')}>×</button>}
                </div>
                {showGlobalResults && globalResults.length > 0 && (
                    <div style={st.results}><div style={st.resultTitle}>Пользователи</div>{globalResults.map(u => <button type="button" key={u.uid} onClick={() => handleStartChat(u)} style={st.resultItem}><div style={{...st.resultAvatar, background: getAvatarColor(u.displayName || u.username || '?')}}>{(u.displayName || u.username || '?').charAt(0).toUpperCase()}</div><div><div style={st.resultName}>{u.displayName || 'Без имени'}</div><div style={st.resultEmail}>@{u.username || 'без username'}</div></div></button>)}</div>
                )}
            </div>

            <div style={st.chatList}>
                {visibleChats.length === 0 ? (
                    <div style={st.empty}><div style={{fontSize:'3rem'}}>💬</div><p>{globalSearch.trim() ? 'Переписки не найдены' : 'Нет чатов'}</p><p style={{fontSize:'0.75rem'}}>{globalSearch.trim() ? 'Попробуйте другое название чата' : '+ создать чат'}</p></div>
                ) : visibleChats.map(chat => {
                    const { name } = getChatData(chat);
                    const color = getAvatarColor(name);
                    const active = activeChat?.id === chat.id;
                    return (
                        <div key={chat.id} role="button" tabIndex={0} aria-label={`Открыть чат ${name}`} aria-current={active ? "true" : undefined} onKeyDown={e => { if (e.target !== e.currentTarget) return; if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openChat(chat); } }} onClick={() => openChat(chat)}
                            class="vortex-chat-item" style={{...st.chatItem, background: active ? 'var(--bg-active)' : 'transparent', border: active ? '1px solid rgba(124,58,237,0.2)' : '1px solid transparent'}}>
                            <div style={{...st.chatAvatar, background: color}}>{name.charAt(0).toUpperCase()}</div>
                            <div style={st.chatInfo}>
                                <div style={st.chatName}>{pinnedChats.includes(chat.id) ? '📌 ' : ''}{chat.isChannel ? '📢 ' : chat.type === 'group' ? '👥 ' : ''}{name}</div>
                                <div style={st.chatLast} title={chat.lastMessage || 'Нет сообщений'}>{chat.lastMessage || 'Нет сообщений'}</div>
                            </div>
                            <div style={st.chatTime}>{formatChatTime(chat.lastMessageTime)}</div>
                            <div style={st.optionsWrapper} ref={chatOptionsId === chat.id ? optionsMenuRef : null}>
                                <button type="button" style={st.optionsButton} aria-label={`Настройки чата ${name}`} aria-haspopup="menu" aria-expanded={chatOptionsId === chat.id} onClick={e => { e.stopPropagation(); setChatOptionsId(prev => prev === chat.id ? null : chat.id); }}>⋮</button>
                                {chatOptionsId === chat.id && <div style={st.optionsMenu} role="menu" aria-label={`Действия с чатом ${name}`}>
                                    <button type="button" role="menuitem" style={st.optionItem} onClick={e => { e.stopPropagation(); togglePinned(chat.id); }}>{pinnedChats.includes(chat.id) ? 'Открепить' : '📌 Закрепить'}</button>
                                    <button type="button" role="menuitem" style={st.optionItem} onClick={e => { e.stopPropagation(); toggleHidden(chat.id); }}>Скрыть из списка</button>
                                </div>}
                            </div>
                        </div>
                    );
                })}
                {hiddenAvailable.length > 0 && <div style={st.hiddenSection}>
                    <button type="button" style={st.hiddenToggle} onClick={() => setShowHiddenChats(value => !value)} aria-expanded={showHiddenChats}>{showHiddenChats ? '▾' : '▸'} Скрытые переписки ({hiddenAvailable.length})</button>
                    {showHiddenChats && hiddenAvailable.map(chat => <div key={chat.id} style={st.hiddenRow}>
                        <span style={st.hiddenName}>{getChatData(chat).name}</span>
                        <button type="button" style={st.restoreButton} onClick={() => toggleHidden(chat.id)}>Вернуть</button>
                    </div>)}
                </div>}
            </div>

            <NewChatFAB onPersonalChat={() => { setNewChatMode('personal'); setShowNewChatModal(true); }} onGroupChat={() => { setNewChatMode('group'); setShowNewChatModal(true); }} onChannel={() => { setNewChatMode('channel'); setShowNewChatModal(true); }} />
            {showNewChatModal && <NewChatModal user={user} onClose={() => setShowNewChatModal(false)} onChatCreated={(id) => { setShowNewChatModal(false); onSelectChat?.({ id }); }} mode={newChatMode} />}
            {showProfile && <ProfileModal onClose={() => setShowProfile(false)} />}
            {showTheme && <ThemeCustomizer onClose={() => setShowTheme(false)} />}
        </div>
    );
}

const st = {
    container: { width:'100%', height:'100%', background:'var(--bg-secondary)', borderRight:'1px solid var(--border-subtle)', display:'flex', flexDirection:'column', position:'relative' },
    header: { padding:'1rem 1.15rem', display:'flex', justifyContent:'space-between', alignItems:'center' },
    logo: { background:'var(--gradient-brand)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', fontSize:'1.1rem', fontWeight:700, margin:0 },
    searchContainer: { padding:'0.9rem 0.9rem 0.7rem', position:'relative' },
    searchWrapper: { position:'relative' },
    searchIcon: { position:'absolute', left:'10px', top:'50%', transform:'translateY(-50%)', color:'var(--text-tertiary)' },
    searchInput: { width:'100%', padding:'0.78rem 0.75rem 0.78rem 2rem', background:'var(--bg-tertiary)', border:'1px solid var(--border-default)', borderRadius:'14px', color:'var(--text-primary)', fontSize:'0.85rem', outline:'none' },
    clearSearch: { position:'absolute', right:'6px', top:'50%', transform:'translateY(-50%)', border:0, background:'transparent', color:'var(--text-secondary)', cursor:'pointer', padding:'4px 8px', fontSize:'1.25rem', lineHeight:1 },
    results: { background:'var(--bg-tertiary)', border:'1px solid var(--border-default)', borderRadius:'10px', marginTop:'4px', maxHeight:'260px', overflowY:'auto', position:'absolute', left:'0.75rem', right:'0.75rem', zIndex:50 },
    resultTitle: { padding:'0.4rem 0.75rem', fontSize:'0.65rem', fontWeight:600, color:'var(--text-tertiary)', textTransform:'uppercase' },
    resultItem: { display:'flex', alignItems:'center', gap:'0.5rem', padding:'0.5rem 0.75rem', cursor:'pointer', border:0, borderBottom:'1px solid var(--border-subtle)', background:'transparent', color:'var(--text-primary)', textAlign:'left', width:'100%' },
    resultAvatar: { width:'36px', height:'36px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:700, fontSize:'0.85rem', flexShrink:0 },
    resultName: { fontWeight:600, fontSize:'0.85rem' },
    resultEmail: { fontSize:'0.75rem', color:'var(--text-secondary)' },
    chatList: { flex:1, overflowY:'auto', padding:'0.55rem 0.7rem' },
    chatItem: { display:'flex', alignItems:'center', padding:'0.8rem 0.7rem', borderRadius:'14px', cursor:'pointer', marginBottom:'1px' },
    chatAvatar: { width:'48px', height:'48px', borderRadius:'17px', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:700, fontSize:'1rem', marginRight:'0.6rem', flexShrink:0 },
    chatInfo: { flex:1, minWidth:0 },
    chatName: { fontWeight:700, fontSize:'0.9rem', marginBottom:'1px' },
    chatLast: { fontSize:'0.75rem', color:'var(--text-secondary)', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' },
    chatTime: { fontSize:'0.7rem', color:'var(--text-tertiary)', marginLeft:'0.5rem', flexShrink:0 },
    optionsWrapper: { position:'relative', marginLeft:'4px', flexShrink:0 },
    optionsButton: { border:'none', background:'transparent', color:'var(--text-secondary)', fontSize:'1.1rem', cursor:'pointer', padding:'5px 8px', borderRadius:'8px' },
    optionsMenu: { position:'absolute', zIndex:30, right:0, top:'100%', minWidth:'155px', background:'var(--bg-tertiary)', border:'1px solid var(--border-default)', borderRadius:'10px', boxShadow:'0 8px 20px rgba(0,0,0,0.3)', padding:'4px' },
    optionItem: { display:'block', width:'100%', textAlign:'left', background:'transparent', border:0, padding:'9px 10px', cursor:'pointer', color:'var(--text-primary)', fontSize:'0.78rem' },
    hiddenSection: { margin:'12px 4px 4px', borderTop:'1px solid var(--border-subtle)', paddingTop:'8px' },
    hiddenToggle: { background:'transparent', border:0, color:'var(--text-secondary)', fontSize:'0.78rem', cursor:'pointer', padding:'7px' },
    hiddenRow: { display:'flex', alignItems:'center', gap:'8px', padding:'5px 8px' },
    hiddenName: { flex:1, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap', color:'var(--text-secondary)', fontSize:'0.77rem' },
    restoreButton: { background:'var(--bg-tertiary)', color:'var(--text-primary)', border:'1px solid var(--border-default)', borderRadius:'8px', padding:'5px 8px', cursor:'pointer', fontSize:'0.73rem' },
    empty: { textAlign:'center', padding:'2rem', color:'var(--text-tertiary)' }
};
