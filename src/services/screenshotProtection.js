class ScreenshotProtection {
    constructor() {
        this.enabled = false;
    }

    enable() {
        this.enabled = true;
        
        // CSS защита
        document.documentElement.style.setProperty('--screenshot-protection', 'blur(0px)');
        
        // Keyboard shortcut detection
        document.addEventListener('keydown', this.handleKeyDown);
        
        // Mobile detection (iOS/Android)
        document.addEventListener('visibilitychange', this.handleVisibilityChange);
    }

    disable() {
        this.enabled = false;
        document.removeEventListener('keydown', this.handleKeyDown);
        document.removeEventListener('visibilitychange', this.handleVisibilityChange);
    }

    handleKeyDown = (e) => {
        // Блокируем Print Screen и комбинации
        if (e.key === 'PrintScreen' || 
            (e.ctrlKey && e.key === 's') ||
            (e.metaKey && e.key === 's') ||
            (e.ctrlKey && e.shiftKey && e.key === 's')) {
            e.preventDefault();
            this.showWarning();
        }
    };

    handleVisibilityChange = () => {
        if (document.hidden && this.enabled) {
            // Пользователь свернул приложение — предупреждение
            this.onVisibilityHidden?.();
        }
    };

    showWarning() {
        alert('⚠️ Скриншоты в этом чате запрещены!');
    }

    onVisibilityHidden = null;
}

export const screenshotProtection = new ScreenshotProtection();