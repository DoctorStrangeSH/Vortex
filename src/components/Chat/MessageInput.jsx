import { useRef } from 'preact/hooks';
import { Icon } from '../UI/Icon';

export function MessageInput({ text, onTextChange, onSend, sending = false, onTyping, isRecording, voiceStarting = false, recordSeconds = 0, onStartVoice, onStopVoice, onCancelVoice, onFileSend, uploadingAttachments = false, editingMessage, onCancelEdit }) {
    const fileInputRef = useRef(null);

    const handleInput = (value) => {
        onTextChange(value);
        onTyping?.();
    };

    return (
        <div class="vortex-composer" style={s.container}>
            {editingMessage && (
                <div class="vortex-edit-banner" style={s.editBar} role="status">
                    <span>✏️ Редактирование</span>
                    <button type="button" aria-label="Отменить редактирование" onClick={onCancelEdit} style={s.cancelBtn}>✕</button>
                </div>
            )}
            <div class="vortex-composer-controls" style={s.wrapper}>
                <button type="button" class="vortex-icon-button" aria-label="Прикрепить файл" title={uploadingAttachments ? "Отправка файлов…" : "Прикрепить файл"} style={s.btn} disabled={uploadingAttachments} onClick={() => fileInputRef.current?.click()}><Icon name="paperclip" /></button>
                <input type="file" ref={fileInputRef} onChange={onFileSend} accept="*/*" multiple style={{ display: 'none' }} />
                
                <button type="button" title={isRecording ? 'Отправить запись' : voiceStarting ? 'Ожидаем микрофон' : 'Начать запись'}
                    aria-label={isRecording ? 'Отправить голосовое сообщение' : 'Начать запись голосового сообщения'}
                    class="vortex-icon-button" style={{ ...s.btn, background: isRecording ? 'var(--vortex-danger)' : 'transparent', color: isRecording ? '#fff' : 'var(--text-secondary)' }}
                    onClick={isRecording ? onStopVoice : voiceStarting ? undefined : onStartVoice}
                    disabled={voiceStarting}
                >{isRecording ? <Icon name="send" /> : voiceStarting ? <Icon name="loader" /> : <Icon name="microphone" />}</button>
                {(isRecording || voiceStarting) && <div class="vortex-voice-status" style={s.voiceStatus} role="status">
                    {voiceStarting ? 'Микрофон…' : `🔴 ${Math.floor(recordSeconds / 60).toString().padStart(2, '0')}:${(recordSeconds % 60).toString().padStart(2, '0')}`}
                    <button type="button" onClick={onCancelVoice} aria-label="Отменить запись" title="Отменить запись" style={s.cancelVoice}>✕</button>
                </div>}

                <input
                    type="text"
                    value={text}
                    onInput={(e) => handleInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Escape' && editingMessage) { e.preventDefault(); onCancelEdit?.(); }
                        if (e.key === 'Enter' && !e.isComposing && e.keyCode !== 229) {
                            e.preventDefault();
                            if (!sending && text.trim()) onSend();
                        }
                    }}
                    placeholder="Сообщение"
                    aria-label={editingMessage ? 'Редактировать сообщение' : 'Текст сообщения'}
                    class="vortex-composer-input" style={s.input}
                />

                <button type="button" onClick={onSend} disabled={!text.trim() || sending} aria-label={sending ? 'Отправка сообщения' : 'Отправить сообщение'}
                    class="vortex-send-button" style={{ ...s.sendBtn, opacity: text.trim() && !sending ? 1 : 0.4 }}>{sending ? <Icon name="loader" /> : <Icon name="send" />}</button>
            </div>
        </div>
    );
}

const s = {
    container: { padding:'0.8rem 1rem', borderTop:'1px solid var(--border-subtle)', background:'var(--surface-glass)', backdropFilter:'blur(20px)' },
    wrapper: { display:'flex', alignItems:'center', gap:'8px' },
    btn: { width:'40px', height:'40px', borderRadius:'13px', background:'transparent', border:'none', color:'var(--text-secondary)', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1rem', flexShrink:0 },
    input: { flex:1, padding:'0.85rem 1rem', background:'var(--bg-tertiary)', border:'1px solid var(--border-default)', borderRadius:'15px', color:'var(--text-primary)', fontSize:'16px', outline:'none', fontFamily:'inherit', minWidth:0 },
    sendBtn: { width:'43px', height:'43px', borderRadius:'14px', background:'var(--gradient-brand)', border:'none', color:'#fff', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1rem', transition:'all 0.2s', flexShrink:0 },
    editBar: { display:'flex', justifyContent:'space-between', alignItems:'center', padding:'0.4rem 0.8rem', background:'rgba(124,58,237,0.1)', borderBottom:'1px solid var(--border-subtle)', fontSize:'0.75rem', color:'var(--vortex-primary-light)' },
    voiceStatus: { display:'flex', alignItems:'center', gap:'4px', color:'var(--vortex-danger)', fontSize:'0.72rem', whiteSpace:'nowrap' },
    cancelVoice: { background:'transparent', border:'none', color:'var(--text-secondary)', cursor:'pointer', fontSize:'1rem', padding:'4px' },
    cancelBtn: { background:'none', border:'none', color:'var(--text-secondary)', cursor:'pointer' }
};
