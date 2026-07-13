import { useState, useEffect } from 'preact/hooks';
import { AuthScreen } from './Auth/AuthScreen';
import { ChatScreen } from './Chat/ChatScreen';
import { LoadingScreen } from './UI/LoadingScreen';
import { authService } from '../services/authService';
import { presenceService } from '../services/presenceService';
import { encryptionService } from '../services/encryptionService';

export function App() {
    const [user, setUser] = useState(undefined);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        // Сразу проверяем localStorage чтобы не показывать вход
        const hasSession = localStorage.getItem('vortex-user') === 'true';
        if (hasSession) {
            setUser(null); // Показываем загрузку, ждём Firebase
        }
        
        const unsubscribe = authService.onAuthChange(async (firebaseUser) => {
            if (firebaseUser) {
                setUser(firebaseUser);
                localStorage.setItem('vortex-user', 'true');
                
                const hasKeys = await encryptionService.loadKeys();
                if (!hasKeys) {
                    await encryptionService.generateKeys();
                    await encryptionService.saveKeys();
                }
                presenceService.startTracking();
            } else {
                setUser(null);
                localStorage.removeItem('vortex-user');
            }
            
            // Мгновенно показываем интерфейс
            requestAnimationFrame(() => setReady(true));
        });

        return () => unsubscribe?.();
    }, []);

    // Первый рендер — ничего не показываем (предотвращает мерцание)
    if (!ready) return null;
    if (user === undefined) return null;
    if (!user) return <AuthScreen />;
    return <ChatScreen user={user} />;
}