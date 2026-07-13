import { useState, useEffect, useRef, useCallback } from 'preact/hooks';

export function VirtualMessageList({ messages, renderMessage, loading, onScrollToBottom }) {
    const containerRef = useRef(null);
    const [visibleRange, setVisibleRange] = useState({ start: 0, end: 20 });
    const ITEM_HEIGHT = 60; // Примерная высота сообщения
    const BUFFER = 10; // Сообщений сверху/снизу для плавности

    const totalHeight = messages.length * ITEM_HEIGHT;

    const handleScroll = useCallback(() => {
        const el = containerRef.current;
        if (!el) return;

        const scrollTop = el.scrollTop;
        const containerHeight = el.clientHeight;
        
        const start = Math.max(0, Math.floor(scrollTop / ITEM_HEIGHT) - BUFFER);
        const end = Math.min(
            messages.length,
            Math.ceil((scrollTop + containerHeight) / ITEM_HEIGHT) + BUFFER
        );

        setVisibleRange({ start, end });

        // Автоскролл?
        const atBottom = el.scrollHeight - scrollTop - containerHeight < 100;
        if (atBottom && onScrollToBottom) onScrollToBottom(true);
    }, [messages.length]);

    useEffect(() => {
        handleScroll();
    }, [messages.length]);

    // Скролл вниз
    const scrollToBottom = () => {
        const el = containerRef.current;
        if (el) el.scrollTop = el.scrollHeight;
    };

    const visibleMessages = messages.slice(visibleRange.start, visibleRange.end);

    return (
        <div ref={containerRef} onScroll={handleScroll} style={{
            flex: 1,
            overflowY: 'auto',
            position: 'relative',
            padding: '0.6rem 0.8rem'
        }}>
            <div style={{ height: totalHeight, position: 'relative' }}>
                {visibleMessages.map((msg, i) => {
                    const actualIndex = visibleRange.start + i;
                    return (
                        <div key={msg.id} style={{
                            position: 'absolute',
                            top: actualIndex * ITEM_HEIGHT,
                            width: '100%',
                            height: ITEM_HEIGHT
                        }}>
                            {renderMessage(msg, actualIndex)}
                        </div>
                    );
                })}
            </div>
            {loading && <div style={{ textAlign: 'center', padding: '1rem', color: 'var(--text-tertiary)' }}>Загрузка...</div>}
        </div>
    );
}