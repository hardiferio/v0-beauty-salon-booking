"use client"

import { Card, CardContent } from "@/components/ui/card"

const galleryItems = [
  {
    title: "Perawatan Rambut Tradisional",
    image: "/javanese-woman-elegant-traditional-hair-styling.jpg",
    alt: "Perawatan rambut tradisional Jawa",
  },
  {
    title: "Perawatan Wajah Spa",
    image: "/javanese-woman-receiving-facial-spa-treatment.jpg",
    alt: "Perawatan wajah spa",
  },
  {
    title: "Seni Nail Art",
    image: "/javanese-woman-professional-nail-art-manicure.jpg",
    alt: "Seni nail art profesional",
  },
  {
    title: "Aplikasi Makeup Profesional",
    image: "/javanese-woman-makeup-application-beauty-salon.jpg",
    alt: "Aplikasi makeup profesional",
  },
  {
    title: "Transformasi Gaya Rambut",
    image: "/javanese-woman-hair-transformation-styling.jpg",
    alt: "Transformasi gaya rambut",
  },
  {
    title: "Terapi Pijat Relaksasi",
    image: "/javanese-woman-relaxing-massage-therapy-spa.jpg",
    alt: "Terapi pijat relaksasi spa",
  },
]

export function Gallery() {
  return (
    <section id="gallery" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-balance mb-6 text-foreground font-mono md:text-3xl">Galeri Kami</h2>
          <p className="text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed text-base">
            Lihat hasil perawatan dan layanan profesional kami yang telah memuaskan ribuan klien.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/30"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.alt}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-serif text-foreground">{item.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
