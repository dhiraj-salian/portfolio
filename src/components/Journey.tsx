import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { milestones } from '@/data/journey';

function TimelineLine({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 4 400" className="absolute left-[7px] top-0 h-full w-1" aria-hidden="true">
      {/* Background line */}
      <line x1="2" y1="0" x2="2" y2="400" stroke="#1a1d35" strokeWidth="2" />
      {/* Animated foreground line */}
      <motion.line
        x1="2"
        y1="0"
        x2="2"
        y2="400"
        stroke="url(#timeline-grad)"
        strokeWidth="2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={active ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />
      <defs>
        <linearGradient id="timeline-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7c5cff" />
          <stop offset="50%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Journey() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const shouldReduce = useReducedMotion();

  return (
    <Section id="journey" label="Journey" gradient="gradient-mesh" dots>
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-display italic text-center mb-4 text-text-primary">
          The Arc So Far
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="text-text-secondary text-center font-mono text-sm mb-16 max-w-lg mx-auto">
          Not a resume. A trajectory.
        </p>
      </Reveal>

      <div ref={sectionRef} className="relative max-w-2xl mx-auto pl-8 md:pl-12">
        <TimelineLine active={isInView} />

        {milestones.map((milestone, i) => (
          <Reveal key={milestone.year} delay={0.15 * i} direction="right">
            <div className="relative pb-12 last:pb-0">
              {/* Dot */}
              <motion.div
                className="absolute -left-[5px] top-1.5 w-3 h-3 rounded-full border-2"
                style={{ borderColor: milestone.color, backgroundColor: isInView ? milestone.color : 'transparent' }}
                animate={
                  shouldReduce
                    ? {}
                    : isInView
                    ? {
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 1, 0.8],
                      }
                    : {}
                }
                transition={{ duration: 0.5, delay: 0.3 * i }}
                aria-hidden="true"
              />

              {/* Content */}
              <div className="ml-6">
                <span
                  className="font-mono text-sm font-semibold tracking-wider"
                  style={{ color: milestone.color }}
                >
                  {milestone.year}
                </span>
                <h3 className="text-lg font-display italic text-text-primary mt-1 mb-1">
                  {milestone.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
