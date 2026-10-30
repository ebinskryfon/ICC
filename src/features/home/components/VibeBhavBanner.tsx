import React from 'react'
import { Link } from 'react-router-dom'
import { Flame, CheckCircle, MapPin, ArrowUpRight, Sparkles } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

export const VibeBhavBanner: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 relative bg-[#040817] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-rose-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#4EDEA3]/10 rounded-full blur-[140px] pointer-events-none" />

      <Container size="xl" className="relative z-10">
        <div className="rounded-3xl bg-gradient-to-r from-[#17132B] via-[#141A32] to-[#0E1B2E] border border-white/10 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Col */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="emerald">ICC PRESENTS</Badge>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/15 text-rose-400 border border-rose-500/30">
                  <Flame className="w-3.5 h-3.5" /> High Energy Six-Hit Challenge
                </span>
              </div>

              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-display">
                  VIBE-BHAV SIXES CHALLENGE
                </h2>
                <div className="text-base sm:text-lg font-bold text-[#4EDEA3]">
                  Six Balls, Maximum Sixes. One Chance to Shine.
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Vibe-Bhav is a high-energy six-hit cricket challenge where young players get six deliveries to showcase their power, timing, and batting ability. Every ball is an opportunity to go big, compete with confidence, and show what they can do on the cricket field.
              </p>

              {/* Status pills */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300 bg-black/30 p-3 rounded-xl border border-white/5">
                  <CheckCircle className="w-4 h-4 text-[#4EDEA3] shrink-0" />
                  <span>
                    <strong className="text-white">First Phase Successfully Completed</strong> at Thiruvananthapuram, Kerala
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#FFCE31] bg-black/30 p-3 rounded-xl border border-[#FFCE31]/20">
                  <MapPin className="w-4 h-4 text-[#FFCE31] shrink-0" />
                  <span>
                    <strong className="text-white">Coming Next:</strong> Expanding Across 6 States of India
                  </span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link to="/vibe-bhav">
                  <Button variant="primary" size="lg" className="shadow-lg shadow-[#4EDEA3]/20">
                    <span>REGISTER NOW</span>
                    <ArrowUpRight className="w-5 h-5 ml-1" />
                  </Button>
                </Link>
                <Link to="/vibe-bhav">
                  <Button variant="outline" size="lg">
                    <span>VIEW RULES & DETAILS</span>
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Logo / Graphic */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative p-6 rounded-3xl bg-[#060D24]/80 border border-white/10 backdrop-blur-md shadow-2xl text-center space-y-4">
                <div className="w-48 h-48 mx-auto flex items-center justify-center">
                  <img
                    src="/images/logo-vibebhav.png"
                    alt="Vibe-Bhav Sixes Challenge"
                    className="max-h-full max-w-full object-contain filter drop-shadow-[0_10px_20px_rgba(237,76,92,0.3)]"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none'
                    }}
                  />
                </div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                  Limited to 150 Batters per Zone
                </div>
                <div className="text-[11px] text-[#4EDEA3] font-medium bg-[#4EDEA3]/10 py-1.5 px-3 rounded-lg border border-[#4EDEA3]/20 inline-flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> ₹500 Registration at Venue
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
