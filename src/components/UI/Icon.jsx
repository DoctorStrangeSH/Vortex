// Consistent 24px outline language for the messenger's primary actions.
export function Icon({ name, size = 20, strokeWidth = 1.8 }) {
    const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true' };
    const shapes = {
        search: <><circle cx="10.8" cy="10.8" r="7.3" /><path d="m16.2 16.2 5 5" /></>,
        message: <><path d="M20 11.5a8 8 0 0 1-8 8c-1.2 0-2.5-.3-3.5-.8L3 21l1.8-5.2A8 8 0 1 1 20 11.5Z" /></>,
        user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
        menu: <><path d="M4 6h16M4 12h16M4 18h16" /></>,
        close: <><path d="M5 5 19 19M19 5 5 19" /></>,
        plus: <><path d="M12 5v14M5 12h14" /></>,
        broadcast: <><path d="M4 10v4h4l10 5V5L8 10H4Z" /><path d="M8 14 10 21M21 9a5 5 0 0 1 0 6" /></>,
        tasks: <><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4.5h6M9 10h6M9 15h6" /></>,
        moon: <path d="M20 15.8A8 8 0 0 1 8.2 4a8 8 0 1 0 11.8 11.8Z" />,
        sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
        logout: <><path d="M10 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5M14 8l4 4-4 4M8 12h10" /></>,
        users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
        palette: <><path d="M12 3a9 9 0 1 0 0 18h1.5a2.5 2.5 0 0 0 2.2-3.7 2 2 0 0 1 1.8-3h1.3A3.2 3.2 0 0 0 22 11.1 9 9 0 0 0 12 3Z" /><circle cx="7.5" cy="11" r="1" /><circle cx="10" cy="7" r="1" /><circle cx="15" cy="7.5" r="1" /></>,
        smile: <><circle cx="12" cy="12" r="9" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><path d="M9 9h.01M15 9h.01" /></>,
        image: <><rect x="3" y="3" width="18" height="18" rx="3" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="m21 15-5-5L5 21" /></>,
        download: <><path d="M12 3v12m-4-4 4 4 4-4" /><path d="M4 17v3h16v-3" /></>,
        paperclip: <path d="m21 11.5-8.6 8.6a6 6 0 0 1-8.5-8.5l9-9a4 4 0 0 1 5.7 5.7l-9 9a2 2 0 0 1-2.8-2.8l8.3-8.3" />,
        microphone: <><rect x="9" y="2.5" width="6" height="12" rx="3" /><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V22m-4 0h8" /></>,
        sparkles: <><path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3ZM19 17l.7 2.3L22 20l-2.3.7L19 23l-.7-2.3L16 20l2.3-.7L19 17ZM4 2l.6 1.8L6.5 4.5l-1.9.6L4 7l-.6-1.9-1.9-.6 1.9-.7L4 2Z" /></>,
        send: <><path d="m21 3-8 18-3.7-7.3L2 10l19-7Z" /><path d="M9.3 13.7 21 3" /></>,
        loader: <><path d="M12 3a9 9 0 1 1-9 9" /></>
    };
    return <svg {...common}>{shapes[name] || shapes.sparkles}</svg>;
}
