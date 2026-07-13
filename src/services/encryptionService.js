class EncryptionService {
    constructor() {
        this.keyPair = null;
    }

    // Генерация ключей
    async generateKeys() {
        this.keyPair = await crypto.subtle.generateKey(
            {
                name: 'ECDH',
                namedCurve: 'P-256'
            },
            true,
            ['deriveKey']
        );
    }

    // Экспорт публичного ключа
    async exportPublicKey() {
        if (!this.keyPair) await this.generateKeys();
        
        const exported = await crypto.subtle.exportKey('raw', this.keyPair.publicKey);
        return btoa(String.fromCharCode(...new Uint8Array(exported)));
    }

    // Импорт чужого публичного ключа
    async importPublicKey(base64Key) {
        const keyData = Uint8Array.from(atob(base64Key), c => c.charCodeAt(0));
        return crypto.subtle.importKey(
            'raw',
            keyData,
            { name: 'ECDH', namedCurve: 'P-256' },
            false,
            []
        );
    }

    // Шифрование сообщения
    async encrypt(text, recipientPublicKeyBase64) {
        if (!this.keyPair) await this.generateKeys();

        const recipientKey = await this.importPublicKey(recipientPublicKeyBase64);
        
        // Общий ключ
        const sharedKey = await crypto.subtle.deriveKey(
            { name: 'ECDH', public: recipientKey },
            this.keyPair.privateKey,
            { name: 'AES-GCM', length: 256 },
            false,
            ['encrypt']
        );

        // Шифруем
        const iv = crypto.getRandomValues(new Uint8Array(12));
        const encoded = new TextEncoder().encode(text);
        const encrypted = await crypto.subtle.encrypt(
            { name: 'AES-GCM', iv },
            sharedKey,
            encoded
        );

        // IV + данные
        const combined = new Uint8Array(iv.length + encrypted.byteLength);
        combined.set(iv);
        combined.set(new Uint8Array(encrypted), iv.length);
        
        return btoa(String.fromCharCode(...combined));
    }

    // Расшифровка
    async decrypt(encryptedBase64, senderPublicKeyBase64) {
        if (!this.keyPair) await this.generateKeys();

        const senderKey = await this.importPublicKey(senderPublicKeyBase64);
        
        const sharedKey = await crypto.subtle.deriveKey(
            { name: 'ECDH', public: senderKey },
            this.keyPair.privateKey,
            { name: 'AES-GCM', length: 256 },
            false,
            ['decrypt']
        );

        const data = Uint8Array.from(atob(encryptedBase64), c => c.charCodeAt(0));
        const iv = data.slice(0, 12);
        const encrypted = data.slice(12);

        const decrypted = await crypto.subtle.decrypt(
            { name: 'AES-GCM', iv },
            sharedKey,
            encrypted
        );

        return new TextDecoder().decode(decrypted);
    }

    // Сохранить ключи
    async saveKeys() {
        const publicKey = await this.exportPublicKey();
        const privateKeyJwk = await crypto.subtle.exportKey('jwk', this.keyPair.privateKey);
        
        localStorage.setItem('vortex-keys', JSON.stringify({
            publicKey,
            privateKey: privateKeyJwk
        }));
    }

    // Загрузить ключи
    async loadKeys() {
        const saved = localStorage.getItem('vortex-keys');
        if (!saved) return false;

        try {
            const { publicKey, privateKey } = JSON.parse(saved);
            const importedKey = await crypto.subtle.importKey(
                'jwk',
                privateKey,
                { name: 'ECDH', namedCurve: 'P-256' },
                false,
                ['deriveKey']
            );
            
            this.keyPair = {
                publicKey: await this.importPublicKey(publicKey),
                privateKey: importedKey
            };
            return true;
        } catch {
            return false;
        }
    }
}

export const encryptionService = new EncryptionService();