import { createClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"

export async function GET() {
  try {
    const supabase = await createClient()

    const { data: services, error } = await supabase.from("services").select("*").order("id")

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(services)
  } catch (error) {
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { id, name, price, image_url } = await request.json()

    const supabase = await createClient()

    const { data: updatedService, error } = await supabase
      .from("services")
      .update({
        name,
        price,
        image_url,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(updatedService)
  } catch (error) {
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 })
  }
}
