import { useEffect, useState } from 'preact/hooks';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebase';
import { chatService } from '../../services/chatService';
import { userService } from '../../services/userService';

export function GroupMembersPanel({ chat, user, onClose, onLeave }) {
    const [profiles, setProfiles] = useState({});
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const [busy, setBusy] = useState(false);
    const participants = chat.participants || [];
    const admins = chat.admins || [];
    const isOwner = chat.createdBy === user.uid;
    const isAdmin = admins.includes(user.uid);

    useEffect(() => {
        let active = true;
        Promise.all(participants.map(async uid => {
            try {
                const snapshot = await getDoc(doc(db, 'publicProfiles', uid));
                return [uid, snapshot.exists() ? snapshot.data() : null];
            } catch { return [uid, null]; }
        })).then(entries => { if (active) setProfiles(Object.fromEntries(entries)); });
        return () => { active = false; };
    }, [chat.id, participants.join('|')]);

    const perform = async action => {
        if (busy) return;
        setBusy(true);
        setError('');
        try { await action(); }
        catch (cause) { setError(cause?.code === 'permission-denied' ? 'Недостаточно прав для этого действия' : (cause?.message || 'Не удалось выполнить действие')); }
        finally { setBusy(false); }
    };

    const invite = event => {
        event.preventDefault();
        perform(async () => {
            const person = await userService.findUser(username);
            if (!person?.uid) throw new Error('Пользователь не найден. Проверьте @username.');
            if (participants.includes(person.uid)) throw new Error('Пользователь уже в группе');
            await chatService.addGroupMember(chat.id, person.uid);
            setUsername('');
        });
    };

    const updateMember = (uid, action, confirmText) => {
        if (confirmText && !window.confirm(confirmText)) return;
        perform(async () => action(chat.id, uid));
    };

    const leave = () => {
        if (!window.confirm('Выйти из этой группы?')) return;
        perform(async () => {
            await chatService.leaveGroup(chat.id, user.uid);
            onLeave?.();
            onClose();
        });
    };

    return (
        <div style={styles.overlay} role="presentation" onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
            <section style={styles.panel} role="dialog" aria-modal="true" aria-label="Управление группой">
                <div style={styles.header}>
                    <div><h2 style={styles.title}>Участники группы</h2><div style={styles.hint}>{participants.length} участников · {admins.length} администраторов</div></div>
                    <button type="button" onClick={onClose} style={styles.close} aria-label="Закрыть">✕</button>
                </div>

                {isAdmin && <form onSubmit={invite} style={styles.invite}>
                    <label htmlFor="group-user" style={styles.hint}>Пригласить по @username</label>
                    <div style={styles.inviteRow}>
                        <input id="group-user" value={username} onInput={event => setUsername(event.currentTarget.value)}
                            placeholder="@username" maxLength={25} required style={styles.input} />
                        <button type="submit" disabled={busy || !username.trim()} style={styles.primary}>Добавить</button>
                    </div>
                </form>}

                <div style={styles.list}>
                    {participants.map(uid => {
                        const profile = profiles[uid];
                        const isMemberOwner = uid === chat.createdBy;
                        const isMemberAdmin = admins.includes(uid);
                        const label = profile?.displayName || profile?.username || (uid === user.uid ? 'Вы' : 'Участник');
                        return <div key={uid} style={styles.row}>
                            <div style={styles.avatar}>{label.charAt(0).toUpperCase()}</div>
                            <div style={styles.details}>
                                <div style={styles.name}>{label}{uid === user.uid ? ' (вы)' : ''}</div>
                                <div style={styles.hint}>{isMemberOwner ? 'Владелец' : isMemberAdmin ? 'Администратор' : 'Участник'}{profile?.username ? ` · @${profile.username}` : ''}</div>
                            </div>
                            {isOwner && !isMemberOwner && <div style={styles.actions}>
                                <button type="button" disabled={busy} style={styles.action} onClick={() => updateMember(uid,
                                    (id, member) => chatService.setGroupAdmin(id, member, !isMemberAdmin),
                                    isMemberAdmin ? 'Снять полномочия администратора?' : 'Назначить администратором?')}>{isMemberAdmin ? 'Разжаловать' : 'Сделать админом'}</button>
                            </div>}
                            {isAdmin && uid !== user.uid && !isMemberAdmin && <button type="button" disabled={busy}
                                style={styles.danger} onClick={() => updateMember(uid, chatService.removeGroupMember.bind(chatService), 'Исключить участника из группы?')}>Удалить</button>}
                        </div>;
                    })}
                </div>
                {error && <div role="alert" style={styles.error}>{error}</div>}
                {!isOwner && <div style={styles.footer}>
                    {isAdmin ? <div style={styles.hint}>Чтобы выйти, сначала попросите владельца снять ваши права администратора.</div> :
                        <button type="button" disabled={busy} style={styles.leave} onClick={leave}>Выйти из группы</button>}
                </div>}
            </section>
        </div>
    );
}

const styles = {
    overlay: { position: 'fixed', inset: 0, zIndex: 1100, background: 'rgba(0,0,0,.72)', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 16 },
    panel: { width: 'min(520px, 100%)', maxHeight: '85vh', display: 'flex', flexDirection: 'column', overflow: 'hidden', borderRadius: 20, background: 'var(--bg-secondary)', border: '1px solid var(--border-default)', color: 'var(--text-primary)', boxShadow: '0 24px 80px rgba(0,0,0,.55)' },
    header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '22px 24px 16px', borderBottom: '1px solid var(--border-subtle)' },
    title: { margin: 0, fontSize: '1.1rem' }, hint: { color: 'var(--text-tertiary)', fontSize: '.76rem' },
    close: { border: 0, background: 'transparent', fontSize: '1.2rem', color: 'var(--text-secondary)', cursor: 'pointer' },
    invite: { padding: '16px 24px', display: 'grid', gap: 8 }, inviteRow: { display: 'flex', gap: 8 },
    input: { flex: 1, minWidth: 0, background: 'var(--bg-primary)', color: 'var(--text-primary)', border: '1px solid var(--border-default)', borderRadius: 10, padding: '10px 12px' },
    primary: { border: 0, borderRadius: 10, padding: '10px 14px', background: 'var(--vortex-primary)', color: 'white', cursor: 'pointer', fontWeight: 600 },
    list: { overflowY: 'auto', padding: '4px 16px 16px' },
    row: { display: 'flex', alignItems: 'center', gap: 10, padding: '12px 8px', borderBottom: '1px solid var(--border-subtle)' },
    avatar: { width: 36, height: 36, borderRadius: '50%', background: 'var(--vortex-primary)', color: 'white', display: 'grid', placeItems: 'center', flexShrink: 0 },
    details: { flex: 1, minWidth: 0 }, name: { fontSize: '.86rem', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis' },
    actions: { display: 'flex' }, action: { background: 'rgba(124,58,237,.15)', border: 0, borderRadius: 8, color: 'var(--vortex-primary-light)', padding: '8px', fontSize: '.72rem', cursor: 'pointer' },
    danger: { background: 'transparent', border: 0, color: '#f87171', cursor: 'pointer', fontSize: '.75rem' },
    footer: { padding: '12px 24px 20px', borderTop: '1px solid var(--border-subtle)' },
    leave: { width: '100%', border: '1px solid rgba(248,113,113,.3)', borderRadius: 10, background: 'rgba(248,113,113,.08)', padding: 12, color: '#f87171', cursor: 'pointer' },
    error: { margin: '0 24px 12px', color: '#f87171', fontSize: '.8rem' }
};
