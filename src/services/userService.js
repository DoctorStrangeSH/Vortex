import { db } from './firebase';
import { normalizeUsername } from './usernamePolicy.js';
import { planPublicProfileRepair } from './publicProfileRepair.js';
import {
    doc,
    getDoc,
    getDocs,
    query,
    collection,
    where,
    limit,
    deleteField,
    runTransaction,
    writeBatch
} from 'firebase/firestore';

class UserService {
    // Сохранить пользователя при регистрации
    async createUser(userData) {
        const { uid, email, displayName, username } = userData;
        const normalizedUsername = username ? normalizeUsername(username) : '';
        const userRef = doc(db, 'users', uid);
        const publicRef = doc(db, 'publicProfiles', uid);
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
            transaction.set(publicRef, { uid, username: normalizedUsername, displayName: displayName || '' });
            if (usernameRef) transaction.set(usernameRef, { username: normalizedUsername, uid });
        });
    }

    // Existing accounts are published only after the owner has signed in.
    // Never copy email or private settings into the searchable collection.
    async ensurePublicProfile(uid) {
        const privateRef = doc(db, 'users', uid);
        const publicRef = doc(db, 'publicProfiles', uid);
        await runTransaction(db, async transaction => {
            const profile = await transaction.get(privateRef);
            if (!profile.exists()) return;
            const publicProfile = await transaction.get(publicRef);
            const data = profile.data();
            let claimRef = null;
            let claim = null;
            if (data.username) {
                try {
                    const normalized = normalizeUsername(data.username);
                    if (normalized !== data.username) {
                        return { status: 'skipped', reason: 'non_canonical_legacy_username' };
                    }
                    claimRef = doc(db, 'usernames', normalized);
                    claim = await transaction.get(claimRef);
                } catch {
                    return { status: 'skipped', reason: 'invalid_legacy_username' };
                }
            }
            const plan = planPublicProfileRepair(
                { uid, ...data },
                claim ? { exists: claim.exists(), data: claim.exists() ? claim.data() : null } : null,
                publicProfile.exists()
            );
            if (plan.status !== 'ready') return plan;
            if (plan.createPublicProfile) transaction.set(publicRef, plan.publicProfile);
            if (plan.createUsernameClaim) transaction.create(claimRef, plan.usernameClaim);
            if (plan.removeLegacyClaimEmail) {
                transaction.update(claimRef, { email: deleteField() });
            }
            return { status: 'ready' };
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
                const userDoc = await getDoc(doc(db, 'publicProfiles', data.uid));
                return userDoc.exists() ? userDoc.data() : null;
            }
            return null;
        }
        
        // Email is private; exposing its index would allow account enumeration.
        if (input.includes('@')) {
            return null;
        }
        
        // Поиск по username без @
        const username = normalizeUsername(input);
        const snapshot = await getDoc(doc(db, 'usernames', username));
        if (snapshot.exists()) {
            const data = snapshot.data();
            const userDoc = await getDoc(doc(db, 'publicProfiles', data.uid));
            return userDoc.exists() ? userDoc.data() : null;
        }
        
        return null;
    }

    // Поиск пользователей (для глобального поиска)
    async searchUsers(searchText, maxResults = 10) {
        const text = searchText.trim().toLowerCase().replace(/^@/, '');
        const q = query(
                collection(db, 'publicProfiles'),
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
        const batch = writeBatch(db);
        batch.set(doc(db, 'users', uid), {
            ...data,
            updatedAt: new Date()
        }, { merge: true });
        const publicData = {};
        for (const key of ['displayName', 'bio']) {
            if (Object.hasOwn(data, key)) publicData[key] = data[key];
        }
        if (Object.keys(publicData).length) {
            batch.set(doc(db, 'publicProfiles', uid), publicData, { merge: true });
        }
        await batch.commit();
    }
}

export const userService = new UserService();
