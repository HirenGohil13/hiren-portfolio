import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Users, Cloud, Shield, GitBranch, Workflow } from 'lucide-react';

const responsibilities = [
  {
    icon: <Code2 className="h-5 w-5" />,
    title: "Technical Architecture",
    description: "Designing and implementing scalable cloud-native solutions"
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Team Leadership",
    description: "Leading and mentoring teams of 15+ developers across global locations"
  },
  {
    icon: <Cloud className="h-5 w-5" />,
    title: "Cloud Infrastructure",
    description: "Managing AWS infrastructure and implementing DevOps practices"
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Quality Assurance",
    description: "Establishing coding standards and best practices"
  },
  {
    icon: <GitBranch className="h-5 w-5" />,
    title: "CI/CD Pipeline",
    description: "Implementing automated deployment and testing workflows"
  },
  {
    icon: <Workflow className="h-5 w-5" />,
    title: "Agile Practices",
    description: "Leading sprint planning and agile ceremonies"
  }
];

const KeyResponsibilities: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Responsibilities</h3>
      <div className="grid gap-6">
        {responsibilities.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-4 group"
          >
            <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100 transition-colors">
              {item.icon}
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default KeyResponsibilities;