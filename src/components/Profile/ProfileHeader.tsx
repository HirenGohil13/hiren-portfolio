import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Users, Target } from 'lucide-react';

const ProfileHeader: React.FC = () => {
  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Lead Engineer Profile
          <span className="block mt-2 text-2xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Driving Technical Excellence & Team Success
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Specialized in architecting scalable solutions and leading high-performing engineering teams
          across cloud-native applications and enterprise systems.
        </p>
      </motion.div>
    </div>
  );
};

export default ProfileHeader;