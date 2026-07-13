class ThemeService {
    constructor() {
        this.theme = localStorage.getItem('vortex-theme') || 'dark';
        this.customColors = JSON.parse(localStorage.getItem('vortex-custom-colors') || 'null');
        this.listeners = [];
        this.apply();
    }

    get() { return this.theme; }

    setTheme(theme) {
        this.theme = theme;
        localStorage.setItem('vortex-theme', theme);
        this.apply();
        this.listeners.forEach(fn => fn(theme));
    }

    toggle() {
        this.setTheme(this.theme === 'dark' ? 'light' : 'dark');
    }

    // Кастомные цвета
    setCustomColor(variable, value) {
        if (!this.customColors) this.customColors = {};
        this.customColors[variable] = value;
        localStorage.setItem('vortex-custom-colors', JSON.stringify(this.customColors));
        this.apply();
        this.listeners.forEach(fn => fn('custom'));
    }

    resetCustomColors() {
        this.customColors = null;
        localStorage.removeItem('vortex-custom-colors');
        this.apply();
        this.listeners.forEach(fn => fn(this.theme));
    }

    getPresetThemes() {
        return {
            'default': { name: 'Стандартная', primary: '#7C3AED', secondary: '#06D6A0' },
            'ocean': { name: 'Океан', primary: '#0EA5E9', secondary: '#06B6D4' },
            'sunset': { name: 'Закат', primary: '#F59E0B', secondary: '#EF4444' },
            'forest': { name: 'Лес', primary: '#10B981', secondary: '#34D399' },
            'rose': { name: 'Роза', primary: '#EC4899', secondary: '#F472B6' },
            'midnight': { name: 'Полночь', primary: '#1E1B4B', secondary: '#312E81' },
            'gold': { name: 'Золото', primary: '#D97706', secondary: '#FBBF24' }
        };
    }

    applyPreset(presetName) {
        const preset = this.getPresetThemes()[presetName];
        if (!preset) return;

        this.setCustomColor('--vortex-primary', preset.primary);
        this.setCustomColor('--vortex-secondary', preset.secondary);
    }

    apply() {
        document.documentElement.setAttribute('data-theme', this.theme);

        if (this.customColors) {
            Object.entries(this.customColors).forEach(([key, value]) => {
                document.documentElement.style.setProperty(key, value);
            });
        }
    }

    onChange(callback) {
        this.listeners.push(callback);
        return () => this.listeners = this.listeners.filter(fn => fn !== callback);
    }
}

export const themeService = new ThemeService();