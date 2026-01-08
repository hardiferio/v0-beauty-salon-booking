"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="home"
      className="pt-32 pb-20 px-4 relative min-h-screen flex items-center"
      style={{
        backgroundImage: "url(/skar-kedaton-hero-logo.png)",
        backgroundSize: "600px 600px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/40 my-0 border-[rgba(122,116,116,1)]"></div>

      <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-balance leading-tight drop-shadow-2xl text-chart-3 leading-8 tracking-normal text-2xl sm:text-3xl md:text-4xl font-mono py-1 px-0 mt-0 mb-4">
            Maksimalkan kecantikan alami Anda dengan perawatan khusus wanita
          </h1>

          <p className="text-balance mb-8 leading-relaxed drop-shadow-lg text-sm sm:text-base md:text-lg font-mono text-white px-2">
            {
              "Nikmati perawatan kecantikan di tempat kami yang tenang, di mana kami akan memaksimalkan pancaran kecantikan anda."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center px-2">
            <Button
              size="lg"
              onClick={() =>
                window.open(
                  "https://wa.me/6281325808507?text=Assalamualaikum.. saya mau booking di Sekar Kedaton Beauty Salon.",
                  "_blank",
                )
              }
              className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 hover:from-amber-700 hover:via-yellow-700 hover:to-amber-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 border-0 px-6 py-5 text-sm sm:text-base font-normal font-mono"
            >
              Booking Sekarang
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-5 text-sm sm:text-base border-secondary-foreground font-normal font-mono"
            >
              Layanan Kami
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
