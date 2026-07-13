const EMOJIS = ['👍', '❤️', '😂', '😮', '😢', '😡'];

export function ReactionPicker({ x, y, onReaction }) {
    return (
        <div style={{
            position:'fixed', top: y, left: x, transform:'translateX(-50%)',
            background:'var(--bg-secondary)', border:'1px solid var(--border-default)',
            borderRadius:'20px', padding:'6px 12px', display:'flex', gap:'6px',
            zIndex:9999, boxShadow:'0 8px 24px rgba(0,0,0,0.4)'
        }}>
            {EMOJIS.map(emoji => (
                <button key={emoji} onClick={() => onReaction(emoji)}
                    style={{ background:'none', border:'none', fontSize:'1.4rem', cursor:'pointer', padding:'4px', borderRadius:'50%', transition:'transform 0.15s' }}
                    onMouseEnter={e => e.target.style.transform = 'scale(1.3)'}
                    onMouseLeave={e => e.target.style.transform = 'scale(1)'}>
                    {emoji}
                </button>
            ))}
        </div>
    );
}