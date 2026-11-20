// E2EE is explicitly POST-1.0. Do not expose a partial cryptographic
// implementation that could be mistaken for end-to-end encryption.
const unavailable = () => {
    throw new Error('Сквозное шифрование пока недоступно и не входит в Vortex 1.0.');
};

class EncryptionService {
    generateKeys() { return unavailable(); }
    exportPublicKey() { return unavailable(); }
    importPublicKey() { return unavailable(); }
    encrypt() { return unavailable(); }
    decrypt() { return unavailable(); }
    saveKeys() { return unavailable(); }
    loadKeys() { return unavailable(); }
}

export const encryptionService = new EncryptionService();
