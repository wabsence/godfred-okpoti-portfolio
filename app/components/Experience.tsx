'use client'

import React, { useState } from 'react'
import { Calendar, MapPin, Users, TrendingUp, Award, ChevronDown, ChevronUp } from 'lucide-react'

const Experience = () => {
  const [expandedJob, setExpandedJob] = useState<string | null>('swift')

  const experiences = [
    {
      id: 'swift',
      company: 'Swift Inc',
      position: 'Lead Platform Engineer/System & App Mgt & Supt Specialist',
      location: 'Culpeper, VA',
      duration: 'December 2024 - Present',
      type: 'Full-time',
      highlights: [
        'Led full lifecycle management of Kubernetes (EKS) clusters across AWS Commercial and GovCloud',
        'Reduced environment provisioning time from days to under 2 hours using modular infrastructure templates',
        'Improved sprint predictability by 25% through technical leadership in Agile practices',
        'Mentored team of 5 engineers, fostering collaboration and timely project delivery'
      ],
      achievements: [
        'Implemented GitOps with ArgoCD and Helm for consistent application rollouts',
        'Leveraged Kyverno for policy-as-code enforcement reducing misconfigurations',
        'Configured GPU-enabled Kubernetes nodes for AI/ML workloads'
      ],
      technologies: ['Kubernetes', 'AWS', 'Terraform', 'ArgoCD', 'Kyverno', 'GitLab CI', 'Helm', 'Prometheus', 'Grafana']
    },
    {
      id: 'wellsky',
      company: 'WellSky Corporation',
      position: 'Platform Engineer',
      location: 'Remote',
      duration: 'January 2025 - May 2025',
      type: 'Contract',
      highlights: [
        'Achieved 60% increase in deployment frequency with optimized GitHub Actions CI/CD',
        'Reduced manual tasks by 80% through production-grade automation scripts',
        'Improved security posture resulting in 50% reduction in security incident tickets',
        'Built custom tools saving 20+ hours per week'
      ],
      achievements: [
        'Authored Python and TypeScript automation scripts for EKS operations',
        'Applied SRE practices improving system reliability and reducing MTTR',
        'Integrated comprehensive testing strategies into development lifecycle'
      ],
      technologies: ['AWS', 'EKS', 'GitHub Actions', 'Python', 'TypeScript', 'Terraform', 'MySQL', 'PostgreSQL']
    },
    {
      id: 'publix',
      company: 'Publix Supermarket',
      position: 'Senior DevOps Engineer',
      location: 'Lakeland, FL',
      duration: 'January 2024 - November 2024',
      type: 'Full-time',
      highlights: [
        'Orchestrated successful migration of key applications to AWS improving scalability',
        'Led team of 5+ engineers improving delivery velocity by 30%',
        'Achieved 35% improvement in mean-time-to-detect (MTTD) with centralized observability',
        'Automated manual tasks increasing deployment efficiency by 30%'
      ],
      achievements: [
        'Integrated DevSecOps practices achieving 100% compliance audit pass rate',
        'Implemented disaster recovery solution with DynamoDB Global Tables',
        'Created responsive web application with React.js and AWS Cognito'
      ],
      technologies: ['AWS', 'EKS', 'Terraform', 'Jenkins', 'Prometheus', 'Grafana', 'React.js', 'DynamoDB']
    },
    {
      id: 'walmart',
      company: 'Walmart (Client)',
      position: 'Senior Cloud/DevOps Engineer',
      location: 'Remote',
      duration: 'May 2022 - January 2024',
      type: 'Contract',
      highlights: [
        'Designed high-availability AWS infrastructure with auto-scaling capabilities',
        'Led cross-functional team of 12 implementing Jenkins pipelines for 15+ projects',
        'Achieved 100% compliance with security policies using Infrastructure as Code',
        'Reduced downtime risk by implementing microservices architecture'
      ],
      achievements: [
        'Implemented Zero Trust security models reducing insider threats',
        'Built serverless multi-region disaster recovery solution',
        'Established OAuth 2.0 security for REST APIs'
      ],
      technologies: ['AWS', 'GCP', 'Jenkins', 'Terraform', 'Ansible', 'Kubernetes', 'ArgoCD', 'CloudFormation']
    },
    {
      id: 'vodafone',
      company: 'Vodafone UK (Client)',
      position: 'DevOps Engineer',
      location: 'London, UK',
      duration: 'February 2017 - January 2022',
      type: 'Full-time',
      highlights: [
        'Led transition to microservices architecture reducing deployment downtime',
        'Spearheaded IaC adoption cutting deployment time from days to hours',
        'Orchestrated legacy application migration to GKE reducing infrastructure costs',
        'Improved system availability through GCP migration'
      ],
      achievements: [
        'Implemented Istio service mesh improving security and traceability',
        'Built serverless ecosystem supporting 5 million+ users',
        'Deployed real-time data processing pipeline handling 1TB/hour'
      ],
      technologies: ['GCP', 'Kubernetes', 'Docker', 'Terraform', 'Jenkins', 'Istio', 'AWS Lambda', 'Elasticsearch']
    },
    {
      id: 'tullow',
      company: 'Tullow Ghana',
      position: 'SRE Engineer',
      location: 'Accra, Ghana',
      duration: 'October 2015 - March 2017',
      type: 'Full-time',
      highlights: [
        'Led dedicated SRE team focused on platform reliability enhancement',
        'Reduced local storage costs through NodeJS-based cloud storage integration',
        'Improved threat monitoring efficiency with custom SIEM dashboard',
        'Achieved system uptime improvements through Kubernetes orchestration'
      ],
      achievements: [
        'Prevented 1,500+ intrusion attempts with robust firewall configurations',
        'Implemented secure VPN infrastructure for remote work',
        'Developed real-time monitoring tool improving system availability'
      ],
      technologies: ['Kubernetes', 'Docker', 'Java', 'Python', 'AWS', 'ELK Stack', 'Redis', 'MongoDB']
    }
  ]

  const toggleExpanded = (jobId: string) => {
    setExpandedJob(expandedJob === jobId ? null : jobId)
  }

  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-transparent to-dark-200/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            9+ years of progressive experience in DevOps, cloud infrastructure, and platform engineering 
            across diverse industries and cutting-edge technologies.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-800 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-300 z-10 hidden md:block" />
                
                <div className="md:ml-16">
                  <div className="glass-effect hover-glow overflow-hidden">
                    {/* Job Header */}
                    <div 
                      className="p-6 cursor-pointer"
                      onClick={() => toggleExpanded(exp.id)}
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{exp.position}</h3>
                          <p className="text-lg font-semibold text-primary-400 mb-2">{exp.company}</p>
                        </div>
                        <div className="flex flex-col lg:items-end space-y-1">
                          <div className="flex items-center text-gray-400 text-sm">
                            <Calendar className="w-4 h-4 mr-1" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center text-gray-400 text-sm">
                            <MapPin className="w-4 h-4 mr-1" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      {/* Quick Stats */}
                      <div className="flex flex-wrap gap-4 mb-4">
                        <span className="skill-badge">
                          <Award className="w-3 h-3 mr-1" />
                          {exp.type}
                        </span>
                        {exp.highlights.length > 0 && (
                          <span className="skill-badge">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            {exp.highlights.length} Key Achievements
                          </span>
                        )}
                      </div>

                      {/* Expand Button */}
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.slice(0, 4).map((tech, techIndex) => (
                            <span key={techIndex} className="text-xs px-2 py-1 bg-primary-500/10 text-primary-300 rounded">
                              {tech}
                            </span>
                          ))}
                          {exp.technologies.length > 4 && (
                            <span className="text-xs px-2 py-1 bg-gray-500/10 text-gray-400 rounded">
                              +{exp.technologies.length - 4} more
                            </span>
                          )}
                        </div>
                        
                        <button className="flex items-center text-primary-400 hover:text-primary-300 transition-colors">
                          {expandedJob === exp.id ? (
                            <>
                              <span className="text-sm mr-1">Less</span>
                              <ChevronUp className="w-4 h-4" />
                            </>
                          ) : (
                            <>
                              <span className="text-sm mr-1">More</span>
                              <ChevronDown className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Expanded Content */}
                    {expandedJob === exp.id && (
                      <div className="border-t border-white/10 p-6 bg-white/5">
                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Key Highlights */}
                          <div>
                            <h4 className="font-semibold text-white mb-3 flex items-center">
                              <TrendingUp className="w-4 h-4 mr-2 text-primary-400" />
                              Key Highlights
                            </h4>
                            <ul className="space-y-2">
                              {exp.highlights.map((highlight, idx) => (
                                <li key={idx} className="text-gray-300 text-sm flex items-start">
                                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Technical Achievements */}
                          <div>
                            <h4 className="font-semibold text-white mb-3 flex items-center">
                              <Award className="w-4 h-4 mr-2 text-primary-400" />
                              Technical Achievements
                            </h4>
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement, idx) => (
                                <li key={idx} className="text-gray-300 text-sm flex items-start">
                                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* All Technologies */}
                        <div className="mt-6">
                          <h4 className="font-semibold text-white mb-3">Technologies & Tools</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <span key={techIndex} className="skill-badge text-xs">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 glass-effect p-8 hover-glow">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Career Summary</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">9+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">6</div>
              <div className="text-gray-400">Companies</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">50+</div>
              <div className="text-gray-400">Projects Delivered</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">20+</div>
              <div className="text-gray-400">Team Members Mentored</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience