import React from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'gold' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#060D24] disabled:opacity-50 disabled:cursor-not-allowed select-none'

    const variants = {
      primary: 'bg-[#4EDEA3] text-[#060D24] hover:bg-[#3ecb92] shadow-lg shadow-[#4EDEA3]/20 focus:ring-[#4EDEA3] font-semibold',
      secondary: 'bg-[#181E36] text-white hover:bg-[#232B47] border border-white/10 hover:border-white/20 focus:ring-slate-400',
      gold: 'bg-[#FFCE31] text-[#060D24] hover:bg-[#e6b825] shadow-lg shadow-[#FFCE31]/20 focus:ring-[#FFCE31] font-semibold',
      outline: 'bg-transparent text-white border border-white/20 hover:border-[#4EDEA3] hover:text-[#4EDEA3] focus:ring-[#4EDEA3]',
      ghost: 'bg-transparent text-slate-300 hover:text-white hover:bg-white/5 focus:ring-white/20',
    }

    const sizes = {
      sm: 'text-xs px-4 py-1.5 gap-1.5',
      md: 'text-sm px-6 py-2.5 gap-2',
      lg: 'text-base px-8 py-3.5 gap-2.5 font-semibold',
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'
