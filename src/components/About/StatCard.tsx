import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
  index: number;
}

export default function StatCard({ icon, value, label, description, index }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl 
                border border-gray-100 hover:border-indigo-500 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 
                    opacity-0 group-hover:opacity-100 rounded-2xl transition-all duration-300" />
      
      <div className="relative">
        <div className="p-3 rounded-xl bg-white shadow-sm inline-block mb-4 
                     group-hover:shadow-md transition-all duration-300">
          {icon}
        </div>
        <div className="space-y-1">
          <div className="text-3xl font-bold text-gray-900">{value}</div>
          <div className="text-sm font-medium text-indigo-600">{label}</div>
          <div className="text-sm text-gray-500">{description}</div>
        </div>
      </div>
    </motion.div>
  );
}