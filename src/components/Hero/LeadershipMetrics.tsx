import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Rocket, Award } from 'lucide-react';

const metrics = [
  {
    icon: <Users className="h-6 w-6 text-white" />,
    value: "50+",
    label: "Team Members",
    description: "Led & Mentored"
  },
  {
    icon: <Target className="h-6 w-6 text-white" />,
    value: "99.9%",
    label: "Project Success",
    description: "On-time Delivery"
  },
  {
    icon: <Rocket className="h-6 w-6 text-white" />,
    value: "40%",
    label: "Cost Reduction",
    description: "Cloud Optimization"
  },
  {
    icon: <Award className="h-6 w-6 text-white" />,
    value: "15+",
    label: "Years",
    description: "Tech Leadership"
  }
];

const LeadershipMetrics: React.FC = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {metrics.map((metric, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 
                       rounded-2xl transform transition-all duration-300 group-hover:scale-105" />
          <div className="relative bg-gradient-to-br from-indigo-600/95 to-purple-600/95 
                       rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 bg-white/10 rounded-xl">
                {metric.icon}
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-white">{metric.value}</div>
                <div className="text-sm font-medium text-white/90">{metric.label}</div>
                <div className="text-xs text-white/80">{metric.description}</div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default LeadershipMetrics;