"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react"

const galleryItems = [
  { title: "Perawatan Rambut Tradisional", image: "/javanese-woman-elegant-traditional-hair-styling.jpg", alt: "Perawatan rambut tradisional Jawa" },
  { title: "Perawatan Wajah Spa", image: "/javanese-woman-receiving-facial-spa-treatment.jpg", alt: "Perawatan wajah spa" },
  { title: "Seni Nail Art", image: "/javanese-woman-professional-nail-art-manicure.jpg", alt: "Seni nail art profesional" },
  { title: "Aplikasi Makeup Profesional", image: "/javanese-woman-makeup-application-beauty-salon.jpg", alt: "Aplikasi makeup profesional" },
  { title: "Transformasi Gaya Rambut", image: "/javanese-woman-hair-transformation-styling.jpg", alt: "Transformasi gaya rambut" },
  { title: "Terapi Pijat Relaksasi", image: "/javanese-woman-relaxing-massage-therapy-spa.jpg", alt: "Terapi pijat relaksasi spa" },
]

function Lightbox({ image, title, onClose, onPrev, onNext }: {
  image: string
  title: string
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl animate-in zoom-in duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-10 -right-10 lg:top-4 lg:right-4 p-2 hover:bg-white/20 rounded-full transition-colors duration-200 z-10"
        >
          <X size={28} className="text-white" />
        </button>

        {/* Image */}
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        {/* Title */}
        <p className="text-center text-white mt-4 font-handwriting text-lg">{title}</p>

        {/* Navigation Buttons */}
        <button
          onClick={onPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 lg:-translate-x-20 p-2 hover:bg-white/20 rounded-full transition-colors duration-200 text-white hover:text-accent"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={onNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 lg:translate-x-20 p-2 hover:bg-white/20 rounded-full transition-colors duration-200 text-white hover:text-accent"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  )
}

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [displayedCount, setDisplayedCount] = useState(6)

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryItems.length)
    }
  }

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryItems.length) % galleryItems.length)
    }
  }

  return (
    <section id="gallery" className="py-20 px-4 bg-gradient-to-b from-background to-slate-900/50 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.01)_0%,transparent_50%)] pointer-events-none"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-balance mb-6 text-foreground font-handwriting md:text-5xl font-bold">Galeri Kami</h2>
          <p className="text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed text-base">
            Lihat hasil perawatan dan layanan profesional kami yang telah memuaskan ribuan klien. Klik pada gambar untuk melihat detail yang lebih besar.
          </p>
        </div>

        {/* Gallery Grid with Masonry-like Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {galleryItems.slice(0, displayedCount).map((item, index) => (
            <Card
              key={index}
              onClick={() => setSelectedIndex(index)}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 bg-card/80 backdrop-blur-sm border-border/50 hover:border-accent/30 cursor-pointer group"
            >
              <div className="aspect-square overflow-hidden relative bg-gradient-to-br from-slate-800 to-slate-900">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={40} />
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-handwriting text-foreground group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button (if applicable) */}
        {displayedCount < galleryItems.length && (
          <div className="text-center">
            <button
              onClick={() => setDisplayedCount(galleryItems.length)}
              className="px-6 py-3 rounded-full border-2 border-accent text-accent font-medium hover:bg-accent hover:text-background transition-all duration-300 hover:shadow-lg hover:shadow-accent/50"
            >
              Lihat Semua
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <Lightbox
          image={galleryItems[selectedIndex].image}
          title={galleryItems[selectedIndex].title}
          onClose={() => setSelectedIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </section>
  )
}
