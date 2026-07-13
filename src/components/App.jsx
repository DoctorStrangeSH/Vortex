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
        // Проверяем, есть ли сохранённая сессия
        const savedUser = localStorage.getItem('vortex-user');
        if (savedUser) {
            // Показываем загрузку, пока Firebase не ответит
            setUser(null); // Не undefined — показываем загрузку
        }
        
        return authService.onAuthChange(async (firebaseUser) => {
            if (firebaseUser) {
                // Пользователь авторизован
                setUser(firebaseUser);
                localStorage.setItem('vortex-user', 'true');
                
                // Загружаем ключи шифрования
                const hasKeys = await encryptionService.loadKeys();
                if (!hasKeys) {
                    await encryptionService.generateKeys();
                    await encryptionService.saveKeys();
                }
                
                // Запускаем отслеживание статуса
                presenceService.startTracking();
            } else {
                // Не авторизован
                setUser(null);
                localStorage.removeItem('vortex-user');
            }
            
            // Даём минимум 600мс загрузки (чтобы не было мигания)
            setTimeout(() => setReady(true), 600);
        });
    }, []);

    // Показываем загрузку пока не готовы
    if (!ready) return <LoadingScreen />;
    
    // Показываем загрузку пока проверяем Firebase
    if (user === undefined) return <LoadingScreen />;
    
    if (!user) return <AuthScreen />;
    return <ChatScreen user={user} />;
}