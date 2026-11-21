export const CHAT_MOBILE_BREAKPOINT = 768;

export function createChatScreenState(viewportWidth) {
    return {
        activeChat: null,
        isMobile: viewportWidth <= CHAT_MOBILE_BREAKPOINT,
        showChat: false
    };
}

export function reduceChatScreenState(state, action) {
    switch (action.type) {
        case 'select-chat':
            return { ...state, activeChat: action.chat, showChat: state.isMobile };
        case 'update-chat':
            if (state.activeChat?.id !== action.chat.id) return state;
            return { ...state, activeChat: action.chat };
        case 'revoke-chat':
            if (state.activeChat?.id !== action.chatId) return state;
            return { ...state, activeChat: null, showChat: false };
        case 'back':
            return state.showChat ? { ...state, showChat: false } : state;
        case 'resize': {
            const isMobile = action.viewportWidth <= CHAT_MOBILE_BREAKPOINT;
            if (isMobile === state.isMobile && (isMobile || !state.showChat)) return state;
            return { ...state, isMobile, showChat: isMobile ? state.showChat : false };
        }
        default:
            return state;
    }
}
