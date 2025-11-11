"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Header from "@/components/header";
import Hero from "@/components/hero";
import ContentSection from "@/components/content-section";
import LogicConnection from "@/components/logic-connection";
import Footer from "@/components/footer";
import ChatBot from "@/components/chatbot";
import ReferenceItem from "@/components/ui/reference-item";
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
              {/* Case 1: VNCB */}
              <a
                href="https://thanhnien.vn/dai-an-vncb-de-nghi-pham-cong-danh-20-nam-tu-tram-be-5-6-nam-tu-185728361.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-b from-red-500/10 to-transparent rounded-lg border border-red-500/30 hover:border-red-500/60 transition-all overflow-hidden"
              >
                <div className="relative w-full h-48">
                  <Image
                    src="3.jpg"
                    alt="VNCB case illustration"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                </div>
                <div className="p-6 group-hover:bg-red-500/5 transition-all">
                  <div className="text-red-500 font-bold text-sm mb-2">
                    Tài chính – Ngân hàng
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition">
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
              </a>

              {/* Case 2: Mobifone */}
              <a
                href="https://baochinhphu.vn/dai-an-mobifone-mua-avg-hinh-phat-nghiem-khac-doi-voi-cac-bi-cao-102266271.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-b from-red-500/10 to-transparent rounded-lg border border-red-500/30 hover:border-red-500/60 transition-all overflow-hidden"
              >
                <div className="relative w-full h-48">
                  <Image
                    src="4.jpg"
                    alt="Mobifone case illustration"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                </div>
                <div className="p-6 group-hover:bg-red-500/5 transition-all">
                  <div className="text-red-500 font-bold text-sm mb-2">
                    M&A – Tài sản công
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition">
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
              </a>

              {/* Case 3: PVC */}
              <a
                href="https://tienphong.vn/trinh-xuan-thanh-toi-lay-tien-dau-ma-den-post1318874.tpo"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-b from-red-500/10 to-transparent rounded-lg border border-red-500/30 hover:border-red-500/60 transition-all overflow-hidden"
              >
                <div className="relative w-full h-48">
                  <Image
                    src="5.jpg"
                    alt="PVC case illustration"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                </div>
                <div className="p-6 group-hover:bg-red-500/5 transition-all">
                  <div className="text-red-500 font-bold text-sm mb-2">
                    Xây lắp – Dầu khí
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition">
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
              </a>
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
                <h3 className="text-2xl font-bold text-red-400 mb-6">Chỉ số</h3>

                <div className="space-y-3">
                  {/* GDP – FDI – Xuất/nhập khẩu */}
                  <details className="group rounded-lg border border-red-500/30 bg-red-500/5 open:bg-red-500/10 transition">
                    <summary className="cursor-pointer list-none px-4 py-3 flex items-start justify-between gap-3">
                      <span className="text-sm sm:text-base text-gray-200 font-medium">
                        GDP, FDI, xuất–nhập khẩu{" "}
                        <span className="opacity-60"></span>
                      </span>
                      <a
                        href="https://forbes.vn/goc-nhin-ve-tang-truong-xuat-khau-cua-viet-nam/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 inline-flex items-center gap-1 text-red-400 hover:text-red-300 text-xs sm:text-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Nguồn gợi ý
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          className="opacity-90"
                        >
                          <path
                            fill="currentColor"
                            d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"
                          />
                          <path
                            fill="currentColor"
                            d="M5 5h6v2H7v10h10v-4h2v6H5z"
                          />
                        </svg>
                      </a>
                    </summary>
                    <div className="px-4 pb-4 pt-0 text-gray-300 text-sm leading-relaxed border-t border-red-500/20">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          GDP (năm …): <span className="text-red-300">—</span>
                        </li>
                        <li>
                          FDI giải ngân (năm …):{" "}
                          <span className="text-red-300">—</span>
                        </li>
                        <li>
                          Xuất–nhập khẩu (năm …):{" "}
                          <span className="text-red-300">—</span>
                        </li>
                      </ul>
                      <div className="mt-3 flex flex-wrap gap-3">
                        <a
                          href="https://www.nso.gov.vn/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-red-300 hover:text-red-200 underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Tổng cục Thống kê
                        </a>
                        <a
                          href="https://data.worldbank.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-red-300 hover:text-red-2 00 underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          World Bank Data
                        </a>
                        <a
                          href="https://www.customs.gov.vn/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-red-300 hover:text-red-200 underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Hải quan (xuất–nhập khẩu)
                        </a>
                      </div>
                    </div>
                  </details>

                  {/* Vụ án & tài sản thu hồi */}
                  <details className="group rounded-lg border border-red-500/30 bg-red-500/5 open:bg-red-500/10 transition">
                    <summary className="cursor-pointer list-none px-4 py-3 flex items-start justify-between gap-3">
                      <span className="text-sm sm:text-base text-gray-200 font-medium">
                        Số vụ án PCTN theo năm; tài sản thu hồi{" "}
                        <span className="opacity-60"></span>
                      </span>
                      <a
                        href="https://baochinhphu.vn/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 inline-flex items-center gap-1 text-red-400 hover:text-red-300 text-xs sm:text-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Nguồn gợi ý
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          className="opacity-90"
                        >
                          <path
                            fill="currentColor"
                            d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"
                          />
                          <path
                            fill="currentColor"
                            d="M5 5h6v2H7v10h10v-4h2v6H5z"
                          />
                        </svg>
                      </a>
                    </summary>
                    <div className="px-4 pb-4 pt-0 text-gray-300 text-sm leading-relaxed border-t border-red-500/20">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          Số vụ án PCTN (năm …):{" "}
                          <span className="text-red-300">—</span>
                        </li>
                        <li>
                          Tài sản thu hồi (tỷ đồng, năm …):{" "}
                          <span className="text-red-300">—</span>
                        </li>
                      </ul>
                      <div className="mt-3 flex flex-wrap gap-3">
                        <a
                          href="https://baochinhphu.vn/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-red-300 hover:text-red-200 underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Báo Chính phủ
                        </a>
                        <a
                          href="https://vksndtc.gov.vn/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-red-300 hover:text-red-200 underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          VKSND Tối cao
                        </a>
                        <a
                          href="https://toaan.gov.vn/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-red-300 hover:text-red-200 underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          TAND Tối cao
                        </a>
                      </div>
                    </div>
                  </details>

                  {/* PAPI – PAR – CPI – PCI */}
                  <details className="group rounded-lg border border-red-500/30 bg-red-500/5 open:bg-red-500/10 transition">
                    <summary className="cursor-pointer list-none px-4 py-3 flex items-start justify-between gap-3">
                      <span className="text-sm sm:text-base text-gray-200 font-medium">
                        PAPI, PAR, CPI, PCI{" "}
                        <span className="opacity-60"></span>
                      </span>
                      <a
                        href="https://papi.org.vn/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 inline-flex items-center gap-1 text-red-400 hover:text-red-300 text-xs sm:text-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Nguồn gợi ý
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          className="opacity-90"
                        >
                          <path
                            fill="currentColor"
                            d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"
                          />
                          <path
                            fill="currentColor"
                            d="M5 5h6v2H7v10h10v-4h2v6H5z"
                          />
                        </svg>
                      </a>
                    </summary>
                    <div className="px-4 pb-4 pt-0 text-gray-300 text-sm leading-relaxed border-t border-red-500/20">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          PAPI (quản trị & hành chính công):{" "}
                          <span className="text-red-300">—</span>
                        </li>
                        <li>
                          PAR Index (cải cách hành chính):{" "}
                          <span className="text-red-300">—</span>
                        </li>
                        <li>
                          CPI (Corruption Perceptions Index):{" "}
                          <span className="text-red-300">—</span>
                        </li>
                        <li>
                          PCI (năng lực cạnh tranh cấp tỉnh):{" "}
                          <span className="text-red-300">—</span>
                        </li>
                      </ul>
                      <div className="mt-3 flex flex-wrap gap-3">
                        <a
                          href="https://papi.org.vn/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-red-300 hover:text-red-200 underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          PAPI
                        </a>
                        <a
                          href="https://parindex.gov.vn/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-red-300 hover:text-red-200 underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          PAR Index
                        </a>
                        <a
                          href="https://www.transparency.org/en/cpi"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-red-300 hover:text-red-200 underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Transparency Intl – CPI
                        </a>
                        <a
                          href="https://pcivietnam.vn/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-red-300 hover:text-red-200 underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          PCI Việt Nam
                        </a>
                      </div>
                    </div>
                  </details>
                </div>
              </div>

              {/* References */}
              <div className="bg-gradient-to-b from-red-500/10 to-transparent p-8 rounded-lg border border-red-500/30 border-red-glow">
                <h3 className="text-2xl font-bold text-red-400 mb-6">
                  Tài liệu tham khảo
                </h3>

                <div className="space-y-3">
                  <details className="group rounded-lg border border-red-500/30 bg-red-500/5 open:bg-red-500/10 transition">
                    <summary className="cursor-pointer list-none px-4 py-3 flex items-start justify-between gap-3">
                      <span className="text-sm sm:text-base text-gray-200 font-medium">
                        Giáo trình Lịch sử ĐCSVN, NXB CTQG Sự thật, 2021, tr.
                        310–334
                      </span>
                      <a
                        href="https://www.slideshare.net/slideshow/gio-trnh-lch-s-ng-cng-sn-vit-nam-b-gdt-ctqg-2021pdf/257548548"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 inline-flex items-center gap-1 text-red-400 hover:text-red-300 text-xs sm:text-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Đọc bài gốc
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          className="opacity-90"
                        >
                          <path
                            fill="currentColor"
                            d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"
                          />
                          <path
                            fill="currentColor"
                            d="M5 5h6v2H7v10h10v-4h2v6H5z"
                          />
                        </svg>
                      </a>
                    </summary>
                    <div className="px-4 pb-4 pt-0 text-gray-300 text-sm leading-relaxed border-t border-red-500/20">
                      Hệ thống hóa đường lối, bối cảnh và thành tựu của Đảng qua
                      các thời kỳ, trong đó có phần nói rõ về công tác xây dựng
                      Đảng và phòng chống tham nhũng.
                    </div>
                  </details>

                  <details className="group rounded-lg border border-red-500/30 bg-red-500/5 open:bg-red-500/10 transition">
                    <summary className="cursor-pointer list-none px-4 py-3 flex items-start justify-between gap-3">
                      <span className="text-sm sm:text-base text-gray-200 font-medium">
                        Văn kiện Đảng: Đại hội XII–XIII
                      </span>
                      <a
                        href="https://tulieuvankien.dangcongsan.vn/van-kien-tu-lieu-ve-dang/book/sach-chinh-tri/van-kien-dai-hoi-dai-bieu-toan-quoc-lan-thu-xiii-tap-1-403"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 inline-flex items-center gap-1 text-red-400 hover:text-red-300 text-xs sm:text-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Đọc bài gốc
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          className="opacity-90"
                        >
                          <path
                            fill="currentColor"
                            d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"
                          />
                          <path
                            fill="currentColor"
                            d="M5 5h6v2H7v10h10v-4h2v6H5z"
                          />
                        </svg>
                      </a>
                    </summary>
                    <div className="px-4 pb-4 pt-0 text-gray-300 text-sm leading-relaxed border-t border-red-500/20">
                      Nêu rõ tư tưởng chỉ đạo “không có vùng cấm, không có ngoại
                      lệ” trong phòng chống tham nhũng; khẳng định minh bạch,
                      kiểm soát quyền lực và trách nhiệm giải trình là trọng tâm
                      cải cách.
                    </div>
                  </details>

                  <details className="group rounded-lg border border-red-500/30 bg-red-500/5 open:bg-red-500/10 transition">
                    <summary className="cursor-pointer list-none px-4 py-3 flex items-start justify-between gap-3">
                      <span className="text-sm sm:text-base text-gray-200 font-medium">
                        Thông cáo cơ quan tiến hành tố tụng; báo chí chính thống
                      </span>
                      <a
                        href="https://baochinhphu.vn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 inline-flex items-center gap-1 text-red-400 hover:text-red-300 text-xs sm:text-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Đọc bài gốc
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          className="opacity-90"
                        >
                          <path
                            fill="currentColor"
                            d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"
                          />
                          <path
                            fill="currentColor"
                            d="M5 5h6v2H7v10h10v-4h2v6H5z"
                          />
                        </svg>
                      </a>
                    </summary>
                    <div className="px-4 pb-4 pt-0 text-gray-300 text-sm leading-relaxed border-t border-red-500/20">
                      Tổng hợp các bài báo, bản án, thông cáo và dữ liệu thực tế
                      về các vụ án tiêu biểu trong chiến dịch “Đốt lò”; cung cấp
                      bằng chứng minh họa cho luận điểm của đề tài.
                    </div>
                  </details>
                </div>
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
