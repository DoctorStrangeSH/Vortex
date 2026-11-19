import { auth } from './firebase';
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut as firebaseSignOut,
    updateProfile,
    onAuthStateChanged
} from 'firebase/auth';
import { userService } from './userService';

const draftKey = (uid) => `vortex-registration-draft:${uid}`;

function saveRegistrationDraft(uid, name, username) {
    try {
        sessionStorage.setItem(draftKey(uid), JSON.stringify({ name, username }));
    } catch { /* Private browsing can disable session storage. */ }
}

function clearRegistrationDraft(uid) {
    try { sessionStorage.removeItem(draftKey(uid)); } catch { /* Storage unavailable. */ }
}

class AuthService {
    constructor() {
        this.currentUser = undefined;
        this.listeners = [];
        this.initialized = false;

        onAuthStateChanged(auth, (user) => {
            this.currentUser = user;
            this.initialized = true;
            this.listeners.forEach(fn => fn(user));
        });
    }

    onAuthChange(callback) {
        this.listeners.push(callback);
        if (this.initialized) callback(this.currentUser);
        return () => { this.listeners = this.listeners.filter(fn => fn !== callback); };
    }

    async login(email, password) {
        await signInWithEmailAndPassword(auth, email, password);
    }

    async register(email, password, name, username = '') {
        // Username reads require authentication under production Firestore rules.
        // The profile transaction below is the authoritative uniqueness check.
        const result = await createUserWithEmailAndPassword(auth, email, password);
        saveRegistrationDraft(result.user.uid, name.trim(), username);
        await updateProfile(result.user, { displayName: name });
        await userService.createUser({ uid: result.user.uid, email, displayName: name, username });
        clearRegistrationDraft(result.user.uid);
        this.notifyAuthChange();
    }

    async completeRegistration(user, name, username) {
        if (!user || auth.currentUser?.uid !== user.uid) throw new Error('Сессия регистрации недействительна');
        await updateProfile(user, { displayName: name });
        await userService.createUser({ uid: user.uid, email: user.email, displayName: name, username });
        clearRegistrationDraft(user.uid);
        this.notifyAuthChange();
    }

    getRegistrationDraft(user) {
        if (!user) return null;
        try {
            const draft = JSON.parse(sessionStorage.getItem(draftKey(user.uid)) || 'null');
            return draft && typeof draft.name === 'string' && typeof draft.username === 'string' ? draft : null;
        } catch { return null; }
    }

    notifyAuthChange() {
        this.listeners.forEach(listener => listener(this.currentUser));
    }

    async logout() {
        await firebaseSignOut(auth);
    }

    getCurrentUser() { return this.currentUser; }
    isInitialized() { return this.initialized; }
}

export const authService = new AuthService();
