import { db } from './firebase';
import { doc, setDoc, onSnapshot, serverTimestamp } from 'firebase/firestore';

class PresenceService {
    startTracking() {
        const uid = window._vortexUser;
        if (!uid) return;
        
        const userRef = doc(db, 'users', uid);
        setDoc(userRef, { isOnline: true, lastSeen: serverTimestamp() }, { merge: true });
        
        setInterval(() => {
            setDoc(userRef, { isOnline: true, lastSeen: serverTimestamp() }, { merge: true });
        }, 30000);

        window.addEventListener('beforeunload', () => {
            setDoc(userRef, { isOnline: false, lastSeen: serverTimestamp() }, { merge: true });
        });
    }

    watchUser(uid, callback) {
        const userRef = doc(db, 'users', uid);
        return onSnapshot(userRef, (snap) => {
            const data = snap.data();
            callback({ isOnline: data?.isOnline || false, lastSeen: data?.lastSeen?.toDate?.() || null });
        });
    }
}

export const presenceService = new PresenceService();