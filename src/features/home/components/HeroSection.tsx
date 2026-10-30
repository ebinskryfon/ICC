import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ShieldCheck } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-banner.png"
          alt="ICC Cricket Action"
          className="w-full h-full object-cover object-center brightness-105 contrast-105"
          onError={(e) => {
            // fallback to rendered preview or graphic
            (e.target as HTMLImageElement).src = '/images/hero_graphic.png'
          }}
        />
        {/* Tailored overlays to highlight the image while preserving text readability */}
        <div className="absolute inset-0 bg-[#060D24]/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060D24]/95 via-[#060D24]/65 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060D24] via-transparent to-[#060D24]/60" />
      </div>

      {/* Background radial glowing accents */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#4EDEA3]/15 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none z-0" />

      <Container size="xl" className="relative z-10 w-full">
        <div className="max-w-3xl space-y-6 text-center lg:text-left mx-auto lg:mx-0">
          {/* Grassroot Partner Badge */}
          <div className="inline-flex items-center gap-2 bg-[#141A32]/85 backdrop-blur-md border border-[#4EDEA3]/30 px-4 py-2 rounded-full shadow-lg shadow-[#4EDEA3]/5 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <ShieldCheck className="w-4 h-4 text-[#4EDEA3]" />
            <span className="text-xs font-semibold tracking-wider text-slate-200 uppercase">
              Official Grass Root Partner of Aries Kollam Sailors (KCL)
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight font-display drop-shadow-md">
            BUILDING THE NEXT <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#4EDEA3]">
              GENERATION
            </span>{' '}
            OF CRICKET
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed drop-shadow-sm">
            Empowering schools, discovering young cricketing talent, and creating structured opportunities for students to learn, develop and gain greater exposure through cricket.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <Link to="/join-icc" className="w-full sm:w-auto">
              <Button size="lg" variant="primary" className="w-full sm:w-auto shadow-xl shadow-[#4EDEA3]/20">
                <span>JOIN ICC</span>
                <ArrowUpRight className="w-5 h-5 ml-1" />
              </Button>
            </Link>
            <Link to="/about" className="w-full sm:w-auto">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                <span>EXPLORE ICC</span>
              </Button>
            </Link>
          </div>

          {/* Key Metrics / Highlights */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-lg mx-auto lg:mx-0">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#4EDEA3] drop-shadow-sm">50+</div>
              <div className="text-xs text-slate-300 font-medium">Partner Schools</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#FFCE31] drop-shadow-sm">1,500+</div>
              <div className="text-xs text-slate-300 font-medium">Young Cricketers</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white drop-shadow-sm">6 States</div>
              <div className="text-xs text-slate-300 font-medium">Upcoming Tour</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
