export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="font-sans order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl text-balance mb-6 sm:mb-8 text-foreground md:text-4xl font-handwriting font-bold">
              Didedikasikan untuk perjalanan kecantikan Anda
            </h2>
            <div className="space-y-4 sm:space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-sm sm:text-base">
                {
                  "Di Sekar kedaton, kami percaya kecantikan adalah perjalanan pribadi untuk mengekspresikan diri dan percaya diri. kami menggabungkan keahlian bertahun-tahun dengan teknik terkini untuk menciptakan pengalaman transformatif.."
                }
              </p>
              <p className="text-sm sm:text-base">
                {
                  "Didirikan berdasarkan prinsip keunggulan dan perawatan yang dipersonalisasi, kami hanya menggunakan produk premium dan menjaga standar kebersihan dan profesionalisme tertinggi di lingkungan kami yang tenang dan ramah.."
                }
              </p>
              <p className="text-sm sm:text-base">
                {
                  "Setiap kunjungan ke Sekar Kedaton dirancang untuk menjadi momen kemewahan dan perawatan diri, di mana Anda dapat bersantai, menyegarkan diri, dan menemukan kembali pancaran alami Anda.."
                }
              </p>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <img
              src="/elegant-beauty-salon.png"
              alt="Bella Rosa Beauty Salon Interior"
              className="w-full h-auto shadow-lg rounded-lg mx-auto px-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
