import { Button } from '../components/ui'

function ACFServicesPage() {
  return (
    <div className="py-20 bg-tactical-gray">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-tactical-dark rounded-full px-6 py-3 mb-6">
            <i className="fa-solid fa-cogs text-fire-orange"></i>
            <span className="font-display text-sm tracking-wider text-white">OUR SERVICES</span>
          </div>

          <h1 className="font-display font-black text-5xl lg:text-6xl mb-6">
            <span className="text-white">STRATEGIC TECHNOLOGY</span><br />
            <span className="text-fire-orange">SOLUTIONS</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Your single technology partner for problem-solving, strategic guidance, and complete digital solutions
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">

          {/* What We Do */}
          <div className="bg-gradient-to-r from-fire-orange/20 to-steel-blue/20 border border-tactical-light rounded-xl p-8">
            <h2 className="font-display font-bold text-3xl text-white mb-6 text-center">
              What Do We Do? Whatever It Takes.
            </h2>
            <div className="text-center mb-8">
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                We eliminate the technology friction slowing down your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-tactical-gray/50 rounded-lg p-6">
                <div className="text-fire-orange text-xl mb-3">
                  <i className="fa-solid fa-wrench"></i>
                </div>
                <h3 className="font-semibold text-white mb-2">Build & Modernize</h3>
                <p className="text-gray-400 text-sm">
                  Custom software development, system modernization, and legacy integration
                  that actually works for your business.
                </p>
              </div>

              <div className="bg-tactical-gray/50 rounded-lg p-6">
                <div className="text-steel-blue text-xl mb-3">
                  <i className="fa-solid fa-magic-wand-sparkles"></i>
                </div>
                <h3 className="font-semibold text-white mb-2">Automate & Optimize</h3>
                <p className="text-gray-400 text-sm">
                  AI-powered automation, intelligent workflows, and process optimization
                  that frees your team for strategic work.
                </p>
              </div>

              <div className="bg-tactical-gray/50 rounded-lg p-6">
                <div className="text-tactical-green text-xl mb-3">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>
                <h3 className="font-semibold text-white mb-2">Secure & Scale</h3>
                <p className="text-gray-400 text-sm">
                  Cloud infrastructure, security implementation, and managed services
                  that grow with your business.
                </p>
              </div>

              <div className="bg-tactical-gray/50 rounded-lg p-6">
                <div className="text-warning-amber text-xl mb-3">
                  <i className="fa-solid fa-compass"></i>
                </div>
                <h3 className="font-semibold text-white mb-2">Guide & Strategy</h3>
                <p className="text-gray-400 text-sm">
                  Technology leadership, strategic planning, and architectural guidance
                  that aligns tech with business goals.
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-white font-semibold">
                One partner. One conversation. Complete solutions.
              </p>
            </div>
          </div>

          {/* Our Capability Stack */}
          <div className="bg-tactical-dark border border-tactical-light rounded-xl p-8">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl text-white mb-4">
                Complete Technology Capability Stack
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                From strategic guidance to hands-on development - everything you need from one partner
              </p>
            </div>

            {/* Strategic Level */}
            <div className="space-y-8">
              <div className="bg-warning-amber/10 border border-warning-amber rounded-lg p-6">
                <div className="flex items-center justify-center mb-6">
                  <div className="inline-flex items-center space-x-3 bg-warning-amber/20 rounded-full px-6 py-2">
                    <i className="fa-solid fa-chess text-warning-amber"></i>
                    <span className="font-display text-sm tracking-wider text-white">STRATEGIC LEVEL</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Technology Strategy & Leadership</h4>
                    <p className="text-gray-400 text-sm">CTO-level guidance, roadmapping, architectural decisions</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Business Process Analysis</h4>
                    <p className="text-gray-400 text-sm">Identifying inefficiencies and automation opportunities</p>
                  </div>
                </div>
              </div>

              {/* Core Development Level */}
              <div className="bg-fire-orange/10 border border-fire-orange rounded-lg p-6">
                <div className="flex items-center justify-center mb-6">
                  <div className="inline-flex items-center space-x-3 bg-fire-orange/20 rounded-full px-6 py-2">
                    <i className="fa-solid fa-code text-fire-orange"></i>
                    <span className="font-display text-sm tracking-wider text-white">CORE DEVELOPMENT</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Custom Software Development</h4>
                    <p className="text-gray-400 text-sm">Web apps, APIs, databases, integrations</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">AI Integration & Automation</h4>
                    <p className="text-gray-400 text-sm">Intelligent process automation, ML implementation</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Data Systems & Analytics</h4>
                    <p className="text-gray-400 text-sm">Business intelligence, reporting, predictive analytics</p>
                  </div>
                </div>
              </div>

              {/* Infrastructure Level */}
              <div className="bg-steel-blue/10 border border-steel-blue rounded-lg p-6">
                <div className="flex items-center justify-center mb-6">
                  <div className="inline-flex items-center space-x-3 bg-steel-blue/20 rounded-full px-6 py-2">
                    <i className="fa-solid fa-server text-steel-blue"></i>
                    <span className="font-display text-sm tracking-wider text-white">INFRASTRUCTURE & SUPPORT</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <h5 className="font-semibold text-white text-sm mb-1">Cloud Infrastructure</h5>
                    <p className="text-gray-400 text-xs">AWS, Azure hosting & management</p>
                  </div>
                  <div className="text-center">
                    <h5 className="font-semibold text-white text-sm mb-1">Security & Compliance</h5>
                    <p className="text-gray-400 text-xs">Security audits, compliance frameworks</p>
                  </div>
                  <div className="text-center">
                    <h5 className="font-semibold text-white text-sm mb-1">Managed IT Services</h5>
                    <p className="text-gray-400 text-xs">Ongoing support & maintenance</p>
                  </div>
                  <div className="text-center">
                    <h5 className="font-semibold text-white text-sm mb-1">System Integration</h5>
                    <p className="text-gray-400 text-xs">Legacy modernization, API connectivity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The One-Partner Advantage */}
          <div className="bg-gradient-to-r from-tactical-green/10 to-fire-orange/10 border border-tactical-light rounded-xl p-8">
            <h3 className="font-display font-bold text-2xl text-white mb-8 text-center">
              Why One Strategic Technology Partner Works Better
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-tactical-green text-xl mt-1 flex-shrink-0">
                    <i className="fa-solid fa-brain"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Strategic Context in Every Decision</h4>
                    <p className="text-gray-300 text-sm">
                      Every line of code, every system choice, every integration serves your broader business strategy.
                      We understand where you're going, not just where you are.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-tactical-green text-xl mt-1 flex-shrink-0">
                    <i className="fa-solid fa-puzzle-piece"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Everything Works Together</h4>
                    <p className="text-gray-300 text-sm">
                      No integration nightmares between different vendors. Your entire technology ecosystem
                      is designed and built to work seamlessly as one unified system.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-tactical-green text-xl mt-1 flex-shrink-0">
                    <i className="fa-solid fa-shield-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Single Point of Accountability</h4>
                    <p className="text-gray-300 text-sm">
                      No finger-pointing between vendors when something goes wrong. One phone number,
                      one relationship, one person responsible for your entire technology stack.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-tactical-green text-xl mt-1 flex-shrink-0">
                    <i className="fa-solid fa-clock"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Faster, Smarter Decisions</h4>
                    <p className="text-gray-300 text-sm">
                      When you need changes or have problems, there's no coordinating between multiple vendors.
                      One conversation leads to immediate, informed action across your entire stack.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-tactical-green text-xl mt-1 flex-shrink-0">
                    <i className="fa-solid fa-chart-line"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Long-term Technology Evolution</h4>
                    <p className="text-gray-300 text-sm">
                      We build solutions that grow with your business. Every project strengthens your
                      technology foundation rather than adding complexity or technical debt.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-tactical-green text-xl mt-1 flex-shrink-0">
                    <i className="fa-solid fa-dollar-sign"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Better Economics</h4>
                    <p className="text-gray-300 text-sm">
                      No markups between vendors, no duplicate overhead, no vendor management costs.
                      More of your budget goes to actual solutions that drive business results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How We Work */}
          <div className="bg-tactical-dark border border-tactical-light rounded-xl p-8">
            <h3 className="font-display font-bold text-2xl text-white mb-8 text-center">
              Our Strategic Problem-Solving Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-fire-orange text-2xl mb-4">
                  <i className="fa-solid fa-search"></i>
                </div>
                <h4 className="font-display font-bold text-lg text-white mb-3">1. Diagnose</h4>
                <p className="text-gray-300 text-sm">
                  Understand your business challenges, not just technical symptoms. What's really slowing you down?
                </p>
              </div>
              <div className="text-center">
                <div className="text-steel-blue text-2xl mb-4">
                  <i className="fa-solid fa-drafting-compass"></i>
                </div>
                <h4 className="font-display font-bold text-lg text-white mb-3">2. Strategize</h4>
                <p className="text-gray-300 text-sm">
                  Design solutions that eliminate root causes and align with your long-term business goals.
                </p>
              </div>
              <div className="text-center">
                <div className="text-tactical-green text-2xl mb-4">
                  <i className="fa-solid fa-hammer"></i>
                </div>
                <h4 className="font-display font-bold text-lg text-white mb-3">3. Build</h4>
                <p className="text-gray-300 text-sm">
                  Develop robust, scalable solutions using the right technology stack for your specific needs.
                </p>
              </div>
              <div className="text-center">
                <div className="text-warning-amber text-2xl mb-4">
                  <i className="fa-solid fa-chart-line"></i>
                </div>
                <h4 className="font-display font-bold text-lg text-white mb-3">4. Evolve</h4>
                <p className="text-gray-300 text-sm">
                  Continuously optimize and adapt your technology as your business grows and changes.
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <h3 className="font-display font-bold text-3xl text-white mb-4">
              Ready for strategic technology partnership?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stop juggling multiple vendors and patching together solutions. Get comprehensive technology
              strategy and execution from one partner who understands your business.
            </p>
            <div className="space-x-4">
              <Button size="lg">
                <i className="fa-solid fa-calendar mr-2"></i>
                Schedule Strategic Consultation
              </Button>
              <Button variant="outline" size="lg">
                <i className="fa-solid fa-phone mr-2"></i>
                (512) 744-1700
              </Button>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm">
                Free 30-minute consultation to discuss your technology challenges and strategic opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ACFServicesPage