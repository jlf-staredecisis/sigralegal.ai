import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface ApproachSectionProps {
  expandedSection: 'overview' | 'approach' | null;
  setExpandedSection: (section: 'overview' | 'approach' | null) => void;
}

export function ApproachSection({ expandedSection, setExpandedSection }: ApproachSectionProps) {
  return (
    <section 
      className="px-6 lg:px-20 py-20 lg:py-28"
      style={{ background: '#0a0a0a', borderBottom: '1px solid rgba(245,242,237,0.1)' }}
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <button
            onClick={() => setExpandedSection(expandedSection === 'approach' ? null : 'approach')}
            className="w-full text-left group"
            style={{ cursor: 'pointer' }}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1">
                <div className="mb-3 tracking-[0.3em] uppercase" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', color: '#c4431a', fontWeight: 300 }}>
                  The Approach
                </div>
                <h2 className="transition-colors duration-300" style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(1.75rem, 5vw, 3rem)', fontWeight: 400, color: expandedSection === 'approach' ? '#f5f2ed' : '#d1cbc3', lineHeight: 1.2, letterSpacing: '-0.01em' }}>
                  Provenance over probability
                </h2>
              </div>
              <motion.div animate={{ rotate: expandedSection === 'approach' ? 180 : 0 }} transition={{ duration: 0.3 }} style={{ color: '#f5f2ed' }} className="flex-shrink-0">
                <ChevronDown size={28} className="lg:w-8 lg:h-8" />
              </motion.div>
            </div>
          </button>

          <AnimatePresence>
            {expandedSection === 'approach' && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                style={{ overflow: 'hidden' }}
              >
                <div className="pt-10 lg:pt-12 pb-4 lg:pb-6 space-y-10 lg:space-y-8">
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.05rem', color: '#d1cbc3', lineHeight: 1.8, fontWeight: 300 }}>
                    Every output traces to verified source material. The system records what documents it examined, what relationships it identified, what reasoning steps it followed. When challenged, you provide proof — not explanation.
                  </p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.05rem', color: '#d1cbc3', lineHeight: 1.8, fontWeight: 300 }}>
                    Nothing leaves your control. Processing happens locally, under your physical custody. Privileged material never touches external servers. No cloud uploads, no API calls that expose attorney-client communications or work product.
                  </p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.05rem', color: '#d1cbc3', lineHeight: 1.8, fontWeight: 300 }}>
                    The system doesn't just search, it maps. When Sigra ingests the ESI from a document production, it builds comprehensive knowledge structures: entities, relationships, communication patterns, referenced materials. It identifies not only what exists in the record, but what should exist and what appears to be missing.
                  </p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.05rem', color: '#d1cbc3', lineHeight: 1.8, fontWeight: 300 }}>
                    And when it's time to show your work, you can — without showing your hand. The architecture separates analytical proof from document content, so independent parties can verify what was examined and how conclusions were reached without ever accessing the underlying privileged material.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
