import { useState } from 'preact/hooks';
import { Sidebar } from './Sidebar';
import { ChatWindow } from './ChatWindow';

export function ChatScreen({ user }) {
    const [activeChat, setActiveChat] = useState(null);

    return (
        <div style={{ display: 'flex', height: '100%' }}>
            <Sidebar
                user={user}
                activeChat={activeChat}
                onSelectChat={setActiveChat}
            />
            <ChatWindow
                chat={activeChat}
                user={user}
            />
        </div>
    );
}