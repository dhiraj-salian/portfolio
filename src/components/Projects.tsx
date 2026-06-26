import { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { projects } from '@/data/projects';
// cn available if needed

function ProjectThumbnail({ id }: { id: string }) {
  const thumbnails: Record<string, React.ReactNode> = {
    inspyry: (
      <svg viewBox="0 0 400 240" className="w-full h-full" aria-hidden="true">
        <defs>
          <linearGradient id="inspyry-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c5cff" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <rect width="400" height="240" fill="url(#inspyry-grad)" />
        {/* Vector paths */}
        <path d="M80 160 Q140 60 200 120 Q260 180 320 80" stroke="#7c5cff" strokeWidth="2" fill="none" opacity="0.6" />
        <path d="M100 180 Q160 80 220 140 Q280 200 340 100" stroke="#22d3ee" strokeWidth="1.5" fill="none" opacity="0.4" />
        {/* SVG node points */}
        <circle cx="80" cy="160" r="4" fill="#7c5cff" opacity="0.8" />
        <circle cx="200" cy="120" r="4" fill="#a78bfa" opacity="0.8" />
        <circle cx="320" cy="80" r="4" fill="#22d3ee" opacity="0.8" />
        {/* Label */}
        <text x="200" y="210" textAnchor="middle" fill="#a78bfa" fontSize="11" fontFamily="JetBrains Mono, monospace">AI → SVG</text>
      </svg>
    ),
    nvidia: (
      <svg viewBox="0 0 400 240" className="w-full h-full" aria-hidden="true">
        <defs>
          <linearGradient id="nvidia-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <rect width="400" height="240" fill="url(#nvidia-grad)" />
        {/* Sound waves */}
        {[40, 70, 100, 130, 160].map((y, i) => (
          <line key={i} x1="80" y1={y} x2="320" y2={y} stroke="#22d3ee" strokeWidth={0.5 + i * 0.2} opacity={0.2 + i * 0.1} />
        ))}
        {/* Waveform */}
        <path d="M80 140 Q120 100 160 140 Q200 180 240 140 Q280 100 320 140" stroke="#22d3ee" strokeWidth="2" fill="none" opacity="0.7" />
        <path d="M80 120 Q130 90 180 120 Q230 150 280 120 Q310 100 320 110" stroke="#38bdf8" strokeWidth="1" fill="none" opacity="0.4" />
        {/* Badge */}
        <rect x="160" y="175" width="80" height="22" rx="4" fill="#0a0c18" stroke="#22d3ee" strokeWidth="0.5" opacity="0.8" />
        <text x="200" y="190" textAnchor="middle" fill="#67e8f9" fontSize="9" fontFamily="JetBrains Mono, monospace">168 tests</text>
      </svg>
    ),
    skill: (
      <svg viewBox="0 0 400 240" className="w-full h-full" aria-hidden="true">
        <defs>
          <linearGradient id="skill-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#fb7185" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <rect width="400" height="240" fill="url(#skill-grad)" />
        {/* Vector path traces */}
        <path d="M100 180 L160 100 L200 140 L260 80 L300 120" stroke="#a78bfa" strokeWidth="1.8" fill="none" opacity="0.7" />
        <path d="M120 200 L180 130 L220 160 L280 100 L320 140" stroke="#fb7185" strokeWidth="1.2" fill="none" opacity="0.5" />
        {/* Anchor nodes */}
        {[[100,180],[160,100],[200,140],[260,80],[300,120]].map(([cx,cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="5" fill="#0a0c18" stroke="#a78bfa" strokeWidth="1.5" />
            <circle cx={cx} cy={cy} r="2" fill="#c4b5fd" />
          </g>
        ))}
        {/* Bezier handles */}
        <path d="M160 100 Q180 80 200 140" stroke="#c4b5fd" strokeWidth="0.5" fill="none" opacity="0.4" strokeDasharray="2 2" />
        <path d="M200 140 Q230 110 260 80" stroke="#c4b5fd" strokeWidth="0.5" fill="none" opacity="0.4" strokeDasharray="2 2" />
        {/* Label */}
        <rect x="160" y="200" width="80" height="20" rx="4" fill="#0a0c18" stroke="#a78bfa" strokeWidth="0.5" opacity="0.7" />
        <text x="200" y="213" textAnchor="middle" fill="#c4b5fd" fontSize="9" fontFamily="JetBrains Mono, monospace">agent.skill</text>
      </svg>
    ),
    brick: (
      <svg viewBox="0 0 400 240" className="w-full h-full" aria-hidden="true">
        <defs>
          <linearGradient id="brick-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#fde047" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <rect width="400" height="240" fill="url(#brick-grad)" />
        {/* Bricks */}
        {[0, 1, 2, 3, 4].map((row) =>
          [0, 1, 2, 3, 4, 5].map((col) => (
            <rect
              key={`${row}-${col}`}
              x={60 + col * 52 + (row % 2 === 0 ? 0 : 26)}
              y={60 + row * 28}
              width={46}
              height={22}
              rx={3}
              fill={row < 2 ? '#f59e0b' : '#fde047'}
              opacity={0.15 + (row < 2 ? 0.3 : 0.1)}
            />
          )),
        )}
        {/* Paddle */}
        <rect x="170" y="195" width="60" height="8" rx="4" fill="#f59e0b" opacity="0.6" />
        {/* Ball */}
        <circle cx="200" cy="175" r="6" fill="#fde047" opacity="0.7" />
      </svg>
    ),
  };

  return thumbnails[id] || null;
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const shouldReduce = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduce) return;
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
    setMousePos({ x, y });
  };

  return (
    <motion.article
      ref={cardRef}
      className="group relative rounded-xl border border-white/[0.04] bg-cosmic-800/40 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
      whileHover={shouldReduce ? {} : { y: -4 }}
      transition={{ duration: 0.25 }}
    >
      {/* Thumbnail */}
      <div
        className="relative h-48 md:h-52 overflow-hidden"
        style={{
          transform: shouldReduce ? 'none' : `translate(${mousePos.x}px, ${mousePos.y}px) scale(1.05)`,
          transition: 'transform 0.2s ease-out',
        }}
      >
        <ProjectThumbnail id={project.svgId} />
      </div>

      {/* Glow border on hover */}
      <div
        className="absolute inset-0 rounded-xl border opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ borderColor: `${project.color}30` }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-display italic mb-2" style={{ color: project.color }}>
          {project.title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wide group/link"
          style={{ color: project.colorLight }}
        >
          Visit
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </a>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <Section id="projects" label="Projects" gradient="gradient-mesh" dots>
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-display italic text-center mb-4 text-text-primary">
          Selected Work
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="text-text-secondary text-center font-mono text-sm mb-14 max-w-lg mx-auto">
          Things shipped, learned from, and still building upon.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Reveal key={project.title} delay={0.1}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
