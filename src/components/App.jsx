import { useState, useEffect } from 'preact/hooks';
import { AuthScreen } from './Auth/AuthScreen';
import { ChatScreen } from './Chat/ChatScreen';
import { LoadingScreen } from './UI/LoadingScreen';
import { authService } from '../services/authService';

export function App() {
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        return authService.onAuthChange(setUser);
    }, []);

    if (user === undefined) return <LoadingScreen />;
    if (!user) return <AuthScreen />;
    return <ChatScreen user={user} />;
}