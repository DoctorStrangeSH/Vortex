// Secret chats are POST-1.0. Firestore Rules reject their creation.
// Destructive "destroy without traces" behavior is intentionally unavailable.
const unavailable = () => {
    throw new Error('Секретные чаты пока недоступны и не входят в Vortex 1.0.');
};

class SecretChatService {
    async createSecretChat() { return unavailable(); }
    async destroySecretChat() { return unavailable(); }
}

export const secretChatService = new SecretChatService();
