import { useState, useEffect } from 'preact/hooks';
import { Sidebar } from './Sidebar';
import { ChatWindow } from './ChatWindow';

export function ChatScreen({ user }) {
    const [activeChat, setActiveChat] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [showChat, setShowChat] = useState(false);

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