import React from 'react';
import { motion } from 'framer-motion';
import { useTypewriter } from '../../hooks/useTypewriter';

const HeroHeading: React.FC = () => {
  const text = useTypewriter({
    words: ['Engineering Excellence', 'Cloud Architecture', 'Technical Innovation', 'Team Leadership'],
    loop: true,
    delaySpeed: 2000
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12"
    >
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-6">
        Transforming Vision Into
        <span className="block mt-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          {text}
        </span>
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Senior Software Engineer specializing in scalable solutions and high-performance team leadership. 
        Driving innovation through modern architecture and cutting-edge technologies.
      </p>
    </motion.div>
  );
};

export default HeroHeading;