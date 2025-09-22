'use client'

import React, { useState } from 'react'
import { ExternalLink, Github, Server, Cloud, Shield, Database, Code, Zap } from 'lucide-react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projectCategories = [
    { id: 'all', name: 'All Projects', icon: <Code className="w-4 h-4" /> },
    { id: 'cloud', name: 'Cloud Infrastructure', icon: <Cloud className="w-4 h-4" /> },
    { id: 'devops', name: 'DevOps & CI/CD', icon: <Server className="w-4 h-4" /> },
    { id: 'security', name: 'Security & Compliance', icon: <Shield className="w-4 h-4" /> },
    { id: 'automation', name: 'Automation', icon: <Zap className="w-4 h-4" /> }
  ]

  const projects = [
    {
      id: 1,
      title: 'Multi-Cloud Kubernetes Platform',
      description: 'Led the design and implementation of a highly available Kubernetes platform across AWS and GCP, supporting 100+ microservices with automated scaling and disaster recovery.',
      category: 'cloud',
      technologies: ['Kubernetes', 'AWS EKS', 'GKE', 'Terraform', 'ArgoCD', 'Helm'],
      achievements: [
        '99.99% uptime achieved',
        'Reduced deployment time by 80%',
        'Cost optimization of 30%',
        'Zero-downtime deployments'
      ],
      metrics: {
        performance: '99.99% Uptime',
        cost: '30% Cost Reduction',
        speed: '80% Faster Deployments'
      },
      company: 'Swift Inc',
      year: '2024',
      image: '/api/placeholder/400/250'
    },
    {
      id: 2,
      title: 'Enterprise CI/CD Pipeline Modernization',
      description: 'Architected and implemented modern CI/CD pipelines using GitLab CI and GitHub Actions, serving 15+ development teams with automated testing, security scanning, and deployment.',
      category: 'devops',
      technologies: ['GitLab CI', 'GitHub Actions', 'Jenkins', 'SonarQube', 'Trivy', 'ArgoCD'],
      achievements: [
        '60% increase in deployment frequency',
        '90% reduction in rollback time',
        '50% fewer production incidents',
        'Automated security compliance'
      ],
      metrics: {
        frequency: '60% More Deployments',
        quality: '50% Fewer Incidents',
        speed: '90% Faster Rollbacks'
      },
      company: 'WellSky Corporation',
      year: '2025',
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'Zero Trust Security Implementation',
      description: 'Led digital transformation project implementing Zero Trust security models across cloud infrastructure, significantly reducing insider threats and improving compliance posture.',
      category: 'security',
      technologies: ['AWS IAM', 'OAuth 2.0', 'Kyverno', 'Istio', 'Vault', 'SIEM'],
      achievements: [
        '100% compliance audit pass rate',
        'Zero security breaches',
        'Reduced incident response time by 40%',
        'Automated threat detection'
      ],
      metrics: {
        compliance: '100% Audit Pass',
        security: '0 Breaches',
        response: '40% Faster Response'
      },
      company: 'Publix Supermarket',
      year: '2024',
      image: '/api/placeholder/400/250'
    },
    {
      id: 4,
      title: 'Serverless Data Processing Pipeline',
      description: 'Built a real-time data processing pipeline using AWS Lambda, Kinesis, and Elasticsearch, capable of processing 1TB of data per hour with minimal operational overhead.',
      category: 'cloud',
      technologies: ['AWS Lambda', 'Kinesis', 'Elasticsearch', 'DynamoDB', 'API Gateway', 'CloudWatch'],
      achievements: [
        '1TB/hour data processing',
        '70% cost reduction',
        'Real-time analytics',
        'Auto-scaling capabilities'
      ],
      metrics: {
        throughput: '1TB/Hour Processing',
        cost: '70% Cost Savings',
        latency: '<100ms Response'
      },
      company: 'Vodafone UK',
      year: '2021',
      image: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: 'Infrastructure as Code Framework',
      description: 'Developed comprehensive IaC framework using Terraform and Terragrunt, enabling consistent infrastructure deployment across multiple environments with policy enforcement.',
      category: 'automation',
      technologies: ['Terraform', 'Terragrunt', 'AWS CDK', 'CloudFormation', 'Ansible', 'Python'],
      achievements: [
        'Environment provisioning: days to hours',
        '95% reduction in configuration drift',
        'Standardized across 20+ environments',
        'Automated compliance checks'
      ],
      metrics: {
        speed: 'Days to Hours',
        consistency: '95% Drift Reduction',
        scale: '20+ Environments'
      },
      company: 'Walmart',
      year: '2023',
      image: '/api/placeholder/400/250'
    },
    {
      id: 6,
      title: 'Microservices Observability Platform',
      description: 'Implemented comprehensive observability solution using Prometheus, Grafana, and ELK stack, providing real-time insights into system performance and health.',
      category: 'devops',
      technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'Jaeger', 'AlertManager', 'Kibana'],
      achievements: [
        '35% improvement in MTTD',
        'Centralized logging for 100+ services',
        'Custom dashboards and alerts',
        'Proactive issue resolution'
      ],
      metrics: {
        detection: '35% Faster MTTD',
        coverage: '100+ Services',
        uptime: '99.9% Availability'
      },
      company: 'Publix Supermarket',
      year: '2024',
      image: '/api/placeholder/400/250'
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-dark-200/50 to-transparent">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing impactful projects that demonstrate expertise in cloud infrastructure, 
            DevOps practices, and modern software engineering solutions.
          </p>
        </div>

        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projectCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 hover:scale-105
                ${activeFilter === category.id 
                  ? 'bg-primary-500/20 text-primary-400 border-primary-500/30' 
                  : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10'
                }
              `}
            >
              {category.icon}
              <span className="font-medium">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="project-card group">
              {/* Project Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-primary-700/20 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-mesh opacity-20" />
                <div className="relative z-10 p-8">
                  <div className="w-16 h-16 bg-primary-500/30 rounded-full flex items-center justify-center mb-4">
                    {project.category === 'cloud' && <Cloud className="w-8 h-8 text-primary-400" />}
                    {project.category === 'devops' && <Server className="w-8 h-8 text-primary-400" />}
                    {project.category === 'security' && <Shield className="w-8 h-8 text-primary-400" />}
                    {project.category === 'automation' && <Zap className="w-8 h-8 text-primary-400" />}
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">{project.company}</div>
                    <div className="text-primary-400 font-medium">{project.year}</div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-2">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="bg-white/5 rounded-lg p-2 text-center">
                      <div className="text-primary-400 font-semibold text-xs">{value}</div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs px-2 py-1 bg-primary-500/10 text-primary-300 rounded">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-gray-500/10 text-gray-400 rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Achievements */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.achievements.slice(0, 2).map((achievement, idx) => (
                      <li key={idx} className="text-xs text-gray-400 flex items-start">
                        <span className="w-1 h-1 bg-primary-400 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <button className="flex-1 btn-secondary text-xs py-2 px-3 hover:bg-primary-500/10">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Details
                  </button>
                  <button className="p-2 border border-gray-600 rounded-lg text-gray-400 hover:text-primary-400 hover:border-primary-500/30 transition-colors">
                    <Github className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Summary */}
        <div className="mt-16 glass-effect p-8 hover-glow">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Project Impact Summary</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">50+</div>
              <div className="text-gray-400">Projects Delivered</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">99.9%</div>
              <div className="text-gray-400">Average Uptime</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">60%</div>
              <div className="text-gray-400">Performance Improvement</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">$2M+</div>
              <div className="text-gray-400">Cost Savings Generated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects