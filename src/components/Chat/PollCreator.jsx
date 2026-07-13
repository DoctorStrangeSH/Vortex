import { useState } from 'preact/hooks';

export function PollCreator({ onSend }) {
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState(['', '']);
    
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
        <div style={s.container}>
            <h4 style={s.title}>📊 Создать опрос</h4>
            
            <input value={question} onInput={e => setQuestion(e.target.value)} placeholder="Вопрос" style={s.input} />
            
            {options.map((opt, i) => (
                <div key={i} style={s.optionRow}>
                    <input value={opt} onInput={e => updateOption(i, e.target.value)} placeholder={`Вариант ${i + 1}`} style={s.optionInput} />
                    {options.length > 2 && <button onClick={() => removeOption(i)} style={s.removeBtn}>✕</button>}
                </div>
            ))}
            
            <button onClick={addOption} style={s.addBtn}>+ Добавить вариант</button>
            <button onClick={handleSend} style={s.sendBtn}>📊 Отправить опрос</button>
        </div>
    );
}

const s = {
    container: { padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--border-default)' },
    title: { marginBottom: '0.75rem', fontSize: '1rem' },
    input: { width: '100%', padding: '0.6rem 0.8rem', marginBottom: '0.5rem', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-default)', borderRadius: '8px', color: 'var(--text-primary)', fontSize: '0.9rem', outline: 'none' },
    optionRow: { display: 'flex', gap: '6px', marginBottom: '6px' },
    optionInput: { flex: 1, padding: '0.5rem 0.8rem', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-default)', borderRadius: '8px', color: 'var(--text-primary)', fontSize: '0.85rem', outline: 'none' },
    removeBtn: { background: 'none', border: 'none', color: 'var(--vortex-danger)', cursor: 'pointer' },
    addBtn: { background: 'none', border: 'none', color: 'var(--vortex-primary-light)', cursor: 'pointer', fontSize: '0.85rem', padding: '0.3rem 0' },
    sendBtn: { width: '100%', marginTop: '0.75rem', padding: '0.6rem', background: 'var(--gradient-brand)', border: 'none', borderRadius: '10px', color: '#fff', fontWeight: 600, cursor: 'pointer' }
};