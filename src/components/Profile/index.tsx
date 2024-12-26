import React from 'react';
import KeyResponsibilities from './KeyResponsibilities';

const Profile: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Key Responsibilities
            <span className="block mt-2 text-2xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Technical Leadership & Engineering Excellence
            </span>
          </h2>
        </div>
        <KeyResponsibilities />
      </div>
    </section>
  );
};

export default Profile;