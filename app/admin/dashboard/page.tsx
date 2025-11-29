"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const session = localStorage.getItem("adminSession")
    if (!session) {
      router.push("/admin/login")
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("adminSession")
    router.push("/admin/login")
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-amber-400">Admin Dashboard</h1>
          <Button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 text-white">
            Logout
          </Button>
        </div>

        <div className="grid gap-6">
          <Card className="border-amber-400 bg-gray-900">
            <CardHeader>
              <CardTitle className="text-amber-400">Selamat Datang</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p>Anda telah berhasil masuk ke dashboard admin Sekar Kedaton Beauty Salon.</p>
              <p className="mt-2">Halaman ini dapat digunakan untuk mengelola konten salon Anda.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
