import React, { Suspense, lazy, useEffect } from 'react';
import Header from './components/Header';
import Loading from './components/shared/Loading';
import { addResourceHints } from './utils/performance';

const Hero = lazy(() => import('./components/Hero'));
const Profile = lazy(() => import('./components/Profile'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Certifications = lazy(() => import('./components/Certifications'));
const Recommendations = lazy(() => import('./components/Recommendations'));
const Education = lazy(() => import('./components/Education'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const App: React.FC = () => {
  useEffect(() => {
    addResourceHints();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Suspense fallback={<Loading />}>
        <main>
          <Hero />
          <Profile />
          <Experience />
          <Projects />
          <Skills />
          <Certifications />
          <Recommendations />
          <Education />
          <Contact />
        </main>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;