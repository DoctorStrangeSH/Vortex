import { useState, useEffect, useRef } from 'preact/hooks';
import { authService } from '../../services/authService';
import { userService } from '../../services/userService';
import { Icon } from '../UI/Icon';
import { updateProfile as updateFirebaseProfile } from 'firebase/auth';
import { trapDialogTab } from '../../utils/dialogFocus.js';

export function ProfileModal({ onClose }) {
    const [profile, setProfile] = useState(null);
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true);
    const [loadError, setLoadError] = useState(false);
    const closeTimer = useRef(null);
    const dialogRef = useRef(null);
    const onCloseRef = useRef(onClose);
    const savingRef = useRef(saving);
    onCloseRef.current = onClose;
    savingRef.current = saving;

    useEffect(() => {
        let active = true;
        const user = authService.getCurrentUser();
        if (!user) { setLoading(false); setLoadError(true); return; }
        userService.getUserProfile(user.uid).then(data => {
            if (!active) return;
            if (!data) { setLoadError(true); return; }
            setProfile(data);
            setName(data.displayName || '');
            setBio(data.bio || '');
        }).catch(() => { if (active) setLoadError(true); })
            .finally(() => { if (active) setLoading(false); });
        return () => { active = false; if (closeTimer.current) clearTimeout(closeTimer.current); };
    }, []);

    useEffect(() => {
        const previous = document.activeElement;
        dialogRef.current?.querySelector('button:not([disabled]), input:not([disabled]), textarea:not([disabled])')?.focus();
        const onKey = event => {
            if (event.key === 'Escape' && !savingRef.current) {
                event.preventDefault();
                onCloseRef.current?.();
                return;
            }
            trapDialogTab(event, dialogRef.current);
        };
        document.addEventListener('keydown', onKey);
        return () => {
            document.removeEventListener('keydown', onKey);
            previous?.focus?.();
        };
    }, []);

    const handleSave = async () => {
        const trimmedName = name.trim();
        if (saving || loading || loadError) return;
        if (trimmedName.length < 2 || trimmedName.length > 80) { setMessage('Имя должно содержать от 2 до 80 символов'); return; }
        if (bio.length > 500) { setMessage('Описание не должно превышать 500 символов'); return; }
        setSaving(true);
        setMessage('');

        try {
            await userService.updateProfile(authService.getCurrentUser().uid, {
                displayName: trimmedName,
                bio: bio
            });
            try { await updateFirebaseProfile(authService.getCurrentUser(), { displayName: trimmedName }); }
            catch (error) { console.warn('Имя в Firebase Auth обновится при следующем входе', error); }
            setMessage('✅ Профиль обновлён!');
            closeTimer.current = setTimeout(() => onClose?.(), 1000);
        } catch (err) {
            setMessage(err.code === 'permission-denied' ? 'Нет доступа к сохранению профиля. Проверьте правила Firestore.' : '❌ Не удалось сохранить профиль. Попробуйте ещё раз.');
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
        <div class="vortex-dialog-overlay" style={styles.overlay} onClick={() => { if (!saving) onClose?.(); }}>
            <div ref={dialogRef} class="vortex-profile-modal vortex-dialog-surface" role="dialog" aria-modal="true" aria-label="Профиль" tabIndex={-1} style={styles.modal} onClick={(e) => e.stopPropagation()}>
                {/* Заголовок */}
                <div class="vortex-profile-header" style={styles.header}>
                    <div><div class="vortex-profile-eyebrow">VORTEX · ВАШЕ ПРОСТРАНСТВО</div><h3 style={styles.title}>Мой профиль</h3></div>
                    <button type="button" disabled={saving} aria-label="Закрыть профиль" class="vortex-icon-button" onClick={onClose} style={styles.closeBtn}><Icon name="close" size={20} /></button>
                </div>

                {/* Тело */}
                <div class="vortex-profile-body" style={styles.body}>
                    {loading && <div class="vortex-profile-status" role="status">Загружаем профиль…</div>}
                    {loadError && <div class="vortex-profile-status" role="alert">Не удалось загрузить профиль. Закройте окно и попробуйте снова.</div>}
                    {!loading && !loadError && <>
                    {/* Аватар */}
                    <div class="vortex-profile-hero" style={styles.avatarSection}>
                        <div style={{
                            ...styles.avatar,
                            background: getAvatarColor(name || user?.email)
                        }}>
                            {(name || user?.email || '?').charAt(0).toUpperCase()}
                        </div>
                        <h4>{name.trim() || 'Ваше имя'}</h4>
                        <p>@{profile?.username || 'логин не задан'}</p>
                    </div>

                    {/* Поля */}
                    <div style={styles.field}>
                        <label for="vortex-profile-name" style={styles.label}>Имя</label>
                        <input
                            id="vortex-profile-name"
                            type="text"
                            maxLength={80}
                            value={name}
                            onInput={(e) => setName(e.target.value)}
                            class="vortex-form-input" style={styles.input}
                            placeholder="Ваше имя"
                        />
                    </div>

                    <div style={styles.field}>
                        <label style={styles.label}>Логин</label>
                        <div style={styles.usernameDisplay}>
                            @{profile?.username || 'не задан'}
                        </div>
                    </div>

                    <div style={styles.field}>
                        <label style={styles.label}>Электронная почта</label>
                        <div style={styles.usernameDisplay}>
                            {user?.email}
                        </div>
                    </div>

                    <div style={styles.field}>
                        <label for="vortex-profile-bio" style={styles.label}>О себе</label>
                        <textarea
                            id="vortex-profile-bio"
                            maxLength={500}
                            value={bio}
                            onInput={(e) => setBio(e.target.value)}
                            class="vortex-form-input" style={styles.textarea}
                            placeholder="Расскажите о себе..."
                            rows={3}
                        />
                        <div class="vortex-profile-counter">{bio.length} / 500</div>
                    </div>

                    {message && (
                        <div role="status" aria-live="polite" style={{
                            ...styles.message,
                            background: message.includes('✅') ? 'rgba(6,214,160,0.1)' : 'rgba(239,68,68,0.1)',
                            color: message.includes('✅') ? 'var(--vortex-secondary)' : 'var(--vortex-danger)'
                        }}>
                            {message}
                        </div>
                    )}

                    <button
                        type="button" class="vortex-primary-button" onClick={handleSave}
                        disabled={saving || name.trim().length < 2}
                        style={{
                            ...styles.saveBtn,
                            opacity: saving ? 0.7 : 1
                        }}
                    >
                        {saving ? 'Сохранение…' : 'Сохранить изменения'}
                    </button>
                    </>}
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
        borderRadius: '24px',
        width: '480px',
        maxWidth: '94vw',
        maxHeight: 'min(760px, 90dvh)',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 30px 90px rgba(0, 0, 0, 0.55)',
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
        borderRadius: '24px',
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
        padding: '1.5rem',
        flex: '1 1 auto',
        minHeight: 0,
        overflowY: 'auto',
        overscrollBehavior: 'contain'
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
