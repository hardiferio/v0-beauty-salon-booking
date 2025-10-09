"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Body Massage",
    description: "Pijat seluruh tubuh yang menenangkan untuk menghilangkan ketegangan dan meningkatkan kesehatan.",
    price: "Rp 100.000",
    image: "/serene-spa-massage-therapy.jpg",
  },
  {
    title: "Totok Punggung",
    description: "Terapi pijat punggung tradisional untuk melegakan dan merelaksasi otot.",
    price: "Rp 50.000",
    image: "/totok punggung.jpg",
  },
  {
    title: "Lulur Badan",
    description: "Perawatan lulur tradisional Indonesia untuk kulit halus dan bercahaya.",
    price: "Rp 100.000",
    image: "/lulur badan.jpg",
  },
  {
    title: "Facial Reguler",
    description: "Perawatan wajah dasar untuk kulit bersih dan segar.",
    price: "Rp 150.000",
    image: "/facial reguler.jpg",
  },
  {
    title: "Facial Detox",
    description: "Pembersihan wajah secara mendalam untuk menghilangkan kotoran dan racun.",
    price: "Rp 200.000",
    image: "/facial detox.jpg",
  },
  {
    title: "Facial Hydra",
    description: "Perawatan wajah hidrasi intensif untuk kulit kering dan dehidrasi.",
    price: "Rp 200.000",
    image: "/facial hydra.jpg",
  },
  {
    title: "Facial Microdermabrasi",
    description: "Perawatan pengelupasan lanjutan untuk kulit lebih halus dan tampak lebih muda.",
    price: "Rp 200.000",
    image: "/facial microdermabrasi.jpg",
  },
  {
    title: "Setrika Wajah (RF)",
    description: "Perawatan frekuensi radio untuk mengencangkan kulit dan anti-penuaan.",
    price: "Rp 200.000",
    image: "/setrika wajah.jpg",
  },
  {
    title: "Facial HF",
    description: "Perawatan wajah frekuensi tinggi untuk jerawat dan peremajaan kulit.",
    price: "Rp 200.000",
    image: "/facial hf.jpg",
  },
  {
    title: "IPL Treatment",
    description: "Terapi cahaya berdenyut intens untuk peremajaan kulit dan penghilangan bulu.",
    price: "Rp 200.000",
    image: "/IPL.jpg",
  },
  {
    title: "Terapi Omega Light (PDT)",
    description: "Terapi fotodinamik untuk perawatan dan peremajaan kulit.",
    price: "Rp 75.000",
    image: "/pdt.jpg",
  },
  {
    title: "Totok Wajah",
    description: "Pijat wajah tradisional untuk meningkatkan sirkulasi dan relaksasi.",
    price: "Rp 50.000",
    image: "/totok wajah.jpg",
  },
  {
    title: "Potong Rambut",
    description: "Layanan potong rambut profesional untuk semua jenis rambut.",
    price: "Rp 20.000",
    image: "/elegant-hair-salon-styling.jpg",
  },
  {
    title: "Keramas",
    description: "Layanan cuci rambut dengan sampo dan kondisioner premium.",
    price: "Rp 15.000",
    image: "/elegant-hair-salon-styling.jpg",
  },
  {
    title: "Cuci Catok",
    description: "Layanan cuci dan pelurusan rambut untuk rambut halus dan lembut.",
    price: "Mulai dari Rp 50.000",
    image: "/elegant-hair-salon-styling.jpg",
  },
  {
    title: "Cuci Blow",
    description: "Layanan cuci rambut dan blow dry untuk rambut bervolume dan ditata.",
    price: "Mulai dari Rp 50.000",
    image: "/elegant-hair-salon-styling.jpg",
  },
  {
    title: "Catok Curly",
    description: "Layanan pengeritingan rambut untuk ikal yang indah dan mengembang.",
    price: "Mulai dari Rp 50.000",
    image: "/elegant-hair-salon-styling.jpg",
  },
  {
    title: "Curly Permanen",
    description: "Perawatan pengeritingan permanen untuk rambut keriting yang tahan lama.",
    price: "Rp 250.000",
    image: "/elegant-hair-salon-styling.jpg",
  },
  {
    title: "Creambath",
    description: "Perawatan rambut deep conditioning untuk rambut sehat dan ternutrisi.",
    price: "Rp 75.000",
    image: "/elegant-hair-salon-styling.jpg",
  },
  {
    title: "Hair Mask",
    description: "Perawatan masker rambut intensif untuk rambut rusak dan kering.",
    price: "Rp 75.000",
    image: "/elegant-hair-salon-styling.jpg",
  },
  {
    title: "Smoothing",
    description: "Perawatan penghalus rambut untuk rambut halus dan mudah diatur.",
    price: "Mulai dari Rp 200.000",
    image: "/elegant-hair-salon-styling.jpg",
  },
  {
    title: "Colouring / Toning",
    description: "Layanan pewarnaan dan pengencangan rambut profesional.",
    price: "Mulai dari Rp 150.000",
    image: "/elegant-hair-salon-styling.jpg",
  },
  {
    title: "Nano Hair Keratin",
    description: "Merawat dan mengembalikan rambut yang rusak akibat pewarnaan dan proses kimiawi.",
    price: "Mulai dari Rp 150.000",
    image: "/elegant-hair-salon-styling.jpg",
  },
  {
    title: "Perawatan Kutu Rambut",
    description: " Menghilangkan Kutu Rambut.",
    price: "Mulai dari Rp 100.000",
    image: "/elegant-hair-salon-styling.jpg",
  },
  {
    title: "Make Up Lamaran",
    description: "Riasan pertunangan profesional untuk momen spesial Anda.",
    price: "Mulai dari Rp 500.000",
    image: "/bridal-makeup-and-hair-styling.jpg",
  },
  {
    title: "Make Up Wisuda",
    description: "Layanan tata rias wisuda untuk perayaan prestasi Anda.",
    price: "Mulai dari Rp 150.000",
    image: "/bridal-makeup-and-hair-styling.jpg",
  },
  {
    title: "Make Up Karnaval",
    description: "Riasan karnaval kreatif untuk acara dan perayaan khusus.",
    price: "Mulai dari Rp 150.000",
    image: "/bridal-makeup-and-hair-styling.jpg",
  },
  {
    title: "Sewa Kostum Pengantin",
    description: "Penyewaan kostum pengantin tradisional dan modern untuk hari spesial Anda.",
    price: "",
    image: "/bridal-makeup-and-hair-styling.jpg",
  },
  {
    title: "Sewa Kebaya",
    description: "Penyewaan kebaya tradisional Indonesia untuk acara formal dan perayaan.",
    price: "",
    image: "/bridal-makeup-and-hair-styling.jpg",
  },
  {
    title: "Sewa Baju Karnaval",
    description: "Penyewaan kostum karnaval kreatif untuk berbagai tema dan acara spesial.",
    price: "",
    image: "/bridal-makeup-and-hair-styling.jpg",
  },
  {
    title: "Sewa Baju Adat",
    description: "Penyewaan pakaian adat tradisional dari berbagai daerah di Indonesia.",
    price: "",
    image: "/bridal-makeup-and-hair-styling.jpg",
  },
  {
    title: "Sewa Jas",
    description: "Penyewaan jas formal dan semi formal untuk acara bisnis dan perayaan.",
    price: "",
    image: "/bridal-makeup-and-hair-styling.jpg",
  },
  {
    title: "Sewa Baju Profesi",
    description: "Penyewaan seragam dan pakaian profesi untuk berbagai kebutuhan kerja.",
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
          <h2 className="text-4xl font-serif text-balance mb-6 text-foreground md:text-4xl">Layanan Kami</h2>
          <p className="text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed text-lg">
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
