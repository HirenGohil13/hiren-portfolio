import React from 'react';
import { motion } from 'framer-motion';

interface SkillItemProps {
  skill: {
    name: string;
    level: string;
  };
}

export default function SkillItem({ skill }: SkillItemProps) {
  return (
    <motion.div
      whileHover={{ x: 10 }}
      className="relative"
    >
      <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 
                      group-hover:bg-white/80 backdrop-blur-sm transition-all duration-300">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
          <span className="font-medium text-gray-900">{skill.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-24 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
              style={{ 
                width: skill.level === 'Expert' ? '100%' : '85%',
                transition: 'width 1s ease-in-out'
              }}
            />
          </div>
          <span className="text-sm text-gray-600 min-w-[60px]">{skill.level}</span>
        </div>
      </div>
    </motion.div>
  );
}