import React from 'react';
import { Award } from 'lucide-react';
import CertificationCard from './CertificationCard';

const certifications = [
  {
    title: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    date: "June 2023",
    logo: "/aws-badge.svg",
  },
  {
    title: "Scrum Master Certified (SMC)",
    issuer: "Scrum.org",
    date: "Feb 2024",
    logo: "/scrum-badge.svg",
  }
];

const Certifications: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-indigo-50 rounded-xl mb-4">
            <Award className="h-8 w-8 text-indigo-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Certifications</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Industry-recognized certifications demonstrating expertise in cloud, agile methodologies, 
            and database technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} {...cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;