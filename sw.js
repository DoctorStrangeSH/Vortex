const CACHE_NAME = 'vortex-v1';
const ASSETS = [
    '/',
    '/index.html',
    '/src/main.jsx',
    '/src/styles/global.css',
    '/src/styles/themes.css'
];

// Установка
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
    self.skipWaiting();
});

// Активация
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            );
        })
    );
    self.clients.claim();
});

// Перехват запросов
self.addEventListener('fetch', (event) => {
    // Не кэшируем Firebase запросы
    if (event.request.url.includes('firestore') || 
        event.request.url.includes('googleapis')) {
        return;
    }

    event.respondWith(
        caches.match(event.request).then((cached) => {
            // Отдаём из кэша, если есть
            if (cached) return cached;

            // Иначе запрос в сеть
            return fetch(event.request).then((response) => {
                if (!response || response.status !== 200) return response;

                const clone = response.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, clone);
                });

                return response;
            }).catch(() => {
                // Оффлайн — отдаём заглушку
                if (event.request.mode === 'navigate') {
                    return caches.match('/index.html');
                }
            });
        })
    );
});

// Push-уведомления
self.addEventListener('push', (event) => {
    const data = event.data?.json() || {};
    
    const options = {
        body: data.body || 'Новое сообщение',
        icon: '/icons/icon-192.png',
        badge: '/icons/badge.png',
        vibrate: [200, 100, 200],
        data: { chatId: data.chatId },
        actions: [
            { action: 'open', title: 'Открыть' },
            { action: 'close', title: 'Закрыть' }
        ],
        tag: data.chatId || 'message',
        renotify: true
    };

    event.waitUntil(
        self.registration.showNotification(data.title || 'Vortex', options)
    );
});

// Клик по уведомлению
self.addEventListener('notificationclick', (event) => {
    event.notification.close();

    const chatId = event.notification.data?.chatId;
    const url = chatId ? `/?chat=${chatId}` : '/';

    event.waitUntil(
        clients.matchAll({ type: 'window' }).then((clients) => {
            const client = clients.find(c => c.visibilityState === 'visible');
            if (client) {
                client.navigate(url);
                client.focus();
            } else {
                clients.openWindow(url);
            }
        })
    );
});