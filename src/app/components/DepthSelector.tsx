import { motion } from 'motion/react';

export type DepthMode = 'glance' | 'practice' | 'hood';

interface DepthSelectorProps {
  currentMode: DepthMode;
  onModeChange: (mode: DepthMode) => void;
}

export function DepthSelector({ currentMode, onModeChange }: DepthSelectorProps) {
  // Color-coded depth modes: Green (overview), Yellow (application), Blue (technical)
  const modes: { id: DepthMode; label: string; description: string; color: string; glowColor: string }[] = [
    { 
      id: 'glance', 
      label: 'At a Glance',
      description: 'Core properties and principles',
      color: '#2d7a3e',
      glowColor: 'rgba(45,122,62,0.6)'
    },
    { 
      id: 'practice', 
      label: 'In Practice',
      description: 'Application in litigation',
      color: '#d4a017',
      glowColor: 'rgba(212,160,23,0.6)'
    },
    { 
      id: 'hood', 
      label: 'Under the Hood',
      description: 'Technical verification infrastructure',
      color: '#2b7cc4',
      glowColor: 'rgba(43,124,196,0.6)'
    }
  ];

  return (
    <section 
      className="px-6 lg:px-20 py-16 lg:py-24 pb-8 lg:pb-10"
      style={{ background: '#0a0a0a', borderTop: '1px solid rgba(245,242,237,0.08)', position: 'relative' }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Sigra Overview Text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 lg:mb-16"
            style={{ textAlign: 'center' }}
          >
            <div
              className="mb-4 tracking-[0.3em] uppercase"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.7rem',
                color: '#c4431a',
                fontWeight: 300,
                letterSpacing: '0.3em'
              }}
            >
              System Overview
            </div>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '1.05rem',
                color: '#d1cbc3',
                lineHeight: 1.8,
                fontWeight: 300,
                maxWidth: '900px',
                margin: '0 auto'
              }}
            >
              Sigra is a secure AI analysis platform for adversarial and regulated environments. It allows organizations to apply AI to sensitive data while preserving custody, recording reasoning, and producing results that can be independently verified under scrutiny.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {modes.map((mode) => {
              const isActive = currentMode === mode.id;
              // Convert hex to rgba for dynamic styling
              const hexToRgba = (hex: string, alpha: number) => {
                const r = parseInt(hex.slice(1, 3), 16);
                const g = parseInt(hex.slice(3, 5), 16);
                const b = parseInt(hex.slice(5, 7), 16);
                return `rgba(${r},${g},${b},${alpha})`;
              };
              
              return (
              <div key={mode.id} className="relative">
                <motion.button
                  onClick={() => onModeChange(mode.id)}
                  className="relative px-6 py-6 lg:px-8 lg:py-8 text-center transition-all duration-300 group w-full"
                  style={{
                    background: isActive ? hexToRgba(mode.color, 0.08) : '#000000',
                    border: `2px solid ${isActive ? hexToRgba(mode.color, 0.7) : 'rgba(245,242,237,0.12)'}`,
                    borderRadius: '2px',
                    cursor: 'pointer',
                    minHeight: '180px'
                  }}
                  animate={{
                    boxShadow: isActive
                      ? [
                          `0 0 17px ${hexToRgba(mode.color, 0.22)}, 0 0 33px ${hexToRgba(mode.color, 0.14)}, 0 0 50px ${hexToRgba(mode.color, 0.08)}`,
                          `0 0 22px ${hexToRgba(mode.color, 0.28)}, 0 0 44px ${hexToRgba(mode.color, 0.19)}, 0 0 66px ${hexToRgba(mode.color, 0.11)}`,
                          `0 0 17px ${hexToRgba(mode.color, 0.22)}, 0 0 33px ${hexToRgba(mode.color, 0.14)}, 0 0 50px ${hexToRgba(mode.color, 0.08)}`
                        ]
                      : [
                          `0 0 11px ${hexToRgba(mode.color, 0.11)}, 0 0 22px ${hexToRgba(mode.color, 0.07)}, 0 0 33px ${hexToRgba(mode.color, 0.04)}`,
                          `0 0 14px ${hexToRgba(mode.color, 0.14)}, 0 0 28px ${hexToRgba(mode.color, 0.08)}, 0 0 41px ${hexToRgba(mode.color, 0.055)}`,
                          `0 0 11px ${hexToRgba(mode.color, 0.11)}, 0 0 22px ${hexToRgba(mode.color, 0.07)}, 0 0 33px ${hexToRgba(mode.color, 0.04)}`
                        ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  whileHover={{
                    boxShadow: `0 0 19px ${hexToRgba(mode.color, 0.19)}, 0 0 39px ${hexToRgba(mode.color, 0.14)}, 0 0 58px ${hexToRgba(mode.color, 0.08)}`,
                    borderColor: isActive ? hexToRgba(mode.color, 0.7) : hexToRgba(mode.color, 0.4),
                    background: isActive ? hexToRgba(mode.color, 0.08) : hexToRgba(mode.color, 0.04),
                    transition: { duration: 0.3 }
                  }}
                >
                  <div
                    className="mb-3"
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontSize: '1.5rem',
                      color: isActive ? '#f5f2ed' : '#d1cbc3',
                      fontWeight: 400,
                      lineHeight: 1.2,
                      transition: 'color 0.3s ease'
                    }}
                  >
                    {mode.label}
                  </div>

                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '0.9rem',
                      color: isActive ? mode.color : '#a8a29e',
                      lineHeight: 1.6,
                      fontWeight: 300,
                      transition: 'color 0.3s ease'
                    }}
                  >
                    {mode.description}
                  </div>
                  
                  {isActive && (
                    <motion.div
                      layoutId="activeDepthIndicator"
                      className="absolute inset-0"
                      style={{ 
                        border: `2px solid ${hexToRgba(mode.color, 0.7)}`,
                        borderRadius: '2px',
                        pointerEvents: 'none'
                      }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              </div>
            );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}