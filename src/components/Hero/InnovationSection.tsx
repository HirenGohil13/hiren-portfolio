import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Lightbulb, Rocket, Code2, Users, Target, Workflow } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const innovationPoints = [
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Innovative Solutions",
    description: "Transforming complex challenges into elegant solutions through cutting-edge technology.",
    color: "from-amber-500 to-orange-500"
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Technical Excellence",
    description: "Building robust, scalable systems with modern architecture and best practices.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Team Empowerment",
    description: "Fostering a culture of growth, collaboration, and continuous learning.",
    color: "from-green-500 to-emerald-500"
  }
];

const achievements = [
  {
    icon: <Rocket />,
    title: "Cloud Migration Success",
    description: "Led successful migration of legacy systems to cloud infrastructure, reducing costs by 40%",
    stats: "40% Cost Reduction"
  },
  {
    icon: <Target />,
    title: "Performance Optimization",
    description: "Improved system response time by 65% through innovative architecture solutions",
    stats: "65% Faster"
  },
  {
    icon: <Workflow />,
    title: "Process Automation",
    description: "Implemented CI/CD pipelines reducing deployment time from days to minutes",
    stats: "98% Time Saved"
  }
];

export default function InnovationSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-gradient-to-br from-secondary-100 to-primary-100 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Innovation Points */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            Driving Innovation Through
            <span className="block mt-2 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Technology & Leadership
            </span>
          </motion.h2>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-8 mb-20">
          {innovationPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl 
                       border border-gray-100 hover:border-primary-500 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${point.color} opacity-0 
                            group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />
              <div className={`p-4 rounded-xl bg-gradient-to-r ${point.color} text-white 
                            mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                {point.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div 
          style={{ scale }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Proven Track Record</h3>
            <p className="text-gray-300">Delivering measurable results through innovative solutions</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 
                              rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-6 rounded-xl border border-gray-700 group-hover:border-primary-500 
                              transition-colors duration-300">
                  <div className="p-3 bg-gray-800 rounded-lg w-fit mb-4 text-primary-400 
                                group-hover:text-primary-300 transition-colors duration-300">
                    {achievement.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{achievement.title}</h4>
                  <p className="text-gray-400 mb-4">{achievement.description}</p>
                  <div className="text-2xl font-bold text-primary-400 group-hover:text-primary-300 
                                transition-colors duration-300">
                    {achievement.stats}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}