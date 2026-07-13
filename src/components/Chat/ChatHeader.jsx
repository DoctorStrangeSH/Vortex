export function ChatHeader({ chat, user, other, avatarColor, otherStatus, isTyping, isMobile, onBack, onShowGallery, onShowTheme, onShowStatus, onExport }) {
    const formatLastSeen = (date) => {
        if (!date) return '';
        const diff = Math.floor((new Date() - date) / 1000);
        if (diff < 60) return 'только что';
        if (diff < 3600) return `${Math.floor(diff / 60)} мин`;
        if (diff < 86400) return `${Math.floor(diff / 3600)} ч`;
        return date.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit' });
    };

    return (
        <div style={s.header}>
            <div style={s.left}>
                {isMobile && <button onClick={onBack} style={s.backBtn}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg></button>}
                <div style={{ ...s.avatar, background: avatarColor }}>{other.name.charAt(0).toUpperCase()}</div>
                <div style={s.info}>
                    <div style={s.name}>{other.name}</div>
                    <div style={s.status}>
                        {isTyping ? <span style={{ color: 'var(--vortex-secondary)', fontStyle: 'italic' }}>печатает...</span> :
                        <><span style={{ ...s.dot, background: otherStatus.isOnline ? 'var(--vortex-secondary)' : 'var(--text-tertiary)' }}/>{otherStatus.isOnline ? 'В сети' : otherStatus.lastSeen ? `Был(а) ${formatLastSeen(otherStatus.lastSeen)}` : 'Не в сети'}</>}
                    </div>
                </div>
            </div>
            <div style={s.actions}>
                <button style={s.btn} onClick={onShowTheme} title="Тема">🎨</button>
                <button style={s.btn} onClick={onShowStatus} title="Статус">😊</button>
                <button style={s.btn} onClick={onShowGallery} title="Галерея">🖼️</button>
                <button style={s.btn} onClick={onExport} title="Экспорт">📤</button>
            </div>
        </div>
    );
}

const s = {
    header: { display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0.6rem 1rem', borderBottom:'1px solid var(--border-subtle)', background:'rgba(10,10,20,0.9)', backdropFilter:'blur(20px)', zIndex:10 },
    left: { display:'flex', alignItems:'center', gap:'0.6rem' },
    avatar: { width:'38px', height:'38px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:700, fontSize:'1rem', flexShrink:0 },
    info: { display:'flex', flexDirection:'column' },
    name: { fontWeight:600, fontSize:'0.95rem' },
    status: { fontSize:'0.75rem', color:'var(--text-secondary)', display:'flex', alignItems:'center', gap:'5px' },
    dot: { width:'7px', height:'7px', borderRadius:'50%', display:'inline-block' },
    backBtn: { background:'none', border:'none', color:'var(--text-primary)', cursor:'pointer', padding:'2px' },
    actions: { display:'flex', gap:'4px' },
    btn: { width:'36px', height:'36px', borderRadius:'50%', background:'transparent', border:'none', color:'var(--text-secondary)', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.1rem' }
};