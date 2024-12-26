import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Zap } from 'lucide-react';

const achievements = [
  {
    icon: <Users className="h-5 w-5" />,
    title: "Team Growth",
    description: "Built and led high-performing engineering teams",
    metrics: [
      "15+ developers mentored",
      "98% team retention rate",
      "90% internal promotion rate"
    ]
  },
  {
    icon: <Target className="h-5 w-5" />,
    title: "Project Success",
    description: "Delivered complex projects on time and within budget",
    metrics: [
      "100% project completion rate",
      "95% client satisfaction",
      "$5M+ revenue impact"
    ]
  },
  {
    icon: <Award className="h-5 w-5" />,
    title: "Process Improvement",
    description: "Implemented efficient development workflows",
    metrics: [
      "50% faster deployment cycles",
      "70% reduction in bugs",
      "85% code coverage"
    ]
  }
];

const LeadershipAchievements: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Leadership Achievements</h3>
      <div className="space-y-8">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100 transition-colors">
                {achievement.icon}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                <p className="text-sm text-gray-600">{achievement.description}</p>
              </div>
            </div>
            <div className="pl-12 grid gap-2">
              {achievement.metrics.map((metric, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  <span className="text-gray-700">{metric}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default LeadershipAchievements;