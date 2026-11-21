export function getNextMenuItemIndex(key, currentIndex, itemCount) {
    if (!Number.isInteger(itemCount) || itemCount < 1) return -1;
    if (key === 'Home') return 0;
    if (key === 'End') return itemCount - 1;
    if (key === 'ArrowDown') return (currentIndex + 1 + itemCount) % itemCount;
    if (key === 'ArrowUp') return (currentIndex - 1 + itemCount) % itemCount;
    return -1;
}
