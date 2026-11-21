export function getNextAuthTabIndex(key, currentIndex, tabCount) {
    if (!Number.isInteger(tabCount) || tabCount < 1) return -1;
    if (key === 'Home') return 0;
    if (key === 'End') return tabCount - 1;
    if (key === 'ArrowRight') return (currentIndex + 1 + tabCount) % tabCount;
    if (key === 'ArrowLeft') return (currentIndex - 1 + tabCount) % tabCount;
    return -1;
}
