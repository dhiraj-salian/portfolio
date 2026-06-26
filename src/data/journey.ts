export interface Milestone {
  year: string;
  title: string;
  description: string;
  color: string;
}

export const milestones: Milestone[] = [
  {
    year: '2018',
    title: 'Started CS + Competitive Programming',
    description: 'First encounters with algorithms, data structures, and the thrill of solving problems under pressure.',
    color: '#7c5cff',
  },
  {
    year: '2020',
    title: 'First Indie Projects',
    description: 'Started shipping solo projects. Learned that building is the best teacher.',
    color: '#22d3ee',
  },
  {
    year: '2022',
    title: 'Flutter Web & Ruby Blog Era',
    description: 'Explored cross-platform UI, built the first portfolio, and wrote about the journey.',
    color: '#a78bfa',
  },
  {
    year: '2024',
    title: 'Cloudflare + AI Product',
    description: 'Launched Inspyry — a production SaaS running AI SVG generation on the edge.',
    color: '#f59e0b',
  },
  {
    year: '2025–26',
    title: 'OpenClaw, NVIDIA Plugin, Current Build',
    description: 'Open-source contributions, NVIDIA speech integration, and building the next chapter.',
    color: '#38bdf8',
  },
];
