import { useState } from 'preact/hooks';
import { themeStore } from '../../stores/themeStore';

export function BurgerMenu({ user, onLogout, onProfile, onContacts, onTasks }) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentTheme, setCurrentTheme] = useState(themeStore.get());

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleThemeToggle = () => {
        themeStore.toggle();
        setCurrentTheme(themeStore.get());
    };

    const handleItemClick = (callback) => {
        setIsOpen(false);
        callback?.();
    };

    return (
        <>
            {/* Кнопка бургера */}
            <button
                onClick={handleToggle}
                style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'transparent',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-secondary)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    transition: 'all 0.15s'
                }}
                onMouseEnter={(e) => {
                    e.target.style.background = 'var(--bg-hover)';
                    e.target.style.color = 'var(--text-primary)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.color = 'var(--text-secondary)';
                }}
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <line x1="3" y1="12" x2="21" y2="12"/>
                    <line x1="3" y1="18" x2="21" y2="18"/>
                </svg>
            </button>

            {/* Оверлей */}
            {isOpen && (
                <div
                    onClick={handleClose}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        background: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 200,
                        backdropFilter: 'blur(2px)',
                        animation: 'fadeIn 0.2s ease'
                    }}
                />
            )}

            {/* Панель меню */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: isOpen ? 0 : '-320px',
                    bottom: 0,
                    width: '320px',
                    background: 'var(--bg-secondary)',
                    zIndex: 201,
                    transition: 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    borderRight: '1px solid var(--border-subtle)',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                {/* Заголовок */}
                <div style={{
                    padding: '20px',
                    borderBottom: '1px solid var(--border-subtle)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <h3 style={{ fontWeight: 700, fontSize: '1.1rem' }}>Меню</h3>
                    <button
                        onClick={handleClose}
                        style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            background: 'transparent',
                            border: 'none',
                            color: 'var(--text-secondary)',
                            cursor: 'pointer',
                            fontSize: '1.2rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >✕</button>
                </div>

                {/* Пункты меню */}
                <div style={{ flex: 1, overflowY: 'auto', padding: '8px' }}>
                    {/* Профиль */}
                    <MenuItem
                        icon="👤"
                        title="Профиль"
                        subtitle={user?.email || 'email'}
                        onClick={() => handleItemClick(onProfile)}
                    />

                    {/* Контакты */}
                    <MenuItem
                        icon="👥"
                        title="Контакты"
                        subtitle="Поиск пользователей"
                        onClick={() => handleItemClick(onContacts)}
                    />

                    {/* Задачи */}
                    <MenuItem
                        icon="📋"
                        title="Задачи"
                        subtitle="Список задач"
                        onClick={() => handleItemClick(onTasks)}
                    />

                    <div style={{ height: '1px', background: 'var(--border-subtle)', margin: '8px 16px' }} />

                    {/* Тема */}
                    <div
                        onClick={handleThemeToggle}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '14px',
                            padding: '14px 16px',
                            borderRadius: 'var(--radius-md)',
                            cursor: 'pointer',
                            transition: 'background 0.15s'
                        }}
                        onMouseEnter={(e) => e.target.style.background = 'var(--bg-hover)'}
                        onMouseLeave={(e) => e.target.style.background = 'transparent'}
                    >
                        <div style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '50%',
                            background: 'var(--bg-tertiary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.2rem'
                        }}>
                            {currentTheme === 'dark' ? '🌙' : '☀️'}
                        </div>
                        <div>
                            <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>
                                {currentTheme === 'dark' ? 'Тёмная тема' : 'Светлая тема'}
                            </div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', marginTop: '2px' }}>
                                {currentTheme === 'dark' ? 'Включена' : 'Выключена'}
                            </div>
                        </div>
                    </div>

                    <div style={{ height: '1px', background: 'var(--border-subtle)', margin: '8px 16px' }} />

                    {/* Выход */}
                    <div
                        onClick={() => handleItemClick(onLogout)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '14px',
                            padding: '14px 16px',
                            borderRadius: 'var(--radius-md)',
                            cursor: 'pointer',
                            transition: 'background 0.15s',
                            color: 'var(--vortex-danger)'
                        }}
                        onMouseEnter={(e) => e.target.style.background = 'rgba(239,68,68,0.1)'}
                        onMouseLeave={(e) => e.target.style.background = 'transparent'}
                    >
                        <div style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '50%',
                            background: 'rgba(239,68,68,0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.2rem'
                        }}>
                            🚪
                        </div>
                        <div>
                            <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Выйти</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// Компонент пункта меню
function MenuItem({ icon, title, subtitle, onClick }) {
    return (
        <div
            onClick={onClick}
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '14px 16px',
                borderRadius: 'var(--radius-md)',
                cursor: 'pointer',
                transition: 'background 0.15s'
            }}
            onMouseEnter={(e) => e.target.style.background = 'var(--bg-hover)'}
            onMouseLeave={(e) => e.target.style.background = 'transparent'}
        >
            <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'var(--bg-tertiary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem'
            }}>
                {icon}
            </div>
            <div>
                <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{title}</div>
                {subtitle && (
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', marginTop: '2px' }}>
                        {subtitle}
                    </div>
                )}
            </div>
        </div>
    );
}