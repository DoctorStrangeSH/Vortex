import { useEffect, useRef } from 'preact/hooks';
import { clampOverlayPosition } from '../../services/overlayPosition.js';
import { getNextMenuItemIndex } from '../../utils/menuNavigation.js';

export function ContextMenu({ x, y, messageId, text, isOwn, isPinned, onCopy, onEdit, onPin, onDelete, onReply, onClose }) {
    const menuRef = useRef(null);
    const { x: adjustedX, y: adjustedY } = clampOverlayPosition(x, y, 200, 260, window.innerWidth, window.innerHeight);

    useEffect(() => { menuRef.current?.querySelector('button')?.focus(); }, [messageId]);
    const onMenuKeyDown = event => {
        if (event.key === 'Escape') {
            event.preventDefault();
            onClose?.();
            return;
        }
        const buttons = [...event.currentTarget.querySelectorAll('button:not(:disabled)')];
        const index = buttons.indexOf(event.target.closest('button'));
        const next = getNextMenuItemIndex(event.key, index, buttons.length);
        if (next < 0) return;
        event.preventDefault();
        buttons[next]?.focus();
    };

    return (
        <div ref={menuRef} onKeyDown={onMenuKeyDown} class="vortex-context-menu" role="menu" aria-label="Действия с сообщением" style={{ ...s.menu, top: adjustedY, left: adjustedX }}>
            <button type="button" role="menuitem" class="vortex-menu-item" style={s.item} onClick={() => onCopy(text)}>📋 Копировать</button>
            {onReply && <button type="button" role="menuitem" class="vortex-menu-item" style={s.item} onClick={() => onReply(messageId)}>💬 Ответить</button>}
            {isOwn && onEdit && <button type="button" role="menuitem" class="vortex-menu-item" style={s.item} onClick={() => onEdit(messageId, text)}>✏️ Редактировать</button>}
            <button type="button" role="menuitem" class="vortex-menu-item" style={s.item} onClick={() => onPin(messageId, text)}>
                {isPinned ? '📌 Открепить' : '📌 Закрепить'}
            </button>
            {isOwn && onDelete && <button type="button" role="menuitem" class="vortex-menu-item" style={{ ...s.item, color: 'var(--vortex-danger)' }} onClick={() => onDelete(messageId)}>🗑️ Удалить</button>}
        </div>
    );
}

const s = {
    menu: { 
        position: 'fixed', 
        background: 'var(--surface-glass)', 
        border: '1px solid var(--border-default)', 
        borderRadius: '16px', 
        boxShadow: '0 22px 60px rgba(0,0,0,0.48)', 
        zIndex: 9999, 
        minWidth: '170px', 
        maxWidth: '200px',
        padding: '7px',
        animation: 'menuPopup 0.15s ease'
    },
    item: { 
        display: 'block', 
        width: '100%', 
        padding: '11px 14px', 
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
