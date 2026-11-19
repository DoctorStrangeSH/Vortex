export function queuedMessagePresentation(action, online) {
    if (action?.status === 'failed') return { label: 'Не отправлено', symbol: '⚠', kind: 'failed' };
    if (action?.status === 'sending' && online) return { label: 'Отправляется', symbol: '↗', kind: 'sending' };
    return { label: online ? 'Ожидает отправки' : 'Нет подключения', symbol: '◷', kind: 'queued' };
}
