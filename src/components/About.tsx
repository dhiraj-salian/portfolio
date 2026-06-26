import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';

export function About() {
  return (
    <Section id="about" label="About" gradient="gradient-mesh" dots>
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Image */}
        <Reveal direction="right" className="shrink-0">
          <div className="relative">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-accent-indigo/20">
              {/* Placeholder avatar - SVG constellation pattern */}
              <svg viewBox="0 0 200 200" className="w-full h-full" aria-label="Dhiraj Salian">
                <defs>
                  <radialGradient id="avatar-bg" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#1a1d35" />
                    <stop offset="100%" stopColor="#0a0c18" />
                  </radialGradient>
                </defs>
                <rect width="200" height="200" fill="url(#avatar-bg)" />
                {/* Constellation dots */}
                <circle cx="80" cy="70" r="2" fill="#7c5cff" opacity="0.8" />
                <circle cx="120" cy="65" r="1.5" fill="#22d3ee" opacity="0.6" />
                <circle cx="95" cy="95" r="2.5" fill="#a78bfa" opacity="0.9" />
                <circle cx="130" cy="100" r="1.8" fill="#67e8f9" opacity="0.5" />
                <circle cx="70" cy="115" r="2" fill="#f59e0b" opacity="0.7" />
                <circle cx="115" cy="130" r="1.5" fill="#fb7185" opacity="0.6" />
                {/* Lines connecting */}
                <line x1="80" y1="70" x2="95" y2="95" stroke="#7c5cff" strokeWidth="0.5" opacity="0.3" />
                <line x1="95" y1="95" x2="120" y2="65" stroke="#22d3ee" strokeWidth="0.5" opacity="0.2" />
                <line x1="95" y1="95" x2="70" y2="115" stroke="#f59e0b" strokeWidth="0.5" opacity="0.3" />
                <line x1="95" y1="95" x2="130" y2="100" stroke="#67e8f9" strokeWidth="0.5" opacity="0.2" />
                {/* Initials */}
                <text x="100" y="165" textAnchor="middle" fill="#e7e9f0" fontSize="18" fontFamily="Instrument Serif, serif" fontStyle="italic">DS</text>
              </svg>
            </div>
            {/* Glow ring */}
            <div className="absolute -inset-2 rounded-full border border-accent-indigo/10 animate-glow" aria-hidden="true" />
            <div className="absolute -inset-4 rounded-full border border-accent-cyan/5" aria-hidden="true" />
          </div>
        </Reveal>

        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-display italic mb-4 text-text-primary">
              Dhiraj Salian
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-text-secondary font-mono text-sm tracking-wide mb-1">
              Software Engineer · Indie Hacker · Goa, India
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-text-muted font-mono text-xs tracking-wider mb-6">
              Currently building: OpenClaw ecosystem + AI-native tools
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-text-secondary leading-relaxed max-w-lg">
              I build software at the edge — where cloud infrastructure meets AI,
              where product craft meets solo-founder velocity, and where
              engineering rigor meets exploratory curiosity. Every system I ship
              carries a piece of the journey that built it.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-3 text-text-muted font-mono text-xs">
              Created <span className="text-gradient-cyan">inspyry-vector-generator</span> skill ·
              Shipped <span className="text-gradient-indigo">Inspyry</span> to production ·
              168 tests in <span className="text-gradient-cyan">openclaw-nvidia-speech</span>
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
