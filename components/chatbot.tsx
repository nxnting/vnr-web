"use client"

import { useState, useRef, useEffect } from "react"

interface Message {
  id: string
  type: "user" | "bot"
  text: string
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      text: "Chào bạn! Tôi có thể giúp bạn tìm hiểu về cuộc chiến chống tham nhũng tại Việt Nam từ xưa đến nay. Hãy hỏi tôi về: 'lịch sử chống tham nhũng', 'các đại án', 'quyết tâm chính trị', 'Đảng đẻ ra tham nhũng?', 'cải cách tư pháp', hoặc 'thành tựu gần đây'.",
    },
  ])
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()

    // Lịch sử chống tham nhũng
    if (
      input.includes("lịch sử") ||
      input.includes("từ xưa") ||
      input.includes("quá khứ") ||
      input.includes("trước đây")
    ) {
      return "Lịch sử chống tham nhũng của Việt Nam:\n\n• Thời kỳ 1945-1975: Hồ Chí Minh từng nêu rõ 'Tham ô, lãng phí là tội ác, là giặc nội xâm'. Đảng đã có nhiều chỉ thị về xây dựng bộ máy trong sạch.\n\n• Thời kỳ 1975-1986: Tham nhũng phát sinh do cơ chế quan liêu bao cấp. Đại hội VI (1986) mở đường đổi mới.\n\n• Thời kỳ 1986-2000: Đổi mới kinh tế nhưng thể chế còn yếu, tham nhũng gia tăng. Luật Chống tham nhũng đầu tiên (1998).\n\n• Thời kỳ 2000-2016: Tăng cường luật pháp, thành lập Thanh tra Chính phủ, cải cách tư pháp.\n\n• Từ 2016-nay: 'Không có vùng cấm, không có ngoại lệ'. Ban Chỉ đạo TW về PCTN do Tổng Bí thư đứng đầu. Xử lý nghiêm các đại án như VNCB, Mobifone-AVG, PVC."
    }

    // Vụ VNCB
    if (input.includes("vncb") || input.includes("ngân hàng xây dựng") || input.includes("phạm công danh")) {
      return "Vụ Ngân hàng Xây dựng Việt Nam (VNCB):\n\n• Nhân vật chính: Phạm Công Danh (Chủ tịch HĐQT VNCB)\n\n• Thủ đoạn: Lập 20 doanh nghiệp 'ma', vay vốn trái phép từ VNCB để chiếm đoạt, gây thiệt hại hơn 9.000 tỷ đồng.\n\n• Thời gian: Phát hiện 2012, xét xử nhiều lần.\n\n• Kết quả: Phạm Công Danh bị tuyên án tử hình về tội 'tham ô tài sản' (2018). Nhiều đồng phạm bị xử lý.\n\n• Ý nghĩa: Đây là một trong những vụ án tham nhũng lớn nhất trong lĩnh vực ngân hàng, cho thấy quyết tâm không khoan nhượng của Đảng và Nhà nước trong việc xử lý tham nhũng, bất kể đối tượng là ai."
    }

    // Vụ Mobifone-AVG
    if (
      input.includes("mobifone") ||
      input.includes("avg") ||
      input.includes("nguyễn bắc son") ||
      input.includes("trương minh tuấn")
    ) {
      return "Vụ Mobifone mua 95% cổ phần AVG:\n\n• Nhân vật chính: Nguyễn Bắc Son (Bộ trưởng Bộ TT&TT), Trương Minh Tuấn (Thứ trưởng), Phạm Nhật Vũ (Chủ tịch AVG)\n\n• Sai phạm: Năm 2016, Mobifone mua 95% cổ phần AVG với giá 8.889 tỷ đồng, trong khi giá trị thực chỉ khoảng 2.000 tỷ, gây thất thoát khoảng 7.000 tỷ đồng cho ngân sách.\n\n• Hối lộ: Nguyễn Bắc Son và Trương Minh Tuấn nhận hối lộ 3 triệu USD từ Phạm Nhật Vũ.\n\n• Kết quả: Nguyễn Bắc Son án chung thân, Trương Minh Tuấn 14 năm tù, Phạm Nhật Vũ 9 năm tù (2020).\n\n• Ý nghĩa: Đây là vụ án điển hình cho thấy không có 'vùng cấm' - ngay cả Bộ trưởng cũng bị xử lý nghiêm khắc khi vi phạm."
    }

    // Vụ PVC
    if (
      input.includes("pvc") ||
      input.includes("trịnh xuân thanh") ||
      input.includes("dầu khí") ||
      input.includes("xây lắp dầu khí")
    ) {
      return "Vụ Tổng công ty Xây lắp Dầu khí Việt Nam (PVC):\n\n• Nhân vật chính: Trịnh Xuân Thanh (Chủ tịch HĐQT PVC 2009-2013)\n\n• Các dự án sai phạm:\n  - Dự án Ethanol Phú Thọ: Đầu tư 3.300 tỷ, sản xuất thua lỗ, thiệt hại 543 tỷ\n  - Dự án Nhiệt điện Thái Bình 2: Thanh chiếm đoạt 14 tỷ qua mua cổ phiếu\n  - Dự án Hầm đường bộ Đà Nẵng: Thông đồng rút tiền ngân sách\n\n• Hành vi: Cố ý làm trái, tham ô, lợi dụng chức vụ chiếm đoạt tài sản\n\n• Kết quả: Trịnh Xuân Thanh bị tuyên án chung thân (2018)\n\n• Ý nghĩa: Vụ án PVC cho thấy sự quyết liệt trong xử lý tham nhũng ở các tập đoàn lớn, không phân biệt vị trí hay quyền lực."
    }

    // Đại án
    if (input.includes("đại án") || input.includes("vụ án lớn") || input.includes("các vụ án")) {
      return "Các đại án tiêu biểu trong cuộc chiến chống tham nhũng:\n\n1. Vụ VNCB (Phạm Công Danh): Thiệt hại >9.000 tỷ, Danh bị tử hình\n\n2. Vụ Mobifone-AVG (Nguyễn Bắc Son): Thiệt hại ~7.000 tỷ, Bộ trưởng bị án chung thân\n\n3. Vụ PVC (Trịnh Xuân Thanh): Thiệt hại hàng nghìn tỷ, Chủ tịch bị án chung thân\n\n4. Vụ Oceanbank (Hà Văn Thắm): Thiệt hại nghìn tỷ, án chung thân\n\n5. Vụ Đồng Tâm Group (Nguyễn Đức Kiên): Lừa đảo chiếm đoạt hàng nghìn tỷ, 30 năm tù\n\n6. Vụ Hứa Thị Phấn (Ngân hàng SCB): Thiệt hại nghìn tỷ, án chung thân\n\nCác vụ án này cho thấy 'Không có vùng cấm, không có ngoại lệ' - từ Bộ trưởng, Chủ tịch tập đoàn đến cán bộ cấp cao đều bị xử lý nghiêm minh."
    }

    // Quyết tâm chính trị
    if (
      input.includes("quyết tâm") ||
      input.includes("chính trị") ||
      input.includes("không có vùng cấm") ||
      input.includes("không có ngoại lệ")
    ) {
      return "Quyết tâm chính trị trong chống tham nhũng:\n\n• Lập trường: 'Không có vùng cấm, không có ngoại lệ' - Mọi cá nhân đều bình đẳng trước pháp luật.\n\n• Cơ chế lãnh đạo: Ban Chỉ đạo Trung ương về phòng chống tham nhũng, tiêu cực do Tổng Bí thư đứng đầu (thành lập 2013).\n\n• Hành động cụ thể:\n  - Xử lý nghiêm cán bộ cấp cao: Bộ trưởng, Thứ trưởng, Tổng giám đốc tập đoàn\n  - Không bảo vệ bất kỳ ai dù có chức vụ cao\n  - Tăng cường thanh tra, kiểm tra, giám sát\n\n• Cải cách thể chế:\n  - Luật Phòng chống tham nhũng (2005, sửa đổi 2012, 2018)\n  - Chuyển đổi số, công khai minh bạch\n  - Cải cách tư pháp, tăng cường độc lập của cơ quan điều tra\n\n• Kết quả: Củng cố niềm tin nhân dân, nâng cao uy tín Đảng, tạo môi trường đầu tư lành mạnh."
    }

    // Đảng đẻ ra tham nhũng?
    if (
      input.includes("đảng đẻ ra") ||
      input.includes("đảng sinh ra") ||
      input.includes("đảng tạo ra") ||
      input.includes("đảng gây ra")
    ) {
      return "Phản biện: 'Đảng đẻ ra tham nhũng?' - KHÔNG!\n\n• Bản chất tham nhũng: Tham nhũng là 'khuyết tật' của quyền lực nếu thiếu minh bạch và kiểm soát. Đây là vấn đề toàn cầu, xảy ra ở mọi quốc gia, mọi chế độ chính trị.\n\n• Nguyên nhân tham nhũng:\n  - Yếu kém trong quản lý, giám sát\n  - Cơ chế pháp lý chưa hoàn thiện\n  - Văn hóa công vụ chưa minh bạch\n  - Ý thức cá nhân một số cán bộ sa ngã\n\n• Mục tiêu của Đảng: Lợi ích quốc gia - dân tộc, xây dựng xã hội công bằng, văn minh. Tham nhũng đi ngược lại bản chất và mục tiêu này.\n\n• Hành động của Đảng: Công khai xử lý nghiêm minh, không có vùng cấm, cải cách thể chế, tăng cường kiểm tra giám sát, chuyển đổi số.\n\n• Kết luận: Đảng không 'đẻ ra' tham nhũng mà đang dẫn dắt cuộc chiến quyết liệt để tiêu diệt nó. Việc công khai xử lý các vụ án lớn là minh chứng cho khả năng tự soi, tự sửa, và cam kết xây dựng một xã hội trong sạch, minh bạch."
    }

    // Cải cách tư pháp
    if (
      input.includes("cải cách") ||
      input.includes("tư pháp") ||
      input.includes("luật pháp") ||
      input.includes("pháp luật")
    ) {
      return "Cải cách tư pháp và thể chế trong chống tham nhũng:\n\n• Luật pháp:\n  - Luật Phòng chống tham nhũng (2005, sửa đổi 2012, 2018)\n  - Bộ luật Hình sự sửa đổi, bổ sung tội danh liên quan tham nhũng\n  - Luật Thanh tra, Luật Khiếu nại, Tố cáo\n\n• Cải cách tổ chức:\n  - Thành lập Ban Chỉ đạo TW về PCTN, tiêu cực (2013)\n  - Tăng cường quyền hạn Thanh tra Chính phủ\n  - Nâng cao độc lập của cơ quan điều tra, tòa án, viện kiểm sát\n\n• Chuyển đổi số:\n  - Chính phủ điện tử, chính phủ số\n  - Công khai minh bạch thông tin, ngân sách\n  - Giảm tiếp xúc trực tiếp, hạn chế tham nhũng vặt\n\n• Giám sát xã hội:\n  - Tăng cường vai trò báo chí, dư luận\n  - Đường dây nóng tiếp nhận phản ánh tham nhũng\n  - Bảo vệ người tố giác tham nhũng\n\n• Kết quả: Hệ thống pháp luật ngày càng hoàn thiện, cơ chế giám sát chặt chẽ hơn, tạo môi trường trong sạch, minh bạch."
    }

    // Thành tựu gần đây
    if (
      input.includes("thành tựu") ||
      input.includes("kết quả") ||
      input.includes("hiện nay") ||
      input.includes("gần đây")
    ) {
      return "Thành tựu chống tham nhũng gần đây (2016-nay):\n\n• Xử lý cán bộ cấp cao:\n  - Hàng chục cán bộ cấp Bộ trưởng, Thứ trưởng, Chủ tịch tập đoàn bị khởi tố\n  - Không có 'vùng cấm', không có 'ngoại lệ'\n\n• Thu hồi tài sản:\n  - Hàng nghìn tỷ đồng tài sản tham nhũng được thu hồi\n  - Tăng cường xử lý dân sự song song với hình sự\n\n• Nâng cao chỉ số quốc tế:\n  - CPI (Chỉ số nhận thức tham nhũng) của Việt Nam từ 31/100 (2016) lên 42/100 (2023)\n  - Môi trường kinh doanh được cải thiện\n\n• Củng cố niềm tin:\n  - Khảo sát PAPI cho thấy niềm tin của người dân vào cuộc chiến PCTN tăng\n  - Uy tín Đảng và Nhà nước được nâng cao\n\n• Cải cách thể chế:\n  - Chính phủ điện tử, chính phủ số phát triển mạnh\n  - Minh bạch hóa quy trình hành chính, giảm tham nhũng vặt\n\n• Phòng ngừa:\n  - Tăng cường giáo dục đạo đức, lối sống cho cán bộ\n  - Xây dựng văn hóa 'không dám tham nhũng, không thể tham nhũng, không cần tham nhũng'"
    }

    // Chuỗi nhân quả
    if (
      input.includes("nhân quả") ||
      input.includes("4 bước") ||
      input.includes("logic") ||
      input.includes("kết nối")
    ) {
      return "Chuỗi nhân-quả 4 bước trong chống tham nhũng:\n\n1️⃣ Tham nhũng diễn ra:\n• Do yếu kém trong quản lý, thiếu minh bạch\n• Cơ chế pháp lý chưa hoàn thiện\n• Một số cán bộ ý thức kém, sa ngã\n\n2️⃣ Phát hiện và xử lý:\n• Đảng và Nhà nước kiên quyết điều tra\n• Truy tố nghiêm minh các vụ án lớn (VNCB, Mobifone-AVG, PVC)\n• Không có vùng cấm, không có ngoại lệ\n\n3️⃣ Đổi mới thể chế:\n• Tăng cường giám sát, cải cách tư pháp\n• Xây dựng Đảng trong sạch, vững mạnh\n• Chuyển đổi số, minh bạch hóa\n\n4️⃣ Kết quả tích cực:\n• Nâng cao niềm tin xã hội\n• Thúc đẩy phát triển bền vững\n• Chứng minh khả năng tự chỉnh, tự hoàn thiện của Đảng\n\n➡️ Kết luận: Cuộc chiến chống tham nhũng không chỉ là xử lý vi phạm mà còn là quá trình tự đổi mới, tự hoàn thiện, thể hiện sự trưởng thành của Đảng."
    }

    // Bài học & ý nghĩa
    if (input.includes("bài học") || input.includes("kết luận") || input.includes("ý nghĩa")) {
      return "Bài học và ý nghĩa từ cuộc chiến chống tham nhũng:\n\n• Khả năng tự soi, tự sửa:\n  - Đảng không ngại đối mặt với vấn đề nội bộ\n  - Công khai xử lý nghiêm minh, minh bạch\n\n• Không có vùng cấm:\n  - Từ Bộ trưởng, Chủ tịch tập đoàn đến cán bộ cơ sở đều bình đẳng trước pháp luật\n  - Thể hiện quyết tâm chính trị mạnh mẽ\n\n• Cải cách toàn diện:\n  - Không chỉ xử lý cá nhân mà còn cải cách thể chế\n  - Chuyển đổi số, minh bạch hóa quy trình\n\n• Tham nhũng không phải lỗi của chế độ:\n  - Tham nhũng là vấn đề toàn cầu, xảy ra ở mọi quốc gia\n  - Quan trọng là cách đối phó: Đảng đang dẫn dắt cuộc chiến quyết liệt\n\n• Trưởng thành và trách nhiệm:\n  - Cuộc chiến PCTN chứng minh sự trưởng thành của Đảng\n  - Thể hiện trách nhiệm với đất nước và nhân dân\n\n• Hướng tới tương lai:\n  - Xây dựng xã hội trong sạch, minh bạch\n  - Phát triển bền vững, ổn định chính trị\n  - Nâng cao vị thế Việt Nam trên trường quốc tế"
    }

    // Vai trò nhân dân
    if (
      input.includes("nhân dân") ||
      input.includes("người dân") ||
      input.includes("xã hội") ||
      input.includes("giám sát")
    ) {
      return "Vai trò của nhân dân trong chống tham nhũng:\n\n• Giám sát quyền lực:\n  - Nhân dân là chủ thể giám sát hoạt động của cán bộ, công chức\n  - Quyền phản ánh, tố giác hành vi tham nhũng\n\n• Kênh tham gia:\n  - Đường dây nóng tiếp nhận phản ánh tham nhũng\n  - Cổng thông tin điện tử của Thanh tra Chính phủ\n  - Báo chí, mạng xã hội\n\n• Bảo vệ người tố giác:\n  - Luật pháp bảo vệ người tố giác tham nhũng\n  - Khuyến khích tinh thần 'không im lặng trước tham nhũng'\n\n• Xây dựng văn hóa:\n  - Văn hóa 'không dung túng tham nhũng'\n  - Giáo dục ý thức công dân, trách nhiệm xã hội\n\n• Kết quả:\n  - Nhiều vụ án tham nhũng được phát hiện nhờ tố giác của nhân dân\n  - Tạo sức ép xã hội, răn đe cán bộ có ý định tham nhũng\n\n➡️ Kết luận: Nhân dân không chỉ là người thưởng mà còn là lực lượng quan trọng trong cuộc chiến chống tham nhũng. Sự tham gia tích cực của nhân dân là điều kiện để cuộc chiến thành công."
    }

    // Default response with comprehensive guidance
    return "Tôi có thể giúp bạn tìm hiểu về:\n\n📚 Lịch sử: 'lịch sử chống tham nhũng', 'từ xưa đến nay'\n\n⚖️ Đại án: 'vụ VNCB', 'vụ Mobifone-AVG', 'vụ PVC', 'các đại án'\n\n💪 Quyết tâm: 'quyết tâm chính trị', 'không có vùng cấm'\n\n🔄 Cải cách: 'cải cách tư pháp', 'chuyển đổi số'\n\n❓ Phản biện: 'Đảng đẻ ra tham nhũng?'\n\n🎯 Logic: 'chuỗi nhân quả 4 bước'\n\n🏆 Thành tựu: 'thành tựu gần đây', 'kết quả'\n\n📖 Bài học: 'bài học', 'ý nghĩa'\n\n👥 Vai trò: 'vai trò nhân dân', 'giám sát xã hội'\n\nHãy hỏi tôi về bất kỳ chủ đề nào bạn quan tâm!"
  }

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      text: input,
    }

    setMessages([...messages, userMessage])
    const currentInput = input
    setInput("")

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        text: getResponse(currentInput),
      }
      setMessages((prev) => [...prev, botResponse])
    }, 800)
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-14 h-14 sm:w-16 sm:h-16 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg z-40 transition-all duration-300 hover:scale-110"
        aria-label="Mở trợ lý AI"
      >
        <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v6a2 2 0 01-2 2h-2.93a1 1 0 00-.7.29l-1.14 1.14A1 1 0 008.05 15H8a1 1 0 00-1 1v1.05a1 1 0 01-1.59.82l-1.30-1.30A1 1 0 003 13.35V5z" />
        </svg>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:bottom-24 sm:right-8 w-[calc(100vw-2rem)] sm:w-96 max-h-[500px] sm:max-h-[600px] bg-black border-2 border-red-500 rounded-lg shadow-2xl flex flex-col z-40 animate-in fade-in slide-in-from-bottom-4">
          <div className="bg-red-500 text-white p-3 sm:p-4 rounded-t-lg flex items-center justify-between">
            <div>
              <h3 className="font-bold text-sm sm:text-base">Trợ lý – Chống tham nhũng</h3>
              <p className="text-xs text-red-100">Hỏi về lịch sử, vụ án, chính sách...</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-red-600 p-1 rounded transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-gray-900">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] px-3 sm:px-4 py-2 rounded-lg ${
                    msg.type === "user" ? "bg-red-500 text-white" : "bg-gray-800 text-gray-200 border border-red-500/30"
                  }`}
                >
                  <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 sm:p-4 border-t border-red-500/30 bg-black flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Nhập câu hỏi..."
              className="flex-1 bg-gray-800 text-white px-2 sm:px-3 py-2 rounded border border-red-500/30 focus:outline-none focus:border-red-500 text-xs sm:text-sm"
            />
            <button
              onClick={handleSend}
              className="bg-red-500 hover:bg-red-600 text-white px-3 sm:px-4 py-2 rounded font-semibold transition-colors text-xs sm:text-sm"
            >
              Gửi
            </button>
          </div>
        </div>
      )}
    </>
  )
}
