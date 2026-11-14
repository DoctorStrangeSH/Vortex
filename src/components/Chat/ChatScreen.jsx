import { useState, useEffect } from 'preact/hooks';
import { Sidebar } from './Sidebar';
import { ChatWindow } from './ChatWindow';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../services/firebase';

export function ChatScreen({ user }) {
    const [activeChat, setActiveChat] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [showChat, setShowChat] = useState(false);

    // The sidebar updates its own list, but a selected chat must also refresh:
    // newly invited members and admin changes should appear without reopening it.
    useEffect(() => {
        const chatId = activeChat?.id;
        if (!chatId) return undefined;
        const clearIfCurrent = () => {
            setActiveChat(current => current?.id === chatId ? null : current);
            setShowChat(false);
        };
        return onSnapshot(doc(db, 'chats', chatId), snapshot => {
            if (!snapshot.exists() || !snapshot.data().participants?.includes(user.uid)) {
                clearIfCurrent();
                return;
            }
            setActiveChat(current => current?.id === chatId ? { id: snapshot.id, ...snapshot.data() } : current);
        }, error => {
            if (error.code === 'permission-denied' || error.code === 'not-found') clearIfCurrent();
            else console.error('Не удалось обновить чат', error);
        });
    }, [activeChat?.id, user.uid]);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile);
            if (!mobile) setShowChat(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleSelectChat = (chat) => {
        setActiveChat(chat);
        if (isMobile) setShowChat(true);
    };

    const handleBack = () => setShowChat(false);

    if (!isMobile) {
        return (
            <div style={{ display: 'flex', height: '100%' }}>
                <div style={{ width: '380px', minWidth: '380px', height: '100%' }}>
                    <Sidebar user={user} activeChat={activeChat} onSelectChat={handleSelectChat} />
                </div>
                <div style={{ flex: 1, height: '100%' }}>
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
