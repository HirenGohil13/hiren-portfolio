import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../shared';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

export default function ValueCard({ icon, title, description, index }: ValueCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="p-6 h-full">
        <div className="flex flex-col items-center text-center">
          <div className="p-3 rounded-xl bg-gray-50 mb-4">
            {icon}
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {title}
          </h3>
          <p className="text-gray-600">
            {description}
          </p>
        </div>
      </Card>
    </motion.div>
  );
}