import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
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
