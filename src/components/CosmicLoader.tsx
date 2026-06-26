import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/cn';

interface CosmicLoaderProps {
  onComplete: () => void;
}

function ParticleField() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-accent-indigo/40"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * -60 - 20, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

export function CosmicLoader({ onComplete }: CosmicLoaderProps) {
  const [dismissed, setDismissed] = useState(false);
  const shouldReduce = useReducedMotion();

  const dismiss = useCallback(() => {
    setDismissed(true);
    setTimeout(onComplete, 800);
  }, [onComplete]);

  useEffect(() => {
    const timer = setTimeout(dismiss, shouldReduce ? 500 : 2500);
    return () => clearTimeout(timer);
  }, [dismiss, shouldReduce]);

  const name = 'DHIRAJ SALIAN';
  const tagline = 'Engineer · Builder · Explorer';

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cosmic-950 cursor-pointer"
          onClick={dismiss}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {!shouldReduce && <ParticleField />}

          {/* Name reveal */}
          <div className="flex gap-[0.3em] mb-6" aria-label={name}>
            {name.split('').map((char, i) => (
              <motion.span
                key={i}
                className={cn(
                  'text-3xl md:text-5xl font-display tracking-[0.35em] uppercase',
                  char === ' ' ? 'w-[0.35em]' : '',
                )}
                style={{ color: '#e7e9f0' }}
                initial={shouldReduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: shouldReduce ? 0 : 0.08 * i + 0.2,
                  duration: shouldReduce ? 0 : 0.4,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* Tagline */}
          <motion.p
            className="text-text-secondary text-sm md:text-base font-mono tracking-widest"
            initial={shouldReduce ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: shouldReduce ? 0 : 1.2, duration: 0.6 }}
          >
            {tagline}
          </motion.p>

          {/* Click hint */}
          <motion.span
            className="absolute bottom-8 text-text-muted text-xs font-mono tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ delay: 2, duration: 2, repeat: Infinity }}
          >
            click anywhere to enter
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
