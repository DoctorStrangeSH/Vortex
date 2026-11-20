// Vortex 1.0 supports in-app updates only. There is no deployed push
// worker or trusted server sender, so never request browser notification
// permission or simulate a server push with a local Notification.
class PushService {
    async init() { return false; }
    async subscribe() { return null; }
    async unsubscribe() { return false; }
    async sendNotification() { return false; }
}

export const pushService = new PushService();
