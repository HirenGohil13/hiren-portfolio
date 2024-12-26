import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  logo: string;
  verificationUrl?: string;
  index: number;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  title,
  issuer,
  date,
  credentialId,
  logo,
  verificationUrl,
  index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl 
                 border border-gray-100 hover:border-indigo-500 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-lg bg-white p-2 shadow-md">
          <img src={logo} alt={`${issuer} logo`} className="w-full h-full object-contain" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 
                       transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 text-sm mb-2">{issuer}</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            <span className="text-gray-500">{date}</span>
          
          
          </div>
        </div>

       
      </div>
    </motion.div>
  );
};

export default CertificationCard;