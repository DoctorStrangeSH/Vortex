// Web Worker для E2E шифрования (не тормозит UI)

self.addEventListener('message', async (event) => {
    const { type, data } = event.data;

    switch (type) {
        case 'generateKeys':
            const keyPair = await generateKeyPair();
            const publicKey = await exportPublicKey(keyPair.publicKey);
            const privateKey = await exportPrivateKey(keyPair.privateKey);
            self.postMessage({ type: 'keysGenerated', publicKey, privateKey });
            break;

        case 'encrypt':
            const encrypted = await encryptMessage(data.text, data.publicKey);
            self.postMessage({ type: 'encrypted', encrypted, id: data.id });
            break;

        case 'decrypt':
            const decrypted = await decryptMessage(data.encrypted, data.privateKey);
            self.postMessage({ type: 'decrypted', decrypted, id: data.id });
            break;

        case 'batchEncrypt':
            const results = await Promise.all(
                data.messages.map(msg => encryptMessage(msg.text, data.publicKey))
            );
            self.postMessage({ type: 'batchEncrypted', results });
            break;
    }
});

async function generateKeyPair() {
    return crypto.subtle.generateKey(
        { name: 'ECDH', namedCurve: 'P-256' },
        true,
        ['deriveKey']
    );
}

async function exportPublicKey(key) {
    const exported = await crypto.subtle.exportKey('raw', key);
    return btoa(String.fromCharCode(...new Uint8Array(exported)));
}

async function exportPrivateKey(key) {
    const jwk = await crypto.subtle.exportKey('jwk', key);
    return JSON.stringify(jwk);
}

async function encryptMessage(text, publicKeyBase64) {
    const keyData = Uint8Array.from(atob(publicKeyBase64), c => c.charCodeAt(0));
    const publicKey = await crypto.subtle.importKey(
        'raw', keyData,
        { name: 'ECDH', namedCurve: 'P-256' },
        false, []
    );

    const keyPair = await generateKeyPair();
    const sharedKey = await crypto.subtle.deriveKey(
        { name: 'ECDH', public: publicKey },
        keyPair.privateKey,
        { name: 'AES-GCM', length: 256 },
        false, ['encrypt']
    );

    const iv = crypto.getRandomValues(new Uint8Array(12));
    const encoded = new TextEncoder().encode(text);
    const encrypted = await crypto.subtle.encrypt(
        { name: 'AES-GCM', iv },
        sharedKey, encoded
    );

    const combined = new Uint8Array(iv.length + encrypted.byteLength);
    combined.set(iv);
    combined.set(new Uint8Array(encrypted), iv.length);
    return btoa(String.fromCharCode(...combined));
}

async function decryptMessage(encryptedBase64, privateKeyJwk) {
    const privateKey = await crypto.subtle.importKey(
        'jwk', JSON.parse(privateKeyJwk),
        { name: 'ECDH', namedCurve: 'P-256' },
        false, ['deriveKey']
    );

    // ... полная логика расшифровки
}