import { render } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { ChatHeader } from '../../src/components/Chat/ChatHeader.jsx';

function Fixture() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    useEffect(() => {
        const update = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    const action = name => () => window.__vortexCalls.push(name);
    return <div style={{ width: '100%', minWidth: 0 }}>
        <ChatHeader
            chat={{ id: 'browser-test-group', type: 'group' }}
            user={{ uid: 'browser-test-owner' }}
            other={{ name: 'Очень длинное название группового чата для проверки адаптивности' }}
            avatarColor="linear-gradient(135deg, #8065df, #4f8fca)"
            otherStatus={{ isOnline: true, lastSeen: null }}
            isTyping={false}
            isMobile={isMobile}
            onBack={action('back')}
            onShowInfo={action('info')}
            onShowGallery={action('gallery')}
            onShowTheme={action('theme')}
            onShowStatus={action('status')}
            onShowMembers={action('members')}
            onExport={action('export')}
        />
    </div>;
}

window.__vortexCalls = [];
render(<Fixture />, document.getElementById('app'));
