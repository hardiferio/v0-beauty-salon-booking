import { createClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"

export async function GET() {
  try {
    const supabase = await createClient()

    const { data: records, error } = await supabase
      .from("financial_records")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(records)
  } catch (error) {
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { customer_name, service_name, price } = await request.json()

    const supabase = await createClient()

    const { data: newRecord, error } = await supabase
      .from("financial_records")
      .insert({
        customer_name,
        service_name,
        price,
        transaction_date: new Date().toISOString().split("T")[0],
      })
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(newRecord)
  } catch (error) {
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json()

    const supabase = await createClient()

    const { error } = await supabase.from("financial_records").delete().eq("id", id)

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 })
  }
}
