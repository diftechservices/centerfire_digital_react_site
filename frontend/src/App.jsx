import { Routes, Route } from 'react-router-dom'
import './index.css'
import Header from './components/sections/Header'
import ACFFooter from './components/acf/ACFFooter'
import HomePageMustache from './pages/HomePageMustache'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import DynamicAboutPage from './pages/DynamicAboutPage'
import ServicesPage from './pages/ServicesPage'
import ACFServicesPage from './pages/ACFServicesPage'
import ContactPage from './pages/ContactPage'
import ACFContactPage from './pages/ACFContactPage'
import DemoPage from './pages/DemoPage'
import WordPressTestPage from './pages/WordPressTestPage'


function App() {
  return (
    <div className="bg-tactical-dark text-white min-h-screen">
      <Header />
      
      {/* Main content with padding for fixed header */}
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<HomePageMustache />} />
          <Route path="/home-old" element={<HomePage />} />
          <Route path="/about" element={<DynamicAboutPage />} />
          <Route path="/about-wp" element={<DynamicAboutPage />} />
          <Route path="/services" element={<ACFServicesPage />} />
          <Route path="/services-acf" element={<ACFServicesPage />} />
          <Route path="/contact" element={<ACFContactPage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/wp-test" element={<WordPressTestPage />} />

        </Routes>
      </main>
      
      {/* Footer */}
      <ACFFooter pageSlug="homepage" />
    </div>
  )
}

export default App