"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { X, Edit2 } from "lucide-react"

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

type FinancialRecord = {
  id: string
  customerName: string
  service: string
  price: number
  date: string
}

export default function AdminDashboard() {
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [activeTab, setActiveTab] = useState("services")
  const router = useRouter()

  const [services, setServices] = useState(DEFAULT_SERVICES)
  const [editingServiceId, setEditingServiceId] = useState<number | null>(null)
  const [editingServiceData, setEditingServiceData] = useState({ name: "", price: 0, image: "" })

  const [financialRecords, setFinancialRecords] = useState<FinancialRecord[]>([])
  const [newRecord, setNewRecord] = useState({ customerName: "", service: DEFAULT_SERVICES[0].name, price: "" })
  const [monthlyData, setMonthlyData] = useState<Array<{ month: string; total: number }>>([])

  useEffect(() => {
    const checkAuth = () => {
      const session = localStorage.getItem("adminSession")
      console.log("[v0] Checking authentication, session found:", !!session)

      if (!session) {
        console.log("[v0] No session found, redirecting to login")
        router.push("/admin/login")
      } else {
        console.log("[v0] Session found, authenticating user")
        setIsAuthenticated(true)
        loadFinancialData()
      }
      setIsLoading(false)
    }

    // Use setTimeout to ensure component is mounted
    const timer = setTimeout(checkAuth, 0)

    return () => clearTimeout(timer)
  }, [router])

  const loadFinancialData = () => {
    const saved = localStorage.getItem("financialRecords")
    if (saved) {
      const records = JSON.parse(saved)
      setFinancialRecords(records)
      calculateMonthly(records)
    }
  }

  const calculateMonthly = (records: FinancialRecord[]) => {
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
      setNewRecord({ customerName: "", service: DEFAULT_SERVICES[0].name, price: "" })
    }
  }

  const handleDeleteFinancialRecord = (id: string) => {
    const updated = financialRecords.filter((r) => r.id !== id)
    setFinancialRecords(updated)
    localStorage.setItem("financialRecords", JSON.stringify(updated))
    calculateMonthly(updated)
  }

  const handleEditService = (id: number, service: (typeof DEFAULT_SERVICES)[0]) => {
    setEditingServiceId(id)
    setEditingServiceData({ name: service.name, price: service.price, image: service.image })
  }

  const handleSaveService = () => {
    if (editingServiceId !== null) {
      setServices(
        services.map((service) => (service.id === editingServiceId ? { ...service, ...editingServiceData } : service)),
      )
      setEditingServiceId(null)
      setEditingServiceData({ name: "", price: 0, image: "" })
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("adminSession")
    router.push("/admin/login")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Memuat...</div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  const totalRevenue = financialRecords.reduce((sum, r) => sum + r.price, 0)
  const totalTransactions = financialRecords.length
  const averagePrice = totalTransactions > 0 ? totalRevenue / totalTransactions : 0

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-amber-400 font-serif">Admin Dashboard</h1>
            <p className="text-gray-400 mt-2">Kelola layanan, gambar, harga, dan laporan keuangan salon Anda</p>
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
            <TabsTrigger value="services" className="text-gray-300 data-[state=active]:text-amber-400">
              Manajemen Layanan
            </TabsTrigger>
            <TabsTrigger value="financial" className="text-gray-300 data-[state=active]:text-amber-400">
              Laporan Keuangan
            </TabsTrigger>
          </TabsList>

          <TabsContent value="services">
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-amber-400 mb-6">Daftar Layanan Salon</h2>

              {editingServiceId && (
                <div className="mb-8 border border-amber-400 p-6 rounded bg-gray-800">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl text-amber-400 font-bold">Edit Layanan</h3>
                    <button onClick={() => setEditingServiceId(null)} className="text-gray-400 hover:text-white">
                      <X size={24} />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-gray-300">Nama Layanan</Label>
                      <Input
                        value={editingServiceData.name}
                        onChange={(e) => setEditingServiceData({ ...editingServiceData, name: e.target.value })}
                        className="bg-gray-700 border-gray-600 text-white mt-2"
                      />
                    </div>
                    <div>
                      <Label className="text-gray-300">Harga (Rp)</Label>
                      <Input
                        type="number"
                        value={editingServiceData.price}
                        onChange={(e) =>
                          setEditingServiceData({
                            ...editingServiceData,
                            price: Number.parseFloat(e.target.value),
                          })
                        }
                        className="bg-gray-700 border-gray-600 text-white mt-2"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label className="text-gray-300">Path Gambar</Label>
                      <Input
                        value={editingServiceData.image}
                        onChange={(e) => setEditingServiceData({ ...editingServiceData, image: e.target.value })}
                        className="bg-gray-700 border-gray-600 text-white mt-2"
                        placeholder="public/nama-gambar.jpg"
                      />
                    </div>
                    <div className="md:col-span-2 flex gap-2">
                      <Button onClick={handleSaveService} className="bg-green-600 hover:bg-green-700 text-white flex-1">
                        Simpan Perubahan
                      </Button>
                      <Button
                        onClick={() => setEditingServiceId(null)}
                        className="bg-gray-600 hover:bg-gray-700 text-white flex-1"
                      >
                        Batal
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                  <Card
                    key={service.id}
                    className="overflow-hidden bg-gray-900 border-gray-700 hover:border-amber-400 transition-colors"
                  >
                    <div className="aspect-[3/2] overflow-hidden bg-gray-800">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-serif text-white mb-2">{service.name}</h3>
                      <p className="text-amber-400 text-lg font-bold mb-4">
                        Rp {service.price.toLocaleString("id-ID")}
                      </p>
                      <Button
                        onClick={() => handleEditService(service.id, service)}
                        className="w-full bg-amber-400 text-black hover:bg-amber-500 flex items-center justify-center gap-2"
                      >
                        <Edit2 size={16} />
                        Edit Layanan
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="financial">
            <Card className="border-amber-400 bg-gray-900 mt-6">
              <CardHeader>
                <CardTitle className="text-amber-400">Laporan Keuangan</CardTitle>
                <CardDescription className="text-gray-400">Kelola dan lihat laporan keuangan bulanan</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
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
                        {services.map((service) => (
                          <option key={service.id} value={service.name}>
                            {service.name}
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
