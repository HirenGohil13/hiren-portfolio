import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Database, Brain, Shield, Target, Award, Rocket, Star, Globe, Zap, Layers } from 'lucide-react';
import Typed from 'typed.js';

export default function Hero() {
  const typedRef = useRef(null);
  
  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Engineering Excellence',
        'Cloud Architecture',
        'Technical Innovation',
        'Team Leadership'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true
    });

    return () => typed.destroy();
  }, []);

  const expertise = [
    { icon: <Code2 className="h-5 w-5" />, text: "Lead Engineer", color: "from-blue-500 to-cyan-500" },
    { icon: <Database className="h-5 w-5" />, text: "Full Stack", color: "from-purple-500 to-pink-500" },
    { icon: <Target className="h-5 w-5" />, text: "Scrum Master", color: "from-amber-500 to-red-500" },
    { icon: <Brain className="h-5 w-5" />, text: "AI Expert", color: "from-green-500 to-emerald-500" },
    { icon: <Shield className="h-5 w-5" />, text: "AWS Certified", color: "from-indigo-500 to-purple-500" },
    { icon: <Layers className="h-5 w-5" />, text: "Architect", color: "from-rose-500 to-orange-500" }
  ];

  const metrics = [
    { icon: <Globe className="h-6 w-6 text-white" />, value: "15+", label: "Years", sublabel: "Experience" },
    { icon: <Rocket className="h-6 w-6 text-white" />, value: "50+", label: "Projects", sublabel: "Delivered" },
    { icon: <Zap className="h-6 w-6 text-white" />, value: "98%", label: "Success", sublabel: "Rate" },
    { icon: <Star className="h-6 w-6 text-white" />, value: "40+", label: "Team Size", sublabel: "Led" }
  ];

  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden bg-gray-50">
      {/* Background with proper z-index */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50" />
      </div>

      {/* Floating Orbs with proper z-index */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:block w-72 h-72 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl z-0"
          animate={{
            x: [0, 30, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            delay: i * 2,
            ease: "linear",
          }}
          style={{
            top: `${20 + i * 30}%`,
            left: `${10 + i * 40}%`,
            opacity: 0.4 - i * 0.1,
          }}
        />
      ))}

      {/* Main Content with proper z-index */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-xl shadow-indigo-100/50 border border-indigo-100 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
            </span>
            <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Available for Technical Leadership Roles
            </span>
          </motion.div>

          {/* Main Content */}
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-7xl font-bold text-gray-900 tracking-tight mb-6"
            >
              Transforming Vision
              <span className="block mt-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Into <span ref={typedRef}></span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              A visionary engineering leader with a proven track record in building scalable solutions 
              and high-performing teams. Driving innovation through cloud architecture, microservices, 
              and cutting-edge technologies.
            </motion.p>
          </div>

          {/* Expertise Grid */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12"
          >
            {expertise.map((skill, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 }
                }}
                whileHover={{ scale: 1.05 }}
                className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-100 
                              rounded-xl transition-opacity duration-300 blur`} />
                <div className="relative bg-white p-4 rounded-xl shadow-lg group-hover:shadow-xl 
                              border border-gray-100 group-hover:border-transparent transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color}`}>
                      {skill.icon}
                    </div>
                    <span className="font-semibold text-gray-800">{skill.text}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Metrics Grid */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -5 }}
                className="group relative bg-gradient-to-br from-indigo-600 to-purple-600 p-6 rounded-xl 
                          shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300" />
                <div className="relative text-white text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="inline-flex p-3 rounded-xl bg-white/10 backdrop-blur-sm mb-4"
                  >
                    {metric.icon}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="text-3xl font-bold mb-1"
                  >
                    {metric.value}
                  </motion.div>
                  <div className="text-sm font-medium text-white/90">{metric.label}</div>
                  <div className="text-xs text-white/70">{metric.sublabel}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
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
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.span>
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
        </div>
      </div>
    </section>
  );
}