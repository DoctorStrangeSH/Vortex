import { useEffect, useState } from 'preact/hooks';
import { Icon } from '../UI/Icon';
import { userService } from '../../services/userService';
import { chatService } from '../../services/chatService';
import { channelService } from '../../services/channelService';
import { resolveGroupParticipants } from '../../services/groupParticipantSelection.js';

export function NewChatModal({ user, onClose, onChatCreated, mode = 'personal' }) {
    const [searchInput, setSearchInput] = useState('');
    const [groupName, setGroupName] = useState('');
    const [groupParticipants, setGroupParticipants] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [step, setStep] = useState(mode === 'group' ? 'groupForm' : mode === 'channel' ? 'channelForm' : 'search');

    useEffect(() => {
        const onKey = event => { if (event.key === 'Escape' && !loading) onClose?.(); };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [loading, onClose]);

    const handleSearch = async () => {
        if (loading) return;
        if (!searchInput.trim()) { setError('Введите @username'); return; }
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
        if (loading || !searchResult) return;
        setError('');
        setLoading(true);
        try { const id = await chatService.createChat(user, searchResult); onChatCreated?.(id); onClose?.(); }
        catch (err) { setError(err.message); }
        finally { setLoading(false); }
    };

    const handleCreateGroup = async () => {
        const name = groupName.trim();
        if (!name) { setError('Введите название группы'); return; }
        if (loading) return;
        setLoading(true);
        setError('');
        try {
            const selection = await resolveGroupParticipants(groupParticipants, user.uid, username => userService.findUser(username));
            if (selection.reason) { setError(selection.reason); return; }
            const id = await chatService.createGroupChat(user, selection.ids, name);
            onChatCreated?.(id); onClose?.();
        } catch (err) { setError(err.message); }
        finally { setLoading(false); }
    };

    const handleCreateChannel = async () => {
        if (loading) return;
        setError('');
        const name = groupName.trim();
        if (!name) { setError('Введите название канала'); return; }
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
        <div class="vortex-dialog-overlay" style={st.overlay} onClick={() => { if (!loading) onClose?.(); }}>
            <div class="vortex-dialog-surface vortex-newchat-dialog" style={st.modal} role="dialog" aria-modal="true" aria-labelledby="new-chat-heading" onClick={e => e.stopPropagation()}>
                <div style={st.header}>
                    <div><div style={st.eyebrow}>VORTEX · НОВОЕ</div><h3 id="new-chat-heading" style={st.title}>{mode === 'group' ? 'Новая группа' : mode === 'channel' ? 'Новый канал' : 'Новый чат'}</h3></div>
                    <button type="button" onClick={onClose} disabled={loading} aria-label="Закрыть окно" style={st.closeBtn}><Icon name="close" size={20}/></button>
                </div>
                <div style={st.body}>
                    {step === 'search' && (
                        <>
                            <p style={st.hint}>Начните общение: найдите человека по имени пользователя. Email останется приватным.</p>
                            <div style={st.row}><input value={searchInput} onInput={e => { setSearchInput(e.target.value); setError(''); }} onKeyDown={e => e.key==='Enter' && handleSearch()} placeholder="@username" aria-label="Имя пользователя" style={st.input} autoFocus /><button onClick={handleSearch} disabled={loading || !searchInput.trim()} style={st.btn}>{loading?'Ищем…':'Найти'}</button></div>
                            {error && <p style={st.error} role="alert">{error}</p>}
                        </>
                    )}
                    {step === 'result' && searchResult && (
                        <>
                            <div style={st.userCard}>
                                <div style={{...st.avatar, background: getAvatarColor(searchResult.displayName || searchResult.username || '?')}}>{(searchResult.displayName || searchResult.username || '?').charAt(0).toUpperCase()}</div>
                                <div><div style={st.userName}>{searchResult.displayName || 'Без имени'}</div><div style={st.userEmail}>@{searchResult.username || 'без username'}</div></div>
                            </div>
                            {error && <p style={st.error} role="alert">{error}</p>}
                            <div style={st.actions}><button onClick={() => { setError(''); setStep('search'); }} style={st.backBtn} disabled={loading}>← Назад</button><button onClick={handleCreatePersonal} disabled={loading} style={st.createBtn}>{loading?'Создаём…':'Начать диалог'}</button></div>
                        </>
                    )}
                    {step === 'groupForm' && (
                        <>
                            <div style={st.field}><label for="vortex-group-name">Название группы</label><input value={groupName} onInput={e => setGroupName(e.target.value)} id="vortex-group-name" placeholder="Например, Наша команда" maxLength={80} style={st.input} autoFocus /></div>
                            <div style={st.field}><label for="vortex-group-members">Участники · через запятую</label><input value={groupParticipants} onInput={e => setGroupParticipants(e.target.value)} id="vortex-group-members" placeholder="@anna, @max" style={st.input} /></div>
                            {error && <p style={st.error} role="alert">{error}</p>}
                            <div style={st.actions}><button onClick={onClose} style={st.backBtn} disabled={loading}>Отмена</button><button onClick={handleCreateGroup} disabled={loading} style={st.createBtn}>{loading?'Создаём…':'Создать группу'}</button></div>
                        </>
                    )}
                    {step === 'channelForm' && (
                        <>
                            <div style={st.field}><label for="vortex-channel-name">Название канала</label><input value={groupName} onInput={e => setGroupName(e.target.value)} id="vortex-channel-name" placeholder="Например, Новости команды" maxLength={80} style={st.input} autoFocus /></div>
                            {error && <p style={st.error} role="alert">{error}</p>}
                            <div style={st.actions}><button onClick={onClose} style={st.backBtn} disabled={loading}>Отмена</button><button onClick={handleCreateChannel} disabled={loading} style={st.createBtn}>{loading?'Создаём…':'Создать канал'}</button></div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

const st = {
    overlay: { position:'fixed', inset:0, background:'rgba(2,4,16,.7)', backdropFilter:'blur(8px)', display:'flex', alignItems:'center', justifyContent:'center', padding:'16px', zIndex:1000 },
    modal: { background:'var(--bg-secondary)', border:'1px solid var(--border-default)', borderRadius:'24px', width:'480px', maxWidth:'100%', maxHeight:'calc(100vh - 32px)', overflowY:'auto', boxShadow:'0 32px 100px rgba(0,0,0,.38)' },
    header: { display:'flex', justifyContent:'space-between', alignItems:'center', gap:12, padding:'1.7rem 1.7rem 1.25rem', borderBottom:'1px solid var(--border-subtle)' },
    eyebrow:{fontSize:10,letterSpacing:'0.16em',fontWeight:800,color:'var(--text-tertiary)',marginBottom:8},
    title:{fontSize:22,lineHeight:1.2,fontWeight:800,color:'var(--text-primary)',margin:0},
    closeBtn: { background:'var(--bg-tertiary)', border:'1px solid var(--border-subtle)', borderRadius:12, width:36,height:36,display:'flex',alignItems:'center',justifyContent:'center', color:'var(--text-secondary)', cursor:'pointer' },
    body: { padding:'1.7rem' },
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
    field: { marginBottom:'1.2rem',display:'flex',flexDirection:'column',gap:9,fontSize:13,fontWeight:650,color:'var(--text-secondary)' }
};
