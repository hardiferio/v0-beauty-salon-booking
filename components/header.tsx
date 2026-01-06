"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="running-text-container font-extralight">
              <div className="text-3xl font-handwriting font-bold tracking-wide running-text">
                <span className="text-white">Sekar</span>
                <span className="text-amber-400 ml-2">Kedaton</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 font-sans">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-mono">
              Beranda
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-sans">
              Layanan
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-sans">
              Tentang
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-sans">
              Kontak
            </a>
          </nav>

          <div className="hidden md:block">
            <Button
              onClick={() =>
                window.open(
                  "https://wa.me/6281325808507?text=Assalamualaikum.. saya mau booking di Sekar Kedaton Beauty Salon",
                  "_blank",
                )
              }
              className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 hover:from-amber-700 hover:via-yellow-700 hover:to-amber-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 border-0"
            >
              Buat Janji
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">
                Beranda
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">
                Layanan
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                Tentang
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Kontak
              </a>
              <Button
                onClick={() =>
                  window.open(
                    "https://wa.me/6281325808507?text=Assalamualaikum.. saya mau booking di Sekar Kedaton Beauty Salon",
                    "_blank",
                  )
                }
                className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 hover:from-amber-700 hover:via-yellow-700 hover:to-amber-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 w-full"
              >
                Buat Janji
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
