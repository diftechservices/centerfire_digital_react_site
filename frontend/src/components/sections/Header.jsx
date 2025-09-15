import { Link } from 'react-router-dom'
import { Button } from '../ui'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-tactical-dark/95 backdrop-blur-md border-b border-tactical-light">
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/">
            <img
              src="/src/assets/images/centerfireweblogo.jpg"
              alt="Centerfire Digital"
              className="w-36 h-auto cursor-pointer"
            />
          </Link>

          {/* CTA Button */}
          <Button>
            Deploy Mission
          </Button>
        </nav>
      </div>
    </header>
  )
}

export default Header