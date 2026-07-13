export function LoadingScreen() {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            background: 'var(--bg-primary)'
        }}>
            <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '4rem' }}>🌪️</div>
                <h1 style={{
                    background: 'var(--gradient-brand)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: '2rem',
                    fontWeight: 800
                }}>Vortex</h1>
            </div>
        </div>
    );
}