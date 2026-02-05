"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Clock, MapPin, Phone, CheckCircle, AlertCircle } from "lucide-react"

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  date: string
  time: string
  notes: string
}

interface FormErrors {
  [key: string]: string
}

export function Booking() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const services = [
    "Pilih Layanan",
    "Facial",
    "Hair Treatment",
    "Massage",
    "Body Treatment",
    "Makeup",
    "Costume Rental",
  ]

  const timeSlots = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"]

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) newErrors.name = "Nama harus diisi"
    if (!formData.email.trim()) newErrors.email = "Email harus diisi"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Format email tidak valid"
    if (!formData.phone.trim()) newErrors.phone = "Nomor telepon harus diisi"
    if (!formData.service || formData.service === "Pilih Layanan")
      newErrors.service = "Pilih layanan terlebih dahulu"
    if (!formData.date) newErrors.date = "Tanggal harus dipilih"
    if (!formData.time) newErrors.time = "Waktu harus dipilih"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsLoading(true)
    const message = encodeURIComponent(
      `Halo, saya ingin booking:\n\nNama: ${formData.name}\nEmail: ${formData.email}\nTelepon: ${formData.phone}\nLayanan: ${formData.service}\nTanggal: ${formData.date}\nWaktu: ${formData.time}${
        formData.notes ? `\nCatatan: ${formData.notes}` : ""
      }`
    )
    window.open(`https://wa.me/6281325808507?text=${message}`, "_blank")

    setTimeout(() => {
      setSubmitted(true)
      setIsLoading(false)
      setFormData({ name: "", email: "", phone: "", service: "", date: "", time: "", notes: "" })
      setTimeout(() => setSubmitted(false), 5000)
    }, 500)
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const getTomorrowDate = () => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().split("T")[0]
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-background to-slate-900/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl text-balance mb-4 sm:mb-6 text-foreground font-handwriting md:text-5xl font-bold">
            Buat Janji Anda
          </h2>
          <p className="text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed text-sm sm:text-base px-2">
            Siap merasakan perawatan kecantikan mewah? Isi formulir di bawah atau hubungi kami melalui WhatsApp untuk pemesanan yang cepat dan mudah.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Booking Form */}
          <Card className="lg:col-span-2 p-6 sm:p-8 border-border/50">
            <CardContent>
              {submitted && (
                <div className="mb-6 p-4 bg-green-50/10 border border-green-500/30 rounded-lg flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="text-green-500 font-medium">Berhasil!</p>
                    <p className="text-green-500/80 text-sm">
                      Pesan booking Anda telah dikirim ke WhatsApp kami. Kami akan segera mengkonfirmasi.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Nama Lengkap</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2.5 bg-background border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 ${
                        errors.name ? "border-red-500/50 focus:ring-red-500" : "border-border/50"
                      }`}
                      placeholder="Nama Anda"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={14} /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2.5 bg-background border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 ${
                        errors.email ? "border-red-500/50 focus:ring-red-500" : "border-border/50"
                      }`}
                      placeholder="email@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={14} /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone and Service Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Nomor Telepon</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2.5 bg-background border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 ${
                        errors.phone ? "border-red-500/50 focus:ring-red-500" : "border-border/50"
                      }`}
                      placeholder="+62 8xx xxx xxxx"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={14} /> {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Layanan</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2.5 bg-background border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 ${
                        errors.service ? "border-red-500/50 focus:ring-red-500" : "border-border/50"
                      }`}
                    >
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={14} /> {errors.service}
                      </p>
                    )}
                  </div>
                </div>

                {/* Date and Time Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Tanggal</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      min={getTomorrowDate()}
                      className={`w-full px-4 py-2.5 bg-background border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 ${
                        errors.date ? "border-red-500/50 focus:ring-red-500" : "border-border/50"
                      }`}
                    />
                    {errors.date && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={14} /> {errors.date}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Waktu</label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2.5 bg-background border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 ${
                        errors.time ? "border-red-500/50 focus:ring-red-500" : "border-border/50"
                      }`}
                    >
                      <option value="">Pilih Waktu</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                    {errors.time && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={14} /> {errors.time}
                      </p>
                    )}
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Catatan Tambahan (Opsional)</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-2.5 bg-background border border-border/50 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 resize-none"
                    placeholder="Tulis catatan tambahan atau pertanyaan Anda..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 hover:from-amber-700 hover:via-yellow-700 hover:to-amber-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 border-0 py-3 font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
                >
                  {isLoading ? "Mengirim..." : "Kirim Booking via WhatsApp"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            <Card className="p-4 sm:p-6 border-border/50 hover:shadow-lg transition-all duration-300 hover:border-accent/30">
              <CardContent className="flex items-start gap-3 sm:gap-4">
                <Clock className="w-6 sm:w-8 h-6 sm:h-8 text-accent flex-shrink-0 mt-1" />
                <div className="min-w-0">
                  <h4 className="font-sans font-semibold text-foreground mb-2 text-sm sm:text-base">Jam Buka</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">Senin-Jumat</p>
                  <p className="text-foreground font-medium text-xs sm:text-sm">10:00 - 17:00</p>
                  <p className="text-muted-foreground text-xs sm:text-sm mt-2">Sabtu-Minggu</p>
                  <p className="text-foreground font-medium text-xs sm:text-sm">10:00 - 17:00</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-4 sm:p-6 border-border/50 hover:shadow-lg transition-all duration-300 hover:border-accent/30">
              <CardContent className="flex items-start gap-3 sm:gap-4">
                <MapPin className="w-6 sm:w-8 h-6 sm:h-8 text-accent flex-shrink-0 mt-1" />
                <div className="min-w-0">
                  <h4 className="font-sans font-semibold text-foreground mb-2 text-sm sm:text-base">Lokasi</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">Karingan, Banjarmangu</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">RT. 02 RW. 04</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">Kecamatan Banjarmangu</p>
                  <p className="text-foreground font-medium text-xs sm:text-sm mt-1">Banjarnegara</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-4 sm:p-6 border-border/50 hover:shadow-lg transition-all duration-300 hover:border-accent/30">
              <CardContent className="flex items-start gap-3 sm:gap-4">
                <Phone className="w-6 sm:w-8 h-6 sm:h-8 text-accent flex-shrink-0 mt-1" />
                <div className="min-w-0">
                  <h4 className="font-sans font-semibold text-foreground mb-2 text-sm sm:text-base">Kontak</h4>
                  <p className="text-foreground font-medium text-xs sm:text-sm">Umu Rosidah</p>
                  <a
                    href="tel:+6281325808507"
                    className="text-accent hover:text-amber-400 transition-colors text-xs sm:text-sm"
                  >
                    +62 813-2580-8507
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="p-4 sm:p-6 bg-gradient-to-br from-amber-600/10 to-yellow-600/10 border-accent/30 hover:shadow-lg transition-all duration-300">
              <CardContent className="flex items-start gap-3 sm:gap-4">
                <MessageCircle className="w-6 sm:w-8 h-6 sm:h-8 text-accent flex-shrink-0 mt-1" />
                <div className="min-w-0">
                  <h4 className="font-sans font-semibold text-foreground mb-1 text-sm sm:text-base">Chat WhatsApp</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-3">
                    Hubungi kami langsung untuk bantuan cepat
                  </p>
                  <Button
                    onClick={() => {
                      const message = encodeURIComponent(
                        "Assalamualaikum.. saya mau booking di Sekar Kedaton Beauty Salon"
                      )
                      window.open(`https://wa.me/6281325808507?text=${message}`, "_blank")
                    }}
                    className="w-full bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 hover:from-amber-700 hover:via-yellow-700 hover:to-amber-800 text-white shadow-md hover:shadow-lg transition-all duration-300 border-0 text-xs sm:text-sm py-2 hover:scale-105"
                  >
                    <MessageCircle size={16} className="mr-2" />
                    Chat Sekarang
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
