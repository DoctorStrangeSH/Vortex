import { useState } from 'preact/hooks';
import { userService } from '../../services/userService';
import { chatService } from '../../services/chatService';
import { channelService } from '../../services/channelService';

export function NewChatModal({ user, onClose, onChatCreated, mode = 'personal' }) {
    const [searchInput, setSearchInput] = useState('');
    const [groupName, setGroupName] = useState('');
    const [groupParticipants, setGroupParticipants] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [step, setStep] = useState(mode === 'group' ? 'groupForm' : mode === 'channel' ? 'channelForm' : 'search');

    const handleSearch = async () => {
        if (!searchInput.trim()) { setError('Введите email или @username'); return; }
        setLoading(true); setError('');
        try {
            const found = await userService.findUser(searchInput);
            if (!found) { setError('Пользователь не найден'); return; }
            if (found.uid === user.uid) { setError('Это ваш аккаунт'); return; }
            setSearchResult(found); setStep('result');
        } catch { setError('Ошибка поиска'); }
        finally { setLoading(false); }
    };

    const handleCreatePersonal = async () => {
        if (!searchResult) return;
        setLoading(true);
        try { const id = await chatService.createChat(user, searchResult); onChatCreated?.(id); onClose?.(); }
        catch (err) { setError(err.message); }
        finally { setLoading(false); }
    };

    const handleCreateGroup = async () => {
        const name = groupName.trim() || 'Группа';
        const participants = groupParticipants.split(',').map(s => s.trim()).filter(s => s);
        if (participants.length === 0) { setError('Добавьте участников'); return; }
        setLoading(true);
        try {
            const ids = [];
            for (const p of participants) { const f = await userService.findUser(p); if (f && f.uid !== user.uid) ids.push(f.uid); }
            if (ids.length === 0) { setError('Участники не найдены'); return; }
            const id = await chatService.createGroupChat(user, ids, name);
            onChatCreated?.(id); onClose?.();
        } catch (err) { setError(err.message); }
        finally { setLoading(false); }
    };

    const handleCreateChannel = async () => {
        const name = groupName.trim() || 'Канал';
        setLoading(true);
        try { const id = await channelService.createChannel(user, name); onChatCreated?.(id); onClose?.(); }
        catch (err) { setError(err.message); }
        finally { setLoading(false); }
    };

    const getAvatarColor = (name) => {
        const colors = ['linear-gradient(135deg, #7C3AED, #6366F1)','linear-gradient(135deg, #06D6A0, #10B981)','linear-gradient(135deg, #F59E0B, #EF4444)','linear-gradient(135deg, #3B82F6, #2563EB)','linear-gradient(135deg, #EC4899, #DB2777)'];
        let hash = 0; for (let i = 0; i < (name||'').length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
        return colors[Math.abs(hash) % colors.length];
    };

    return (
        <div style={st.overlay} onClick={onClose}>
            <div style={st.modal} onClick={e => e.stopPropagation()}>
                <div style={st.header}>
                    <h3>{mode === 'group' ? 'Новая группа' : mode === 'channel' ? 'Новый канал' : 'Новый чат'}</h3>
                    <button onClick={onClose} style={st.closeBtn}>✕</button>
                </div>
                <div style={st.body}>
                    {step === 'search' && (
                        <>
                            <p style={st.hint}>Введите email или @username</p>
                            <div style={st.row}><input value={searchInput} onInput={e => { setSearchInput(e.target.value); setError(''); }} onKeyDown={e => e.key==='Enter' && handleSearch()} placeholder="Email или @username" style={st.input} autoFocus /><button onClick={handleSearch} disabled={loading || !searchInput.trim()} style={st.btn}>{loading?'...':'Найти'}</button></div>
                            {error && <p style={st.error}>{error}</p>}
                        </>
                    )}
                    {step === 'result' && searchResult && (
                        <>
                            <div style={st.userCard}>
                                <div style={{...st.avatar, background: getAvatarColor(searchResult.displayName || searchResult.email)}}>{(searchResult.displayName || searchResult.email).charAt(0).toUpperCase()}</div>
                                <div><div style={st.userName}>{searchResult.displayName || 'Без имени'}</div><div style={st.userEmail}>{searchResult.email}</div></div>
                            </div>
                            <div style={st.actions}><button onClick={() => setStep('search')} style={st.backBtn}>← Назад</button><button onClick={handleCreatePersonal} disabled={loading} style={st.createBtn}>{loading?'...':'Создать чат'}</button></div>
                        </>
                    )}
                    {step === 'groupForm' && (
                        <>
                            <div style={st.field}><label>Название группы</label><input value={groupName} onInput={e => setGroupName(e.target.value)} placeholder="Название группы" style={st.input} autoFocus /></div>
                            <div style={st.field}><label>Участники (через запятую)</label><input value={groupParticipants} onInput={e => setGroupParticipants(e.target.value)} placeholder="@user1, @user2" style={st.input} /></div>
                            {error && <p style={st.error}>{error}</p>}
                            <div style={st.actions}><button onClick={onClose} style={st.backBtn}>Отмена</button><button onClick={handleCreateGroup} disabled={loading} style={st.createBtn}>{loading?'...':'Создать группу'}</button></div>
                        </>
                    )}
                    {step === 'channelForm' && (
                        <>
                            <div style={st.field}><label>Название канала</label><input value={groupName} onInput={e => setGroupName(e.target.value)} placeholder="Название канала" style={st.input} autoFocus /></div>
                            {error && <p style={st.error}>{error}</p>}
                            <div style={st.actions}><button onClick={onClose} style={st.backBtn}>Отмена</button><button onClick={handleCreateChannel} disabled={loading} style={st.createBtn}>{loading?'...':'Создать канал'}</button></div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

const st = {
    overlay: { position:'fixed', inset:0, background:'rgba(0,0,0,0.6)', backdropFilter:'blur(4px)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:1000 },
    modal: { background:'var(--bg-secondary)', border:'1px solid var(--border-default)', borderRadius:'16px', width:'440px', maxWidth:'90vw' },
    header: { display:'flex', justifyContent:'space-between', alignItems:'center', padding:'1.25rem 1.5rem', borderBottom:'1px solid var(--border-subtle)' },
    closeBtn: { background:'none', border:'none', color:'var(--text-secondary)', cursor:'pointer', fontSize:'1.1rem' },
    body: { padding:'1.5rem' },
    hint: { color:'var(--text-secondary)', fontSize:'0.85rem', marginBottom:'1rem' },
    row: { display:'flex', gap:'0.5rem' },
    input: { flex:1, padding:'0.75rem 1rem', background:'rgba(255,255,255,0.04)', border:'1px solid var(--border-default)', borderRadius:'12px', color:'var(--text-primary)', fontSize:'0.9rem', outline:'none' },
    btn: { padding:'0.75rem 1.25rem', background:'var(--gradient-brand)', border:'none', borderRadius:'12px', color:'#fff', fontWeight:600, cursor:'pointer' },
    error: { color:'var(--vortex-danger)', fontSize:'0.85rem', marginTop:'0.75rem', padding:'0.5rem 0.75rem', background:'rgba(239,68,68,0.1)', borderRadius:'8px' },
    userCard: { display:'flex', alignItems:'center', gap:'1rem', padding:'1rem', background:'rgba(255,255,255,0.03)', borderRadius:'12px', marginBottom:'1rem' },
    avatar: { width:'56px', height:'56px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:700, fontSize:'1.3rem', flexShrink:0 },
    userName: { fontWeight:600 }, userEmail: { fontSize:'0.85rem', color:'var(--text-secondary)' },
    actions: { display:'flex', gap:'0.75rem', marginTop:'1rem' },
    backBtn: { flex:1, padding:'0.75rem', background:'transparent', border:'1px solid var(--border-default)', borderRadius:'12px', color:'var(--text-secondary)', cursor:'pointer' },
    createBtn: { flex:2, padding:'0.75rem', background:'var(--gradient-brand)', border:'none', borderRadius:'12px', color:'#fff', fontWeight:600, cursor:'pointer' },
    field: { marginBottom:'1rem' }
};