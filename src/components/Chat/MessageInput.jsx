import { useRef } from 'preact/hooks';

export function MessageInput({ text, onTextChange, onSend, onTyping, isRecording, onStartVoice, onStopVoice, onShowAI, onFileSend, editingMessage, onCancelEdit }) {
    const fileInputRef = useRef(null);

    const handleInput = (value) => {
        onTextChange(value);
        onTyping?.();
    };

    return (
        <div style={s.container}>
            {editingMessage && (
                <div style={s.editBar}>
                    <span>✏️ Редактирование</span>
                    <button onClick={onCancelEdit} style={s.cancelBtn}>✕</button>
                </div>
            )}
            <div style={s.wrapper}>
                <button style={s.btn} onClick={() => fileInputRef.current?.click()}>📎</button>
                <input type="file" ref={fileInputRef} onChange={onFileSend} accept="*/*" style={{ display: 'none' }} />
                
                <button
                    style={{ ...s.btn, background: isRecording ? 'var(--vortex-danger)' : 'transparent', color: isRecording ? '#fff' : 'var(--text-secondary)' }}
                    onMouseDown={onStartVoice}
                    onMouseUp={onStopVoice}
                    onMouseLeave={onStopVoice}
                    onTouchStart={onStartVoice}
                    onTouchEnd={onStopVoice}
                >🎙️</button>

                <input
                    type="text"
                    value={text}
                    onInput={(e) => handleInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && onSend()}
                    placeholder="Сообщение"
                    style={s.input}
                />

                <button style={s.btn} onClick={onShowAI}>🤖</button>
                <button onClick={onSend} disabled={!text.trim()} style={{ ...s.sendBtn, opacity: text.trim() ? 1 : 0.4 }}>➤</button>
            </div>
        </div>
    );
}

const s = {
    container: { padding:'0.5rem 0.6rem', borderTop:'1px solid var(--border-subtle)', background:'rgba(10,10,20,0.9)', backdropFilter:'blur(20px)' },
    wrapper: { display:'flex', alignItems:'center', gap:'4px' },
    btn: { width:'34px', height:'34px', borderRadius:'50%', background:'transparent', border:'none', color:'var(--text-secondary)', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1rem', flexShrink:0 },
    input: { flex:1, padding:'0.55rem 0.8rem', background:'rgba(255,255,255,0.04)', border:'1px solid var(--border-default)', borderRadius:'20px', color:'var(--text-primary)', fontSize:'16px', outline:'none', fontFamily:'inherit', minWidth:0 },
    sendBtn: { width:'36px', height:'36px', borderRadius:'50%', background:'var(--gradient-brand)', border:'none', color:'#fff', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1rem', transition:'all 0.2s', flexShrink:0 },
    editBar: { display:'flex', justifyContent:'space-between', alignItems:'center', padding:'0.4rem 0.8rem', background:'rgba(124,58,237,0.1)', borderBottom:'1px solid var(--border-subtle)', fontSize:'0.75rem', color:'var(--vortex-primary-light)' },
    cancelBtn: { background:'none', border:'none', color:'var(--text-secondary)', cursor:'pointer' }
};