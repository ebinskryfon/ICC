import React from 'react'
import { Link } from 'react-router-dom'
import { Trophy, Shield, Star, Award, ArrowUpRight, CheckCircle2, Flame, Users } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

export const AriesSailorsPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20">
      {/* Hero Banner */}
      <section className="relative py-16 lg:py-24 overflow-hidden border-b border-white/10">
        <div className="absolute top-0 right-1/3 w-full max-w-5xl h-96 bg-[#FFCE31]/10 blur-[160px] pointer-events-none" />

        <Container size="xl" className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Badge variant="gold">
              <Trophy className="w-3.5 h-3.5 mr-1" />
              Kerala Cricket League (KCL) Champions
            </Badge>
            <Badge variant="emerald">Official Partnership</Badge>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase font-display">
            Aries Kollam Sailors
          </h1>

          <p className="text-xl sm:text-2xl font-bold text-[#FFCE31]">
            Champions on the Pitch. Mentors for the Next Generation.
          </p>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Aries Kollam Sailors made history by lifting the trophy in the inaugural season of the Kerala Cricket League. Beyond franchise glory, the Sailors are passionately committed to lifting grassroots cricket through the Indywood Cricket Club network.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link to="/join-icc">
              <Button size="lg" variant="primary">
                <span>Connect Your School to Sailors</span>
                <ArrowUpRight className="w-5 h-5 ml-1" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Championship Spotlight */}
      <section className="py-20 bg-[#060D24]">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative p-8 rounded-3xl bg-gradient-to-b from-[#181E36] to-[#0A1024] border border-[#FFCE31]/30 shadow-2xl text-center space-y-6">
                <div className="w-36 h-36 mx-auto rounded-full bg-gradient-to-tr from-[#FFCE31]/20 to-[#4EDEA3]/20 border border-[#FFCE31]/40 flex items-center justify-center p-4">
                  <img
                    src="/images/logo-sailors.png"
                    alt="Aries Kollam Sailors Logo"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl font-black text-white uppercase font-display">
                    KCL Season 1 Champions
                  </h3>
                  <p className="text-xs text-[#FFCE31] font-bold uppercase tracking-widest">
                    Pioneering Kerala Sports Excellence
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-300 leading-relaxed text-left space-y-2">
                  <div className="flex items-center gap-2 font-bold text-white">
                    <Star className="w-4 h-4 text-[#FFCE31]" />
                    <span>Inaugural League Victor</span>
                  </div>
                  <p className="text-slate-400">
                    Dominating bowling attacks, stellar batting displays, and tactical brilliance defined Aries Kollam Sailors’ run to the title.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <Badge variant="emerald">THE GRASSROOTS CONNECTION</Badge>
              <h2 className="text-3xl sm:text-4xl font-black text-white uppercase font-display">
                Bridging Professional Franchises with Schoolgrounds
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                The Indywood Cricket Club operates as the grassroots engine for the Aries Kollam Sailors. While elite professional franchises typically select from established players, ICC and the Sailors believe in finding, coaching, and supporting young talents before anyone else has seen them.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <Card glow className="bg-[#141A32] border-white/10 p-5 space-y-2">
                  <Users className="w-5 h-5 text-[#4EDEA3]" />
                  <h4 className="text-base font-bold text-white">Player Masterclasses</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Sailors stars visit partner schools for workshops, bowling clinics, and interactive masterclasses.
                  </p>
                </Card>

                <Card glow className="bg-[#141A32] border-white/10 p-5 space-y-2">
                  <Flame className="w-5 h-5 text-[#FFCE31]" />
                  <h4 className="text-base font-bold text-white">Fast-Track Scouting</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Outstanding performances in ICC inter-school tournaments earn direct invitations to Sailors trials.
                  </p>
                </Card>
              </div>

              <div className="space-y-3 pt-2">
                {[
                  'Access to high-performance analytics and video technique analysis',
                  'Exclusive masterclass clinics conducted by KCL coaching staff',
                  'Scholarship and sponsorship recommendations for exceptional prodigies',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#4EDEA3] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
