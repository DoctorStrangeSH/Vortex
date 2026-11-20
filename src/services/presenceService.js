import { db } from './firebase';
import { doc, updateDoc, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { authService } from './authService';

class PresenceService {
    constructor() {
        this.activeUid = null;
        this.intervalId = null;
        this.handlePageHide = null;
    }

    startTracking() {
        const uid = authService.getCurrentUser()?.uid;
        if (!uid) return;

        // Repeated auth notifications must not create duplicate timers/listeners.
        if (this.activeUid === uid && this.intervalId !== null) return;
        this.stopTracking();

        this.activeUid = uid;
        const userRef = doc(db, 'publicProfiles', uid);
        const publishOnline = () => {
            if (this.activeUid !== uid || authService.getCurrentUser()?.uid !== uid) return;
            updateDoc(userRef, { isOnline: true, lastSeen: serverTimestamp() }).catch(console.error);
        };

        publishOnline();
        this.intervalId = setInterval(publishOnline, 30000);
        this.handlePageHide = () => {
            if (this.activeUid !== uid || authService.getCurrentUser()?.uid !== uid) return;
            updateDoc(userRef, { isOnline: false, lastSeen: serverTimestamp() }).catch(() => {});
        };
        window.addEventListener('pagehide', this.handlePageHide);
        window.addEventListener('beforeunload', this.handlePageHide);
    }

    stopTracking() {
        const uid = this.activeUid;
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
        if (this.handlePageHide) {
            window.removeEventListener('pagehide', this.handlePageHide);
            window.removeEventListener('beforeunload', this.handlePageHide);
            this.handlePageHide = null;
        }
        this.activeUid = null;

        // Only write while the same account is still authenticated; after an
        // auth switch Firestore correctly rejects writes to the previous user's profile.
        if (uid && authService.getCurrentUser()?.uid === uid) {
            updateDoc(doc(db, 'publicProfiles', uid), {
                isOnline: false,
                lastSeen: serverTimestamp()
            }).catch(() => {});
        }
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
