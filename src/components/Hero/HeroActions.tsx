import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const HeroActions: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r 
                    from-indigo-600 to-purple-600 text-white rounded-xl overflow-hidden 
                    shadow-lg shadow-indigo-200/50"
        >
          <span className="relative z-10">Let's Connect</span>
          <ArrowRight className="h-5 w-5" />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.a>

        <motion.a
          href="#experience"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-8 py-3 bg-white text-indigo-600 rounded-xl 
                    shadow-lg shadow-indigo-100/50 hover:shadow-indigo-200/50 
                    border border-indigo-100 hover:border-indigo-200 transition-all duration-300"
        >
          View Experience
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex justify-center gap-6"
      >
        {[
          { icon: <Github />, href: "https://github.com", label: "GitHub" },
          { icon: <Linkedin />, href: "https://linkedin.com", label: "LinkedIn" },
          { icon: <Mail />, href: "mailto:contact@example.com", label: "Email" }
        ].map((social) => (
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
  );
};

export default HeroActions;