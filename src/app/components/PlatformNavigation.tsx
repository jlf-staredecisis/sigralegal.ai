import { Link, useLocation } from 'react-router';
import { motion } from 'motion/react';

export function PlatformNavigation() {
  const location = useLocation();

  const platforms = [
    { name: 'Why Sigra', path: '/why-sigra' },
    { name: 'Technology', path: '/technology' },
    { name: 'Team', path: '/team' },
    { name: 'Sigra Legal', path: '/sigra-legal' }
  ];

  return (
    <section 
      className="px-6 lg:px-20 py-16 lg:py-20"
      style={{ background: '#000000', borderTop: '1px solid rgba(245,242,237,0.06)', borderBottom: '1px solid rgba(245,242,237,0.06)' }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          <div className="mb-10 tracking-[0.3em] uppercase" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: '#c4431a', fontWeight: 300 }}>
            Explore
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {platforms.map((platform) => (
              <Link key={platform.path} to={platform.path} className="group" style={{ textDecoration: 'none' }}>
                <div
                  className="p-6 lg:p-8 transition-all duration-300"
                  style={{
                    background: location.pathname === platform.path ? 'rgba(196,67,26,0.06)' : 'rgba(245,242,237,0.02)',
                    border: `1px solid ${location.pathname === platform.path ? 'rgba(196,67,26,0.3)' : 'rgba(245,242,237,0.06)'}`,
                    borderRadius: '4px'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(196,67,26,0.06)'; e.currentTarget.style.borderColor = 'rgba(196,67,26,0.3)'; }}
                  onMouseLeave={(e) => { if (location.pathname !== platform.path) { e.currentTarget.style.background = 'rgba(245,242,237,0.02)'; e.currentTarget.style.borderColor = 'rgba(245,242,237,0.06)'; } }}
                >
                  <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: '1.5rem', fontWeight: 400, color: '#f5f2ed', lineHeight: 1.3, letterSpacing: '-0.01em' }}>
                    {platform.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
