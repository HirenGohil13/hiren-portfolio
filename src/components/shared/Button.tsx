import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
}

const variants = {
  primary: `
    bg-gradient-to-r from-primary-600 to-secondary-600 
    text-white shadow-lg shadow-primary-200/50
    hover:from-primary-700 hover:to-secondary-700
  `,
  secondary: `
    bg-white text-primary-600 
    shadow-lg shadow-primary-100/50 
    hover:shadow-primary-200/50
    border border-primary-100 hover:border-primary-200
  `,
  outline: `
    border-2 border-primary-600 text-primary-600
    hover:bg-primary-50
  `,
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({ 
  children, 
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = ''
}: ButtonProps) {
  const Component = href ? motion.a : motion.button;
  
  return (
    <Component
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        inline-flex items-center justify-center
        rounded-xl font-medium
        transition-all duration-300
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
    </Component>
  );
}