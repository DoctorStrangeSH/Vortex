import { useState } from 'preact/hooks';
import { authService } from '../../services/authService';
import { userService } from '../../services/userService';

export function AuthScreen() {
    const [mode, setMode] = useState('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [usernameStatus, setUsernameStatus] = useState('');
    const [usernameChecking, setUsernameChecking] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // Проверка username на лету
    const checkUsername = async (value) => {
        const val = value.toLowerCase().replace(/[^a-z0-9_]/g, '');
        setUsername(val);
        
        if (val.length < 3) {
            setUsernameStatus('Минимум 3 символа');
            return;
        }
        
        setUsernameChecking(true);
        try {
            const available = await userService.isUsernameAvailable(val);
            if (available) {
                setUsernameStatus('✅ Свободен');
            } else {
                setUsernameStatus('❌ Занят');
            }
        } catch (err) {
            setUsernameStatus('');
        } finally {
            setUsernameChecking(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            if (mode === 'login') {
                await authService.login(email, password);
            } else {
                if (name.length < 2) {
                    throw new Error('Имя должно быть минимум 2 символа');
                }
                if (username.length < 3) {
                    throw new Error('Username минимум 3 символа');
                }
                if (password.length < 6) {
                    throw new Error('Пароль минимум 6 символов');
                }
                
                await authService.register(email, password, name, username);
            }
        } catch (err) {
            setError(err.message || 'Ошибка');
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
    };

    return (
        <div style={styles.wrapper}>
            <div style={styles.card}>
                {/* Логотип */}
                <div style={styles.logoSection}>
                    <div style={styles.logoIcon}>🌪️</div>
                    <h1 style={styles.logoTitle}>Vortex</h1>
                    <p style={styles.logoSubtitle}>В центре общения</p>
                </div>

                {/* Табы */}
                <div style={styles.tabs}>
                    <button
                        onClick={() => { setMode('login'); setError(''); }}
                        style={{
                            ...styles.tab,
                            background: mode === 'login' ? 'var(--bg-active)' : 'transparent',
                            color: mode === 'login' ? 'var(--text-primary)' : 'var(--text-secondary)'
                        }}
                    >
                        Вход
                    </button>
                    <button
                        onClick={() => { setMode('register'); setError(''); }}
                        style={{
                            ...styles.tab,
                            background: mode === 'register' ? 'var(--bg-active)' : 'transparent',
                            color: mode === 'register' ? 'var(--text-primary)' : 'var(--text-secondary)'
                        }}
                    >
                        Регистрация
                    </button>
                </div>

                {/* Форма */}
                <form onSubmit={handleSubmit} style={styles.form}>
                    {mode === 'register' && (
                        <>
                            <div style={styles.fieldGroup}>
                                <label style={styles.label}>Имя</label>
                                <input
                                    type="text"
                                    value={name}
                                    onInput={(e) => setName(e.target.value)}
                                    placeholder="Ваше имя"
                                    style={styles.input}
                                    required
                                />
                            </div>

                            <div style={styles.fieldGroup}>
                                <label style={styles.label}>Username</label>
                                <div style={styles.usernameWrapper}>
                                    <span style={styles.usernamePrefix}>@</span>
                                    <input
                                        type="text"
                                        value={username}
                                        onInput={(e) => checkUsername(e.target.value)}
                                        placeholder="username"
                                        style={{
                                            ...styles.input,
                                            paddingLeft: '2rem'
                                        }}
                                        required
                                    />
                                </div>
                                {username.length >= 3 && (
                                    <div style={{
                                        ...styles.statusText,
                                        color: usernameStatus.includes('✅') ? 'var(--vortex-secondary)' : 
                                               usernameStatus.includes('❌') ? 'var(--vortex-danger)' : 'var(--text-tertiary)'
                                    }}>
                                        {usernameChecking ? 'Проверка...' : usernameStatus}
                                    </div>
                                )}
                            </div>
                        </>
                    )}

                    <div style={styles.fieldGroup}>
                        <label style={styles.label}>Email</label>
                        <input
                            type="email"
                            value={email}
                            onInput={(e) => setEmail(e.target.value)}
                            placeholder="user@example.com"
                            onKeyDown={handleKeyDown}
                            style={styles.input}
                            required
                        />
                    </div>

                    <div style={styles.fieldGroup}>
                        <label style={styles.label}>Пароль</label>
                        <input
                            type="password"
                            value={password}
                            onInput={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            onKeyDown={handleKeyDown}
                            style={styles.input}
                            required
                        />
                    </div>

                    {error && (
                        <div style={styles.error}>
                            ⚠️ {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading || (mode === 'register' && usernameStatus.includes('❌'))}
                        style={{
                            ...styles.submitBtn,
                            opacity: loading ? 0.7 : 1
                        }}
                    >
                        {loading ? 'Загрузка...' : mode === 'login' ? 'Войти' : 'Зарегистрироваться'}
                    </button>
                </form>

                {/* Переключение режима */}
                <div style={styles.switchText}>
                    {mode === 'login' ? (
                        <>
                            Нет аккаунта?{' '}
                            <span onClick={() => setMode('register')} style={styles.switchLink}>
                                Зарегистрироваться
                            </span>
                        </>
                    ) : (
                        <>
                            Уже есть аккаунт?{' '}
                            <span onClick={() => setMode('login')} style={styles.switchLink}>
                                Войти
                            </span>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

const styles = {
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        background: 'var(--bg-primary)'
    },
    card: {
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border-default)',
        borderRadius: '20px',
        padding: '2.5rem',
        width: '420px',
        maxWidth: '90vw',
        boxShadow: '0 20px 60px rgba(0,0,0,0.4)'
    },
    logoSection: {
        textAlign: 'center',
        marginBottom: '2rem'
    },
    logoIcon: {
        fontSize: '3rem'
    },
    logoTitle: {
        background: 'var(--gradient-brand)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontSize: '2rem',
        fontWeight: 800,
        margin: '0.5rem 0 0 0'
    },
    logoSubtitle: {
        color: 'var(--text-secondary)',
        fontSize: '0.9rem',
        marginTop: '0.25rem'
    },
    tabs: {
        display: 'flex',
        background: 'rgba(255,255,255,0.03)',
        borderRadius: '14px',
        padding: '4px',
        marginBottom: '1.5rem'
    },
    tab: {
        flex: 1,
        padding: '0.75rem',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        fontWeight: 600,
        fontSize: '0.9rem',
        transition: 'all 0.2s',
        fontFamily: 'inherit'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.25rem'
    },
    fieldGroup: {
        marginBottom: '0.75rem'
    },
    label: {
        display: 'block',
        fontSize: '0.8rem',
        fontWeight: 500,
        color: 'var(--text-secondary)',
        marginBottom: '0.35rem',
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
    },
    input: {
        width: '100%',
        padding: '0.75rem 1rem',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid var(--border-default)',
        borderRadius: '12px',
        color: 'var(--text-primary)',
        fontSize: '0.95rem',
        outline: 'none',
        transition: 'border-color 0.2s',
        fontFamily: 'inherit'
    },
    usernameWrapper: {
        position: 'relative'
    },
    usernamePrefix: {
        position: 'absolute',
        left: '0.75rem',
        top: '50%',
        transform: 'translateY(-50%)',
        color: 'var(--text-tertiary)',
        fontWeight: 600,
        fontSize: '0.95rem',
        pointerEvents: 'none'
    },
    statusText: {
        fontSize: '0.75rem',
        marginTop: '0.25rem',
        paddingLeft: '0.25rem'
    },
    error: {
        padding: '0.75rem 1rem',
        background: 'rgba(239,68,68,0.1)',
        border: '1px solid rgba(239,68,68,0.2)',
        borderRadius: '10px',
        color: '#FCA5A5',
        fontSize: '0.85rem'
    },
    submitBtn: {
        width: '100%',
        padding: '0.85rem',
        background: 'var(--gradient-brand)',
        color: 'white',
        border: 'none',
        borderRadius: '12px',
        fontSize: '1rem',
        fontWeight: 600,
        cursor: 'pointer',
        marginTop: '0.5rem',
        fontFamily: 'inherit'
    },
    switchText: {
        textAlign: 'center',
        marginTop: '1.25rem',
        fontSize: '0.85rem',
        color: 'var(--text-secondary)'
    },
    switchLink: {
        color: 'var(--vortex-primary-light)',
        cursor: 'pointer',
        fontWeight: 500
    }
};