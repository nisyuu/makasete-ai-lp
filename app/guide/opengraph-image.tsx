import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Makasete AI 導入ガイド';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* Background blobs */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: '300px',
            height: '300px',
            background: 'rgba(59, 130, 246, 0.1)',
            borderRadius: '50%',
            filter: 'blur(100px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '20%',
            right: '10%',
            width: '400px',
            height: '400px',
            background: 'rgba(59, 130, 246, 0.05)',
            borderRadius: '50%',
            filter: 'blur(120px)',
          }}
        />

        {/* Content Card */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#141414',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '40px',
            width: '100%',
            height: '100%',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          }}
        >
          <h1
            style={{
              fontSize: '84px',
              fontWeight: 'bold',
              marginBottom: '32px',
              background: 'linear-gradient(to right, #3b82f6, #60a5fa, #3b82f6)',
              backgroundClip: 'text',
              color: 'transparent',
              textAlign: 'center',
            }}
          >
            Makasete AI 導入ガイド
          </h1>
          <p
            style={{
              fontSize: '36px',
              color: '#a1a1aa',
              textAlign: 'center',
            }}
          >
            スプレッドシートで始める、一歩先のAI接客
          </p>
          
          <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '60px',
            color: 'rgba(255, 255, 255, 0.2)',
            fontFamily: 'monospace',
            fontSize: '24px',
          }}
          >
          01 / 12
          </div>        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
