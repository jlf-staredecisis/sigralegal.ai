import { motion } from 'motion/react';

export function DirectAccess() {
  return (
    <section 
      className="px-6 lg:px-20 py-20 lg:py-32"
      style={{ background: '#000000', borderTop: '1px solid rgba(245,242,237,0.06)' }}
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-8 tracking-[0.3em] uppercase" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: '#c4431a', fontWeight: 300 }}>
            Direct Access
          </div>

          <p className="mb-12 lg:mb-16" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.05rem', color: '#d1cbc3', lineHeight: 1.8, fontWeight: 300, maxWidth: '700px', margin: '0 auto 3rem' }}>
            Sigra does not use a sales team. <br className="block lg:hidden" />
            Technical walkthroughs are conducted directly by the Founder. <br className="block lg:hidden" />
            Questions about architecture, verification methodology, or deployment are addressed without intermediaries.
          </p>

          <div className="inline-block px-8 lg:px-12 py-6 lg:py-8" style={{ border: '1px solid rgba(196,67,26,0.2)', borderRadius: '2px', background: 'rgba(196,67,26,0.02)' }}>
            <a href="mailto:JLF@Sigra.io" className="group inline-block" style={{ textDecoration: 'none', transition: 'all 0.3s ease' }}>
              <div className="mb-2 tracking-[0.2em] uppercase" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: '#a8a29e', fontWeight: 300 }}>
                Contact
              </div>
              <div
                className="transition-colors duration-300"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', color: '#f5f2ed', fontWeight: 400, letterSpacing: '0.01em' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#c4431a'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#f5f2ed'; }}
              >
                JLF@Sigra.io
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
