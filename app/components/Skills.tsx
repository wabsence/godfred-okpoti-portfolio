'use client'

import React, { useState } from 'react'
import { Cloud, Server, Code, Database, Shield, Settings, GitBranch, Monitor } from 'lucide-react'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('cloud')

  const skillCategories = [
    {
      id: 'cloud',
      name: 'Cloud Platforms',
      icon: <Cloud className="w-5 h-5" />,
      color: 'bg-blue-500/20 text-blue-400 border-blue-500/30'
    },
    {
      id: 'devops',
      name: 'DevOps & CI/CD',
      icon: <GitBranch className="w-5 h-5" />,
      color: 'bg-green-500/20 text-green-400 border-green-500/30'
    },
    {
      id: 'containers',
      name: 'Containers & Orchestration',
      icon: <Server className="w-5 h-5" />,
      color: 'bg-purple-500/20 text-purple-400 border-purple-500/30'
    },
    {
      id: 'programming',
      name: 'Programming & Scripting',
      icon: <Code className="w-5 h-5" />,
      color: 'bg-orange-500/20 text-orange-400 border-orange-500/30'
    },
    {
      id: 'databases',
      name: 'Databases',
      icon: <Database className="w-5 h-5" />,
      color: 'bg-red-500/20 text-red-400 border-red-500/30'
    },
    {
      id: 'monitoring',
      name: 'Monitoring & Observability',
      icon: <Monitor className="w-5 h-5" />,
      color: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30'
    },
    {
      id: 'security',
      name: 'Security & Compliance',
      icon: <Shield className="w-5 h-5" />,
      color: 'bg-pink-500/20 text-pink-400 border-pink-500/30'
    },
    {
      id: 'automation',
      name: 'Automation & IaC',
      icon: <Settings className="w-5 h-5" />,
      color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
    }
  ]

  const skillsData = {
    cloud: [
      { name: 'Amazon Web Services (AWS)', level: 95 },
      { name: 'Google Cloud Platform (GCP)', level: 85 },
      { name: 'Microsoft Azure', level: 75 },
      { name: 'AWS Lambda & Serverless', level: 90 },
      { name: 'AWS CloudFormation', level: 88 },
      { name: 'AWS EKS', level: 92 }
    ],
    devops: [
      { name: 'Jenkins', level: 90 },
      { name: 'GitLab CI/CD', level: 85 },
      { name: 'Azure DevOps', level: 80 },
      { name: 'GitHub Actions', level: 88 },
      { name: 'ArgoCD', level: 85 },
      { name: 'AWS CodePipeline', level: 87 }
    ],
    containers: [
      { name: 'Docker', level: 95 },
      { name: 'Kubernetes', level: 92 },
      { name: 'Helm', level: 85 },
      { name: 'Istio Service Mesh', level: 80 },
      { name: 'Kyverno', level: 78 },
      { name: 'Container Registry', level: 88 }
    ],
    programming: [
      { name: 'Python', level: 88 },
      { name: 'Shell Scripting', level: 92 },
      { name: 'Go (Golang)', level: 75 },
      { name: 'TypeScript', level: 80 },
      { name: 'Java', level: 82 },
      { name: 'JavaScript', level: 78 }
    ],
    databases: [
      { name: 'MySQL', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 82 },
      { name: 'Redis', level: 78 },
      { name: 'DynamoDB', level: 85 },
      { name: 'Amazon Aurora', level: 80 }
    ],
    monitoring: [
      { name: 'Prometheus', level: 88 },
      { name: 'Grafana', level: 90 },
      { name: 'ELK Stack', level: 85 },
      { name: 'Splunk', level: 82 },
      { name: 'AWS CloudWatch', level: 88 },
      { name: 'Datadog', level: 75 }
    ],
    security: [
      { name: 'DevSecOps Practices', level: 85 },
      { name: 'AWS IAM', level: 90 },
      { name: 'OAuth 2.0', level: 80 },
      { name: 'Trivy Scanner', level: 78 },
      { name: 'Security Compliance', level: 82 },
      { name: 'Vulnerability Management', level: 80 }
    ],
    automation: [
      { name: 'Terraform', level: 92 },
      { name: 'Ansible', level: 88 },
      { name: 'AWS CDK', level: 85 },
      { name: 'Terragrunt', level: 80 },
      { name: 'CloudFormation', level: 87 },
      { name: 'Infrastructure as Code', level: 90 }
    ]
  }

  const getSkillColor = (level: number) => {
    if (level >= 90) return 'from-green-500 to-green-400'
    if (level >= 80) return 'from-blue-500 to-blue-400'
    if (level >= 70) return 'from-yellow-500 to-yellow-400'
    return 'from-red-500 to-red-400'
  }

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-dark-200/50 to-transparent">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit built over 9+ years of hands-on experience in DevOps, 
            cloud infrastructure, and modern software development practices.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 hover:scale-105
                ${activeCategory === category.id 
                  ? category.color 
                  : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10'
                }
              `}
            >
              {category.icon}
              <span className="font-medium">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="glass-effect p-8 hover-glow">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData[activeCategory as keyof typeof skillsData].map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-primary-400 font-semibold text-sm">{skill.level}%</span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${getSkillColor(skill.level)} rounded-full transition-all duration-1000 ease-out skill-progress`}
                    style={{ 
                      width: `${skill.level}%`,
                      animation: 'skillLoad 1.5s ease-out forwards'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Operating Systems & Tools */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="glass-effect p-6 hover-glow">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Server className="w-5 h-5 mr-2 text-primary-400" />
              Operating Systems
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Ubuntu', 'CentOS', 'RedHat Linux', 'Windows Server', 'Amazon Linux'].map((os, index) => (
                <span key={index} className="skill-badge">{os}</span>
              ))}
            </div>
          </div>

          <div className="glass-effect p-6 hover-glow">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Settings className="w-5 h-5 mr-2 text-primary-400" />
              Project Management
            </h3>
            <div className="flex flex-wrap gap-2">
              {['JIRA', 'Confluence', 'Trello', 'Asana', 'Slack', 'Scrum', 'Kanban', 'Agile'].map((tool, index) => (
                <span key={index} className="skill-badge">{tool}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Preview */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-white mb-6">Professional Certifications</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'AWS DevOps Engineer Professional',
              'AWS Solutions Architect Professional', 
              'Google Cloud DevOps Engineer',
              'Certified Kubernetes Administrator',
              'HashiCorp Terraform Associate',
              'Microsoft Azure Developer'
            ].map((cert, index) => (
              <span key={index} className="bg-gradient-to-r from-primary-500/20 to-primary-600/20 text-primary-300 border border-primary-500/30 px-3 py-1 rounded-full text-sm font-medium">
                {cert}
              </span>
            ))}
          </div>
          <button 
            onClick={() => {
              const element = document.querySelector('#certifications')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
            className="mt-6 btn-secondary"
          >
            View All Certifications
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes skillLoad {
          0% {
            width: 0%;
          }
        }
      `}</style>
    </section>
  )
}

export default Skills