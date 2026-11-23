import { h, render } from 'preact';
import { useState } from 'preact/hooks';
import { MessageBubble } from '../../src/components/Chat/MessageBubble.jsx';

function Fixture() {
    const [events, setEvents] = useState([]);
    const [readBy, setReadBy] = useState([]);
    const record = (type, detail = {}) => setEvents(current => [...current, { type, ...detail }]);
    const msg = {
        id: 'message-browser-1',
        senderId: 'user-a',
        text: 'Проверка настоящего компонента сообщения',
        type: 'text',
        createdAt: { toDate: () => new Date(2026, 10, 22, 9, 7) },
        reactions: { '👍': ['user-a', 'user-b'] },
        isEdited: true,
        readBy
    };
    return h('section', { 'data-testid': 'message-fixture' }, [
        h('output', { 'data-testid': 'events' }, JSON.stringify(events)),
        h('button', { type: 'button', onClick: () => setReadBy(['user-b']) }, 'Отметить прочитанным'),
        h('button', { type: 'button', onClick: () => setReadBy(['user-b', 'user-c']) }, 'Прочитано всеми'),
        h(MessageBubble, {
            msg,
            own: true,
            other: { name: 'Sherlock' },
            avatarColor: '#555',
            isMobile: false,
            isPinned: true,
            participants: ['user-a', 'user-b', 'user-c'],
            onContextMenu: (_event, messageId, own, text) => record('context-menu', { messageId, own, text }),
            onDoubleClick: detail => record('double-click', detail),
            onReactionClick: (messageId, emoji) => record('reaction', { messageId, emoji }),
            onReply: messageId => record('reply', { messageId })
        })
    ]);
}
render(h(Fixture), document.getElementById('app'));
