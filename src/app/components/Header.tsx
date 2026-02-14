import { Link, useLocation } from 'react-router';
import { motion } from 'motion/react';

export function Header() {
  const location = useLocation();

  const navItems = [
    { label: 'Why Sigra', path: '/why-sigra' },
    { label: 'Technology', path: '/technology' },
    { label: 'Team', path: '/team' },
    { label: 'Sigra Legal', path: '/sigra-legal' }
  ];

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50"
      style={{ 
        background: 'rgba(10,10,10,0.85)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(245,242,237,0.06)'
      }}
    >
      <div className="px-6 lg:px-20 py-6" style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <motion.div
            whileHover={{ opacity: 0.7 }}
            transition={{ duration: 0.2 }}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '1.1rem',
              fontWeight: 500,
              color: '#f5f2ed',
              letterSpacing: '0.05em'
            }}
          >
            SIGRA
          </motion.div>
        </Link>

        <nav className="flex items-center gap-8 lg:gap-12">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.95rem',
                fontWeight: 400,
                color: location.pathname === item.path ? '#f5f2ed' : '#a8a29e',
                textDecoration: 'none',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#f5f2ed'}
              onMouseLeave={(e) => e.currentTarget.style.color = location.pathname === item.path ? '#f5f2ed' : '#a8a29e'}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      </div>
    </header>
  );
}
