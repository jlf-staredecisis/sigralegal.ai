import { motion } from 'motion/react';

export function ForwardScope() {
  return (
    <section 
      className="px-6 lg:px-20 py-20 lg:py-32"
      style={{ background: '#000000', borderTop: '1px solid rgba(245,242,237,0.06)', position: 'relative' }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <div
            className="mb-6 tracking-[0.3em] uppercase"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.75rem',
              color: '#c4431a',
              fontWeight: 300
            }}
          >
            Forward Scope
          </div>

          <h2
            className="mb-10 lg:mb-12"
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 400,
              color: '#f5f2ed',
              lineHeight: 1.2,
              letterSpacing: '-0.01em'
            }}
          >
            Built for enforced verification
          </h2>

          <div className="space-y-10 lg:space-y-8">
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '1.1rem',
                color: '#d1cbc3',
                lineHeight: 1.8,
                fontWeight: 300
              }}
            >
              Verification is not adopted by choice. It is enforced by opposing counsel, by judges, by evidentiary rules. At the moment of challenge, unverifiable AI analysis becomes inadmissible. The work does not survive the first objection.
            </p>

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '1.1rem',
                color: '#d1cbc3',
                lineHeight: 1.8,
                fontWeight: 300
              }}
            >
              Sigra Legal is the first vertical, not the platform itself. Discovery analysis, gap detection, privilege review, expert witness support — built on cryptographically verified infrastructure. Launch: Q2 2026.
            </p>

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '1.1rem',
                color: '#d1cbc3',
                lineHeight: 1.8,
                fontWeight: 300
              }}
            >
              Other regulated domains face identical verification requirements. Medical diagnostics challenged in malpractice proceedings. Financial models scrutinized by regulators. Engineering analysis tested under cross-examination. The architecture remains constant. The applications vary.
            </p>

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '1.1rem',
                color: '#d1cbc3',
                lineHeight: 1.8,
                fontWeight: 300
              }}
            >
              This is infrastructure for AI that will be challenged. Litigation establishes the requirement. Every other domain operates under the same constraint once scrutiny begins.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}