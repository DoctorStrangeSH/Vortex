export function ContextMenu({ x, y, messageId, text, isOwn, isPinned, onCopy, onEdit, onPin, onDelete, onReply }) {
    const adjustedX = Math.min(x, window.innerWidth - 190);
    const adjustedY = Math.min(y, window.innerHeight - 260);

    return (
        <div style={{ ...s.menu, top: adjustedY, left: adjustedX }}>
            <button style={s.item} onClick={() => onCopy(text)}>📋 Копировать</button>
            {onReply && <button style={s.item} onClick={() => onReply(messageId)}>💬 Ответить</button>}
            {isOwn && onEdit && <button style={s.item} onClick={() => onEdit(messageId, text)}>✏️ Редактировать</button>}
            <button style={s.item} onClick={() => onPin(messageId, text)}>
                {isPinned ? '📌 Открепить' : '📌 Закрепить'}
            </button>
            {isOwn && onDelete && <button style={{ ...s.item, color: 'var(--vortex-danger)' }} onClick={() => onDelete(messageId)}>🗑️ Удалить</button>}
        </div>
    );
}

const s = {
    menu: { 
        position: 'fixed', 
        background: 'var(--bg-secondary)', 
        border: '1px solid var(--border-default)', 
        borderRadius: '12px', 
        boxShadow: '0 8px 24px rgba(0,0,0,0.4)', 
        zIndex: 9999, 
        minWidth: '170px', 
        maxWidth: '200px',
        padding: '4px',
        animation: 'menuPopup 0.15s ease'
    },
    item: { 
        display: 'block', 
        width: '100%', 
        padding: '10px 14px', 
        background: 'transparent', 
        border: 'none', 
        borderRadius: '8px', 
        color: 'var(--text-primary)', 
        cursor: 'pointer', 
        textAlign: 'left', 
        fontSize: '0.85rem',
        fontFamily: 'inherit',
        transition: 'background 0.1s'
    }
};