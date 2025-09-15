import { useContent } from '../../hooks/useContent'
import { Badge, Button } from '../ui'

const MissionPortfolioMustache = () => {
  const content = useContent()

  if (!content) {
    return (
      <section className="py-20 bg-tactical-dark flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-fire-orange mb-4"></div>
          <p className="text-gray-300">Loading Mission Portfolio...</p>
        </div>
      </section>
    )
  }

  const missionPortfolio = content.missionPortfolio

  const portfolioProjects = [
    {
      image: '/src/assets/images/tactical-trading.png',
      badges: [
        { text: 'FINTECH', color: 'bg-fire-orange/20 text-fire-orange' },
        { text: 'AI-POWERED', color: 'bg-tactical-green/20 text-tactical-green' }
      ],
      title: 'Tactical Trading Platform',
      description: 'High-frequency trading system with AI-driven market analysis',
      metrics: [
        { label: 'Processing Speed', value: '< 1ms' },
        { label: 'Accuracy Rate', value: '99.7%' },
        { label: 'Daily Volume', value: '$2.4B' }
      ]
    },
    {
      image: '/src/assets/images/cybersecurity-command.png',
      badges: [
        { text: 'SECURITY', color: 'bg-steel-blue/20 text-steel-blue' },
        { text: 'ENTERPRISE', color: 'bg-warning-amber/20 text-warning-amber' }
      ],
      title: 'Cybersecurity Command Center',
      description: 'Enterprise-grade threat detection and response platform',
      metrics: [
        { label: 'Threat Detection', value: '99.9%' },
        { label: 'Response Time', value: '< 30s' },
        { label: 'False Positives', value: '< 0.1%' }
      ]
    },
    {
      image: '/src/assets/images/supply-chain.png',
      badges: [
        { text: 'LOGISTICS', color: 'bg-tactical-green/20 text-tactical-green' },
        { text: 'IOT', color: 'bg-purple-500/20 text-purple-400' }
      ],
      title: 'Supply Chain Intelligence',
      description: 'Real-time supply chain optimization with predictive analytics',
      metrics: [
        { label: 'Cost Reduction', value: '23%' },
        { label: 'Efficiency Gain', value: '34%' },
        { label: 'Prediction Accuracy', value: '94%' }
      ]
    }
  ]

  return (
    <section className="py-20 bg-tactical-dark">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-tactical-gray rounded-full px-6 py-3 mb-6">
            <i className="fa-solid fa-trophy text-warning-amber"></i>
            <span className="font-display text-sm tracking-wider text-white">MISSION PORTFOLIO</span>
          </div>
          <h2 className="font-display font-black text-5xl lg:text-6xl mb-6">
            <span className="text-white">{missionPortfolio.title}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-4">
            {missionPortfolio.subtitle}
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            {missionPortfolio.description}
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioProjects.map((project, index) => (
            <div key={index} className="bg-tactical-gray border border-tactical-light rounded-xl overflow-hidden hover:border-fire-orange transition-colors group">
              {/* Project Image */}
              <div className="aspect-video bg-gradient-to-br from-tactical-light/10 to-tactical-dark flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.badges.map((badge, badgeIndex) => (
                    <Badge key={badgeIndex} className={badge.color}>
                      {badge.text}
                    </Badge>
                  ))}
                </div>

                {/* Title & Description */}
                <h3 className="font-display font-bold text-xl text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="space-y-3">
                  {project.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">{metric.label}</span>
                      <span className="text-white font-bold">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button size="lg" className="bg-warning-amber hover:bg-warning-amber/90 text-tactical-dark">
            {missionPortfolio.ctaText}
          </Button>
        </div>
      </div>
    </section>
  )
}

export default MissionPortfolioMustache