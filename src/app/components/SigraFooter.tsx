import { motion } from 'motion/react';

export function SigraFooter() {
  return (
    <footer 
      className="px-6 lg:px-20 py-16 lg:py-20"
      style={{ 
        background: '#000000',
        borderTop: '1px solid rgba(245,242,237,0.06)'
      }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div>
              <div className="mb-4" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '1.1rem', fontWeight: 500, color: '#f5f2ed', letterSpacing: '0.05em' }}>
                SIGRA
              </div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', color: '#a8a29e', lineHeight: 1.6, fontWeight: 300 }}>
                Verification infrastructure for legal AI
              </p>
            </div>

            <div>
              <div className="mb-4 tracking-[0.2em] uppercase" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: '#c4431a', fontWeight: 300 }}>
                Contact
              </div>
              <a href="mailto:access@sigra.legal" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', color: '#a8a29e', textDecoration: 'none', display: 'block', marginBottom: '0.5rem' }}>
                access@sigra.legal
              </a>
            </div>

            <div>
              <div className="mb-4 tracking-[0.2em] uppercase" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: '#c4431a', fontWeight: 300 }}>
                Notice
              </div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', color: '#a8a29e', lineHeight: 1.6, fontWeight: 300 }}>
                © 2026 Sigra Systems. All rights reserved.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8" style={{ borderTop: '1px solid rgba(245,242,237,0.06)' }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', color: '#78716c', lineHeight: 1.6, fontWeight: 300 }}>
              Sigra is designed for analytical work subject to adversarial review. This site provides technical information, not legal advice.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
