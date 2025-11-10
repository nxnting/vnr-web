"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation?: string
}

// Bank of 50 questions about Vietnam's anti-corruption campaign
const questionBank: Question[] = [
  {
    id: 1,
    question: "Khẩu hiệu chống tham nhũng của Đảng là gì?",
    options: [
      "Không có vùng cấm, không có ngoại lệ",
      "Phải chống tham nhũng bằng mọi giá",
      "Tham nhũng là kẻ thù của nhân dân",
      "Xử lý nghiêm minh mọi hành vi tham nhũng",
    ],
    correctAnswer: 0,
    explanation:
      "Khẩu hiệu 'Không có vùng cấm, không có ngoại lệ' thể hiện quyết tâm chống tham nhũng mạnh mẽ của Đảng.",
  },
  {
    id: 2,
    question: "Đại án nào liên quan đến Ngân hàng TMCP Xây dựng Việt Nam?",
    options: ["Đại án PVC", "Đại án Mobifone-AVG", "Đại án VNCB", "Đại án Vinashin"],
    correctAnswer: 2,
    explanation:
      "Đại án VNCB (Ngân hàng TMCP Xây dựng Việt Nam) là một trong những vụ án tham nhũng lớn được xử lý nghiêm.",
  },
  {
    id: 3,
    question: "Ai là bị cáo chính trong đại án Mobifone-AVG?",
    options: ["Đinh La Thăng", "Nguyễn Bắc Son", "Trịnh Xuân Thanh", "Vũ Nhôm"],
    correctAnswer: 1,
    explanation:
      "Nguyễn Bắc Son, nguyên Bộ trưởng Bộ Thông tin và Truyền thông, là bị cáo chính trong đại án Mobifone mua 95% cổ phần AVG.",
  },
  {
    id: 4,
    question: "Đại án PVC liên quan đến lĩnh vực nào?",
    options: ["Ngân hàng", "Xây dựng và năng lượng", "Viễn thông", "Giao thông"],
    correctAnswer: 1,
    explanation: "Đại án PVC liên quan đến lĩnh vực xây dựng và năng lượng với các sai phạm nghiêm trọng.",
  },
  {
    id: 5,
    question: "Quyết tâm chính trị trong chống tham nhũng bắt đầu mạnh mẽ từ khi nào?",
    options: ["Từ Đại hội XI", "Từ Đại hội XII", "Từ Đại hội XIII", "Từ Đại hội X"],
    correctAnswer: 1,
    explanation: "Quyết tâm chống tham nhũng được thể hiện mạnh mẽ từ Đại hội XII của Đảng.",
  },
  {
    id: 6,
    question: "Tham nhũng được coi là gì trong quan điểm của Đảng?",
    options: ["Khuyết tật của quyền lực", "Sai lầm cá nhân", "Vấn đề kinh tế", "Hành vi phạm pháp thông thường"],
    correctAnswer: 0,
    explanation: "Tham nhũng là 'khuyết tật' của quyền lực nếu thiếu minh bạch và kiểm soát.",
  },
  {
    id: 7,
    question: "Bước đầu tiên trong chuỗi nhân quả chống tham nhũng là gì?",
    options: ["Công khai xử lý", "Hoàn thiện thể chế", "Lý luận: Nhận thức rõ bản chất", "Tăng cường kiểm tra"],
    correctAnswer: 2,
    explanation: "Bước đầu tiên là nhận thức rõ bản chất của tham nhũng qua lý luận.",
  },
  {
    id: 8,
    question: "Mục tiêu của Đảng khi chống tham nhũng là gì?",
    options: ["Lợi ích quốc gia–dân tộc", "Thể hiện quyền lực", "Đáp ứng áp lực quốc tế", "Tăng uy tín cá nhân"],
    correctAnswer: 0,
    explanation: "Mục tiêu là lợi ích quốc gia–dân tộc, tham nhũng đi ngược bản chất đó.",
  },
  {
    id: 9,
    question: "Giải pháp căn cơ để chống tham nhũng là gì?",
    options: [
      "Tăng hình phạt",
      "Công khai xử lý",
      "Hoàn thiện thể chế – kiểm tra giám sát – chuyển đổi số",
      "Giáo dục đạo đức",
    ],
    correctAnswer: 2,
    explanation: "Giải pháp căn cơ là hoàn thiện thể chế, tăng cường kiểm tra giám sát và chuyển đổi số.",
  },
  {
    id: 10,
    question: "Việc công khai xử lý tham nhũng thể hiện điều gì?",
    options: ["Quyết tâm chính trị của Đảng", "Áp lực từ dư luận", "Yêu cầu của quốc tế", "Xu hướng hiện đại"],
    correctAnswer: 0,
    explanation: "Việc công khai xử lý thể hiện quyết tâm chính trị mạnh mẽ của Đảng.",
  },
  {
    id: 11,
    question: "Tại sao nói 'Đảng không đẻ ra tham nhũng'?",
    options: [
      "Vì Đảng luôn đúng",
      "Vì tham nhũng là khuyết tật của quyền lực thiếu kiểm soát",
      "Vì Đảng không có lỗi",
      "Vì đó là vấn đề cá nhân",
    ],
    correctAnswer: 1,
    explanation: "Tham nhũng là khuyết tật của quyền lực khi thiếu minh bạch và kiểm soát, không phải do Đảng sinh ra.",
  },
  {
    id: 12,
    question: "Vai trò của chuyển đổi số trong chống tham nhũng là gì?",
    options: [
      "Tăng hiệu quả làm việc",
      "Tăng cường minh bạch và giảm tiếp xúc trực tiếp",
      "Hiện đại hóa hệ thống",
      "Theo kịp xu hướng thế giới",
    ],
    correctAnswer: 1,
    explanation: "Chuyển đổi số giúp tăng cường minh bạch và giảm tiếp xúc trực tiếp, hạn chế cơ hội tham nhũng.",
  },
  {
    id: 13,
    question: "Nguyên nhân sâu xa của tham nhũng theo quan điểm của Đảng là gì?",
    options: [
      "Do con người xấu",
      "Do thiếu minh bạch và kiểm soát quyền lực",
      "Do chế độ kém phát triển",
      "Do giáo dục kém",
    ],
    correctAnswer: 1,
    explanation: "Nguyên nhân sâu xa là thiếu minh bạch và kiểm soát quyền lực.",
  },
  {
    id: 14,
    question: "Điểm nổi bật trong xử lý đại án VNCB là gì?",
    options: ["Xử lý nhanh chóng", "Xử lý công khai, nghiêm minh cả cấp cao", "Xử lý nhẹ nhàng", "Xử lý kín đáo"],
    correctAnswer: 1,
    explanation: "Đại án VNCB được xử lý công khai, nghiêm minh cả với cán bộ cấp cao.",
  },
  {
    id: 15,
    question: "Quyết định 217-QĐ/TW liên quan đến việc gì?",
    options: [
      "Thành lập ban chống tham nhũng",
      "Tăng hình phạt tham nhũng",
      "Kiểm tra, giám sát việc kê khai tài sản",
      "Cải cách tư pháp",
    ],
    correctAnswer: 2,
    explanation: "Quyết định 217-QĐ/TW về kiểm tra, giám sát việc kê khai tài sản, thu nhập.",
  },
  {
    id: 16,
    question: "Cải cách tư pháp đóng vai trò gì trong chống tham nhũng?",
    options: [
      "Không liên quan",
      "Vai trò thứ yếu",
      "Vai trò cốt lõi trong minh bạch và công bằng",
      "Chỉ mang tính hình thức",
    ],
    correctAnswer: 2,
    explanation: "Cải cách tư pháp đóng vai trò cốt lõi trong việc tăng cường minh bạch và công bằng.",
  },
  {
    id: 17,
    question: "Thành tựu nổi bật của Việt Nam trong chống tham nhũng gần đây là gì?",
    options: [
      "Tăng số vụ án được phát hiện",
      "Xử lý nhiều đại án, cả cấp cao không ngoại lệ",
      "Giảm số vụ tham nhũng",
      "Tăng ngân sách chống tham nhũng",
    ],
    correctAnswer: 1,
    explanation: "Thành tựu nổi bật là xử lý nhiều đại án, kể cả cán bộ cấp cao không có ngoại lệ.",
  },
  {
    id: 18,
    question: "Vai trò của nhân dân trong chống tham nhũng là gì?",
    options: ["Không có vai trò", "Vai trò giám sát và phản ánh", "Chỉ tuân theo chỉ đạo", "Vai trò hạn chế"],
    correctAnswer: 1,
    explanation: "Nhân dân có vai trò quan trọng trong giám sát và phản ánh các hành vi tham nhũng.",
  },
  {
    id: 19,
    question: "Nghị quyết Trung ương 4 khóa XII nói về vấn đề gì?",
    options: [
      "Phát triển kinh tế",
      "Xây dựng Đảng, chống tự diễn biến, tự chuyển hóa",
      "Cải cách giáo dục",
      "Đối ngoại",
    ],
    correctAnswer: 1,
    explanation: "Nghị quyết Trung ương 4 khóa XII về xây dựng Đảng, chống tự diễn biến, tự chuyển hóa.",
  },
  {
    id: 20,
    question: "Hình phạt cao nhất trong các đại án tham nhũng là gì?",
    options: ["Tù chung thân", "Tử hình", "30 năm tù", "Tịch thu tài sản"],
    correctAnswer: 1,
    explanation: "Hình phạt cao nhất là tử hình được áp dụng cho một số vụ án tham nhũng đặc biệt nghiêm trọng.",
  },
  {
    id: 21,
    question: "Minh bạch trong hoạt động công quyền có ý nghĩa gì?",
    options: [
      "Để báo cáo quốc tế",
      "Để tăng uy tín cá nhân",
      "Để ngăn chặn lợi ích nhóm và tham nhũng",
      "Để hiện đại hóa",
    ],
    correctAnswer: 2,
    explanation: "Minh bạch giúp ngăn chặn lợi ích nhóm và các hành vi tham nhũng.",
  },
  {
    id: 22,
    question: "Kiểm tra giám sát trong Đảng có vai trò gì?",
    options: [
      "Chỉ mang tính hình thức",
      "Phát hiện và ngăn chặn vi phạm kịp thời",
      "Tạo áp lực cho cán bộ",
      "Làm phức tạp công việc",
    ],
    correctAnswer: 1,
    explanation: "Kiểm tra giám sát giúp phát hiện và ngăn chặn các vi phạm kịp thời.",
  },
  {
    id: 23,
    question: "Tại sao chống tham nhũng cần sự tham gia của toàn xã hội?",
    options: [
      "Để giảm gánh nặng cho Đảng",
      "Vì tham nhũng ảnh hưởng đến cả cộng đồng",
      "Để tăng tính chính danh",
      "Để đáp ứng yêu cầu quốc tế",
    ],
    correctAnswer: 1,
    explanation: "Tham nhũng ảnh hưởng đến toàn xã hội nên cần sự tham gia của mọi người.",
  },
  {
    id: 24,
    question: "Đặc điểm của các đại án tham nhũng được xử lý gần đây?",
    options: [
      "Chỉ xử lý cán bộ cấp thấp",
      "Xử lý công khai, nghiêm minh cả cấp cao",
      "Xử lý kín đáo",
      "Xử lý nhanh gọn",
    ],
    correctAnswer: 1,
    explanation: "Các đại án được xử lý công khai, nghiêm minh, không ngoại lệ cả cán bộ cấp cao.",
  },
  {
    id: 25,
    question: "Ý nghĩa của việc xử lý cán bộ cấp cao tham nhũng?",
    options: [
      "Để gây sốc",
      "Thể hiện quyết tâm 'không vùng cấm, không ngoại lệ'",
      "Để trả thù chính trị",
      "Để làm gương",
    ],
    correctAnswer: 1,
    explanation: "Việc xử lý cán bộ cấp cao thể hiện quyết tâm 'không có vùng cấm, không có ngoại lệ'.",
  },
  {
    id: 26,
    question: "Công nghệ thông tin giúp chống tham nhũng như thế nào?",
    options: ["Tăng tốc độ làm việc", "Giảm chi phí", "Tăng minh bạch, giảm tiếp xúc trực tiếp", "Hiện đại hóa"],
    correctAnswer: 2,
    explanation: "Công nghệ thông tin giúp tăng minh bạch và giảm tiếp xúc trực tiếp, hạn chế tham nhũng.",
  },
  {
    id: 27,
    question: "Điều gì chứng minh Đảng đang trưởng thành?",
    options: [
      "Thời gian tồn tại lâu",
      "Số lượng đảng viên tăng",
      "Dám đối mặt, sửa chữa khuyết tật của mình",
      "Uy tín quốc tế cao",
    ],
    correctAnswer: 2,
    explanation: "Đảng trưởng thành khi dám đối mặt và sửa chữa các khuyết tật của mình.",
  },
  {
    id: 28,
    question: "Kê khai tài sản của cán bộ có tác dụng gì?",
    options: [
      "Chỉ mang tính hình thức",
      "Tăng cường minh bạch và phát hiện dấu hiệu bất thường",
      "Để thống kê",
      "Để so sánh",
    ],
    correctAnswer: 1,
    explanation: "Kê khai tài sản giúp tăng cường minh bạch và phát hiện các dấu hiệu bất thường.",
  },
  {
    id: 29,
    question: "Vai trò của báo chí trong chống tham nhũng?",
    options: ["Không có vai trò", "Vai trò giám sát xã hội, phản ánh thực tế", "Chỉ tuyên truyền", "Vai trò thứ yếu"],
    correctAnswer: 1,
    explanation: "Báo chí có vai trò giám sát xã hội và phản ánh thực tế các vụ tham nhũng.",
  },
  {
    id: 30,
    question: "Tham nhũng ảnh hưởng như thế nào đến phát triển kinh tế?",
    options: ["Không ảnh hưởng", "Ảnh hưởng tích cực", "Làm giảm hiệu quả, méo mó thị trường", "Chỉ ảnh hưởng nhỏ"],
    correctAnswer: 2,
    explanation: "Tham nhũng làm giảm hiệu quả kinh tế và méo mó cơ chế thị trường.",
  },
  {
    id: 31,
    question: "Nguyên tắc xử lý tham nhũng của Việt Nam hiện nay?",
    options: [
      "Xử lý nhẹ nhàng",
      "Xử lý theo quan hệ",
      "Xử lý nghiêm minh, đúng người, đúng tội",
      "Xử lý tùy trường hợp",
    ],
    correctAnswer: 2,
    explanation: "Nguyên tắc là xử lý nghiêm minh, đúng người, đúng tội, không có vùng cấm.",
  },
  {
    id: 32,
    question: "Thể chế chống tham nhũng cần có đặc điểm gì?",
    options: ["Phức tạp", "Đầy đủ, đồng bộ, minh bạch", "Đơn giản", "Linh hoạt"],
    correctAnswer: 1,
    explanation: "Thể chế cần đầy đủ, đồng bộ và minh bạch để ngăn chặn tham nhũng hiệu quả.",
  },
  {
    id: 33,
    question: "Sự khác biệt trong cách chống tham nhũng hiện nay so với trước?",
    options: [
      "Không có khác biệt",
      "Chỉ tăng số lượng vụ án",
      "Quyết tâm mạnh mẽ hơn, xử lý cả cấp cao",
      "Giảm hình phạt",
    ],
    correctAnswer: 2,
    explanation: "Hiện nay có quyết tâm mạnh mẽ hơn và xử lý không ngoại lệ cả cán bộ cấp cao.",
  },
  {
    id: 34,
    question: "Tại sao cần hoàn thiện pháp luật về chống tham nhũng?",
    options: ["Để bắt kịp quốc tế", "Để tạo cơ sở pháp lý vững chắc", "Để tăng số luật", "Để phức tạp hóa"],
    correctAnswer: 1,
    explanation: "Hoàn thiện pháp luật tạo cơ sở pháp lý vững chắc cho công tác chống tham nhũng.",
  },
  {
    id: 35,
    question: "Vai trò của thanh tra trong chống tham nhũng?",
    options: [
      "Không quan trọng",
      "Phát hiện, xử lý vi phạm trong hoạt động hành chính",
      "Chỉ mang tính hình thức",
      "Vai trò hạn chế",
    ],
    correctAnswer: 1,
    explanation: "Thanh tra có vai trò quan trọng trong phát hiện và xử lý các vi phạm trong hoạt động hành chính.",
  },
  {
    id: 36,
    question: "Giáo dục đạo đức trong Đảng có ý nghĩa gì?",
    options: [
      "Không quan trọng",
      "Xây dựng ý thức, phòng ngừa tham nhũng từ gốc rễ",
      "Chỉ là hình thức",
      "Lãng phí thời gian",
    ],
    correctAnswer: 1,
    explanation: "Giáo dục đạo đức giúp xây dựng ý thức và phòng ngừa tham nhũng từ gốc rễ.",
  },
  {
    id: 37,
    question: "Tại sao xử lý tham nhũng phải công khai?",
    options: ["Để gây chú ý", "Để răn đe, tạo niềm tin xã hội", "Để làm gương", "Theo yêu cầu pháp luật"],
    correctAnswer: 1,
    explanation: "Công khai xử lý giúp răn đe và tạo niềm tin của xã hội vào nỗ lực chống tham nhũng.",
  },
  {
    id: 38,
    question: "Quan điểm của Đảng về nguồn gốc tham nhũng?",
    options: [
      "Do Đảng sinh ra",
      "Do con người xấu",
      "Là khuyết tật của quyền lực thiếu kiểm soát",
      "Do xã hội kém phát triển",
    ],
    correctAnswer: 2,
    explanation: "Tham nhũng là khuyết tật của quyền lực khi thiếu minh bạch và kiểm soát.",
  },
  {
    id: 39,
    question: "Ý nghĩa của việc thu hồi tài sản tham nhũng?",
    options: ["Tăng ngân sách nhà nước", "Bồi thường thiệt hại, răn đe tham nhũng", "Để thống kê", "Không có ý nghĩa"],
    correctAnswer: 1,
    explanation: "Thu hồi tài sản giúp bồi thường thiệt hại và có tác dụng răn đe.",
  },
  {
    id: 40,
    question: "Tại sao chống tham nhũng là nhiệm vụ lâu dài?",
    options: [
      "Vì khó xử lý",
      "Vì cần thời gian hoàn thiện thể chế và ý thức",
      "Vì thiếu quyết tâm",
      "Vì thiếu nguồn lực",
    ],
    correctAnswer: 1,
    explanation: "Chống tham nhũng cần thời gian để hoàn thiện thể chế và nâng cao ý thức.",
  },
  {
    id: 41,
    question: "Vai trò của Ủy ban Kiểm tra các cấp?",
    options: [
      "Không quan trọng",
      "Kiểm tra, giám sát đảng viên và tổ chức Đảng",
      "Chỉ xử lý vi phạm nhỏ",
      "Vai trò hạn chế",
    ],
    correctAnswer: 1,
    explanation: "Ủy ban Kiểm tra có vai trò quan trọng trong kiểm tra, giám sát đảng viên và tổ chức Đảng.",
  },
  {
    id: 42,
    question: "Tham nhũng ảnh hưởng đến niềm tin nhân dân như thế nào?",
    options: [
      "Không ảnh hưởng",
      "Làm giảm nghiêm trọng niềm tin vào Đảng và Nhà nước",
      "Ảnh hưởng nhỏ",
      "Chỉ ảnh hưởng tạm thời",
    ],
    correctAnswer: 1,
    explanation: "Tham nhũng làm giảm nghiêm trọng niềm tin của nhân dân vào Đảng và Nhà nước.",
  },
  {
    id: 43,
    question: "Nguyên tắc 'dân biết, dân bàn, dân làm, dân kiểm tra' có ý nghĩa gì?",
    options: [
      "Chỉ là khẩu hiệu",
      "Tăng cường dân chủ, minh bạch, chống tham nhũng",
      "Không thực tế",
      "Hạn chế quyền lực",
    ],
    correctAnswer: 1,
    explanation: "Nguyên tắc này giúp tăng cường dân chủ, minh bạch và chống tham nhũng hiệu quả.",
  },
  {
    id: 44,
    question: "Tại sao cần xây dựng văn hóa liêm chính?",
    options: ["Để đẹp", "Để tạo môi trường trong sạch, phòng ngừa tham nhũng", "Theo xu hướng", "Không cần thiết"],
    correctAnswer: 1,
    explanation: "Văn hóa liêm chính tạo môi trường trong sạch và phòng ngừa tham nhũng từ ý thức.",
  },
  {
    id: 45,
    question: "Hậu quả của tham nhũng đối với xã hội?",
    options: [
      "Không có hậu quả",
      "Chỉ ảnh hưởng kinh tế",
      "Gây bất bình đẳng, méo mó công lý, giảm niềm tin",
      "Chỉ ảnh hưởng chính trị",
    ],
    correctAnswer: 2,
    explanation: "Tham nhũng gây bất bình đẳng, méo mó công lý và làm giảm niềm tin xã hội.",
  },
  {
    id: 46,
    question: "Tại sao Đảng phải tự kiểm tra, tự chỉnh đốn?",
    options: ["Vì bị ép buộc", "Để giữ vững vai trò lãnh đạo và niềm tin nhân dân", "Để làm màu", "Không cần thiết"],
    correctAnswer: 1,
    explanation: "Tự kiểm tra, tự chỉnh đốn giúp Đảng giữ vững vai trò lãnh đạo và niềm tin của nhân dân.",
  },
  {
    id: 47,
    question: "Ý nghĩa của việc xử lý nghiêm cả người thân của cán bộ tham nhũng?",
    options: ["Để trả thù", "Thể hiện công bằng, không có vùng cấm", "Để làm gương", "Không cần thiết"],
    correctAnswer: 1,
    explanation: "Xử lý cả người thân thể hiện sự công bằng và nguyên tắc không có vùng cấm.",
  },
  {
    id: 48,
    question: "Vai trò của cải cách hành chính trong chống tham nhũng?",
    options: [
      "Không liên quan",
      "Giảm phiền hà, tăng minh bạch, hạn chế cơ hội tham nhũng",
      "Chỉ giảm thủ tục",
      "Không quan trọng",
    ],
    correctAnswer: 1,
    explanation: "Cải cách hành chính giảm phiền hà, tăng minh bạch và hạn chế cơ hội tham nhũng.",
  },
  {
    id: 49,
    question: "Thành tựu chống tham nhũng Việt Nam được quốc tế đánh giá như thế nào?",
    options: ["Không được công nhận", "Được ghi nhận nỗ lực và quyết tâm", "Bị chỉ trích", "Không được quan tâm"],
    correctAnswer: 1,
    explanation: "Nỗ lực chống tham nhũng của Việt Nam được quốc tế ghi nhận và đánh giá tích cực.",
  },
  {
    id: 50,
    question: "Bài học quan trọng nhất từ công cuộc chống tham nhũng?",
    options: [
      "Cần tăng hình phạt",
      "Cần quyết tâm chính trị và hoàn thiện thể chế",
      "Cần nhiều tiền",
      "Cần áp lực quốc tế",
    ],
    correctAnswer: 1,
    explanation: "Bài học quan trọng nhất là cần có quyết tâm chính trị mạnh mẽ và hoàn thiện hệ thống thể chế.",
  },
]

export default function QuizPage() {
  const [scrolled, setScrolled] = useState(false)
  const [quizStarted, setQuizStarted] = useState(false)
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>([])
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const startQuiz = () => {
    // Randomly select 10 questions from the bank of 50
    const shuffled = [...questionBank].sort(() => Math.random() - 0.5)
    const selected = shuffled.slice(0, 10)
    setCurrentQuestions(selected)
    setSelectedAnswers(new Array(10).fill(null))
    setCurrentQuestionIndex(0)
    setQuizStarted(true)
    setShowResults(false)
    setScore(0)
  }

  const selectAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestionIndex] = answerIndex
    setSelectedAnswers(newAnswers)
  }

  const nextQuestion = () => {
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const submitQuiz = () => {
    let correctCount = 0
    currentQuestions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctCount++
      }
    })
    setScore(correctCount)
    setShowResults(true)
  }

  const currentQuestion = currentQuestions[currentQuestionIndex]
  const allAnswered = selectedAnswers.every((answer) => answer !== null)

  return (
    <div className="min-h-screen bg-black text-white">
      <Header scrolled={scrolled} />

      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {!quizStarted ? (
            // Start screen
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl font-bold text-red-500 glow-red">KIỂM TRA KIẾN THỨC</h1>
                <p className="text-xl text-gray-300">Cuộc chiến chống tham nhũng tại Việt Nam</p>
              </div>

              <div className="bg-card border border-red-500/30 rounded-lg p-8 space-y-6">
                <div className="space-y-4 text-left">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-500 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-red-500">10 câu hỏi ngẫu nhiên</h3>
                      <p className="text-gray-400">
                        Mỗi lần làm quiz sẽ có 10 câu hỏi được chọn ngẫu nhiên từ bộ 50 câu hỏi
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-500 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-red-500">Chọn đáp án đúng</h3>
                      <p className="text-gray-400">Mỗi câu hỏi có 4 lựa chọn, chỉ có 1 đáp án đúng</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-500 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-red-500">Xem kết quả và giải thích</h3>
                      <p className="text-gray-400">
                        Sau khi hoàn thành, bạn sẽ thấy điểm số và giải thích cho từng câu
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={startQuiz}
                  className="w-full sm:w-auto px-8 py-4 btn-red-gradient text-white font-bold rounded-lg text-lg hover:scale-105 transition-transform"
                >
                  BẮT ĐẦU QUIZ
                </button>
              </div>
            </div>
          ) : !showResults ? (
            // Quiz in progress
            <div className="space-y-8">
              {/* Progress bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-400">
                  <span>
                    Câu {currentQuestionIndex + 1} / {currentQuestions.length}
                  </span>
                  <span>
                    {selectedAnswers.filter((a) => a !== null).length} / {currentQuestions.length} đã trả lời
                  </span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div
                    className="bg-red-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestionIndex + 1) / currentQuestions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="bg-card border border-red-500/30 rounded-lg p-6 sm:p-8 space-y-6">
                <h2 className="text-2xl font-bold text-red-500">{currentQuestion.question}</h2>

                <div className="space-y-3">
                  {currentQuestion.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => selectAnswer(index)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        selectedAnswers[currentQuestionIndex] === index
                          ? "border-red-500 bg-red-500/10"
                          : "border-gray-700 hover:border-red-500/50 bg-gray-900/50"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex-shrink-0 mt-0.5 flex items-center justify-center ${
                            selectedAnswers[currentQuestionIndex] === index
                              ? "border-red-500 bg-red-500"
                              : "border-gray-600"
                          }`}
                        >
                          {selectedAnswers[currentQuestionIndex] === index && (
                            <div className="w-3 h-3 rounded-full bg-white" />
                          )}
                        </div>
                        <span className="text-gray-300">{option}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex flex-col sm:flex-row gap-4 justify-between">
                <button
                  onClick={previousQuestion}
                  disabled={currentQuestionIndex === 0}
                  className="px-6 py-3 border border-red-500 text-red-500 rounded-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-500/10 transition-colors"
                >
                  Câu trước
                </button>

                {currentQuestionIndex === currentQuestions.length - 1 ? (
                  <button
                    onClick={submitQuiz}
                    disabled={!allAnswered}
                    className="px-6 py-3 btn-red-gradient text-white font-bold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {allAnswered
                      ? "NỘP BÀI"
                      : `Còn ${currentQuestions.length - selectedAnswers.filter((a) => a !== null).length} câu chưa trả lời`}
                  </button>
                ) : (
                  <button
                    onClick={nextQuestion}
                    className="px-6 py-3 btn-red-gradient text-white font-bold rounded-lg hover:scale-105 transition-transform"
                  >
                    Câu tiếp theo
                  </button>
                )}
              </div>
            </div>
          ) : (
            // Results screen
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold text-red-500 glow-red">KẾT QUẢ QUIZ</h1>
                <div className="inline-block bg-card border border-red-500/30 rounded-lg p-8">
                  <p className="text-6xl font-bold text-red-500">
                    {score} / {currentQuestions.length}
                  </p>
                  <p className="text-xl text-gray-300 mt-2">
                    {score >= 9 ? "Xuất sắc!" : score >= 7 ? "Tốt!" : score >= 5 ? "Khá!" : "Cần cố gắng thêm!"}
                  </p>
                </div>
              </div>

              {/* Review answers */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-red-500">Chi tiết câu trả lời:</h2>
                {currentQuestions.map((question, qIndex) => {
                  const isCorrect = selectedAnswers[qIndex] === question.correctAnswer
                  return (
                    <div key={qIndex} className="bg-card border border-red-500/30 rounded-lg p-6 space-y-4">
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                            isCorrect ? "bg-green-500/20 text-green-500" : "bg-red-500/20 text-red-500"
                          }`}
                        >
                          {isCorrect ? "✓" : "✗"}
                        </div>
                        <div className="flex-1 space-y-3">
                          <h3 className="font-bold text-lg">
                            Câu {qIndex + 1}: {question.question}
                          </h3>
                          <div className="space-y-2">
                            <p className="text-gray-400">
                              <span className="font-semibold text-red-500">Bạn chọn:</span>{" "}
                              {question.options[selectedAnswers[qIndex]!]}
                            </p>
                            {!isCorrect && (
                              <p className="text-gray-400">
                                <span className="font-semibold text-green-500">Đáp án đúng:</span>{" "}
                                {question.options[question.correctAnswer]}
                              </p>
                            )}
                            {question.explanation && (
                              <p className="text-gray-300 bg-gray-900/50 p-3 rounded">
                                <span className="font-semibold">Giải thích:</span> {question.explanation}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Restart button */}
              <div className="text-center">
                <button
                  onClick={startQuiz}
                  className="px-8 py-4 btn-red-gradient text-white font-bold rounded-lg text-lg hover:scale-105 transition-transform"
                >
                  LÀM LẠI QUIZ
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
