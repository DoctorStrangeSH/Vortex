import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getStorage, connectStorageEmulator } from 'firebase/storage';
import { resolveFirebaseConfig } from './firebaseConfig.js';

// Existing production configuration is kept for backward compatibility.
// Staging requires an explicit, complete and separate configuration.
const productionConfig = {
    apiKey: "AIzaSyCBSLz3aL1hx57bOoJzHa09k4yl9fw8SFI",
    authDomain: "vortex-messenger-4ea97.firebaseapp.com",
    projectId: "vortex-messenger-4ea97",
    storageBucket: "vortex-messenger-4ea97.firebasestorage.app",
    messagingSenderId: "294669525739",
    appId: "1:294669525739:web:fe8fc3472c649f348654ae"
};

const app = initializeApp(resolveFirebaseConfig(import.meta.env, productionConfig));
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Emulator connections are opt-in and restricted to an explicit demo project.
// Production defaults and existing deployments remain unchanged.
if (import.meta.env.VITE_USE_FIREBASE_EMULATORS === 'true') {
    if (import.meta.env.VITE_APP_ENV !== 'staging' || !app.options.projectId?.startsWith('demo-')) {
        throw new Error('Firebase Emulators require an explicit demo staging project');
    }
    connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
    connectFirestoreEmulator(db, '127.0.0.1', 8080);
    connectStorageEmulator(storage, '127.0.0.1', 9199);
}
