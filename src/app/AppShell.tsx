import { useState, useEffect } from 'react';

/**
 * Page chrome shared by the client entry and the prerender entry.
 *
 * Both entries must render identical markup or hydration mismatches. The
 * mouse-glow starts at 0,0 on server and client alike; the effect that moves
 * it only runs in the browser.
 */
export function AppShell({ children }: { children: React.ReactNode }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen relative" style={{ background: '#0a0a0a' }}>
      {/* Mouse glow effect */}
      <div
        className="fixed pointer-events-none z-50"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, rgba(123, 177, 255, 0.12) 0%, rgba(123, 177, 255, 0.06) 30%, transparent 70%)',
          filter: 'blur(40px)',
          opacity: 0.8
        }}
      />

      {children}
    </div>
  );
}
