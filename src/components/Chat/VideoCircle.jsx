import { useRef, useEffect } from 'preact/hooks';

export function VideoCircle({ src, size = 120, autoPlay = true }) {
    const canvasRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        if (!autoPlay) return;
        
        const video = videoRef.current;
        const canvas = canvasRef.current;
        if (!video || !canvas) return;

        const ctx = canvas.getContext('2d');

        const draw = () => {
            if (video.paused || video.ended) return;

            ctx.clearRect(0, 0, size, size);
            
            // Круглая маска
            ctx.save();
            ctx.beginPath();
            ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
            ctx.clip();
            
            ctx.drawImage(video, 0, 0, size, size);
            ctx.restore();

            requestAnimationFrame(draw);
        };

        video.addEventListener('play', draw);
        return () => video.removeEventListener('play', draw);
    }, [autoPlay]);

    return (
        <div style={{ position: 'relative', width: size, height: size, display: 'inline-block' }}>
            <canvas ref={canvasRef} width={size} height={size} style={{ borderRadius: '50%' }} />
            <video ref={videoRef} src={src} style={{ display: 'none' }} muted={autoPlay} playsInline />
            <button onClick={() => videoRef.current?.play()} style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(0,0,0,0.5)',
                border: '2px solid white',
                color: 'white',
                cursor: 'pointer',
                fontSize: '1rem'
            }}>▶</button>
        </div>
    );
}