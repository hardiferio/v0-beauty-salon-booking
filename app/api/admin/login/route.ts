import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()

    // Simple local validation instead of Supabase query
    if (username === "admin" && password === "admin123") {
      return NextResponse.json({
        success: true,
        message: "Login berhasil",
        user: {
          id: 1,
          username: "admin",
        },
      })
    }

    return NextResponse.json({ error: "Username atau password salah" }, { status: 401 })
  } catch (error) {
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 })
  }
}
