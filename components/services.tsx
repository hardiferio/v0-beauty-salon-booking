"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Body Massage",
    description: "Relaxing full body massage to relieve tension and promote wellness.",
    price: "Rp 80.000",
    image: "/serene-spa-massage-therapy.jpg",
  },
  {
    title: "Totok Punggung",
    description: "Traditional back massage therapy for muscle relief and relaxation.",
    price: "Rp 50.000",
    image: "/serene-spa-massage-therapy.jpg",
  },
  {
    title: "Bekam",
    description: "Traditional cupping therapy for health and wellness benefits.",
    price: "Rp 175.000",
    image: "/serene-spa-massage-therapy.jpg",
  },
  {
    title: "Lulur Badan",
    description: "Traditional Indonesian body scrub treatment for smooth, glowing skin.",
    price: "Rp 100.000",
    image: "/serene-spa-massage-therapy.jpg",
  },
  {
    title: "Facial Reguler",
    description: "Basic facial treatment for clean and refreshed skin.",
    price: "Rp 150.000",
    image: "/luxury-facial-skincare-treatment.jpg",
  },
  {
    title: "Facial Detox",
    description: "Deep cleansing facial to remove impurities and toxins.",
    price: "Rp 200.000",
    image: "/luxury-facial-skincare-treatment.jpg",
  },
  {
    title: "Facial Hydra",
    description: "Intensive hydrating facial for dry and dehydrated skin.",
    price: "Rp 200.000",
    image: "/luxury-facial-skincare-treatment.jpg",
  },
  {
    title: "Facial Microdermabrasi",
    description: "Advanced exfoliation treatment for smoother, younger-looking skin.",
    price: "Rp 200.000",
    image: "/luxury-facial-skincare-treatment.jpg",
  },
  {
    title: "Setrika Wajah (RF)",
    description: "Radio frequency treatment for skin tightening and anti-aging.",
    price: "Rp 200.000",
    image: "/luxury-facial-skincare-treatment.jpg",
  },
  {
    title: "Facial HF",
    description: "High frequency facial treatment for acne and skin rejuvenation.",
    price: "Rp 200.000",
    image: "/luxury-facial-skincare-treatment.jpg",
  },
  {
    title: "IPL Treatment",
    description: "Intense pulsed light therapy for skin rejuvenation and hair removal.",
    price: "Rp 200.000",
    image: "/luxury-facial-skincare-treatment.jpg",
  },
  {
    title: "Terapi Omega Light (PDT)",
    description: "Photodynamic therapy for skin treatment and rejuvenation.",
    price: "Rp 75.000",
    image: "/luxury-facial-skincare-treatment.jpg",
  },
  {
    title: "Totok Wajah",
    description: "Traditional facial massage for improved circulation and relaxation.",
    price: "Rp 50.000",
    image: "/luxury-facial-skincare-treatment.jpg",
  },
  {
    title: "Potong Rambut",
    description: "Professional hair cutting service for all hair types.",
    price: "Rp 20.000",
    image: "/elegant-hair-salon-styling.jpg",
  },
  {
    title: "Keramas",
    description: "Hair washing service with premium shampoo and conditioning.",
    price: "Rp 15.000",
    image: "/elegant-hair-salon-styling.jpg",
  },
  {
    title: "Cuci Catok",
    description: "Hair wash and straightening service for sleek, smooth hair.",
    price: "Mulai dari Rp 50.000",
    image: "/elegant-hair-salon-styling.jpg",
  },
  {
    title: "Cuci Blow",
    description: "Hair wash and blow dry service for voluminous, styled hair.",
    price: "Mulai dari Rp 50.000",
    image: "/elegant-hair-salon-styling.jpg",
  },
  {
    title: "Catok Curly",
    description: "Hair curling service for beautiful, bouncy curls.",
    price: "Mulai dari Rp 50.000",
    image: "/elegant-hair-salon-styling.jpg",
  },
  {
    title: "Curly Permanen",
    description: "Permanent curling treatment for long-lasting curly hair.",
    price: "Rp 250.000",
    image: "/elegant-hair-salon-styling.jpg",
  },
  {
    title: "Creambath",
    description: "Deep conditioning hair treatment for healthy, nourished hair.",
    price: "Rp 75.000",
    image: "/elegant-hair-salon-styling.jpg",
  },
  {
    title: "Hair Mask",
    description: "Intensive hair mask treatment for damaged and dry hair.",
    price: "Rp 75.000",
    image: "/elegant-hair-salon-styling.jpg",
  },
  {
    title: "Smoothing",
    description: "Hair smoothing treatment for silky, manageable hair.",
    price: "Mulai dari Rp 200.000",
    image: "/elegant-hair-salon-styling.jpg",
  },
  {
    title: "Colouring / Toning",
    description: "Professional hair coloring and toning services.",
    price: "Mulai dari Rp 150.000",
    image: "/elegant-hair-salon-styling.jpg",
  },
  {
    title: "Make Up Lamaran",
    description: "Professional engagement makeup for your special moment.",
    price: "Mulai dari Rp 250.000",
    image: "/bridal-makeup-and-hair-styling.jpg",
  },
  {
    title: "Make Up Wisuda",
    description: "Graduation makeup service for your achievement celebration.",
    price: "Mulai dari Rp 150.000",
    image: "/bridal-makeup-and-hair-styling.jpg",
  },
  {
    title: "Make Up Karnaval",
    description: "Creative carnival makeup for special events and celebrations.",
    price: "Mulai dari Rp 150.000",
    image: "/bridal-makeup-and-hair-styling.jpg",
  },
  {
    title: "Sewa Kostum Pengantin",
    description: "Rental layanan kostum pengantin tradisional dan modern untuk hari spesial Anda.",
    price: "",
    image: "/bridal-makeup-and-hair-styling.jpg",
  },
  {
    title: "Sewa Kebaya",
    description: "Rental kebaya tradisional Indonesia untuk acara formal dan perayaan.",
    price: "",
    image: "/bridal-makeup-and-hair-styling.jpg",
  },
  {
    title: "Sewa Baju Karnaval",
    description: "Rental kostum karnaval kreatif untuk berbagai tema dan acara spesial.",
    price: "",
    image: "/bridal-makeup-and-hair-styling.jpg",
  },
  {
    title: "Sewa Baju Adat",
    description: "Rental pakaian adat tradisional dari berbagai daerah di Indonesia.",
    price: "",
    image: "/bridal-makeup-and-hair-styling.jpg",
  },
  {
    title: "Sewa Jas",
    description: "Rental jas formal dan semi formal untuk acara bisnis dan perayaan.",
    price: "",
    image: "/bridal-makeup-and-hair-styling.jpg",
  },
  {
    title: "Sewa Baju Profesi",
    description: "Rental seragam dan pakaian profesi untuk berbagai kebutuhan kerja.",
    price: "",
    image: "/bridal-makeup-and-hair-styling.jpg",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_0%,transparent_50%)] pointer-events-none"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-balance mb-6 text-foreground">Layanan Kami</h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
            {
              "Temukan berbagai layanan kecantikan dan kesehatan terlengkap dengan harga terjangkau di Sekar Kedaton Beauty Salon."
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/30 mx-6 px-2 my-0"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full object-cover hover:scale-105 transition-transform duration-300 h-full"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-serif mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium text-primary">{service.price}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      window.open(
                        `https://wa.me/6281325808507?text=Assalamualaikum...saya mau booking ${service.title} di Sekar Kedaton Beauty Salon.`,
                        "_blank",
                      )
                    }
                    className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 hover:from-amber-700 hover:via-yellow-700 hover:to-amber-800 text-white shadow-md hover:shadow-lg transition-all duration-300 border-0"
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
