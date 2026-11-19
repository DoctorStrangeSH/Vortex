export const MESSAGE_PAGE_SIZE = 100;
export const MAX_MESSAGE_LENGTH = 4096;

// Firestore documents cannot safely carry arbitrarily sized base64 attachments.
// Binary upload must migrate to Firebase Storage with authorization rules.
export const MAX_LEGACY_ATTACHMENT_BYTES = 350_000;

export function validateOutgoingMessage({ chatId, user, text, attachment }) {
    if (typeof chatId !== 'string' || !chatId.trim()) {
        throw new Error('Не выбран чат');
    }
    if (!user?.uid || typeof user.uid !== 'string') {
        throw new Error('Для отправки сообщения требуется авторизация');
    }
    if (typeof text !== 'string' || text.length > MAX_MESSAGE_LENGTH) {
        throw new Error(`Сообщение не должно превышать ${MAX_MESSAGE_LENGTH} символов`);
    }
    if (!attachment && !text.trim()) {
        throw new Error('Нельзя отправить пустое сообщение');
    }
    if (attachment) {
        const stored = typeof attachment.storagePath === 'string' &&
            attachment.storagePath.startsWith(`chats/${chatId}/media/${user.uid}/`);
        if (typeof attachment.type !== 'string' ||
            typeof attachment.fileData !== 'string' ||
            !(stored ? attachment.fileData === '' : attachment.fileData.startsWith('data:')) ||
            !Number.isSafeInteger(attachment.fileSize) ||
            attachment.fileSize < 0 ||
            (stored ? attachment.fileSize > 25 * 1024 * 1024 : attachment.fileSize > MAX_LEGACY_ATTACHMENT_BYTES)) {
            throw new Error('Вложение слишком большое или имеет неверный формат');
        }
    }
}
