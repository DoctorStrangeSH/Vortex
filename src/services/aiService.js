class AIService {
    constructor() {
        this.apiKey = localStorage.getItem('vortex-openai-key') || '';
        this.endpoint = 'https://api.openai.com/v1/chat/completions';
    }

    setApiKey(key) {
        this.apiKey = key;
        localStorage.setItem('vortex-openai-key', key);
    }

    hasApiKey() {
        return !!this.apiKey;
    }

    async callAI(messages, temperature = 0.7, maxTokens = 200) {
        if (!this.apiKey) {
            throw new Error('API ключ не настроен');
        }

        const response = await fetch(this.endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.apiKey}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages,
                temperature,
                max_tokens: maxTokens
            })
        });

        if (!response.ok) {
            throw new Error('Ошибка AI: ' + response.status);
        }

        const data = await response.json();
        return data.choices?.[0]?.message?.content || '';
    }

    // Умные ответы
    async getSmartReplies(lastMessages) {
        const context = lastMessages.slice(-5).map(m => 
            `${m.senderName || 'User'}: ${m.text}`
        ).join('\n');

        const result = await this.callAI([
            {
                role: 'system',
                content: 'Предложи 3 коротких варианта ответа на последнее сообщение. Отвечай строго в формате: ["ответ1", "ответ2", "ответ3"]. Не больше 80 символов каждый.'
            },
            {
                role: 'user',
                content: `Контекст:\n${context}\n\nПредложи варианты ответа:`
            }
        ], 0.8, 150);

        try {
            return JSON.parse(result);
        } catch {
            return result.split('\n').filter(r => r.trim());
        }
    }

    // Перевод
    async translate(text, toLang = 'ru') {
        const langName = toLang === 'ru' ? 'русский' : 'английский';
        
        return this.callAI([
            {
                role: 'system',
                content: `Переведи текст на ${langName} язык. Отвечай только переводом, без пояснений.`
            },
            {
                role: 'user',
                content: text
            }
        ], 0.3, 500);
    }

    // Саммаризация
    async summarize(messages) {
        const text = messages.map(m => `${m.senderName || 'User'}: ${m.text}`).join('\n');
        
        return this.callAI([
            {
                role: 'system',
                content: 'Сделай краткое саммари переписки в 2-3 предложениях.'
            },
            {
                role: 'user',
                content: text
            }
        ], 0.5, 200);
    }
}

export const aiService = new AIService();