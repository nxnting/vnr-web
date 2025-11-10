"use client"

export default function LogicConnection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-gray-900 to-black border-y border-red-500/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-red-500 mb-3 sm:mb-4 text-center glow-red">
          Chuỗi nhân–quả
        </h2>
        <p className="text-center text-gray-400 mb-8 sm:mb-12 text-base sm:text-lg">
          Kết nối logic của cuộc chiến chống tham nhũng
        </p>

        <div className="relative">
          {/* Connection lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>

          {/* Four main points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
            {[
              {
                number: "1",
                title: "Quyết tâm",
                desc: "Chống tham nhũng công khai, nhất quán, 'không có vùng cấm'",
              },
              { 
                number: "2",
                title: "Niềm tin",
                desc: "Tăng niềm tin nội bộ & xã hội",
              },
              {
                number: "3",
                title: "Năng lực",
                desc: "Nâng năng lực quản trị – môi trường đầu tư",
              },
              {
                number: "4",
                title: "Vị thế",
                desc: "Củng cố vị thế, uy tín quốc gia trong hội nhập",
              },
            ].map((point, idx) => (
              <div
                key={idx}
                className="text-center bg-gradient-to-b from-red-500/10 to-transparent p-4 sm:p-6 rounded-lg border border-red-500/30 border-red-glow"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-red-500 text-white font-bold text-lg sm:text-xl rounded-full mb-3 sm:mb-4">
                  {point.number}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-red-400 mb-2">{point.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 sm:mt-16 p-4 sm:p-6 lg:p-8 bg-red-500/5 border border-red-500/30 rounded-lg border-red-glow">
          <blockquote className="text-center text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed italic">
            "Khi Đảng, nhất là cấp lãnh đạo, dám thẳng thắn nhìn nhận sai lầm, quyết tâm khắc phục thì{" "}
            <span className="text-red-400 font-bold not-italic">
              sức mạnh của Đảng càng lớn, niềm tin của Nhân dân càng tăng.
            </span>
            "
          </blockquote>
        </div>
      </div>
    </section>
  )
}
