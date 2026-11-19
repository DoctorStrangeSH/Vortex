import { useState, useRef, useEffect } from 'preact/hooks';
import { Icon } from '../UI/Icon';

const options = [
    { icon: 'user', title: 'Личный чат', subtitle: 'Найти собеседника', color: 'var(--accent-primary)' },
    { icon: 'users', title: 'Новая группа', subtitle: 'Собрать участников', color: '#35bfaa' },
    { icon: 'broadcast', title: 'Новый канал', subtitle: 'Поделиться новостями', color: '#f0a25b' }
];

export function NewChatFAB({ onPersonalChat, onGroupChat, onChannel }) {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);
    useEffect(() => {
        if (!isOpen) return;
        const onPointer = (event) => {
            if (!menuRef.current?.contains(event.target) && !buttonRef.current?.contains(event.target)) setIsOpen(false);
        };
        const onKey = (event) => {
            if (event.key === 'Escape') { setIsOpen(false); buttonRef.current?.focus(); }
        };
        document.addEventListener('pointerdown', onPointer);
        document.addEventListener('keydown', onKey);
        return () => { document.removeEventListener('pointerdown', onPointer); document.removeEventListener('keydown', onKey); };
    }, [isOpen]);
    const handlers = [onPersonalChat, onGroupChat, onChannel];
    return <div style={styles.anchor}>
        <button ref={buttonRef} type="button" className="vortex-action-fab" aria-label={isOpen ? 'Закрыть меню создания' : 'Создать чат, группу или канал'} aria-expanded={isOpen} aria-haspopup="menu" onClick={() => setIsOpen(v => !v)} style={styles.fab}>
            <span style={{display:'flex', transition:'transform 180ms ease', transform:isOpen ? 'rotate(45deg)' : 'none'}}><Icon name="plus" size={26} /></span>
        </button>
        {isOpen && <div ref={menuRef} role="menu" aria-label="Создать" style={styles.menu}>
            <div style={styles.eyebrow}>НОВОЕ В VORTEX</div>
            {options.map((option, i) => <button key={option.title} type="button" role="menuitem" className="vortex-menu-item" onClick={() => { setIsOpen(false); handlers[i]?.(); }} style={styles.item}>
                <span style={{...styles.icon, color:option.color}}><Icon name={option.icon} size={21} /></span>
                <span style={styles.copy}><span style={styles.title}>{option.title}</span><span style={styles.subtitle}>{option.subtitle}</span></span>
                <span aria-hidden="true" style={styles.arrow}>›</span>
            </button>)}
        </div>}
    </div>;
}
const styles = {
    anchor:{position:'absolute',bottom:20,right:20,zIndex:35},
    fab:{width:56,height:56,display:'flex',alignItems:'center',justifyContent:'center',borderRadius:19,border:'1px solid rgba(255,255,255,.16)',background:'var(--gradient-brand)',color:'#fff',boxShadow:'0 12px 34px rgba(99,71,201,.35)',cursor:'pointer'},
    menu:{position:'absolute',bottom:70,right:0,width:270,maxWidth:'calc(100vw - 34px)',padding:9,border:'1px solid var(--border-default)',borderRadius:20,background:'var(--bg-secondary)',boxShadow:'0 22px 60px rgba(4,6,25,.44)',animation:'menuPopup 180ms ease'},
    eyebrow:{fontSize:10,letterSpacing:'0.15em',fontWeight:750,color:'var(--text-tertiary)',padding:'11px 13px 7px'},
    item:{display:'flex',gap:12,width:'100%',alignItems:'center',padding:'11px 12px',border:0,borderRadius:13,background:'transparent',color:'var(--text-primary)',fontFamily:'inherit',cursor:'pointer',textAlign:'left'},
    icon:{width:43,height:43,display:'flex',alignItems:'center',justifyContent:'center',borderRadius:13,background:'var(--bg-tertiary)',flexShrink:0},
    copy:{display:'flex',flexDirection:'column',gap:4,flex:1,minWidth:0},
    title:{fontSize:14,fontWeight:700},
    subtitle:{fontSize:12,color:'var(--text-tertiary)'},
    arrow:{fontSize:24,color:'var(--text-tertiary)'}
};