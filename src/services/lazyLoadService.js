class LazyLoadService {
    constructor() {
        this.observer = null;
        this.loadedComponents = new Set();
    }

    // Ленивая загрузка компонента
    async loadComponent(importFn) {
        const module = await importFn();
        return module.default || module;
    }

    // Ленивая загрузка изображений
    observeImages(container) {
        if (!('IntersectionObserver' in window)) return;

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        this.observer.unobserve(img);
                    }
                }
            });
        }, { rootMargin: '100px' });

        container.querySelectorAll('img[data-src]').forEach(img => {
            this.observer.observe(img);
        });
    }

    // Предзагрузка критических ресурсов
    preloadCritical() {
        const links = [
            { rel: 'preload', href: '/src/styles/global.css', as: 'style' },
            { rel: 'preload', href: '/src/main.jsx', as: 'script' }
        ];
        
        links.forEach(({ rel, href, as }) => {
            const link = document.createElement('link');
            link.rel = rel;
            link.href = href;
            link.as = as;
            document.head.appendChild(link);
        });
    }

    // Ленивая загрузка Firebase
    async loadFirebase() {
        const { initializeApp } = await import('firebase/app');
        const { getAuth } = await import('firebase/auth');
        const { getFirestore } = await import('firebase/firestore');
        return { initializeApp, getAuth, getFirestore };
    }
}

export const lazyLoadService = new LazyLoadService();