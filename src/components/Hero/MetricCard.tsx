import React from 'react';
import { motion } from 'framer-motion';
import { useMetricsAnimation } from './useMetricsAnimation';

interface MetricCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  sublabel: string;
  color: string;
  index: number;
}

export default function MetricCard({ icon, value, label, sublabel, color, index }: MetricCardProps) {
  const valueRef = useMetricsAnimation(value);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} 
                    rounded-2xl transform transition-all duration-300 group-hover:scale-105`} />
      <div className="relative p-6 rounded-2xl backdrop-blur-sm">
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="p-3 bg-white/10 rounded-xl">{icon}</div>
          <div className="space-y-1">
            <div ref={valueRef} className="text-3xl font-bold text-white">{value}</div>
            <div className="text-sm font-medium text-white/90">{label}</div>
            <div className="text-xs text-white/80">{sublabel}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}