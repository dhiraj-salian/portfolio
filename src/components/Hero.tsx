import { lazy, Suspense } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Magnetic } from '@/components/ui/Magnetic';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';

const HeroCanvas = lazy(() => import('@/components/HeroCanvas'));

const headline = 'Building at the Edge of Code & Consciousness';
const words = headline.split(' ');

export function Hero() {
  const shouldReduce = useReducedMotion();

  return (
    <Section id="hero" label="Hero" gradient="" dots={false} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-0 pb-0">
      {/* 3D Background */}
      <Suspense
        fallback={
          <div className="absolute inset-0 bg-gradient-to-b from-cosmic-950 to-cosmic-900" aria-hidden="true" />
        }
      >
        <HeroCanvas />
      </Suspense>

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-cosmic-950/80 via-transparent to-cosmic-950/60 z-[1]" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl">
        {/* Headline with word-by-word reveal */}
        <h1 className="text-hero font-display italic mb-8" aria-label={headline}>
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.25em]"
              initial={shouldReduce ? { opacity: 1 } : { opacity: 0, y: 50, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                delay: shouldReduce ? 0 : 0.1 * i + 0.3,
                duration: shouldReduce ? 0 : 0.7,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <Reveal delay={1.5}>
          <p className="text-hero-sub text-text-secondary font-mono mb-12 max-w-2xl mx-auto">
            Software engineer and indie hacker crafting tools at the intersection of
            <span className="text-gradient-indigo"> engineering</span>,
            <span className="text-gradient-amber"> AI</span>, and
            <span className="text-gradient-rose"> consciousness</span>.
          </p>
        </Reveal>

        {/* CTAs */}
        <Reveal delay={1.8}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Magnetic>
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent-indigo/15 border border-accent-indigo/30 text-accent-indigo-light font-mono text-sm tracking-wide hover:bg-accent-indigo/25 hover:border-accent-indigo/50 transition-all duration-300"
              >
                Explore the work
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#philosophy"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-text-muted/20 text-text-secondary font-mono text-sm tracking-wide hover:border-text-secondary/40 hover:text-text-primary transition-all duration-300"
              >
                Read manifest
              </a>
            </Magnetic>
          </div>
        </Reveal>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-px h-12 bg-gradient-to-b from-accent-indigo/40 to-transparent" aria-hidden="true" />
        </motion.div>
      </div>
    </Section>
  );
}
