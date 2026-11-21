import { useEffect, useRef, useState } from 'preact/hooks';
import { themeService } from '../../services/themeService';
import { Icon } from '../UI/Icon';
import { trapDialogTab } from '../../utils/dialogFocus.js';

export function ThemeCustomizer({ onClose }) {
    const [activeTab, setActiveTab] = useState('presets');
    const [primaryColor, setPrimaryColor] = useState('#8968FF');
    const [secondaryColor, setSecondaryColor] = useState('#6FE2CA');
    const [mode, setMode] = useState(themeService.get());
    const [selectedPreset, setSelectedPreset] = useState(() => themeService.getActivePreset());
    const presets = themeService.getPresetThemes();
    const dialogRef = useRef(null);
    const onCloseRef = useRef(onClose);
    onCloseRef.current = onClose;

    useEffect(() => {
        const root = document.documentElement;
        const primary = getComputedStyle(root).getPropertyValue('--vortex-primary').trim();
        const secondary = getComputedStyle(root).getPropertyValue('--vortex-secondary').trim();
        setPrimaryColor(primary || '#8968FF');
        setSecondaryColor(secondary || '#6FE2CA');
        return themeService.onChange(() => setMode(themeService.get()));
    }, []);

    useEffect(() => {
        const previous = document.activeElement;
        dialogRef.current?.querySelector('button:not([disabled])')?.focus();
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

    const handleColorChange = (type, value) => {
        if (!/^#[0-9a-fA-F]{6}$/.test(value)) {
            if (type === 'primary') setPrimaryColor(value);
            else setSecondaryColor(value);
            return;
        }
        if (type === 'primary') {
            setPrimaryColor(value);
            setSelectedPreset(null);
            themeService.setCustomColor('--vortex-primary', value);
            themeService.setCustomColor('--gradient-brand', `linear-gradient(135deg, ${value}, ${secondaryColor})`);
        } else {
            setSecondaryColor(value);
            setSelectedPreset(null);
            themeService.setCustomColor('--vortex-secondary', value);
            themeService.setCustomColor('--gradient-brand', `linear-gradient(135deg, ${primaryColor}, ${value})`);
        }
    };

    const applyPreset = (name) => {
        themeService.applyPreset(name);
        setSelectedPreset(name);
        const preset = presets[name];
        setPrimaryColor(preset.primary);
        setSecondaryColor(preset.secondary);
    };

    const resetColors = () => {
        themeService.resetCustomColors();
        setSelectedPreset(null);
        const styles = getComputedStyle(document.documentElement);
        setPrimaryColor(styles.getPropertyValue('--vortex-primary').trim());
        setSecondaryColor(styles.getPropertyValue('--vortex-secondary').trim());
    };

    return (
        <div class="vortex-dialog-overlay" style={s.overlay} onClick={onClose}>
            <div ref={dialogRef} class="vortex-settings-modal vortex-dialog-surface" role="dialog" aria-modal="true" aria-labelledby="vortex-theme-title" tabIndex={-1} style={s.modal} onClick={e => e.stopPropagation()}>
                <div class="vortex-settings-header" style={s.header}>
                    <div><div class="vortex-settings-eyebrow">ВАШ VORTEX · ВАШИ ПРАВИЛА</div><h3 id="vortex-theme-title">Оформление</h3></div>
                    <button type="button" aria-label="Закрыть настройки" onClick={onClose} style={s.closeBtn}><Icon name="close" size={20} /></button>
                </div>

                <div class="vortex-settings-mode" role="group" aria-label="Яркость интерфейса">
                    <button type="button" aria-pressed={mode === 'dark'} class={mode === 'dark' ? 'is-active' : ''} onClick={() => themeService.setTheme('dark')}><Icon name="moon" size={18} /> Тёмная</button>
                    <button type="button" aria-pressed={mode === 'light'} class={mode === 'light' ? 'is-active' : ''} onClick={() => themeService.setTheme('light')}><Icon name="sun" size={18} /> Светлая</button>
                </div>

                <div role="tablist" aria-label="Настройка цветов" style={s.tabs}>
                    <button type="button" role="tab" aria-selected={activeTab === 'presets'} onClick={() => setActiveTab('presets')} style={{...s.tab, background: activeTab === 'presets' ? 'var(--bg-active)' : 'transparent'}}>Коллекция тем</button>
                    <button type="button" role="tab" aria-selected={activeTab === 'custom'} onClick={() => setActiveTab('custom')} style={{...s.tab, background: activeTab === 'custom' ? 'var(--bg-active)' : 'transparent'}}>Свои цвета</button>
                </div>

                <div style={s.body}>
                    {activeTab === 'presets' && (
                        <div style={s.presets}>
                            {Object.entries(presets).map(([key, preset]) => (
                                <button type="button" class={`vortex-theme-preset ${selectedPreset === key ? 'is-active' : ''}`} aria-label={`Применить тему ${preset.name}`} aria-pressed={selectedPreset === key} key={key} onClick={() => applyPreset(key)} style={s.presetItem}>
                                    <div class="vortex-theme-swatch" style={{...s.presetPreview, background: `linear-gradient(135deg, ${preset.primary}, ${preset.secondary})`}} />
                                    <span>{preset.name}</span><span class="vortex-theme-choice">{selectedPreset === key ? '✓ Выбрана' : 'Применить'}</span>
                                </button>
                            ))}
                        </div>
                    )}

                    {activeTab === 'custom' && (
                        <div>
                            <div style={s.field}>
                                <label for="vortex-theme-primary">Основной цвет</label>
                                <div style={s.colorRow}>
                                    <input aria-label="Выбрать основной цвет" type="color" value={/^#[\da-f]{6}$/i.test(primaryColor) ? primaryColor : '#8968FF'} onInput={e => handleColorChange('primary', e.target.value)} style={s.colorInput} />
                                    <input id="vortex-theme-primary" type="text" maxLength={7} value={primaryColor} onInput={e => handleColorChange('primary', e.target.value)} style={s.textInput} />
                                </div>
                            </div>
                            <div style={s.field}>
                                <label for="vortex-theme-secondary">Акцентный цвет</label>
                                <div style={s.colorRow}>
                                    <input aria-label="Выбрать акцентный цвет" type="color" value={/^#[\da-f]{6}$/i.test(secondaryColor) ? secondaryColor : '#6FE2CA'} onInput={e => handleColorChange('secondary', e.target.value)} style={s.colorInput} />
                                    <input id="vortex-theme-secondary" type="text" maxLength={7} value={secondaryColor} onInput={e => handleColorChange('secondary', e.target.value)} style={s.textInput} />
                                </div>
                            </div>
                            <button type="button" onClick={resetColors} style={s.resetBtn}>Сбросить цвета</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

const s = {
    overlay: { position:'fixed', inset:0, background:'rgba(0,0,0,0.6)', zIndex:1000, display:'flex', alignItems:'center', justifyContent:'center', backdropFilter:'blur(4px)' },
    modal: { background:'var(--bg-secondary)', borderRadius:'24px', width:'480px', maxWidth:'90vw', maxHeight:'80vh', display:'flex', flexDirection:'column', border:'1px solid var(--border-default)', boxShadow:'0 20px 60px rgba(0,0,0,0.5)' },
    header: { display:'flex', justifyContent:'space-between', alignItems:'center', padding:'1rem 1.25rem', borderBottom:'1px solid var(--border-subtle)' },
    closeBtn: { background:'none', border:'none', color:'var(--text-secondary)', cursor:'pointer', fontSize:'1.1rem' },
    tabs: { display:'flex', padding:'0.75rem', gap:'4px' },
    tab: { flex:1, padding:'0.6rem', border:'none', borderRadius:'8px', cursor:'pointer', color:'var(--text-primary)', fontSize:'0.85rem', fontWeight:500 },
    body: { padding:'1rem', overflowY:'auto', flex:1 },
    presets: { display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'10px' },
    presetItem: { textAlign:'center', cursor:'pointer', padding:'0.7rem', borderRadius:'14px', background:'var(--bg-tertiary)', color:'var(--text-primary)', border:'1px solid var(--border-default)', transition:'background 0.15s' },
    presetPreview: { width:'100%', height:'56px', borderRadius:'10px', marginBottom:'6px' },
    field: { marginBottom:'1rem' },
    colorRow: { display:'flex', gap:'8px', alignItems:'center' },
    colorInput: { width:'40px', height:'40px', border:'none', borderRadius:'8px', cursor:'pointer', background:'transparent' },
    textInput: { flex:1, padding:'0.6rem', background:'rgba(255,255,255,0.04)', border:'1px solid var(--border-default)', borderRadius:'8px', color:'var(--text-primary)', fontSize:'0.9rem', outline:'none' },
    resetBtn: { width:'100%', padding:'0.6rem', background:'transparent', border:'1px solid var(--border-default)', borderRadius:'8px', color:'var(--text-secondary)', cursor:'pointer' }
};
