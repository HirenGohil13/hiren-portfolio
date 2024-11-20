import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Cloud Infrastructure Platform",
    description: "Designed and implemented a scalable cloud infrastructure platform serving 1M+ users. Utilized AWS, Kubernetes, and Terraform.",
    tech: ["AWS", "Kubernetes", "Terraform", "Go", "React"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Led the development of an AI-powered analytics platform that processes 10TB+ of data daily.",
    tech: ["Python", "TensorFlow", "React", "PostgreSQL", "Redis"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
  },
  {
    title: "Microservices Architecture",
    description: "Architected and implemented a microservices-based system that improved scalability by 300%.",
    tech: ["Node.js", "Docker", "MongoDB", "RabbitMQ", "GraphQL"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href="#" className="flex items-center text-gray-600 hover:text-indigo-600">
                    <Github className="h-5 w-5 mr-1" />
                    Code
                  </a>
                  <a href="#" className="flex items-center text-gray-600 hover:text-indigo-600">
                    <ExternalLink className="h-5 w-5 mr-1" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}