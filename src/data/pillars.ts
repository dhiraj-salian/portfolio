export interface Pillar {
  label: string;
  tagline: string;
  description: string;
  color: string;
  colorLight: string;
  gradient: string;
  glow: string;
  textGradient: string;
  icon: string;
}

export const pillars: Pillar[] = [
  {
    label: 'Software Engineering',
    tagline: 'Systems that scale',
    description: 'Building robust, performant systems from cloud infrastructure to frontend craft. Code as architecture.',
    color: '#7c5cff',
    colorLight: '#a78bfa',
    gradient: 'from-accent-indigo/20 to-transparent',
    glow: 'glow-indigo',
    textGradient: 'text-gradient-indigo',
    icon: '◆',
  },
  {
    label: 'Indie Hacker',
    tagline: 'Ship, learn, repeat',
    description: 'From idea to production SaaS. Inspyry on Cloudflare. Solo-founder velocity with product polish.',
    color: '#22d3ee',
    colorLight: '#67e8f9',
    gradient: 'from-accent-cyan/20 to-transparent',
    glow: 'glow-cyan',
    textGradient: 'text-gradient-cyan',
    icon: '⚡',
  },
  {
    label: 'AI & Mathematics',
    tagline: 'Intelligence, formalized',
    description: 'NVIDIA speech plugins, vector pipelines, algorithmic thinking. Where math meets machine.',
    color: '#f59e0b',
    colorLight: '#fde047',
    gradient: 'from-accent-amber/20 to-transparent',
    glow: 'glow-amber',
    textGradient: 'text-gradient-amber',
    icon: '∑',
  },
  {
    label: 'Spirituality',
    tagline: 'Consciousness first',
    description: 'Meditation, sacred geometry, the observer behind the code. Engineering as spiritual practice.',
    color: '#fb7185',
    colorLight: '#f472b6',
    gradient: 'from-accent-rose/20 to-transparent',
    glow: 'glow-rose',
    textGradient: 'text-gradient-rose',
    icon: '✦',
  },
  {
    label: 'Space & Astronomy',
    tagline: 'Look outward, go inward',
    description: 'Cosmic perspective as design philosophy. The universe as the ultimate system to study.',
    color: '#38bdf8',
    colorLight: '#7dd3fc',
    gradient: 'from-accent-sky/20 to-transparent',
    glow: 'glow-sky',
    textGradient: 'text-gradient-sky',
    icon: '◎',
  },
];
