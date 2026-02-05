"use client"

import { Mail, Phone, MapPin, Instagram, Facebook, TrendingUp } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "#", color: "hover:text-pink-500" },
    { icon: Facebook, label: "Facebook", href: "#", color: "hover:text-blue-500" },
    { icon: TrendingUp, label: "TikTok", href: "#", color: "hover:text-cyan-500" },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-black text-foreground py-16 px-4 border-t border-border/50">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,119,6,0.05)_0%,transparent_50%)] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4 group">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-amber-600/50 transition-shadow duration-300">
                <span className="text-white font-bold text-lg">SK</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-handwriting font-bold text-foreground">Sekar Kedaton</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base max-w-md group-hover:text-foreground transition-colors duration-300">
              Destinasi utama Anda untuk perawatan kecantikan mewah dan pengalaman kesehatan. Di mana seni bertemu relaksasi.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className={`p-2.5 rounded-lg bg-background/50 border border-border/50 text-muted-foreground ${social.color} transition-all duration-300 hover:bg-background hover:scale-110 hover:border-accent/50`}
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-sans font-semibold text-base text-foreground">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Beranda", href: "#home" },
                { label: "Layanan", href: "#services" },
                { label: "Galeri", href: "#gallery" },
                { label: "Tentang", href: "#about" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-accent hover:translate-x-1 transition-all duration-300 text-sm inline-flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-sans font-semibold text-base text-foreground">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 group cursor-default">
                <Phone className="w-4 h-4 text-accent mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:+6281325808507" className="text-muted-foreground group-hover:text-foreground transition-colors text-sm leading-relaxed">
                  +62 813-2580-8507
                </a>
              </div>
              <div className="flex items-start gap-3 group cursor-default">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div className="text-muted-foreground group-hover:text-foreground transition-colors text-sm">
                  <p>Karingan, Banjarmangu</p>
                  <p>RT. 02 RW. 04</p>
                  <p>Banjarnegara</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-muted-foreground text-xs sm:text-sm">
          <p className="hover:text-foreground transition-colors duration-300">
            &copy; {currentYear} Sekar Kedaton Beauty Salon. Semua hak dilindungi.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-accent transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
