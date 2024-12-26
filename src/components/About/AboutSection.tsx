import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Target, Rocket, Users, Award } from 'lucide-react';
import { Button } from '../shared';
import StatCard from './StatCard';
import TechStack from './TechStack';

const stats = [
  {
    icon: <Rocket className="h-6 w-6 text-rose-500" />,
    value: "15+",
    label: "Years Experience",
    description: "Building scalable solutions"
  },
  {
    icon: <Users className="h-6 w-6 text-blue-500" />,
    value: "50+",
    label: "Team Members",
    description: "Led and mentored"
  },
  {
    icon: <Target className="h-6 w-6 text-green-500" />,
    value: "99.9%",
    label: "Project Success",
    description: "Consistent delivery"
  },
  {
    icon: <Award className="h-6 w-6 text-amber-500" />,
    value: "25+",
    label: "Enterprise Projects",
    description: "Successfully delivered"
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-gradient-to-br from-indigo-100/40 to-purple-100/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-cyan-100/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - About Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 
                          text-sm font-medium mb-4">
              About Me
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Transforming Ideas into
              <span className="block mt-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Scalable Solutions
              </span>
            </h2>
            <div className="prose prose-lg text-gray-600 mb-8">
              <p>
                As a passionate tech leader, I specialize in architecting and delivering innovative 
                solutions that drive business growth. With expertise spanning cloud architecture, 
                microservices, and team leadership, I bring a holistic approach to every project.
              </p>
              <p>
                My focus lies in creating scalable systems that not only solve complex technical 
                challenges but also empower teams to achieve their highest potential.
              </p>
            </div>
            <div className="flex gap-4">
              <Button href="#contact" variant="primary" size="lg">
                Let's Connect
              </Button>
              <Button href="#experience" variant="secondary" size="lg">
                View Experience
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} index={index} />
            ))}
          </div>
        </div>

        {/* Tech Stack Section */}
        <TechStack />
      </div>
    </section>
  );
}