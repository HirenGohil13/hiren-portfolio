import React from 'react';

interface CertificationBadgeProps {
  name: string;
  issuer: string;
  year: string;
  icon: string;
}

export default function CertificationBadge({ name, issuer, year, icon }: CertificationBadgeProps) {
  return (
    <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 
                    border border-gray-100 hover:border-indigo-500 transition-all duration-300
                    hover:shadow-lg">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-white shadow-sm p-2 group-hover:shadow-md 
                      transition-all duration-300">
          <img src={icon} alt={`${name} certification`} className="w-full h-full object-contain" />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 group-hover:text-indigo-600 
                       transition-colors duration-300">
            {name}
          </h4>
          <p className="text-sm text-gray-500">{issuer}</p>
          <p className="text-xs text-indigo-600 mt-1">{year}</p>
        </div>
      </div>
    </div>
  );
}