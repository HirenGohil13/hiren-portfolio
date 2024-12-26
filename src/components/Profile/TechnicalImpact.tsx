import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Cloud, Lock } from 'lucide-react';

const impacts = [
  {
    title: "Cloud Migration",
    description: "Successfully migrated legacy monolith to microservices architecture on AWS",
    metrics: [
      "40% reduction in operational costs",
      "75% improvement in deployment frequency",
      "99.99% uptime achievement"
    ]
  },
  {
    title: "Performance Optimization",
    description: "Led system-wide performance enhancement initiatives",
    metrics: [
      "60% reduction in API response time",
      "80% improvement in application load time",
      "50% reduction in database queries"
    ]
  },
  {
    title: "Security Implementation",
    description: "Established robust security practices and protocols",
    metrics: [
      "Zero security breaches",
      "100% compliance achievement",
      "Implementation of zero-trust architecture"
    ]
  }
];

const TechnicalImpact: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 text-white"
    >
      <h3 className="text-2xl font-bold mb-6">Technical Impact</h3>
      <div className="space-y-8">
        {impacts.map((impact, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/10 rounded-xl p-6 backdrop-blur-sm"
          >
            <h4 className="text-xl font-semibold mb-2">{impact.title}</h4>
            <p className="text-white/80 mb-4">{impact.description}</p>
            <div className="grid gap-2">
              {impact.metrics.map((metric, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span className="text-sm text-white/90">{metric}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TechnicalImpact;