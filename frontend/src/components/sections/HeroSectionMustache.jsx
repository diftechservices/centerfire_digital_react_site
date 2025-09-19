import { useContent } from '../../hooks/useContent'
import { Button, StatusIndicator } from '../ui'

const HeroSectionMustache = () => {
  const content = useContent()

  if (!content) {
    return (
      <section className="relative min-h-[800px] flex items-center justify-center bg-tactical-gray py-16">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-fire-orange mb-4"></div>
          <p className="text-gray-300">Loading hero section...</p>
        </div>
      </section>
    )
  }

  const hero = content.hero
  const featureCards = hero.featureCards || []

  return (
    <section className="relative min-h-[800px] flex items-center justify-center overflow-hidden py-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-tactical-dark via-tactical-gray to-tactical-dark"></div>

      {/* Tactical grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className="border-r border-tactical-light"></div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 text-center">

        {/* Mobile headline */}
        <h1 className="md:hidden font-display font-black text-4xl mb-6 leading-tight">
          <span className="text-white">ELITE</span><br />
          <span className="bg-gradient-to-r from-fire-orange to-tactical-green bg-clip-text text-transparent">SOLUTIONS</span>
        </h1>

        {/* Desktop headline */}
        <h1 className="hidden md:block font-display font-black text-6xl lg:text-8xl mb-6 leading-tight">
          <span className="text-white">{hero.mainHeadlineLine1}</span><br />
          <span className="text-fire-orange">{hero.mainHeadlineLine2}</span><br />
          <span className="bg-gradient-to-r from-steel-blue to-tactical-green bg-clip-text text-transparent">{hero.mainHeadlineLine3}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          {hero.subheadline}
        </p>


        {/* Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {featureCards.map((card, index) => (
            <div
              key={index}
              className="bg-tactical-gray/30 backdrop-blur-sm border border-tactical-light rounded-xl p-6"
            >
              <div className={`w-12 h-12 ${card.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                <i className={`${card.icon} ${card.iconColor} text-xl`}></i>
              </div>
              <h3 className="font-display font-bold text-xl mb-2 text-white">{card.title}</h3>
              <p className="text-gray-400">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSectionMustache