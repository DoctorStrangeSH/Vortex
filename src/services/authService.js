import { auth } from './firebase';
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut as firebaseSignOut,
    updateProfile,
    onAuthStateChanged
} from 'firebase/auth';
import { userService } from './userService';

class AuthService {
    constructor() {
        this.currentUser = null;
        this.listeners = [];

        onAuthStateChanged(auth, (user) => {
            this.currentUser = user;
            this.listeners.forEach(fn => fn(user));
        });
    }

    onAuthChange(callback) {
        this.listeners.push(callback);
        if (this.currentUser !== undefined) {
            callback(this.currentUser);
        }
        return () => {
            this.listeners = this.listeners.filter(fn => fn !== callback);
        };
    }

    async login(email, password) {
        await signInWithEmailAndPassword(auth, email, password);
    }

    async register(email, password, name, username = '') {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(result.user, { displayName: name });
        
        // Сохраняем в Firestore
        await userService.createUser({
            uid: result.user.uid,
            email,
            displayName: name,
            username
        });
    }

    async logout() {
        await firebaseSignOut(auth);
    }

    getCurrentUser() {
        return this.currentUser;
    }
}

export const authService = new AuthService();