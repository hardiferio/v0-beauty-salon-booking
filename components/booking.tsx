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
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-balance mb-6 text-foreground font-mono md:text-3xl">Buat Janji Anda</h2>
          <p className="text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed text-base">
            {
              "Siap merasakan perawatan kecantikan mewah? Hubungi kami melalui WhatsApp untuk pemesanan instan dan layanan yang dipersonalisasi."
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Card className="p-8">
            <CardContent className="space-y-8">
              <div className="text-center">
                <MessageCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl mb-4 text-foreground font-mono">Pemesanan WhatsApp</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                  {
                    "Pesan langsung melalui WhatsApp! Kirimkan pesan kepada kami dan kami akan mengkonfirmasi janji Anda dalam hitungan menit."
                  }
                </p>
                <Button
                  size="lg"
                  onClick={handleWhatsAppBooking}
                  className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 hover:from-amber-700 hover:via-yellow-700 hover:to-amber-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 border-0 px-8 py-6 text-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Pesan via WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="p-6">
              <CardContent className="flex items-center space-x-4">
                <Clock className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Jam Buka</h4>
                  <p className="text-muted-foreground">Senin-Jumat: 10:00 - 17:00</p>
                  <p className="text-muted-foreground">Sabtu-Minggu: 10:00 - 17:00</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="flex items-center space-x-4">
                <MapPin className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Lokasi</h4>
                  <p className="text-muted-foreground">Karingan</p>
                  <p className="text-muted-foreground">Banjarmangu, RT. 02 RW. 04</p>
                  <p className="text-muted-foreground">Kecamatan Banjarmangu - Banjarnegara</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="flex items-center space-x-4">
                <Phone className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Kontak</h4>
                  <p className="text-muted-foreground">Umu Rosidah</p>
                  <p className="text-muted-foreground">+62 813-2580-8507</p>
                  <p className="text-muted-foreground">hello@sekarkedaton.com</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
