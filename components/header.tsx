"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Beranda", href: "#home" },
    { label: "Layanan", href: "#services" },
    { label: "Galeri", href: "#gallery" },
    { label: "Tentang", href: "#about" },
    { label: "Kontak", href: "#contact" },
  ]

  const handleSmoothScroll = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-background/80 backdrop-blur-sm border-b border-border/50"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center group cursor-pointer" onClick={() => handleSmoothScroll("#home")}>
            <div className="font-handwriting font-bold tracking-wide transform transition-transform duration-300 group-hover:scale-105">
              <div className="text-2xl md:text-3xl">
                <span className="text-foreground">Sekar</span>
                <span className="text-accent ml-2">Kedaton</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleSmoothScroll(link.href)}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-accent transition-all duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              onClick={() =>
                window.open(
                  "https://wa.me/6281325808507?text=Assalamualaikum.. saya mau booking di Sekar Kedaton Beauty Salon",
                  "_blank",
                )
              }
              className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 hover:from-amber-700 hover:via-yellow-700 hover:to-amber-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 hover:scale-105"
            >
              Buat Janji
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-accent/10 rounded-lg transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col space-y-2 border-t border-border/50 pt-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleSmoothScroll(link.href)}
                  className="text-foreground hover:text-accent hover:bg-accent/5 transition-all duration-200 text-sm px-3 py-2.5 rounded-lg text-left"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => {
                  window.open(
                    "https://wa.me/6281325808507?text=Assalamualaikum.. saya mau booking di Sekar Kedaton Beauty Salon",
                    "_blank",
                  )
                  setIsMenuOpen(false)
                }}
                className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 hover:from-amber-700 hover:via-yellow-700 hover:to-amber-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 w-full text-sm py-2 mt-2"
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
