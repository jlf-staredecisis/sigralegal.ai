import { motion } from 'motion/react';
import { useState } from 'react';

export function BrandHero() {
  const [isHovered, setIsHovered] = useState(false);

  const attestedText = "Attested Intelligence™";
  const letters = attestedText.split('');

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.3 }}
      className="min-h-screen flex items-center justify-center px-6 lg:px-20 py-24 lg:py-32 text-center relative overflow-hidden"
      style={{ background: '#0a0a0a' }}
    >
      {/* Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          opacity: isHovered ? 0.3 : 0,
          backgroundImage: `
            linear-gradient(to right, rgba(123, 177, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(123, 177, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
          filter: 'blur(0.5px)'
        }}
      />

      <div className="max-w-4xl relative z-10">
        {/* Attested Intelligence */}
        <div
          className="mb-4 uppercase flex justify-center"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.85rem',
            fontWeight: 300,
            letterSpacing: '0.5em'
          }}
        >
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              animate={isHovered ? {
                color: ['#c4431a', '#ff7a4d', '#c4431a'],
                scale: [1, 1.12, 1],
                textShadow: [
                  'none',
                  '0 4px 20px rgba(196, 67, 26, 0.9), 0 2px 12px rgba(255, 122, 77, 0.7), 0 0 8px rgba(255, 122, 77, 0.5)',
                  'none'
                ]
              } : {
                color: '#c4431a',
                scale: 1,
                textShadow: 'none'
              }}
              transition={{
                duration: 0.22,
                delay: 0.9 + (index * 0.02),
                ease: 'easeInOut'
              }}
              style={{
                display: 'inline-block',
                whiteSpace: letter === ' ' ? 'pre' : 'normal'
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </div>

        {/* SIGRA - Large Branding */}
        <motion.h1
          className="mb-4"
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: 'clamp(4rem, 12vw, 10rem)',
            fontWeight: 400,
            color: '#f5f2ed',
            letterSpacing: '0.12em',
            lineHeight: 0.9
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          animate={isHovered ? {
            color: '#ffffff',
            textShadow: '0 0 40px rgba(245, 242, 237, 0.8), 0 0 80px rgba(245, 242, 237, 0.4), 0 0 120px rgba(245, 242, 237, 0.2)'
          } : {
            color: '#f5f2ed',
            textShadow: 'none'
          }}
          transition={{ duration: 0.625, ease: 'easeOut' }}
        >
          SIGRA
        </motion.h1>

        {/* Tagline */}
        <p
          className="tracking-[0.3em] uppercase"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.75rem',
            color: '#b8b4ad',
            fontWeight: 300
          }}
        >
          Introducing the era of Provable AI
        </p>
      </div>
    </motion.section>
  );
}
