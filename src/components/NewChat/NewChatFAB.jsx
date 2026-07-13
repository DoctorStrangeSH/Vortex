import { useState, useRef, useEffect } from 'preact/hooks';

export function NewChatFAB({ onPersonalChat, onGroupChat, onChannel }) {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const handleClick = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target) && 
                buttonRef.current && !buttonRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);

    return (
        <div style={{
            position: 'absolute',
            bottom: '20px',
            right: '20px',
            zIndex: 30
        }}>
            <button
                ref={buttonRef}
                onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen); }}
                style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'var(--gradient-brand)',
                    border: 'none',
                    color: 'white',
                    fontSize: '28px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 24px rgba(124, 58, 237, 0.4)',
                    transition: 'all 0.3s ease',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    lineHeight: 1
                }}
            >
                +
            </button>

            {isOpen && (
                <div ref={menuRef} style={{
                    position: 'absolute',
                    bottom: '70px',
                    right: '0',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-default)',
                    borderRadius: '16px',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
                    padding: '8px',
                    minWidth: '230px',
                    animation: 'menuPopup 0.2s ease'
                }}>
                    <FABItem icon="👤" color="var(--gradient-brand)" title="Личный чат" subtitle="Начать общение" onClick={() => { setIsOpen(false); onPersonalChat?.(); }} />
                    <FABItem icon="👥" color="var(--gradient-success)" title="Группа" subtitle="Создать группу" onClick={() => { setIsOpen(false); onGroupChat?.(); }} />
                    <FABItem icon="📢" color="linear-gradient(135deg, #F59E0B, #EF4444)" title="Канал" subtitle="Создать канал (скоро)" onClick={() => { setIsOpen(false); onChannel?.(); }} />
                </div>
            )}
        </div>
    );
}

function FABItem({ icon, color, title, subtitle, onClick }) {
    return (
        <button onClick={onClick} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            width: '100%',
            padding: '12px 16px',
            background: 'transparent',
            border: 'none',
            borderRadius: '12px',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            fontSize: '0.9rem',
            textAlign: 'left',
            transition: 'background 0.15s',
            fontFamily: 'inherit'
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-hover)'}
        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
            <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                fontSize: '1.2rem'
            }}>{icon}</div>
            <div>
                <div style={{ fontWeight: 600 }}>{title}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', marginTop: '2px' }}>{subtitle}</div>
            </div>
        </button>
    );
}