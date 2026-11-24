// Never offer a new upload while the previous Firestore commit is uncertain.
// Permanent authorization errors also need action from the user, not a retry.
const PERMANENT_ATTACHMENT_ERRORS = new Set([
    'permission-denied', 'unauthenticated', 'invalid-argument',
    'storage/unauthorized', 'storage/unauthenticated',
    'storage/invalid-format', 'storage/invalid-argument', 'storage/quota-exceeded'
]);

export function attachmentRetryKind(error) {
    if (error?.attachmentCommitUnknown) return 'unknown';
    if (PERMANENT_ATTACHMENT_ERRORS.has(error?.code)) return 'blocked';
    return 'retry';
}

export function mayRetryAttachment(error) {
    return attachmentRetryKind(error) === 'retry';
}

export function attachmentRetryNotice(fileName, error, sentCount, totalCount) {
    const progress = sentCount ? `Отправлено ${sentCount} из ${totalCount}. ` : '';
    const kind = attachmentRetryKind(error);
    if (kind === 'unknown') {
        return `${progress}Не удалось подтвердить отправку «${fileName}». Проверьте переписку после восстановления связи — повторная отправка может создать дубликат.`;
    }
    if (error?.code === 'storage/quota-exceeded') {
        return `${progress}Не удалось отправить «${fileName}»: исчерпана доступная квота хранилища. Автоматический повтор отключён; попробуйте позже или обратитесь к администратору.`;
    }
    if (kind === 'blocked') {
        return `${progress}Не удалось отправить «${fileName}»: нет доступа или неверные параметры. Проверьте авторизацию и разрешения чата.`;
    }
    return `${progress}Ошибка «${fileName}»: ${error?.message || 'Не удалось отправить файл'}. Можно повторить оставшиеся файлы.`;
}
