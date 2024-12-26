import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const milestones = [
  {
    year: "2023",
    title: "Technical Leadership Excellence",
    description: "Leading innovative projects and mentoring teams across global organizations.",
    icon: <Award className="h-6 w-6 text-indigo-600" />
  },
  {
    year: "2019",
    title: "Tech Lead at Sixberries",
    description: "Spearheading technical initiatives and driving architectural decisions.",
    icon: <Briefcase className="h-6 w-6 text-indigo-600" />
  },
  {
    year: "2014",
    title: "Senior Software Engineer",
    description: "Mastering complex systems and leading development teams.",
    icon: <Briefcase className="h-6 w-6 text-indigo-600" />
  },
  {
    year: "2011",
    title: "Computer Engineering Graduate",
    description: "Built strong foundations in software engineering principles.",
    icon: <GraduationCap className="h-6 w-6 text-indigo-600" />
  }
];

export default function JourneyTimeline() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-600 to-purple-600" />

        {/* Timeline Items */}
        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-12"
            >
              {/* Icon */}
              <div className="absolute left-0 p-2 bg-white rounded-full border-2 border-indigo-600">
                {milestone.icon}
              </div>

              {/* Content */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-sm font-semibold text-indigo-600 mb-1">
                  {milestone.year}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {milestone.title}
                </h3>
                <p className="text-gray-600">
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}