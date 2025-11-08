const galleryImages = [
  
]

export function Gallery() {
  return (
    <section id="gallery" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-balance mb-6 text-foreground font-mono text-3xl">
            Kecantikan di Setiap Detail pada diri Anda
          </h2>
          <p className="text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed text-base">
            {"Jelajahi galeri kami yang menampilkan seni dan transformasi dari tahap kecantikan anda."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`Gambar galeri ${index + 1}`}
                className="object-cover hover:scale-105 transition-transform duration-300 px-0 rounded-md w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
