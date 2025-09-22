'use client'

import React from 'react'
import Image from 'next/image'
import { ArrowRight, MapPin, Mail, Phone, Github, Linkedin } from 'lucide-react'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/30 via-transparent to-primary-800/30" />
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-500/20 rounded-full filter blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary-400/15 rounded-full filter blur-3xl animate-float" style={{animationDelay: '3s'}} />
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            {/* Greeting */}
            <div className="space-y-2">
              <p className="text-primary-400 font-medium text-lg">Hello, I'm</p>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Godfred
                <br />
                <span className="gradient-text">Okpoti</span>
              </h1>
            </div>

            {/* Role */}
            <div className="space-y-4">
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-300">
                Lead Platform Engineer & DevOps Expert
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl">
                DevOps Engineer with <span className="text-primary-400 font-semibold">9+ years</span> of experience 
                specializing in AWS, CI/CD pipelines, and cloud infrastructure management. 
                Committed to building scalable, reliable systems that drive business success.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="glass-effect px-4 py-2">
                <span className="text-primary-400 font-semibold">9+</span>
                <span className="text-gray-400 ml-2">Years Experience</span>
              </div>
              <div className="glass-effect px-4 py-2">
                <span className="text-primary-400 font-semibold">AWS</span>
                <span className="text-gray-400 ml-2">Cloud Expert</span>
              </div>
              <div className="glass-effect px-4 py-2">
                <span className="text-primary-400 font-semibold">DevOps</span>
                <span className="text-gray-400 ml-2">Specialist</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary-400" />
                <span>+1 (540) 642-7240</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary-400" />
                <span>godfreddeyoung@yahoo.com</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button onClick={scrollToContact} className="btn-primary group">
                Get In Touch
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </button>
              <button onClick={scrollToAbout} className="btn-secondary">
                Learn More
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/godfred-okpoti-57837b149"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-effect hover-glow rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5 text-primary-400" />
              </a>
              <a
                href="https://github.com/godfred-okpoti"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-effect hover-glow rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5 text-primary-400" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              {/* Animated Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary-500/30 animate-spin" style={{animationDuration: '10s'}} />
              <div className="absolute inset-4 rounded-full border border-primary-400/20 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}} />
              <div className="absolute inset-8 rounded-full border border-primary-300/10 animate-spin" style={{animationDuration: '20s'}} />
              
              {/* Profile Image Container */}
              <div className="absolute inset-12 rounded-full overflow-hidden glass-effect p-1">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/images/profile.jpg" // Replace with your actual image path
                    alt="Godfred Okpoti - DevOps Engineer"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 320px, 384px"
                  />
                  {/* Fallback placeholder if image fails to load */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-6xl font-bold text-white opacity-0 transition-opacity duration-300 [&:has(+img[src=''])]:opacity-100">
                    GO
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 glass-effect p-3 rounded-lg animate-float">
                <span className="text-xs font-mono text-primary-400">AWS</span>
              </div>
              <div className="absolute -bottom-4 -left-4 glass-effect p-3 rounded-lg animate-float" style={{animationDelay: '2s'}}>
                <span className="text-xs font-mono text-primary-400">K8s</span>
              </div>
              <div className="absolute top-1/2 -left-8 glass-effect p-3 rounded-lg animate-float" style={{animationDelay: '4s'}}>
                <span className="text-xs font-mono text-primary-400">CI/CD</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero