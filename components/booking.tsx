"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Clock, MapPin, Phone, CheckCircle, AlertCircle } from "lucide-react"

interface FormData {
  name: string
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
      `Halo, saya ingin booking:\n\nNama: ${formData.name}\nTelepon: ${formData.phone}\nLayanan: ${formData.service}\nTanggal: ${formData.date}\nWaktu: ${formData.time}${
        formData.notes ? `\nCatatan: ${formData.notes}` : ""
      }`
    )
    window.open(`https://wa.me/6281325808507?text=${message}`, "_blank")

    setTimeout(() => {
      setSubmitted(true)
      setIsLoading(false)
      setFormData({ name: "", phone: "", service: "", date: "", time: "", notes: "" })
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

  const FormField = ({
    label,
    name,
    type = "text",
    value,
    onChange,
    error,
    placeholder,
    children,
  }: {
    label: string
    name?: string
    type?: string
    value?: string
    onChange?: (e: any) => void
    error?: string
    placeholder?: string
    children?: React.ReactNode
  }) => (
    <div className="group">
      <label className="block text-sm font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
        {label}
      </label>
      {children ? (
        children
      ) : (
        <div className="relative">
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            min={type === "date" ? getTomorrowDate() : undefined}
            className={`w-full px-4 py-3 bg-gradient-to-r from-slate-800 via-slate-800/50 to-slate-700 border-2 rounded-xl text-foreground placeholder:text-slate-500 focus:outline-none transition-all duration-300 ${
              error
                ? "border-rose-500/50 focus:ring-2 focus:ring-rose-500/50 focus:border-rose-500"
                : "border-slate-600/50 hover:border-amber-500/30 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
            }`}
          />
          {error && (
            <div className="absolute -bottom-6 left-0 flex items-center gap-1">
              <AlertCircle size={14} className="text-rose-500" />
              <p className="text-rose-500 text-xs">{error}</p>
            </div>
          )}
        </div>
      )}
    </div>
  )

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-black pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl text-balance mb-4 sm:mb-6 text-foreground font-handwriting md:text-5xl font-bold">
            Buat Janji Anda
          </h2>
          <p className="text-slate-300 text-balance max-w-2xl mx-auto leading-relaxed text-sm sm:text-base px-2">
            Siap merasakan perawatan kecantikan mewah? Isi formulir di bawah untuk pemesanan yang cepat dan mudah.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="relative p-8 bg-gradient-to-br from-slate-800/80 via-slate-800/60 to-slate-700/50 backdrop-blur-sm border-2 border-slate-600/30 rounded-2xl shadow-2xl hover:border-amber-500/20 transition-all duration-300">
              {submitted && (
                <div className="mb-6 p-4 bg-emerald-500/10 border-2 border-emerald-500/30 rounded-xl flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                  <CheckCircle className="text-emerald-500 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="text-emerald-500 font-semibold">Berhasil!</p>
                    <p className="text-emerald-400/80 text-sm mt-1">
                      Pesan booking Anda telah dikirim ke WhatsApp kami. Kami akan segera mengkonfirmasi.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <FormField
                  label="Nama Lengkap"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  error={errors.name}
                  placeholder="Masukkan nama Anda"
                />

                {/* Phone and Service Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <FormField
                    label="Nomor Telepon"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    error={errors.phone}
                    placeholder="+62 8xx xxx xxxx"
                  />
                  <FormField label="Layanan" error={errors.service}>
                    <div className="relative">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-gradient-to-r from-slate-800 via-slate-800/50 to-slate-700 border-2 rounded-xl text-foreground focus:outline-none transition-all duration-300 appearance-none cursor-pointer ${
                          errors.service
                            ? "border-rose-500/50 focus:ring-2 focus:ring-rose-500/50"
                            : "border-slate-600/50 hover:border-amber-500/30 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
                        }`}
                      >
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                    </div>
                  </FormField>
                </div>

                {/* Date and Time Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <FormField
                    label="Tanggal"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    error={errors.date}
                  />
                  <FormField label="Waktu" error={errors.time}>
                    <div className="relative">
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-gradient-to-r from-slate-800 via-slate-800/50 to-slate-700 border-2 rounded-xl text-foreground focus:outline-none transition-all duration-300 appearance-none cursor-pointer ${
                          errors.time
                            ? "border-rose-500/50 focus:ring-2 focus:ring-rose-500/50"
                            : "border-slate-600/50 hover:border-amber-500/30 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
                        }`}
                      >
                        <option value="">Pilih Waktu</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                    </div>
                  </FormField>
                </div>

                {/* Notes */}
                <div className="group pt-2">
                  <label className="block text-sm font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                    Catatan Tambahan (Opsional)
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-gradient-to-r from-slate-800 via-slate-800/50 to-slate-700 border-2 border-slate-600/50 rounded-xl text-foreground placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 hover:border-amber-500/30 transition-all duration-300 resize-none"
                    placeholder="Tulis catatan tambahan atau pertanyaan Anda..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-amber-600 via-amber-500 to-rose-600 hover:from-amber-700 hover:via-amber-600 hover:to-rose-700 text-white shadow-xl hover:shadow-2xl hover:shadow-amber-600/50 transition-all duration-300 border-0 py-3.5 font-semibold text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none hover:scale-105 rounded-xl"
                  >
                    {isLoading ? "Mengirim..." : "Kirim Booking via WhatsApp"}
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-5">
            {/* Hours Card */}
            <div className="relative p-5 bg-gradient-to-br from-slate-800/80 via-slate-800/60 to-slate-700/50 backdrop-blur-sm border-2 border-slate-600/30 rounded-2xl hover:border-amber-500/30 transition-all duration-300 group">
              <div className="absolute top-0 right-0 w-20 h-20 bg-amber-600/5 rounded-full blur-2xl group-hover:bg-amber-600/10 transition-all duration-300"></div>
              <div className="relative flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-amber-600/20 to-amber-500/10 rounded-xl group-hover:from-amber-600/30 group-hover:to-amber-500/20 transition-all duration-300">
                  <Clock className="w-6 h-6 text-amber-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Jam Buka</h4>
                  <div className="space-y-2 text-xs text-slate-300">
                    <div className="flex justify-between">
                      <span>Senin-Jumat</span>
                      <span className="font-medium text-amber-400">10:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sabtu-Minggu</span>
                      <span className="font-medium text-amber-400">10:00 - 17:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="relative p-5 bg-gradient-to-br from-slate-800/80 via-slate-800/60 to-slate-700/50 backdrop-blur-sm border-2 border-slate-600/30 rounded-2xl hover:border-rose-500/30 transition-all duration-300 group">
              <div className="absolute top-0 right-0 w-20 h-20 bg-rose-600/5 rounded-full blur-2xl group-hover:bg-rose-600/10 transition-all duration-300"></div>
              <div className="relative flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-rose-600/20 to-rose-500/10 rounded-xl group-hover:from-rose-600/30 group-hover:to-rose-500/20 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-rose-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Lokasi</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Karingan, Banjarmangu<br/>
                    RT. 02 RW. 04<br/>
                    <span className="text-rose-400 font-medium">Banjarnegara</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="relative p-5 bg-gradient-to-br from-slate-800/80 via-slate-800/60 to-slate-700/50 backdrop-blur-sm border-2 border-slate-600/30 rounded-2xl hover:border-blue-500/30 transition-all duration-300 group">
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-600/5 rounded-full blur-2xl group-hover:bg-blue-600/10 transition-all duration-300"></div>
              <div className="relative flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-600/20 to-blue-500/10 rounded-xl group-hover:from-blue-600/30 group-hover:to-blue-500/20 transition-all duration-300">
                  <Phone className="w-6 h-6 text-blue-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Kontak</h4>
                  <p className="text-xs text-slate-300 font-medium mb-1">Umu Rosidah</p>
                  <a
                    href="tel:+6281325808507"
                    className="text-blue-400 hover:text-blue-300 transition-colors text-xs font-medium"
                  >
                    +62 813-2580-8507
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA Card */}
            <div className="relative p-6 bg-gradient-to-br from-emerald-600/15 via-slate-800/40 to-slate-700/30 backdrop-blur-sm border-2 border-emerald-500/30 rounded-2xl hover:border-emerald-500/50 transition-all duration-300 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600/30 to-emerald-500/10 mb-3 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 text-emerald-400" />
                </div>
                <h4 className="font-semibold text-foreground mb-1 text-sm">Chat WhatsApp</h4>
                <p className="text-emerald-300/80 text-xs mb-4 leading-relaxed">
                  Hubungi kami langsung untuk bantuan cepat dan konsultasi gratis
                </p>
                <Button
                  onClick={() => {
                    const message = encodeURIComponent(
                      "Assalamualaikum.. saya mau booking di Sekar Kedaton Beauty Salon"
                    )
                    window.open(`https://wa.me/6281325808507?text=${message}`, "_blank")
                  }}
                  className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white shadow-lg hover:shadow-xl hover:shadow-emerald-600/50 transition-all duration-300 border-0 py-2.5 font-semibold text-sm rounded-lg hover:scale-105"
                >
                  <MessageCircle size={16} className="mr-2" />
                  Chat Sekarang
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
