import HeroSectionMustache from '../components/sections/HeroSectionMustache'
import ServicesSectionMustache from '../components/sections/ServicesSectionMustache'
import TeamSectionMustache from '../components/sections/TeamSectionMustache'

const HomePageMustache = () => {
  return (
    <div className="min-h-screen bg-tactical-dark">
      <HeroSectionMustache />
      <ServicesSectionMustache />
      <TeamSectionMustache />
    </div>
  )
}

export default HomePageMustache