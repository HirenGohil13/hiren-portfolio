import React from 'react';
import { motion } from 'framer-motion';

interface ToolItemProps {
  icon: React.ReactNode;
  name: string;
}

export default function ToolItem({ icon, name }: ToolItemProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm
                hover:shadow-md transition-all duration-300"
    >
      <span className="text-indigo-600">{icon}</span>
      <span className="font-medium text-gray-700">{name}</span>
    </motion.div>
  );
}