import { useState, useEffect } from 'preact/hooks';
import { themeService } from '../../services/themeService';

export function ThemeCustomizer({ onClose }) {
    const [activeTab, setActiveTab] = useState('presets');
    const [primaryColor, setPrimaryColor] = useState('#7C3AED');
    const [secondaryColor, setSecondaryColor] = useState('#06D6A0');
    const presets = themeService.getPresetThemes();

    useEffect(() => {
        const root = document.documentElement;
        const primary = getComputedStyle(root).getPropertyValue('--vortex-primary').trim();
        const secondary = getComputedStyle(root).getPropertyValue('--vortex-secondary').trim();
        setPrimaryColor(primary || '#7C3AED');
        setSecondaryColor(secondary || '#06D6A0');
    }, []);

    const handleColorChange = (type, value) => {
        if (type === 'primary') {
            setPrimaryColor(value);
            themeService.setCustomColor('--vortex-primary', value);
            themeService.setCustomColor('--gradient-brand', `linear-gradient(135deg, ${value}, ${secondaryColor})`);
        } else {
            setSecondaryColor(value);
            themeService.setCustomColor('--vortex-secondary', value);
            themeService.setCustomColor('--gradient-brand', `linear-gradient(135deg, ${primaryColor}, ${value})`);
        }
    };

    const applyPreset = (name) => {
        themeService.applyPreset(name);
        const preset = presets[name];
        setPrimaryColor(preset.primary);
        setSecondaryColor(preset.secondary);
    };

    return (
        <div style={s.overlay} onClick={onClose}>
            <div style={s.modal} onClick={e => e.stopPropagation()}>
                <div style={s.header}>
                    <h3>🎨 Кастомизация</h3>
                    <button onClick={onClose} style={s.closeBtn}>✕</button>
                </div>

                <div style={s.tabs}>
                    <button onClick={() => setActiveTab('presets')} style={{...s.tab, background: activeTab === 'presets' ? 'var(--bg-active)' : 'transparent'}}>🎨 Темы</button>
                    <button onClick={() => setActiveTab('custom')} style={{...s.tab, background: activeTab === 'custom' ? 'var(--bg-active)' : 'transparent'}}>🎯 Своё</button>
                </div>

                <div style={s.body}>
                    {activeTab === 'presets' && (
                        <div style={s.presets}>
                            {Object.entries(presets).map(([key, preset]) => (
                                <div key={key} onClick={() => applyPreset(key)} style={s.presetItem}>
                                    <div style={{...s.presetPreview, background: `linear-gradient(135deg, ${preset.primary}, ${preset.secondary})`}} />
                                    <span>{preset.name}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'custom' && (
                        <div>
                            <div style={s.field}>
                                <label>Основной цвет</label>
                                <div style={s.colorRow}>
                                    <input type="color" value={primaryColor} onInput={e => handleColorChange('primary', e.target.value)} style={s.colorInput} />
                                    <input type="text" value={primaryColor} onInput={e => handleColorChange('primary', e.target.value)} style={s.textInput} />
                                </div>
                            </div>
                            <div style={s.field}>
                                <label>Акцентный цвет</label>
                                <div style={s.colorRow}>
                                    <input type="color" value={secondaryColor} onInput={e => handleColorChange('secondary', e.target.value)} style={s.colorInput} />
                                    <input type="text" value={secondaryColor} onInput={e => handleColorChange('secondary', e.target.value)} style={s.textInput} />
                                </div>
                            </div>
                            <button onClick={() => themeService.resetCustomColors()} style={s.resetBtn}>🔄 Сбросить</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

const s = {
    overlay: { position:'fixed', inset:0, background:'rgba(0,0,0,0.6)', zIndex:1000, display:'flex', alignItems:'center', justifyContent:'center', backdropFilter:'blur(4px)' },
    modal: { background:'var(--bg-secondary)', borderRadius:'16px', width:'460px', maxWidth:'90vw', maxHeight:'80vh', display:'flex', flexDirection:'column', border:'1px solid var(--border-default)', boxShadow:'0 20px 60px rgba(0,0,0,0.5)' },
    header: { display:'flex', justifyContent:'space-between', alignItems:'center', padding:'1rem 1.25rem', borderBottom:'1px solid var(--border-subtle)' },
    closeBtn: { background:'none', border:'none', color:'var(--text-secondary)', cursor:'pointer', fontSize:'1.1rem' },
    tabs: { display:'flex', padding:'0.75rem', gap:'4px' },
    tab: { flex:1, padding:'0.6rem', border:'none', borderRadius:'8px', cursor:'pointer', color:'var(--text-primary)', fontSize:'0.85rem', fontWeight:500 },
    body: { padding:'1rem', overflowY:'auto', flex:1 },
    presets: { display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'10px' },
    presetItem: { textAlign:'center', cursor:'pointer', padding:'0.5rem', borderRadius:'10px', transition:'background 0.15s' },
    presetPreview: { width:'100%', height:'50px', borderRadius:'10px', marginBottom:'6px' },
    field: { marginBottom:'1rem' },
    colorRow: { display:'flex', gap:'8px', alignItems:'center' },
    colorInput: { width:'40px', height:'40px', border:'none', borderRadius:'8px', cursor:'pointer', background:'transparent' },
    textInput: { flex:1, padding:'0.6rem', background:'rgba(255,255,255,0.04)', border:'1px solid var(--border-default)', borderRadius:'8px', color:'var(--text-primary)', fontSize:'0.9rem', outline:'none' },
    resetBtn: { width:'100%', padding:'0.6rem', background:'transparent', border:'1px solid var(--border-default)', borderRadius:'8px', color:'var(--text-secondary)', cursor:'pointer' }
};