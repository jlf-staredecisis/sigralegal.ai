import { RouterProvider } from 'react-router';
import { router } from './routes';
import { useState, useEffect } from 'react';

export default function App() {
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
      
      <RouterProvider router={router} />
    </div>
  );
}
