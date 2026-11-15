// When Firestore could have committed the attachment, retrying from a new
// upload would create a duplicate. Ask the user to check the chat instead.
export function mayRetryAttachment(error) {
    return !error?.attachmentCommitUnknown;
}

export function attachmentRetryNotice(fileName, error, sentCount, totalCount) {
    const progress = sentCount ? `Отправлено ${sentCount} из ${totalCount}. ` : '';
    if (!mayRetryAttachment(error)) {
        return `${progress}Не удалось подтвердить отправку «${fileName}». Проверьте переписку после восстановления связи — повторная отправка может создать дубликат.`;
    }
    return `${progress}Ошибка «${fileName}»: ${error?.message || 'Не удалось отправить файл'}. Можно повторить оставшиеся файлы.`;
}
