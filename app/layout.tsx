import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin", "vietnamese"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Phòng chống tham nhũng – Quyết tâm chính trị | Nhóm 7",
  description: "Quyết tâm chính trị, hành động quyết liệt và củng cố niềm tin",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={inter.variable}>
      <body className="font-sans antialiased bg-black text-white">{children}</body>
    </html>
  )
}
  