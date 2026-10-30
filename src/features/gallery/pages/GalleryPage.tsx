import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Camera, Filter, X } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { GalleryImage } from '@/types'

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null)

  const galleryItems: GalleryImage[] = [
    {
      id: '1',
      title: 'KCL Champions Trophy Parade',
      category: 'tournaments',
      src: '/images/gallery_1.png',
      alt: 'Aries Kollam Sailors Championship Celebrations',
    },
    {
      id: '2',
      title: 'Grassroots Net Training Session',
      category: 'training',
      src: '/images/gallery_2.png',
      alt: 'Young students practicing stroke play in nets',
    },
    {
      id: '3',
      title: 'Inter-School Match Intensity',
      category: 'school-clubs',
      src: '/images/gallery_3.png',
      alt: 'Live match action between affiliated school teams',
    },
    {
      id: '4',
      title: 'Vibe-Bhav Sixes Challenge Action',
      category: 'vibe-bhav',
      src: '/images/1792e033b27ce08feead6107b937635a87f0e7c7.png',
      alt: 'Six-hit boundary shot at Thiruvananthapuram phase',
    },
    {
      id: '5',
      title: 'Award Presentation Ceremony',
      category: 'tournaments',
      src: '/images/5d79ea11f1a2e015cf2740fe84f3319059f494b9.png',
      alt: 'Player of the Tournament medal ceremony',
    },
    {
      id: '6',
      title: 'School Club Inauguration',
      category: 'school-clubs',
      src: '/images/3945ecc0a3a458c5a32979d9a0a6102da836d48a.png',
      alt: 'Distributing cricket gear kits to school captain',
    },
    {
      id: '7',
      title: 'Fast Bowling Clinic',
      category: 'training',
      src: '/images/d08328b0899228821006e2992087aaf0cc5801d1.png',
      alt: 'Pace bowling action analysis with certified coaches',
    },
    {
      id: '8',
      title: 'Team Huddle Before Finals',
      category: 'tournaments',
      src: '/images/80d60aabbd73fab693b981e10bad8b70e15424f6.png',
      alt: 'Students strategizing before the final over',
    },
    {
      id: '9',
      title: 'Vibe-Bhav Batters Showcase',
      category: 'vibe-bhav',
      src: '/images/8359eb7a37e95b5421724d94def06700fd9f66db.png',
      alt: 'Power hitting showcase in front of packed spectators',
    },
  ]

  const filteredItems =
    selectedCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory)

  const categories = [
    { id: 'all', label: 'All Archives' },
    { id: 'tournaments', label: 'Tournaments' },
    { id: 'training', label: 'Training Camps' },
    { id: 'school-clubs', label: 'School Clubs' },
    { id: 'vibe-bhav', label: 'Vibe-Bhav Sixes' },
  ]

  return (
    <div className="pt-28 pb-20">
      {/* Hero Header */}
      <section className="relative py-16 overflow-hidden border-b border-white/10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-[#4EDEA3]/10 blur-[150px] pointer-events-none" />

        <Container size="xl" className="relative z-10 text-center max-w-4xl mx-auto space-y-4">
          <Badge variant="emerald">VISUAL ARCHIVES</Badge>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight uppercase font-display">
            MOMENTS FROM OUR JOURNEY
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Documenting the grassroots passion, tournament triumphs, training discipline, club inaugurations, and emerging student talent across Kerala schools and affiliated arenas.
          </p>
        </Container>
      </section>

      {/* Filter Tabs & Gallery Grid */}
      <section className="py-16 bg-[#060D24]">
        <Container size="xl">
          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#4EDEA3] text-[#060D24] shadow-lg shadow-[#4EDEA3]/20 font-bold'
                    : 'bg-[#141A32] text-slate-300 hover:text-white border border-white/10 hover:border-white/20'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveImage(item)}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#141A32] border border-white/10 shadow-lg cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // fallback to hero banner if needed
                    (e.target as HTMLImageElement).src = '/images/hero-banner.png'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060D24] via-[#060D24]/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="p-2 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 inline-block">
                    <Camera className="w-4 h-4 text-[#4EDEA3]" />
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#4EDEA3] px-2 py-0.5 rounded bg-black/50 backdrop-blur-sm border border-white/10 inline-block">
                    {item.category.replace('-', ' ')}
                  </span>
                  <h3 className="text-base font-bold text-white group-hover:text-[#4EDEA3] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-1">{item.alt}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Banner (Frame 21 in Figma) */}
          <div className="rounded-3xl bg-gradient-to-r from-[#141A32] via-[#181E36] to-[#141A32] border border-white/10 p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
            <div className="max-w-2xl mx-auto space-y-4">
              <Badge variant="emerald">PATHWAYS & TALENT SCOUTING</Badge>
              <h2 className="text-3xl sm:text-4xl font-black text-white uppercase font-display">
                BE PART OF THE JOURNEY
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Follow the Indywood Cricket Club journey as we create more structured training, kit support, and match play opportunities for young cricketers across schools.
              </p>
              <div className="pt-2">
                <Link to="/join-icc">
                  <Button variant="primary" size="lg">
                    <span>Join ICC</span>
                    <ArrowUpRight className="w-5 h-5 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#141A32] rounded-3xl border border-white/10 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="max-h-[75vh] overflow-hidden flex items-center justify-center bg-black">
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                className="max-h-[75vh] w-auto object-contain mx-auto"
              />
            </div>
            <div className="p-6 bg-[#141A32]">
              <span className="text-xs uppercase font-bold tracking-widest text-[#4EDEA3]">
                {activeImage.category}
              </span>
              <h3 className="text-xl font-bold text-white mt-1">{activeImage.title}</h3>
              <p className="text-sm text-slate-400 mt-1">{activeImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
