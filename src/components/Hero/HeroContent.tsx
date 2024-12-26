import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { useTypewriter } from '@hooks/useTypewriter';
import { Button } from '@components/shared';

const HeroContent: React.FC = () => {
  const text = useTypewriter({
    words: ['Engineering Excellence', 'Cloud Architecture', 'Technical Innovation'],
    loop: true,
    delaySpeed: 2000
  });

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
      <div className="max-w-3xl mx-auto text-center">
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-6"
        >
          Transforming Vision Into
          <span className="block mt-2 bg-gradient-to-r from-indigo-600 to-purple-600 
                       bg-clip-text text-transparent">
            {text}
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-600 mb-12 leading-relaxed"
        >
          Senior Software Engineer specializing in building exceptional digital experiences.
          Focused on creating scalable solutions and leading high-performing teams.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Button href="#contact" variant="primary" size="lg">
            Let's Connect
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button href="#projects" variant="secondary" size="lg">
            View Projects
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center gap-6"
        >
          {[
            { icon: <Github />, href: "https://github.com", label: "GitHub" },
            { icon: <Linkedin />, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: <Mail />, href: "mailto:contact@example.com", label: "Email" }
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg 
                       border border-gray-100 text-gray-600 hover:text-indigo-600 
                       transition-colors duration-300"
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default HeroContent;