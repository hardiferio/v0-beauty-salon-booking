export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-serif text-balance mb-8 text-foreground md:text-4xl">
              Didedikasikan untuk perjalanan kecantikan Anda
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                {
                  "Di Sekar kedaton, kami percaya kecantikan adalah perjalanan pribadi untuk mengekspresikan diri dan percaya diri. kami menggabungkan keahlian bertahun-tahun dengan teknik terkini untuk menciptakan pengalaman transformatif.."
                }
              </p>
              <p>
                {
                  "Didirikan berdasarkan prinsip keunggulan dan perawatan yang dipersonalisasi, kami hanya menggunakan produk premium dan menjaga standar kebersihan dan profesionalisme tertinggi di lingkungan kami yang tenang dan ramah.."
                }
              </p>
              <p>
                {
                  "Setiap kunjungan ke Sekar Kedaton dirancang untuk menjadi momen kemewahan dan perawatan diri, di mana Anda dapat bersantai, menyegarkan diri, dan menemukan kembali pancaran alami Anda.."
                }
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="/elegant-beauty-salon.png"
              alt="Bella Rosa Beauty Salon Interior"
              className="w-full h-auto shadow-lg rounded-md mx-0 px-14"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
