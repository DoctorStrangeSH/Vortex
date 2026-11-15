const EMOJIS = ['👍', '❤️', '😂', '😮', '😢', '😡'];

export function ReactionPicker({ x, y, onReaction }) {
    return (
        <div class="vortex-reaction-picker" role="group" aria-label="Выбрать реакцию" style={{
            position:'fixed', top: y, left: x, transform:'translateX(-50%)',
            background:'var(--surface-glass)', border:'1px solid var(--border-default)',
            borderRadius:'18px', padding:'8px 10px', display:'flex', gap:'6px',
            zIndex:9999, boxShadow:'0 18px 50px rgba(0,0,0,0.48)'
        }}>
            {EMOJIS.map(emoji => (
                <button type="button" class="vortex-reaction-choice" aria-label={`Поставить реакцию ${emoji}`} key={emoji} onClick={() => onReaction(emoji)}
                    style={{ background:'none', border:'none', fontSize:'1.4rem', cursor:'pointer', padding:'4px', borderRadius:'50%', transition:'transform 0.15s' }}
                    onMouseEnter={e => e.target.style.transform = 'scale(1.3)'}
                    onMouseLeave={e => e.target.style.transform = 'scale(1)'}>
                    {emoji}
                </button>
            ))}
        </div>
    );
}