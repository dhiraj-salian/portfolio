import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { CosmicLoader } from '@/components/CosmicLoader';
import { SmoothScroll } from '@/components/SmoothScroll';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Pillars } from '@/components/Pillars';
import { Projects } from '@/components/Projects';
import { Philosophy } from '@/components/Philosophy';
import { Journey } from '@/components/Journey';
import { Footer } from '@/components/Footer';

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
          <Pillars />
          <Projects />
          <Philosophy />
          <Journey />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
