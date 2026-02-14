import { motion } from 'motion/react';

// Secure Containment: nested boxes showing isolation layers
export function ContainmentVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-8" style={{ background: '#000000' }}>
      <motion.div
        className="relative"
        style={{
          width: '85%',
          height: '85%',
          border: '1px solid rgba(245,242,237,0.15)',
          background: 'rgba(245,242,237,0.02)'
        }}
        animate={{
          borderColor: ['rgba(245,242,237,0.15)', 'rgba(196,67,26,0.3)', 'rgba(245,242,237,0.15)']
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <motion.div
          className="absolute inset-[15%]"
          style={{
            border: '1px solid rgba(245,242,237,0.25)',
            background: 'rgba(245,242,237,0.03)'
          }}
          animate={{
            borderColor: ['rgba(245,242,237,0.25)', 'rgba(196,67,26,0.4)', 'rgba(245,242,237,0.25)']
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >
          <motion.div
            className="absolute inset-[20%]"
            style={{
              border: '1px solid rgba(245,242,237,0.35)',
              background: 'rgba(245,242,237,0.04)'
            }}
            animate={{
              borderColor: ['rgba(245,242,237,0.35)', 'rgba(196,67,26,0.5)', 'rgba(245,242,237,0.35)']
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                style={{
                  width: '40%',
                  height: '40%',
                  background: 'rgba(196,67,26,0.15)',
                  border: '1px solid rgba(196,67,26,0.4)'
                }}
              />
            </div>
          </motion.div>
        </motion.div>
        
        {/* Grid overlay for containment feel */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(245,242,237,0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(245,242,237,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px'
          }}
        />
      </motion.div>
    </div>
  );
}

// Proof Transmission: connected nodes without data flow
export function ProofTransmissionVisual() {
  const nodes = [
    { x: '20%', y: '30%' },
    { x: '50%', y: '50%' },
    { x: '80%', y: '30%' }
  ];

  return (
    <div className="w-full h-full flex items-center justify-center p-8" style={{ background: '#000000' }}>
      <svg width="100%" height="100%" viewBox="0 0 400 300">
        {/* Connection lines */}
        <motion.line
          x1="80" y1="90" x2="200" y2="150"
          stroke="rgba(245,242,237,0.2)"
          strokeWidth="1"
          strokeDasharray="4 4"
          animate={{ strokeDashoffset: [0, -8] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
        <motion.line
          x1="200" y1="150" x2="320" y2="90"
          stroke="rgba(245,242,237,0.2)"
          strokeWidth="1"
          strokeDasharray="4 4"
          animate={{ strokeDashoffset: [0, -8] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
        
        {/* Nodes */}
        {nodes.map((node, i) => (
          <g key={i}>
            <motion.circle
              cx={parseInt(node.x)}
              cy={parseInt(node.y)}
              r="24"
              fill="rgba(245,242,237,0.04)"
              stroke="rgba(196,67,26,0.4)"
              strokeWidth="1"
              animate={{
                strokeWidth: [1, 2, 1],
                stroke: ['rgba(196,67,26,0.4)', 'rgba(196,67,26,0.7)', 'rgba(196,67,26,0.4)']
              }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
            />
            <motion.circle
              cx={parseInt(node.x)}
              cy={parseInt(node.y)}
              r="4"
              fill="rgba(196,67,26,0.6)"
              animate={{
                r: [4, 6, 4],
                fill: ['rgba(196,67,26,0.6)', 'rgba(196,67,26,0.9)', 'rgba(196,67,26,0.6)']
              }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
            />
          </g>
        ))}
        
        {/* Proof signature indicators */}
        <motion.rect
          x="190" y="140" width="20" height="20"
          fill="none"
          stroke="rgba(123,177,255,0.3)"
          strokeWidth="1"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>
    </div>
  );
}

// Traceable Paths: DAG structure
export function TraceablePathsVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-8" style={{ background: '#000000' }}>
      <svg width="100%" height="100%" viewBox="0 0 400 300">
        {/* DAG structure - top to bottom flow */}
        {/* Level 1 */}
        <motion.circle cx="200" cy="40" r="12" fill="rgba(196,67,26,0.3)" stroke="rgba(196,67,26,0.6)" strokeWidth="1" />
        
        {/* Arrows */}
        <motion.path
          d="M 200 52 L 140 88"
          stroke="rgba(245,242,237,0.2)"
          strokeWidth="1"
          fill="none"
          animate={{ pathLength: [0, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        />
        <motion.path
          d="M 200 52 L 260 88"
          stroke="rgba(245,242,237,0.2)"
          strokeWidth="1"
          fill="none"
          animate={{ pathLength: [0, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 0.2 }}
        />
        
        {/* Level 2 */}
        <motion.circle cx="140" cy="100" r="10" fill="rgba(196,67,26,0.25)" stroke="rgba(196,67,26,0.5)" strokeWidth="1" />
        <motion.circle cx="260" cy="100" r="10" fill="rgba(196,67,26,0.25)" stroke="rgba(196,67,26,0.5)" strokeWidth="1" />
        
        {/* More arrows */}
        <motion.path
          d="M 140 110 L 120 148"
          stroke="rgba(245,242,237,0.2)"
          strokeWidth="1"
          fill="none"
          animate={{ pathLength: [0, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 0.4 }}
        />
        <motion.path
          d="M 140 110 L 200 148"
          stroke="rgba(245,242,237,0.2)"
          strokeWidth="1"
          fill="none"
          animate={{ pathLength: [0, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 0.5 }}
        />
        <motion.path
          d="M 260 110 L 200 148"
          stroke="rgba(245,242,237,0.2)"
          strokeWidth="1"
          fill="none"
          animate={{ pathLength: [0, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 0.6 }}
        />
        <motion.path
          d="M 260 110 L 280 148"
          stroke="rgba(245,242,237,0.2)"
          strokeWidth="1"
          fill="none"
          animate={{ pathLength: [0, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 0.7 }}
        />
        
        {/* Level 3 */}
        <motion.circle cx="120" cy="160" r="8" fill="rgba(196,67,26,0.2)" stroke="rgba(196,67,26,0.4)" strokeWidth="1" />
        <motion.circle cx="200" cy="160" r="8" fill="rgba(196,67,26,0.2)" stroke="rgba(196,67,26,0.4)" strokeWidth="1" />
        <motion.circle cx="280" cy="160" r="8" fill="rgba(196,67,26,0.2)" stroke="rgba(196,67,26,0.4)" strokeWidth="1" />
        
        {/* Converge to final */}
        <motion.path
          d="M 120 168 L 200 208"
          stroke="rgba(245,242,237,0.2)"
          strokeWidth="1"
          fill="none"
          animate={{ pathLength: [0, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 0.9 }}
        />
        <motion.path
          d="M 200 168 L 200 208"
          stroke="rgba(245,242,237,0.2)"
          strokeWidth="1"
          fill="none"
          animate={{ pathLength: [0, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 1 }}
        />
        <motion.path
          d="M 280 168 L 200 208"
          stroke="rgba(245,242,237,0.2)"
          strokeWidth="1"
          fill="none"
          animate={{ pathLength: [0, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 1.1 }}
        />
        
        {/* Final output */}
        <motion.circle
          cx="200" cy="220" r="14"
          fill="rgba(196,67,26,0.15)"
          stroke="rgba(196,67,26,0.7)"
          strokeWidth="1"
          animate={{
            stroke: ['rgba(196,67,26,0.7)', 'rgba(196,67,26,1)', 'rgba(196,67,26,0.7)']
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        />
      </svg>
    </div>
  );
}

// Structured Absence: broken sequences and gaps
export function StructuredAbsenceVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-8" style={{ background: '#000000' }}>
      <svg width="100%" height="100%" viewBox="0 0 400 300">
        {/* Timeline with gaps */}
        <line x1="40" y1="150" x2="360" y2="150" stroke="rgba(245,242,237,0.15)" strokeWidth="1" />
        
        {/* Present blocks */}
        <rect x="50" y="135" width="40" height="30" fill="rgba(196,67,26,0.3)" stroke="rgba(196,67,26,0.5)" strokeWidth="1" />
        <rect x="110" y="135" width="40" height="30" fill="rgba(196,67,26,0.3)" stroke="rgba(196,67,26,0.5)" strokeWidth="1" />
        
        {/* Gap indicator - missing block */}
        <motion.rect
          x="170" y="135" width="40" height="30"
          fill="none"
          stroke="rgba(123,177,255,0.4)"
          strokeWidth="1"
          strokeDasharray="4 4"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* More present blocks */}
        <rect x="230" y="135" width="40" height="30" fill="rgba(196,67,26,0.3)" stroke="rgba(196,67,26,0.5)" strokeWidth="1" />
        
        {/* Another gap */}
        <motion.rect
          x="290" y="135" width="40" height="30"
          fill="none"
          stroke="rgba(123,177,255,0.4)"
          strokeWidth="1"
          strokeDasharray="4 4"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
        
        {/* Orphaned reply indicators - floating above timeline */}
        <motion.g
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <rect x="165" y="80" width="50" height="35" fill="rgba(123,177,255,0.1)" stroke="rgba(123,177,255,0.3)" strokeWidth="1" />
          <line x1="190" y1="115" x2="190" y2="135" stroke="rgba(123,177,255,0.3)" strokeWidth="1" strokeDasharray="2 2" />
        </motion.g>
        
        <motion.g
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        >
          <rect x="285" y="90" width="50" height="30" fill="rgba(123,177,255,0.1)" stroke="rgba(123,177,255,0.3)" strokeWidth="1" />
          <line x1="310" y1="120" x2="310" y2="135" stroke="rgba(123,177,255,0.3)" strokeWidth="1" strokeDasharray="2 2" />
        </motion.g>
        
        {/* Temporal gap annotations */}
        <text x="190" y="200" fontSize="10" fill="rgba(123,177,255,0.5)" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">GAP</text>
        <text x="310" y="210" fontSize="10" fill="rgba(123,177,255,0.5)" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">GAP</text>
      </svg>
    </div>
  );
}

// Independent Reproducibility: verification checkmarks and signature chains
export function ReproducibilityVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-8" style={{ background: '#000000' }}>
      <svg width="100%" height="100%" viewBox="0 0 400 300">
        {/* Central document/analysis block */}
        <rect x="150" y="100" width="100" height="80" fill="rgba(196,67,26,0.15)" stroke="rgba(196,67,26,0.4)" strokeWidth="1" />
        
        {/* Hash/signature lines inside */}
        <line x1="160" y1="115" x2="240" y2="115" stroke="rgba(245,242,237,0.15)" strokeWidth="1" />
        <line x1="160" y1="130" x2="240" y2="130" stroke="rgba(245,242,237,0.15)" strokeWidth="1" />
        <line x1="160" y1="145" x2="240" y2="145" stroke="rgba(245,242,237,0.15)" strokeWidth="1" />
        <line x1="160" y1="160" x2="240" y2="160" stroke="rgba(245,242,237,0.15)" strokeWidth="1" />
        
        {/* Verification nodes around the document */}
        <motion.g
          animate={{
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {/* Top verifier */}
          <circle cx="200" cy="50" r="16" fill="rgba(123,177,255,0.1)" stroke="rgba(123,177,255,0.4)" strokeWidth="1" />
          <motion.path
            d="M 193 50 L 198 55 L 207 46"
            stroke="rgba(123,177,255,0.6)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line x1="200" y1="66" x2="200" y2="100" stroke="rgba(123,177,255,0.2)" strokeWidth="1" strokeDasharray="2 2" />
        </motion.g>
        
        <motion.g
          animate={{
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        >
          {/* Right verifier */}
          <circle cx="320" cy="140" r="16" fill="rgba(123,177,255,0.1)" stroke="rgba(123,177,255,0.4)" strokeWidth="1" />
          <motion.path
            d="M 313 140 L 318 145 L 327 136"
            stroke="rgba(123,177,255,0.6)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line x1="304" y1="140" x2="250" y2="140" stroke="rgba(123,177,255,0.2)" strokeWidth="1" strokeDasharray="2 2" />
        </motion.g>
        
        <motion.g
          animate={{
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        >
          {/* Bottom verifier */}
          <circle cx="200" cy="230" r="16" fill="rgba(123,177,255,0.1)" stroke="rgba(123,177,255,0.4)" strokeWidth="1" />
          <motion.path
            d="M 193 230 L 198 235 L 207 226"
            stroke="rgba(123,177,255,0.6)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line x1="200" y1="214" x2="200" y2="180" stroke="rgba(123,177,255,0.2)" strokeWidth="1" strokeDasharray="2 2" />
        </motion.g>
        
        <motion.g
          animate={{
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        >
          {/* Left verifier */}
          <circle cx="80" cy="140" r="16" fill="rgba(123,177,255,0.1)" stroke="rgba(123,177,255,0.4)" strokeWidth="1" />
          <motion.path
            d="M 73 140 L 78 145 L 87 136"
            stroke="rgba(123,177,255,0.6)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line x1="96" y1="140" x2="150" y2="140" stroke="rgba(123,177,255,0.2)" strokeWidth="1" strokeDasharray="2 2" />
        </motion.g>
      </svg>
    </div>
  );
}
