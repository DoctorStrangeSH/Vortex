import { useState, useEffect } from 'preact/hooks';
import { authService } from '../../services/authService';
import { userService } from '../../services/userService';

export function ProfileModal({ onClose }) {
    const [profile, setProfile] = useState(null);
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        loadProfile();
    }, []);

    const loadProfile = async () => {
        const user = authService.getCurrentUser();
        if (!user) return;

        const data = await userService.getUserProfile(user.uid);
        setProfile(data);
        setName(data?.displayName || '');
        setBio(data?.bio || '');
    };

    const handleSave = async () => {
        setSaving(true);
        setMessage('');

        try {
            await userService.updateProfile(authService.getCurrentUser().uid, {
                displayName: name,
                bio: bio
            });
            setMessage('✅ Профиль обновлён!');
            setTimeout(() => onClose?.(), 1000);
        } catch (err) {
            setMessage('❌ Ошибка сохранения');
        } finally {
            setSaving(false);
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

    const user = authService.getCurrentUser();

    return (
        <div style={styles.overlay} onClick={onClose}>
            <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
                {/* Заголовок */}
                <div style={styles.header}>
                    <h3 style={styles.title}>👤 Профиль</h3>
                    <button onClick={onClose} style={styles.closeBtn}>✕</button>
                </div>

                {/* Тело */}
                <div style={styles.body}>
                    {/* Аватар */}
                    <div style={styles.avatarSection}>
                        <div style={{
                            ...styles.avatar,
                            background: getAvatarColor(name || user?.email)
                        }}>
                            {(name || user?.email || '?').charAt(0).toUpperCase()}
                        </div>
                        <button style={styles.changeAvatarBtn}>
                            📷 Изменить аватар
                        </button>
                    </div>

                    {/* Поля */}
                    <div style={styles.field}>
                        <label style={styles.label}>Имя</label>
                        <input
                            type="text"
                            value={name}
                            onInput={(e) => setName(e.target.value)}
                            style={styles.input}
                            placeholder="Ваше имя"
                        />
                    </div>

                    <div style={styles.field}>
                        <label style={styles.label}>Username</label>
                        <div style={styles.usernameDisplay}>
                            @{profile?.username || 'не задан'}
                        </div>
                    </div>

                    <div style={styles.field}>
                        <label style={styles.label}>Email</label>
                        <div style={styles.usernameDisplay}>
                            {user?.email}
                        </div>
                    </div>

                    <div style={styles.field}>
                        <label style={styles.label}>Bio</label>
                        <textarea
                            value={bio}
                            onInput={(e) => setBio(e.target.value)}
                            style={styles.textarea}
                            placeholder="Расскажите о себе..."
                            rows={3}
                        />
                    </div>

                    {message && (
                        <div style={{
                            ...styles.message,
                            background: message.includes('✅') ? 'rgba(6,214,160,0.1)' : 'rgba(239,68,68,0.1)',
                            color: message.includes('✅') ? 'var(--vortex-secondary)' : 'var(--vortex-danger)'
                        }}>
                            {message}
                        </div>
                    )}

                    <button
                        onClick={handleSave}
                        disabled={saving}
                        style={{
                            ...styles.saveBtn,
                            opacity: saving ? 0.7 : 1
                        }}
                    >
                        {saving ? 'Сохранение...' : '💾 Сохранить'}
                    </button>
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
        borderRadius: '20px',
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
        fontWeight: 700
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
    avatarSection: {
        textAlign: 'center',
        marginBottom: '1.5rem'
    },
    avatar: {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 700,
        fontSize: '2rem',
        margin: '0 auto'
    },
    changeAvatarBtn: {
        marginTop: '0.75rem',
        padding: '0.4rem 1rem',
        background: 'transparent',
        border: '1px solid var(--border-default)',
        borderRadius: '8px',
        color: 'var(--text-secondary)',
        cursor: 'pointer',
        fontSize: '0.8rem'
    },
    field: {
        marginBottom: '1rem'
    },
    label: {
        display: 'block',
        fontSize: '0.75rem',
        fontWeight: 500,
        color: 'var(--text-secondary)',
        marginBottom: '0.35rem',
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
    },
    input: {
        width: '100%',
        padding: '0.7rem 1rem',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid var(--border-default)',
        borderRadius: '10px',
        color: 'var(--text-primary)',
        fontSize: '0.9rem',
        outline: 'none'
    },
    textarea: {
        width: '100%',
        padding: '0.7rem 1rem',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid var(--border-default)',
        borderRadius: '10px',
        color: 'var(--text-primary)',
        fontSize: '0.9rem',
        outline: 'none',
        resize: 'vertical',
        fontFamily: 'inherit'
    },
    usernameDisplay: {
        padding: '0.7rem 1rem',
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '10px',
        color: 'var(--text-secondary)',
        fontSize: '0.9rem'
    },
    message: {
        padding: '0.6rem 1rem',
        borderRadius: '10px',
        fontSize: '0.85rem',
        marginBottom: '1rem'
    },
    saveBtn: {
        width: '100%',
        padding: '0.8rem',
        background: 'var(--gradient-brand)',
        border: 'none',
        borderRadius: '12px',
        color: 'white',
        fontWeight: 600,
        fontSize: '0.95rem',
        cursor: 'pointer'
    }
};