import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function TeamCredentials() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section 
      className="px-6 lg:px-20 py-16 lg:py-32"
      style={{ 
        background: '#0a0a0a',
        borderTop: '1px solid rgba(245,242,237,0.08)',
        position: 'relative'
      }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Mobile: Collapsible Header */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full text-left lg:cursor-default"
          >
            <div className="flex items-center justify-between lg:block">
              <div className="flex-1">
                {/* Section Label */}
                <div
                  className="mb-4 lg:mb-8 tracking-[0.3em] uppercase"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.7rem',
                    color: '#c4431a',
                    fontWeight: 300
                  }}
                >
                  Authority
                </div>

                {/* Headline */}
                <h2
                  className="mb-4 lg:mb-12"
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: 'clamp(1.75rem, 5vw, 3rem)',
                    color: '#f5f2ed',
                    fontWeight: 400,
                    lineHeight: 1.2,
                    maxWidth: '900px'
                  }}
                >
                  Built by practitioners who work under scrutiny
                </h2>
              </div>

              {/* Mobile chevron */}
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden flex-shrink-0 ml-4"
                style={{ color: '#f5f2ed' }}
              >
                <ChevronDown size={28} />
              </motion.div>
            </div>
          </button>

          {/* Desktop: Always visible. Mobile: Collapsible */}
          <div className="hidden lg:block">
            <TeamCredentialsContent />
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="lg:hidden overflow-hidden"
              >
                <div className="pt-6">
                  <TeamCredentialsContent />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function TeamCredentialsContent() {
  return (
    <>
      {/* Framing Paragraph */}
      <p
        className="mb-16 lg:mb-20"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '1.05rem',
          color: '#d1cbc3',
          lineHeight: 1.8,
          fontWeight: 300,
          maxWidth: '900px'
        }}
      >
        Sigra is shaped by decades of adversarial litigation, failure analysis, and cryptographic research — domains where claims must survive independent review. The system is not built for demonstration. It is built for deposition.
      </p>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Left Column - Founder */}
        <div>
          <div
            className="mb-6 lg:mb-8 tracking-[0.2em] uppercase"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.65rem',
              color: '#c4431a',
              fontWeight: 300
            }}
          >
            Founder
          </div>

          <h3
            className="mb-2"
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: '1.5rem',
              color: '#f5f2ed',
              fontWeight: 400,
              lineHeight: 1.3
            }}
          >
            Jeffrey L. Fazio
          </h3>

          <p
            className="mb-6"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.95rem',
              color: '#a8a29e',
              lineHeight: 1.6,
              fontWeight: 300
            }}
          >
            Complex litigation, discovery failure analysis
          </p>

          {/* Credibility Bullets */}
          <ul className="mb-8 space-y-3">
            {[
              '30+ years of complex litigation experience',
              '$3+ billion in recoveries',
              'First court-ordered vehicle recall in U.S. history',
              'Lead counsel in major product-defect class actions'
            ].map((item, index) => (
              <li
                key={index}
                className="relative pl-6"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.9rem',
                  color: '#d1cbc3',
                  lineHeight: 1.7,
                  fontWeight: 300
                }}
              >
                <span
                  className="absolute left-0"
                  style={{ color: '#c4431a' }}
                >
                  —
                </span>
                {item}
              </li>
            ))}
          </ul>

          {/* Quotation */}
          <blockquote
            className="border-l-2 pl-6"
            style={{
              borderColor: 'rgba(196,67,26,0.3)',
              fontFamily: "'Instrument Serif', serif",
              fontSize: '1.15rem',
              color: '#d1cbc3',
              fontStyle: 'italic',
              lineHeight: 1.7,
              fontWeight: 400
            }}
          >
            "After decades of manually searching through millions of documents to find smoking guns hidden by sophisticated defendants, I recognized that AI could transform this work—but only if it could be trusted.<br className="block lg:hidden" />
            The problem wasn't capability. It was verification.<br className="block lg:hidden" />
            Sigra was built to solve that problem."
            <footer
              className="mt-3"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.85rem',
                color: '#c4431a',
                fontStyle: 'normal',
                fontWeight: 400
              }}
            >
              — Jeff Fazio, Founder
            </footer>
          </blockquote>
        </div>

        {/* Right Column - Scientific Advisory */}
        <div>
          <div
            className="mb-6 lg:mb-8 tracking-[0.2em] uppercase"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.65rem',
              color: '#c4431a',
              fontWeight: 300
            }}
          >
            Scientific Advisory
          </div>

          {/* Advisor 1 */}
          <div className="mb-10 pb-10" style={{ borderBottom: '1px solid rgba(245,242,237,0.06)' }}>
            <h4
              className="mb-1"
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: '1.25rem',
                color: '#f5f2ed',
                fontWeight: 400,
                lineHeight: 1.3
              }}
            >
              Dr. Michael Pecht — University of Maryland
            </h4>

            <ul className="space-y-2 mt-4">
              {[
                'Founding Director, Center for Advanced Life Cycle Engineering',
                '40+ years Physics-of-Failure methodology',
                'IEEE Fellow, ASME Fellow',
                'Testified before Congress on Toyota sudden acceleration and GM ignition switch defects'
              ].map((item, index) => (
                <li
                  key={index}
                  className="relative pl-6"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.9rem',
                    color: '#d1cbc3',
                    lineHeight: 1.7,
                    fontWeight: 300
                  }}
                >
                  <span
                    className="absolute left-0"
                    style={{ color: '#c4431a' }}
                  >
                    •
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Advisor 2 */}
          <div>
            <h4
              className="mb-1"
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: '1.25rem',
                color: '#f5f2ed',
                fontWeight: 400,
                lineHeight: 1.3
              }}
            >
              Professor Sanjam Garg — UC Berkeley
            </h4>

            <ul className="space-y-2 mt-4">
              {[
                'Associate Professor of Computer Science',
                'ACM Doctoral Dissertation Award, Sloan Fellow',
                'Cryptography and security/privacy applications',
                'Best paper awards at CRYPTO and EUROCRYPT',
                'Technical advisor on verification architecture'
              ].map((item, index) => (
                <li
                  key={index}
                  className="relative pl-6"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.9rem',
                    color: '#d1cbc3',
                    lineHeight: 1.7,
                    fontWeight: 300
                  }}
                >
                  <span
                    className="absolute left-0"
                    style={{ color: '#c4431a' }}
                  >
                    •
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}