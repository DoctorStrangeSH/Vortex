import { useState } from 'preact/hooks';
import { aiService } from '../../services/aiService';

export function AISettings({ onClose }) {
    const [geminiKey, setGeminiKey] = useState(aiService.geminiKey || '');
    const [deepseekKey, setDeepseekKey] = useState(aiService.deepseekKey || '');
    const [saved, setSaved] = useState(false);

    const handleSave = () => {
        if (geminiKey.trim()) aiService.setGeminiKey(geminiKey.trim());
        if (deepseekKey.trim()) aiService.setDeepseekKey(deepseekKey.trim());
        setSaved(true);
        setTimeout(() => { setSaved(false); onClose?.(); }, 1500);
    };

    return (
        <div style={s.overlay} onClick={onClose}>
            <div style={s.modal} onClick={e => e.stopPropagation()}>
                <div style={s.header}>
                    <h3>🤖 AI Настройки</h3>
                    <button onClick={onClose} style={s.closeBtn}>✕</button>
                </div>
                <div style={s.body}>
                    <div style={s.info}>
                        💡 <strong>Gemini API</strong> — бесплатно (1500 запросов/день)<br/>
                        🔗 <a href="https://aistudio.google.com/apikey" target="_blank" style={{color:'var(--vortex-primary-light)'}}>Получить ключ Gemini</a>
                    </div>
                    
                    <div style={s.field}>
                        <label>Gemini API Key (бесплатный)</label>
                        <input type="password" value={geminiKey} onInput={e => setGeminiKey(e.target.value)} placeholder="AIza..." style={s.input} />
                    </div>
                    
                    <div style={s.divider} />
                    
                    <div style={s.info}>
                        💰 <strong>DeepSeek API</strong> — дешёвый резерв ($0.27/1M токенов)<br/>
                        🔗 <a href="https://platform.deepseek.com/api_keys" target="_blank" style={{color:'var(--vortex-primary-light)'}}>Получить ключ DeepSeek</a>
                    </div>
                    
                    <div style={s.field}>
                        <label>DeepSeek API Key (резервный)</label>
                        <input type="password" value={deepseekKey} onInput={e => setDeepseekKey(e.target.value)} placeholder="sk-..." style={s.input} />
                    </div>

                    {saved && <div style={s.success}>✅ Ключи сохранены!</div>}

                    <button onClick={handleSave} style={s.saveBtn}>💾 Сохранить</button>
                </div>
            </div>
        </div>
    );
}

const s = {
    overlay: { position:'fixed', inset:0, background:'rgba(0,0,0,0.6)', zIndex:1000, display:'flex', alignItems:'center', justifyContent:'center', backdropFilter:'blur(4px)' },
    modal: { background:'var(--bg-secondary)', borderRadius:'16px', width:'460px', maxWidth:'90vw', border:'1px solid var(--border-default)', boxShadow:'0 20px 60px rgba(0,0,0,0.5)' },
    header: { display:'flex', justifyContent:'space-between', alignItems:'center', padding:'1rem 1.25rem', borderBottom:'1px solid var(--border-subtle)' },
    closeBtn: { background:'none', border:'none', color:'var(--text-secondary)', cursor:'pointer', fontSize:'1.1rem' },
    body: { padding:'1.25rem' },
    info: { padding:'0.75rem', background:'rgba(124,58,237,0.08)', borderRadius:'10px', fontSize:'0.8rem', color:'var(--text-secondary)', marginBottom:'1rem', lineHeight:1.5 },
    field: { marginBottom:'1rem' },
    input: { width:'100%', padding:'0.7rem 1rem', background:'rgba(255,255,255,0.04)', border:'1px solid var(--border-default)', borderRadius:'10px', color:'var(--text-primary)', fontSize:'0.9rem', outline:'none', fontFamily:'monospace' },
    divider: { height:'1px', background:'var(--border-subtle)', margin:'1rem 0' },
    success: { padding:'0.6rem 1rem', background:'rgba(6,214,160,0.1)', borderRadius:'10px', color:'var(--vortex-secondary)', fontSize:'0.85rem', marginBottom:'1rem', textAlign:'center' },
    saveBtn: { width:'100%', padding:'0.8rem', background:'var(--gradient-brand)', border:'none', borderRadius:'12px', color:'#fff', fontWeight:600, fontSize:'0.95rem', cursor:'pointer' }
};