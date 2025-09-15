import HeroSectionMustache from '../components/sections/HeroSectionMustache'
import AIArsenalMustache from '../components/sections/AIArsenalMustache'
import TechnicalCapabilitiesMustache from '../components/sections/TechnicalCapabilitiesMustache'
import MissionPortfolioMustache from '../components/sections/MissionPortfolioMustache'
import IntelligenceHubMustache from '../components/sections/IntelligenceHubMustache'

const HomePageMustache = () => {
  return (
    <div className="min-h-screen bg-tactical-dark">
      <HeroSectionMustache />
      <AIArsenalMustache />
      <TechnicalCapabilitiesMustache />
      <MissionPortfolioMustache />
      <IntelligenceHubMustache />
    </div>
  )
}

export default HomePageMustache