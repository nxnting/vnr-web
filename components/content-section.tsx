"use client"

import Image from "next/image"

interface ContentSectionProps {
  index: number
  title: string
  subtitle: string
  content: string
  details: string[]
  imageSrc: string           // ← thêm
  imageAlt?: string          // ← thêm (optional)
}

export default function ContentSection({
  index, title, subtitle, content, details, imageSrc, imageAlt = `Minh họa ${title}`,
}: ContentSectionProps) {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-black border-b border-red-500/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 sm:space-y-8">
          {/* Title */}
          <div className="flex items-start gap-4 sm:gap-6">
            <div className="flex-shrink-0">
              <span className="text-5xl sm:text-6xl lg:text-7xl font-bold text-red-500/20">{index}</span>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-500 mb-2">{title}</h2>
              <p className="text-base sm:text-lg lg:text-xl text-red-400">{subtitle}</p>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg overflow-hidden border border-red-500/30">
            <Image
              src={imageSrc}           // ← dùng ảnh truyền vào
              alt={imageAlt}
              fill
              className="object-cover"
              priority={index === 1}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          </div>

          {/* Content */}
          <div className="bg-gradient-to-b from-red-500/10 to-transparent p-4 sm:p-6 lg:p-8 rounded-lg border border-red-500/30">
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
              {content}
            </p>
            <ul className="space-y-2 sm:space-y-3">
              {details.map((d, i) => (
                <li key={i} className="flex items-start gap-2 sm:gap-3">
                  <span className="text-red-500 font-bold flex-shrink-0">•</span>
                  <span className="text-sm sm:text-base text-gray-400">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
