class FontSizeService {
    constructor() {
        this.size = localStorage.getItem('vortex-font-size') || 'medium';
        this.apply();
    }

    setSize(size) {
        this.size = size;
        localStorage.setItem('vortex-font-size', size);
        this.apply();
    }

    apply() {
        const sizes = { small: '0.85rem', medium: '0.9rem', large: '1rem', xlarge: '1.1rem' };
        document.documentElement.style.setProperty('--message-font-size', sizes[this.size] || '0.9rem');
    }

    getSizes() {
        return ['small', 'medium', 'large', 'xlarge'];
    }
}

export const fontSizeService = new FontSizeService();