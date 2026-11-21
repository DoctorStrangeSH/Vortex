import { useEffect, useRef } from 'preact/hooks';
import { trapDialogTab } from '../../utils/dialogFocus.js';

export function PinnedMessagesDialog({ messages, onClose, onSelect }) {
    const closeRef = useRef(null);
    const dialogRef = useRef(null);
    const onCloseRef = useRef(onClose);
    onCloseRef.current = onClose;

    useEffect(() => {
        const previous = document.activeElement;
        closeRef.current?.focus();
        const handleKeyDown = event => {
            if (event.key === 'Escape') { event.preventDefault(); onCloseRef.current(); }
            trapDialogTab(event, dialogRef.current);
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            previous?.focus?.();
        };
    }, []);

    return (
        <div class="vortex-dialog-overlay vortex-pinned-overlay" style={styles.overlay} onClick={onClose}>
            <section ref={dialogRef} class="vortex-dialog-surface vortex-pinned-dialog" role="dialog" aria-modal="true" aria-labelledby="vortex-pinned-heading" tabIndex={-1}
                style={styles.dialog} onClick={event => event.stopPropagation()}>
                <header class="vortex-pinned-dialog-header" style={styles.header}>
                    <div>
                        <h3 id="vortex-pinned-heading">Закреплённые сообщения</h3>
                        <span style={styles.hint}>{messages.length} в этой переписке</span>
                    </div>
                    <button ref={closeRef} type="button" class="vortex-icon-button" aria-label="Закрыть список закреплённых" onClick={onClose} style={styles.close}>✕</button>
                </header>
                <div class="vortex-pinned-dialog-list" style={styles.list}>
                    {messages.map((message, index) => (
                        <button key={message.id} type="button" class="vortex-pinned-dialog-item" onClick={() => onSelect(message.id)}>
                            <span class="vortex-pinned-dialog-number">{index + 1}</span>
                            <span class="vortex-pinned-dialog-copy">
                                <span class="vortex-pinned-dialog-sender">{message.senderName || 'Сообщение'}</span>
                                <span class="vortex-pinned-dialog-text">{message.text || 'Вложение'}</span>
                            </span>
                        </button>
                    ))}
                </div>
            </section>
        </div>
    );
}

const styles = {
    overlay: { position:'fixed', inset:0, background:'rgba(2,5,16,.7)', zIndex:1000, display:'flex', alignItems:'center', justifyContent:'center', padding:'16px', backdropFilter:'blur(8px)' },
    dialog: { width:'min(480px, 100%)', maxHeight:'min(680px, 88dvh)', background:'var(--bg-secondary)', border:'1px solid var(--border-default)', borderRadius:'22px', display:'flex', flexDirection:'column', boxShadow:'0 30px 80px rgba(0,0,0,.4)' },
    header: { padding:'20px', display:'flex', alignItems:'center', justifyContent:'space-between', gap:'12px', borderBottom:'1px solid var(--border-subtle)' },
    hint: { color:'var(--text-secondary)', fontSize:'.75rem' },
    close: { background:'var(--bg-tertiary)', border:'1px solid var(--border-default)', borderRadius:'11px', minWidth:'38px', minHeight:'38px', color:'var(--text-primary)', cursor:'pointer' },
    list: { padding:'10px', minHeight:0, overflowY:'auto', overscrollBehavior:'contain' }
};
