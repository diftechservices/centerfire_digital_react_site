import { useContent } from '../../hooks/useContent'
import { Button } from '../ui'

const ServicesSectionMustache = () => {
  const content = useContent()

  if (!content) {
    return (
      <section className="py-20 bg-tactical-gray">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-fire-orange"></div>
          <p className="text-gray-300 mt-4">Loading services...</p>
        </div>
      </section>
    )
  }

  const services = content.services

  return (
    <section className="py-20 bg-tactical-gray">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-tactical-dark rounded-full px-6 py-3 mb-6">
            <i className="fa-solid fa-cogs text-fire-orange"></i>
            <span className="font-display text-sm tracking-wider text-white">SERVICES</span>
          </div>

          <h2 className="font-display font-black text-5xl lg:text-6xl mb-6">
            <span className="text-white">{services.sectionTitle}</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            {services.sectionSubtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.services.map((service, index) => (
            <div key={index} className="bg-tactical-dark border border-tactical-light rounded-xl p-8 group hover:border-fire-orange transition-colors">
              {/* Service Icon */}
              <div className="w-16 h-16 bg-fire-orange/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-fire-orange/30 transition-colors">
                <i className={`${service.icon} text-fire-orange text-2xl`}></i>
              </div>

              {/* Service Content */}
              <h3 className="font-display font-bold text-2xl text-white mb-4">
                {service.name}
              </h3>

              <p className="text-gray-300 mb-6">
                {service.description}
              </p>

              {/* Features List */}
              {service.features && service.features.length > 0 && (
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <i className="fa-solid fa-check-circle text-tactical-green"></i>
                      <span className="text-gray-300">{feature.featureName}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Pricing */}
              {service.price && (
                <div className="mb-6">
                  <span className="text-2xl font-bold text-fire-orange">
                    {service.pricePrefix} ${service.price}
                  </span>
                  {service.priceSuffix && (
                    <span className="text-gray-400">/{service.priceSuffix}</span>
                  )}
                </div>
              )}

              {/* Service CTA */}
              {service.ctaText && (
                <Button
                  variant="outline"
                  className="w-full border-fire-orange text-fire-orange hover:bg-fire-orange hover:text-tactical-dark"
                >
                  {service.ctaText}
                </Button>
              )}
            </div>
          ))}
        </div>

        {/* Section CTA */}
        {services.ctaText && (
          <div className="text-center">
            <Button size="lg" className="bg-fire-orange hover:bg-fire-orange/90">
              {services.ctaText}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

export default ServicesSectionMustache