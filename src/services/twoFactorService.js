import { auth } from './firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

class TwoFactorService {
    // Генерация секрета
    generateSecret() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
        let secret = '';
        for (let i = 0; i < 16; i++) {
            secret += chars[Math.floor(Math.random() * chars.length)];
        }
        return secret;
    }

    // Проверка кода (упрощённая — через 6-значный код)
    async enable2FA(userId, secret) {
        await setDoc(doc(db, 'users', userId), {
            twoFactorSecret: secret,
            twoFactorEnabled: true
        }, { merge: true });
    }

    async disable2FA(userId) {
        await setDoc(doc(db, 'users', userId), {
            twoFactorSecret: null,
            twoFactorEnabled: false
        }, { merge: true });
    }

    async verifyCode(userId, code) {
        const userDoc = await getDoc(doc(db, 'users', userId));
        const data = userDoc.data();
        
        // Упрощённая проверка: храним последний отправленный код
        const validCode = localStorage.getItem(`2fa_${userId}`);
        return code === validCode;
    }

    // Отправить код на email
    async sendCode(userId, email) {
        const code = Math.floor(100000 + Math.random() * 900000).toString();
        localStorage.setItem(`2fa_${userId}`, code);
        
        // В реальности — отправка email через сервер
        console.log(`📧 2FA код для ${email}: ${code}`);
        alert(`🔐 Ваш код подтверждения: ${code}\n\n(В реальности отправляется на email)`);
        
        return code;
    }

    isEnabled(userId) {
        const userDoc = getDoc(doc(db, 'users', userId));
        return userDoc.data()?.twoFactorEnabled || false;
    }
}

export const twoFactorService = new TwoFactorService();