import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface WhyNowSectionProps {
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
}

export function WhyNowSection({ isExpanded, setIsExpanded }: WhyNowSectionProps) {
  return (
    <section 
      className="px-6 lg:px-20 py-16 lg:py-20"
      style={{ background: '#0a0a0a', borderBottom: '1px solid rgba(245,242,237,0.1)' }}
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
                  Why Now
                </div>
                <h2 className="transition-colors duration-300" style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(1.75rem, 5vw, 3rem)', fontWeight: 400, color: isExpanded ? '#f5f2ed' : '#d1cbc3', lineHeight: 1.2, letterSpacing: '-0.01em' }}>
                  The rules are about to change
                </h2>
              </div>
              <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }} style={{ color: '#f5f2ed' }} className="flex-shrink-0">
                <ChevronDown size={28} className="lg:w-8 lg:h-8" />
              </motion.div>
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
                    For years, AI-generated legal work faced no formal reliability standard. That era is ending — and it doesn't matter which mechanism gets there first.
                  </p>

                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.05rem', color: '#d1cbc3', lineHeight: 1.8, fontWeight: 300 }}>
                    Proposed Federal Rule of Evidence 707 would explicitly subject AI outputs to the same scrutiny as expert testimony, requiring disclosure of training data, validation of methodology, and inspection of reasoning. But even without FRE 707, the trajectory is the same. Courts already have the authority — and the obligation — to rule on objections to machine-generated evidence. And every competent attorney now knows, or should know, that current AI tools produce hallucinated citations, fabricated quotations, and misstated holdings at alarming rates. That knowledge makes the evidentiary challenge not just possible but inevitable.
                  </p>

                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.05rem', color: '#d1cbc3', lineHeight: 1.8, fontWeight: 300 }}>
                    One way or another, the era of unexamined AI output in legal proceedings is over.
                  </p>

                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.05rem', color: '#d1cbc3', lineHeight: 1.8, fontWeight: 300 }}>
                    Most legal AI was never designed to survive that kind of examination. These systems operate as black boxes: you can see what goes in and what comes out, but not why. When a court asks how a conclusion was reached, or what data was excluded, there is no auditable answer.
                  </p>

                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.05rem', color: '#d1cbc3', lineHeight: 1.8, fontWeight: 300 }}>
                    And they're not just unverifiable — they're incomplete. No survey has ever measured what percentage of a law firm's case file reaches an AI platform, because the answer is so obviously small that no one has thought to quantify it. Industry data shows that fewer than one in four firms even connect AI to their own organizational data. Most AI usage consists of individual lawyers pasting fragments into tools for research or drafting. Attorney-client privileged communications, work product, expert analyses, and trade secret materials remain entirely outside the system — excluded by ethics rules, client restrictions, and malpractice coverage requirements. Current AI tools don't just fail to verify their work. They never see most of it.
                  </p>

                  <div className="mt-12 lg:mt-10 pt-8 lg:pt-6 px-6 lg:px-0 py-6 lg:py-0" style={{ borderTop: '1px solid rgba(196,67,26,0.3)', background: 'rgba(196,67,26,0.03)' }}>
                    <div className="mb-3 tracking-[0.3em] uppercase" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: '#c4431a', fontWeight: 300 }}>
                      A generational mismatch
                    </div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.05rem', color: '#d1cbc3', lineHeight: 1.9, fontWeight: 300 }}>
                      The tools the industry relies on were built before AI outputs faced evidentiary scrutiny. Sigra was built in 2026 to meet the standards that are only now taking effect.
                    </p>
                  </div>

                  <div className="mt-12 lg:mt-10 pt-8 lg:pt-6 px-6 lg:px-0 py-6 lg:py-0" style={{ borderTop: '1px solid rgba(196,67,26,0.3)', background: 'rgba(196,67,26,0.03)' }}>
                    <div className="mb-3 tracking-[0.3em] uppercase" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: '#c4431a', fontWeight: 300 }}>
                      Constraint
                    </div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.05rem', color: '#d1cbc3', lineHeight: 1.9, fontWeight: 300 }}>
                      How do you prove what data entered a black-box API call? How do you verify reasoning inside an inference environment you can't inspect? You don't. You build one that can. That's Sigra.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
