class VoiceService {
    constructor() {
        this.mediaRecorder = null;
        this.audioChunks = [];
        this.isRecording = false;
        this.stream = null;
    }

    async startRecording() {
        try {
            this.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            this.mediaRecorder = new MediaRecorder(this.stream, {
                mimeType: MediaRecorder.isTypeSupported('audio/webm;codecs=opus') 
                    ? 'audio/webm;codecs=opus' 
                    : 'audio/webm'
            });
            this.audioChunks = [];

            this.mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    this.audioChunks.push(event.data);
                }
            };

            this.mediaRecorder.start();
            this.isRecording = true;
            return true;
        } catch (error) {
            console.error('Ошибка записи:', error);
            return false;
        }
    }

    stopRecording() {
        return new Promise((resolve, reject) => {
            if (!this.mediaRecorder || !this.isRecording) {
                reject(new Error('Нет активной записи'));
                return;
            }

            this.mediaRecorder.onstop = () => {
                const audioBlob = new Blob(this.audioChunks, { type: 'audio/webm' });
                
                // Останавливаем треки микрофона
                if (this.stream) {
                    this.stream.getTracks().forEach(track => track.stop());
                }

                // Конвертируем в base64
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