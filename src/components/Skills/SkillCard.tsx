import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

export default function SkillCard({ title, icon, skills }: SkillCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl 
                    border border-gray-100 hover:border-indigo-500 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl 
                    opacity-0 group-hover:opacity-100 transition-all duration-300" />
      
      <div className="relative">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-xl bg-white shadow-sm text-indigo-600 
                       group-hover:shadow-md transition-all duration-300">
            {icon}
          </div>
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 
                       transition-colors duration-300">
            {title}
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-2">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 p-2 rounded-lg bg-gray-50 group-hover:bg-white 
                       transition-all duration-300"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              <span className="text-sm text-gray-700">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}