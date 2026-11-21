import { useEffect, useRef } from 'preact/hooks';
import { Icon } from '../UI/Icon';
import { trapDialogTab } from '../../utils/dialogFocus.js';

export function ChatInfoDialog({ chat, other, avatarColor, loadedCount, pinnedCount, onClose, onGallery, onPinned, onMembers, onTheme, onExport }) {
    const surfaceRef = useRef(null);
    const closeRef = useRef(null);
    const skipFocusRestoreRef = useRef(false);
    const closeCallbackRef = useRef(onClose);
    closeCallbackRef.current = onClose;

    useEffect(() => {
        const previous = document.activeElement;
        closeRef.current?.focus();
        const onKeyDown = event => {
            if (event.key === 'Escape') {
                event.preventDefault();
                closeCallbackRef.current();
                return;
            }
            trapDialogTab(event, surfaceRef.current);
        };
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('keydown', onKeyDown);
            if (!skipFocusRestoreRef.current) previous?.focus?.();
        };
    }, []);

    const runAction = (handler, opensLayer = false) => {
        if (opensLayer) skipFocusRestoreRef.current = true;
        handler?.();
    };

    const group = chat.type === 'group';
    const channel = chat.type === 'channel';
    const kind = group ? 'Группа' : channel ? 'Канал' : 'Личная переписка';
    const actions = [
        { icon: 'image', title: 'Медиа и вложения', detail: 'Фотографии и файлы переписки', handler: onGallery },
        { icon: 'message', title: 'Закреплённые сообщения', detail: `${pinnedCount} закреплено`, handler: onPinned },
        ...(group ? [{ icon: 'users', title: 'Участники группы', detail: 'Список участников и управление', handler: onMembers }] : []),
        { icon: 'palette', title: 'Оформление', detail: 'Тема и фон переписки', handler: onTheme },
        { icon: 'download', title: 'Экспорт переписки', detail: 'Сохранить сообщения', handler: onExport }
    ];

    return (
        <div class="vortex-dialog-overlay vortex-info-overlay" onClick={onClose}>
            <section ref={surfaceRef} class="vortex-dialog-surface vortex-info-dialog" role="dialog" aria-modal="true" aria-labelledby="vortex-info-title" tabIndex={-1} onClick={event => event.stopPropagation()}>
                <div class="vortex-info-toolbar">
                    <span>Информация о чате</span>
                    <button ref={closeRef} class="vortex-icon-button vortex-info-close" type="button" onClick={onClose} aria-label="Закрыть информацию о чате"><Icon name="close" /></button>
                </div>
                <div class="vortex-info-hero">
                    <div class="vortex-info-avatar" style={{ background: avatarColor }} aria-hidden="true">{other.name?.charAt(0).toUpperCase() || 'V'}</div>
                    <h2 id="vortex-info-title">{other.name}</h2>
                    <p>{kind}</p>
                    <div class="vortex-info-stats">
                        <div><strong>{loadedCount}</strong><span>сообщений загружено</span></div>
                        <div><strong>{pinnedCount}</strong><span>закреплено</span></div>
                        {group && <div><strong>{chat.participants?.length || 0}</strong><span>участников</span></div>}
                    </div>
                </div>
                <nav class="vortex-info-actions" aria-label="Разделы чата">
                    {actions.map(action => (
                        <button key={action.title} type="button" class="vortex-info-action" onClick={() => runAction(action.handler, action.title !== "Экспорт переписки")}>
                            <span class="vortex-info-action-icon"><Icon name={action.icon} /></span>
                            <span class="vortex-info-action-copy"><strong>{action.title}</strong><small>{action.detail}</small></span>
                            <span class="vortex-info-chevron" aria-hidden="true">›</span>
                        </button>
                    ))}
                </nav>
            </section>
        </div>
    );
}
