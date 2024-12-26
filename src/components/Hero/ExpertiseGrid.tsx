import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Terminal, 
  Users, 
  Brain, 
  Cloud, 
  Award,
  Blocks,
  FileCode,
  Git,
  Database
} from 'lucide-react';

const expertise = [
  {
    icon: <Code2 className="h-5 w-5" />,
    title: "Lead Engineer",
    description: "Technical leadership & architecture",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Blocks className="h-5 w-5" />,
    title: "Full Stack Developer",
    description: "Node • React • Vue • Laravel • TypeScript • JavaScript",
    color: "from-indigo-500 to-purple-500",
    technologies: [
      { icon: <Terminal className="h-4 w-4" />, name: "Node.js" },
      { icon: <FileCode className="h-4 w-4" />, name: "React & Vue" },
      { icon: <Database className="h-4 w-4" />, name: "Laravel" },
      { icon: <Git className="h-4 w-4" />, name: "TypeScript" }
    ]
  },
  {
    icon: <Award className="h-5 w-5" />,
    title: "Certified Scrum Master",
    description: "Agile methodologies expert",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: <Cloud className="h-5 w-5" />,
    title: "AWS & DevOps Enthusiast",
    description: "Cloud architecture & CI/CD",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Agile Leader",
    description: "Team leadership & mentoring",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <Brain className="h-5 w-5" />,
    title: "AI Enthusiast",
    description: "AI/ML integration specialist",
    color: "from-yellow-500 to-amber-500"
  }
];

export default function ExpertiseGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
          }
        }}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {expertise.map((skill, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
            whileHover={{ y: -5 }}
            className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl 
                     border border-gray-100 hover:border-indigo-500 transition-all duration-300"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} 
                          opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
            
            <div className="relative">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} text-white 
                           mb-4 w-fit transform group-hover:scale-110 transition-transform duration-300`}>
                {skill.icon}
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{skill.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{skill.description}</p>

              {skill.technologies && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {skill.technologies.map((tech, i) => (
                    <div key={i} className="flex items-center gap-1 px-2 py-1 bg-gray-50 
                                        rounded-full text-xs text-gray-600">
                      {tech.icon}
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}