import React from 'react';
import { Users, Code2, Server, Database, Cloud, Brain, Award } from 'lucide-react';
import SkillCard from './SkillCard';
import CertificationBadge from './CertificationBadge';

const skillCategories = [
  {
    title: "Agile Leadership",
    icon: <Users className="h-6 w-6" />,
    skills: ["Team Leadership", "Sprint Planning", "Resource Management", "Stakeholder Management"]
  },
  {
    title: "Frontend",
    icon: <Code2 className="h-6 w-6" />,
    skills: ["React", "Vue", "HTML/CSS/SCSS", "Material UI", "Bootstrap"]
  },
  {
    title: "Backend",
    icon: <Server className="h-6 w-6" />,
    skills: ["Node.js", "PHP (Laravel)", "WordPress", "RESTful APIs"]
  },
  {
    title: "Databases",
    icon: <Database className="h-6 w-6" />,
    skills: ["MongoDB", "MySQL", "Database Design", "Query Optimization"]
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="h-6 w-6" />,
    skills: ["AWS", "Docker", "GitHub", "GitLab"]
  },
  {
    title: "Project Tools",
    icon: <Brain className="h-6 w-6" />,
    skills: ["JIRA", "Asana", "Risk Management", "Resource Planning"]
  }
];

const certifications = [
  {
    name: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2023",
    icon: "/aws-badge.svg"
  },
  {
    name: "Professional Scrum Master",
    issuer: "Scrum.org",
    year: "2023",
    icon: "/scrum-badge.svg"
  },
  {
    name: "MongoDB Professional",
    issuer: "MongoDB University",
    year: "2022",
    icon: "/mongo-badge.svg"
  }
];

export default function Skills() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 
                        text-sm font-medium mb-4">
            Skills & Expertise
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Proficiency</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive expertise across modern technologies and methodologies, 
            backed by industry certifications and hands-on experience
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, idx) => (
            <SkillCard
              key={idx}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </div>

        {/* Certifications Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-indigo-50 rounded-xl">
              <Award className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Professional Certifications</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <CertificationBadge key={idx} {...cert} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}