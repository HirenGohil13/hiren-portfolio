import { Briefcase, Building2, Calendar, ChevronRight, Award, Cpu, Target } from 'lucide-react';

const experiences = [
  {
    company: "Sixberries Ltd",
    role: "Lead Engineer",
    period: "July 2019 - Present",
    description: "Led a team of 15+ developers, driving technical innovation, architectural excellence, and Agile transformations to deliver high-impact solutions.",
    impact: {
      icon: <Target className='h-5 w-5' />,
      metric: "$2M+",
      text: "Revenue Generated"
    },
    "achievements": [
      "Spearheaded the architectural design and transition to microservices, significantly improving system scalability and resilience.",
      "Drove the adoption of modern DevOps practices, streamlining deployment pipelines and ensuring high system uptime.",
      "Mentored and developed team members, fostering a collaborative and high-performing engineering culture.",
      "Managed cloud infrastructure to enhance performance and optimize costs, aligning with business needs.",
      "Partnered with stakeholders to align technical strategies with business objectives, ensuring continuous value delivery.",
      "Led Agile transformation initiatives, guiding teams in adopting Scrum to improve sprint planning, execution, and delivery timelines.",
      "Facilitated Scrum ceremonies (Sprint Planning, Daily Standups, Sprint Reviews, Retrospectives), ensuring alignment between teams and stakeholders.",
      "Promoted continuous improvement by coaching teams on Agile best practices, helping them iterate on processes for better efficiency and outcomes."
    ],
    "tags": [
      "Technical Leadership",
      "Cloud Architecture",
      "DevOps Excellence",
      "System Design",
      "Agile Development",
      "Scrum Mastery"
    ]
  },
  {
    company: "Sublime Data Systems",
    role: "Sr Software Engineer",
    period: "Jan 2018 - July 2019",
    description: "Developed scalable systems, while mentoring and supporting junior developers",
    impact: {
      icon: <Target className="h-5 w-5" />,
      metric: "200%",
      text: "User Growth"
    },
    achievements: [
  "Reduced API response times by 60% through targeted optimizations, significantly improving system speed and enhancing user satisfaction.",
  "Implemented a zero-trust security model, strengthening the platform's defense mechanisms and ensuring secure data handling at all levels.",
  "Collaborated with cross-functional teams to ensure smooth integration of new features, ensuring alignment between technical solutions and business goals.",
  "Refined development processes by introducing best practices in code quality, version control, and automated testing, improving overall team efficiency.",
  "Led the migration of legacy systems to modern technologies, reducing technical debt and improving system maintainability."
],
    tags: ["System Architecture", "Performance", "Security"]
  },
  {
    company: "IIH Global",
    role: "Software Engineer",
    period: "April 2014 - Jan 2018",
    description: "Worked on developing key features and improving system performance, while helping establish good development practices.",
    impact: {
      icon: <Cpu className='h-5 w-5' />,
      metric: "95%",
      text: "Client Satisfaction"
    },
    achievements: [
      "Delivered 20+ important features with 99.9% system uptime.",
      "Reduced the bug rate by 45% by adding automated tests to improve code quality.",
      "Made the application load 65% faster, improving user experience.",
      "Built internal tools that saved the team over 20 hours a week.",
      "Led the integration of a payment gateway, processing over $10M in transactions each month."
    ],
    tags: [
      "Feature Development",
      "Quality Assurance",
      "Performance Improvement",
      "Automation",
      "Payment Systems"
    ]
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