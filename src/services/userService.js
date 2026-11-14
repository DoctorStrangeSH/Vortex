import { db } from './firebase';
import { normalizeUsername } from './usernamePolicy.js';
import {
    doc,
    setDoc,
    getDoc,
    getDocs,
    query,
    collection,
    where,
    limit,
    runTransaction
} from 'firebase/firestore';

class UserService {
    // Сохранить пользователя при регистрации
    async createUser(userData) {
        const { uid, email, displayName, username } = userData;
        const normalizedUsername = username ? normalizeUsername(username) : '';
        const userRef = doc(db, 'users', uid);
        const usernameRef = normalizedUsername ? doc(db, 'usernames', normalizedUsername) : null;
        const profile = {
            uid,
            email,
            displayName,
            username: normalizedUsername,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        await runTransaction(db, async transaction => {
            if (usernameRef) {
                const claim = await transaction.get(usernameRef);
                if (claim.exists() && claim.data().uid !== uid) {
                    throw new Error('Этот username уже занят');
                }
            }
            const currentProfile = await transaction.get(userRef);
            if (currentProfile.exists()) throw new Error('Профиль уже существует');
            transaction.set(userRef, profile);
            if (usernameRef) transaction.set(usernameRef, { username: normalizedUsername, uid, email });
        });
    }

    // Проверить, свободен ли username
    async isUsernameAvailable(username) {
        const normalized = normalizeUsername(username);
        const snapshot = await getDoc(doc(db, 'usernames', normalized));
        return !snapshot.exists();
    }

    // Найти пользователя по email или @username
    async findUser(searchInput) {
        const input = searchInput.trim();
        
        // Поиск по @username
        if (input.startsWith('@')) {
            const username = normalizeUsername(input);
            const snapshot = await getDoc(doc(db, 'usernames', username));
            if (snapshot.exists()) {
                const data = snapshot.data();
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
        const username = normalizeUsername(input);
        const snapshot = await getDoc(doc(db, 'usernames', username));
        if (snapshot.exists()) {
            const data = snapshot.data();
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
