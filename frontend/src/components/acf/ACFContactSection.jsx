import { useState, useEffect } from 'react'
import { useWordPressPage } from '../../hooks/useWordPress'
import { useContactInfo } from '../../hooks/useContactInfo'
import { Button } from '../ui'

const ACFContactSection = ({ pageSlug = 'contact' }) => {
  const { content, loading, error } = useWordPressPage(pageSlug)
  const { contactInfo } = useContactInfo()
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    calendarLink: ''
  })
  
  // Captcha state
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, answer: '' })
  const [captchaCorrect, setCaptchaCorrect] = useState(false)
  
  // Generate new captcha
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1
    const num2 = Math.floor(Math.random() * 10) + 1
    setCaptcha({ num1, num2, answer: '' })
    setCaptchaCorrect(false)
  }
  
  // Initialize captcha on component mount
  useEffect(() => {
    generateCaptcha()
  }, [])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  // Handle captcha input
  const handleCaptchaChange = (e) => {
    const value = e.target.value
    setCaptcha(prev => ({ ...prev, answer: value }))
    setCaptchaCorrect(parseInt(value) === (captcha.num1 + captcha.num2))
  }
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate captcha first
    if (!captchaCorrect) {
      setSubmitStatus('captcha_error')
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      // Submit to local backend (will be proxied through nginx when enabled)
      const response = await fetch('http://localhost:16247/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'centerfire_contact_form'
        })
      })
      
      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', company: '', message: '', calendarLink: '' })
        generateCaptcha() // Generate new captcha after successful submission
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (loading) {
    return (
      <section className="py-20 bg-tactical-gray">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-fire-orange"></div>
          <p className="text-gray-300 mt-4">Loading contact information...</p>
        </div>
      </section>
    )
  }

  if (error || !content) {
    // Fallback contact info
    return (
      <section className="py-20 bg-tactical-gray">
        <div className="container mx-auto px-6">
          <FallbackContactContent contactInfo={contactInfo} />
        </div>
      </section>
    )
  }

  // Extract ACF data
  const acf = content.acf || {}
  const {
    page_title = (content.title?.rendered === 'ACF Contact Test' || !content.title?.rendered) ? 'Ready to Deploy Solutions?' : content.title?.rendered,
    page_subtitle = 'Get in touch with our tactical team',
    
    // Contact Information
    company_name = contactInfo.company_name,
    main_phone = contactInfo.main_phone,
    main_email = contactInfo.main_email,
    support_email = contactInfo.support_email,

    // Business Hours
    business_hours = contactInfo.business_hours,
    emergency_contact = null, // No emergency contact display
    
    // Address Information
    headquarters = {},
    
    // Contact Methods
    contact_methods = [],
    
    // Form Settings
    show_contact_form = true,
    form_title = 'Send a Message',
    form_subtitle = 'Ready to deploy tactical solutions? Contact our command center.',
    
    // Social Links
    social_links = {}
  } = acf

  const {
    address_line_1 = null, // No address display
    address_line_2 = null,
    city = null,
    state = null,
    zip_code = null,
    country = null
  } = headquarters

  return (
    <section className="py-20 bg-tactical-gray">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-tactical-dark rounded-full px-6 py-3 mb-6">
            <i className="fa-solid fa-satellite-dish text-fire-orange"></i>
            <span className="font-display text-sm tracking-wider text-white">MISSION CONTACT</span>
          </div>
          
          <h1 className="font-display font-black text-5xl lg:text-6xl mb-6">
            <span className="text-white">{page_title}</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            {page_subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Primary Contact */}
            <div className="bg-tactical-dark border border-tactical-light rounded-xl p-8">
              <h3 className="font-display font-bold text-2xl text-white mb-6 flex items-center">
                <i className="fa-solid fa-building text-fire-orange mr-3"></i>
                Command Center
              </h3>
              
              <div className="space-y-4">
                {/* Only show address if headquarters data exists */}
                {address_line_1 && (
                  <div className="flex items-start space-x-3">
                    <i className="fa-solid fa-map-marker-alt text-fire-orange text-sm mt-1"></i>
                    <div className="text-gray-300">
                      <div className="font-semibold text-white">{company_name}</div>
                      <div>{address_line_1}</div>
                      {address_line_2 && <div>{address_line_2}</div>}
                      <div>{city}, {state} {zip_code}</div>
                      <div>{country}</div>
                    </div>
                  </div>
                )}
                
                <div className="flex items-center space-x-3">
                  <i className="fa-solid fa-phone text-fire-orange text-lg"></i>
                  <div>
                    <div className="text-white font-semibold text-lg">{main_phone}</div>
                    <div className="text-gray-300 text-sm">Call for immediate assistance</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <i className="fa-solid fa-clock text-fire-orange text-sm"></i>
                  <span className="text-gray-300">{business_hours}</span>
                </div>
                
                <div className="bg-tactical-light/10 rounded-lg p-4 mt-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <i className="fa-solid fa-bolt text-fire-orange text-sm"></i>
                    <span className="text-white font-semibold">Quick Response</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    We respond to all inquiries within 4 hours during business hours
                  </p>
                </div>
                
                {/* Social Links */}
                {social_links && (
                  <div className="pt-4 border-t border-tactical-light/20">
                    <h4 className="text-white font-semibold mb-3 text-sm">Connect With Us</h4>
                    <div className="flex space-x-4">
                      {social_links.linkedin && (
                        <a href={social_links.linkedin} target="_blank" rel="noopener noreferrer" 
                           className="text-gray-400 hover:text-fire-orange transition-colors">
                          <i className="fab fa-linkedin text-lg"></i>
                        </a>
                      )}
                      {social_links.twitter && (
                        <a href={social_links.twitter} target="_blank" rel="noopener noreferrer"
                           className="text-gray-400 hover:text-fire-orange transition-colors">
                          <i className="fab fa-twitter text-lg"></i>
                        </a>
                      )}
                      {social_links.github && (
                        <a href={social_links.github} target="_blank" rel="noopener noreferrer"
                           className="text-gray-400 hover:text-fire-orange transition-colors">
                          <i className="fab fa-github text-lg"></i>
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Methods */}
            {contact_methods && contact_methods.length > 0 && (
              <div className="bg-tactical-dark border border-tactical-light rounded-xl p-8">
                <h3 className="font-display font-bold text-xl text-white mb-6">
                  Preferred Contact Methods
                </h3>
                <div className="space-y-4">
                  {contact_methods.map((method, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <i className={`${method.icon || 'fa-solid fa-circle'} text-tactical-green`}></i>
                      <div>
                        <div className="text-white font-semibold">{method.name}</div>
                        <div className="text-gray-300 text-sm">{method.description}</div>
                        {method.response_time && (
                          <div className="text-tactical-green text-sm">Response: {method.response_time}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Social Links */}
            {Object.keys(social_links).length > 0 && (
              <div className="bg-tactical-dark border border-tactical-light rounded-xl p-8">
                <h3 className="font-display font-bold text-xl text-white mb-6">
                  Connect With Us
                </h3>
                <div className="flex space-x-4">
                  {social_links.linkedin && (
                    <a 
                      href={social_links.linkedin}
                      className="w-12 h-12 bg-tactical-light rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-fire-orange transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-linkedin text-lg"></i>
                    </a>
                  )}
                  {social_links.twitter && (
                    <a 
                      href={social_links.twitter}
                      className="w-12 h-12 bg-tactical-light rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-fire-orange transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-twitter text-lg"></i>
                    </a>
                  )}
                  {social_links.github && (
                    <a 
                      href={social_links.github}
                      className="w-12 h-12 bg-tactical-light rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-fire-orange transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-github text-lg"></i>
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Contact Form */}
          {show_contact_form && (
            <div className="bg-tactical-dark border border-tactical-light rounded-xl p-8">
              <h3 className="font-display font-bold text-2xl text-white mb-4">
                {form_title}
              </h3>
              <p className="text-gray-300 mb-8">
                {form_subtitle}
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="bg-green-900/20 border border-green-600 rounded-lg p-4">
                    <p className="text-green-400 text-center">
                      <i className="fa-solid fa-check-circle mr-2"></i>
                      Message sent successfully! We'll respond within 4 hours.
                    </p>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="bg-red-900/20 border border-red-600 rounded-lg p-4">
                    <p className="text-red-400 text-center">
                      <i className="fa-solid fa-exclamation-triangle mr-2"></i>
                      Failed to send message. Please try again or call us directly.
                    </p>
                  </div>
                )}
                {submitStatus === 'captcha_error' && (
                  <div className="bg-yellow-900/20 border border-yellow-600 rounded-lg p-4">
                    <p className="text-yellow-400 text-center">
                      <i className="fa-solid fa-calculator mr-2"></i>
                      Please complete the security check correctly before submitting.
                    </p>
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-tactical-gray border border-tactical-light rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-fire-orange focus:outline-none transition-colors"
                      placeholder="Your name"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-tactical-gray border border-tactical-light rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-fire-orange focus:outline-none transition-colors"
                      placeholder="your.email@company.com"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-tactical-gray border border-tactical-light rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-fire-orange focus:outline-none transition-colors"
                    placeholder="Your company name"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-tactical-gray border border-tactical-light rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-fire-orange focus:outline-none transition-colors resize-vertical"
                    placeholder="Describe your project requirements and objectives..."
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Calendar Link
                  </label>
                  <input
                    type="url"
                    name="calendarLink"
                    value={formData.calendarLink}
                    onChange={handleInputChange}
                    className="w-full bg-tactical-gray border border-tactical-light rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-fire-orange focus:outline-none transition-colors"
                    placeholder="https://calendly.com/yourname or your preferred meeting scheduler"
                    disabled={isSubmitting}
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    💡 Clever reversal: Instead of booking our calendar, share yours so we can see your availability
                  </p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Security Check: {captcha.num1} + {captcha.num2} = ?
                  </label>
                  <input
                    type="number"
                    value={captcha.answer}
                    onChange={handleCaptchaChange}
                    className={`w-full bg-tactical-gray border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none transition-colors ${
                      captcha.answer && captchaCorrect 
                        ? 'border-green-500 focus:border-green-400' 
                        : captcha.answer && !captchaCorrect
                        ? 'border-red-500 focus:border-red-400'
                        : 'border-tactical-light focus:border-fire-orange'
                    }`}
                    placeholder="Enter the sum"
                    required
                    disabled={isSubmitting}
                  />
                  {captcha.answer && (
                    <p className={`text-xs mt-1 ${captchaCorrect ? 'text-green-400' : 'text-red-400'}`}>
                      {captchaCorrect ? '✓ Correct!' : '✗ Please check your math'}
                    </p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fa-solid fa-spinner fa-spin mr-2"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-paper-plane mr-2"></i>
                      Send Message
                    </>
                  )}
                </Button>
                
                <p className="text-sm text-gray-400 text-center">
                  <i className="fa-solid fa-shield-alt mr-1"></i>
                  Your information is secure and will never be shared.
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

// Fallback content when WordPress isn't connected
const FallbackContactContent = ({ contactInfo }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
    <div className="bg-tactical-dark border border-tactical-light rounded-xl p-8">
      <h3 className="font-display font-bold text-2xl text-white mb-6">
        Contact Information
      </h3>
      <div className="space-y-4 text-gray-300">
        <div>📞 {contactInfo.main_phone}</div>
        <div>✉️ {contactInfo.main_email}</div>
        <div>🕒 {contactInfo.business_hours}</div>
      </div>
    </div>
    
    <div className="bg-tactical-dark border border-tactical-light rounded-xl p-8">
      <h3 className="font-display font-bold text-2xl text-white mb-6">
        Send a Message
      </h3>
    </div>
  </div>
)

export default ACFContactSection