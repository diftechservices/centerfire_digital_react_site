import { useContent } from '../../hooks/useContent'
import { Button, Badge } from '../ui'

const AIArsenalMustache = () => {
  const content = useContent()

  if (!content) {
    return (
      <section className="py-20 bg-tactical-dark flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-fire-orange mb-4"></div>
          <p className="text-gray-300">Loading AI Arsenal section...</p>
        </div>
      </section>
    )
  }

  const aiArsenal = content.aiArsenal

  // Default AI services
  const defaultAIServices = [
    {
      icon: 'fa-solid fa-brain',
      icon_color: 'text-fire-orange',
      icon_bg: 'bg-fire-orange/20',
      title: 'Neural Network Architecture',
      subtitle: 'Deep Learning Systems',
      description: 'Advanced neural networks engineered for complex pattern recognition and predictive analytics',
      button_text: 'Deploy System',
      button_variant: 'primary'
    },
    {
      icon: 'fa-solid fa-eye',
      icon_color: 'text-steel-blue',
      icon_bg: 'bg-steel-blue/20',
      title: 'Computer Vision Systems',
      subtitle: 'Visual Intelligence',
      description: 'Precision image recognition and visual processing capabilities for tactical advantage',
      button_text: 'Engage Vision',
      button_variant: 'secondary'
    },
    {
      icon: 'fa-solid fa-comments',
      icon_color: 'text-tactical-green',
      icon_bg: 'bg-tactical-green/20',
      title: 'Natural Language Processing',
      subtitle: 'Communication Intelligence',
      description: 'Advanced language understanding and generation for strategic communication operations',
      button_text: 'Activate NLP',
      button_variant: 'primary'
    }
  ]

  return (
    <section className="py-20 bg-tactical-dark">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-tactical-gray rounded-full px-6 py-3 mb-6">
            <i className="fa-solid fa-robot text-fire-orange"></i>
            <span className="font-display text-sm tracking-wider text-white">AI ARSENAL</span>
          </div>
          <h2 className="font-display font-black text-5xl lg:text-6xl mb-6">
            <span className="text-white">{aiArsenal.titleLine1}</span>
            <span className="text-fire-orange"> {aiArsenal.titleLine2}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            {aiArsenal.description}
          </p>
        </div>

        {/* AI Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {defaultAIServices.map((service, index) => (
            <div key={index} className="bg-tactical-gray border border-tactical-light rounded-xl p-8 hover:border-fire-orange transition-colors group">
              {/* Service Icon */}
              <div className={`w-16 h-16 ${service.icon_bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <i className={`${service.icon} ${service.icon_color} text-2xl`}></i>
              </div>

              {/* Service Content */}
              <div className="mb-6">
                <Badge className="mb-3">{service.subtitle}</Badge>
                <h3 className="font-display font-bold text-2xl text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Custom AI Development Section */}
        <div className="bg-gradient-to-br from-fire-orange/20 to-tactical-dark border border-fire-orange rounded-xl p-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-fire-orange/20 rounded-lg flex items-center justify-center mx-auto mb-6">
              <i className="fa-solid fa-cogs text-fire-orange text-2xl"></i>
            </div>

            <h3 className="font-display font-bold text-3xl mb-4 text-white">
              Custom AI Development
            </h3>
            <p className="text-xl text-gray-300 mb-6">
              Need a specialized AI solution? Our elite development team creates bespoke artificial intelligence systems tailored to your exact specifications and operational requirements.
            </p>

            <Button size="lg" className="bg-fire-orange hover:bg-fire-orange/90">
              {aiArsenal.customAIButtonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AIArsenalMustache