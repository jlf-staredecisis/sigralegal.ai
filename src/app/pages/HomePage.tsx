import { useState } from 'react';
import { Header } from '../components/Header';
import { BrandHero } from '../components/BrandHero';
import { ProblemSection } from '../components/home/ProblemSection';
import { WhyNowSection } from '../components/home/WhyNowSection';
import { ApproachSection } from '../components/home/ApproachSection';
import { DepthSelector, DepthMode } from '../components/DepthSelector';
import { CapabilitiesSection } from '../components/home/CapabilitiesSection';
import { QAReference } from '../components/home/QAReference';
import { ForwardScope } from '../components/home/ForwardScope';
import { TeamCredentials } from '../components/home/TeamCredentials';
import { DirectAccess } from '../components/home/DirectAccess';
import { SigraFooter } from '../components/SigraFooter';

export function HomePage() {
  const [depthMode, setDepthMode] = useState<DepthMode>('glance');
  const [problemExpanded, setProblemExpanded] = useState(false);
  const [whyNowExpanded, setWhyNowExpanded] = useState(false);
  const [approachExpanded, setApproachExpanded] = useState<'overview' | 'approach' | null>(null);

  return (
    <div className="w-full" style={{ maxWidth: '1440px', margin: '0 auto' }}>
      <Header />
      <BrandHero />
      
      <ProblemSection 
        isExpanded={problemExpanded} 
        setIsExpanded={setProblemExpanded}
      />
      
      <WhyNowSection isExpanded={whyNowExpanded} setIsExpanded={setWhyNowExpanded} />
      <ApproachSection expandedSection={approachExpanded} setExpandedSection={setApproachExpanded} />
      
      {/* Depth Selection and Content */}
      <DepthSelector currentMode={depthMode} onModeChange={setDepthMode} />
      <CapabilitiesSection mode={depthMode} onModeChange={setDepthMode} />
      
      <ForwardScope />
      <TeamCredentials />
      <DirectAccess />
      <QAReference currentMode={depthMode} onModeChange={setDepthMode} />
      <SigraFooter />
    </div>
  );
}
