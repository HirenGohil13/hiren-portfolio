import React from 'react';
import { motion } from 'framer-motion';

interface ExpertiseCardProps {
  icon: React.ReactNode;
  text: string;
  color: string;
  index: number;
}

export default function ExpertiseCard({ icon, text, color, index }: ExpertiseCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0 }
      }}
      whileHover={{ scale: 1.05 }}
      className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-100 
                    rounded-xl transition-opacity duration-300 blur`} />
      <div className="relative bg-white p-4 rounded-xl shadow-lg group-hover:shadow-xl 
                    border border-gray-100 group-hover:border-transparent transition-all duration-300">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg bg-gradient-to-r ${color}`}>
            {icon}
          </div>
          <span className="font-semibold text-gray-800">{text}</span>
        </div>
      </div>
    </motion.div>
  );
}