import { useState, useEffect, useRef, useMemo, useLayoutEffect } from 'preact/hooks';
import { buildMessageOffsets, getVisibleMessageRange } from '../../services/virtualMessageLayout.js';

// Prepared for integration after scroll-anchor, unread and pinned navigation checks.
export function VirtualMessageList({ messages, renderMessage, loading, onScrollToBottom }) {
    const containerRef = useRef(null);
    const measuredHeights = useRef(new Map());
    const [revision, setRevision] = useState(0);
    const [viewport, setViewport] = useState({ top: 0, height: 600 });
    const offsets = useMemo(() => buildMessageOffsets(messages, measuredHeights.current), [messages, revision]);
    const range = getVisibleMessageRange(offsets, viewport.top, viewport.height);

    useEffect(() => {
        const ids = new Set(messages.map(message => message.id));
        for (const id of measuredHeights.current.keys()) {
            if (!ids.has(id)) measuredHeights.current.delete(id);
        }
    }, [messages]);

    useLayoutEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        const update = () => setViewport({ top: container.scrollTop, height: container.clientHeight });
        update();
        if (typeof ResizeObserver === 'undefined') {
            window.addEventListener('resize', update);
            return () => window.removeEventListener('resize', update);
        }
        const observer = new ResizeObserver(update);
        observer.observe(container);
        return () => observer.disconnect();
    }, []);

    useLayoutEffect(() => {
        if (typeof ResizeObserver === 'undefined') return;
        const container = containerRef.current;
        if (!container) return;
        const observer = new ResizeObserver(entries => {
            let changed = false;
            let adjustment = 0;
            for (const entry of entries) {
                const id = entry.target.dataset.messageId;
                const index = messages.findIndex(message => message.id === id);
                if (index < 0) continue;
                const height = entry.borderBoxSize?.[0]?.blockSize ?? entry.target.getBoundingClientRect().height;
                const previous = measuredHeights.current.get(id) ?? 72;
                if (height <= 0 || Math.abs(height - previous) < 0.5) continue;
                measuredHeights.current.set(id, height);
                changed = true;
                if (offsets[index + 1] <= container.scrollTop) adjustment += height - previous;
            }
            if (changed) {
                if (adjustment) container.scrollTop += adjustment;
                setRevision(value => value + 1);
            }
        });
        for (const row of container.querySelectorAll('[data-message-id]')) observer.observe(row);
        return () => observer.disconnect();
    }, [messages, range.start, range.end]);

    const onScroll = () => {
        const container = containerRef.current;
        if (!container) return;
        setViewport({ top: container.scrollTop, height: container.clientHeight });
        onScrollToBottom?.(container.scrollHeight - container.scrollTop - container.clientHeight < 100);
    };

    return (
        <div ref={containerRef} onScroll={onScroll} style={{ flex: 1, overflowY: 'auto', position: 'relative', padding: '0.6rem 0.8rem' }}>
            <div style={{ height: offsets[offsets.length - 1], position: 'relative' }}>
                {messages.slice(range.start, range.end).map((message, index) => {
                    const actualIndex = range.start + index;
                    return (
                        <div key={message.id} data-message-id={message.id} style={{
                            position: 'absolute',
                            top: offsets[actualIndex],
                            width: '100%'
                        }}>
                            {renderMessage(message, actualIndex)}
                        </div>
                    );
                })}
            </div>
            {loading && <div style={{ textAlign: 'center', padding: '1rem', color: 'var(--text-tertiary)' }}>Загрузка...</div>}
        </div>
    );
}
