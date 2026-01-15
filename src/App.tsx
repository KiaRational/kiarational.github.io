import React, { useState, useEffect, lazy, Suspense, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Header } from './components/Header';
import { SplineScene } from './components/SplineScene';
import { BioPanel } from './components/BioPanel';
import { ResearchSection } from './components/ResearchSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { LoadingScreen } from './components/LoadingScreen';
import { ChevronDown } from 'lucide-react';

// Lazy load heavy components
const PublicationsSection = lazy(() => import('./components/PublicationsSection').then(module => ({ default: module.PublicationsSection })));
const ProjectsSection = lazy(() => import('./components/ProjectsSection').then(module => ({ default: module.ProjectsSection })));

// Loading fallback component
const SectionLoader = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-600">Loading...</p>
    </div>
  </div>
);

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  // Scroll spy: detect which section is currently in view
  useEffect(() => {
    if (isLoading) return;

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Trigger when section is 20% from top
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="relative w-full min-h-screen overflow-x-hidden bg-gray-100">
          {/* Fixed Spline 3D Scene Background */}
          <div className="fixed inset-0 z-0">
            <SplineScene />
          </div>

          {/* Header Navigation */}
          <Header activeSection={activeSection} setActiveSection={setActiveSection} />
          
          {/* Hero Section */}
          <section id="home" className="relative h-screen w-full">
            {/* Bio Panel Overlay */}
            <div className="relative z-10 h-full">
              <BioPanel />
            </div>
            
            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-8 md:bottom-12 right-4 md:right-12 z-20 flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <p className="text-gray-700 text-sm font-medium backdrop-blur-sm bg-white/70 px-3 py-1 rounded-full">
                Scroll to explore
              </p>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="backdrop-blur-md bg-white/80 rounded-full p-2 shadow-lg border border-white/50"
              >
                <ChevronDown className="w-6 h-6 text-gray-700" />
              </motion.div>
            </motion.div>
          </section>

          {/* Education Section */}
          <section id="education" className="relative z-10 py-12 md:py-16">
            <div className="max-w-7xl md:ml-auto px-4 md:pr-8">
              <div className="md:ml-auto w-full md:w-[500px]">
                <div className="backdrop-blur-md bg-white/85 rounded-2xl shadow-2xl p-5 md:p-6 border border-white/50">
                  <EducationSection />
                </div>
              </div>
            </div>
          </section>

          {/* Research Section */}
          <section id="research" className="relative z-10 py-12 md:py-16">
            <div className="max-w-7xl md:ml-auto px-4 md:pr-8">
              <div className="md:ml-auto w-full md:w-[500px]">
                <div className="backdrop-blur-md bg-white/85 rounded-2xl shadow-2xl p-5 md:p-6 border border-white/50">
                  <ResearchSection />
                </div>
              </div>
            </div>
          </section>

          {/* Publications Section */}
          <section id="publications" className="relative z-10 py-12 md:py-16">
            <div className="max-w-7xl md:ml-auto px-4 md:pr-8">
              <div className="md:ml-auto w-full md:w-[500px]">
                <div className="backdrop-blur-md bg-white/85 rounded-2xl shadow-2xl p-5 md:p-6 border border-white/50">
                  <Suspense fallback={<SectionLoader />}>
                    <PublicationsSection />
                  </Suspense>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="relative z-10 py-12 md:py-16">
            <div className="max-w-7xl md:ml-auto px-4 md:pr-8">
              <div className="md:ml-auto w-full md:w-[500px]">
                <div className="backdrop-blur-md bg-white/85 rounded-2xl shadow-2xl p-5 md:p-6 border border-white/50">
                  <Suspense fallback={<SectionLoader />}>
                    <ProjectsSection />
                  </Suspense>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="relative z-10 py-12 md:py-16 mb-12">
            <div className="max-w-7xl md:ml-auto px-4 md:pr-8">
              <div className="md:ml-auto w-full md:w-[500px]">
                <div className="backdrop-blur-md bg-white/85 rounded-2xl shadow-2xl p-5 md:p-6 border border-white/50">
                  <ContactSection />
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}