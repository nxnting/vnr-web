"use client"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-red-500/20 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="text-center md:text-left">
            <span className="text-red-500 font-bold text-xl">VIETNAM</span>
            <p className="text-gray-500 mt-2 text-sm">Nhóm 7</p>
          </div>

          <div className="text-center">
            <p className="text-gray-400 text-sm">© 2025 – Chuyên đề Phòng chống tham nhũng · Deploy on Vercel</p>
          </div>

          {/* Right */}
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-red-500 transition-colors text-sm">
              Về chúng tôi
            </a>
            <a href="#" className="text-gray-500 hover:text-red-500 transition-colors text-sm">
              Liên hệ
            </a>
            <a href="#" className="text-gray-500 hover:text-red-500 transition-colors text-sm">
              Chính sách
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
