class PushService {
    constructor() {
        this.swRegistration = null;
    }

    async init() {
        if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
            return false;
        }

        this.swRegistration = await navigator.serviceWorker.ready;
        return true;
    }

    async subscribe(userId) {
        if (!this.swRegistration) return null;

        const permission = await Notification.requestPermission();
        if (permission !== 'granted') return null;

        // В реальности — отправляем подписку на сервер
        const subscription = await this.swRegistration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: this.urlBase64ToUint8Array(
                'BEl62iUYgUivxIkv69yViEuiBIa-Ib9-SkvMeAtA3LFgDzkrxZJjSgSnfckjBJuBkr3qBUYIHBQFLXYp5Nksh8U'
            )
        });

        // Сохраняем подписку для пользователя
        localStorage.setItem(`push_sub_${userId}`, JSON.stringify(subscription));
        return subscription;
    }

    async unsubscribe(userId) {
        const saved = localStorage.getItem(`push_sub_${userId}`);
        if (!saved) return;

        const subscription = JSON.parse(saved);
        await subscription.unsubscribe();
        localStorage.removeItem(`push_sub_${userId}`);
    }

    // Отправить уведомление (через сервер)
    async sendNotification(toUserId, title, body, chatId) {
        // В реальности — запрос к серверу, который отправляет push
        // Здесь упрощённая версия
        if (Notification.permission === 'granted' && document.hidden) {
            new Notification(title, {
                body,
                icon: '/icons/icon-192.png',
                vibrate: [200, 100, 200],
                data: { chatId }
            });
        }
    }

    urlBase64ToUint8Array(base64String) {
        const padding = '='.repeat((4 - base64String.length % 4) % 4);
        const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
        const rawData = atob(base64);
        return new Uint8Array([...rawData].map(char => char.charCodeAt(0)));
    }
}

export const pushService = new PushService();