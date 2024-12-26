import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Cloud, Terminal, Globe, Cpu } from 'lucide-react';

const technologies = [
  {
    category: "Frontend",
    icon: <Globe className="h-5 w-5" />,
    items: ["React", "Vue.js", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    category: "Backend",
    icon: <Terminal className="h-5 w-5" />,
    items: ["Node.js", "Python", "Go", "GraphQL", "REST APIs"]
  },
  {
    category: "Database",
    icon: <Database className="h-5 w-5" />,
    items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"]
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud className="h-5 w-5" />,
    items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"]
  },
  {
    category: "Architecture",
    icon: <Cpu className="h-5 w-5" />,
    items: ["Microservices", "Event-Driven", "Serverless", "DDD"]
  }
];

export default function TechStack() {
  return (
    <div>
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 
                        text-sm font-medium mb-4">
            Tech Stack
          </span>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Technologies I Work With</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl 
                     border border-gray-100 hover:border-indigo-500 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 
                           group-hover:bg-indigo-100 transition-colors duration-300">
                {tech.icon}
              </div>
              <h4 className="font-semibold text-gray-900">{tech.category}</h4>
            </div>
            <div className="space-y-2">
              {tech.items.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}