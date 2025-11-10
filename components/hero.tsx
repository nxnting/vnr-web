"use client"

import Image from "next/image"

export default function Hero() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen bg-black pt-16">
      {/* Full width image */}
      <div className="relative w-full h-screen">
        <Image
          src="1.jpg"
          alt="Biểu tượng phòng chống tham nhũng"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center justify-center pt-20 px-4">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
            <p className="text-sm text-red-400 mb-2 fade-in-up tracking-widest">NHÓM 7</p>

            {/* Main Title with Glow Effect */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-red-500 mb-4 sm:mb-6 fade-in-up glow-red leading-tight">
              Phòng chống tham nhũng – Quyết tâm chính trị, hành động quyết liệt và củng cố niềm tin
            </h1>

            {/* Quote */}
            <blockquote
              className="text-base sm:text-lg md:text-xl text-gray-300 italic mb-8 sm:mb-12 fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              "Không có con đường nào dẫn đến tương lai mà không qua đổi mới."
            </blockquote>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <button
                onClick={() => handleScroll("section-1")}
                className="px-6 sm:px-8 py-3 bg-red-500 text-white font-semibold rounded-full btn-red-gradient text-sm sm:text-base"
              >
                Khám phá nội dung
              </button>
              <button
                onClick={() => handleScroll("section-references")}
                className="px-6 sm:px-8 py-3 border border-red-500 text-red-500 font-semibold rounded-full hover:bg-red-500/10 transition-all duration-300 border-red-glow text-sm sm:text-base"
              >
                Tài liệu & Số liệu
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-red-500/5 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-red-500/5 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
    </section>
  )
}
