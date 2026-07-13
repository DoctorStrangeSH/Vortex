class VoiceService {
    constructor() {
        this.mediaRecorder = null;
        this.audioChunks = [];
        this.isRecording = false;
        this.stream = null;
    }

    async startRecording() {
        try {
            if (!navigator.mediaDevices?.getUserMedia) {
                return { error: 'unsupported', message: 'Микрофон не поддерживается в этом браузере' };
            }

            this.stream = await navigator.mediaDevices.getUserMedia({ 
                audio: {
                    echoCancellation: true,
                    noiseSuppression: true
                } 
            });
            
            let mimeType = 'audio/webm';
            if (MediaRecorder.isTypeSupported('audio/webm;codecs=opus')) {
                mimeType = 'audio/webm;codecs=opus';
            } else if (MediaRecorder.isTypeSupported('audio/mp4')) {
                mimeType = 'audio/mp4';
            }
            
            this.mediaRecorder = new MediaRecorder(this.stream, { mimeType });
            this.audioChunks = [];

            this.mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) this.audioChunks.push(event.data);
            };

            this.mediaRecorder.onerror = () => {
                this.isRecording = false;
            };

            this.mediaRecorder.start(100);
            this.isRecording = true;
            return true;
            
        } catch (error) {
            if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
                return { 
                    error: 'denied',
                    message: 'Доступ к микрофону запрещён. Разрешите в настройках браузера и попробуйте снова.'
                };
            } else if (error.name === 'NotFoundError') {
                return { error: 'notfound', message: 'Микрофон не найден. Подключите микрофон.' };
            } else {
                return { error: 'unknown', message: 'Ошибка доступа к микрофону: ' + error.message };
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
                    this.stream = null;
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
                this.stream = null;
            }
        }
    }
}

export const voiceService = new VoiceService();