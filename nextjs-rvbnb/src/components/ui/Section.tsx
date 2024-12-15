interface SectionProps {
  id?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, title, children, className = '' }: SectionProps) {
  return (
    <section 
      id={id}
      className={`py-24 scroll-mt-16 ${className}`}
    >
      <h2 className="text-4xl font-bold text-center mb-16">
        {title}
      </h2>
      {children}
    </section>
  );
}