import { Icon } from '../UI/Icon';
export function ChatHeader({ chat, user, other, avatarColor, otherStatus, isTyping, isMobile, onBack, onShowGallery, onShowTheme, onShowStatus, onShowMembers, onExport }) {
    const formatLastSeen = (date) => {
        if (!date) return '';
        const diff = Math.floor((new Date() - date) / 1000);
        if (diff < 60) return 'только что';
        if (diff < 3600) return `${Math.floor(diff / 60)} мин`;
        if (diff < 86400) return `${Math.floor(diff / 3600)} ч`;
        return date.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit' });
    };

    return (
        <div class="vortex-chat-header" style={s.header}>
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
                {chat.type === 'group' && <button type="button" class="vortex-icon-button" style={s.btn} onClick={onShowMembers} title="Участники группы" aria-label="Участники группы"><Icon name="users" /></button>}
                <button type="button" class="vortex-icon-button" style={s.btn} onClick={onShowTheme} title="Оформление" aria-label="Настройки оформления"><Icon name="palette" /></button>
                <button type="button" class="vortex-icon-button" style={s.btn} onClick={onShowStatus} title="Статус" aria-label="Настроить статус"><Icon name="smile" /></button>
                <button type="button" class="vortex-icon-button" style={s.btn} onClick={onShowGallery} title="Галерея" aria-label="Открыть галерею"><Icon name="image" /></button>
                <button type="button" class="vortex-icon-button" style={s.btn} onClick={onExport} title="Экспорт" aria-label="Экспортировать чат"><Icon name="download" /></button>
            </div>
        </div>
    );
}

const s = {
    header: { display:'flex', alignItems:'center', justifyContent:'space-between', minHeight:'74px', padding:'0.75rem 1.25rem', borderBottom:'1px solid var(--border-subtle)', background:'var(--surface-glass)', backdropFilter:'blur(20px)', zIndex:10 },
    left: { display:'flex', alignItems:'center', gap:'0.6rem' },
    avatar: { width:'44px', height:'44px', borderRadius:'16px', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:700, fontSize:'1rem', flexShrink:0 },
    info: { display:'flex', flexDirection:'column' },
    name: { fontWeight:750, fontSize:'1rem' },
    status: { fontSize:'0.75rem', color:'var(--text-secondary)', display:'flex', alignItems:'center', gap:'5px' },
    dot: { width:'7px', height:'7px', borderRadius:'50%', display:'inline-block' },
    backBtn: { background:'none', border:'none', color:'var(--text-primary)', cursor:'pointer', padding:'2px' },
    actions: { display:'flex', gap:'4px' },
    btn: { width:'39px', height:'39px', borderRadius:'12px', background:'transparent', border:'none', color:'var(--text-secondary)', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.1rem' }
};
