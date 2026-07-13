import { useState, useEffect } from 'preact/hooks';
import { AuthScreen } from './Auth/AuthScreen';
import { ChatScreen } from './Chat/ChatScreen';
import { LoadingScreen } from './UI/LoadingScreen';
import { authService } from '../services/authService';
import { presenceService } from '../services/presenceService';
import { encryptionService } from '../services/encryptionService';
import { typingService } from '../services/typingService';

export function App() {
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        let mounted = true;

        const unsubscribe = authService.onAuthChange(async (firebaseUser) => {
            if (!mounted) return;

            if (firebaseUser) {
                setUser(firebaseUser);
                localStorage.setItem('vortex-user', 'true');
                typingService.setUser(firebaseUser.uid);

                try {
                    const hasKeys = await encryptionService.loadKeys();
                    if (!hasKeys) {
                        await encryptionService.generateKeys();
                        await encryptionService.saveKeys();
                    }
                    presenceService.startTracking();
                } catch (e) {
                    console.error('Init error:', e);
                }
            } else {
                setUser(null);
                localStorage.removeItem('vortex-user');
            }
        });

        const handleBeforeUnload = () => {
            const currentUser = authService.getCurrentUser();
            if (currentUser) typingService.stopAllTypingSync(currentUser.uid);
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        window.addEventListener('pagehide', handleBeforeUnload);

        return () => {
            mounted = false;
            unsubscribe?.();
            window.removeEventListener('beforeunload', handleBeforeUnload);
            window.removeEventListener('pagehide', handleBeforeUnload);
        };
    }, []);

    if (user === undefined) return <LoadingScreen />;
    if (!user) return <AuthScreen />;
    return <ChatScreen user={user} />;
}