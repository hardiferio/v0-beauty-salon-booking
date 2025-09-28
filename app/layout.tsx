import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Dancing_Script } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Sekar Kedaton Beauty Salon - cantikkan dirimu",
  description:
    "Pengalaman perawatan luxury di Sekar Kedaton Beauty & Salon. Professional hair, skincare,  dengan pelayanan elegan.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${dancingScript.variable}`}>
        <div className="bg-gradient-to-r from-amber-600 to-amber-400 text-black py-2 overflow-hidden">
          <div className="running-text-container mx-auto">
            <div className="running-text text-lg font-bold tracking-wide">
              Sekar Kedaton Beauty Salon - cantikkan dirimu ✨ Sekar Kedaton Beauty Salon - cantikkan dirimu ✨ Sekar
              Kedaton Beauty Salon - cantikkan dirimu ✨
            </div>
          </div>
        </div>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
