import { Github, Linkedin, Mail, Pen } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/dhiraj-salian',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/dhirajsalian',
    icon: Linkedin,
  },
  {
    label: 'Email',
    href: 'mailto:dhiraj@dhirajsalian.com',
    icon: Mail,
  },
  {
    label: 'Blog',
    href: 'https://blogs.dhirajsalian.com',
    icon: Pen,
  },
];

export function Footer() {
  return (
    <footer className="relative py-16 md:py-20 px-6 md:px-12 gradient-mesh">
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <nav aria-label="Social links" className="flex items-center justify-center gap-6 mb-10">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('mailto') ? undefined : '_blank'}
                rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="group flex items-center justify-center w-11 h-11 rounded-full border border-white/[0.06] bg-cosmic-800/40 text-text-secondary hover:text-text-primary hover:border-accent-indigo/30 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4 transition-transform group-hover:scale-110" />
              </a>
            ))}
          </nav>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-text-muted font-mono text-xs tracking-wider">
            Built by Dhiraj · 2026
          </p>
        </Reveal>
      </div>
    </footer>
  );
}
