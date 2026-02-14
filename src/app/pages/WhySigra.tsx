import { motion } from 'motion/react';
import { Header } from '../components/Header';
import { SigraFooter } from '../components/SigraFooter';
import { PlatformNavigation } from '../components/PlatformNavigation';

export function WhySigra() {
  return (
    <div className="min-h-screen" style={{ background: '#0a0a0a' }}>
      <Header />
      
      <section className="px-12 lg:px-20 py-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div
              className="mb-6 tracking-[0.3em] uppercase"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.85rem',
                color: '#a8a29e',
                fontWeight: 300
              }}
            >
              Why Sigra
            </div>

            <h1
              className="mb-8"
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                fontWeight: 400,
                color: '#f5f2ed',
                lineHeight: 1.1,
                letterSpacing: '-0.01em'
              }}
            >
              The verification gap
            </h1>

            <p
              className="mb-16"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '1.3rem',
                color: '#a8a29e',
                lineHeight: 1.6,
                fontWeight: 300
              }}
            >
              Why we exist
            </p>

            <div className="space-y-8">
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '1.2rem',
                  color: '#d1cbc3',
                  lineHeight: 1.8,
                  fontWeight: 300
                }}
              >
                Modern analytical work produces conclusions faster than it preserves reasoning. As records grow larger 
                and more technical, courts increasingly expect not just answers, but the ability to independently verify 
                how those answers were reached.
              </p>

              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '1.2rem',
                  color: '#d1cbc3',
                  lineHeight: 1.8,
                  fontWeight: 300
                }}
              >
                Most systems optimize for speed, summarization, or convenience. In doing so, they discard context, 
                intermediate steps, and alternative paths—details that only become critical once a conclusion is challenged.
              </p>

              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '1.2rem',
                  color: '#f5f2ed',
                  lineHeight: 1.8,
                  fontWeight: 400
                }}
              >
                Sigra exists to close that gap.
              </p>

              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '1.2rem',
                  color: '#d1cbc3',
                  lineHeight: 1.8,
                  fontWeight: 300
                }}
              >
                It preserves the full analytical path so conclusions remain explainable, testable, and defensible 
                under scrutiny.
              </p>
            </div>

            <div
              className="mt-16 p-8"
              style={{
                borderLeft: '2px solid rgba(196,67,26,0.4)',
                background: 'rgba(196,67,26,0.06)',
                borderRadius: '4px'
              }}
            >
              <div
                className="mb-2 tracking-[0.2em] uppercase"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.75rem',
                  color: '#C4431A',
                  fontWeight: 400
                }}
              >
                Key idea
              </div>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '1.15rem',
                  color: '#d1cbc3',
                  lineHeight: 1.8,
                  fontWeight: 300
                }}
              >
                Verification is no longer optional once review is requested. Sigra is built for that moment.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <PlatformNavigation />
      <SigraFooter />
    </div>
  );
}
