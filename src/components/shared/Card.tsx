import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5 } : undefined}
      className={`
        bg-white rounded-xl shadow-lg hover:shadow-xl
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}