import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Zap, TrendingUp } from 'lucide-react';

const highlights = [
  {
    icon: <Award className="h-5 w-5" />,
    title: "Technical Leadership",
    metrics: [
      "Led 15+ developers across 3 continents",
      "98% team retention rate",
      "40+ successful project deliveries"
    ]
  },
  {
    icon: <Target className="h-5 w-5" />,
    title: "System Architecture",
    metrics: [
      "75% reduction in system downtime",
      "60% improvement in application performance",
      "99.99% system availability"
    ]
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Innovation Impact",
    metrics: [
      "Reduced deployment time by 80%",
      "Cut infrastructure costs by 40%",
      "Automated 70% of manual processes"
    ]
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: "Business Growth",
    metrics: [
      "Supported 300% user base growth",
      "Enabled $5M+ in new revenue",
      "Reduced operational costs by 45%"
    ]
  }
];

const CareerHighlights: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Career Highlights</h3>
      <div className="grid gap-8">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100 transition-colors">
                {item.icon}
              </div>
              <h4 className="font-semibold text-gray-900">{item.title}</h4>
            </div>
            <div className="grid gap-2 pl-11">
              {item.metrics.map((metric, idx) => (
                <div key={idx} className="flex items-center gap-2 text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  <span>{metric}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CareerHighlights;