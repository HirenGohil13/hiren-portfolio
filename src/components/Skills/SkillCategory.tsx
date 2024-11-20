import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import SkillItem from './SkillItem';

interface Skill {
  name: string;
  level: string;
}

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  color: string;
  skills: Skill[];
  index: number;
}

export default function SkillCategory({ title, icon, color, skills, index }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl 
                 transition-all duration-300 border border-gray-100"
    >
      <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 
                    transition-opacity duration-300 rounded-2xl"
           style={{ background: `linear-gradient(90deg, ${color.split(' ')[1]}, ${color.split(' ')[2]})` }} />
      
      <div className="flex items-center gap-4 mb-8">
        <div className={`p-3 rounded-xl bg-gradient-to-r ${color} text-white
                        transform group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      </div>

      <div className="space-y-4">
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}