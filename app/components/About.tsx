'use client'

import React from 'react'
import { Code, Server, Cloud, Shield, Users, Award } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Infrastructure",
      description: "Expert in AWS and GCP cloud services with 9+ years of hands-on experience"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "DevOps & CI/CD",
      description: "Specialized in implementing robust CI/CD pipelines and infrastructure automation"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Platform Engineering",
      description: "Leading teams in building scalable, reliable platforms using modern technologies"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security & Compliance",
      description: "Implementing DevSecOps practices and ensuring compliance with industry standards"
    }
  ]

  const achievements = [
    { metric: "20%", description: "Reduction in deployment failures through enhanced Splunk monitoring" },
    { metric: "30%", description: "Improved efficiency by optimizing AWS and GCP cloud services" },
    { metric: "60%", description: "Increase in deployment frequency with automated CI/CD pipelines" },
    { metric: "50%", description: "Reduction in security incidents through improved security posture" }
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-transparent to-dark-200/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate about building scalable infrastructure and empowering engineering teams 
            to deliver exceptional results through modern DevOps practices.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="glass-effect p-8 hover-glow">
              <h3 className="text-2xl font-semibold text-white mb-4">Professional Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                With over 9 years of experience in DevOps and cloud infrastructure, I've had the privilege 
                of working with leading organizations including <span className="text-primary-400 font-semibold">Swift Inc</span>, 
                <span className="text-primary-400 font-semibold"> WellSky Corporation</span>, 
                <span className="text-primary-400 font-semibold"> Publix Supermarket</span>, and 
                <span className="text-primary-400 font-semibold"> Walmart</span>.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                My expertise spans across AWS, Kubernetes, Terraform, and modern CI/CD practices. 
                I'm passionate about implementing Infrastructure as Code, containerization, and 
                automation to drive operational excellence.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Currently serving as a <span className="text-primary-400 font-semibold">Lead Platform Engineer</span> 
                at Swift Inc, where I lead full lifecycle management of Kubernetes clusters and 
                architect highly available cloud infrastructures.
              </p>
            </div>

            {/* Education */}
            <div className="glass-effect p-6 hover-glow">
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                <Award className="w-5 h-5 mr-2 text-primary-400" />
                Education
              </h4>
              <div className="space-y-2 text-gray-300">
                <p><span className="font-medium">Bachelor of Science</span> - Mathematics and Information Technology</p>
                <p className="text-sm text-gray-400">University of Education</p>
                <p><span className="font-medium">Diploma</span> - Statistics and Information Technology</p>
                <p className="text-sm text-gray-400">Koforidua Technical University</p>
              </div>
            </div>
          </div>

          {/* Right Content - Highlights */}
          <div className="grid gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="glass-effect p-6 hover-glow group">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary-500/20 rounded-lg text-primary-400 group-hover:bg-primary-500/30 transition-colors">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{highlight.title}</h4>
                    <p className="text-gray-400">{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="glass-effect p-8 hover-glow">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Key Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">
                  {achievement.metric}
                </div>
                <p className="text-gray-400 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-white mb-8">Core Values</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Innovation', 'Reliability', 'Collaboration', 'Continuous Learning', 
              'Quality', 'Scalability', 'Security First', 'Automation'
            ].map((value, index) => (
              <span key={index} className="skill-badge hover:bg-primary-500/30 transition-colors cursor-default">
                {value}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About