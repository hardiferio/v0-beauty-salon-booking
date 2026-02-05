"use client"

import { useState, useEffect, useRef } from "react"
import { Sparkles } from "lucide-react"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-slate-900/50 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={sectionRef}>
        <div className="max-w-2xl mx-auto">
          {/* Text Content */}
          <div
            className={`font-sans transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-accent text-sm font-medium">Tentang Kami</span>
            </div>

            <h2 className="text-3xl sm:text-4xl text-balance mb-6 sm:mb-8 text-foreground md:text-4xl font-handwriting font-bold">
              Didedikasikan untuk perjalanan kecantikan Anda
            </h2>

            <div className="space-y-4 sm:space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-sm sm:text-base hover:text-foreground transition-colors duration-300 cursor-default">
                Di Sekar Kedaton, kami percaya kecantikan adalah perjalanan pribadi untuk mengekspresikan diri dan percaya diri. Kami menggabungkan keahlian bertahun-tahun dengan teknik terkini untuk menciptakan pengalaman transformatif.
              </p>
              <p className="text-sm sm:text-base hover:text-foreground transition-colors duration-300 cursor-default">
                Didirikan berdasarkan prinsip keunggulan dan perawatan yang dipersonalisasi, kami hanya menggunakan produk premium dan menjaga standar kebersihan dan profesionalisme tertinggi di lingkungan kami yang tenang dan ramah.
              </p>
              <p className="text-sm sm:text-base hover:text-foreground transition-colors duration-300 cursor-default">
                Setiap kunjungan ke Sekar Kedaton dirancang untuk menjadi momen kemewahan dan perawatan diri, di mana Anda dapat bersantai, menyegarkan diri, dan menemukan kembali pancaran alami Anda.
              </p>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}
