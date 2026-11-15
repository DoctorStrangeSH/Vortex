import { useRef } from 'preact/hooks';

export function MessageInput({ text, onTextChange, onSend, sending = false, onTyping, isRecording, voiceStarting = false, recordSeconds = 0, onStartVoice, onStopVoice, onCancelVoice, onShowAI, onFileSend, editingMessage, onCancelEdit }) {
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
                <input type="file" ref={fileInputRef} onChange={onFileSend} accept="*/*" multiple style={{ display: 'none' }} />
                
                <button type="button" title={isRecording ? 'Отправить запись' : voiceStarting ? 'Ожидаем микрофон' : 'Начать запись'}
                    aria-label={isRecording ? 'Отправить голосовое сообщение' : 'Начать запись голосового сообщения'}
                    style={{ ...s.btn, background: isRecording ? 'var(--vortex-danger)' : 'transparent', color: isRecording ? '#fff' : 'var(--text-secondary)' }}
                    onClick={isRecording ? onStopVoice : voiceStarting ? undefined : onStartVoice}
                    disabled={voiceStarting}
                >{isRecording ? '➤' : voiceStarting ? '⏳' : '🎙️'}</button>
                {(isRecording || voiceStarting) && <div style={s.voiceStatus} role="status">
                    {voiceStarting ? 'Микрофон…' : `🔴 ${Math.floor(recordSeconds / 60).toString().padStart(2, '0')}:${(recordSeconds % 60).toString().padStart(2, '0')}`}
                    <button type="button" onClick={onCancelVoice} aria-label="Отменить запись" title="Отменить запись" style={s.cancelVoice}>✕</button>
                </div>}

                <input
                    type="text"
                    value={text}
                    onInput={(e) => handleInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); if (!sending) onSend(); } }}
                    placeholder="Сообщение"
                    style={s.input}
                />

                <button style={s.btn} onClick={onShowAI}>🤖</button>
                <button onClick={onSend} disabled={!text.trim() || sending} aria-label={sending ? 'Отправка сообщения' : 'Отправить сообщение'}
                    style={{ ...s.sendBtn, opacity: text.trim() && !sending ? 1 : 0.4 }}>{sending ? '…' : '➤'}</button>
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
    voiceStatus: { display:'flex', alignItems:'center', gap:'4px', color:'var(--vortex-danger)', fontSize:'0.72rem', whiteSpace:'nowrap' },
    cancelVoice: { background:'transparent', border:'none', color:'var(--text-secondary)', cursor:'pointer', fontSize:'1rem', padding:'4px' },
    cancelBtn: { background:'none', border:'none', color:'var(--text-secondary)', cursor:'pointer' }
};
