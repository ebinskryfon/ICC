import React from 'react'
import { Link } from 'react-router-dom'
import { Trophy, Star, ArrowUpRight, Zap, Target } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

export const AriesSailorsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 relative bg-[#060D24] overflow-hidden">
      {/* Background radial gold & emerald glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#FFCE31]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#4EDEA3]/10 rounded-full blur-[140px] pointer-events-none" />

      <Container size="xl" className="relative z-10">
        <div className="rounded-3xl bg-gradient-to-br from-[#141A32] via-[#0F162E] to-[#0A1024] border border-white/10 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle logo background watermark */}
          <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none">
            <img
              src="/images/logo-sailors.png"
              alt=""
              className="w-96 h-96 object-contain translate-x-20 translate-y-20"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="gold">
                  <Trophy className="w-3.5 h-3.5 mr-1" />
                  KCL Season 1 Champions
                </Badge>
                <Badge variant="emerald">Exclusive Grassroot Link</Badge>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Indywood Cricket Club × Aries Kollam Sailors
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight font-display">
                  FROM SCHOOL CRICKET TO THE PROFESSIONAL GAME
                </h2>
                <div className="text-sm sm:text-base font-extrabold text-[#4EDEA3] tracking-widest uppercase">
                  TRAIN. DEVELOP. EXPOSURE.
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Through its direct institutional alliance with <strong>Aries Kollam Sailors</strong> (the inaugural Kerala Cricket League Champions), ICC creates unmatchable opportunities for school-age cricketers to experience real professional setups, interact with top athletes, and earn direct trials into high-level squads.
              </p>

              {/* Pathway highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <div className="p-2 rounded-lg bg-[#FFCE31]/10 text-[#FFCE31] shrink-0">
                    <Star className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Mentorship from Champions</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Sessions with players & coaching staff.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <div className="p-2 rounded-lg bg-[#4EDEA3]/10 text-[#4EDEA3] shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Fast-Track Scouting</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Direct scouting path to KCL development.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link to="/aries-sailors">
                  <Button variant="gold" size="lg">
                    <span>EXPLORE ARIES KOLLAM SAILORS</span>
                    <ArrowUpRight className="w-5 h-5 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Sailors Trophy Showcase */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm rounded-2xl bg-[#181E36] border border-white/10 p-6 text-center space-y-6 shadow-xl">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-[#FFCE31]/20 to-[#4EDEA3]/20 border border-[#FFCE31]/40 flex items-center justify-center p-3 shadow-inner">
                  <img
                    src="/images/logo-sailors.png"
                    alt="Aries Kollam Sailors"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none'
                    }}
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-black text-white uppercase tracking-wider">
                    Aries Kollam Sailors
                  </h3>
                  <p className="text-xs text-[#FFCE31] font-semibold tracking-widest uppercase">
                    Kerala Cricket League (KCL) Champions
                  </p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Leading the revival of sports excellence across Kerala with world-class sporting infrastructure, elite training camps, and grassroots sports initiatives.
                </p>

                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-400 flex items-center justify-center gap-2">
                  <Target className="w-4 h-4 text-[#4EDEA3]" />
                  <span>Official Talent Partner for Youth Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
