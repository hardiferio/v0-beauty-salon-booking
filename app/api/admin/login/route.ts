import { createClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()

    const supabase = await createClient()

    const { data: adminUser, error } = await supabase
      .from("admin_users")
      .select("*")
      .eq("username", username)
      .eq("password", password)
      .single()

    if (error || !adminUser) {
      return NextResponse.json({ error: "Username atau password salah" }, { status: 401 })
    }

    return NextResponse.json({
      success: true,
      message: "Login berhasil",
      user: {
        id: adminUser.id,
        username: adminUser.username,
      },
    })
  } catch (error) {
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 })
  }
}
