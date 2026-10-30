import React from 'react'
import { Container } from '@/components/layout/Container'
import { Badge } from '@/components/ui/Badge'
import { Search, Trophy, Compass, Star } from 'lucide-react'

export const PlayerProgressionSection: React.FC = () => {
  const steps = [
    {
      num: '1',
      title: 'DISCOVER',
      subtitle: 'Identify Potential',
      desc: 'School club setups, fundamental trials, and broad student engagement to discover passion and cricketing aptitude early.',
      icon: Search,
      color: '#4EDEA3',
    },
    {
      num: '2',
      title: 'PARTICIPATE',
      subtitle: 'Structured Practice',
      desc: 'Access to standardized equipment, regular net sessions, and guided coaching under certified school mentors.',
      icon: Compass,
      color: '#38BDF8',
    },
    {
      num: '3',
      title: 'COMPETE',
      subtitle: 'Match Experience',
      desc: 'Inter-school matches, Vibe-Bhav Sixes challenges, and zonal tournaments to cultivate game sense and temperament.',
      icon: Trophy,
      color: '#FFCE31',
    },
    {
      num: '4',
      title: 'EXCEL',
      subtitle: 'Professional Pathway',
      desc: 'Invitation to elite Aries Kollam Sailors high-performance clinics, specialized camps, and professional scouting.',
      icon: Star,
      color: '#ED4C5C',
    },
  ]

  return (
    <section className="py-20 lg:py-28 relative bg-[#060D24] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/5 blur-[160px] pointer-events-none" />

      <Container size="xl" className="relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <Badge variant="emerald">PLAYER PROGRESSION FRAMEWORK</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight font-display">
            EVERY JOURNEY STARTS WITH A FIRST BALL
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            From the first practice session to greater opportunities, ICC aims to support young cricketers throughout their entire sporting journey.
          </p>
        </div>

        {/* 4 Steps Progression Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div
                key={step.num}
                className="relative rounded-2xl bg-[#141A32] border border-white/10 p-6 flex flex-col justify-between hover:border-white/20 transition-all duration-300 group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black border border-white/10"
                      style={{ backgroundColor: `${step.color}15`, color: step.color }}
                    >
                      0{step.num}
                    </span>
                    <div className="p-2 rounded-xl bg-[#181E36] border border-white/5 text-slate-400 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                    {step.subtitle}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#4EDEA3] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs font-semibold text-slate-400">
                  <span>Stage {idx + 1} of 4</span>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
