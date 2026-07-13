import { useState } from 'preact/hooks';
import { authService } from '../../services/authService';

export function AuthScreen() {
    const [mode, setMode] = useState('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            if (mode === 'login') {
                await authService.login(email, password);
            } else {
                await authService.register(email, password, name);
            }
        } catch (err) {
            setError('Ошибка: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            background: 'var(--bg-primary)'
        }}>
            <div style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-xl)',
                padding: '2.5rem',
                width: '400px',
                boxShadow: 'var(--shadow-md)'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <div style={{ fontSize: '3rem' }}>🌪️</div>
                    <h1 style={{
                        background: 'var(--gradient-brand)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontSize: '1.8rem',
                        fontWeight: 800
                    }}>Vortex</h1>
                </div>

                <div style={{
                    display: 'flex',
                    background: 'rgba(255,255,255,0.03)',
                    borderRadius: 'var(--radius-md)',
                    padding: '4px',
                    marginBottom: '1.5rem'
                }}>
                    <button
                        onClick={() => setMode('login')}
                        style={{
                            flex: 1,
                            padding: '0.75rem',
                            border: 'none',
                            borderRadius: 'var(--radius-sm)',
                            background: mode === 'login' ? 'var(--bg-active)' : 'transparent',
                            color: mode === 'login' ? 'var(--text-primary)' : 'var(--text-secondary)',
                            cursor: 'pointer',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            transition: 'all 0.2s'
                        }}
                    >Вход</button>
                    <button
                        onClick={() => setMode('register')}
                        style={{
                            flex: 1,
                            padding: '0.75rem',
                            border: 'none',
                            borderRadius: 'var(--radius-sm)',
                            background: mode === 'register' ? 'var(--bg-active)' : 'transparent',
                            color: mode === 'register' ? 'var(--text-primary)' : 'var(--text-secondary)',
                            cursor: 'pointer',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            transition: 'all 0.2s'
                        }}
                    >Регистрация</button>
                </div>

                <form onSubmit={handleSubmit}>
                    {mode === 'register' && (
                        <div style={{ marginBottom: '1rem' }}>
                            <label style={{
                                display: 'block',
                                fontSize: '0.8rem',
                                color: 'var(--text-secondary)',
                                marginBottom: '0.4rem',
                                fontWeight: 500
                            }}>Имя</label>
                            <input
                                type="text"
                                value={name}
                                onInput={(e) => setName(e.target.value)}
                                placeholder="Ваше имя"
                                required
                                style={{
                                    width: '100%',
                                    padding: '0.75rem 1rem',
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid var(--border-default)',
                                    borderRadius: 'var(--radius-sm)',
                                    color: 'var(--text-primary)',
                                    fontSize: '0.9rem',
                                    outline: 'none'
                                }}
                            />
                        </div>
                    )}

                    <div style={{ marginBottom: '1rem' }}>
                        <label style={{
                            display: 'block',
                            fontSize: '0.8rem',
                            color: 'var(--text-secondary)',
                            marginBottom: '0.4rem',
                            fontWeight: 500
                        }}>Email</label>
                        <input
                            type="email"
                            value={email}
                            onInput={(e) => setEmail(e.target.value)}
                            placeholder="user@example.com"
                            required
                            style={{
                                width: '100%',
                                padding: '0.75rem 1rem',
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid var(--border-default)',
                                borderRadius: 'var(--radius-sm)',
                                color: 'var(--text-primary)',
                                fontSize: '0.9rem',
                                outline: 'none'
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{
                            display: 'block',
                            fontSize: '0.8rem',
                            color: 'var(--text-secondary)',
                            marginBottom: '0.4rem',
                            fontWeight: 500
                        }}>Пароль</label>
                        <input
                            type="password"
                            value={password}
                            onInput={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            required
                            style={{
                                width: '100%',
                                padding: '0.75rem 1rem',
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid var(--border-default)',
                                borderRadius: 'var(--radius-sm)',
                                color: 'var(--text-primary)',
                                fontSize: '0.9rem',
                                outline: 'none'
                            }}
                        />
                    </div>

                    {error && (
                        <div style={{
                            background: 'rgba(239,68,68,0.1)',
                            border: '1px solid rgba(239,68,68,0.2)',
                            color: '#FCA5A5',
                            padding: '0.75rem 1rem',
                            borderRadius: 'var(--radius-sm)',
                            fontSize: '0.85rem',
                            marginBottom: '1rem'
                        }}>{error}</div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            width: '100%',
                            padding: '0.85rem',
                            background: 'var(--gradient-brand)',
                            color: 'white',
                            border: 'none',
                            borderRadius: 'var(--radius-sm)',
                            fontSize: '0.95rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            opacity: loading ? 0.6 : 1
                        }}
                    >
                        {loading ? 'Загрузка...' : mode === 'login' ? 'Войти' : 'Зарегистрироваться'}
                    </button>
                </form>
            </div>
        </div>
    );
}