import { h, render } from 'preact';
import { useRef, useState } from 'preact/hooks';
import { VirtualMessageList } from '../../src/components/Chat/VirtualMessageList.jsx';

const initialMessages = Array.from({ length: 1500 }, (_, index) => ({ id: `message-${index}`, type: 'message' }));

function VirtualFeedHarness() {
    const [messages, setMessages] = useState(initialMessages);
    const [navigationTarget, setNavigationTarget] = useState(null);
    const [expanded, setExpanded] = useState(false);
    const [visibleChanges, setVisibleChanges] = useState(0);
    const containerRef = useRef(null);
    const requestRef = useRef(0);

    window.virtualFeedQA = {
        navigate: id => setNavigationTarget({ id, align: 'center', requestId: ++requestRef.current }),
        prepend: () => setMessages(current => [...Array.from({ length: 40 }, (_, index) => ({ id: `older-${index}`, type: 'message' })), ...current]),
        expandLast: () => setExpanded(true),
        scrollBottom: () => { containerRef.current.scrollTop = containerRef.current.scrollHeight; },
        metrics: () => ({
            scrollTop: containerRef.current.scrollTop,
            scrollHeight: containerRef.current.scrollHeight,
            clientHeight: containerRef.current.clientHeight,
            mountedRows: containerRef.current.querySelectorAll('[data-message-id]').length,
            visibleChanges
        })
    };

    return <div style={{ height: '650px', display: 'flex', flexDirection: 'column' }}>
        <VirtualMessageList messages={messages} navigationTarget={navigationTarget}
            externalContainerRef={containerRef}
            onVisibleRowsChange={() => setVisibleChanges(count => count + 1)}
            renderMessage={row => <div data-qa-id={row.id} style={{ boxSizing: 'border-box', height: row.id === 'message-1499' && expanded ? '420px' : '82px', borderBottom: '1px solid #ccc' }}>{row.id}</div>} />
    </div>;
}

render(<VirtualFeedHarness />, document.getElementById('root'));
