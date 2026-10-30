import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Hammer, Search, TrendingUp, CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export const AboutPreviewSection: React.FC = () => {
  const pillars = [
    {
      step: 'BUILD',
      category: 'GRASSROOT STRUCTURE',
      title: 'Cricket Clubs in Schools',
      description: 'Creating, structuring, and supporting dedicated cricket clubs within school ecosystems to foster sporting spirit from an early age.',
      icon: Hammer,
      accent: '#4EDEA3',
    },
    {
      step: 'DISCOVER',
      category: 'TALENT SCOUTING',
      title: 'Identify Young Talents',
      description: 'Systematically finding students with passion, discipline, and natural instinct for cricket through trials, inter-school matches, and challenges.',
      icon: Search,
      accent: '#FFCE31',
    },
    {
      step: 'DEVELOP',
      category: 'GROWTH PATHWAY',
      title: 'Support Their Journey',
      description: 'Providing elite coaching clinics, modern equipment kits, competitive match play, and direct pathways to professional cricket leagues.',
      icon: TrendingUp,
      accent: '#38BDF8',
    },
  ]

  return (
    <section className="py-20 lg:py-28 relative bg-[#060D24] overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#4EDEA3]/5 blur-[160px] pointer-events-none" />

      <Container size="xl" className="relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <Badge variant="emerald">ABOUT INDYWOOD CRICKET CLUB</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight font-display">
            MORE THAN JUST A CRICKET
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Indywood Cricket Club is a school-focused cricket initiative associated with <strong className="text-white font-semibold">Aries Kollam Sailors</strong>. ICC works directly with schools to build active cricket communities, encourage broad student participation, identify promising talent, and create genuine exposure towards the professional arena.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pillars.map((item, idx) => {
            const Icon = item.icon
            return (
              <Card
                key={item.step}
                glow
                className="group flex flex-col justify-between h-full bg-[#141A32] border-white/10 hover:border-[#4EDEA3]/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-black tracking-widest uppercase px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#4EDEA3]">
                      {item.step}
                    </span>
                    <span className="text-3xl font-black text-white/10 font-display">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-[#181E36] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-[#4EDEA3]" />
                  </div>

                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                    {item.category}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#4EDEA3] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs font-semibold text-[#4EDEA3] gap-1 group-hover:translate-x-1 transition-transform">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Comprehensive Grassroots Execution</span>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Learn More Link */}
        <div className="text-center">
          <Link to="/about">
            <Button variant="secondary" size="md">
              <span>LEARN MORE ABOUT ICC</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  )
}
