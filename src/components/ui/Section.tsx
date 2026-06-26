import { cn } from '@/lib/cn';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  label?: string;
  gradient?: string;
  dots?: boolean;
}

export function Section({
  children,
  id,
  className,
  label,
  gradient = 'gradient-mesh',
  dots = false,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={id ? `${id}-heading` : undefined}
      className={cn(
        'relative py-20 md:py-28 lg:py-36 px-6 md:px-12 lg:px-20',
        gradient,
        dots && 'dot-grid',
        className,
      )}
    >
      {label && (
        <span className="sr-only" id={id ? `${id}-heading` : undefined}>
          {label}
        </span>
      )}
      <div className="relative z-10 max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
