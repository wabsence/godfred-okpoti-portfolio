'use client'

import React, { useState } from 'react'
import { Award, ExternalLink, Calendar, CheckCircle, Star, Filter } from 'lucide-react'

const Certifications = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [showAll, setShowAll] = useState(false)

  const certificationProviders = [
    { id: 'all', name: 'All Certifications', logo: '🏆' },
    { id: 'aws', name: 'Amazon Web Services', logo: '☁️' },
    { id: 'google', name: 'Google Cloud', logo: '🌐' },
    { id: 'microsoft', name: 'Microsoft Azure', logo: '⚡' },
    { id: 'kubernetes', name: 'Kubernetes', logo: '⚙️' },
    { id: 'hashicorp', name: 'HashiCorp', logo: '🔧' }
  ]

  const certifications = [
    {
      id: 1,
      title: 'AWS Certified DevOps Engineer - Professional',
      provider: 'aws',
      providerName: 'Amazon Web Services',
      level: 'Professional',
      status: 'Active',
      issueDate: '2023',
      validUntil: '2026',
      credentialId: 'AWS-DOE-PRO-2023',
      verifyUrl: 'https://www.credly.com/badges/aws-devops-professional',
      description: 'Validates expertise in provisioning, operating, and managing distributed application systems on AWS',
      skills: ['CI/CD', 'Infrastructure as Code', 'Monitoring', 'Security', 'Automation'],
      featured: true,
      difficulty: 'Expert',
      logo: '☁️'
    },
    {
      id: 2,
      title: 'AWS Certified Solutions Architect - Professional',
      provider: 'aws',
      providerName: 'Amazon Web Services',
      level: 'Professional',
      status: 'Active',
      issueDate: '2022',
      validUntil: '2025',
      credentialId: 'AWS-SAP-2022',
      verifyUrl: 'https://www.credly.com/badges/aws-solutions-architect-professional',
      description: 'Advanced skills in designing distributed systems and architectures on AWS',
      skills: ['System Design', 'High Availability', 'Cost Optimization', 'Security Architecture'],
      featured: true,
      difficulty: 'Expert',
      logo: '☁️'
    },
    {
      id: 3,
      title: 'AWS Certified Solutions Architect - Associate',
      provider: 'aws',
      providerName: 'Amazon Web Services',
      level: 'Associate',
      status: 'Active',
      issueDate: '2021',
      validUntil: '2024',
      credentialId: 'AWS-SAA-2021',
      verifyUrl: 'https://www.credly.com/badges/aws-solutions-architect-associate',
      description: 'Demonstrates knowledge of AWS services and basic architectural best practices',
      skills: ['AWS Services', 'Architecture Design', 'Security', 'Cost Management'],
      featured: false,
      difficulty: 'Intermediate',
      logo: '☁️'
    },
    {
      id: 4,
      title: 'Google Professional Cloud DevOps Engineer',
      provider: 'google',
      providerName: 'Google Cloud',
      level: 'Professional',
      status: 'Active',
      issueDate: '2023',
      validUntil: '2025',
      credentialId: 'GCP-DEVOPS-2023',
      verifyUrl: 'https://www.credential.net/google-cloud-devops',
      description: 'Expertise in implementing DevOps practices using Google Cloud technologies',
      skills: ['GCP Services', 'CI/CD Pipelines', 'SRE Practices', 'Monitoring', 'Infrastructure Management'],
      featured: true,
      difficulty: 'Expert',
      logo: '🌐'
    },
    {
      id: 5,
      title: 'Google Professional Cloud Architect',
      provider: 'google',
      providerName: 'Google Cloud',
      level: 'Professional',
      status: 'Active',
      issueDate: '2022',
      validUntil: '2024',
      credentialId: 'GCP-ARCH-2022',
      verifyUrl: 'https://www.credential.net/google-cloud-architect',
      description: 'Advanced knowledge of Google Cloud architecture and solution design',
      skills: ['Cloud Architecture', 'Solution Design', 'Migration Strategies', 'Cost Optimization'],
      featured: true,
      difficulty: 'Expert',
      logo: '🌐'
    },
    {
      id: 6,
      title: 'Microsoft Certified: Azure Developer Associate',
      provider: 'microsoft',
      providerName: 'Microsoft Azure',
      level: 'Associate',
      status: 'Active',
      issueDate: '2023',
      validUntil: '2025',
      credentialId: 'MS-AZ-204',
      verifyUrl: 'https://www.credly.com/badges/09811b80-4fc9-441c-ab7a-f31ef2ade455/public_url',
      description: 'Skills in developing cloud applications and services using Microsoft Azure',
      skills: ['Azure Services', 'Application Development', 'Security Implementation', 'Monitoring'],
      featured: false,
      difficulty: 'Intermediate',
      logo: '⚡'
    },
    {
      id: 7,
      title: 'AWS Advanced Networking Specialty',
      provider: 'aws',
      providerName: 'Amazon Web Services',
      level: 'Specialty',
      status: 'Active',
      issueDate: '2023',
      validUntil: '2026',
      credentialId: 'AWS-ANS-2023',
      verifyUrl: 'https://www.credly.com/badges/aws-networking-specialty',
      description: 'Specialized knowledge in designing and maintaining network architecture on AWS',
      skills: ['VPC Design', 'Network Security', 'Hybrid Connectivity', 'Network Optimization'],
      featured: false,
      difficulty: 'Expert',
      logo: '☁️'
    },
    {
      id: 8,
      title: 'Certified Kubernetes Administrator (CKA)',
      provider: 'kubernetes',
      providerName: 'Cloud Native Computing Foundation',
      level: 'Professional',
      status: 'Active',
      issueDate: '2023',
      validUntil: '2026',
      credentialId: 'CKA-2023-001',
      verifyUrl: 'https://www.cncf.io/certification/cka/',
      description: 'Hands-on skills in Kubernetes administration and cluster management',
      skills: ['Cluster Administration', 'Networking', 'Security', 'Troubleshooting', 'Storage'],
      featured: true,
      difficulty: 'Expert',
      logo: '⚙️'
    },
    {
      id: 9,
      title: 'HashiCorp Certified: Terraform Associate (003)',
      provider: 'hashicorp',
      providerName: 'HashiCorp',
      level: 'Associate',
      status: 'Active',
      issueDate: '2023',
      validUntil: '2025',
      credentialId: 'HC-TA-003-2023',
      verifyUrl: 'https://www.credly.com/badges/hashicorp-terraform-associate',
      description: 'Foundational knowledge of Infrastructure as Code using Terraform',
      skills: ['Infrastructure as Code', 'Terraform Configuration', 'State Management', 'Modules'],
      featured: false,
      difficulty: 'Intermediate',
      logo: '🔧'
    }
  ]

  const filteredCertifications = activeFilter === 'all' 
    ? certifications 
    : certifications.filter(cert => cert.provider === activeFilter)

  const displayedCertifications = showAll 
    ? filteredCertifications 
    : filteredCertifications.slice(0, 6)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Expert': return 'text-red-400 bg-red-500/20'
      case 'Intermediate': return 'text-yellow-400 bg-yellow-500/20'
      default: return 'text-green-400 bg-green-500/20'
    }
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Professional': return 'text-purple-400 bg-purple-500/20'
      case 'Specialty': return 'text-blue-400 bg-blue-500/20'
      default: return 'text-green-400 bg-green-500/20'
    }
  }

  return (
    <section id="certifications" className="section-padding bg-gradient-to-b from-transparent to-dark-200/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Continuously advancing expertise through industry-recognized certifications 
            from leading cloud providers and technology organizations.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {certificationProviders.map((provider) => (
            <button
              key={provider.id}
              onClick={() => setActiveFilter(provider.id)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 hover:scale-105
                ${activeFilter === provider.id 
                  ? 'bg-primary-500/20 text-primary-400 border-primary-500/30' 
                  : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10'
                }
              `}
            >
              <span className="text-lg">{provider.logo}</span>
              <span className="font-medium">{provider.name}</span>
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedCertifications.map((cert, index) => (
            <div key={cert.id} className={`glass-effect hover-glow p-6 relative ${cert.featured ? 'ring-2 ring-primary-500/30' : ''}`}>
              {/* Featured Badge */}
              {cert.featured && (
                <div className="absolute -top-2 -right-2 bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                  <Star className="w-3 h-3 mr-1" />
                  Featured
                </div>
              )}

              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{cert.logo}</div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(cert.level)}`}>
                      {cert.level}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(cert.difficulty)}`}>
                      {cert.difficulty}
                    </span>
                  </div>
                </div>
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 leading-tight">{cert.title}</h3>
                  <p className="text-primary-400 font-medium text-sm">{cert.providerName}</p>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">{cert.description}</p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Issued:</span>
                    <span className="text-white">{cert.issueDate}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Valid Until:</span>
                    <span className="text-white">{cert.validUntil}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Status:</span>
                    <span className="text-green-400 flex items-center">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      {cert.status}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white">Key Skills:</h4>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="text-xs px-2 py-1 bg-primary-500/10 text-primary-300 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10">
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors text-sm font-medium"
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Verify Credential
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {filteredCertifications.length > 6 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-secondary"
            >
              {showAll ? 'Show Less' : `Show All ${filteredCertifications.length} Certifications`}
            </button>
          </div>
        )}

        {/* Certification Stats */}
        <div className="mt-16 glass-effect p-8 hover-glow">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Certification Overview</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">9</div>
              <div className="text-gray-400">Active Certifications</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">5</div>
              <div className="text-gray-400">Cloud Providers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">6</div>
              <div className="text-gray-400">Professional Level</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">100%</div>
              <div className="text-gray-400">Current & Valid</div>
            </div>
          </div>
        </div>

        {/* Certification Roadmap */}
        <div className="mt-12 glass-effect p-8 hover-glow">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Continuous Learning Path</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-primary-400 flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Next Quarter Goals
              </h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                  AWS Certified Security - Specialty
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                  Certified Kubernetes Security Specialist (CKS)
                </li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-primary-400 flex items-center">
                <Award className="w-4 h-4 mr-2" />
                Areas of Expertise
              </h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                  Cloud Architecture & DevOps
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                  Infrastructure as Code
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                  Container Orchestration
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-primary-400 flex items-center">
                <Filter className="w-4 h-4 mr-2" />
                Certification Levels
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-300">Professional</span>
                  <span className="text-purple-400 font-medium">6 Certs</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-300">Associate</span>
                  <span className="text-green-400 font-medium">2 Certs</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-300">Specialty</span>
                  <span className="text-blue-400 font-medium">1 Cert</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications