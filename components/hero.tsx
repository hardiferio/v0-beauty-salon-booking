"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="home"
      className="pt-20 pb-16 px-4 relative min-h-screen flex items-center"
      style={{
        backgroundImage: "url(/skar-kedaton-hero-logo.png)",
        backgroundSize: "600px 600px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/40 my-0 border-[rgba(122,116,116,1)]"></div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-balance leading-tight drop-shadow-2xl px-0 py-1 text-chart-3 leading-7 tracking-normal text-3xl mb-1.5 mt-px md:text-3xl font-mono">
            Maksimalkan kecantikan alami Anda dengan perawatan khusus wanita 
          </h1>

          <p className="text-gray-200 text-balance mb-12 leading-relaxed drop-shadow-lg text-lg md:text-base font-mono">
            {
              "Rasakan perawatan kecantikan di tempat kami yang tenang, di mana kami akan memaksimalkan pancaran kecantikan anda."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() =>
                window.open(
                  "https://wa.me/6281325808507?text=Assalamualaikum.. saya mau booking di Sekar Kedaton Beauty Salon.",
                  "_blank",
                )
              }
              className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 hover:from-amber-700 hover:via-yellow-700 hover:to-amber-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 border-0 px-8 py-6 text-base font-normal font-mono"
            >
              Booking Sekarang
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-6 text-base border-secondary-foreground font-normal font-mono"
            >
              Layanan Kami
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
