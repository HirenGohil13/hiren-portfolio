import React from 'react';
import { motion } from 'framer-motion';
import { Award, Cpu, Users, Cloud } from 'lucide-react';

const achievements = [
  {
    icon: <Cloud className="h-5 w-5" />,
    title: "Cloud Transformation",
    description: "Led migration of 200+ microservices to AWS, reducing operational costs by 40%",
    metric: "40% Cost Reduction"
  },
  {
    icon: <Cpu className="h-5 w-5" />,
    title: "System Architecture",
    description: "Redesigned core platform architecture, improving response times by 300%",
    metric: "300% Faster"
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Team Growth",
    description: "Built and mentored high-performing engineering teams across 3 continents",
    metric: "98% Retention"
  }
];

export default function AchievementHighlights() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {achievements.map((achievement, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl 
                   border border-gray-100 hover:border-indigo-500 transition-all duration-300"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600 
                         group-hover:bg-indigo-100 transition-colors duration-300">
              {achievement.icon}
            </div>
            <h3 className="font-semibold text-gray-900">{achievement.title}</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">{achievement.description}</p>
          <div className="flex items-center gap-2 text-indigo-600 font-semibold">
            <Award className="h-4 w-4" />
            <span>{achievement.metric}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}