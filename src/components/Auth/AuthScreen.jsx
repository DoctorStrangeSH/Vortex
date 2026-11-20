import { useEffect, useState } from 'preact/hooks';
import { BrandMark } from '../UI/BrandMark';
import { authService } from '../../services/authService';
import { userService } from '../../services/userService';
import { normalizeDisplayName } from '../../services/profilePolicy.js';
import { normalizeUsername } from '../../services/usernamePolicy.js';

export function AuthScreen({ pendingUser = null }) {
    const [registrationDraft] = useState(() => authService.getRegistrationDraft(pendingUser));
    const [mode, setMode] = useState(pendingUser ? 'complete' : 'login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState(registrationDraft?.name || pendingUser?.displayName || '');
    const [username, setUsername] = useState(registrationDraft?.username || '');
    const [usernameStatus, setUsernameStatus] = useState('');
    const [usernameChecking, setUsernameChecking] = useState(false);
    const [error, setError] = useState('');
    const [notice, setNotice] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    // Проверяем уже введённое имя, в том числе восстановленное из черновика.
    // Отклоняем устаревшие ответы, если пользователь продолжил печатать.
    useEffect(() => {
        if (mode !== 'register' && mode !== 'complete') {
            setUsernameChecking(false);
            return;
        }
        if (username.length < 3) {
            setUsernameStatus('Минимум 3 символа');
            setUsernameChecking(false);
            return;
        }
        if (username.length > 24) {
            setUsernameStatus('❌ Максимум 24 символа');
            setUsernameChecking(false);
            return;
        }
        if (mode === 'register' && !pendingUser) {
            // Firestore username lookups are not public; registration will claim
            // this name atomically after Firebase Authentication succeeds.
            setUsernameStatus('Доступность проверим после создания аккаунта');
            setUsernameChecking(false);
            return;
        }
        let active = true;
        setUsernameStatus('');
        setUsernameChecking(true);
        const timer = setTimeout(async () => {
            try {
                const available = await userService.isUsernameAvailable(username);
                if (active) setUsernameStatus(available ? '✅ Свободен' : '❌ Занят');
            } catch {
                if (active) setUsernameStatus('Не удалось проверить доступность логина');
            } finally {
                if (active) setUsernameChecking(false);
            }
        }, 300);
        return () => { active = false; clearTimeout(timer); };
    }, [username, mode, pendingUser]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setNotice('');
        setLoading(true);

        try {
            if (mode === 'reset') {
                await authService.resetPassword(email);
                setNotice('Если аккаунт с такой почтой существует, письмо для восстановления отправлено. Проверьте входящие и папку «Спам».');
            } else if (mode === 'complete') {
                normalizeDisplayName(name);
                normalizeUsername(username);
                await authService.completeRegistration(pendingUser, name.trim(), username);
            } else if (mode === 'login') {
                await authService.login(email, password);
            } else {
                normalizeDisplayName(name);
                normalizeUsername(username);
                if (password.length < 6) {
                    throw new Error('Пароль минимум 6 символов');
                }
                
                await authService.register(email, password, name, username);
            }
        } catch (err) {
            if (mode === 'reset' && err.code === 'auth/user-not-found') {
                setNotice('Если аккаунт с такой почтой существует, письмо для восстановления отправлено. Проверьте входящие и папку «Спам».');
            } else {
                setError(err.code === 'permission-denied'
                    ? 'База данных отклонила сохранение профиля. Имя и @username сохранены в этой вкладке — попробуйте позже.'
                    : err.message || 'Ошибка');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div class="vortex-auth-screen" style={styles.wrapper}>
            <aside class="vortex-auth-story" aria-label="Знакомство с Vortex">
                <div class="vortex-auth-story-inner">
                    <div class="vortex-auth-story-kicker"><span class="vortex-auth-story-spark" /> НОВОЕ ПРОСТРАНСТВО ДЛЯ ОБЩЕНИЯ</div>
                    <div class="vortex-auth-story-symbol" aria-hidden="true"><BrandMark size={160} /></div>
                    <h2>На одной<br /><em>волне.</em></h2>
                    <p>Важные люди, живые разговоры и моменты, к которым хочется возвращаться.</p>
                    <div class="vortex-auth-story-foot"><span>✦</span> VORTEX <span class="vortex-auth-story-divider" /> МЕССЕНДЖЕР НОВОГО ПОКОЛЕНИЯ</div>
                </div>
            </aside>
            <div class="vortex-auth-card" style={styles.card}>
                {/* Логотип */}
                <div style={styles.logoSection}>
                    <div class="vortex-auth-mark" style={styles.logoIcon}><BrandMark size={58} /></div>
                    <h1 style={styles.logoTitle}>Vortex</h1>
                    <p style={styles.logoSubtitle}>Ближе к тем, кто важен</p>
                </div>

                {/* Табы */}
                {mode === 'complete' && <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                    Аккаунт создан, но профиль ещё не сохранён. Проверьте имя и @username и завершите регистрацию.
                </p>}
                {mode !== 'complete' && mode !== 'reset' && <div class="vortex-auth-tabs" role="tablist" aria-label="Режим авторизации" style={styles.tabs}>
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
                                <label for="vortex-auth-name" style={styles.label}>Имя</label>
                                <input
                                    id="vortex-auth-name"
                                    type="text"
                                    autocomplete="name"
                                    maxLength={80}
                                    value={name}
                                    onInput={(e) => setName(e.target.value)}
                                    placeholder="Ваше имя"
                                    class="vortex-form-input" style={styles.input}
                                    required
                                />
                            </div>

                            <div style={styles.fieldGroup}>
                                <label for="vortex-auth-username" style={styles.label}>Логин</label>
                                <div style={styles.usernameWrapper}>
                                    <span style={styles.usernamePrefix}>@</span>
                                    <input
                                        id="vortex-auth-username"
                                        type="text"
                                        autocomplete="username"
                                        value={username}
                                        onInput={(e) => setUsername(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ''))}
                                        maxLength={24}
                                        placeholder="username"
                                        class="vortex-form-input" style={{
                                            ...styles.input,
                                            paddingLeft: '2rem'
                                        }}
                                        required
                                    />
                                </div>
                                {username.length >= 3 && (
                                    <div role="status" aria-live="polite" style={{
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
                        <label for="vortex-auth-email" style={styles.label}>Электронная почта</label>
                        <input
                            id="vortex-auth-email"
                            type="email"
                            autocomplete="email"
                            value={email}
                            onInput={(e) => setEmail(e.target.value)}
                            placeholder="user@example.com"
                                                        class="vortex-form-input" style={styles.input}
                            required
                        />
                    </div>

                    {mode !== 'reset' && <div style={styles.fieldGroup}>
                        <label for="vortex-auth-password" style={styles.label}>Пароль</label>
                        <div class="vortex-auth-password-wrap">
                            <input
                                id="vortex-auth-password"
                                type={showPassword ? 'text' : 'password'}
                                autocomplete={mode === 'register' ? 'new-password' : 'current-password'}
                                minLength={mode === 'register' ? 6 : undefined}
                                value={password}
                                onInput={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                class="vortex-form-input" style={styles.input}
                                required
                            />
                            <button type="button" class="vortex-auth-password-toggle" aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'} aria-pressed={showPassword} onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Скрыть' : 'Показать'}</button>
                        </div>
                    </div>}</>}

                    {error && (
                        <div role="alert" style={styles.error}>
                            ⚠️ {error}
                        </div>
                    )}
                    {notice && <div role="status" aria-live="polite" style={{ ...styles.statusText, color: 'var(--vortex-secondary)', marginBottom: '0.75rem' }}>{notice}</div>}

                    <button
                        type="submit"
                        disabled={loading || ((mode === 'register' || mode === 'complete') && (usernameChecking || usernameStatus.includes('❌')))}
                        class="vortex-primary-button" style={{
                            ...styles.submitBtn,
                            opacity: loading ? 0.7 : 1
                        }}
                    >
                        {loading ? 'Загрузка...' : mode === 'login' ? 'Войти' : mode === 'reset' ? 'Отправить письмо' : mode === 'complete' ? 'Завершить регистрацию' : 'Зарегистрироваться'}
                    </button>
                </form>

                {/* Переключение режима */}
                {mode === 'complete' ? <div style={styles.switchText}>
                    <button type="button" onClick={() => authService.logout()} style={styles.switchLink}>Выйти из аккаунта</button>
                </div> : <div style={styles.switchText}>
                    {mode === 'login' ? (
                        <>
                            <button type="button" onClick={() => { setMode('reset'); setError(''); setNotice(''); }} style={styles.switchLink}>
                                Забыли пароль?
                            </button>
                            <div style={{ marginTop: '0.75rem' }}>
                                Нет аккаунта?{' '}
                                <button type="button" onClick={() => { setMode('register'); setError(''); setNotice(''); }} style={styles.switchLink}>
                                    Зарегистрироваться
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            {mode === 'reset' ? 'Вспомнили пароль?' : 'Уже есть аккаунт?'}{' '}
                            <button type="button" onClick={() => { setMode('login'); setError(''); setNotice(''); }} style={styles.switchLink}>
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
        alignItems: 'stretch',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        minHeight: '100%',
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
