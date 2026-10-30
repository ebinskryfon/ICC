import React from 'react'
import { Link } from 'react-router-dom'
import { Trophy, Shield, Activity, Users, Award, ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export const OfferingsSection: React.FC = () => {
  const offerings = [
    {
      id: '01',
      title: 'Inter School Matches',
      description: 'Regular, well-officiated inter-school fixtures allowing students to test tactics, pressure handling, and match intelligence in genuine competitive atmospheres.',
      icon: Trophy,
    },
    {
      id: '02',
      title: 'Cricket Kits & Gear',
      description: 'Supplying schools with standardized, high-quality match and training equipment to ensure safety, fairness, and professional-grade practice sessions.',
      icon: Shield,
    },
    {
      id: '03',
      title: 'Statewide Tournaments',
      description: 'Structured multi-stage cups and leagues across districts and states, providing high-profile platforms for school teams to make their mark.',
      icon: Award,
    },
    {
      id: '04',
      title: 'Professional Coaching',
      description: 'Curriculum-driven training sessions and special masterclasses conducted by accredited coaches and seasoned first-class / KCL cricketers.',
      icon: Activity,
    },
    {
      id: '05',
      title: 'Scouting & Academy Pathway',
      description: 'Direct performance monitoring giving outstanding school players express entry to high-performance summer camps and Aries Kollam Sailors trials.',
      icon: Users,
    },
  ]

  return (
    <section className="py-20 lg:py-28 relative bg-[#040817] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 -right-32 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#4EDEA3]/5 rounded-full blur-[140px] pointer-events-none" />

      <Container size="xl" className="relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <Badge variant="emerald">OFFERINGS & INFRASTRUCTURE</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight font-display">
            CREATING OPPORTUNITIES BEYOND THE CLASSROOM
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            ICC provides students with holistic opportunities to participate, practice, compete, and develop through a comprehensive range of cricket-focused programs.
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {offerings.map((item, idx) => {
            const Icon = item.icon
            return (
              <Card
                key={item.id}
                glow
                className={`bg-[#141A32] border-white/10 flex flex-col justify-between group ${
                  idx === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-black text-[#4EDEA3]/30 font-display group-hover:text-[#4EDEA3] transition-colors">
                      {item.id}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#181E36] border border-white/10 flex items-center justify-center text-[#4EDEA3]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#4EDEA3] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-slate-300">Standardized & Supported</span>
                  <span className="text-[#4EDEA3] font-bold">ICC Verified</span>
                </div>
              </Card>
            )
          })}

          {/* Quick CTA Card */}
          <div className="rounded-2xl bg-gradient-to-br from-[#181E36] to-[#0A1029] border border-[#4EDEA3]/30 p-6 flex flex-col justify-between shadow-xl">
            <div>
              <span className="text-xs font-bold text-[#4EDEA3] uppercase tracking-widest block mb-2">
                AFFILIATE YOUR SCHOOL
              </span>
              <h3 className="text-xl font-bold text-white mb-3">
                Bring ICC Infrastructure to Your Campus
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Equip your students with professional equipment, inter-school tournaments, and experienced coaching directly at your campus.
              </p>
            </div>
            <Link to="/join-icc">
              <Button variant="primary" size="md" className="w-full">
                <span>Start an ICC Club</span>
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
