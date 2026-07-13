import { useState, useRef, useEffect } from 'preact/hooks';

export function NewChatFAB({ onPersonalChat, onGroupChat, onChannel }) {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    // Закрытие при клике вне
    useEffect(() => {
        const handleClick = (e) => {
            if (
                menuRef.current && 
                !menuRef.current.contains(e.target) &&
                !buttonRef.current.contains(e.target)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);

    const handleToggle = (e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    };

    const handleItemClick = (callback) => {
        setIsOpen(false);
        callback?.();
    };

    return (
        <div style={{
            position: 'absolute',
            bottom: '20px',
            right: '20px',
            zIndex: 30
        }}>
            {/* Кнопка "+" */}
            <button
                ref={buttonRef}
                onClick={handleToggle}
                style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'var(--gradient-brand)',
                    border: 'none',
                    color: 'white',
                    fontSize: '1.8rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 24px rgba(124, 58, 237, 0.4)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    fontWeight: 300,
                    lineHeight: 1
                }}
            >
                +
            </button>

            {/* Выпадающее меню */}
            {isOpen && (
                <div
                    ref={menuRef}
                    style={{
                        position: 'absolute',
                        bottom: '70px',
                        right: '0',
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border-default)',
                        borderRadius: 'var(--radius-lg)',
                        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.5)',
                        padding: '8px',
                        minWidth: '240px',
                        animation: 'menuPopup 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                        transformOrigin: 'bottom right'
                    }}
                >
                    {/* Личный чат */}
                    <button
                        onClick={() => handleItemClick(onPersonalChat)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            width: '100%',
                            padding: '12px 16px',
                            background: 'transparent',
                            border: 'none',
                            borderRadius: 'var(--radius-md)',
                            color: 'var(--text-primary)',
                            cursor: 'pointer',
                            fontSize: '0.9rem',
                            textAlign: 'left',
                            transition: 'background 0.15s'
                        }}
                        onMouseEnter={(e) => e.target.style.background = 'var(--bg-hover)'}
                        onMouseLeave={(e) => e.target.style.background = 'transparent'}
                    >
                        <div style={{
                            width: '42px',
                            height: '42px',
                            borderRadius: '50%',
                            background: 'var(--gradient-brand)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            flexShrink: 0
                        }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                <circle cx="12" cy="7" r="4"/>
                            </svg>
                        </div>
                        <div>
                            <div style={{ fontWeight: 600 }}>Личный чат</div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', marginTop: '2px' }}>
                                Начать общение
                            </div>
                        </div>
                    </button>

                    {/* Группа */}
                    <button
                        onClick={() => handleItemClick(onGroupChat)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            width: '100%',
                            padding: '12px 16px',
                            background: 'transparent',
                            border: 'none',
                            borderRadius: 'var(--radius-md)',
                            color: 'var(--text-primary)',
                            cursor: 'pointer',
                            fontSize: '0.9rem',
                            textAlign: 'left',
                            transition: 'background 0.15s'
                        }}
                        onMouseEnter={(e) => e.target.style.background = 'var(--bg-hover)'}
                        onMouseLeave={(e) => e.target.style.background = 'transparent'}
                    >
                        <div style={{
                            width: '42px',
                            height: '42px',
                            borderRadius: '50%',
                            background: 'var(--gradient-success)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            flexShrink: 0
                        }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                                <circle cx="9" cy="7" r="4"/>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                            </svg>
                        </div>
                        <div>
                            <div style={{ fontWeight: 600 }}>Группа</div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', marginTop: '2px' }}>
                                Создать группу
                            </div>
                        </div>
                    </button>

                    {/* Канал */}
                    <button
                        onClick={() => handleItemClick(onChannel)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            width: '100%',
                            padding: '12px 16px',
                            background: 'transparent',
                            border: 'none',
                            borderRadius: 'var(--radius-md)',
                            color: 'var(--text-primary)',
                            cursor: 'pointer',
                            fontSize: '0.9rem',
                            textAlign: 'left',
                            transition: 'background 0.15s'
                        }}
                        onMouseEnter={(e) => e.target.style.background = 'var(--bg-hover)'}
                        onMouseLeave={(e) => e.target.style.background = 'transparent'}
                    >
                        <div style={{
                            width: '42px',
                            height: '42px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #F59E0B, #EF4444)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            flexShrink: 0
                        }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/>
                                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                            </svg>
                        </div>
                        <div>
                            <div style={{ fontWeight: 600 }}>Канал</div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', marginTop: '2px' }}>
                                Создать канал (скоро)
                            </div>
                        </div>
                    </button>
                </div>
            )}
        </div>
    );
}