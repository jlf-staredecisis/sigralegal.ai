import { motion } from 'motion/react';
import { Header } from '../components/Header';
import { SigraFooter } from '../components/SigraFooter';
import { PlatformNavigation } from '../components/PlatformNavigation';

export function Team() {
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
              Team
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
              Founders · Advisors
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
              Scientific oversight
            </p>

            <div className="space-y-8">
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.2rem', color: '#d1cbc3', lineHeight: 1.8, fontWeight: 300 }}>
                Sigra is built at the intersection of law, technology, and evidentiary standards.
              </p>

              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.2rem', color: '#d1cbc3', lineHeight: 1.8, fontWeight: 300 }}>
                The team includes legal practitioners, technical architects, and advisors experienced in discovery, 
                expert testimony, and complex analytical systems. Oversight is structured to ensure that system design 
                aligns with how evidence is actually examined—not how it is marketed.
              </p>

              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.2rem', color: '#f5f2ed', lineHeight: 1.8, fontWeight: 400 }}>
                This is not a consumer AI product adapted for legal use.
                <br />
                It is a system designed from the outset for adversarial review.
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
              <div className="mb-3 tracking-[0.2em] uppercase" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', color: '#C4431A', fontWeight: 400 }}>
                Focus areas
              </div>
              <ul className="space-y-3">
                <li style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.15rem', color: '#d1cbc3', lineHeight: 1.8, fontWeight: 300 }}>Evidentiary reliability</li>
                <li style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.15rem', color: '#d1cbc3', lineHeight: 1.8, fontWeight: 300 }}>Method transparency</li>
                <li style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.15rem', color: '#d1cbc3', lineHeight: 1.8, fontWeight: 300 }}>Real-world litigation pressure</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <PlatformNavigation />
      <SigraFooter />
    </div>
  );
}
