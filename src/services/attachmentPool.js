// Coalesce visible attachment downloads and limit simultaneous Storage reads.
// Files are not persisted: object URLs are revoked when the last viewer leaves.
export function createAttachmentPool({ download, createUrl, revokeUrl, maxConcurrent = 3 }) {
    const entries = new Map();
    const queue = [];
    let active = 0;

    function pump() {
        while (active < maxConcurrent && queue.length) {
            const entry = queue.shift();
            if (entry.refs === 0) continue;
            entry.started = true;
            active++;
            Promise.resolve().then(() => download(entry.path))
                .then(blob => {
                    if (entry.refs === 0) {
                        entry.resolve('');
                        return;
                    }
                    entry.url = createUrl(blob);
                    entry.resolve(entry.url);
                })
                .catch(error => {
                    if (entries.get(entry.path) === entry) entries.delete(entry.path);
                    entry.reject(error);
                })
                .finally(() => {
                    active--;
                    if (entry.refs === 0 && entries.get(entry.path) === entry) entries.delete(entry.path);
                    pump();
                });
        }
    }

    function acquire(path) {
        let entry = entries.get(path);
        if (!entry) {
            entry = { path, refs: 0, started: false, url: '', resolve: null, reject: null, promise: null };
            entry.promise = new Promise((resolve, reject) => {
                entry.resolve = resolve;
                entry.reject = reject;
            });
            entries.set(path, entry);
            queue.push(entry);
        }
        entry.refs++;
        pump();

        let released = false;
        return {
            promise: entry.promise,
            release() {
                if (released) return;
                released = true;
                entry.refs--;
                if (entry.refs > 0) return;
                if (entry.url) {
                    revokeUrl(entry.url);
                    entry.url = '';
                }
                if (!entry.started) {
                    const index = queue.indexOf(entry);
                    if (index !== -1) queue.splice(index, 1);
                    entry.resolve('');
                }
                entries.delete(path);
            }
        };
    }

    return { acquire };
}
