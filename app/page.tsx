"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Header from "@/components/header";
import Hero from "@/components/hero";
import ContentSection from "@/components/content-section";
import LogicConnection from "@/components/logic-connection";
import Footer from "@/components/footer";
import ChatBot from "@/components/chatbot";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".scroll-fade");
    elements.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        observerRef.current?.unobserve(el);
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Header scrolled={scrolled} />
      <Hero />

      {/* SECTION 1 */}
      <div className="scroll-fade" id="section-1">
        <ContentSection
          index={1}
          title="Quyết tâm chính trị & lập trường kiên định"
          subtitle="Nền tảng của cuộc chiến"
          content="Đảng và Nhà nước Việt Nam đã khẳng định quyết tâm chính trị mạnh mẽ..."
          details={[
            "Không có vùng cấm: Nguyên tắc nhất quán, mọi cá nhân đều bình đẳng trước pháp luật",
            "Cơ chế lãnh đạo: Ban Chỉ đạo TW về PCTN, tiêu cực do Tổng Bí thư đứng đầu",
            "Tác động xã hội: Củng cố niềm tin Nhân dân...",
          ]}
          imageSrc="vnr-hero.jpg"
          imageAlt="Quyết tâm chính trị"
        />
      </div>

      {/* SECTION 2 */}
      <div className="scroll-fade" id="section-2">
        <ContentSection
          index={2}
          title="Lý luận – Thực tiễn – Kết nối logic"
          subtitle="Vì sao không thể nói 'Đảng đẻ ra tham nhũng'?"
          content="Tham nhũng là 'khuyết tật' của quyền lực nếu thiếu minh bạch & kiểm soát..."
          details={[
            "Tham nhũng là khuyết tật của quyền lực...",
            "Đảng lấy lợi ích quốc gia–dân tộc làm mục tiêu...",
            "Giải pháp: Công khai xử lý – hoàn thiện thể chế – kiểm tra giám sát – chuyển đổi số",
          ]}
          imageSrc="vnr-hero2.jpg"
          imageAlt="Lý luận – Thực tiễn – Kết nối logic"
        />
      </div>

      {/* CASES */}
      <div className="scroll-fade" id="section-cases">
        <section className="py-24 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-5xl font-bold text-red-500 mb-4 text-center glow-red">
              Chiến dịch "Đốt lò": Các đại án tiêu biểu
            </h2>
            <p className="text-center text-gray-400 mb-12 text-lg">
              Hàng trăm vụ án kinh tế, tham nhũng nghiêm trọng đã bị đưa ra ánh
              sáng; dưới đây là ba trường hợp điển hình.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Case 1 */}
              <div className="bg-gradient-to-b from-red-500/10 to-transparent rounded-lg border border-red-500/30 border-red-glow hover:border-red-500/60 transition-all overflow-hidden">
                <div className="relative w-full h-48">
                  <Image
                    src="3.jpg"
                    alt="VNCB case illustration"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="text-red-500 font-bold text-sm mb-2">
                    Tài chính – Ngân hàng
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Ngân hàng Xây dựng (VNCB) – Phạm Công Danh
                  </h3>
                  <div className="mb-4">
                    <span className="text-red-400 font-semibold">
                      Thiệt hại:{" "}
                    </span>
                    <span className="text-gray-300">
                      Thất thoát hàng chục nghìn tỷ
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    Đại án ngân hàng với thủ đoạn tinh vi; ảnh hưởng hệ thống
                    tín dụng.
                  </p>
                  <p className="text-gray-500 text-sm">
                    <strong className="text-red-400">Kết quả:</strong> Khởi tố,
                    xét xử nhiều cá nhân; thu hồi/tạm thu tài sản.
                  </p>
                </div>
              </div>

              {/* Case 2 */}
              <div className="bg-gradient-to-b from-red-500/10 to-transparent rounded-lg border border-red-500/30 border-red-glow hover:border-red-500/60 transition-all overflow-hidden">
                <div className="relative w-full h-48">
                  <Image
                    src="4.jpg"
                    alt="Mobifone case illustration"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="text-red-500 font-bold text-sm mb-2">
                    M&A – Tài sản công
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Mobifone mua AVG
                  </h3>
                  <div className="mb-4">
                    <span className="text-red-400 font-semibold">
                      Thiệt hại:{" "}
                    </span>
                    <span className="text-gray-300">
                      Thiệt hại đặc biệt lớn
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    Thương vụ mua 95% cổ phần AVG gây thiệt hại ngân sách.
                  </p>
                  <p className="text-gray-500 text-sm">
                    <strong className="text-red-400">Kết quả:</strong> Xử lý
                    nhiều cán bộ cấp cao ở bộ/ngành/doanh nghiệp nhà nước.
                  </p>
                </div>
              </div>

              {/* Case 3 */}
              <div className="bg-gradient-to-b from-red-500/10 to-transparent rounded-lg border border-red-500/30 border-red-glow hover:border-red-500/60 transition-all overflow-hidden">
                <div className="relative w-full h-48">
                  <Image
                    src="5.jpg"
                    alt="PVC case illustration"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="text-red-500 font-bold text-sm mb-2">
                    Xây lắp – Dầu khí
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    PVC – Trịnh Xuân Thanh
                  </h3>
                  <div className="mb-4">
                    <span className="text-red-400 font-semibold">
                      Thiệt hại:{" "}
                    </span>
                    <span className="text-gray-300">≈3.300 tỷ đồng</span>
                  </div>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    Cố ý làm trái trong hoạt động xây lắp, gây thất thoát lớn.
                  </p>
                  <p className="text-gray-500 text-sm">
                    <strong className="text-red-400">Kết quả:</strong> Truy cứu
                    trách nhiệm hình sự; nhấn mạnh răn đe và siết quản trị.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="scroll-fade" id="section-logic">
        <LogicConnection />
      </div>

      <div className="scroll-fade" id="section-references">
        <section className="py-24 bg-black border-t border-red-500/20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-5xl font-bold text-red-500 mb-12 text-center glow-red">
              Chỉ số & Tài liệu tham khảo
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Indicators */}
              <div className="bg-gradient-to-b from-red-500/10 to-transparent p-8 rounded-lg border border-red-500/30 border-red-glow">
                <h3 className="text-2xl font-bold text-red-400 mb-6">
                  Chỉ số (placeholder)
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">•</span>
                    <span>GDP, FDI, xuất–nhập khẩu: điền số & nguồn</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Số vụ án PCTN theo năm; tài sản thu hồi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">•</span>
                    <span>PAPI, PAR, CPI, PCI (nếu GV cho phép)</span>
                  </li>
                </ul>
              </div>

              {/* References */}
              <div className="bg-gradient-to-b from-red-500/10 to-transparent p-8 rounded-lg border border-red-500/30 border-red-glow">
                <h3 className="text-2xl font-bold text-red-400 mb-6">
                  Tài liệu tham khảo
                </h3>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">1.</span>
                    <span>
                      Giáo trình Lịch sử ĐCSVN, NXB CTQG Sự thật, 2021, tr.
                      310–334
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">2.</span>
                    <span>Văn kiện Đảng: Đại hội XII–XIII</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">3.</span>
                    <span>
                      Thông cáo cơ quan tiến hành tố tụng; báo chí chính thống
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      <ChatBot />
      <Footer />
    </div>
  );
}
