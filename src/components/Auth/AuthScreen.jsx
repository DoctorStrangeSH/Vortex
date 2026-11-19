import { useState } from 'preact/hooks';
import { BrandMark } from '../UI/BrandMark';
import { authService } from '../../services/authService';
import { userService } from '../../services/userService';

export function AuthScreen({ pendingUser = null }) {
    const [mode, setMode] = useState(pendingUser ? 'complete' : 'login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState(pendingUser?.displayName || '');
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
            if (mode === 'complete') {
                if (name.trim().length < 2) throw new Error('Имя должно быть минимум 2 символа');
                await authService.completeRegistration(pendingUser, name.trim(), username);
            } else if (mode === 'login') {
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

    return (
        <div class="vortex-auth-screen" style={styles.wrapper}>
            <div class="vortex-auth-card" style={styles.card}>
                {/* Логотип */}
                <div style={styles.logoSection}>
                    <div class="vortex-auth-mark" style={styles.logoIcon}><BrandMark size={58} /></div>
                    <h1 style={styles.logoTitle}>Vortex</h1>
                    <p style={styles.logoSubtitle}>Ближе к тем, кто важен</p>
                </div>

                {/* Табы */}
                {mode === 'complete' && <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                    Аккаунт уже создан. Выберите свободный @username, чтобы завершить регистрацию.
                </p>}
                {mode !== 'complete' && <div class="vortex-auth-tabs" role="tablist" aria-label="Режим авторизации" style={styles.tabs}>
                    <button
                        type="button" role="tab" aria-selected={mode === "login"} onClick={() => { setMode('login'); setError(''); }}
                        style={{
                            ...styles.tab,
                            background: mode === 'login' ? 'var(--bg-active)' : 'transparent',
                            color: mode === 'login' ? 'var(--text-primary)' : 'var(--text-secondary)'
                        }}
                    >
                        Вход
                    </button>
                    <button
                        type="button" role="tab" aria-selected={mode === "register"} onClick={() => { setMode('register'); setError(''); }}
                        style={{
                            ...styles.tab,
                            background: mode === 'register' ? 'var(--bg-active)' : 'transparent',
                            color: mode === 'register' ? 'var(--text-primary)' : 'var(--text-secondary)'
                        }}
                    >
                        Регистрация
                    </button>
                </div>}

                {/* Форма */}
                <form onSubmit={handleSubmit} style={styles.form}>
                    {(mode === 'register' || mode === 'complete') && (
                        <>
                            <div style={styles.fieldGroup}>
                                <label style={styles.label}>Имя</label>
                                <input
                                    type="text"
                                    value={name}
                                    onInput={(e) => setName(e.target.value)}
                                    placeholder="Ваше имя"
                                    class="vortex-form-input" style={styles.input}
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
                                        class="vortex-form-input" style={{
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

                    {mode !== 'complete' && <><div style={styles.fieldGroup}>
                        <label style={styles.label}>Email</label>
                        <input
                            type="email"
                            value={email}
                            onInput={(e) => setEmail(e.target.value)}
                            placeholder="user@example.com"
                                                        class="vortex-form-input" style={styles.input}
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
                                                        class="vortex-form-input" style={styles.input}
                            required
                        />
                    </div></>}

                    {error && (
                        <div role="alert" style={styles.error}>
                            ⚠️ {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading || (mode !== 'login' && usernameStatus.includes('❌'))}
                        class="vortex-primary-button" style={{
                            ...styles.submitBtn,
                            opacity: loading ? 0.7 : 1
                        }}
                    >
                        {loading ? 'Загрузка...' : mode === 'login' ? 'Войти' : mode === 'complete' ? 'Завершить регистрацию' : 'Зарегистрироваться'}
                    </button>
                </form>

                {/* Переключение режима */}
                {mode === 'complete' ? <div style={styles.switchText}>
                    <button type="button" onClick={() => authService.logout()} style={styles.switchLink}>Выйти из аккаунта</button>
                </div> : <div style={styles.switchText}>
                    {mode === 'login' ? (
                        <>
                            Нет аккаунта?{' '}
                            <button type="button" onClick={() => setMode('register')} style={styles.switchLink}>
                                Зарегистрироваться
                            </button>
                        </>
                    ) : (
                        <>
                            Уже есть аккаунт?{' '}
                            <button type="button" onClick={() => setMode('login')} style={styles.switchLink}>
                                Войти
                            </button>
                        </>
                    )}
                </div>}
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
        borderRadius: '26px',
        padding: '2.65rem',
        width: '460px',
        maxWidth: '90vw',
        boxShadow: '0 30px 90px rgba(0,0,0,0.45)'
    },
    logoSection: {
        textAlign: 'center',
        marginBottom: '2rem'
    },
    logoIcon: {
        fontSize: '2.4rem'
    },
    logoTitle: {
        background: 'var(--gradient-brand)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontSize: '2.3rem',
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
        background: 'var(--bg-tertiary)',
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
        padding: '0.9rem 1rem',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid var(--border-default)',
        borderRadius: '14px',
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
        border: 'none', background: 'transparent', fontSize: 'inherit', padding: '2px',
        color: 'var(--vortex-primary-light)',
        cursor: 'pointer',
        fontWeight: 500
    }
};
