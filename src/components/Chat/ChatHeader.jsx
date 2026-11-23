import { Icon } from '../UI/Icon';
import { useEffect, useRef, useState } from 'preact/hooks';
import { getNextMenuItemIndex } from '../../utils/menuNavigation.js';
export function ChatHeader({ chat, user, other, avatarColor, otherStatus, isTyping, isMobile, onBack, onShowInfo, onShowGallery, onShowTheme, onShowStatus, onShowMembers, onExport }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const menuButtonRef = useRef(null);

    useEffect(() => { setMenuOpen(false); }, [chat.id, isMobile]);
    useEffect(() => {
        if (!menuOpen) return;
        menuRef.current?.querySelector('[role="menuitem"]')?.focus();
        const dismissOutside = event => {
            if (!menuRef.current?.contains(event.target) && !menuButtonRef.current?.contains(event.target)) setMenuOpen(false);
        };
        const dismissEscape = event => {
            if (event.key === 'Escape') { event.preventDefault(); menuButtonRef.current?.focus(); setMenuOpen(false); }
        };
        document.addEventListener('pointerdown', dismissOutside);
        document.addEventListener('keydown', dismissEscape);
        return () => {
            document.removeEventListener('pointerdown', dismissOutside);
            document.removeEventListener('keydown', dismissEscape);
        };
    }, [menuOpen]);

    const runAction = callback => { setMenuOpen(false); callback?.(); };
    const handleMenuKeyDown = event => {
        const items = [...event.currentTarget.querySelectorAll('[role="menuitem"]:not([disabled])')];
        const current = items.indexOf(event.target.closest('[role="menuitem"]'));
        const next = getNextMenuItemIndex(event.key, current, items.length);
        if (next < 0) return;
        event.preventDefault();
        items[next]?.focus();
    };
    const extraActions = [
        ...(chat.type === 'group' ? [{ icon: 'users', title: 'Участники группы', handler: onShowMembers }] : []),
        { icon: 'palette', title: 'Оформление', handler: onShowTheme },
        { icon: 'smile', title: 'Статус', handler: onShowStatus },
        { icon: 'download', title: 'Экспорт переписки', handler: onExport }
    ];
    const formatLastSeen = (date) => {
        if (!date) return '';
        const diff = Math.floor((new Date() - date) / 1000);
        if (diff < 60) return 'только что';
        if (diff < 3600) return `${Math.floor(diff / 60)} мин`;
        if (diff < 86400) return `${Math.floor(diff / 3600)} ч`;
        return date.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit' });
    };

    return (
        <div class="vortex-chat-header" style={{ ...s.header, position: 'relative' }}>
            <div style={s.left}>
                {isMobile && <button type="button" onClick={onBack} aria-label="Назад к списку чатов" class="vortex-icon-button" style={s.backBtn}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg></button>}
                <div style={{ ...s.avatar, background: avatarColor }}>{other.name.charAt(0).toUpperCase()}</div>
                <div style={s.info}>
                    <div class="vortex-chat-heading" style={s.name} title={other.name}>{other.name}</div>
                    <div style={s.status}>
                        {isTyping ? <span style={{ color: 'var(--vortex-secondary)', fontStyle: 'italic' }}>печатает...</span> :
                        <><span style={{ ...s.dot, background: otherStatus.isOnline ? 'var(--vortex-secondary)' : 'var(--text-tertiary)' }}/>{otherStatus.isOnline ? 'В сети' : otherStatus.lastSeen ? `Был(а) ${formatLastSeen(otherStatus.lastSeen)}` : 'Не в сети'}</>}
                    </div>
                </div>
            </div>
            <div class="vortex-header-actions" style={s.actions}>
                <button type="button" class="vortex-icon-button" style={s.btn} onClick={onShowInfo} title="Информация о чате" aria-label="Информация о чате"><Icon name="info" /></button>
                <button type="button" class="vortex-icon-button" style={s.btn} onClick={onShowGallery} title="Галерея" aria-label="Открыть галерею"><Icon name="image" /></button>
                {!isMobile && extraActions.map(action => <button key={action.title} type="button" class="vortex-icon-button" style={s.btn} onClick={action.handler} title={action.title} aria-label={action.title}><Icon name={action.icon} /></button>)}
                {isMobile && <button ref={menuButtonRef} type="button" class="vortex-icon-button" style={s.btn} onClick={() => setMenuOpen(value => !value)} aria-label="Дополнительные действия" aria-expanded={menuOpen} aria-controls="vortex-header-menu"><Icon name="menu" /></button>}
            </div>
            {isMobile && menuOpen && <div ref={menuRef} id="vortex-header-menu" class="vortex-header-menu" role="menu" aria-label="Дополнительные действия с чатом" onKeyDown={handleMenuKeyDown}>
                {extraActions.map(action => <button key={action.title} type="button" role="menuitem" class="vortex-header-menu-item" onClick={() => runAction(action.handler)}><Icon name={action.icon} size={18} /><span>{action.title}</span></button>)}
            </div>}
        </div>
    );
}

const s = {
    header: { display:'flex', alignItems:'center', justifyContent:'space-between', width:'100%', minWidth:0, boxSizing:'border-box', minHeight:'74px', padding:'0.75rem 1.25rem', borderBottom:'1px solid var(--border-subtle)', background:'var(--surface-glass)', backdropFilter:'blur(20px)', zIndex:10 },
    left: { display:'flex', alignItems:'center', gap:'0.6rem', minWidth:0, flex:'1 1 auto' },
    avatar: { width:'44px', height:'44px', borderRadius:'16px', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:700, fontSize:'1rem', flexShrink:0 },
    info: { display:'flex', flexDirection:'column', minWidth:0 },
    name: { fontWeight:750, fontSize:'1rem' },
    status: { fontSize:'0.75rem', color:'var(--text-secondary)', display:'flex', alignItems:'center', gap:'5px' },
    dot: { width:'7px', height:'7px', borderRadius:'50%', display:'inline-block' },
    backBtn: { background:'none', border:'none', color:'var(--text-primary)', cursor:'pointer', padding:'2px' },
    actions: { display:'flex', gap:'4px' },
    btn: { width:'39px', height:'39px', borderRadius:'12px', background:'transparent', border:'none', color:'var(--text-secondary)', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.1rem' }
};
