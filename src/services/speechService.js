class SpeechService {
    constructor() {
        this.recognition = null;
        this.isListening = false;
    }

    // Распознавание через Web Speech API (бесплатно, встроено в браузер)
    startRecognition(lang = 'ru-RU', callback) {
        if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
            alert('Распознавание речи не поддерживается в этом браузере');
            return false;
        }

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        this.recognition = new SpeechRecognition();
        this.recognition.lang = lang;
        this.recognition.continuous = false;
        this.recognition.interimResults = false;

        this.recognition.onresult = (event) => {
            const text = event.results[0][0].transcript;
            callback(text);
        };

        this.recognition.onerror = (event) => {
            console.error('Speech error:', event.error);
        };

        this.recognition.start();
        this.isListening = true;
        return true;
    }

    stopRecognition() {
        if (this.recognition && this.isListening) {
            this.recognition.stop();
            this.isListening = false;
        }
    }
}

export const speechService = new SpeechService();