"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs"
import { TabTrigger } from "@/components/ui/tabs" // Import TabTrigger

const GALLERY_ITEMS = [
  {
    id: 1,
    name: "Javanese Woman - Hair Styling",
    imageUrl: "public/javanese-woman-elegant-traditional-hair-styling.jpg",
  },
  { id: 2, name: "Javanese Woman - Facial Spa", imageUrl: "public/javanese-woman-receiving-facial-spa-treatment.jpg" },
  { id: 3, name: "Javanese Woman - Nail Art", imageUrl: "public/javanese-woman-professional-nail-art-manicure.jpg" },
  { id: 4, name: "Javanese Woman - Makeup", imageUrl: "public/javanese-woman-makeup-application-beauty-salon.jpg" },
  {
    id: 5,
    name: "Javanese Woman - Hair Transformation",
    imageUrl: "public/javanese-woman-hair-transformation-styling.jpg",
  },
  {
    id: 6,
    name: "Javanese Woman - Massage Therapy",
    imageUrl: "public/javanese-woman-relaxing-massage-therapy-spa.jpg",
  },
]

const SERVICES = [
  "Hair Styling",
  "Facial Spa",
  "Nail Art",
  "Makeup",
  "Hair Transformation",
  "Massage Therapy",
  "Wedding Costume",
  "Kebaya Rental",
  "Carnival Costume",
  "Traditional Clothing",
  "Formal Suit",
  "Professional Uniform",
]

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [activeTab, setActiveTab] = useState("dashboard")
  const router = useRouter()

  // Gallery state
  const [galleryItems, setGalleryItems] = useState(GALLERY_ITEMS)
  const [editingGalleryId, setEditingGalleryId] = useState<number | null>(null)
  const [editingGalleryData, setEditingGalleryData] = useState({ name: "", imageUrl: "" })

  // Financial state
  const [financialRecords, setFinancialRecords] = useState<
    Array<{
      id: string
      customerName: string
      service: string
      price: number
      date: string
    }>
  >([])
  const [newRecord, setNewRecord] = useState({ customerName: "", service: SERVICES[0], price: "" })
  const [monthlyData, setMonthlyData] = useState<Array<{ month: string; total: number }>>([])

  useEffect(() => {
    const session = localStorage.getItem("adminSession")
    if (!session) {
      router.push("/admin/login")
    } else {
      setIsAuthenticated(true)
      loadFinancialData()
    }
  }, [router])

  const loadFinancialData = () => {
    const saved = localStorage.getItem("financialRecords")
    if (saved) {
      const records = JSON.parse(saved)
      setFinancialRecords(records)
      calculateMonthly(records)
    }
  }

  const calculateMonthly = (records: typeof financialRecords) => {
    const monthlyMap: Record<string, number> = {}
    records.forEach((record) => {
      const date = new Date(record.date)
      const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`
      monthlyMap[monthKey] = (monthlyMap[monthKey] || 0) + record.price
    })

    const monthly = Object.entries(monthlyMap)
      .map(([month, total]) => ({ month, total }))
      .sort()
    setMonthlyData(monthly)
  }

  const handleAddFinancialRecord = () => {
    if (newRecord.customerName && newRecord.price) {
      const record = {
        id: Date.now().toString(),
        customerName: newRecord.customerName,
        service: newRecord.service,
        price: Number.parseFloat(newRecord.price),
        date: new Date().toISOString().split("T")[0],
      }
      const updated = [...financialRecords, record]
      setFinancialRecords(updated)
      localStorage.setItem("financialRecords", JSON.stringify(updated))
      calculateMonthly(updated)
      setNewRecord({ customerName: "", service: SERVICES[0], price: "" })
    }
  }

  const handleDeleteFinancialRecord = (id: string) => {
    const updated = financialRecords.filter((r) => r.id !== id)
    setFinancialRecords(updated)
    localStorage.setItem("financialRecords", JSON.stringify(updated))
    calculateMonthly(updated)
  }

  const handleEditGallery = (id: number, item: (typeof GALLERY_ITEMS)[0]) => {
    setEditingGalleryId(id)
    setEditingGalleryData(item)
  }

  const handleSaveGallery = () => {
    if (editingGalleryId !== null) {
      setGalleryItems(
        galleryItems.map((item) => (item.id === editingGalleryId ? { ...item, ...editingGalleryData } : item)),
      )
      setEditingGalleryId(null)
      setEditingGalleryData({ name: "", imageUrl: "" })
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("adminSession")
    router.push("/admin/login")
  }

  if (!isAuthenticated) {
    return null
  }

  const totalRevenue = financialRecords.reduce((sum, r) => sum + r.price, 0)
  const totalTransactions = financialRecords.length
  const averagePrice = totalTransactions > 0 ? totalRevenue / totalTransactions : 0

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-amber-400 font-serif">Admin Dashboard</h1>
            <p className="text-gray-400 mt-2">Kelola galeri dan laporan keuangan salon Anda</p>
          </div>
          <Button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 text-white">
            Logout
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="border-amber-400 bg-gray-900">
            <CardHeader>
              <CardTitle className="text-amber-400">Total Pendapatan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-white">Rp {totalRevenue.toLocaleString("id-ID")}</p>
            </CardContent>
          </Card>
          <Card className="border-amber-400 bg-gray-900">
            <CardHeader>
              <CardTitle className="text-amber-400">Total Transaksi</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-white">{totalTransactions}</p>
            </CardContent>
          </Card>
          <Card className="border-amber-400 bg-gray-900">
            <CardHeader>
              <CardTitle className="text-amber-400">Rata-rata Transaksi</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-white">Rp {Math.round(averagePrice).toLocaleString("id-ID")}</p>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="bg-gray-800 border-b border-amber-400">
            <TabTrigger value="dashboard" className="text-gray-300 data-[state=active]:text-amber-400">
              Dashboard
            </TabTrigger>
            <TabTrigger value="gallery" className="text-gray-300 data-[state=active]:text-amber-400">
              Manajemen Galeri
            </TabTrigger>
            <TabTrigger value="financial" className="text-gray-300 data-[state=active]:text-amber-400">
              Laporan Keuangan
            </TabTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard">
            <Card className="border-amber-400 bg-gray-900 mt-6">
              <CardHeader>
                <CardTitle className="text-amber-400">Selamat Datang di Dashboard Admin</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-2">
                <p>Anda telah berhasil masuk ke dashboard admin Sekar Kedaton Beauty Salon.</p>
                <p>Gunakan tab di atas untuk mengelola galeri dan laporan keuangan salon Anda.</p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Gallery Tab */}
          <TabsContent value="gallery">
            <Card className="border-amber-400 bg-gray-900 mt-6">
              <CardHeader>
                <CardTitle className="text-amber-400">Manajemen Galeri</CardTitle>
                <CardDescription className="text-gray-400">Edit gambar dan nama layanan galeri</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {galleryItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between border border-gray-700 p-4 rounded">
                      <div className="flex-1">
                        <h3 className="text-amber-400 font-semibold">{item.name}</h3>
                        <p className="text-gray-400 text-sm">{item.imageUrl}</p>
                      </div>
                      <Button
                        onClick={() => handleEditGallery(item.id, item)}
                        className="bg-amber-400 text-black hover:bg-amber-500"
                      >
                        Edit
                      </Button>
                    </div>
                  ))}

                  {editingGalleryId && (
                    <div className="border border-amber-400 p-4 rounded bg-gray-800 mt-6">
                      <h3 className="text-amber-400 font-bold mb-4">Edit Galeri Item #{editingGalleryId}</h3>
                      <div className="space-y-4">
                        <div>
                          <Label className="text-gray-300">Nama Layanan</Label>
                          <Input
                            value={editingGalleryData.name}
                            onChange={(e) => setEditingGalleryData({ ...editingGalleryData, name: e.target.value })}
                            className="bg-gray-700 border-gray-600 text-white mt-1"
                          />
                        </div>
                        <div>
                          <Label className="text-gray-300">URL Gambar</Label>
                          <Input
                            value={editingGalleryData.imageUrl}
                            onChange={(e) => setEditingGalleryData({ ...editingGalleryData, imageUrl: e.target.value })}
                            className="bg-gray-700 border border-gray-600 text-white mt-1"
                          />
                        </div>
                        <div className="flex gap-2">
                          <Button onClick={handleSaveGallery} className="bg-green-600 hover:bg-green-700 text-white">
                            Simpan
                          </Button>
                          <Button
                            onClick={() => setEditingGalleryId(null)}
                            className="bg-gray-600 hover:bg-gray-700 text-white"
                          >
                            Batal
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Financial Tab */}
          <TabsContent value="financial">
            <Card className="border-amber-400 bg-gray-900 mt-6">
              <CardHeader>
                <CardTitle className="text-amber-400">Laporan Keuangan</CardTitle>
                <CardDescription className="text-gray-400">Kelola dan lihat laporan keuangan bulanan</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Add New Record */}
                <div className="border border-amber-400 p-4 rounded bg-gray-800">
                  <h3 className="text-amber-400 font-bold mb-4">Tambah Transaksi Baru</h3>
                  <div className="space-y-4">
                    <div>
                      <Label className="text-gray-300">Nama Pelanggan</Label>
                      <Input
                        value={newRecord.customerName}
                        onChange={(e) => setNewRecord({ ...newRecord, customerName: e.target.value })}
                        placeholder="Masukkan nama pelanggan"
                        className="bg-gray-700 border border-gray-600 text-white mt-1"
                      />
                    </div>
                    <div>
                      <Label className="text-gray-300">Jenis Layanan</Label>
                      <select
                        value={newRecord.service}
                        onChange={(e) => setNewRecord({ ...newRecord, service: e.target.value })}
                        className="w-full bg-gray-700 border border-gray-600 text-white rounded px-3 py-2 mt-1"
                      >
                        {SERVICES.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <Label className="text-gray-300">Harga / Tarif (Rp)</Label>
                      <Input
                        type="number"
                        value={newRecord.price}
                        onChange={(e) => setNewRecord({ ...newRecord, price: e.target.value })}
                        placeholder="0"
                        className="bg-gray-700 border-gray-600 text-white mt-1"
                      />
                    </div>
                    <Button
                      onClick={handleAddFinancialRecord}
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                    >
                      Tambah Transaksi
                    </Button>
                  </div>
                </div>

                {/* Monthly Report */}
                {monthlyData.length > 0 && (
                  <div className="border border-amber-400 p-4 rounded bg-gray-800">
                    <h3 className="text-amber-400 font-bold mb-4">Laporan Bulanan</h3>
                    <div className="space-y-2">
                      {monthlyData.map((item) => (
                        <div
                          key={item.month}
                          className="flex justify-between items-center border-b border-gray-700 pb-2"
                        >
                          <span className="text-gray-300">{item.month}</span>
                          <span className="text-amber-400 font-semibold">Rp {item.total.toLocaleString("id-ID")}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Transaction List */}
                <div>
                  <h3 className="text-amber-400 font-bold mb-4">Daftar Transaksi</h3>
                  <div className="space-y-2 max-h-96 overflow-y-auto">
                    {financialRecords.length === 0 ? (
                      <p className="text-gray-400 text-center py-4">Belum ada transaksi</p>
                    ) : (
                      financialRecords.map((record) => (
                        <div
                          key={record.id}
                          className="flex items-center justify-between border border-gray-700 p-3 rounded"
                        >
                          <div className="flex-1">
                            <p className="text-white font-semibold">{record.customerName}</p>
                            <p className="text-gray-400 text-sm">
                              {record.service} - {record.date}
                            </p>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-amber-400 font-bold">Rp {record.price.toLocaleString("id-ID")}</span>
                            <Button
                              onClick={() => handleDeleteFinancialRecord(record.id)}
                              className="bg-red-600 hover:bg-red-700 text-white text-sm"
                            >
                              Hapus
                            </Button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
