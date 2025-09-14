import { Button, StatusIndicator } from '../ui'

const HeroSection = () => {
  const featureCards = [
    {
      icon: 'fa-solid fa-brain',
      iconColor: 'text-fire-orange',
      bgColor: 'bg-fire-orange/20',
      title: 'AI Arsenal',
      description: 'Advanced machine learning and AI solutions deployed with surgical precision'
    },
    {
      icon: 'fa-solid fa-shield-halved',
      iconColor: 'text-steel-blue',
      bgColor: 'bg-steel-blue/20',
      title: 'Secure Operations',
      description: 'Fortress-grade security protocols protecting your digital assets'
    },
    {
      icon: 'fa-solid fa-crosshairs',
      iconColor: 'text-tactical-green',
      bgColor: 'bg-tactical-green/20',
      title: 'Target Acquisition',
      description: 'Laser-focused solutions that hit objectives with zero compromise'
    }
  ]

  return (
    <section className="relative h-[900px] flex items-center justify-center overflow-hidden">
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
        {/* Tactical operation badge */}
        <div className="mb-8 flex justify-center">
          <div className="bg-tactical-gray/50 backdrop-blur-sm border border-tactical-light rounded-full px-6 py-3 flex items-center space-x-3">
            <StatusIndicator status="critical" size="default" />
            <span className="text-sm font-display text-gray-300">TACTICAL TECH OPERATIONS</span>
            <StatusIndicator status="operational" size="default" />
          </div>
        </div>
        
        {/* Main headline */}
        <h1 className="font-display font-black text-6xl lg:text-8xl mb-6 leading-tight">
          <span className="text-white">PRECISION</span><br />
          <span className="text-fire-orange">TECHNOLOGY</span><br />
          <span className="bg-gradient-to-r from-steel-blue to-tactical-green bg-clip-text text-transparent">WARFARE</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Elite AI-driven solutions engineered for organizations that demand tactical precision, 
          unwavering reliability, and results that cut through the noise of conventional tech consulting.
        </p>
        
        {/* CTA buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 mb-16">
          <Button size="lg" className="transform hover:scale-105">
            <i className="fa-solid fa-rocket mr-3"></i>
            <span>Launch Operation</span>
          </Button>
          <Button variant="secondary" size="lg">
            <i className="fa-solid fa-play mr-3"></i>
            <span>Mission Briefing</span>
          </Button>
        </div>
        
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

export default HeroSection