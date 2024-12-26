import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Project } from '../types/project';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className={`
            px-3 py-1 rounded-full text-sm font-medium
            ${project.status === 'completed' ? 'bg-green-100 text-green-700' : ''}
            ${project.status === 'in-progress' ? 'bg-yellow-100 text-yellow-700' : ''}
            ${project.status === 'planned' ? 'bg-blue-100 text-blue-700' : ''}
          `}>
            {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4">{project.description}</p>

        {project.metrics && (
          <div className="grid grid-cols-2 gap-4 mb-4">
            {project.metrics.map((metric, i) => (
              <div key={i} className="bg-gray-50 p-3 rounded-lg text-center">
                <div className="text-xl font-bold text-indigo-600">{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span 
              key={i} 
              className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.github && (
            <a 
              href={project.github}
              className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5 mr-1" />
              Code
            </a>
          )}
          {project.link && (
            <a 
              href={project.link}
              className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-5 w-5 mr-1" />
              Demo
            </a>
          )}
          {project.status === 'planned' && (
            <div className="flex items-center text-indigo-600 ml-auto">
              <span className="mr-1">Coming Soon</span>
              <ArrowRight className="h-5 w-5" />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}