// Vortex identity: three luminous currents orbiting a crystalline iris.
// The favicon uses the same geometry in public/vortex-mark.svg.
export function BrandMark({ size = 32, decorative = true, className = '', style }) {
    return (
        <svg class={className} width={size} height={size} viewBox="0 0 64 64" fill="none"
            xmlns="http://www.w3.org/2000/svg" aria-hidden={decorative ? 'true' : undefined}
            role={decorative ? undefined : 'img'} aria-label={decorative ? undefined : 'Vortex'} style={style}>
            <defs>
                <linearGradient id="vortex-mark-flow" x1="12" y1="10" x2="53" y2="55" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E2CBFF" />
                    <stop offset=".48" stopColor="#9C70F5" />
                    <stop offset="1" stopColor="#547CE9" />
                </linearGradient>
                <linearGradient id="vortex-mark-iris" x1="25" y1="24" x2="39" y2="41" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F7EAFF" />
                    <stop offset="1" stopColor="#8DDDF4" />
                </linearGradient>
            </defs>
            <rect width="64" height="64" rx="17" fill="#101329" />
            <rect x=".75" y=".75" width="62.5" height="62.5" rx="16.25" stroke="#C5B4FF" strokeOpacity=".2" strokeWidth="1.5" />
            <path d="M11 31C11 18 21 10 33 10C44 10 51 16 55 24L47 28C44 21 40 19 32 19C25 19 20 24 19 32L11 36Z" fill="url(#vortex-mark-flow)" />
            <path d="M52 22C60 32 56 45 47 52C40 57 33 57 27 54L31 45C38 48 45 45 48 39C51 34 50 29 46 25L52 22Z" fill="url(#vortex-mark-flow)" />
            <path d="M30 55C19 57 9 49 9 38C9 32 11 28 15 24L22 30C18 35 18 41 22 45C25 48 29 49 35 47L37 54Z" fill="url(#vortex-mark-flow)" />
            <circle cx="32" cy="33" r="10" stroke="#C1B4FF" strokeOpacity=".45" strokeWidth="2" />
            <circle cx="32" cy="33" r="5.5" fill="url(#vortex-mark-iris)" />
        </svg>
    );
}
