import { navigationItems } from '@/data/navigation';
import { cn } from '@/lib/utils';

interface NavigationLinksProps {
  scrolled: boolean;
  className?: string;
}

export function NavigationLinks({ scrolled, className }: NavigationLinksProps) {
  return (
    <nav className={cn("hidden md:flex items-center space-x-8", className)}>
      {navigationItems.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className={cn(
            "transition-colors",
            scrolled 
              ? "text-gray-600 hover:text-blue-600"
              : "text-white/90 hover:text-white"
          )}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}