import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HomePage } from '@/features/home/pages/HomePage'
import { AboutPage } from '@/features/about/pages/AboutPage'
import { GalleryPage } from '@/features/gallery/pages/GalleryPage'
import { JoinICCPage } from '@/features/join-icc/pages/JoinICCPage'
import { VibeBhavPage } from '@/features/vibe-bhav/pages/VibeBhavPage'
import { AriesSailorsPage } from '@/features/aries-sailors/pages/AriesSailorsPage'

// Automatically scrolls to top on navigation change
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
    } else {
      const element = document.getElementById(hash.replace('#', ''))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [pathname, hash])
  return null
}

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#060D24] text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/join-icc" element={<JoinICCPage />} />
            <Route path="/vibe-bhav" element={<VibeBhavPage />} />
            <Route path="/aries-sailors" element={<AriesSailorsPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
