class AIService {
    constructor() {
        // По умолчанию AI сервер на том же хосте, порт 3001
        this.serverUrl = localStorage.getItem('vortex-ai-server') || 'http://localhost:3001';
    }

    setServerUrl(url) {
        this.serverUrl = url;
        localStorage.setItem('vortex-ai-server', url);
    }

    async call(endpoint, body) {
        const response = await fetch(`${this.serverUrl}${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });

        if (!response.ok) throw new Error(`AI сервер: ${response.status}`);
        return response.json();
    }

    async getSmartReplies(messages) {
        const data = await this.call('/api/ai/smart-reply', { messages });
        return data.replies || [];
    }

    async translate(text, targetLang = 'ru') {
        const data = await this.call('/api/ai/translate', { text, targetLang });
        return data.translation;
    }

    async summarize(messages) {
        const data = await this.call('/api/ai/summarize', { messages });
        return data.summary;
    }

    async moderateMessage(text) {
        const data = await this.call('/api/ai/moderate', { text });
        return data.isSpam;
    }

    async getAutoReply(messages, userName) {
        const data = await this.call('/api/ai/auto-reply', { messages, userName });
        return data.reply;
    }

    async searchInMessages(messages, query) {
        const data = await this.call('/api/ai/search', { messages, query });
        return data.results;
    }

    hasAnyKey() {
        return !!this.serverUrl;
    }

    async getStatus() {
        const response = await fetch(`${this.serverUrl}/api/ai/status`);
        return response.json();
    }
}

export const aiService = new AIService();