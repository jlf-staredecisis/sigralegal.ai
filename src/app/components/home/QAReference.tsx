import { motion, AnimatePresence } from 'motion/react';
import { DepthMode } from '../DepthSelector';

interface QAReferenceProps {
  currentMode: DepthMode;
  onModeChange: (mode: DepthMode) => void;
}

// Single unified visual with multiple colors from the scheme
function UnifiedVerificationVisual({ activeMode }: { activeMode: DepthMode }) {
  return (
    <div className="w-full h-full flex items-center justify-center p-6" style={{ background: '#000000' }}>
      <div className="relative w-full h-full">
        {/* Central grid structure */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(245,242,237,0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(245,242,237,0.04) 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px'
          }}
        />

        {/* Layered containment zones with different colors */}
        {/* Green zone - glance */}
        <motion.div
          className="absolute left-[5%] top-[15%] w-[40%] h-[30%]"
          style={{
            border: '1px solid rgba(45,122,62,0.4)',
            background: 'rgba(45,122,62,0.05)'
          }}
          animate={{
            borderColor: activeMode === 'glance'
              ? ['rgba(45,122,62,0.7)', 'rgba(45,122,62,1)', 'rgba(45,122,62,0.7)']
              : ['rgba(45,122,62,0.2)', 'rgba(45,122,62,0.25)', 'rgba(45,122,62,0.2)'],
            opacity: activeMode === 'glance' ? 1 : 0.3
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <motion.div
            className="absolute inset-[15%]"
            style={{
              border: '1px solid rgba(45,122,62,0.3)',
              background: 'rgba(45,122,62,0.03)'
            }}
            animate={{
              borderColor: activeMode === 'glance'
                ? 'rgba(45,122,62,0.5)'
                : 'rgba(45,122,62,0.15)'
            }}
          />
        </motion.div>

        {/* Gold zone - practice */}
        <motion.div
          className="absolute right-[5%] top-[15%] w-[40%] h-[30%]"
          style={{
            border: '1px solid rgba(212,160,23,0.4)',
            background: 'rgba(212,160,23,0.05)'
          }}
          animate={{
            borderColor: activeMode === 'practice'
              ? ['rgba(212,160,23,0.7)', 'rgba(212,160,23,1)', 'rgba(212,160,23,0.7)']
              : ['rgba(212,160,23,0.2)', 'rgba(212,160,23,0.25)', 'rgba(212,160,23,0.2)'],
            opacity: activeMode === 'practice' ? 1 : 0.3
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >
          <motion.div
            className="absolute inset-[15%]"
            style={{
              border: '1px solid rgba(212,160,23,0.3)',
              background: 'rgba(212,160,23,0.03)'
            }}
            animate={{
              borderColor: activeMode === 'practice'
                ? 'rgba(212,160,23,0.5)'
                : 'rgba(212,160,23,0.15)'
            }}
          />
        </motion.div>

        {/* Blue zone - hood */}
        <motion.div
          className="absolute left-[30%] top-[55%] w-[40%] h-[30%]"
          style={{
            border: '1px solid rgba(43,124,196,0.4)',
            background: 'rgba(43,124,196,0.05)'
          }}
          animate={{
            borderColor: activeMode === 'hood'
              ? ['rgba(43,124,196,0.7)', 'rgba(43,124,196,1)', 'rgba(43,124,196,0.7)']
              : ['rgba(43,124,196,0.2)', 'rgba(43,124,196,0.25)', 'rgba(43,124,196,0.2)'],
            opacity: activeMode === 'hood' ? 1 : 0.3
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          <motion.div
            className="absolute inset-[15%]"
            style={{
              border: '1px solid rgba(43,124,196,0.3)',
              background: 'rgba(43,124,196,0.03)'
            }}
            animate={{
              borderColor: activeMode === 'hood'
                ? 'rgba(43,124,196,0.5)'
                : 'rgba(43,124,196,0.15)'
            }}
          />
        </motion.div>

        {/* Connection lines between zones */}
        <svg className="absolute inset-0" width="100%" height="100%">
          <motion.line
            x1="25%" y1="30%" x2="75%" y2="30%"
            stroke="rgba(196,67,26,0.4)"
            strokeWidth="1"
            strokeDasharray="4 4"
            animate={{ strokeDashoffset: [0, -8] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
          <motion.line
            x1="25%" y1="30%" x2="50%" y2="70%"
            stroke="rgba(196,67,26,0.3)"
            strokeWidth="1"
            strokeDasharray="4 4"
            animate={{ strokeDashoffset: [0, -8] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
          />
          <motion.line
            x1="75%" y1="30%" x2="50%" y2="70%"
            stroke="rgba(196,67,26,0.3)"
            strokeWidth="1"
            strokeDasharray="4 4"
            animate={{ strokeDashoffset: [0, -8] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
          />
        </svg>

        {/* Flow indicators at connection points */}
        {[
          { x: '25%', y: '30%', delay: 0 },
          { x: '75%', y: '30%', delay: 0.3 },
          { x: '50%', y: '70%', delay: 0.6 }
        ].map((point, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: point.x,
              top: point.y,
              width: '10px',
              height: '10px',
              marginLeft: '-5px',
              marginTop: '-5px',
              background: 'rgba(196,67,26,0.5)',
              borderRadius: '50%',
              border: '1px solid rgba(196,67,26,0.7)'
            }}
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.9, 0.5]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: point.delay }}
          />
        ))}

        {/* Diagonal scan lines for depth */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 40px,
                rgba(245,242,237,0.015) 40px,
                rgba(245,242,237,0.015) 42px
              )
            `
          }}
        />
      </div>
    </div>
  );
}

export function QAReference({ currentMode, onModeChange }: QAReferenceProps) {
  // Color-coded modes matching the primary buttons
  const modeColors = {
    glance: '#2d7a3e',      // Green
    practice: '#d4a017',    // Yellow/Gold
    hood: '#2b7cc4'         // Blue
  };

  const modes: DepthMode[] = ['glance', 'practice', 'hood'];

  const qaContent = {
    glance: {
      qa: [
        {
          question: 'What makes Sigra different from most legal AI tools?',
          answer: 'Most legal AI systems focus on generating answers. Sigra is designed to preserve proof. It records what data was examined, how conclusions were formed, and what was not present in the record.'
        },
        {
          question: 'Why does verification matter?',
          answer: 'In adversarial settings, results are challenged. Systems that cannot show their work rely on trust. Sigra is built so its analytical steps can be independently reviewed without exposing sensitive data.'
        },
        {
          question: 'Does Sigra replace human judgment?',
          answer: 'No. Sigra is designed to support professionals working under scrutiny by making analytical processes inspectable and reproducible. The system surfaces evidence and flags gaps. The judgment remains yours.'
        }
      ],
      image: 'https://images.unsplash.com/photo-1720605242333-715a4be9b049?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZ2VvbWV0cmljJTIwYWJzdHJhY3QlMjBsYXllcnMlMjBzdHJ1Y3R1cmV8ZW58MXx8fHwxNzcxMDEwNTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      imageAlt: 'Abstract geometric visualization showing layered structures'
    },
    practice: {
      qa: [
        {
          question: 'How does Sigra respond to evidentiary challenges?',
          answer: 'Sigra preserves an audit trail of every analytical step. When analysis is questioned, practitioners can demonstrate what was examined, how conclusions were reached, and whether the record was complete.'
        },
        {
          question: 'Can work be reviewed without producing privileged documents?',
          answer: 'Yes. Sigra separates analytical proof from document content, allowing verification of methodology and scope without disclosing underlying materials.'
        },
        {
          question: 'What problems is this designed to address?',
          answer: 'Discovery disputes, expert challenges, missing-record analysis, and situations where the absence of evidence is itself material.'
        }
      ],
      image: 'https://images.unsplash.com/photo-1727522974735-44251dfe61b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZGlhZ3JhbSUyMHRlY2huaWNhbCUyMGdyYXBoJTIwc3RydWN0dXJlfGVufDF8fHx8MTc3MTAxMDU3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      imageAlt: 'Dark diagrammatic structure suggesting parallel review paths'
    },
    hood: {
      qa: [
        {
          question: 'What does "verification-first" mean in Sigra\'s design?',
          answer: 'The system records analytical operations before generating outputs — documenting data inputs, processing steps, and reasoning paths in a form designed for independent review.'
        },
        {
          question: 'How is data handled during analysis?',
          answer: 'Processing occurs within hardware-isolated environments, with cryptographic identifiers used to reference documents and operations.'
        },
        {
          question: 'Is this a guarantee of admissibility?',
          answer: 'No. Sigra is designed to support verification and inspection. Admissibility decisions remain procedural and fact-specific.'
        }
      ],
      image: 'https://images.unsplash.com/photo-1640113934744-98014adb0591?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwdGVjaG5pY2FsJTIwcHJlY2lzaW9uJTIwZ2VvbWV0cnklMjBjb250YWlubWVudHxlbnwxfHx8fDE3NzEwMTA1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      imageAlt: 'Technical abstraction showing layered containment zones'
    }
  };

  const currentContent = qaContent[currentMode];

  // Helper function to convert hex to rgba
  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${alpha})`;
  };

  return (
    <section
      className="px-6 lg:px-20 pt-20 lg:pt-24 pb-20 lg:pb-32"
      style={{ 
        background: '#0a0a0a',
        borderTop: '1px solid rgba(245,242,237,0.06)',
        position: 'relative'
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Optional eyebrow text */}
        <div
          className="mb-8 lg:mb-10 tracking-[0.3em] uppercase text-center"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.7rem',
            color: '#c4431a',
            fontWeight: 300
          }}
        >
          Reference / Questions
        </div>

        {/* Unlabeled button row */}
        <div className="flex justify-center items-end gap-3 lg:gap-4 mb-12 lg:mb-16">
          {modes.map((mode) => {
            const isActive = currentMode === mode;
            const color = modeColors[mode];
            
            return (
              <div key={mode} className="relative">
                <motion.button
                  onClick={() => {
                    onModeChange(mode);
                  }}
                  className="transition-all duration-300"
                  style={{
                    width: 'clamp(80px, 15vw, 140px)',
                    height: '40px',
                    background: isActive ? hexToRgba(color, 0.08) : hexToRgba(color, 0),
                    border: `2px solid ${isActive ? hexToRgba(color, 0.7) : 'rgba(245,242,237,0.12)'}`,
                    borderRadius: '2px',
                    cursor: 'pointer',
                    display: 'block'
                  }}
                  whileHover={{
                    borderColor: hexToRgba(color, 0.5),
                    background: hexToRgba(color, 0.04)
                  }}
                />
                
                {isActive && (
                  <motion.div
                    layoutId="activeQAIndicator"
                    className="absolute inset-0"
                    style={{ 
                      border: `2px solid ${hexToRgba(color, 0.7)}`,
                      borderRadius: '2px',
                      pointerEvents: 'none'
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Q&A Content Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentMode}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-10 lg:gap-16"
          >
            {/* Left column - Q&A text */}
            <div className="space-y-8 lg:space-y-10 order-1">
              {currentContent.qa.map((item, index) => (
                <div key={index}>
                  <h4
                    className="mb-3"
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontSize: '1.25rem',
                      fontWeight: 400,
                      color: '#f5f2ed',
                      lineHeight: 1.3
                    }}
                  >
                    {item.question}
                  </h4>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '1.05rem',
                      color: '#d1cbc3',
                      lineHeight: 1.8,
                      fontWeight: 300
                    }}
                  >
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>

            {/* Right column - Image */}
            <div className="order-2 lg:order-2">
              <div
                className="relative overflow-hidden"
                style={{
                  background: '#000000',
                  borderRadius: '2px',
                  aspectRatio: '4/3',
                  border: `1px solid rgba(245,242,237,0.08)`
                }}
              >
                <UnifiedVerificationVisual activeMode={currentMode} />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}