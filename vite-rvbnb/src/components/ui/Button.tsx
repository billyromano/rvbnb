import React, { forwardRef } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  asChild,
  ...props
}, ref) => {
  const baseStyles = "font-semibold rounded-full transition-all";
  const variants = {
    primary: "bg-white text-blue-600 hover:bg-opacity-90",
    secondary: "bg-blue-600 text-white hover:bg-blue-700"
  };
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg"
  };

  const Comp = asChild ? 'span' : 'button';

  return (
    <Comp 
      ref={ref}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
});

Button.displayName = 'Button';