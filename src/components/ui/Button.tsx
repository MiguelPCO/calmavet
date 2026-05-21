import React from 'react';
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'outline' | 'accent';
  children: React.ReactNode;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full px-6 py-3 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
    
    const variants = {
      primary: "bg-forest text-white hover:bg-forest/90 focus:ring-forest",
      secondary: "bg-sage text-forest hover:bg-sage/90 focus:ring-sage",
      outline: "bg-transparent border border-forest text-forest hover:bg-ivory focus:ring-forest",
      accent: "bg-terracotta text-white hover:bg-terracotta/90 focus:ring-terracotta",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
