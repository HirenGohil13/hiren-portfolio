import React from 'react';
import { Briefcase, Building2, Calendar, ChevronRight, Award, Users, Cpu, Code, Target } from 'lucide-react';

const experiences = [
  {
    company: "Sixberries Ltd",
    role: "Tech Lead",
    period: "July 2019 - Present",
    description: "Led a team of 15+ developers across 3 continents, driving technical innovation and architectural excellence.",
    impact: {
      icon: <Users className="h-5 w-5" />,
      metric: "$5M+",
      text: "Revenue Generated"
    },
    achievements: [
      "Led 15+ developers across 3 continents, achieving 98% on-time delivery rate",
      "Reduced system downtime by 75% through microservices migration",
      "Reduced deployment time from 2 days to 2 hours with 99.99% uptime",
      "Established mentorship program with 90% team retention",
      "Reduced monthly AWS costs by $25K while improving performance"
    ],
    tags: ["Technical Leadership", "Cloud Architecture", "DevOps Excellence"]
  },
  {
    company: "Sublime Data Systems",
    role: "Sr Software Engineer",
    period: "Jan 2018 - July 2019",
    description: "Architected and led development of scalable systems serving millions of users while mentoring junior developers.",
    impact: {
      icon: <Target className="h-5 w-5" />,
      metric: "300%",
      text: "User Growth"
    },
    achievements: [
      "Designed architecture handling 1M+ daily active users",
      "Reduced API response time by 60% through optimization",
      "Implemented zero-trust security architecture",
      "Mentored 8 junior developers with 5 receiving promotions",
      "Created ML-powered anomaly detection system"
    ],
    tags: ["System Architecture", "Performance", "Security"]
  },
  {
    company: "IIH Global",
    role: "Software Engineer",
    period: "April 2014 - Jan 2018",
    description: "Delivered high-impact features and optimizations while establishing robust development practices.",
    impact: {
      icon: <Code className="h-5 w-5" />,
      metric: "95%",
      text: "Client Satisfaction"
    },
    achievements: [
      "Delivered 20+ major features with 99.9% uptime",
      "Reduced bug rate by 45% through automated testing",
      "Improved application load time by 65%",
      "Created internal tools saving 20+ hours per week",
      "Led payment gateway integration processing $10M+ monthly"
    ],
    tags: ["Feature Development", "Quality Assurance", "Performance"]
  },
  {
    company: "Eternalsoft Solutions",
    role: "Software Engineer",
    period: "Jan 2012 - March 2014",
    description: "Contributed to core feature development and established foundational development practices.",
    impact: {
      icon: <Cpu className="h-5 w-5" />,
      metric: "30%",
      text: "Bug Reduction"
    },
    achievements: [
      "Delivered 15+ core features with high uptime",
      "Implemented testing practices reducing bug rate by 30%",
      "Enhanced application load times by 50%",
      "Developed automation saving 10 hours per week",
      "Supported cross-functional collaboration initiatives"
    ],
    tags: ["Development", "Testing", "Automation"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-indigo-50 rounded-xl mb-4">
            <Award className="h-8 w-8 text-indigo-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Journey</h2>
          <p className="text-xl text-gray-600 text-center max-w-2xl">
            Over a decade of transforming complex technical challenges into scalable solutions
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} 
                 className="group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 
                          hover:border-indigo-500 transition-all duration-300
                          hover:shadow-indigo-100">
              {/* Timeline connector */}
              {index !== experiences.length - 1 && (
                <div className="absolute -bottom-12 left-0 w-px h-12 bg-gradient-to-b from-indigo-500 to-transparent ml-11"></div>
              )}
              
              <div className="absolute -left-3 top-10 w-6 h-6 bg-indigo-600 rounded-full 
                            group-hover:animate-ping opacity-0 group-hover:opacity-20"></div>
              <div className="absolute -left-3 top-10 w-6 h-6 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full 
                            shadow-lg shadow-indigo-200/50"></div>
              
              <div className="grid md:grid-cols-[2fr,1fr] gap-8">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-indigo-50 rounded-xl group-hover:bg-indigo-100 transition-colors">
                      <Building2 className="h-8 w-8 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Briefcase className="h-4 w-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">{exp.description}</p>

                  <div className="space-y-3 mb-6">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-2 text-gray-700">
                        <ChevronRight className="h-5 w-5 text-indigo-500 mt-0.5 shrink-0" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <span key={i} 
                            className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm
                                     group-hover:bg-indigo-100 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full text-indigo-700 w-fit">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white rounded-lg shadow-sm">
                        {exp.impact.icon}
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-indigo-600">{exp.impact.metric}</div>
                        <div className="text-sm text-gray-600">{exp.impact.text}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}