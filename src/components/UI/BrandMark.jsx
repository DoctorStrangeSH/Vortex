// Original vector identity: three currents orbiting a luminous center.
export function BrandMark({ size = 32, decorative = true, className = '', style }) {
    return (
        <svg class={className} width={size} height={size} viewBox="0 0 80 80" fill="none"
            xmlns="http://www.w3.org/2000/svg" aria-hidden={decorative ? 'true' : undefined}
            role={decorative ? undefined : 'img'} aria-label={decorative ? undefined : 'Vortex'} style={style}>
            <defs>
                <linearGradient id="vortex-mark-flow" x1="10" y1="12" x2="71" y2="69" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E1D5FF" />
                    <stop offset=".48" stopColor="#AE8DFF" />
                    <stop offset="1" stopColor="#6D8DEB" />
                </linearGradient>
            </defs>
            <path d="M12 29C16 14 32 8 46 12C58 15 67 26 67 39"
                stroke="url(#vortex-mark-flow)" strokeWidth="7" strokeLinecap="round" />
            <path d="M62 51C53 66 36 72 22 63C11 56 8 42 13 31"
                stroke="url(#vortex-mark-flow)" strokeWidth="7" strokeLinecap="round" />
            <path d="M25 28C35 20 48 23 54 32C61 43 51 57 39 56C29 55 25 47 28 39"
                stroke="url(#vortex-mark-flow)" strokeWidth="6" strokeLinecap="round" />
            <circle cx="40" cy="40" r="5" fill="#F7F1FF" />
            <circle cx="40" cy="40" r="11" stroke="#C7B3FF" strokeOpacity=".22" strokeWidth="2" />
        </svg>
    );
}
