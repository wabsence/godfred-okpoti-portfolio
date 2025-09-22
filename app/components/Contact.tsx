'use client'

import React, { useState } from 'react'
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageSquare, Calendar, Download, ExternalLink } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setSubmitStatus('success')
    setIsSubmitting(false)
    setFormData({ name: '', email: '', company: '', subject: '', message: '' })
    
    setTimeout(() => setSubmitStatus('idle'), 5000)
  }

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+1 (540) 642-7240',
      link: 'tel:+15406427240',
      description: 'Available Mon-Fri, 9AM-6PM EST'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'godfreddeyoung@yahoo.com',
      link: 'mailto:godfreddeyoung@yahoo.com',
      description: 'Best way to reach me'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Washington, D.C. Metro Area',
      link: '#',
      description: 'Open to remote opportunities'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      value: 'godfred-okpoti',
      link: 'https://www.linkedin.com/in/godfred-okpoti-57837b149',
      description: 'Professional networking'
    }
  ]

  const quickActions = [
    {
      icon: <Download className="w-5 h-5" />,
      label: 'Download Resume',
      description: 'Get my latest resume in PDF format',
      action: () => {
        // Simulate resume download
        window.open('#', '_blank')
      },
      primary: true
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: 'Schedule Meeting',
      description: 'Book a 30-minute consultation call',
      action: () => {
        window.open('https://calendly.com/godfred-okpoti', '_blank')
      },
      primary: false
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      label: 'WhatsApp',
      description: 'Quick message for urgent matters',
      action: () => {
        window.open('https://wa.me/15406427240', '_blank')
      },
      primary: false
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-dark-200/50 to-dark-300">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to discuss your next DevOps project or explore opportunities? 
            Let's connect and see how we can work together to achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="glass-effect p-8 hover-glow">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group">
                    <a
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <div className="p-3 bg-primary-500/20 rounded-lg text-primary-400 group-hover:bg-primary-500/30 transition-colors">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-semibold text-white">{info.label}</h4>
                          {info.link.startsWith('http') && <ExternalLink className="w-3 h-3 text-gray-400" />}
                        </div>
                        <p className="text-primary-400 font-medium">{info.value}</p>
                        <p className="text-gray-400 text-sm mt-1">{info.description}</p>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass-effect p-8 hover-glow">
              <h3 className="text-2xl font-semibold text-white mb-6">Quick Actions</h3>
              <div className="space-y-4">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={action.action}
                    className={`w-full flex items-start space-x-4 p-4 rounded-lg border transition-all duration-300 hover:scale-[1.02] ${
                      action.primary 
                        ? 'bg-primary-500/20 border-primary-500/30 hover:bg-primary-500/30' 
                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div className={`p-3 rounded-lg ${
                      action.primary 
                        ? 'bg-primary-500/30 text-primary-400' 
                        : 'bg-white/10 text-gray-400'
                    }`}>
                      {action.icon}
                    </div>
                    <div className="flex-1 text-left">
                      <h4 className="font-semibold text-white">{action.label}</h4>
                      <p className="text-gray-400 text-sm">{action.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="glass-effect p-6 hover-glow">
              <h4 className="font-semibold text-white mb-3 flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-primary-400" />
                Current Availability
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Status:</span>
                  <span className="text-green-400 flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                    Available for new projects
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Response Time:</span>
                  <span className="text-white">Within 24 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Preferred Contact:</span>
                  <span className="text-white">Email or LinkedIn</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="glass-effect p-8 hover-glow">
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400">
                Message sent successfully! I'll get back to you within 24 hours.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-colors"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="project">Project Consultation</option>
                    <option value="collaboration">Collaboration Opportunity</option>
                    <option value="job">Job Opportunity</option>
                    <option value="speaking">Speaking Engagement</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-colors resize-none"
                  placeholder="Tell me about your project, requirements, or how I can help..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2" />
                    Sending...
                  </div>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="glass-effect p-8">
            <p className="text-gray-400 mb-4">
              Interested in working together? I'm always open to discussing new opportunities and exciting projects.
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/godfred-okpoti-57837b149"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-effect hover-glow rounded-lg transition-all duration-300 hover:scale-110 group"
              >
                <Linkedin className="w-6 h-6 text-primary-400 group-hover:text-primary-300" />
              </a>
              <a
                href="https://github.com/godfred-okpoti"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-effect hover-glow rounded-lg transition-all duration-300 hover:scale-110 group"
              >
                <Github className="w-6 h-6 text-primary-400 group-hover:text-primary-300" />
              </a>
              <a
                href="mailto:godfreddeyoung@yahoo.com"
                className="p-3 glass-effect hover-glow rounded-lg transition-all duration-300 hover:scale-110 group"
              >
                <Mail className="w-6 h-6 text-primary-400 group-hover:text-primary-300" />
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-6">
              © 2024 Godfred Okpoti. All rights reserved. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact