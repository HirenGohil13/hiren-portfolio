import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Rocket, Star, Zap } from 'lucide-react';
import MetricCard from './MetricCard';

const metrics = [
  { icon: <Globe className="h-6 w-6 text-white" />, value: "15+", label: "Years", sublabel: "Experience" },
  { icon: <Rocket className="h-6 w-6 text-white" />, value: "50+", label: "Projects", sublabel: "Delivered" },
  { icon: <Zap className="h-6 w-6 text-white" />, value: "98%", label: "Success", sublabel: "Rate" },
  { icon: <Star className="h-6 w-6 text-white" />, value: "40+", label: "Team Size", sublabel: "Led" }
];

export default function MetricsGrid() {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.1 }
        }
      }}
      initial="hidden"
      animate="show"
      className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
    >
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} index={index} />
      ))}
    </motion.div>
  );
}