"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Clock, MapPin, Phone } from "lucide-react"

export function Booking() {
  const handleWhatsAppBooking = () => {
    const message = encodeURIComponent("Assalamualaikum.. saya mau booking di Sekar Kedaton Beauty Salon .")
    window.open(`https://wa.me/6281325808507?text=${message}`, "_blank")
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl text-balance mb-4 sm:mb-6 text-foreground font-handwriting md:text-5xl font-bold">
            Buat Janji Anda
          </h2>
          <p className="text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed text-sm sm:text-base px-2">
            {
              "Siap merasakan perawatan kecantikan mewah? Hubungi kami melalui WhatsApp untuk pemesanan instan dan layanan yang dipersonalisasi."
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <Card className="p-6 sm:p-8">
            <CardContent className="space-y-6 sm:space-y-8">
              <div className="text-center">
                <MessageCircle className="w-12 sm:w-16 h-12 sm:h-16 text-accent mx-auto mb-3 sm:mb-4" />
                <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4 text-foreground font-handwriting font-bold">
                  Pemesanan WhatsApp
                </h3>
                <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base px-1">
                  {
                    "Pesan langsung melalui WhatsApp! Kirimkan pesan kepada kami dan kami akan mengkonfirmasi janji Anda dalam hitungan menit."
                  }
                </p>
                <Button
                  size="lg"
                  onClick={handleWhatsAppBooking}
                  className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 hover:from-amber-700 hover:via-yellow-700 hover:to-amber-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 border-0 px-6 py-5 text-sm sm:text-lg w-full"
                >
                  <MessageCircle className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                  Pesan via WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4 sm:space-y-6">
            <Card className="p-4 sm:p-6">
              <CardContent className="flex items-start gap-3 sm:gap-4">
                <Clock className="w-6 sm:w-8 h-6 sm:h-8 text-accent flex-shrink-0 mt-1" />
                <div className="min-w-0">
                  <h4 className="font-sans font-semibold text-foreground mb-1 text-sm sm:text-base">Jam Buka</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">Senin-Jumat: 10:00 - 17:00</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">Sabtu-Minggu: 10:00 - 17:00</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-4 sm:p-6">
              <CardContent className="flex items-start gap-3 sm:gap-4">
                <MapPin className="w-6 sm:w-8 h-6 sm:h-8 text-accent flex-shrink-0 mt-1" />
                <div className="min-w-0">
                  <h4 className="font-sans font-semibold text-foreground mb-1 text-sm sm:text-base">Lokasi</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">Karingan</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">Banjarmangu, RT. 02 RW. 04</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">Kecamatan Banjarmangu - Banjarnegara</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-4 sm:p-6">
              <CardContent className="flex items-start gap-3 sm:gap-4">
                <Phone className="w-6 sm:w-8 h-6 sm:h-8 text-accent flex-shrink-0 mt-1" />
                <div className="min-w-0">
                  <h4 className="font-sans font-semibold text-foreground mb-1 text-sm sm:text-base">Kontak</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">Umu Rosidah</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">+62 813-2580-8507</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
