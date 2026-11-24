export function attachmentErrorText(code) {
    switch (code) {
        case 'storage/unauthorized':
        case 'storage/unauthenticated':
            return 'Нет доступа к этому вложению';
        case 'storage/object-not-found':
            return 'Файл удалён или не найден';
        case 'storage/canceled':
            return 'Загрузка прервана';
        case 'storage/quota-exceeded':
            return 'Исчерпана доступная квота хранилища. Повторите попытку позже или обратитесь к администратору';
        case 'storage/network-request-failed':
        case 'storage/retry-limit-exceeded':
            return 'Соединение прервано. Проверьте интернет и повторите загрузку';
        default:
            return 'Не удалось загрузить файл. Проверьте соединение и настройки доступа';
    }
}
