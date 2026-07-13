import { db } from './firebase';
import {
    doc,
    setDoc,
    getDoc,
    getDocs,
    query,
    collection,
    where,
    limit
} from 'firebase/firestore';

class UserService {
    // Сохранить пользователя при регистрации
    async createUser(userData) {
        const { uid, email, displayName, username } = userData;
        
        await setDoc(doc(db, 'users', uid), {
            uid,
            email,
            displayName,
            username,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        
        if (username) {
            await setDoc(doc(db, 'usernames', username), {
                username,
                uid,
                email
            });
        }
    }

    // Проверить, свободен ли username
    async isUsernameAvailable(username) {
        const q = query(
            collection(db, 'usernames'),
            where('username', '==', username)
        );
        const snapshot = await getDocs(q);
        return snapshot.empty;
    }

    // Найти пользователя по email или @username
    async findUser(searchInput) {
        const input = searchInput.trim();
        
        // Поиск по @username
        if (input.startsWith('@')) {
            const username = input.substring(1).toLowerCase();
            const q = query(
                collection(db, 'usernames'),
                where('username', '==', username)
            );
            const snapshot = await getDocs(q);
            
            if (!snapshot.empty) {
                const data = snapshot.docs[0].data();
                const userDoc = await getDoc(doc(db, 'users', data.uid));
                return userDoc.exists() ? userDoc.data() : null;
            }
            return null;
        }
        
        // Поиск по email
        if (input.includes('@')) {
            const q = query(
                collection(db, 'users'),
                where('email', '==', input)
            );
            const snapshot = await getDocs(q);
            return snapshot.empty ? null : snapshot.docs[0].data();
        }
        
        // Поиск по username без @
        const q = query(
            collection(db, 'usernames'),
            where('username', '==', input.toLowerCase())
        );
        const snapshot = await getDocs(q);
        
        if (!snapshot.empty) {
            const data = snapshot.docs[0].data();
            const userDoc = await getDoc(doc(db, 'users', data.uid));
            return userDoc.exists() ? userDoc.data() : null;
        }
        
        return null;
    }

    // Поиск пользователей (для глобального поиска)
    async searchUsers(searchText, maxResults = 10) {
        const text = searchText.toLowerCase();
        const q = query(
            collection(db, 'users'),
            where('username', '>=', text),
            where('username', '<=', text + '\uf8ff'),
            limit(maxResults)
        );
        
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => doc.data());
    }

    // Получить профиль пользователя
    async getUserProfile(uid) {
        const userDoc = await getDoc(doc(db, 'users', uid));
        return userDoc.exists() ? userDoc.data() : null;
    }

    // Обновить профиль
    async updateProfile(uid, data) {
        await setDoc(doc(db, 'users', uid), {
            ...data,
            updatedAt: new Date()
        }, { merge: true });
    }
}

export const userService = new UserService();