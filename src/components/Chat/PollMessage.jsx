export function PollMessage({ poll, userId, onVote }) {
    const totalVotes = poll.totalVotes || 0;
    const userVote = poll.votes?.[userId];
    
    return (
        <div style={s.container}>
            <div style={s.question}>📊 {poll.question}</div>
            
            {poll.options.map((opt, i) => {
                const votes = poll.votes?.[opt]?.length || 0;
                const percent = totalVotes > 0 ? Math.round((votes / totalVotes) * 100) : 0;
                const isVoted = userVote === opt;
                
                return (
                    <div key={i} style={{...s.option, background: isVoted ? 'rgba(124,58,237,0.15)' : 'rgba(255,255,255,0.04)'}} onClick={() => onVote(opt)}>
                        <div style={s.optionHeader}>
                            <span>{opt}</span>
                            <span style={s.percent}>{percent}%</span>
                        </div>
                        <div style={s.barBg}>
                            <div style={{...s.barFill, width: `${percent}%`}} />
                        </div>
                        <div style={s.votes}>{votes} голосов</div>
                    </div>
                );
            })}
            
            <div style={s.total}>Всего голосов: {totalVotes}</div>
        </div>
    );
}

const s = {
    container: { padding: '0.5rem' },
    question: { fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.9rem' },
    option: { padding: '0.5rem 0.75rem', borderRadius: '8px', marginBottom: '4px', cursor: 'pointer', transition: 'background 0.15s' },
    optionHeader: { display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '4px' },
    percent: { fontWeight: 600, color: 'var(--vortex-primary-light)' },
    barBg: { height: '4px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px', overflow: 'hidden' },
    barFill: { height: '100%', background: 'var(--gradient-brand)', borderRadius: '2px', transition: 'width 0.3s' },
    votes: { fontSize: '0.7rem', color: 'var(--text-tertiary)', marginTop: '2px' },
    total: { fontSize: '0.75rem', color: 'var(--text-tertiary)', marginTop: '6px', textAlign: 'center' }
};