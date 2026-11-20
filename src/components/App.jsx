import { useState, useEffect } from 'preact/hooks';
import { AuthScreen } from './Auth/AuthScreen';
import { ChatScreen } from './Chat/ChatScreen';
import { LoadingScreen } from './UI/LoadingScreen';
import { authService } from '../services/authService';
import { presenceService } from '../services/presenceService';
import { typingService } from '../services/typingService';
import { userService } from '../services/userService';

export function App() {
    const [user, setUser] = useState(undefined);
    const [pendingUser, setPendingUser] = useState(null);
    const [profileError, setProfileError] = useState(false);

    useEffect(() => {
        let mounted = true;
        let requestVersion = 0;

        const unsubscribe = authService.onAuthChange(async (firebaseUser) => {
            if (!mounted) return;
            const version = ++requestVersion;
            setProfileError(false);

            if (firebaseUser) {
                setUser(undefined);
                try {
                    const profile = await userService.getUserProfile(firebaseUser.uid);
                    if (!mounted || version !== requestVersion) return;
                    if (!profile) {
                        setPendingUser(firebaseUser);
                        setUser(null);
                        return;
                    }
                    await userService.ensurePublicProfile(firebaseUser.uid);
                    if (!mounted || version !== requestVersion) return;
                } catch (error) {
                    if (!mounted || version !== requestVersion) return;
                    console.error('Profile lookup failed:', error);
                    // A temporary database error is not proof the profile is absent.
                    setProfileError(true);
                    setUser(undefined);
                    return;
                }
                setPendingUser(null);
                setUser(firebaseUser);
                localStorage.setItem('vortex-user', 'true');
                typingService.setUser(firebaseUser.uid);

                // E2EE is intentionally unavailable in Vortex 1.0.
                // Presence must initialize independently of deferred security features.
                try {
                    presenceService.startTracking();
                } catch (e) {
                    console.error('Presence initialization failed:', e);
                }
            } else {
                setPendingUser(null);
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
            requestVersion++;
            unsubscribe?.();
            window.removeEventListener('beforeunload', handleBeforeUnload);
            window.removeEventListener('pagehide', handleBeforeUnload);
        };
    }, []);

    if (profileError) return <div style={{ padding: '3rem', textAlign: 'center' }}>
        <p>Не удалось проверить профиль. Проверьте подключение и попробуйте снова.</p>
        <button onClick={() => authService.notifyAuthChange()}>Повторить</button>
        <button onClick={() => authService.logout()} style={{ marginLeft: '1rem' }}>Выйти</button>
    </div>;
    if (user === undefined) return <LoadingScreen />;
    if (!user) return <AuthScreen key={pendingUser?.uid || 'guest'} pendingUser={pendingUser} />;
    return <ChatScreen user={user} />;
}
