import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Users, Cloud, Shield, GitBranch, Workflow, Database, Monitor, Lightbulb, Layers, TrendingUp, Book } from 'lucide-react';

const responsibilities = [
  {
    icon: <Code2 className="h-5 w-5" />,
    title: "Technical Leadership",
    description: "Architecting and driving the implementation of scalable, cloud-native solutions."
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Team Leadership & Mentorship",
    description: "Leading, mentoring, and growing teams of 15+ developers across global locations to achieve excellence."
  },
  {
    icon: <Cloud className="h-5 w-5" />,
    title: "Cloud Infrastructure Strategy",
    description: "Overseeing AWS infrastructure, optimizing cloud architecture, and driving DevOps best practices."
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Quality Assurance & Best Practices",
    description: "Establishing high coding standards and fostering a culture of continuous improvement."
  },
  {
    icon: <GitBranch className="h-5 w-5" />,
    title: "CI/CD Pipeline Optimization",
    description: "Leading the implementation of automated deployment, testing, and continuous integration workflows."
  },
  {
    icon: <Workflow className="h-5 w-5" />,
    title: "Agile Project Leadership",
    description: "Guiding sprint planning, retrospectives, and agile ceremonies to ensure project alignment and timely delivery."
  },
  {
    icon: <Database className="h-5 w-5" />,
    title: "Data Management & Architecture",
    description: "Designing, optimizing, and ensuring data integrity through robust database schemas and architectures."
  },
  {
    icon: <Monitor className="h-5 w-5" />,
    title: "System Monitoring & Proactive Management",
    description: "Implementing and maintaining monitoring, logging, and alerting systems for proactive issue resolution."
  },
  {
    icon: <Lightbulb className="h-5 w-5" />,
    title: "Technical Innovation & Research",
    description: "Researching emerging technologies and integrating them to drive system performance and innovation."
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Security & Compliance Oversight",
    description: "Ensuring the highest levels of security and compliance with industry standards and regulations."
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: "Cross-Functional Collaboration",
    description: "Collaborating with product managers, designers, and other stakeholders to align technical solutions with business needs."
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: "Performance & Scalability Optimization",
    description: "Driving performance improvements and scalability through code, architecture, and infrastructure enhancements."
  },
  {
    icon: <Book className="h-5 w-5" />,
    title: "Knowledge Sharing & Growth",
    description: "Leading technical workshops and sharing knowledge to elevate the team’s skill set and foster continuous learning."
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