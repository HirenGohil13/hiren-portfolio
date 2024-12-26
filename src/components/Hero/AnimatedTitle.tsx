import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';

interface AnimatedTitleProps {
  mainText: string;
  typedTexts: string[];
}

export default function AnimatedTitle({ mainText, typedTexts }: AnimatedTitleProps) {
  const typedRef = useRef(null);
  
  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: typedTexts,
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true
    });

    return () => typed.destroy();
  }, [typedTexts]);

  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-6xl md:text-7xl font-bold text-gray-900 tracking-tight mb-6"
    >
      {mainText}
      <motion.span 
        className="block mt-2 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Through <span ref={typedRef}></span>
      </motion.span>
    </motion.h1>
  );
}