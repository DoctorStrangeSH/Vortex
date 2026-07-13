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

    const handleBack = () => {
        setShowChat(false);
        // Не сбрасываем activeChat — возвращаемся в тот же чат
    };

    return (
        <div style={{ 
            display: 'flex', 
            height: '100%', 
            background: 'var(--bg-primary)',
            overflow: 'hidden'
        }}>
            {/* САЙДБАР */}
            <div style={{
                width: isMobile ? '100%' : '380px',
                minWidth: isMobile ? '100%' : '380px',
                height: '100%',
                display: (isMobile && showChat) ? 'none' : 'flex',
                transform: (isMobile && showChat) ? 'translateX(-100%)' : 'translateX(0)',
                transition: isMobile ? 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
                position: isMobile ? 'absolute' : 'relative',
                top: 0,
                left: 0,
                zIndex: isMobile ? 10 : 1
            }}>
                <Sidebar
                    user={user}
                    activeChat={activeChat}
                    onSelectChat={handleSelectChat}
                />
            </div>

            {/* ОКНО ЧАТА */}
            <div style={{
                flex: 1,
                height: '100%',
                display: (isMobile && !showChat) ? 'none' : 'flex',
                flexDirection: 'column',
                position: isMobile ? 'absolute' : 'relative',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: isMobile ? 20 : 1,
                background: 'var(--bg-primary)',
                transform: (isMobile && showChat) ? 'translateX(0)' : 'translateX(100%)',
                transition: isMobile ? 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
            }}>
                <ChatWindow
                    chat={activeChat}
                    user={user}
                    onBack={handleBack}
                    isMobile={isMobile}
                />
            </div>
        </div>
    );
}