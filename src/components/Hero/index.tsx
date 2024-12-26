import React, { lazy, Suspense } from 'react';
import HeroBackground from './HeroBackground';
import HeroHeading from './HeroHeading';
import HeroMetrics from './HeroMetrics';
import ImpactMetrics from './ImpactMetrics';
import { useSectionInView } from './useSectionInView';

// Lazy load less critical components
const AchievementHighlights = lazy(() => import('./AchievementHighlights'));
const ExpertiseGrid = lazy(() => import('./ExpertiseGrid'));
const HeroActions = lazy(() => import('./HeroActions'));

const Hero: React.FC = () => {
  const [achievementsRef, achievementsInView] = useSectionInView();
  const [expertiseRef, expertiseInView] = useSectionInView();

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      <HeroBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="space-y-16">
          <HeroHeading />
          <HeroMetrics />
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Driving Business Impact Through
              <span className="block mt-1 text-xl bg-gradient-to-r from-indigo-600 to-purple-600 
                           bg-clip-text text-transparent">
                Technical Excellence
              </span>
            </h2>
            <ImpactMetrics />
          </div>

          <div ref={achievementsRef} className="space-y-4">
            {achievementsInView && (
              <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse rounded-xl" />}>
                <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
                  Key Achievements
                  <span className="block mt-1 text-xl bg-gradient-to-r from-indigo-600 to-purple-600 
                               bg-clip-text text-transparent">
                    And Success Stories
                  </span>
                </h2>
                <AchievementHighlights />
              </Suspense>
            )}
          </div>

          <div ref={expertiseRef}>
            {expertiseInView && (
              <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse rounded-xl" />}>
                <ExpertiseGrid />
                <HeroActions />
              </Suspense>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;