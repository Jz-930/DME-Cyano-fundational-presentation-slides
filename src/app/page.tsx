'use client';

import { HeroSlide } from '@/components/slides/HeroSlide';
import { ThreeDeadEndsSlide } from '@/components/slides/ThreeDeadEndsSlide';
import { PainPointsSlide } from '@/components/slides/PainPointsSlide';
import { FunnelSlide } from '@/components/slides/FunnelSlide';
import { TrafficIntro } from '@/components/slides/TrafficIntro';
import { GoogleAdsSlide } from '@/components/slides/GoogleAdsSlide';
import { YouTubeAdsSlide } from '@/components/slides/YouTubeAdsSlide';
import { MetaAdsSlide } from '@/components/slides/MetaAdsSlide';
import { TikTokAdsSlide } from '@/components/slides/TikTokAdsSlide';
import { XHSSlide } from '@/components/slides/XHSSlide';
import { WeChatSlide } from '@/components/slides/WeChatSlide';
import { AssetsTruth } from '@/components/slides/AssetsTruth';
import { AssetsDefinition } from '@/components/slides/AssetsDefinition';
import { ShortVideoFormula } from '@/components/slides/ShortVideoFormula';
import { ABTesting } from '@/components/slides/ABTesting';
import { BlackHoleSlide } from '@/components/slides/BlackHoleSlide';
import { WebVsAppSlide } from '@/components/slides/WebVsAppSlide';
import { InteractiveQuoterSlide } from '@/components/slides/InteractiveQuoterSlide';
import { LeadQualificationSlide } from '@/components/slides/LeadQualificationSlide';
import { SalesAutomationSlide } from '@/components/slides/SalesAutomationSlide';
import { CyanoIntroSlide } from '@/components/slides/CyanoIntroSlide';
import { AutoProposalSlide } from '@/components/slides/AutoProposalSlide';
import { KnowledgeBaseSlide } from '@/components/slides/KnowledgeBaseSlide';
import { BlueprintSlide } from '@/components/slides/BlueprintSlide';
import { ROICalcSlide } from '@/components/slides/ROICalcSlide';
import { Roadmap90Slide } from '@/components/slides/Roadmap90Slide';
import { WhyDMESlide } from '@/components/slides/WhyDMESlide';
import { ClosingOfferSlide } from '@/components/slides/ClosingOfferSlide';
import { Navigation } from '@/components/ui/Navigation';
import { Footer } from '@/components/ui/Footer';

export default function Presentation() {
  return (
    <main className="bg-[#02050a] text-white font-sans min-h-screen">
      <Navigation />
      <HeroSlide />
      <ThreeDeadEndsSlide />
      <PainPointsSlide />
      <FunnelSlide />

      {/* Module 2: Traffic */}
      <TrafficIntro />
      <GoogleAdsSlide />
      <YouTubeAdsSlide />
      <MetaAdsSlide />
      <TikTokAdsSlide />
      <XHSSlide />
      <WeChatSlide />

      {/* Module 3: Assets */}
      <AssetsTruth />
      <AssetsDefinition />
      <ShortVideoFormula />
      <ABTesting />

      {/* Module 4: Functional Web */}
      <BlackHoleSlide />
      <WebVsAppSlide />
      <InteractiveQuoterSlide />
      <LeadQualificationSlide />
      <SalesAutomationSlide />

      {/* Module 5: Cyano AI */}
      <CyanoIntroSlide />
      <AutoProposalSlide />
      <KnowledgeBaseSlide />

      {/* Module 6: Closing */}
      <BlueprintSlide />
      <ROICalcSlide />
      <Roadmap90Slide />
      <WhyDMESlide />
      <ClosingOfferSlide />

      <Footer />
    </main>
  );
}
