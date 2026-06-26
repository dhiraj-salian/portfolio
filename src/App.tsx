import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { CosmicLoader } from '@/components/CosmicLoader';
import { SmoothScroll } from '@/components/SmoothScroll';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);

  const handleLoaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <CosmicLoader onComplete={handleLoaderComplete} />}
      </AnimatePresence>

      {/* Noise overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      <SmoothScroll>
        <main id="main" className={loading ? 'overflow-hidden max-h-screen' : ''}>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
      </SmoothScroll>
    </>
  );
}