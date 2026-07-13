import { useState, useEffect } from 'preact/hooks';
import { AuthScreen } from './Auth/AuthScreen';
import { ChatScreen } from './Chat/ChatScreen';
import { LoadingScreen } from './UI/LoadingScreen';
import { authService } from '../services/authService';
import { presenceService } from '../services/presenceService';
import { encryptionService } from '../services/encryptionService';

export function App() {
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        return authService.onAuthChange(async (user) => {
            setUser(user);
            
            if (user) {
                // Загружаем ключи шифрования
                const hasKeys = await encryptionService.loadKeys();
                if (!hasKeys) {
                    await encryptionService.generateKeys();
                    await encryptionService.saveKeys();
                }
                
                // Запускаем отслеживание статуса
                presenceService.startTracking();
            }
        });
    }, []);

    if (user === undefined) return <LoadingScreen />;
    if (!user) return <AuthScreen />;
    return <ChatScreen user={user} />;
}