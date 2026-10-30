import React from 'react'
import { Link } from 'react-router-dom'
import { ShieldCheck, Trophy, Target, Eye, Users, Award, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20">
      {/* Hero Banner */}
      <section className="relative py-16 lg:py-24 overflow-hidden border-b border-white/10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-[#4EDEA3]/10 blur-[150px] pointer-events-none" />

        <Container size="xl" className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
          <Badge variant="emerald">ABOUT US</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase font-display">
            Every Cricket Journey Begins With An Opportunity
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Indywood Cricket Club (ICC) is dedicated to revolutionizing school cricket across India. We believe champions aren't just found at the top—they are nurtured right from the school grounds.
          </p>
          <div className="inline-flex items-center gap-2 bg-[#141A32] border border-[#4EDEA3]/30 px-4 py-2 rounded-full text-xs font-semibold text-slate-200">
            <ShieldCheck className="w-4 h-4 text-[#4EDEA3]" />
            <span>Official Grass Root Partner of Aries Kollam Sailors (KCL Champions)</span>
          </div>
        </Container>
      </section>

      {/* Identity & Foundation */}
      <section className="py-20 bg-[#060D24] relative">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="slate">IDENTITY AND FOUNDATION</Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
                Dedicated to Grassroots Cricket Excellence
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Indywood Cricket Club was established with a singular objective: to strengthen grassroots cricket by building vibrant, enduring cricket clubs inside school ecosystems. While elite academies exist in major cities, millions of talented school students lack access to standardized kits, regular match fixtures, and certified mentors.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                ICC bridges this divide. In direct collaboration with forward-thinking school administrations and Aries Kollam Sailors, we bring structured sports infrastructure, inter-school tournaments, and talent scouting directly to the classroom doorstep.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Creating and equipping school cricket clubs with match kits.',
                  'Organizing regular, officiating inter-school competitive fixtures.',
                  'Scouting young players for high-performance development camps.',
                  'Providing clear pathways from school play to the professional arena.',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-[#4EDEA3] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden bg-[#141A32] border border-white/10 p-3 shadow-2xl">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                  <img
                    src="/images/gallery_2.png"
                    alt="ICC Coaching Camp"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/caf971daad837e8b4afe60282bf540a1e69d185f.png'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D24] via-transparent to-transparent opacity-70" />
                  <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10">
                    <div className="text-xs font-bold text-[#4EDEA3] uppercase">Grassroots Academy</div>
                    <div className="text-sm font-semibold text-white">Nurturing Tomorrow's Champions in Kerala</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-[#040817] border-y border-white/10 relative">
        <Container size="xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <Card glow className="bg-[#141A32] border-white/10 p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#4EDEA3]/10 border border-[#4EDEA3]/25 flex items-center justify-center text-[#4EDEA3]">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white uppercase font-display">Our Vision</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                To build India’s largest and most accessible grassroots sports ecosystem, where every school student with a passion for cricket receives the encouragement, coaching, and stage to realize their highest potential.
              </p>
            </Card>

            {/* Mission */}
            <Card glow className="bg-[#141A32] border-white/10 p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FFCE31]/10 border border-[#FFCE31]/25 flex items-center justify-center text-[#FFCE31]">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white uppercase font-display">Our Mission</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                To partner with 500+ schools across multiple Indian states, implement structured training and regular match fixtures, scout promising athletes, and connect raw talent directly with professional leagues.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Strategic Partnership with Aries Sailors */}
      <section className="py-20 bg-[#060D24]">
        <Container size="xl">
          <div className="rounded-3xl bg-gradient-to-r from-[#141A32] to-[#181E36] border border-white/10 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FFCE31] bg-[#FFCE31]/10 px-3 py-1 rounded-full border border-[#FFCE31]/30 uppercase">
                <Trophy className="w-3.5 h-3.5" /> Professional Alignment
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase font-display">
                Powered by Aries Kollam Sailors
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                As the official grassroots partner of Aries Kollam Sailors, the Season 1 champions of the Kerala Cricket League, ICC participants gain unparalleled access to professional athletes, elite masterclasses, and talent trials.
              </p>
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row gap-4">
              <Link to="/join-icc">
                <Button variant="primary" size="lg">
                  <span>Affiliate Your School</span>
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
