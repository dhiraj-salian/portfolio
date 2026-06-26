export interface Project {
  title: string;
  description: string;
  url: string;
  color: string;
  colorLight: string;
  gradient: string;
  svgId: string;
}

export const projects: Project[] = [
  {
    title: 'Inspyry',
    description: 'Cloudflare-native AI SVG generator. Single-pass raster → vector pipeline with VTracer WASM. Production SaaS.',
    url: 'https://inspyry.com',
    color: '#7c5cff',
    colorLight: '#a78bfa',
    gradient: 'from-accent-indigo/20 to-accent-cyan/10',
    svgId: 'inspyry',
  },
  {
    title: 'openclaw-nvidia-speech',
    description: 'Zero-dep OpenClaw plugin for NVIDIA speech. 168 tests. Published to npm.',
    url: 'https://github.com/dhiraj-salian/openclaw-nvidia-speech',
    color: '#22d3ee',
    colorLight: '#67e8f9',
    gradient: 'from-accent-cyan/20 to-accent-sky/10',
    svgId: 'nvidia',
  },
  {
    title: 'Brick Breaker',
    description: '2D Unity game exploring game-dev fundamentals.',
    url: 'https://brick-breaker.dhirajsalian.com',
    color: '#f59e0b',
    colorLight: '#fde047',
    gradient: 'from-accent-amber/20 to-accent-amber-light/10',
    svgId: 'brick',
  },
];
