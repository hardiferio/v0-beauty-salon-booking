import { type NextRequest, NextResponse } from "next/server"

const DEFAULT_SERVICES = [
  { id: 1, name: "Potong Rambut", price: 35000, image: "/hair-cutting.jpg" },
  { id: 2, name: "Facial Premium", price: 75000, image: "/facial-treatment.jpg" },
  { id: 3, name: "Manicure", price: 45000, image: "/manicure.png" },
  { id: 4, name: "Massage Therapy", price: 100000, image: "/relaxing-massage.png" },
  { id: 5, name: "Makeup Pengantin", price: 300000, image: "/bridal-makeup.jpg" },
  { id: 6, name: "Eyelash Extension", price: 150000, image: "/eyelash.jpg" },
  { id: 7, name: "Sewa Kostum Pengantin", price: 250000, image: "/wedding-costume.jpg" },
  { id: 8, name: "Sewa Kebaya", price: 150000, image: "/kebaya.jpg" },
  { id: 9, name: "Sewa Baju Karnaval", price: 100000, image: "/carnival-costume.jpg" },
  { id: 10, name: "Sewa Baju Adat", price: 150000, image: "/traditional-clothing.jpg" },
  { id: 11, name: "Sewa Jas", price: 120000, image: "/suit-rental.jpg" },
  { id: 12, name: "Sewa Baju Profesi", price: 100000, image: "/professional-uniform.jpg" },
]

export async function GET() {
  try {
    return NextResponse.json(DEFAULT_SERVICES)
  } catch (error) {
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { id, name, price, image } = await request.json()

    // Just return success for local updates
    const updatedService = {
      id,
      name,
      price,
      image,
      updated_at: new Date().toISOString(),
    }

    return NextResponse.json(updatedService)
  } catch (error) {
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 })
  }
}
