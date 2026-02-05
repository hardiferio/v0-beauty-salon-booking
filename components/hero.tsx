"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function Hero() {
  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSmoothScroll = () => {
    const servicesSection = document.getElementById("services")
    servicesSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="pt-32 pb-20 px-4 relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: "url(/skar-kedaton-hero-logo.png)",
        backgroundSize: "600px 600px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-1000" style={{
        opacity: 0.4 + scrollY * 0.0001,
      }}></div>

      {/* Scroll effect background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 transition-opacity duration-300"
        style={{ opacity: Math.min(scrollY / 400, 0.6) }}
      ></div>

      <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Animated Title */}
          <h1
            className={`text-balance leading-tight drop-shadow-2xl text-white leading-8 tracking-normal text-2xl sm:text-3xl md:text-5xl font-mono py-1 px-0 mt-0 mb-4 transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Maksimalkan kecantikan alami Anda dengan perawatan khusus wanita
          </h1>

          {/* Animated Subtitle */}
          <p
            className={`text-balance mb-8 leading-relaxed drop-shadow-lg text-sm sm:text-base md:text-lg font-mono text-white px-2 transition-all duration-1000 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Nikmati perawatan kecantikan di tempat kami yang tenang, di mana kami akan memaksimalkan pancaran kecantikan anda.
          </p>

          {/* Animated Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-3 justify-center px-2 transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button
              size="lg"
              onClick={() =>
                window.open(
                  "https://wa.me/6281325808507?text=Assalamualaikum.. saya mau booking di Sekar Kedaton Beauty Salon.",
                  "_blank",
                )
              }
              className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 hover:from-amber-700 hover:via-yellow-700 hover:to-amber-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 border-0 px-6 py-5 text-sm sm:text-base font-normal font-mono hover:scale-105"
            >
              Booking Sekarang
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleSmoothScroll}
              className="px-6 py-5 text-sm sm:text-base border-white text-white hover:bg-white/10 font-normal font-mono transition-all duration-300 hover:scale-105"
            >
              Layanan Kami
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 transition-all duration-300 cursor-pointer group"
        onClick={handleSmoothScroll}
        style={{ opacity: Math.max(1 - scrollY / 200, 0) }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-white/70 font-mono group-hover:text-white transition-colors">Scroll untuk melanjutkan</span>
          <ChevronDown
            size={24}
            className="text-white/70 group-hover:text-accent transition-all duration-300 animate-bounce"
          />
        </div>
      </div>
    </section>
  )
}
