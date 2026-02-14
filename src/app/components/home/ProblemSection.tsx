import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface ProblemSectionProps {
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
  onExpandAll?: () => void;
}

export function ProblemSection({ isExpanded, setIsExpanded }: ProblemSectionProps) {
  return (
    <section 
      className="px-6 lg:px-20 py-20 lg:py-28"
      style={{ background: '#000000', borderBottom: '1px solid rgba(245,242,237,0.1)' }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full text-left group"
            style={{ cursor: 'pointer' }}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1">
                <div className="mb-3 tracking-[0.3em] uppercase" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', color: '#c4431a', fontWeight: 300 }}>
                  The Problem
                </div>
                <h2 className="transition-colors duration-300" style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(1.75rem, 5vw, 3rem)', fontWeight: 400, color: isExpanded ? '#f5f2ed' : '#d1cbc3', lineHeight: 1.2, letterSpacing: '-0.01em' }}>
                  Current legal AI cannot withstand cross examination
                </h2>
              </div>
              <div className="flex flex-col items-center gap-3 flex-shrink-0">
                <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }} style={{ color: '#f5f2ed' }}>
                  <ChevronDown size={28} className="lg:w-8 lg:h-8" />
                </motion.div>
              </div>
            </div>
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                style={{ overflow: 'hidden' }}
              >
                <div className="pt-10 lg:pt-12 pb-4 lg:pb-6 space-y-10 lg:space-y-8">
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.05rem', color: '#d1cbc3', lineHeight: 1.8, fontWeight: 300 }}>
                    Current legal AI tools hallucinate--meaning that they confidently create fake legal citations, generate imaginary quotations, get holdings wrong, and so on. And they insist that they're correct even if you happen to catch the error.
                  </p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.05rem', color: '#d1cbc3', lineHeight: 1.8, fontWeight: 300 }}>
                    This is not an occasional problem. As Stanford RegLabs found, Lexis+AI and Westlaw CoCounsel hallucinate at 17% and 33%, respectively.
                  </p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.05rem', color: '#d1cbc3', lineHeight: 1.8, fontWeight: 300 }}>
                    Think about that: the best that the "specialized AI tools" can do is err nearly one out of five times. And consumer-grade AI such as ChatGPT and Gemini are even worse. Much worse. This is why courts have issued approximately 1,000 sanctions orders--ranging from monetary penalties and State Bar referrals to outright dismissal--and that number is growing every day.
                  </p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.05rem', color: '#d1cbc3', lineHeight: 1.8, fontWeight: 300 }}>
                    But don't take our word for it. See for yourself: <a href="https://www.damiencharlotin.com/hallucinations/" target="_blank" rel="noopener noreferrer" style={{ color: '#c4431a', textDecoration: 'underline' }}>https://www.damiencharlotin.com/hallucinations/</a>.
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
