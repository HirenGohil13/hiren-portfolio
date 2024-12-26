import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Code2, Users, Target } from 'lucide-react';

const milestones = [
  {
    year: "2023",
    role: "Technical Lead",
    company: "Sixberries",
    description: "Leading innovative projects and driving architectural decisions across global teams.",
    achievements: [
      "Led successful migration of legacy systems to microservices architecture",
      "Reduced system downtime by 75% through infrastructure optimization",
      "Mentored 15+ developers, achieving 98% team retention rate"
    ],
    icon: <Award className="h-6 w-6 text-white" />,
    color: "from-indigo-600 to-purple-600"
  },
  {
    year: "2019",
    role: "Senior Software Engineer",
    company: "Tech Innovations",
    description: "Spearheaded development of scalable cloud solutions serving millions of users.",
    achievements: [
      "Architected system handling 1M+ daily active users",
      "Reduced API response time by 60% through optimization",
      "Led implementation of zero-trust security architecture"
    ],
    icon: <Code2 className="h-6 w-6 text-white" />,
    color: "from-blue-600 to-cyan-600"
  },
  {
    year: "2014",
    role: "Software Engineer",
    company: "Digital Solutions",
    description: "Delivered high-impact features and established robust development practices.",
    achievements: [
      "Delivered 20+ major features with 99.9% uptime",
      "Improved application load time by 65%",
      "Created internal tools saving 20+ hours per week"
    ],
    icon: <Target className="h-6 w-6 text-white" />,
    color: "from-green-600 to-teal-600"
  }
];

export default function ProfessionalJourney() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-600 via-purple-600 to-pink-600" />

        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-16"
            >
              <div className={`absolute left-0 p-3 rounded-xl bg-gradient-to-br ${milestone.color} shadow-lg`}>
                {milestone.icon}
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 
                           hover:border-indigo-500 transition-all duration-300">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium">
                    {milestone.year}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900">{milestone.role}</h3>
                  <span className="text-gray-500">@ {milestone.company}</span>
                </div>

                <p className="text-gray-600 mb-4">{milestone.description}</p>

                <div className="space-y-2">
                  {milestone.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-2 text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}