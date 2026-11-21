import { useEffect, useRef } from 'preact/hooks';
import { clampOverlayPosition } from '../../services/overlayPosition.js';
import { getNextMenuItemIndex } from '../../utils/menuNavigation.js';
const EMOJIS = ['👍', '❤️', '😂', '😮', '😢', '😡'];

export function ReactionPicker({ x, y, onReaction, onClose }) {
    const pickerRef = useRef(null);
    const previousFocusRef = useRef(null);

    useEffect(() => {
        previousFocusRef.current = document.activeElement;
        pickerRef.current?.querySelector('button:not([disabled])')?.focus();
    }, []);

    const handleKeyDown = event => {
        if (event.key === 'Escape') {
            event.preventDefault();
            const previous = previousFocusRef.current;
            if (previous?.isConnected && (previous.matches?.('button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'))) previous.focus();
            onClose?.();
            return;
        }
        const items = [...event.currentTarget.querySelectorAll('button:not([disabled])')];
        const current = items.indexOf(event.target.closest('button'));
        const next = getNextMenuItemIndex(event.key, current, items.length);
        if (next < 0) return;
        event.preventDefault();
        items[next]?.focus();
    };

    const position = clampOverlayPosition(x - 125, y, 250, 66, window.innerWidth, window.innerHeight);
    return (
        <div ref={pickerRef} class="vortex-reaction-picker" role="group" aria-label="Выбрать реакцию" onKeyDown={handleKeyDown} style={{
            position:'fixed', top: position.y, left: position.x,
            background:'var(--surface-glass)', border:'1px solid var(--border-default)',
            borderRadius:'18px', padding:'8px 10px', display:'flex', gap:'6px',
            zIndex:9999, boxShadow:'0 18px 50px rgba(0,0,0,0.48)'
        }}>
            {EMOJIS.map(emoji => (
                <button type="button" class="vortex-reaction-choice" aria-label={`Поставить реакцию ${emoji}`} key={emoji} tabIndex={emoji === EMOJIS[0] ? 0 : -1} onClick={() => onReaction(emoji)}
                    style={{ background:'none', border:'none', fontSize:'1.4rem', cursor:'pointer', padding:'4px', borderRadius:'50%', transition:'transform 0.15s' }}
                    >
                    {emoji}
                </button>
            ))}
        </div>
    );
}
