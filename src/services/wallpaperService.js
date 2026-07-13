class WallpaperService {
    setWallpaper(chatId, wallpaper) {
        const wallpapers = JSON.parse(localStorage.getItem('vortex-wallpapers') || '{}');
        if (wallpaper) {
            wallpapers[chatId] = wallpaper;
        } else {
            delete wallpapers[chatId];
        }
        localStorage.setItem('vortex-wallpapers', JSON.stringify(wallpapers));
    }

    getWallpaper(chatId) {
        const wallpapers = JSON.parse(localStorage.getItem('vortex-wallpapers') || '{}');
        return wallpapers[chatId] || wallpapers['global'] || null;
    }

    setGlobalWallpaper(wallpaper) {
        this.setWallpaper('global', wallpaper);
    }

    getPresetWallpapers() {
        return [
            { id: 'none', name: 'Без обоев', preview: 'transparent' },
            { id: 'gradient1', name: 'Фиолетовый', preview: 'linear-gradient(135deg, #7C3AED, #6366F1)' },
            { id: 'gradient2', name: 'Океан', preview: 'linear-gradient(135deg, #0EA5E9, #06B6D4)' },
            { id: 'gradient3', name: 'Закат', preview: 'linear-gradient(135deg, #F59E0B, #EF4444)' },
            { id: 'gradient4', name: 'Ночь', preview: 'linear-gradient(135deg, #1E1B4B, #312E81)' },
            { id: 'pattern1', name: 'Точки', preview: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)' },
            { id: 'pattern2', name: 'Сетка', preview: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)' }
        ];
    }
}

export const wallpaperService = new WallpaperService();