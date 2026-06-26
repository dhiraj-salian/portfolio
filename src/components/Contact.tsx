import { useState, type FormEvent } from 'react';
import { Github, Linkedin, Mail, Pen, ArrowUpRight, FileText } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/dhiraj-salian',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/dhiraj-salian',
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

// Mailto with prefilled body — opens the visitor's email client. Zero backend,
// no third-party. Dhiraj replies manually and attaches the resume PDF.
function buildResumeRequestMailto(email: string) {
  const subject = 'Resume request — dhirajsalian.com';
  const body = [
    'Hi Dhiraj,',
    '',
    'I came across your portfolio and would love a copy of your resume.',
    '',
    'Thanks,',
    '',
    '---',
    `From: ${email}`,
  ].join('\n');
  return `mailto:dhiraj@dhirajsalian.com?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}

export function Contact() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = email.trim();
    // Loose email check — final validation happens in the visitor's mail client
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError('Please enter a valid email.');
      return;
    }
    setError(null);
    window.location.href = buildResumeRequestMailto(trimmed);
  };

  return (
    <Section id="contact" gradient="gradient-mesh" className="pb-24 md:pb-32">
      <div className="max-w-2xl mx-auto text-center">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-display italic mb-3 text-text-primary">
            Get in touch
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-text-secondary text-[15px] mb-10">
            Drop your email and I'll send my resume over.
          </p>
        </Reveal>

        {/* Resume request form */}
        <Reveal delay={0.2}>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-stretch gap-3 max-w-md mx-auto mb-4"
            noValidate
          >
            <label htmlFor="email" className="sr-only">
              Your email
            </label>
            <div className="relative flex-1">
              <Mail
                className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none"
                aria-hidden="true"
              />
              <input
                id="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError(null);
                }}
                placeholder="you@domain.com"
                className="w-full h-11 pl-10 pr-3 rounded-full bg-cosmic-800/60 border border-white/[0.06] text-text-primary placeholder:text-text-muted/60 font-mono text-sm focus:outline-none focus:border-accent-indigo/40 focus:bg-cosmic-800/80 transition-colors"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-accent-indigo/40 text-text-primary font-mono text-sm tracking-wide transition-all duration-200"
            >
              <FileText className="w-3.5 h-3.5" aria-hidden="true" />
              Request Resume
              <ArrowUpRight
                className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </button>
          </form>
        </Reveal>

        {error && (
          <p
            role="alert"
            className="text-accent-rose font-mono text-xs mb-6"
          >
            {error}
          </p>
        )}

        <Reveal delay={0.3}>
          <p className="text-text-muted font-mono text-[11px] tracking-wide mb-12">
            Opens your mail client — no data stored.
          </p>
        </Reveal>

        {/* Socials */}
        <Reveal delay={0.4}>
          <nav aria-label="Social links" className="flex items-center justify-center gap-4">
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

        <Reveal delay={0.5}>
          <p className="mt-12 text-text-muted font-mono text-[11px] tracking-wider">
            Built by Dhiraj · 2026
          </p>
        </Reveal>
      </div>
    </Section>
  );
}