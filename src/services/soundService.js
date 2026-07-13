class SoundService {
    constructor() {
        this.enabled = localStorage.getItem('vortex-sound') !== 'off';
        this.currentSound = localStorage.getItem('vortex-sound-type') || 'default';
        this.volume = parseFloat(localStorage.getItem('vortex-sound-volume') || '0.5');
    }

    async playMessageSound() {
        if (!this.enabled) return;
        
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            
            switch (this.currentSound) {
                case 'default':
                    this.playBeep(ctx, 800, 0.1);
                    break;
                case 'chime':
                    this.playBeep(ctx, 1200, 0.08);
                    setTimeout(() => this.playBeep(ctx, 1600, 0.06), 100);
                    break;
                case 'pop':
                    this.playBeep(ctx, 600, 0.05);
                    break;
                case 'silent':
                    break;
            }
        } catch (e) {}
    }

    playBeep(ctx, freq, duration) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.value = freq;
        gain.gain.value = this.volume * 0.3;
        osc.start();
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
        osc.stop(ctx.currentTime + duration);
    }

    setSound(type) {
        this.currentSound = type;
        localStorage.setItem('vortex-sound-type', type);
    }

    setVolume(vol) {
        this.volume = vol;
        localStorage.setItem('vortex-sound-volume', vol);
    }

    toggle() {
        this.enabled = !this.enabled;
        localStorage.setItem('vortex-sound', this.enabled ? 'on' : 'off');
        return this.enabled;
    }

    getSounds() {
        return [
            { id: 'default', name: 'Стандартный' },
            { id: 'chime', name: 'Мелодичный' },
            { id: 'pop', name: 'Короткий' },
            { id: 'silent', name: 'Без звука' }
        ];
    }
}

export const soundService = new SoundService();