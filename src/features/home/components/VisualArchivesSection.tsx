import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Camera } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

export const VisualArchivesSection: React.FC = () => {
  // Key images downloaded from Figma
  const previewImages = [
    {
      src: '/images/gallery_1.png',
      alt: 'Tournament Celebration',
      tag: 'KCL Tournaments',
      fallback: '/images/4b50a53bc2ab075f414498328574189050ef9fb1.png',
    },
    {
      src: '/images/gallery_2.png',
      alt: 'School Net Training Camp',
      tag: 'Training Camps',
      fallback: '/images/caf971daad837e8b4afe60282bf540a1e69d185f.png',
    },
    {
      src: '/images/gallery_3.png',
      alt: 'Match Day Action',
      tag: 'Match Day',
      fallback: '/images/ddd090a69a1b703c0e60799b447d4dd279f0702f.png',
    },
    {
      src: '/images/1792e033b27ce08feead6107b937635a87f0e7c7.png',
      alt: 'Award Presentation',
      tag: 'Achievements',
      fallback: '/images/5d79ea11f1a2e015cf2740fe84f3319059f494b9.png',
    },
  ]

  return (
    <section className="py-20 lg:py-28 relative bg-[#040817] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-[#4EDEA3]/5 blur-[160px] pointer-events-none" />

      <Container size="xl" className="relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4 max-w-xl">
            <Badge variant="emerald">VISUAL ARCHIVES</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight font-display">
              MOMENTS FROM THE EXCITING JOURNEY
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              A glimpse into match highlights, school training inaugurations, and the rising energy of grassroots cricket across Kerala.
            </p>
          </div>

          <div>
            <Link to="/gallery">
              <Button variant="outline" size="md">
                <Camera className="w-4 h-4 mr-1.5" />
                <span>View Full Gallery</span>
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Gallery Preview Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewImages.map((img, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#141A32] border border-white/10 shadow-lg"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = img.fallback
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060D24] via-[#060D24]/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="text-xs font-semibold text-white px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-sm border border-white/10">
                  {img.tag}
                </span>
                <span className="text-[11px] text-slate-300">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
