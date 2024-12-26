import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cloud, Users, Brain } from 'lucide-react';

const achievements = [
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Cloud Architecture",
    description: "Led cloud transformation reducing infrastructure costs by 40% while improving scalability",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Team Leadership",
    description: "Built and mentored high-performing engineering teams across 3 continents",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Technical Excellence",
    description: "Implemented microservices architecture serving millions of users",
    color: "from-amber-500 to-red-500"
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Innovation",
    description: "Pioneered AI-driven solutions increasing operational efficiency by 60%",
    color: "from-green-500 to-emerald-500"
  }
];

const KeyAchievements: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl 
                     border border-gray-100 hover:border-indigo-500 transition-all duration-300"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} 
                          opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
            <div className="relative">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${achievement.color} text-white 
                           mb-4 w-fit transform group-hover:scale-110 transition-transform duration-300`}>
                {achievement.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default KeyAchievements;