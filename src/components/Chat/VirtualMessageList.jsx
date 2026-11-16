import { useState, useEffect, useRef, useMemo, useLayoutEffect } from 'preact/hooks';
import { buildMessageOffsets, getVisibleMessageRange, indexMessagesById, shouldUpdateMeasuredHeight, scrollAnchorAdjustment, getMessageNavigationTop, getPrependedScrollOffset, estimatedMessageHeight, isNearVirtualBottom } from '../../services/virtualMessageLayout.js';

// Can share the main chat's scroll container and callbacks during opt-in rollout.
export function VirtualMessageList({ messages, renderMessage, loading, onScrollToBottom, onScrollChange, onMissingTarget, navigationTarget = null, externalContainerRef, className, style }) {
    const containerRef = useRef(null);
    const handledNavigationRef = useRef(null);
    const missingNavigationRef = useRef(null);
    const previousAnchorRef = useRef({ id: null, top: 0 });
    const measuredHeights = useRef(new Map());
    const pendingBottomStickRef = useRef(false);
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
        const container = containerRef.current;
        if (!container) return;
        const previous = previousAnchorRef.current;
        const adjustment = getPrependedScrollOffset(previous.id, messages, offsets, previous.top);
        const anchorIndex = messages.findIndex(row => row.type === 'message');
        const index = anchorIndex < 0 ? 0 : anchorIndex;
        previousAnchorRef.current = { id: messages[index]?.id ?? null, top: offsets[index] ?? 0 };
        if (!adjustment) return;
        container.scrollTop += adjustment;
        setViewport({ top: container.scrollTop, height: container.clientHeight });
    }, [messages, offsets]);

    useLayoutEffect(() => {
        const container = containerRef.current;
        if (!container || !navigationTarget?.id) return;
        if (container.clientHeight <= 0) return;
        const requestKey = JSON.stringify([navigationTarget.id, navigationTarget.requestId ?? 0]);
        if (handledNavigationRef.current === requestKey) return;
        const top = getMessageNavigationTop(messages, offsets, navigationTarget.id, container.clientHeight, navigationTarget.align);
        // Keep the request pending if older history has not been loaded yet.
        if (top === null) {
            // A newly prepended page changes the first ID, allowing one more request.
            const missingKey = JSON.stringify([requestKey, messages[0]?.id ?? null]);
            if (missingNavigationRef.current !== missingKey) {
                missingNavigationRef.current = missingKey;
                onMissingTarget?.(navigationTarget.id);
            }
            return;
        }
        missingNavigationRef.current = null;
        container.scrollTop = top;
        setViewport({ top, height: container.clientHeight });
        handledNavigationRef.current = requestKey;
    }, [messages, offsets, viewport.height, navigationTarget?.id, navigationTarget?.requestId, navigationTarget?.align, onMissingTarget]);

    useLayoutEffect(() => {
        const container = containerRef.current;
        if (!container || !pendingBottomStickRef.current) return;
        pendingBottomStickRef.current = false;
        container.scrollTop = Math.max(0, container.scrollHeight - container.clientHeight);
        setViewport({ top: container.scrollTop, height: container.clientHeight });
    }, [revision]);

    useLayoutEffect(() => {
        if (typeof ResizeObserver === 'undefined') return;
        const container = containerRef.current;
        if (!container) return;
        const indexById = indexMessagesById(messages);
        const observer = new ResizeObserver(entries => {
            let changed = false;
            let adjustment = 0;
            const wasAtBottom = isNearVirtualBottom(container.scrollHeight, container.scrollTop, container.clientHeight);
            for (const entry of entries) {
                const id = entry.target.dataset.messageId;
                const index = indexById.get(id);
                if (index === undefined) continue;
                const height = entry.borderBoxSize?.[0]?.blockSize ?? entry.target.getBoundingClientRect().height;
                const previous = measuredHeights.current.get(id) ?? estimatedMessageHeight(messages[index]);
                if (!shouldUpdateMeasuredHeight(height, previous)) continue;
                measuredHeights.current.set(id, height);
                changed = true;
                adjustment += scrollAnchorAdjustment(offsets[index + 1], container.scrollTop, previous, height);
            }
            if (changed) {
                if (wasAtBottom) pendingBottomStickRef.current = true;
                else if (adjustment) container.scrollTop += adjustment;
                setRevision(value => value + 1);
            }
        });
        for (const row of container.querySelectorAll('[data-message-id]')) observer.observe(row);
        return () => observer.disconnect();
    }, [messages, range.start, range.end, revision]);

    const onScroll = () => {
        const container = containerRef.current;
        if (!container) return;
        setViewport({ top: container.scrollTop, height: container.clientHeight });
        onScrollToBottom?.(isNearVirtualBottom(container.scrollHeight, container.scrollTop, container.clientHeight));
        onScrollChange?.();
    };

    return (
        <div class={className} ref={node => { containerRef.current = node; if (externalContainerRef) externalContainerRef.current = node; }} onScroll={onScroll} onWheel={() => { pendingBottomStickRef.current = false; }} onTouchStart={() => { pendingBottomStickRef.current = false; }} onKeyDown={() => { pendingBottomStickRef.current = false; }} style={{ flex: 1, overflowY: 'auto', position: 'relative', padding: '0.6rem 0.8rem', ...style }}>
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
