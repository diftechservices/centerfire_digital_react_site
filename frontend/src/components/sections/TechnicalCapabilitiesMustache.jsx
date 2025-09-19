import { useContent } from '../../hooks/useContent'
import { Badge } from '../ui'

const TechnicalCapabilitiesMustache = () => {
  const content = useContent()

  if (!content) {
    return (
      <section className="py-20 bg-tactical-gray flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-fire-orange mb-4"></div>
          <p className="text-gray-300">Loading Technical Capabilities...</p>
        </div>
      </section>
    )
  }

  const techCapabilities = content.technicalCapabilities

  const coreCapabilities = [
    {
      icon: 'fa-solid fa-cloud',
      iconColor: 'text-fire-orange',
      iconBg: 'bg-fire-orange/20',
      title: 'Cloud Infrastructure',
      description: 'Cancel-proof, high reliability application hosting that scales with your needs.',
      features: ['99.99% Uptime SLA', 'Auto-scaling', 'Multi-region deployment']
    },
    {
      icon: 'fa-solid fa-drafting-compass',
      iconColor: 'text-steel-blue',
      iconBg: 'bg-steel-blue/20',
      title: 'Solution Architecture',
      description: 'Custom-engineered solutions using the optimal technology stack for your needs.',
      features: ['Technology assessment', 'Platform selection', 'Scalable design']
    },
    {
      icon: 'fa-solid fa-database',
      iconColor: 'text-tactical-green',
      iconBg: 'bg-tactical-green/20',
      title: 'Data Engineering',
      description: 'Robust data pipelines and analytics platforms for actionable business intelligence.',
      features: ['Real-time processing', 'ETL pipelines', 'Analytics dashboards']
    }
  ]

  return (
    <section className="py-20 bg-tactical-gray">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-tactical-dark rounded-full px-6 py-3 mb-6">
            <i className="fa-solid fa-cogs text-tactical-green"></i>
            <span className="font-display text-sm tracking-wider text-white">TECHNICAL ARSENAL</span>
          </div>
          <h2 className="font-display font-black text-5xl lg:text-6xl mb-6">
            <span className="text-white">{techCapabilities.title}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            {techCapabilities.description}
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreCapabilities.map((capability, index) => (
            <div key={index} className="bg-tactical-dark border border-tactical-light rounded-xl p-8 hover:border-tactical-green transition-colors">
              {/* Icon */}
              <div className={`w-16 h-16 ${capability.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                <i className={`${capability.icon} ${capability.iconColor} text-2xl`}></i>
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-2xl text-white mb-4">
                {capability.title}
              </h3>
              <p className="text-gray-300 mb-6">
                {capability.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                {capability.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <i className="fa-solid fa-check text-tactical-green text-sm"></i>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechnicalCapabilitiesMustache