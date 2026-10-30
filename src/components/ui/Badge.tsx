import React from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'emerald' | 'gold' | 'blue' | 'outline' | 'slate'
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'emerald',
  children,
  ...props
}) => {
  const variants = {
    emerald: 'bg-[#4EDEA3]/10 text-[#4EDEA3] border border-[#4EDEA3]/25',
    gold: 'bg-[#FFCE31]/10 text-[#FFCE31] border border-[#FFCE31]/25',
    blue: 'bg-blue-500/10 text-blue-400 border border-blue-500/25',
    outline: 'bg-transparent text-slate-300 border border-white/15',
    slate: 'bg-[#181E36] text-slate-300 border border-white/10',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
