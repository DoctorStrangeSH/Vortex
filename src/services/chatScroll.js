export function isNearChatBottom({ scrollHeight, scrollTop, clientHeight }, threshold = 60) {
    return scrollHeight - scrollTop - clientHeight <= threshold;
}
