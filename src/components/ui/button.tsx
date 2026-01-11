import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

export function Button({
    children,
    variant = 'primary',
    size = 'md',
    className,
    style,
    ...props
}: ButtonProps) {

    const baseStyles: React.CSSProperties = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 'var(--radius)', // Will ensure --radius is set to 9999px or similar in globals, or use 9999px here
        fontWeight: 500,
        cursor: 'pointer',
        transition: 'background-color 0.2s, color 0.2s',
        border: '1px solid transparent',
    };

    // Override radius to pill shape if standard 'rounded-md' is not desired. 
    // User requested "rounded-full" for all buttons. 
    // I will enforce 9999px here or in baseStyles.
    const pillStyle = { borderRadius: '9999px' };

    const variantStyles: Record<string, React.CSSProperties> = {
        primary: {
            backgroundColor: 'hsl(var(--primary))',
            color: 'hsl(var(--primary-foreground))',
        },
        secondary: {
            backgroundColor: 'hsl(var(--secondary))',
            color: 'hsl(var(--secondary-foreground))',
        },
        outline: {
            backgroundColor: 'transparent',
            borderColor: 'hsl(var(--border))',
            color: 'hsl(var(--foreground))',
        },
        ghost: {
            backgroundColor: 'transparent',
            color: 'hsl(var(--foreground))',
        }
    };

    const sizeStyles: Record<string, React.CSSProperties> = {
        sm: { height: '2rem', padding: '0 0.875rem', fontSize: '0.875rem' }, // h-8
        md: { height: '2.5rem', padding: '0 1.5rem', fontSize: '1rem' },    // h-10, px-6
        lg: { height: '3rem', padding: '0 2rem', fontSize: '1.125rem' },     // h-12
    };

    return (
        <button
            className={`${className || ''}`}
            style={{
                ...baseStyles,
                borderRadius: '9999px', // Enforce pill shape globally as requested
                ...variantStyles[variant],
                ...sizeStyles[size],
                ...style
            }}
            {...props}
        >
            {children}
        </button>
    );
}
