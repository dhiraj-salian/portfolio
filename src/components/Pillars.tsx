import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { pillars } from '@/data/pillars';
import { cn } from '@/lib/cn';

export function Pillars() {
  const [hovered, setHovered] = useState<number | null>(null);
  const shouldReduce = useReducedMotion();

  return (
    <Section id="pillars" label="Theme Pillars" gradient="" dots>
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-display italic text-center mb-4 text-text-primary">
          Five Facets
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="text-text-secondary text-center font-mono text-sm mb-16 max-w-lg mx-auto">
          One person, many dimensions. Each layer shapes the work.
        </p>
      </Reveal>

      <div className="flex flex-col gap-4 max-w-2xl mx-auto">
        {pillars.map((pillar, i) => (
          <Reveal key={pillar.label} delay={0.1 * i}>
            <motion.div
              className={cn(
                'group relative rounded-xl border border-white/[0.04] bg-cosmic-800/50 backdrop-blur-sm px-6 py-5 cursor-default overflow-hidden',
                pillar.glow,
              )}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              whileHover={shouldReduce ? {} : { y: -4, transition: { duration: 0.25 } }}
            >
              {/* Accent line on left */}
              <div
                className="absolute left-0 top-0 bottom-0 w-0.5 transition-opacity duration-500"
                style={{
                  backgroundColor: pillar.color,
                  opacity: hovered === i ? 1 : 0.3,
                }}
                aria-hidden="true"
              />

              {/* Background gradient on hover */}
              <motion.div
                className="absolute inset-0 opacity-0"
                style={{
                  background: `radial-gradient(ellipse at 20% 50%, ${pillar.color}08 0%, transparent 70%)`,
                }}
                animate={{ opacity: hovered === i ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                aria-hidden="true"
              />

              <div className="relative z-10 flex items-center gap-4">
                <span
                  className="text-2xl leading-none shrink-0"
                  style={{ color: pillar.color }}
                  aria-hidden="true"
                >
                  {pillar.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-3 mb-1">
                    <h3 className={cn('text-lg font-display italic', `text-[${pillar.color}]`)}
                      style={{ color: pillar.color }}
                    >
                      {pillar.label}
                    </h3>
                    <span className="text-text-muted font-mono text-xs tracking-wider">
                      {pillar.tagline}
                    </span>
                  </div>
                  <motion.p
                    className="text-text-secondary text-sm leading-relaxed overflow-hidden"
                    initial={shouldReduce ? { opacity: 0.7 } : false}
                    animate={{
                      opacity: hovered === i ? 1 : 0.7,
                      height: hovered === i ? 'auto' : 0,
                      marginTop: hovered === i ? 6 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {pillar.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
