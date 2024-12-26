import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  sublabel: string;
  index: number;
}

export default function MetricCard({ icon, value, label, sublabel, index }: MetricCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
      whileHover={{ y: -5 }}
      className="group relative bg-gradient-to-br from-indigo-600 to-purple-600 p-6 rounded-xl 
                shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300" />
      <div className="relative text-white text-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="inline-flex p-3 rounded-xl bg-white/10 backdrop-blur-sm mb-4"
        >
          {icon}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          className="text-3xl font-bold mb-1"
        >
          {value}
        </motion.div>
        <div className="text-sm font-medium text-white/90">{label}</div>
        <div className="text-xs text-white/70">{sublabel}</div>
      </div>
    </motion.div>
  );
}