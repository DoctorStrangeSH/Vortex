class ThemeStore {
    constructor() {
        this.theme = localStorage.getItem('vortex-theme') || 'dark';
        this.listeners = [];
        this.apply();
    }

    get() {
        return this.theme;
    }

    toggle() {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('vortex-theme', this.theme);
        this.apply();
        this.listeners.forEach(fn => fn(this.theme));
    }

    apply() {
        document.documentElement.setAttribute('data-theme', this.theme);
    }

    onChange(callback) {
        this.listeners.push(callback);
        return () => {
            this.listeners = this.listeners.filter(fn => fn !== callback);
        };
    }
}

export const themeStore = new ThemeStore();