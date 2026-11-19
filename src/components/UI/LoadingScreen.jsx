import { BrandMark } from './BrandMark';
export function LoadingScreen() {
    return (
        <div class="vortex-auth-screen" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            background: 'var(--bg-primary)'
        }}>
            <div style={{ textAlign: 'center' }}>
                <div class="vortex-loading-mark"><BrandMark size={78} /></div>
                <h1 style={{
                    background: 'var(--gradient-brand)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: '2rem',
                    fontWeight: 800
                }}>Vortex</h1>
                <p style={{ color: 'var(--text-tertiary)', marginTop: '0.5rem' }} role="status">Загрузка...</p>
            </div>
        </div>
    );
}