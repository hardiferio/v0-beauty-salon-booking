import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-serif mb-4">Sekar Kedaton</h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-4">
              {
                "Destinasi utama Anda untuk perawatan kecantikan mewah dan pengalaman kesehatan. Di mana seni bertemu relaksasi."
              }
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Instagram
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Facebook
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Tiktok
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Admin</h4>
            <Link href="/admin/login">
              <button className="px-4 py-2 bg-amber-400 text-black font-semibold rounded hover:bg-amber-500 transition-colors w-full">
                Login Admin
              </button>
            </Link>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Umu Rosidah</li>
              <li>@ Karingan</li>
              <li>Banjarmangu, RT. 02 RW. 04</li>
              <li>Kecamatan Banjarmangu - Banjarnegara</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2025 Sekar Kedaton Beauty Salon. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
