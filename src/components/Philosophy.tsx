import { motion, useReducedMotion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';

function FlowerOfLife() {
  const r = 60;
  const cx = 200;
  const cy = 200;

  // Central circle + 6 surrounding circles (first layer of Flower of Life)
  const circles = [
    { x: cx, y: cy },
    { x: cx + r, y: cy },
    { x: cx + r / 2, y: cy - (r * Math.sqrt(3)) / 2 },
    { x: cx - r / 2, y: cy - (r * Math.sqrt(3)) / 2 },
    { x: cx - r, y: cy },
    { x: cx - r / 2, y: cy + (r * Math.sqrt(3)) / 2 },
    { x: cx + r / 2, y: cy + (r * Math.sqrt(3)) / 2 },
    // Second ring
    { x: cx, y: cy - r * Math.sqrt(3) },
    { x: cx + r * 1.5, y: cy - (r * Math.sqrt(3)) / 2 },
    { x: cx + r * 1.5, y: cy + (r * Math.sqrt(3)) / 2 },
    { x: cx, y: cy + r * Math.sqrt(3) },
    { x: cx - r * 1.5, y: cy + (r * Math.sqrt(3)) / 2 },
    { x: cx - r * 1.5, y: cy - (r * Math.sqrt(3)) / 2 },
  ];

  return (
    <svg viewBox="0 0 400 400" className="w-full max-w-xs mx-auto" aria-hidden="true">
      <defs>
        <radialGradient id="sacred-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fb7185" stopOpacity="0.15" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <circle cx={cx} cy={cy} r={r * 2.5} fill="url(#sacred-glow)" />
      {circles.map((c, i) => (
        <circle
          key={i}
          cx={c.x}
          cy={c.y}
          r={r}
          fill="none"
          stroke="#fb7185"
          strokeWidth="0.5"
          opacity={0.2 + (i < 7 ? 0.15 : 0)}
        />
      ))}
      {/* Center vesica piscis highlight */}
      <circle cx={cx} cy={cy} r={r * 0.3} fill="#fb7185" opacity="0.08" />
      {/* Outer boundary */}
      <circle cx={cx} cy={cy} r={r * 2} fill="none" stroke="#f472b6" strokeWidth="0.3" opacity="0.15" />
    </svg>
  );
}

export function Philosophy() {
  const shouldReduce = useReducedMotion();

  return (
    <Section id="philosophy" label="Philosophy" gradient="" dots>
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
        <Reveal>
          <motion.div
            animate={
              shouldReduce
                ? {}
                : {
                    rotate: [0, 360],
                  }
            }
            transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
            className="mb-10"
          >
            <FlowerOfLife />
          </motion.div>
        </Reveal>

        <Reveal delay={0.2}>
          <h2 className="text-3xl md:text-4xl font-display italic text-gradient-rose mb-6">
            Code & Consciousness
          </h2>
        </Reveal>

        <Reveal delay={0.3}>
          <blockquote className="text-text-secondary text-lg md:text-xl leading-relaxed font-display italic mb-6">
            "Every system we build is a mirror of the mind that built it.
            Engineering at its deepest is not about solving problems —
            it is about understanding the observer behind the solution."
          </blockquote>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="text-text-muted font-mono text-sm max-w-md">
            The same geometry that structures a flower structures a neural network.
            The same patterns that govern galaxies govern the architecture of software.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
