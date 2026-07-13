import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCBSLz3aL1hx57bOoJzHa09k4yl9fw8SFI",
    authDomain: "vortex-messenger-4ea97.firebaseapp.com",
    projectId: "vortex-messenger-4ea97",
    storageBucket: "vortex-messenger-4ea97.firebasestorage.app",
    messagingSenderId: "294669525739",
    appId: "1:294669525739:web:fe8fc3472c649f348654ae"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);