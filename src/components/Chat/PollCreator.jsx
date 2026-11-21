import { useEffect, useRef, useState } from 'preact/hooks';
import { trapDialogTab } from '../../utils/dialogFocus.js';

export function PollCreator({ onSend, onClose }) {
    const dialogRef = useRef(null);
    const onCloseRef = useRef(onClose);
    onCloseRef.current = onClose;
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState(['', '']);

    useEffect(() => {
        const previous = document.activeElement;
        dialogRef.current?.querySelector('input:not([disabled]), button:not([disabled])')?.focus();
        const handleKeyDown = event => {
            if (event.key === 'Escape') {
                event.preventDefault();
                onCloseRef.current?.();
                return;
            }
            trapDialogTab(event, dialogRef.current);
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            previous?.focus?.();
        };
    }, []);
    
    const addOption = () => setOptions([...options, '']);
    
    const removeOption = (i) => {
        if (options.length <= 2) return;
        setOptions(options.filter((_, idx) => idx !== i));
    };
    
    const updateOption = (i, value) => {
        const updated = [...options];
        updated[i] = value;
        setOptions(updated);
    };
    
    const handleSend = () => {
        const validOptions = options.filter(o => o.trim());
        if (!question.trim() || validOptions.length < 2) {
            alert('Введите вопрос и минимум 2 варианта');
            return;
        }
        
        onSend({
            type: 'poll',
            question: question.trim(),
            options: validOptions.map(o => o.trim()),
            votes: {},
            totalVotes: 0,
            isPoll: true
        });
        
        setQuestion('');
        setOptions(['', '']);
    };
    
    return (
        <div ref={dialogRef} style={s.container} class="vortex-dialog-surface vortex-poll-creator" role="dialog" aria-modal="true" aria-labelledby="vortex-poll-creator-title" tabIndex={-1}>
            <div style={s.heading}><h4 id="vortex-poll-creator-title" style={s.title}>📊 Создать опрос</h4><button type="button" aria-label="Закрыть создание опроса" onClick={() => onClose?.()} style={s.closeBtn}>×</button></div>
            
            <label style={s.fieldLabel}>Вопрос<input aria-label="Вопрос опроса" required value={question} onInput={e => setQuestion(e.target.value)} placeholder="Введите вопрос" style={s.input} /></label>
            
            {options.map((opt, i) => (
                <div key={i} style={s.optionRow}>
                    <label style={s.optionLabel}>Вариант {i + 1}<input aria-label={`Вариант ответа ${i + 1}`} required={i < 2} value={opt} onInput={e => updateOption(i, e.target.value)} placeholder={`Введите вариант ${i + 1}`} style={s.optionInput} /></label>
                    {options.length > 2 && <button type="button" aria-label={`Удалить вариант ${i + 1}`} onClick={() => removeOption(i)} style={s.removeBtn}>✕</button>}
                </div>
            ))}
            
            <button type="button" onClick={addOption} style={s.addBtn}>+ Добавить вариант</button>
            <div style={s.actions}><button type="button" onClick={() => onClose?.()} style={s.cancelBtn}>Отмена</button><button type="button" onClick={handleSend} style={s.sendBtn}>📊 Отправить опрос</button></div>
        </div>
    );
}

const s = {
    container: { padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--border-default)' },
    heading: { display:'flex', alignItems:'center', justifyContent:'space-between', gap:'12px' },
    title: { marginBottom: '0.75rem', fontSize: '1rem' },
    closeBtn: { border:0, background:'transparent', color:'var(--text-secondary)', fontSize:'1.5rem', cursor:'pointer', padding:'4px 8px' },
    fieldLabel: { display:'flex', flexDirection:'column', gap:'6px', marginBottom:'8px', fontSize:'0.8rem', color:'var(--text-secondary)' },
    optionLabel: { display:'flex', flexDirection:'column', flex:1, gap:'4px', fontSize:'0.72rem', color:'var(--text-tertiary)' },
    input: { width: '100%', padding: '0.6rem 0.8rem', marginBottom: '0.5rem', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-default)', borderRadius: '8px', color: 'var(--text-primary)', fontSize: '0.9rem', outline: 'none' },
    optionRow: { display: 'flex', alignItems:'end', gap: '6px', marginBottom: '6px' },
    actions: { display:'flex', gap:'8px', marginTop:'0.75rem' },
    cancelBtn: { padding:'0.6rem 0.9rem', background:'var(--bg-tertiary)', border:'1px solid var(--border-default)', borderRadius:'10px', color:'var(--text-primary)', cursor:'pointer' },
    optionInput: { flex: 1, padding: '0.5rem 0.8rem', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-default)', borderRadius: '8px', color: 'var(--text-primary)', fontSize: '0.85rem', outline: 'none' },
    removeBtn: { background: 'none', border: 'none', color: 'var(--vortex-danger)', cursor: 'pointer' },
    addBtn: { background: 'none', border: 'none', color: 'var(--vortex-primary-light)', cursor: 'pointer', fontSize: '0.85rem', padding: '0.3rem 0' },
    sendBtn: { flex:1, width: '100%', marginTop: 0, padding: '0.6rem', background: 'var(--gradient-brand)', border: 'none', borderRadius: '10px', color: '#fff', fontWeight: 600, cursor: 'pointer' }
};