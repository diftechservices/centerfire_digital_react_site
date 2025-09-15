import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui'
import { useMainPhone } from '../../hooks/useContactInfo'

const Header = () => {
  const mainPhone = useMainPhone()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-tactical-dark/95 backdrop-blur-md border-b border-tactical-light">
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between py-3 md:py-6">
          {/* Mobile Layout */}
          <div className="md:hidden flex items-center space-x-3">
            <Link to="/">
              <img
                src="/src/assets/images/centerfireweblogo.jpg"
                alt="Centerfire Digital"
                className="h-10 w-auto cursor-pointer"
              />
            </Link>
            {mainPhone && (
              <a
                href={`tel:${mainPhone.replace(/[^\d]/g, '')}`}
                className="flex flex-col group transition-colors duration-200 hover:text-white cursor-pointer"
              >
                <span className="font-display font-bold text-lg text-white group-hover:text-gray-100">Centerfire Digital</span>
                <div className="flex items-center space-x-1 text-xs text-gray-300 group-hover:text-white">
                  <i className="fa-solid fa-phone text-xs"></i>
                  <span>{mainPhone}</span>
                </div>
              </a>
            )}
          </div>

          {/* Desktop Layout - Logo Left */}
          <Link to="/" className="hidden md:block">
            <img
              src="/src/assets/images/centerfireweblogo.jpg"
              alt="Centerfire Digital"
              className="h-16 w-auto cursor-pointer"
            />
          </Link>

          {/* Desktop Layout - Centered Company Name */}
          <Link to="/" className="hidden md:block font-display font-black text-3xl text-white hover:text-gray-100 transition-colors">
            Centerfire Digital
          </Link>

          {/* Desktop Phone */}
          {mainPhone && (
            <a
              href={`tel:${mainPhone.replace(/[^\d]/g, '')}`}
              className="hidden md:flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <i className="fa-solid fa-phone text-sm"></i>
              <span className="text-lg">{mainPhone}</span>
            </a>
          )}

          {/* Mobile hamburger menu */}
          <button
            className="md:hidden text-white text-xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>

        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-tactical-dark/95 backdrop-blur-md border-b border-tactical-light">
            <nav className="py-4 space-y-3">
              <Link
                to="/services"
                className="block text-gray-300 hover:text-white transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/about"
                className="block text-gray-300 hover:text-white transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block text-gray-300 hover:text-white transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header