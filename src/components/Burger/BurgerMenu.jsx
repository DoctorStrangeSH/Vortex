import { useEffect, useState } from 'preact/hooks';
import { themeService } from '../../services/themeService';
import { Icon } from '../UI/Icon';

export function BurgerMenu({ user, onLogout, onProfile, onContacts, onTasks, onTheme }) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentTheme, setCurrentTheme] = useState(themeService.get());
    useEffect(() => themeService.onChange(() => setCurrentTheme(themeService.get())), []);
    useEffect(() => {
        if (!isOpen) return;
        const onKey = e => { if (e.key === 'Escape') setIsOpen(false); };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [isOpen]);
    const choose = fn => { setIsOpen(false); fn?.(); };
    const toggleTheme = () => themeService.toggle();
    return <>
        <button type="button" aria-label="Открыть меню" aria-expanded={isOpen} aria-controls="vortex-main-menu" onClick={() => setIsOpen(true)} style={styles.toggle}><Icon name="menu" size={21}/></button>
        {isOpen && <div onClick={() => setIsOpen(false)} style={styles.scrim} aria-hidden="true" />}
        <nav id="vortex-main-menu" aria-label="Главное меню" aria-hidden={!isOpen} inert={!isOpen ? true : undefined} style={{...styles.panel,transform:isOpen ? 'translateX(0)' : 'translateX(-105%)'}}>
            <div style={styles.heading}>
                <div><div style={styles.eyebrow}>VORTEX / МЕНЮ</div><h2 style={styles.headerTitle}>Ваше пространство</h2></div>
                <button type="button" aria-label="Закрыть меню" onClick={() => setIsOpen(false)} style={styles.close}><Icon name="close"/></button>
            </div>
            <div style={styles.profile}>
                <div style={styles.avatar}>{(user?.displayName || user?.email || '?').charAt(0).toUpperCase()}</div>
                <div style={{minWidth:0}}><div style={styles.profileName}>{user?.displayName || 'Мой аккаунт'}</div><div style={styles.profileEmail}>{user?.email || 'Vortex'}</div></div>
            </div>
            <div style={styles.list}>
                <MenuItem icon="user" title="Мой профиль" subtitle="Личные данные" onClick={() => choose(onProfile)} />
                <MenuItem icon="users" title="Контакты" subtitle="Люди и общение" onClick={() => choose(onContacts)} />
                <MenuItem icon="tasks" title="Задачи" subtitle="Ваши дела" onClick={() => choose(onTasks)} />
                <div style={styles.divider}/>
                <MenuItem icon={currentTheme === 'dark' ? 'moon' : 'sun'} title={currentTheme === 'dark' ? 'Тёмная тема' : 'Светлая тема'} subtitle="Переключить оформление" onClick={toggleTheme}/>
                <MenuItem icon="palette" title="Оформление" subtitle="Темы и цвета Vortex" onClick={() => choose(onTheme)} />
                <div style={styles.divider}/>
                <MenuItem icon="logout" title="Выйти из аккаунта" subtitle="Завершить сеанс" danger onClick={() => choose(onLogout)}/>
            </div>
            <div style={styles.footer}>VORTEX <span style={{color:'var(--text-tertiary)',fontWeight:400}}>· Общение без границ</span></div>
        </nav>
    </>;
}
function MenuItem({icon,title,subtitle,onClick,danger=false}) {
    return <button className="vortex-menu-item" type="button" onClick={onClick} style={{...styles.item,color:danger ? 'var(--vortex-danger)' : 'var(--text-primary)'}}>
        <span style={{...styles.itemIcon,background:danger ? 'rgba(239,68,68,.1)' : 'var(--bg-tertiary)'}}><Icon name={icon} size={21}/></span>
        <span style={{display:'flex',flexDirection:'column',gap:4,minWidth:0}}><span style={{fontWeight:650,fontSize:14}}>{title}</span><span style={{fontSize:12,color:'var(--text-tertiary)'}}>{subtitle}</span></span>
    </button>;
}
const styles={
    toggle:{height:40,width:40,borderRadius:13,border:'1px solid var(--border-subtle)',background:'var(--bg-tertiary)',color:'var(--text-primary)',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer'},
    scrim:{position:'fixed',inset:0,zIndex:200,background:'rgba(2,4,16,.58)',backdropFilter:'blur(4px)'},
    panel:{position:'fixed',top:0,left:0,bottom:0,zIndex:201,width:'min(350px, 88vw)',display:'flex',flexDirection:'column',background:'var(--bg-secondary)',borderRight:'1px solid var(--border-default)',boxShadow:'18px 0 60px rgba(0,0,0,.2)',transition:'transform 230ms ease'},
    heading:{display:'flex',alignItems:'center',justifyContent:'space-between',gap:12,padding:'30px 24px 23px'},
    eyebrow:{fontSize:10,color:'var(--text-tertiary)',fontWeight:800,letterSpacing:'0.15em'},
    headerTitle:{fontSize:20,fontWeight:750,margin:'8px 0 0',color:'var(--text-primary)'},
    close:{width:36,height:36,flexShrink:0,border:'1px solid var(--border-subtle)',borderRadius:12,background:'var(--bg-tertiary)',color:'var(--text-secondary)',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer'},
    profile:{display:'flex',alignItems:'center',gap:13,padding:'16px',margin:'0 16px 16px',borderRadius:17,border:'1px solid var(--border-subtle)',background:'var(--bg-tertiary)'},
    avatar:{height:45,width:45,flexShrink:0,borderRadius:15,background:'var(--gradient-brand)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:20,fontWeight:800,color:'#fff'},
    profileName:{fontSize:14,fontWeight:750,color:'var(--text-primary)',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'},
    profileEmail:{fontSize:12,color:'var(--text-tertiary)',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap',marginTop:4},
    list:{flex:1,overflowY:'auto',padding:'0 14px'},
    item:{width:'100%',display:'flex',alignItems:'center',gap:13,padding:'12px',background:'transparent',border:0,borderRadius:13,textAlign:'left',fontFamily:'inherit',cursor:'pointer'},
    itemIcon:{width:43,height:43,flexShrink:0,borderRadius:13,display:'flex',alignItems:'center',justifyContent:'center'},
    divider:{height:1,background:'var(--border-subtle)',margin:'12px 10px'},
    footer:{padding:'20px 25px',fontSize:11,fontWeight:850,letterSpacing:'0.1em',color:'var(--text-secondary)',borderTop:'1px solid var(--border-subtle)'}
};
