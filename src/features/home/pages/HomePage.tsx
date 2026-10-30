import React from 'react'
import { HeroSection } from '../components/HeroSection'
import { AboutPreviewSection } from '../components/AboutPreviewSection'
import { OfferingsSection } from '../components/OfferingsSection'
import { AriesSailorsSection } from '../components/AriesSailorsSection'
import { VibeBhavBanner } from '../components/VibeBhavBanner'
import { PlayerProgressionSection } from '../components/PlayerProgressionSection'
import { VisualArchivesSection } from '../components/VisualArchivesSection'

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutPreviewSection />
      <OfferingsSection />
      <AriesSailorsSection />
      <VibeBhavBanner />
      <PlayerProgressionSection />
      <VisualArchivesSection />
    </div>
  )
}
