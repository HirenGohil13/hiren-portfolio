import React from 'react';
import HeroBackground from './HeroBackground';
import HeroHeading from './HeroHeading';
import HeroMetrics from './HeroMetrics';
import HeroActions from './HeroActions';
import ExpertiseGrid from './ExpertiseGrid';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      <HeroBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="space-y-20">
          <HeroHeading />
          <HeroMetrics />
          <HeroActions />
          <ExpertiseGrid />
        </div>
      </div>
    </section>
  );
};

export default Hero;