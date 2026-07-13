class VoiceService {
    constructor() {
        this.mediaRecorder = null;
        this.audioChunks = [];
        this.isRecording = false;
        this.stream = null;
    }

    async startRecording() {
        try {
            // Проверка поддержки
            if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                throw new Error('Микрофон не поддерживается');
            }

            this.stream = await navigator.mediaDevices.getUserMedia({ 
                audio: {
                    echoCancellation: true,
                    noiseSuppression: true,
                    sampleRate: 44100
                } 
            });
            
            // Проверяем поддержку кодеков
            const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus') 
                ? 'audio/webm;codecs=opus' 
                : MediaRecorder.isTypeSupported('audio/webm')
                ? 'audio/webm'
                : 'audio/mp4';
            
            this.mediaRecorder = new MediaRecorder(this.stream, { mimeType });
            this.audioChunks = [];

            this.mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    this.audioChunks.push(event.data);
                }
            };

            this.mediaRecorder.start(100); // Собираем данные каждые 100мс
            this.isRecording = true;
            return true;
        } catch (error) {
            console.error('Ошибка записи:', error);
            // Для мобильных — пробуем без ограничений
            try {
                this.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                this.mediaRecorder = new MediaRecorder(this.stream);
                this.audioChunks = [];
                this.mediaRecorder.ondataavailable = (event) => {
                    if (event.data.size > 0) this.audioChunks.push(event.data);
                };
                this.mediaRecorder.start(100);
                this.isRecording = true;
                return true;
            } catch (fallbackError) {
                console.error('Фолбэк ошибка:', fallbackError);
                return false;
            }
        }
    }

    stopRecording() {
        return new Promise((resolve, reject) => {
            if (!this.mediaRecorder || !this.isRecording) {
                reject(new Error('Нет активной записи'));
                return;
            }

            this.mediaRecorder.onstop = () => {
                const audioBlob = new Blob(this.audioChunks, { 
                    type: this.mediaRecorder.mimeType || 'audio/webm' 
                });
                
                if (this.stream) {
                    this.stream.getTracks().forEach(track => track.stop());
                }

                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result);
                reader.onerror = reject;
                reader.readAsDataURL(audioBlob);
            };

            this.mediaRecorder.stop();
            this.isRecording = false;
        });
    }

    cancelRecording() {
        if (this.mediaRecorder && this.isRecording) {
            this.mediaRecorder.stop();
            this.isRecording = false;
            if (this.stream) {
                this.stream.getTracks().forEach(track => track.stop());
            }
        }
    }
}

export const voiceService = new VoiceService();