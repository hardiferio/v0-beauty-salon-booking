export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl sm:text-3xl font-serif mb-3 sm:mb-4">Sekar Kedaton</h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
              {
                "Destinasi utama Anda untuk perawatan kecantikan mewah dan pengalaman kesehatan. Di mana seni bertemu relaksasi."
              }
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Tiktok
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Kontak</h4>
            <ul className="space-y-1 sm:space-y-2 text-primary-foreground/80 text-xs sm:text-sm">
              <li>Umu Rosidah</li>
              <li>@ Karingan</li>
              <li>Banjarmangu, RT. 02 RW. 04</li>
              <li>Kecamatan Banjarmangu - Banjarnegara</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-primary-foreground/60 text-xs sm:text-sm">
          <p>&copy; 2025 Sekar Kedaton Beauty Salon. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
