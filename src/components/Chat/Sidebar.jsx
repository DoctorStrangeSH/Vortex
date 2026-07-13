import { useState, useEffect, useRef } from 'preact/hooks';
import { chatService } from '../../services/chatService';
import { authService } from '../../services/authService';
import { userService } from '../../services/userService';
import { BurgerMenu } from '../Burger/BurgerMenu';
import { NewChatFAB } from '../NewChat/NewChatFAB';
import { NewChatModal } from '../NewChat/NewChatModal';
import { ProfileModal } from '../Profile/ProfileModal';
import { ThemeCustomizer } from '../Theme/ThemeCustomizer';

export function Sidebar({ user, activeChat, onSelectChat }) {
    const [chats, setChats] = useState([]);
    const [showNewChatModal, setShowNewChatModal] = useState(false);
    const [newChatMode, setNewChatMode] = useState('personal');
    const [showProfile, setShowProfile] = useState(false);
    const [showTheme, setShowTheme] = useState(false);
    const [globalSearch, setGlobalSearch] = useState('');
    const [globalResults, setGlobalResults] = useState([]);
    const [showGlobalResults, setShowGlobalResults] = useState(false);
    const [hiddenChats, setHiddenChats] = useState(JSON.parse(localStorage.getItem('hiddenChats') || '[]'));
    const searchTimeoutRef = useRef(null);

    useEffect(() => {
        return chatService.subscribeToChats(user.uid, setChats);
    }, [user.uid]);

    const getChatData = (chat) => {
        if (chat.isChannel) return { name: chat.name || 'Канал' };
        if (chat.type === 'group') return { name: chat.name || 'Группа' };
        const otherIndex = chat.participantEmails?.findIndex(e => e !== user.email);
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
        setGlobalSearch(value);
        if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
        if (value.trim().length < 2) { setGlobalResults([]); setShowGlobalResults(false); return; }
        searchTimeoutRef.current = setTimeout(async () => {
            try { const r = await userService.searchUsers(value); setGlobalResults(r.filter(u => u.uid !== user.uid)); setShowGlobalResults(true); }
            catch { setGlobalResults([]); }
        }, 300);
    };

    const handleStartChat = async (foundUser) => {
        try { const id = await chatService.createChat(user, foundUser); setShowGlobalResults(false); setGlobalSearch(''); onSelectChat?.({ id }); }
        catch (err) { console.error(err); }
    };

    const toggleHidden = (chatId) => {
        setHiddenChats(prev => {
            const updated = prev.includes(chatId) ? prev.filter(id => id !== chatId) : [...prev, chatId];
            localStorage.setItem('hiddenChats', JSON.stringify(updated));
            return updated;
        });
    };

    const visibleChats = chats.filter(c => !hiddenChats.includes(c.id));

    return (
        <div style={st.container}>
            <div style={st.header}>
                <BurgerMenu user={user} onLogout={handleLogout} onProfile={() => setShowProfile(true)} onTheme={() => setShowTheme(true)} />
                <h2 style={st.logo}>🌪️ Vortex</h2>
                <div style={{ width: 40 }} />
            </div>

            <div style={st.searchContainer}>
                <div style={st.searchWrapper}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style={st.searchIcon}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                    <input value={globalSearch} onInput={e => handleGlobalSearch(e.target.value)} placeholder="Поиск..." style={st.searchInput} />
                </div>
                {showGlobalResults && globalResults.length > 0 && (
                    <div style={st.results}><div style={st.resultTitle}>Пользователи</div>{globalResults.map(u => <div key={u.uid} onClick={() => handleStartChat(u)} style={st.resultItem}><div style={{...st.resultAvatar, background: getAvatarColor(u.displayName || u.email)}}>{(u.displayName || u.email).charAt(0).toUpperCase()}</div><div><div style={st.resultName}>{u.displayName || 'Без имени'}</div><div style={st.resultEmail}>@{u.username || u.email.split('@')[0]}</div></div></div>)}</div>
                )}
            </div>

            <div style={st.chatList}>
                {visibleChats.length === 0 ? (
                    <div style={st.empty}><div style={{fontSize:'3rem'}}>💬</div><p>Нет чатов</p><p style={{fontSize:'0.75rem'}}>+ создать чат</p></div>
                ) : visibleChats.map(chat => {
                    const { name } = getChatData(chat);
                    const color = getAvatarColor(name);
                    const active = activeChat?.id === chat.id;
                    return (
                        <div key={chat.id} onClick={() => onSelectChat(chat)} onContextMenu={(e) => { e.preventDefault(); toggleHidden(chat.id); }}
                            style={{...st.chatItem, background: active ? 'var(--bg-active)' : 'transparent', border: active ? '1px solid rgba(124,58,237,0.2)' : '1px solid transparent'}}>
                            <div style={{...st.chatAvatar, background: color}}>{name.charAt(0).toUpperCase()}</div>
                            <div style={st.chatInfo}>
                                <div style={st.chatName}>{chat.isChannel ? '📢 ' : chat.type === 'group' ? '👥 ' : ''}{name}</div>
                                <div style={st.chatLast}>{chat.lastMessage || 'Нет сообщений'}</div>
                            </div>
                            <div style={st.chatTime}>{formatChatTime(chat.lastMessageTime)}</div>
                        </div>
                    );
                })}
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
    header: { padding:'0.75rem 1rem', display:'flex', justifyContent:'space-between', alignItems:'center' },
    logo: { background:'var(--gradient-brand)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', fontSize:'1.1rem', fontWeight:700, margin:0 },
    searchContainer: { padding:'0.25rem 0.75rem', position:'relative' },
    searchWrapper: { position:'relative' },
    searchIcon: { position:'absolute', left:'10px', top:'50%', transform:'translateY(-50%)', color:'var(--text-tertiary)' },
    searchInput: { width:'100%', padding:'0.5rem 0.75rem 0.5rem 2rem', background:'rgba(255,255,255,0.03)', border:'1px solid var(--border-subtle)', borderRadius:'10px', color:'var(--text-primary)', fontSize:'0.85rem', outline:'none' },
    results: { background:'var(--bg-tertiary)', border:'1px solid var(--border-default)', borderRadius:'10px', marginTop:'4px', maxHeight:'260px', overflowY:'auto', position:'absolute', left:'0.75rem', right:'0.75rem', zIndex:50 },
    resultTitle: { padding:'0.4rem 0.75rem', fontSize:'0.65rem', fontWeight:600, color:'var(--text-tertiary)', textTransform:'uppercase' },
    resultItem: { display:'flex', alignItems:'center', gap:'0.5rem', padding:'0.5rem 0.75rem', cursor:'pointer', borderBottom:'1px solid var(--border-subtle)' },
    resultAvatar: { width:'36px', height:'36px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:700, fontSize:'0.85rem', flexShrink:0 },
    resultName: { fontWeight:600, fontSize:'0.85rem' },
    resultEmail: { fontSize:'0.75rem', color:'var(--text-secondary)' },
    chatList: { flex:1, overflowY:'auto', padding:'0.25rem 0.5rem' },
    chatItem: { display:'flex', alignItems:'center', padding:'0.55rem 0.6rem', borderRadius:'10px', cursor:'pointer', marginBottom:'1px' },
    chatAvatar: { width:'44px', height:'44px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:700, fontSize:'1rem', marginRight:'0.6rem', flexShrink:0 },
    chatInfo: { flex:1, minWidth:0 },
    chatName: { fontWeight:600, fontSize:'0.85rem', marginBottom:'1px' },
    chatLast: { fontSize:'0.75rem', color:'var(--text-secondary)', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' },
    chatTime: { fontSize:'0.7rem', color:'var(--text-tertiary)', marginLeft:'0.5rem', flexShrink:0 },
    empty: { textAlign:'center', padding:'2rem', color:'var(--text-tertiary)' }
};