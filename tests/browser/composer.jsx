import { h, render } from 'preact';
import { useState } from 'preact/hooks';
import { MessageInput } from '../../src/components/Chat/MessageInput.jsx';

function ComposerFixture() {
    const [text, setText] = useState('');
    const [editingMessage, setEditingMessage] = useState({ id: 'message-1' });
    const [sent, setSent] = useState(0);
    const [cancelled, setCancelled] = useState(0);
    const [typing, setTyping] = useState(0);
    const onSend = () => {
        setSent(value => value + 1);
        setText('');
    };
    const onCancelEdit = () => {
        setCancelled(value => value + 1);
        setEditingMessage(null);
    };

    return h('section', { 'data-testid': 'composer-fixture' }, [
        h('output', { 'data-testid': 'sent-count' }, String(sent)),
        h('output', { 'data-testid': 'cancel-count' }, String(cancelled)),
        h('output', { 'data-testid': 'typing-count' }, String(typing)),
        h(MessageInput, {
            text,
            onTextChange: setText,
            onSend,
            onTyping: () => setTyping(value => value + 1),
            editingMessage,
            onCancelEdit,
            sending: false
        })
    ]);
}

render(h(ComposerFixture), document.getElementById('app'));
