import { db, auth } from './firebase';
import { doc, setDoc, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

class PresenceService {
    constructor() {
        this.unsubscribers = {};
    }

    // Запустить отслеживание СВОЕГО статуса
    startTracking() {
        onAuthStateChanged(auth, (user) => {
            if (!user) return;

            const userRef = doc(db, 'users', user.uid);

            // Устанавливаем онлайн
            const setOnline = () => {
                setDoc(userRef, {
                    isOnline: true,
                    lastSeen: serverTimestamp()
                }, { merge: true });
            };

            // Устанавливаем оффлайн при выходе
            const setOffline = () => {
                setDoc(userRef, {
                    isOnline: false,
                    lastSeen: serverTimestamp()
                }, { merge: true });
            };

            // Онлайн сразу
            setOnline();

            // Каждые 30 секунд подтверждаем онлайн
            const interval = setInterval(setOnline, 30000);

            // Оффлайн при закрытии
            window.addEventListener('beforeunload', setOffline);

            // Очистка при разлогине
            const unsubscribe = onAuthStateChanged(auth, (newUser) => {
                if (!newUser) {
                    clearInterval(interval);
                    window.removeEventListener('beforeunload', setOffline);
                    setOffline();
                }
            });

            return () => {
                clearInterval(interval);
                window.removeEventListener('beforeunload', setOffline);
                unsubscribe();
            };
        });
    }

    // Подписаться на статус ДРУГОГО пользователя
    watchUser(uid, callback) {
        if (this.unsubscribers[uid]) {
            this.unsubscribers[uid]();
        }

        const userRef = doc(db, 'users', uid);
        const unsubscribe = onSnapshot(userRef, (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.data();
                callback({
                    isOnline: data.isOnline || false,
                    lastSeen: data.lastSeen?.toDate?.() || null
                });
            } else {
                callback({ isOnline: false, lastSeen: null });
            }
        });

        this.unsubscribers[uid] = unsubscribe;
        return unsubscribe;
    }

    // Отписаться от всех
    destroy() {
        Object.values(this.unsubscribers).forEach(fn => fn());
        this.unsubscribers = {};
    }
}

export const presenceService = new PresenceService();