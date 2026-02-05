"use client"

import { useState, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, Search } from "lucide-react"

interface ServiceItem {
  title: string
  description: string
  price: string
  image: string
  category: string
}

const services: ServiceItem[] = [
  { title: "Body Massage", description: "Pijat seluruh tubuh yang menenangkan untuk menghilangkan ketegangan dan meningkatkan kesehatan.", price: "Rp 100.000", image: "/serene-spa-massage-therapy.jpg", category: "Massage" },
  { title: "Totok Punggung", description: "Terapi pijat punggung tradisional untuk melegakan dan merelaksasi otot.", price: "Rp 50.000", image: "/totok punggung.jpg", category: "Massage" },
  { title: "Lulur Badan", description: "Perawatan lulur tradisional Indonesia untuk kulit halus dan bercahaya.", price: "Rp 100.000", image: "/lulur badan.jpg", category: "Body Treatment" },
  { title: "Facial Reguler", description: "Perawatan wajah dasar untuk kulit bersih dan segar.", price: "Rp 150.000", image: "/facial reguler.jpg", category: "Facial" },
  { title: "Facial Detox", description: "Pembersihan wajah secara mendalam untuk menghilangkan kotoran dan racun.", price: "Rp 200.000", image: "/facial detox.jpg", category: "Facial" },
  { title: "Facial Hydra", description: "Perawatan wajah hidrasi intensif untuk kulit kering dan dehidrasi.", price: "Rp 200.000", image: "/facial hydra.jpg", category: "Facial" },
  { title: "Facial Microdermabrasi", description: "Perawatan pengelupasan lanjutan untuk kulit lebih halus dan tampak lebih muda.", price: "Rp 200.000", image: "/facial microdermabrasi.jpg", category: "Facial" },
  { title: "Setrika Wajah (RF)", description: "Perawatan frekuensi radio untuk mengencangkan kulit dan anti-penuaan.", price: "Rp 200.000", image: "/setrika wajah.jpg", category: "Facial" },
  { title: "Facial HF", description: "Perawatan wajah frekuensi tinggi untuk jerawat dan peremajaan kulit.", price: "Rp 200.000", image: "/facial hf.jpg", category: "Facial" },
  { title: "IPL Treatment", description: "Terapi cahaya berdenyut intens untuk peremajaan kulit dan penghilangan bulu.", price: "Rp 200.000", image: "/IPL.jpg", category: "Facial" },
  { title: "Terapi Omega Light (PDT)", description: "Terapi fotodinamik untuk perawatan dan peremajaan kulit.", price: "Rp 75.000", image: "/pdt.jpg", category: "Facial" },
  { title: "Totok Wajah", description: "Pijat wajah tradisional untuk meningkatkan sirkulasi dan relaksasi.", price: "Rp 50.000", image: "/totok wajah.jpg", category: "Massage" },
  { title: "Potong Rambut", description: "Layanan potong rambut profesional untuk semua jenis rambut.", price: "Rp 20.000", image: "/potong rambut 1.jpg", category: "Hair" },
  { title: "Keramas", description: "Layanan cuci rambut dengan shampoo dan kondisioner premium.", price: "Rp 15.000", image: "/keramas.jpg", category: "Hair" },
  { title: "Cuci Catok", description: "Layanan cuci dan pelurusan rambut untuk rambut halus dan lembut.", price: "Mulai dari Rp 50.000", image: "/cuci catok.webp", category: "Hair" },
  { title: "Cuci Blow", description: "Layanan cuci rambut dan blow dry untuk rambut bervolume dan ditata.", price: "Mulai dari Rp 50.000", image: "/cuci blow.jpg", category: "Hair" },
  { title: "Catok Curly", description: "Layanan pengeritingan rambut untuk ikal yang indah dan mengembang.", price: "Mulai dari Rp 50.000", image: "/catok curly.jpg", category: "Hair" },
  { title: "Curly Permanen", description: "Perawatan pengeritingan permanen untuk rambut keriting yang tahan lama.", price: "Rp 250.000", image: "/curly permanen.jpg", category: "Hair" },
  { title: "Creambath", description: "Perawatan rambut deep conditioning untuk rambut sehat dan ternutrisi.", price: "Rp 75.000", image: "/crembath.jpeg", category: "Hair" },
  { title: "Hair Mask", description: "Perawatan masker rambut intensif untuk rambut rusak dan kering.", price: "Rp 75.000", image: "/hair mask.jpg", category: "Hair" },
  { title: "Smoothing", description: "Perawatan penghalus rambut untuk rambut halus dan mudah diatur.", price: "Mulai dari Rp 200.000", image: "/smoothing.jpg", category: "Hair" },
  { title: "Colouring / Toning", description: "Layanan pewarnaan dan pengencangan rambut profesional.", price: "Mulai dari Rp 150.000", image: "/colouring.jpg", category: "Hair" },
  { title: "Nano Hair Keratin", description: "Merawat dan mengembalikan rambut yang rusak akibat pewarnaan dan proses kimiawi.", price: "Mulai dari Rp 150.000", image: "/nano hair.jpg", category: "Hair" },
  { title: "Perawatan Kutu Rambut", description: " Menghilangkan Kutu Rambut.", price: "Mulai dari Rp 100.000", image: "/kutu rambut.jpg", category: "Hair" },
  { title: "Make Up Lamaran", description: "Riasan pertunangan profesional untuk momen spesial Anda.", price: "Mulai dari Rp 500.000", image: "/bridal-makeup-and-hair-styling.jpg", category: "Makeup" },
  { title: "Make Up Wisuda", description: "Layanan tata rias wisuda untuk perayaan prestasi Anda.", price: "Mulai dari Rp 150.000", image: "/bridal-makeup-and-hair-styling.jpg", category: "Makeup" },
  { title: "Make Up Karnaval", description: "Riasan karnaval kreatif untuk acara dan perayaan khusus.", price: "Mulai dari Rp 150.000", image: "/bridal-makeup-and-hair-styling.jpg", category: "Makeup" },
  { title: "Sewa Kostum Pengantin", description: "Penyewaan kostum pengantin tradisional dan modern untuk hari spesial Anda.", price: "", image: "/bridal-makeup-and-hair-styling.jpg", category: "Rental" },
  { title: "Sewa Kebaya", description: "Penyewaan kebaya tradisional Indonesia untuk acara formal dan perayaan.", price: "", image: "/bridal-makeup-and-hair-styling.jpg", category: "Rental" },
  { title: "Sewa Baju Karnaval", description: "Penyewaan kostum karnaval kreatif untuk berbagai tema dan acara spesial.", price: "", image: "/bridal-makeup-and-hair-styling.jpg", category: "Rental" },
  { title: "Sewa Baju Adat", description: "Penyewaan pakaian adat tradisional dari berbagai daerah di Indonesia.", price: "", image: "/bridal-makeup-and-hair-styling.jpg", category: "Rental" },
  { title: "Sewa Jas", description: "Penyewaan jas formal dan semi formal untuk acara bisnis dan perayaan.", price: "", image: "/bridal-makeup-and-hair-styling.jpg", category: "Rental" },
  { title: "Sewa Baju Profesi", description: "Penyewaan seragam dan pakaian profesi untuk berbagai kebutuhan kerja.", price: "", image: "/bridal-makeup-and-hair-styling.jpg", category: "Rental" },
]

const categories = ["Semua", "Facial", "Hair", "Massage", "Body Treatment", "Makeup", "Rental"]

function ServiceCard({ service }: { service: ServiceItem }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 bg-card/80 backdrop-blur-sm border-border/50 hover:border-accent/30 group">
      <div className="aspect-[3/2] overflow-hidden relative">
        <img
          src={service.image || "/placeholder.svg"}
          alt={service.title}
          className="w-full object-cover group-hover:scale-110 transition-transform duration-300 h-full"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="text-lg sm:text-xl font-handwriting text-foreground flex-1">{service.title}</h3>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 hover:bg-accent/10 rounded transition-colors"
          >
            <ChevronDown
              size={20}
              className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        <p className={`text-muted-foreground mb-4 leading-relaxed text-sm transition-all duration-300 ${
          isExpanded ? "line-clamp-none" : "line-clamp-2"
        }`}>
          {service.description}
        </p>

        <div className="flex items-center justify-between gap-2 pt-4 border-t border-border/30">
          {service.price && <span className="text-sm sm:text-base font-medium text-accent">{service.price}</span>}
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              window.open(
                `https://wa.me/6281325808507?text=Assalamualaikum...saya mau booking ${service.title} di Sekar Kedaton Beauty Salon.`,
                "_blank",
              )
            }
            className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 hover:from-amber-700 hover:via-yellow-700 hover:to-amber-800 text-white shadow-md hover:shadow-lg transition-all duration-300 border-0 text-xs sm:text-sm hover:scale-105"
          >
            Book Now
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export function Services() {
  const [selectedCategory, setSelectedCategory] = useState("Semua")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchesCategory = selectedCategory === "Semua" || service.category === selectedCategory
      const matchesSearch =
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_0%,transparent_50%)] pointer-events-none"></div>
      <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl text-balance mb-4 sm:mb-6 text-foreground font-handwriting md:text-5xl font-bold">
            Layanan Kami
          </h2>
          <p className="text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed text-sm sm:text-base px-2">
            Temukan berbagai layanan kecantikan dan kesehatan terlengkap dengan harga terjangkau di Sekar Kedaton Beauty Salon.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Cari layanan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-background/50 border border-border/50 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
            />
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="mb-12 flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 text-white shadow-lg"
                  : "bg-background/50 text-foreground border border-border/50 hover:bg-background/70 hover:border-accent/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredServices.length > 0 ? (
            filteredServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground text-lg">Tidak ada layanan yang sesuai dengan pencarian Anda</p>
            </div>
          )}
        </div>

        {/* Result Count */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground text-sm">
            Menampilkan {filteredServices.length} dari {services.length} layanan
          </p>
        </div>
      </div>
    </section>
  )
}
