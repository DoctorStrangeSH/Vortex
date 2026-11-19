import { db } from './firebase';
import { doc, updateDoc, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { authService } from './authService';

class PresenceService {
    startTracking() {
        const uid = authService.getCurrentUser()?.uid;
        if (!uid) return;
        
        const userRef = doc(db, 'publicProfiles', uid);
        updateDoc(userRef, { isOnline: true, lastSeen: serverTimestamp() }).catch(console.error);
        
        setInterval(() => {
            if (authService.getCurrentUser()?.uid === uid) {
                updateDoc(userRef, { isOnline: true, lastSeen: serverTimestamp() }).catch(console.error);
            }
        }, 30000);

        window.addEventListener('beforeunload', () => {
            updateDoc(userRef, { isOnline: false, lastSeen: serverTimestamp() }).catch(() => {});
        });
    }

    watchUser(uid, callback) {
        const userRef = doc(db, 'publicProfiles', uid);
        return onSnapshot(userRef, (snap) => {
            const data = snap.data();
            callback({ isOnline: data?.isOnline || false, lastSeen: data?.lastSeen?.toDate?.() || null });
        });
    }
}

export const presenceService = new PresenceService();
