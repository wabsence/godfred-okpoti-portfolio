'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X, Download } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  const handleResumeDownload = () => {
    // Create a temporary link element
    const link = document.createElement('a')
    link.href = '/assets/Godfred_Okpoti_Resume.pdf' // Path to your resume file
    link.download = 'Godfred_Okpoti_Resume.pdf' // Name for downloaded file
    link.target = '_blank' // Open in new tab as fallback
    
    // Trigger download
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    // Close mobile menu if open
    setIsOpen(false)
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark-200/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="text-2xl font-bold gradient-text">
            GO
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-primary-400 transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={handleResumeDownload}
              className="btn-primary group"
              title="Download Resume"
            >
              <Download className="w-4 h-4 mr-2 transition-transform group-hover:translate-y-0.5" />
              Resume
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-dark-200/95 backdrop-blur-md border-b border-white/10">
            <div className="container-custom py-6">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 font-medium text-left"
                  >
                    {item.label}
                  </button>
                ))}
                <button 
                  onClick={handleResumeDownload}
                  className="btn-primary w-fit mt-4 group"
                  title="Download Resume"
                >
                  <Download className="w-4 h-4 mr-2 transition-transform group-hover:translate-y-0.5" />
                  Resume
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation