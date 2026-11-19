import { useEffect, useRef, useState } from 'preact/hooks';
import { userService } from '../../services/userService';
import { chatService } from '../../services/chatService';
import { createSearchRequestTracker } from '../../services/searchRequestTracker';
import { Icon } from '../UI/Icon';

export function ContactsModal({ user, onClose, onChatCreated }) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [state, setState] = useState('idle');
    const [error, setError] = useState('');
    const [creatingId, setCreatingId] = useState(null);
    const tracker = useRef(null);
    if (!tracker.current) tracker.current = createSearchRequestTracker();
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
        const onKey = event => { if (event.key === 'Escape' && !creatingId) onClose?.(); };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [onClose, creatingId]);
    useEffect(() => () => tracker.current.dispose(), []);

    useEffect(() => {
        const requestId = tracker.current.issue();
        setResults([]);
        setError('');
        if (query.trim().replace(/^@/, '').length < 2) {
            setState('idle');
            return;
        }
        setState('loading');
        const timer = setTimeout(async () => {
            try {
                const people = await userService.searchUsers(query.trim());
                if (!tracker.current.isCurrent(requestId)) return;
                setResults(people.filter(person => person.uid !== user.uid));
                setState('ready');
            } catch {
                if (!tracker.current.isCurrent(requestId)) return;
                setError('Не удалось загрузить пользователей. Проверьте соединение.');
                setState('error');
            }
        }, 300);
        return () => clearTimeout(timer);
    }, [query, user.uid]);

    const startChat = async person => {
        if (creatingId) return;
        setCreatingId(person.uid);
        setError('');
        try {
            const id = await chatService.createChat(user, person);
            onChatCreated?.(id);
            onClose?.();
        } catch {
            setError('Не удалось открыть чат. Попробуйте снова.');
        } finally {
            setCreatingId(null);
        }
    };

    return <div class="vortex-dialog-overlay" style={styles.overlay} onClick={() => { if (!creatingId) onClose?.(); }}>
        <div class="vortex-dialog-surface vortex-contacts-dialog" role="dialog" aria-modal="true" aria-labelledby="vortex-contacts-title" style={styles.modal} onClick={event => event.stopPropagation()}>
            <header style={styles.header}>
                <div><div style={styles.eyebrow}>VORTEX / ЛЮДИ</div><h2 id="vortex-contacts-title" style={styles.title}>Найти собеседника</h2><p style={styles.description}>Ищите людей по @username. Email остаётся приватным.</p></div>
                <button type="button" aria-label="Закрыть контакты" disabled={Boolean(creatingId)} onClick={onClose} style={styles.close}><Icon name="close" size={19}/></button>
            </header>
            <div style={styles.body}>
                <div style={styles.searchBox}>
                    <Icon name="search" size={19}/>
                    <input ref={inputRef} value={query} onInput={e => setQuery(e.currentTarget.value)} aria-label="Поиск по имени пользователя" placeholder="Начните вводить @username" style={styles.input}/>
                    {query && <button type="button" aria-label="Очистить поиск" onClick={() => setQuery('')} style={styles.clear}>×</button>}
                </div>
                {error && <div role="alert" style={styles.error}>{error}</div>}
                <div aria-live="polite" style={styles.results}>
                    {state === 'idle' && <div style={styles.empty}><span style={styles.emptyIcon}><Icon name="users" size={25}/></span><strong>Люди ближе, чем кажется</strong><span>Введите хотя бы 2 символа имени пользователя.</span></div>}
                    {state === 'loading' && <div style={styles.empty}>Ищем пользователей…</div>}
                    {state === 'ready' && results.length === 0 && <div style={styles.empty}>Никого не нашли. Попробуйте другой @username.</div>}
                    {state === 'ready' && results.length > 0 && <>
                        <div style={styles.resultsLabel}>РЕЗУЛЬТАТЫ · {results.length}</div>
                        {results.map(person => {
                            const name = person.displayName || person.username || 'Пользователь';
                            return <button type="button" key={person.uid} disabled={Boolean(creatingId)} onClick={() => startChat(person)} className="vortex-menu-item" style={styles.person}>
                                <span style={styles.avatar}>{name.charAt(0).toUpperCase()}</span>
                                <span style={styles.personText}><strong style={styles.name}>{name}</strong><span style={styles.username}>@{person.username || 'без имени'}</span></span>
                                <span style={styles.action}><Icon name={creatingId === person.uid ? 'loader' : 'message'} size={19}/></span>
                            </button>;
                        })}
                    </>}
                </div>
            </div>
        </div>
    </div>;
}
const styles = {
    overlay:{position:'fixed',inset:0,zIndex:1000,background:'rgba(2,4,16,.72)',backdropFilter:'blur(8px)',display:'flex',alignItems:'center',justifyContent:'center',padding:16},
    modal:{background:'var(--bg-secondary)',border:'1px solid var(--border-default)',borderRadius:24,width:510,maxWidth:'100%',maxHeight:'calc(100vh - 32px)',overflowY:'auto',boxShadow:'0 30px 90px rgba(0,0,0,.45)'},
    header:{padding:'26px 27px 21px',display:'flex',justifyContent:'space-between',gap:12,borderBottom:'1px solid var(--border-subtle)'},
    eyebrow:{fontSize:10,fontWeight:800,letterSpacing:'.15em',color:'var(--text-tertiary)',marginBottom:8},
    title:{fontSize:23,fontWeight:800,margin:0,color:'var(--text-primary)'},
    description:{fontSize:13,lineHeight:1.5,color:'var(--text-secondary)',margin:'9px 0 0'},
    close:{width:36,height:36,borderRadius:12,background:'var(--bg-tertiary)',border:'1px solid var(--border-subtle)',color:'var(--text-secondary)',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',flexShrink:0},
    body:{padding:'22px 25px 26px'},
    searchBox:{display:'flex',alignItems:'center',gap:10,background:'var(--bg-tertiary)',border:'1px solid var(--border-default)',borderRadius:14,color:'var(--text-tertiary)',padding:'0 13px'},
    input:{flex:1,minWidth:0,background:'transparent',border:0,outline:0,color:'var(--text-primary)',fontSize:14,fontFamily:'inherit',padding:'15px 0'},
    clear:{background:'none',border:0,color:'var(--text-secondary)',fontSize:22,cursor:'pointer'},
    results:{maxHeight:'min(350px, 50vh)',overflowY:'auto',marginTop:15},
    resultsLabel:{fontSize:10,fontWeight:800,letterSpacing:'.13em',color:'var(--text-tertiary)',padding:'10px 9px'},
    person:{display:'flex',gap:13,alignItems:'center',width:'100%',padding:12,border:0,background:'transparent',borderRadius:14,color:'var(--text-primary)',textAlign:'left',cursor:'pointer',fontFamily:'inherit'},
    avatar:{width:46,height:46,borderRadius:15,display:'flex',alignItems:'center',justifyContent:'center',background:'var(--gradient-brand)',color:'#fff',fontWeight:800,fontSize:19,flexShrink:0},
    personText:{minWidth:0,flex:1,display:'flex',flexDirection:'column',gap:5},
    name:{fontSize:14,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'},
    username:{fontSize:12,color:'var(--text-tertiary)',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'},
    action:{width:35,height:35,borderRadius:11,background:'var(--bg-tertiary)',color:'var(--text-secondary)',display:'flex',alignItems:'center',justifyContent:'center'},
    empty:{minHeight:195,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',gap:10,color:'var(--text-tertiary)',fontSize:13,lineHeight:1.4},
    emptyIcon:{display:'flex',alignItems:'center',justifyContent:'center',height:54,width:54,borderRadius:18,background:'var(--bg-tertiary)',color:'var(--text-secondary)'},
    error:{marginTop:13,padding:12,borderRadius:12,background:'rgba(239,68,68,.09)',color:'var(--vortex-danger)',fontSize:13}
};