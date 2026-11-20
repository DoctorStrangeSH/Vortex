export const ATTACHMENT_CLEANUP_STORAGE_KEY = 'vortex.pendingAttachmentCleanup';

const VALID_STORAGE_PATH = /^chats\/[A-Za-z0-9_-]{1,128}\/media\/[A-Za-z0-9_-]{1,128}\/[A-Za-z0-9_-]{1,128}$/;

export function isOwnedAttachmentStoragePath(path) {
    return typeof path === 'string' && VALID_STORAGE_PATH.test(path);
}

export class AttachmentCleanupQueue {
    constructor({
        storage = globalThis.localStorage,
        removeObject = async () => {},
        isOnline = () => globalThis.navigator?.onLine !== false
    } = {}) {
        this.storage = storage;
        this.removeObject = removeObject;
        this.isOnline = isOnline;
        this.processingPromise = null;
        this.recoveryBlocked = false;
    }

    read() {
        try {
            const raw = this.storage?.getItem(ATTACHMENT_CLEANUP_STORAGE_KEY);
            if (!raw) return [];
            const parsed = JSON.parse(raw);
            if (!Array.isArray(parsed) || !parsed.every(isOwnedAttachmentStoragePath)) {
                throw new Error('Некорректный формат очереди очистки вложений');
            }
            return [...new Set(parsed)];
        } catch (error) {
            if (error instanceof SyntaxError || error.message === 'Некорректный формат очереди очистки вложений') {
                try {
                    const raw = this.storage?.getItem(ATTACHMENT_CLEANUP_STORAGE_KEY);
                    if (raw !== null && raw !== undefined) {
                        const backupKey = `${ATTACHMENT_CLEANUP_STORAGE_KEY}.corruptBackup`;
                        if (!this.storage.getItem(backupKey)) this.storage.setItem(backupKey, raw);
                        this.recoveryBlocked = true;
                    }
                } catch {
                    this.recoveryBlocked = true;
                }
            }
            throw error;
        }
    }

    write(paths) {
        if (!this.storage?.setItem) throw new Error('Локальное хранилище недоступно');
        this.storage.setItem(ATTACHMENT_CLEANUP_STORAGE_KEY, JSON.stringify(paths));
    }

    enqueue(path) {
        if (!isOwnedAttachmentStoragePath(path)) throw new Error('Недопустимый путь вложения для очистки');
        if (this.recoveryBlocked) throw new Error('Очередь очистки вложений требует восстановления');
        const queue = this.read();
        if (!queue.includes(path)) this.write([...queue, path]);
    }

    getQueue() {
        return this.read();
    }

    async process() {
        if (this.processingPromise) return this.processingPromise;
        if (!this.isOnline() || this.recoveryBlocked) return;

        this.processingPromise = (async () => {
            let queue = this.read();
            for (const path of queue) {
                try {
                    await this.removeObject(path);
                } catch (error) {
                    if (error?.code !== 'storage/object-not-found') break;
                }
                queue = queue.filter(item => item !== path);
                this.write(queue);
            }
        })().finally(() => {
            this.processingPromise = null;
        });
        return this.processingPromise;
    }
}
