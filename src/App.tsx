import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { SplineScene } from './components/SplineScene';
import { BioPanel } from './components/BioPanel';
import { PublicationsSection } from './components/PublicationsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ResearchSection } from './components/ResearchSection';
import { ContactSection } from './components/ContactSection';
import { LoadingScreen } from './components/LoadingScreen';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="relative w-full min-h-screen overflow-x-hidden bg-gray-100">
          {/* Spline 3D Scene Background - Fixed on home page */}
          {activeSection === 'home' && (
            <div className="fixed inset-0 z-0">
              <SplineScene />
            </div>
          )}
          
          {/* Header Navigation */}
          <Header activeSection={activeSection} setActiveSection={setActiveSection} />
          
          {/* Home Page with Bio Panel */}
          {activeSection === 'home' && (
            <div className="relative z-10 h-screen">
              <BioPanel />
            </div>
          )}

          {/* Content Sections */}
          {activeSection !== 'home' && (
            <div className="relative z-10 min-h-screen pt-24 pb-16">
              <div className="max-w-6xl mx-auto px-8">
                {activeSection === 'research' && <ResearchSection />}
                {activeSection === 'publications' && <PublicationsSection />}
                {activeSection === 'projects' && <ProjectsSection />}
                {activeSection === 'contact' && <ContactSection />}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
