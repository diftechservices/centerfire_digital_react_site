import { useContent } from '../../hooks/useContent'
import { Badge, Button } from '../ui'

const IntelligenceHubMustache = () => {
  const content = useContent()

  if (!content) {
    return (
      <section className="py-20 bg-tactical-gray flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-fire-orange mb-4"></div>
          <p className="text-gray-300">Loading Intelligence Hub...</p>
        </div>
      </section>
    )
  }

  const intelligenceHub = content.intelligenceHub

  const intelligenceReports = [
    {
      icon: 'fa-solid fa-brain',
      category: 'AI INTELLIGENCE',
      title: 'The Future of Autonomous AI Operations',
      excerpt: 'Exploring how autonomous AI systems are revolutionizing enterprise operations with self-healing infrastructure.',
      author: 'Sarah Phoenix',
      readTime: '8 min read',
      date: '2024-01-15'
    },
    {
      icon: 'fa-solid fa-shield-alt',
      category: 'SECURITY BRIEF',
      title: 'Zero-Trust Architecture in Modern Enterprises',
      excerpt: 'Comprehensive analysis of zero-trust security models and their implementation strategies.',
      author: 'Jake Hunter',
      readTime: '12 min read',
      date: '2024-01-10'
    },
    {
      icon: 'fa-solid fa-chart-line',
      category: 'MARKET ANALYSIS',
      title: 'Cloud Infrastructure Trends 2024',
      excerpt: 'Strategic insights into emerging cloud technologies and their impact on enterprise operations.',
      author: 'Alex Rivera',
      readTime: '6 min read',
      date: '2024-01-08'
    }
  ]

  return (
    <section className="py-20 bg-tactical-gray">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-tactical-dark rounded-full px-6 py-3 mb-6">
            <i className="fa-solid fa-satellite text-steel-blue"></i>
            <span className="font-display text-sm tracking-wider text-white">INTELLIGENCE HUB</span>
          </div>
          <h2 className="font-display font-black text-5xl lg:text-6xl mb-6">
            <span className="text-white">{intelligenceHub.title}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-4">
            {intelligenceHub.subtitle}
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            {intelligenceHub.description}
          </p>
        </div>

        {/* Intelligence Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {intelligenceReports.map((report, index) => (
            <div key={index} className="bg-tactical-dark border border-tactical-light rounded-xl p-6 hover:border-steel-blue transition-colors group cursor-pointer">
              {/* Report Header */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-steel-blue/20 rounded-lg flex items-center justify-center">
                  <i className={`${report.icon} text-steel-blue`}></i>
                </div>
                <Badge className="bg-steel-blue/20 text-steel-blue">
                  {report.category}
                </Badge>
              </div>

              {/* Report Content */}
              <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-steel-blue transition-colors">
                {report.title}
              </h3>
              <p className="text-gray-300 mb-6 line-clamp-3">
                {report.excerpt}
              </p>

              {/* Report Meta */}
              <div className="flex items-center justify-between pt-4 border-t border-tactical-light/20">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400 text-sm">By {report.author}</span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span>{report.readTime}</span>
                  <span>{report.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Intelligence Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-steel-blue/20 to-tactical-dark border border-steel-blue/50 rounded-xl p-6 text-center">
            <i className="fa-solid fa-brain text-steel-blue text-3xl mb-4"></i>
            <h3 className="font-display font-bold text-xl text-white mb-2">AI Intelligence</h3>
            <p className="text-gray-300">Latest developments in artificial intelligence and machine learning</p>
          </div>
          <div className="bg-gradient-to-br from-fire-orange/20 to-tactical-dark border border-fire-orange/50 rounded-xl p-6 text-center">
            <i className="fa-solid fa-shield-alt text-fire-orange text-3xl mb-4"></i>
            <h3 className="font-display font-bold text-xl text-white mb-2">Security Briefings</h3>
            <p className="text-gray-300">Threat intelligence and cybersecurity analysis</p>
          </div>
          <div className="bg-gradient-to-br from-tactical-green/20 to-tactical-dark border border-tactical-green/50 rounded-xl p-6 text-center">
            <i className="fa-solid fa-chart-line text-tactical-green text-3xl mb-4"></i>
            <h3 className="font-display font-bold text-xl text-white mb-2">Market Analysis</h3>
            <p className="text-gray-300">Strategic insights and technology trends</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button size="lg" className="bg-steel-blue hover:bg-steel-blue/90">
            {intelligenceHub.ctaText}
          </Button>
        </div>
      </div>
    </section>
  )
}

export default IntelligenceHubMustache