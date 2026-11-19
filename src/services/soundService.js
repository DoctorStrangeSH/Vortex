// Reuse one Web Audio context for the lifetime of the page. Browsers limit
// active contexts; creating a new one for every incoming message leaks resources.
export class SoundService {
    constructor({ storage = globalThis.localStorage, createAudioContext = () => {
        const AudioContext = globalThis.AudioContext || globalThis.webkitAudioContext;
        if (!AudioContext) throw new Error('Web Audio недоступен');
        return new AudioContext();
    }, schedule = globalThis.setTimeout } = {}) {
        this.storage = storage;
        this.createAudioContext = createAudioContext;
        this.schedule = schedule;
        this.enabled = storage?.getItem('vortex-sound') !== 'off';
        this.currentSound = storage?.getItem('vortex-sound-type') || 'default';
        this.volume = Number.parseFloat(storage?.getItem('vortex-sound-volume') || '0.5');
        if (!Number.isFinite(this.volume)) this.volume = 0.5;
        this.context = null;
    }

    async playMessageSound() {
        if (!this.enabled || this.currentSound === 'silent') return;
        try {
            if (!this.context || this.context.state === 'closed') this.context = this.createAudioContext();
            const ctx = this.context;
            if (ctx.state === 'suspended') await ctx.resume();
            switch (this.currentSound) {
                case 'default':
                    this.playBeep(ctx, 800, 0.1);
                    break;
                case 'chime':
                    this.playBeep(ctx, 1200, 0.08);
                    this.schedule(() => {
                        if (this.enabled && this.currentSound === 'chime' && ctx.state !== 'closed') this.playBeep(ctx, 1600, 0.06);
                    }, 100);
                    break;
                case 'pop':
                    this.playBeep(ctx, 600, 0.05);
                    break;
            }
        } catch { /* Audio autoplay permission may not yet be granted. */ }
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
        this.storage?.setItem('vortex-sound-type', type);
    }

    setVolume(vol) {
        this.volume = Number.isFinite(vol) ? Math.max(0, Math.min(1, vol)) : 0.5;
        this.storage?.setItem('vortex-sound-volume', this.volume);
    }

    toggle() {
        this.enabled = !this.enabled;
        this.storage?.setItem('vortex-sound', this.enabled ? 'on' : 'off');
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
