import { useState } from 'preact/hooks';
import { userService } from '../../services/userService';
import { chatService } from '../../services/chatService';

export function NewChatModal({ user, onClose, onChatCreated }) {
    const [searchInput, setSearchInput] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [step, setStep] = useState('search'); // 'search' | 'result' | 'creating'

    const handleSearch = async () => {
        if (!searchInput.trim()) {
            setError('Введите email или @username');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const user = await userService.findUser(searchInput);
            
            if (!user) {
                setError('Пользователь не найден');
                setSearchResult(null);
            } else if (user.uid === user?.uid) {
                setError('Это ваш аккаунт');
                setSearchResult(null);
            } else {
                setSearchResult(user);
                setStep('result');
            }
        } catch (err) {
            setError('Ошибка поиска');
        } finally {
            setLoading(false);
        }
    };

    const handleCreateChat = async () => {
        if (!searchResult) return;

        setLoading(true);
        setStep('creating');

        try {
            const chatId = await chatService.createChat(user, searchResult);
            onChatCreated?.(chatId);
            onClose?.();
        } catch (err) {
            setError('Ошибка создания чата: ' + err.message);
            setStep('result');
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (step === 'search') {
                handleSearch();
            } else if (step === 'result') {
                handleCreateChat();
            }
        }
        if (e.key === 'Escape') {
            onClose?.();
        }
    };

    const getAvatarColor = (name) => {
        const colors = [
            'linear-gradient(135deg, #7C3AED, #6366F1)',
            'linear-gradient(135deg, #06D6A0, #10B981)',
            'linear-gradient(135deg, #F59E0B, #EF4444)',
            'linear-gradient(135deg, #3B82F6, #2563EB)',
            'linear-gradient(135deg, #EC4899, #DB2777)',
        ];
        let hash = 0;
        for (let i = 0; i < (name || '').length; i++) {
            hash = name.charCodeAt(i) + ((hash << 5) - hash);
        }
        return colors[Math.abs(hash) % colors.length];
    };

    return (
        <div style={styles.overlay} onClick={onClose}>
            <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
                {/* Заголовок */}
                <div style={styles.header}>
                    <h3 style={styles.title}>Новый чат</h3>
                    <button onClick={onClose} style={styles.closeBtn}>✕</button>
                </div>

                {/* Тело */}
                <div style={styles.body}>
                    {step === 'search' && (
                        <>
                            <p style={styles.hint}>
                                Введите email или @username пользователя
                            </p>
                            <div style={styles.searchContainer}>
                                <input
                                    type="text"
                                    value={searchInput}
                                    onInput={(e) => {
                                        setSearchInput(e.target.value);
                                        setError('');
                                    }}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Email или @username"
                                    style={styles.input}
                                    autoFocus
                                />
                                <button
                                    onClick={handleSearch}
                                    disabled={loading || !searchInput.trim()}
                                    style={{
                                        ...styles.searchBtn,
                                        opacity: loading || !searchInput.trim() ? 0.5 : 1
                                    }}
                                >
                                    {loading ? '...' : 'Найти'}
                                </button>
                            </div>
                            {error && <p style={styles.error}>{error}</p>}
                        </>
                    )}

                    {step === 'result' && searchResult && (
                        <>
                            <p style={styles.hint}>Пользователь найден:</p>
                            <div style={styles.userCard}>
                                <div style={{
                                    ...styles.userAvatar,
                                    background: getAvatarColor(searchResult.displayName || searchResult.email)
                                }}>
                                    {(searchResult.displayName || searchResult.email).charAt(0).toUpperCase()}
                                </div>
                                <div style={styles.userInfo}>
                                    <div style={styles.userName}>
                                        {searchResult.displayName || 'Без имени'}
                                    </div>
                                    <div style={styles.userEmail}>
                                        {searchResult.email}
                                    </div>
                                    {searchResult.username && (
                                        <div style={styles.userUsername}>
                                            @{searchResult.username}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div style={styles.actions}>
                                <button onClick={() => setStep('search')} style={styles.backBtn}>
                                    ← Назад
                                </button>
                                <button
                                    onClick={handleCreateChat}
                                    disabled={loading}
                                    style={{
                                        ...styles.createBtn,
                                        opacity: loading ? 0.7 : 1
                                    }}
                                >
                                    {loading ? 'Создание...' : 'Создать чат'}
                                </button>
                            </div>
                            {error && <p style={styles.error}>{error}</p>}
                        </>
                    )}

                    {step === 'creating' && (
                        <div style={styles.creatingState}>
                            <div style={styles.spinner}>⏳</div>
                            <p>Создаём чат...</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

const styles = {
    overlay: {
        position: 'fixed',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        animation: 'fadeIn 0.2s ease'
    },
    modal: {
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border-default)',
        borderRadius: '16px',
        width: '440px',
        maxWidth: '90vw',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
        animation: 'slideUp 0.25s ease',
        overflow: 'hidden'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.25rem 1.5rem',
        borderBottom: '1px solid var(--border-subtle)'
    },
    title: {
        margin: 0,
        fontSize: '1.1rem',
        fontWeight: 700,
        color: 'var(--text-primary)'
    },
    closeBtn: {
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        background: 'transparent',
        border: 'none',
        color: 'var(--text-secondary)',
        cursor: 'pointer',
        fontSize: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    body: {
        padding: '1.5rem'
    },
    hint: {
        color: 'var(--text-secondary)',
        fontSize: '0.85rem',
        marginBottom: '1rem'
    },
    searchContainer: {
        display: 'flex',
        gap: '0.5rem'
    },
    input: {
        flex: 1,
        padding: '0.75rem 1rem',
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid var(--border-default)',
        borderRadius: '12px',
        color: 'var(--text-primary)',
        fontSize: '0.9rem',
        outline: 'none'
    },
    searchBtn: {
        padding: '0.75rem 1.25rem',
        background: 'var(--gradient-brand)',
        border: 'none',
        borderRadius: '12px',
        color: 'white',
        fontWeight: 600,
        cursor: 'pointer',
        fontSize: '0.9rem'
    },
    error: {
        color: 'var(--vortex-danger)',
        fontSize: '0.85rem',
        marginTop: '0.75rem',
        padding: '0.5rem 0.75rem',
        background: 'rgba(239,68,68,0.1)',
        borderRadius: '8px'
    },
    userCard: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '1rem',
        background: 'rgba(255,255,255,0.03)',
        borderRadius: '12px',
        border: '1px solid var(--border-subtle)',
        marginBottom: '1rem'
    },
    userAvatar: {
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 700,
        fontSize: '1.3rem',
        flexShrink: 0
    },
    userInfo: {
        flex: 1
    },
    userName: {
        fontWeight: 600,
        fontSize: '1rem'
    },
    userEmail: {
        fontSize: '0.85rem',
        color: 'var(--text-secondary)',
        marginTop: '2px'
    },
    userUsername: {
        fontSize: '0.8rem',
        color: 'var(--vortex-primary-light)',
        marginTop: '2px'
    },
    actions: {
        display: 'flex',
        gap: '0.75rem'
    },
    backBtn: {
        flex: 1,
        padding: '0.75rem',
        background: 'transparent',
        border: '1px solid var(--border-default)',
        borderRadius: '12px',
        color: 'var(--text-secondary)',
        cursor: 'pointer',
        fontSize: '0.9rem'
    },
    createBtn: {
        flex: 2,
        padding: '0.75rem',
        background: 'var(--gradient-brand)',
        border: 'none',
        borderRadius: '12px',
        color: 'white',
        fontWeight: 600,
        cursor: 'pointer',
        fontSize: '0.9rem'
    },
    creatingState: {
        textAlign: 'center',
        padding: '2rem',
        color: 'var(--text-secondary)'
    },
    spinner: {
        fontSize: '2rem',
        marginBottom: '1rem'
    }
};