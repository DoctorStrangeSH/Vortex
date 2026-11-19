export function attachmentErrorText(code) {
    switch (code) {
        case 'storage/unauthorized':
        case 'storage/unauthenticated':
            return 'Нет доступа к этому вложению';
        case 'storage/object-not-found':
            return 'Файл удалён или не найден';
        case 'storage/canceled':
            return 'Загрузка прервана';
        default:
            return 'Не удалось загрузить файл. Проверьте соединение и настройки доступа';
    }
}
