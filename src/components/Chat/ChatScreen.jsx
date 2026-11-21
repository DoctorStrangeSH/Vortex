import { useReducer, useEffect } from 'preact/hooks';
import { Sidebar } from './Sidebar';
import { ChatWindow } from './ChatWindow';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../services/firebase';
import { createChatScreenState, reduceChatScreenState } from '../../services/chatScreenState.js';

export function ChatScreen({ user }) {
    // A new signed-in account must never inherit the previous account's
    // selected conversation, mobile panel, or live subscriptions.
    return <AccountChatScreen key={user.uid} user={user} />;
}

function AccountChatScreen({ user }) {
    const [navigation, dispatch] = useReducer(
        reduceChatScreenState,
        window.innerWidth,
        createChatScreenState
    );
    const { activeChat, isMobile, showChat } = navigation;

    // The sidebar updates its own list, but a selected chat must also refresh:
    // newly invited members and admin changes should appear without reopening it.
    useEffect(() => {
        const chatId = activeChat?.id;
        if (!chatId) return undefined;
        const clearIfCurrent = () => dispatch({ type: 'revoke-chat', chatId });
        return onSnapshot(doc(db, 'chats', chatId), snapshot => {
            if (!snapshot.exists() || !snapshot.data().participants?.includes(user.uid)) {
                clearIfCurrent();
                return;
            }
            dispatch({ type: 'update-chat', chat: { id: snapshot.id, ...snapshot.data() } });
        }, error => {
            if (error.code === 'permission-denied' || error.code === 'not-found') clearIfCurrent();
            else console.error('Не удалось обновить чат', error);
        });
    }, [activeChat?.id, user.uid]);

    useEffect(() => {
        const handleResize = () => dispatch({ type: 'resize', viewportWidth: window.innerWidth });
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleSelectChat = chat => dispatch({ type: 'select-chat', chat });
    const handleBack = () => dispatch({ type: 'back' });

    if (!isMobile) {
        return (
            <div style={{ display: 'flex', height: '100%' }}>
                <div style={{ width: '380px', minWidth: '380px', height: '100%' }}>
                    <Sidebar user={user} activeChat={activeChat} onSelectChat={handleSelectChat} />
                </div>
                <div style={{ flex: 1, minWidth: 0, height: '100%' }}>
                    <ChatWindow chat={activeChat} user={user} onBack={handleBack} isMobile={false} />
                </div>
            </div>
        );
    }

    return (
        <div style={{ display: 'flex', height: '100%', overflow: 'hidden' }}>
            <div style={{ width: '100%', height: '100%', display: showChat ? 'none' : 'flex', position: 'absolute', top: 0, left: 0, zIndex: 10 }}>
                <Sidebar user={user} activeChat={activeChat} onSelectChat={handleSelectChat} />
            </div>
            <div style={{ width: '100%', height: '100%', display: showChat ? 'flex' : 'none', position: 'absolute', top: 0, left: 0, zIndex: 20 }}>
                <ChatWindow chat={activeChat} user={user} onBack={handleBack} isMobile={true} />
            </div>
        </div>
    );
}
