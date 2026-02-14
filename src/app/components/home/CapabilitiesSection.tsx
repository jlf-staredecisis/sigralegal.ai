import { motion } from 'motion/react';
import { DepthMode } from '../DepthSelector';
import { ContainmentVisual, ProofTransmissionVisual, TraceablePathsVisual, StructuredAbsenceVisual, ReproducibilityVisual } from './abstract-visuals';

interface CapabilitiesSectionProps {
  mode: DepthMode;
  onModeChange: (mode: DepthMode) => void;
}

export function CapabilitiesSection({ mode }: CapabilitiesSectionProps) {
  const capabilities = [
    {
      id: 'containment',
      label: 'Secure Containment',
      heading: 'Local processing under physical custody',
      glance: 'Local processing under physical custody. Privileged material never leaves your infrastructure.',
      practice: 'Discovery productions contain attorney-client communications, work product, and sealed court records. Uploading this material to commercial AI platforms creates disclosure risk, metadata leakage, and potential waiver arguments. Local processing eliminates the exposure.',
      hood: 'All inference runs within Trusted Execution Environments (TEEs) using AMD SEV-SNP or Intel TDX hardware isolation. Data is encrypted in memory during processing. No network calls leave the enclave. Attestation reports prove the execution environment was unmodified.',
      visual: <ContainmentVisual />
    },
    {
      id: 'proof',
      label: 'Proof Transmission',
      heading: 'Verify conclusions without exposing privileged content',
      glance: 'Verify conclusions without exposing privileged content. Analytical proof separates from document content.',
      practice: 'Each analytical operation generates a cryptographically signed audit entry containing the document hashes processed, the model version and parameters used, the query submitted, and the reasoning steps taken. This creates a self-authenticating record under FRE 902(13)/(14). Recipients verify the signature chain without accessing source documents.',
      hood: 'The system generates Merkle tree commitments over input documents, binds them to TEE attestation reports, and chains each inference step into a verifiable log. Zero-knowledge selective disclosure allows proving specific properties of the analysis without revealing the underlying data.',
      visual: <ProofTransmissionVisual />
    },
    {
      id: 'traceable',
      label: 'Traceable Paths',
      heading: 'Every conclusion links to verified source material',
      glance: 'Every conclusion links to verified source material. Complete chain of custody from input to output.',
      practice: 'When opposing counsel challenges an analytical conclusion, you produce the verification record showing exactly which documents were examined, what patterns were identified, and how the conclusion was reached. No reconstruction required. No reliance on analyst memory.',
      hood: 'Complete chain of custody from input document to analytical output. Each inference step is logged with input hashes, model state, intermediate outputs, and decision points. The entire path is cryptographically chained so any tampering is detectable.',
      visual: <TraceablePathsVisual />
    },
    {
      id: 'absence',
      label: 'Structured Absence',
      heading: "Identifies what's missing from the record",
      glance: 'Identifies missing documents and unexplained gaps in the evidentiary record.',
      practice: 'The system builds a comprehensive map of what should exist based on communication patterns, referenced materials, and procedural sequences. It flags orphaned replies, temporal gaps, and structural inconsistencies — not as speculation, but as documented anomalies that support spoliation arguments or targeted discovery requests.',
      hood: 'Entity-relationship extraction builds a knowledge graph across the production. Expected document nodes are inferred from references, reply chains, CC patterns, and regulatory filing schedules. Graph completeness analysis identifies structural holes. Each gap is scored by evidentiary significance and linked to the source evidence that implies its existence.',
      visual: <StructuredAbsenceVisual />
    },
    {
      id: 'reproducibility',
      label: 'Independent Reproducibility',
      heading: 'Analysis that any party can independently verify',
      glance: 'Analysis can be independently verified by opposing experts, neutral parties, or the court.',
      practice: 'Every analytical outcome can be independently reproduced using the preserved record. Opposing counsel, neutral experts, or the court itself can re-run the analysis and verify the results without relying on your representation of what occurred.',
      hood: 'Deterministic inference pipelines with pinned model versions, fixed random seeds, and immutable input sets. Given the same verification record, any party with access to the same model weights produces identical outputs. Reproducibility is mathematical, not testimonial.',
      visual: <ReproducibilityVisual />
    }
  ];

  const getContent = (cap: typeof capabilities[0]) => {
    if (mode === 'glance') return cap.glance;
    if (mode === 'practice') return cap.practice;
    return cap.hood;
  };

  return (
    <section 
      className="px-6 lg:px-20 py-20 lg:py-28"
      style={{ background: '#000000', borderTop: '1px solid rgba(245,242,237,0.06)', borderBottom: '1px solid rgba(245,242,237,0.06)' }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <div className="mb-6 tracking-[0.3em] uppercase" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', color: '#c4431a', fontWeight: 300 }}>
            Core Capabilities
          </div>
          <h2 className="mb-16 lg:mb-20" style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(1.75rem, 5vw, 3rem)', fontWeight: 400, color: '#f5f2ed', lineHeight: 1.2, letterSpacing: '-0.01em' }}>
            Verification infrastructure
          </h2>

          <div className="space-y-16 lg:space-y-20">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                <div className="order-2 lg:order-1 w-full aspect-[4/3] rounded" style={{ background: '#000000', border: '1px solid rgba(245,242,237,0.08)' }}>
                  {cap.visual}
                </div>
                <div className="order-1 lg:order-2">
                  <div className="mb-4 tracking-[0.2em] uppercase" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: '#c4431a', fontWeight: 300 }}>
                    {cap.label}
                  </div>
                  <h3 className="mb-4" style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: 400, color: '#f5f2ed', lineHeight: 1.3, letterSpacing: '-0.01em' }}>
                    {cap.heading}
                  </h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: mode === 'glance' ? '1.15rem' : '1.05rem', color: mode === 'glance' ? '#f5f2ed' : '#d1cbc3', lineHeight: 1.8, fontWeight: mode === 'glance' ? 400 : 300 }}>
                    {getContent(cap)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
