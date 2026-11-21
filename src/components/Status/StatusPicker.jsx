import { useEffect, useRef } from 'preact/hooks';
import { statusService } from '../../services/statusService';
import { trapDialogTab } from '../../utils/dialogFocus.js';

export function StatusPicker({ userId, onClose }) {
    const emojis = statusService.getEmojis();
    const presets = statusService.PRESET_STATUSES;
    const dialogRef = useRef(null);
    const closeRef = useRef(null);
    const onCloseRef = useRef(onClose);
    onCloseRef.current = onClose;

    useEffect(() => {
        const previous = document.activeElement;
        closeRef.current?.focus();
        const onKey = event => {
            if (event.key === 'Escape') {
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

    return (
        <div style={st.overlay} onClick={onClose}>
            <div ref={dialogRef} style={st.modal} role="dialog" aria-modal="true" aria-labelledby="vortex-status-title" tabIndex={-1} onClick={e => e.stopPropagation()}>
                <div style={st.header}>
                    <h4 id="vortex-status-title">😊 Выбрать статус</h4>
                    <button ref={closeRef} type="button" aria-label="Закрыть выбор статуса" onClick={onClose} style={st.closeBtn}>✕</button>
                </div>
                <div style={st.body}>
                    <div style={st.emojis}>
                        {emojis.map(emoji => (
                            <button key={emoji} onClick={() => { statusService.setEmojiStatus(userId, emoji); onClose(); }} style={st.emojiBtn}>{emoji}</button>
                        ))}
                    </div>
                    <div style={st.divider} />
                    <h5>Готовые статусы</h5>
                    {presets.map(preset => (
                        <button key={preset.text} onClick={() => { statusService.setEmojiStatus(userId, preset.emoji); statusService.setTextStatus(userId, preset.text); onClose(); }} style={st.presetBtn}>
                            {preset.emoji} {preset.text}
                        </button>
                    ))}
                    <button onClick={() => { statusService.clearStatus(userId); onClose(); }} style={{...st.presetBtn, color: 'var(--vortex-danger)' }}>✕ Очистить статус</button>
                </div>
            </div>
        </div>
    );
}

const st = {
    overlay: { position:'fixed', inset:0, background:'rgba(0,0,0,0.6)', zIndex:1000, display:'flex', alignItems:'center', justifyContent:'center', backdropFilter:'blur(4px)' },
    modal: { background:'var(--bg-secondary)', borderRadius:'16px', width:'400px', maxWidth:'90vw', border:'1px solid var(--border-default)', boxShadow:'0 20px 60px rgba(0,0,0,0.5)' },
    header: { display:'flex', justifyContent:'space-between', alignItems:'center', padding:'1rem 1.25rem', borderBottom:'1px solid var(--border-subtle)' },
    closeBtn: { background:'none', border:'none', color:'var(--text-secondary)', cursor:'pointer', fontSize:'1.1rem' },
    body: { padding:'1rem' },
    emojis: { display:'flex', flexWrap:'wrap', gap:'8px', marginBottom:'1rem' },
    emojiBtn: { background:'rgba(255,255,255,0.04)', border:'1px solid var(--border-default)', borderRadius:'12px', fontSize:'1.5rem', padding:'8px', cursor:'pointer', transition:'transform 0.15s' },
    divider: { height:'1px', background:'var(--border-subtle)', margin:'0.75rem 0' },
    presetBtn: { display:'block', width:'100%', padding:'0.6rem 1rem', background:'transparent', border:'none', borderRadius:'8px', color:'var(--text-primary)', cursor:'pointer', textAlign:'left', fontSize:'0.9rem', transition:'background 0.15s' }
};