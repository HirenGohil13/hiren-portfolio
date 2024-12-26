import React from 'react';

interface GradientProps {
  children: React.ReactNode;
  from?: string;
  to?: string;
  className?: string;
}

export default function Gradient({ 
  children, 
  from = 'from-primary-600',
  to = 'to-secondary-600',
  className = ''
}: GradientProps) {
  return (
    <span className={`bg-gradient-to-r ${from} ${to} bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
}