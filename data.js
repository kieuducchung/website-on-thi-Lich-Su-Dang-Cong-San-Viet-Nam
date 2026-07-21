/*
  DỮ LIỆU WEBSITE
  Có thể thay đổi nội dung bằng cách chỉnh ba mảng:
  - questions
  - shortAnswer
  - essayQuestions
*/

const questions = [
  {
    id: 1,
    question: "Nhiệm vụ của khoa học Lịch sử Đảng Cộng sản Việt Nam.",
    options: {
      A: "Trình bày có hệ thống Cương lĩnh, đường lối của Đảng",
      B: "Tái hiện tiến trình lịch sử lãnh đạo, đấu tranh của Đảng",
      C: "Tổng kết lịch sử của Đảng",
      D: "Tất cả các phương án đều đúng"
    },
    answer: "D"
  },
  {
    id: 2,
    question: "Phương pháp nghiên cứu môn Lịch sử Đảng Cộng sản Việt Nam gồm những phương pháp nào?",
    options: {
      A: "Phương pháp lịch sử; phương pháp logic",
      B: "Phương pháp lịch sử; phương pháp logic; phương pháp tổng kết thực tiễn lịch sử",
      C: "Phương pháp lịch sử; phương pháp logic; phương pháp tổng kết thực tiễn lịch sử; phương pháp so sánh",
      D: "Phương pháp logic; phương pháp tổng kết thực tiễn lịch sử; phương pháp so sánh"
    },
    answer: "C"
  },
  {
    id: 3,
    question: "Chức năng của khoa học Lịch sử Đảng Cộng sản Việt Nam.",
    options: {
      A: "Chức năng nhận thức; chức năng giáo dục; chức năng dự báo và phê phán",
      B: "Chức năng nhận thức; chức năng giáo dục",
      C: "Chức năng giáo dục; chức năng dự báo và phê phán",
      D: "Chức năng nhận thức; chức năng dự báo và phê phán"
    },
    answer: "A"
  },
  {
    id: 4,
    question: "Năm 1929 ở Việt Nam đã xuất hiện các tổ chức cộng sản nào?",
    options: {
      A: "Đông Dương Cộng sản Đảng",
      B: "An Nam Cộng sản Đảng",
      C: "Đông Dương Cộng sản Liên đoàn",
      D: "Tất cả các phương án đều đúng"
    },
    answer: "D"
  },
  {
    id: 5,
    question: "Hội nghị thành lập Đảng năm 1930 do ai chủ trì?",
    options: {
      A: "Nguyễn Đức Cảnh",
      B: "Trịnh Đình Cửu",
      C: "Nguyễn Ái Quốc",
      D: "Trần Phú"
    },
    answer: "C"
  },
  {
    id: 6,
    question: "Đảng Cộng sản Việt Nam thành lập ngày, tháng, năm nào?",
    options: {
      A: "Ngày 03 tháng 2 năm 1930",
      B: "Ngày 06 tháng 2 năm 1930",
      C: "Ngày 24 tháng 2 năm 1930",
      D: "Ngày 07 tháng 3 năm 1930"
    },
    answer: "A"
  },
  {
    id: 7,
    question: "Cương lĩnh chính trị đầu tiên của Đảng do Nguyễn Ái Quốc soạn thảo xác định phương hướng chiến lược của cách mạng Việt Nam là gì?",
    options: {
      A: "Tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản",
      B: "Tư sản dân quyền cách mạng và thổ địa cách mạng",
      C: "Thổ địa cách mạng",
      D: "Tư sản dân quyền"
    },
    answer: "A"
  },
  {
    id: 8,
    question: "Ai là Tổng Bí thư đầu tiên của Đảng Cộng sản Việt Nam?",
    options: {
      A: "Trịnh Đình Cửu",
      B: "Trần Phú",
      C: "Lê Hồng Phong",
      D: "Hà Huy Tập"
    },
    answer: "B"
  },
  {
    id: 9,
    question: "Khi nào phong trào công nhân Việt Nam hoàn toàn trở thành một phong trào tự giác?",
    options: {
      A: "Năm 1920 (tổ chức Công hội ở Sài Gòn được thành lập)",
      B: "Năm 1925 (cuộc bãi công Ba Son)",
      C: "Năm 1929 (sự ra đời ba tổ chức cộng sản)",
      D: "Năm 1930 (Đảng Cộng sản Việt Nam ra đời)"
    },
    answer: "D"
  },
  {
    id: 10,
    question: "Luận cương chính trị tháng 10 năm 1930 do ai soạn thảo?",
    options: {
      A: "Trần Phú",
      B: "Nguyễn Ái Quốc",
      C: "Trịnh Đình Cửu",
      D: "Nguyễn Đức Cảnh"
    },
    answer: "A"
  },
  {
    id: 11,
    question: "Vai trò lãnh đạo của Đảng Cộng sản Đông Dương trong Luận cương chính trị tháng 10 năm 1930 được xác định như thế nào?",
    options: {
      A: "Sự lãnh đạo của Đảng là điều kiện cốt yếu cho thắng lợi của cách mạng Việt Nam",
      B: "Làm cách mạng tư sản dân quyền và thổ địa cách mạng",
      C: "Đoàn kết rộng rãi các tầng lớp nhân dân chống thực dân, phong kiến",
      D: "Đánh đuổi thực dân Pháp xâm lược"
    },
    answer: "A"
  },
  {
    id: 12,
    question: "Tháng 6 năm 1932, Chương trình hành động của Đảng Cộng sản Đông Dương được công bố, gồm những nội dung nào?",
    options: {
      A: "Đòi các quyền tự do tổ chức, xuất bản, ngôn luận, đi lại. Bỏ những luật hình đặc biệt đối với người bản xứ, trả tự do cho tù chính trị, bỏ ngay chính sách đàn áp, giải tán hội đồng đề hình",
      B: "Bỏ thuế thân, thuế ngụ cư và các thứ thuế vô lý khác",
      C: "Bỏ các độc quyền về rượu, muối và thuốc phiện",
      D: "Tất cả các phương án đều đúng"
    },
    answer: "D"
  },
  {
    id: 13,
    question: "Ngày 16 tháng 8 năm 1945, Quốc dân Đại hội họp tại Tân Trào quyết định những vấn đề gì?",
    options: {
      A: "Tán thành chủ trương Tổng khởi nghĩa của Đảng và Mười chính sách của Việt Minh",
      B: "Quyết định đặt tên nước là Việt Nam Dân chủ Cộng hòa, xác định quốc kỳ, quốc ca",
      C: "Thành lập Ủy ban Dân tộc giải phóng Việt Nam (Chính phủ lâm thời) do Hồ Chí Minh làm Chủ tịch",
      D: "Tất cả các phương án đều đúng"
    },
    answer: "D"
  },
  {
    id: 14,
    question: "Ngày 16 tháng 8 năm 1945, Quốc dân Đại hội họp tại Tân Trào quyết định thành lập Ủy ban Dân tộc giải phóng do ai làm Chủ tịch?",
    options: {
      A: "Hồ Chí Minh",
      B: "Phạm Văn Đồng",
      C: "Võ Nguyên Giáp",
      D: "Trường Chinh"
    },
    answer: "A"
  },
  {
    id: 15,
    question: "Việt Nam Tuyên truyền Giải phóng quân được thành lập ngày, tháng, năm nào?",
    options: {
      A: "Ngày 19 tháng 12 năm 1944",
      B: "Ngày 20 tháng 12 năm 1944",
      C: "Ngày 21 tháng 12 năm 1944",
      D: "Ngày 22 tháng 12 năm 1944"
    },
    answer: "D"
  },
  {
    id: 16,
    question: "Ngày 25 tháng 11 năm 1945, Ban Chấp hành Trung ương Đảng ra Chỉ thị “Kháng chiến, kiến quốc” xác định ai là kẻ thù chính của cách mạng Việt Nam?",
    options: {
      A: "Phát xít Nhật",
      B: "Quân đội Tưởng Giới Thạch",
      C: "Thực dân Pháp xâm lược",
      D: "Thực dân Anh"
    },
    answer: "C"
  },
  {
    id: 17,
    question: "Lời kêu gọi Toàn quốc kháng chiến của Chủ tịch Hồ Chí Minh viết vào ngày, tháng, năm nào?",
    options: {
      A: "Ngày 18 tháng 12 năm 1946",
      B: "Ngày 19 tháng 12 năm 1946",
      C: "Ngày 20 tháng 12 năm 1946",
      D: "Ngày 21 tháng 12 năm 1946"
    },
    answer: "B"
  },
  {
    id: 18,
    question: "Đường lối kháng chiến (1945-1954) được hoàn chỉnh và thể hiện tập trung trong những văn kiện nào?",
    options: {
      A: "Toàn dân kháng chiến của Trung ương Đảng (12/12/1946)",
      B: "Lời kêu gọi toàn quốc kháng chiến (19/12/1946) của Chủ tịch Hồ Chí Minh",
      C: "Kháng chiến nhất định thắng lợi (1947) của đồng chí Trường Chinh",
      D: "Tất cả các phương án đều đúng"
    },
    answer: "D"
  },
  {
    id: 19,
    question: "Ngày 3-9-1945, Chính phủ lâm thời họp phiên đầu tiên dưới sự chủ trì của Chủ tịch Hồ Chí Minh đã xác định ngay những nhiệm vụ lớn trước mắt, gồm những nhiệm vụ nào?",
    options: {
      A: "Diệt giặc đói",
      B: "Diệt giặc dốt",
      C: "Diệt giặc ngoại xâm",
      D: "Tất cả các phương án đều đúng"
    },
    answer: "D"
  },
  {
    id: 20,
    question: "Quốc hội khóa I họp phiên đầu tiên tại Nhà hát Lớn Hà Nội vào ngày 2-3-1946, đã nhất trí bầu Ban Thường trực Quốc hội do ai làm Chủ tịch?",
    options: {
      A: "Trường Chinh",
      B: "Phạm Văn Đồng",
      C: "Huỳnh Thúc Kháng",
      D: "Nguyễn Văn Tố"
    },
    answer: "D"
  },
  {
    id: 21,
    question: "Trong cuộc kháng chiến chống Pháp và can thiệp Mỹ, Đảng ta đã chủ trương xây dựng và phát triển lực lượng vũ trang nhằm đáp ứng kịp thời yêu cầu của nhiệm vụ chính trị - quân sự của cuộc kháng chiến, gồm những lực lượng nào?",
    options: {
      A: "Bộ đội chủ lực",
      B: "Bộ đội địa phương",
      C: "Dân quân du kích",
      D: "Tất cả các phương án đều đúng"
    },
    answer: "D"
  },
  {
    id: 22,
    question: "Sau khi miền Bắc được giải phóng, tháng 9/1954 Bộ Chính trị đề ra nhiệm vụ chủ yếu trước mắt của miền Bắc là gì?",
    options: {
      A: "Hàn gắn vết thương chiến tranh, phục hồi kinh tế quốc dân",
      B: "Giảm tô, giảm tức và cải cách ruộng đất",
      C: "Đưa miền Bắc tiến lên chủ nghĩa xã hội",
      D: "Xây dựng nền văn hóa mới, con người mới"
    },
    answer: "A"
  },
  {
    id: 23,
    question: "Nghị quyết Bộ Chính trị tháng 9-1954 nêu rõ nhiệm vụ cụ thể trước mắt của cách mạng miền Nam là gì?",
    options: {
      A: "Đấu tranh đòi thi hành Hiệp định",
      B: "Chuyển hướng công tác cho phù hợp điều kiện mới",
      C: "Tập hợp mọi lực lượng dân tộc, dân chủ, hòa bình, thống nhất, độc lập, đấu tranh",
      D: "Tất cả các phương án đều đúng"
    },
    answer: "D"
  },
  {
    id: 24,
    question: "Từ thắng lợi của phong trào Đồng khởi, ngày 20/12/1960, tại xã Tân Lập (Tây Ninh), Mặt trận Dân tộc giải phóng miền Nam Việt Nam được thành lập, do ai làm Chủ tịch?",
    options: {
      A: "Nguyễn Thị Bình",
      B: "Nguyễn Thị Định",
      C: "Huỳnh Tấn Phát",
      D: "Nguyễn Hữu Thọ"
    },
    answer: "D"
  },
  {
    id: 25,
    question: "Đại hội đại biểu toàn quốc lần thứ III của Đảng họp tại Thủ đô Hà Nội vào tháng, năm nào?",
    options: {
      A: "Tháng 8 năm 1960",
      B: "Tháng 9 năm 1960",
      C: "Tháng 10 năm 1960",
      D: "Tháng 11 năm 1960"
    },
    answer: "B"
  },
  {
    id: 26,
    question: "Trận “Điện Biên Phủ trên không”, đánh bại hoàn toàn cuộc tập kích chiến lược bằng máy bay B-52 của Mỹ vào Hà Nội và Hải Phòng, diễn ra trong thời gian nào?",
    options: {
      A: "Từ ngày 18 đến ngày 30 tháng 12 năm 1972",
      B: "Từ ngày 18 đến ngày 24 tháng 12 năm 1972",
      C: "Từ ngày 18 đến ngày 26 tháng 12 năm 1972",
      D: "Từ ngày 18 đến ngày 28 tháng 12 năm 1972"
    },
    answer: "A"
  },
  {
    id: 27,
    question: "Cuộc đấu tranh ngoại giao trên bàn Hội nghị Paris với việc ký kết “Hiệp định về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam” kết thúc vào ngày, tháng, năm nào?",
    options: {
      A: "Ngày 27 tháng 1 năm 1973",
      B: "Ngày 28 tháng 1 năm 1973",
      C: "Ngày 29 tháng 1 năm 1973",
      D: "Ngày 30 tháng 1 năm 1973"
    },
    answer: "A"
  },
  {
    id: 28,
    question: "Cuộc Tổng tiến công và nổi dậy mùa Xuân 1975 bắt đầu bằng chiến dịch nào?",
    options: {
      A: "Chiến dịch giải phóng Phước Long",
      B: "Chiến dịch tiến công giải phóng thành phố Đà Nẵng",
      C: "Chiến dịch Tây Nguyên",
      D: "Chiến dịch tiến công giải phóng Huế"
    },
    answer: "C"
  },
  {
    id: 29,
    question: "Chiến dịch Hồ Chí Minh giải phóng Sài Gòn - Gia Định bắt đầu vào ngày, tháng, năm nào?",
    options: {
      A: "Ngày 25 tháng 4 năm 1975",
      B: "Ngày 26 tháng 4 năm 1975",
      C: "Ngày 27 tháng 4 năm 1975",
      D: "Ngày 28 tháng 4 năm 1975"
    },
    answer: "B"
  },
  {
    id: 30,
    question: "Cuộc Tổng tiến công và nổi dậy Xuân 1975 toàn thắng, kết thúc vào ngày, tháng, năm nào?",
    options: {
      A: "Ngày 27 tháng 4 năm 1975",
      B: "Ngày 28 tháng 4 năm 1975",
      C: "Ngày 29 tháng 4 năm 1975",
      D: "Ngày 30 tháng 4 năm 1975"
    },
    answer: "D"
  },
  {
    id: 31,
    question: "Từ ngày 24 tháng 6 đến ngày 3 tháng 7 năm 1976, kỳ họp thứ nhất của Quốc hội nước Việt Nam thống nhất họp tại Thủ đô Hà Nội đã quyết định những vấn đề gì?",
    options: {
      A: "Đặt tên nước ta là nước Cộng hòa Xã hội chủ nghĩa Việt Nam, Quốc kỳ nền đỏ sao vàng 5 cánh, Thủ đô là Hà Nội, Quốc ca là bài Tiến quân ca, Quốc huy mang dòng chữ Cộng hòa Xã hội chủ nghĩa Việt Nam",
      B: "Thành phố Sài Gòn đổi tên là Thành phố Hồ Chí Minh",
      C: "Quốc hội bầu Tôn Đức Thắng làm Chủ tịch nước; Nguyễn Lương Bằng, Nguyễn Hữu Thọ làm Phó Chủ tịch nước; Trường Chinh làm Chủ tịch Quốc hội và Phạm Văn Đồng làm Thủ tướng Chính phủ nước Cộng hòa Xã hội chủ nghĩa Việt Nam. Quốc hội thành lập Ủy ban dự thảo Hiến pháp mới",
      D: "Tất cả các phương án đều đúng"
    },
    answer: "D"
  },
  {
    id: 32,
    question: "Đại hội lần thứ mấy của Đảng là đại hội toàn thắng của sự nghiệp giải phóng dân tộc, thống nhất Tổ quốc, khẳng định và xác định đường lối đưa cả nước tiến lên chủ nghĩa xã hội?",
    options: {
      A: "Đại hội lần thứ IV",
      B: "Đại hội lần thứ V",
      C: "Đại hội lần thứ VI",
      D: "Đại hội lần thứ VII"
    },
    answer: "A"
  },
  {
    id: 33,
    question: "Đại hội lần thứ mấy của Đảng xác định cách mạng Việt Nam có hai nhiệm vụ chiến lược là: xây dựng thành công chủ nghĩa xã hội và bảo vệ vững chắc Tổ quốc Việt Nam xã hội chủ nghĩa; hai nhiệm vụ chiến lược có quan hệ mật thiết với nhau?",
    options: {
      A: "Đại hội lần thứ IV",
      B: "Đại hội lần thứ V",
      C: "Đại hội lần thứ VI",
      D: "Đại hội lần thứ VII"
    },
    answer: "B"
  },
  {
    id: 34,
    question: "Đại hội nào xác định quan điểm mới nổi bật: cho phép đảng viên làm kinh tế tư nhân, kể cả tư bản tư nhân, nhưng yêu cầu phải tuân thủ Điều lệ Đảng, nghị quyết của Đảng và quy định của pháp luật Nhà nước, đồng thời nêu cao tính tiền phong, gương mẫu của người đảng viên?",
    options: {
      A: "Đại hội lần thứ IX",
      B: "Đại hội lần thứ X",
      C: "Đại hội lần thứ XI",
      D: "Đại hội lần thứ XII"
    },
    answer: "B"
  },
  {
    id: 35,
    question: "Vấn đề trọng tâm trong xây dựng văn hóa được Hội nghị Trung ương 9 (khóa XI) xác định là gì?",
    options: {
      A: "Xây dựng lối sống “Mỗi người vì mọi người, mọi người vì mỗi người”; hình thành lối sống có ý thức tự trọng, tự chủ, sống và làm việc theo Hiến pháp và pháp luật",
      B: "Xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc, thống nhất trong đa dạng của cộng đồng các dân tộc Việt Nam",
      C: "Chăm lo xây dựng con người có nhân cách, lối sống tốt đẹp, với các đặc tính cơ bản: yêu nước, nhân ái, nghĩa tình, trung thực, đoàn kết, cần cù, sáng tạo",
      D: "Giáo dục nghệ thuật, nâng cao năng lực cảm thụ thẩm mỹ cho nhân dân, đặc biệt là thanh, thiếu niên"
    },
    answer: "C"
  },
  {
    id: 36,
    question: "Thế nào là văn hóa tiên tiến theo tinh thần Nghị quyết Hội nghị Trung ương 9 (khóa XI)?",
    options: {
      A: "Văn hóa tiên tiến là yêu nước và tiến bộ, với nội dung cốt lõi là lý tưởng độc lập dân tộc và chủ nghĩa xã hội theo chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh, nhằm mục tiêu tất cả vì con người",
      B: "Là những giá trị văn hóa truyền thống bền vững của cộng đồng các dân tộc Việt Nam được vun đắp qua lịch sử hàng nghìn năm đấu tranh dựng nước và giữ nước",
      C: "Đó là lòng nhân ái, khoan dung, trọng tình nghĩa, đạo lý",
      D: "Là đức tính cần cù, sáng tạo trong lao động"
    },
    answer: "A"
  },
  {
    id: 37,
    question: "Vai trò của đội ngũ trí thức trong xây dựng và phát triển văn hóa hiện nay được Hội nghị Trung ương 9 (khóa XI) xác định là gì?",
    options: {
      A: "Cùng với giai cấp công nhân, nông dân, trí thức có vai trò quan trọng, là nền tảng của sự nghiệp xây dựng và phát triển văn hóa dưới sự lãnh đạo của Đảng, quản lý của Nhà nước",
      B: "Tham gia sự nghiệp xây dựng và phát triển nền văn hóa nước nhà",
      C: "Đi đầu trong xây dựng và phát triển văn hóa, con người Việt Nam",
      D: "Góp phần giáo dục, rèn luyện con người về nhân cách, lối sống"
    },
    answer: "A"
  },
  {
    id: 38,
    question: "Nguyên tắc cơ bản trong thực hiện chính sách đối ngoại của Đảng ta được Hội nghị Trung ương 8 (khóa XI) xác định là gì?",
    options: {
      A: "Nắm vững hai mặt hợp tác và đấu tranh trong quan hệ quốc tế",
      B: "Tôn trọng độc lập, chủ quyền, không can thiệp vào công việc nội bộ của nhau",
      C: "Thúc đẩy hợp tác, cân bằng lợi ích",
      D: "Chủ động và tích cực hội nhập quốc tế; là bạn, là đối tác tin cậy và thành viên có trách nhiệm của cộng đồng quốc tế"
    },
    answer: "A"
  },
  {
    id: 39,
    question: "Trong Chiến lược phát triển kinh tế - xã hội 2011-2020, Đại hội XI nhấn mạnh ba đột phá chiến lược, gồm những chiến lược nào?",
    options: {
      A: "Hoàn thiện thể chế kinh tế thị trường định hướng xã hội chủ nghĩa, trọng tâm là tạo lập môi trường cạnh tranh bình đẳng và cải cách hành chính",
      B: "Phát triển nhanh nguồn nhân lực, nhất là nguồn nhân lực chất lượng cao, tập trung vào việc đổi mới căn bản và toàn diện nền giáo dục quốc dân; gắn kết chặt chẽ phát triển nguồn nhân lực với phát triển và ứng dụng khoa học, công nghệ",
      C: "Xây dựng hệ thống kết cấu hạ tầng đồng bộ, với một số công trình hiện đại, tập trung vào hệ thống giao thông và hạ tầng đô thị lớn",
      D: "Tất cả các phương án đều đúng"
    },
    answer: "D"
  },
  {
    id: 40,
    question: "Theo quan điểm Đại hội XII của Đảng, để tiếp tục đẩy mạnh thực hiện mô hình công nghiệp hóa, hiện đại hóa trong điều kiện phát triển kinh tế thị trường định hướng xã hội chủ nghĩa và hội nhập quốc tế gắn với phát triển kinh tế tri thức, Đảng ta xác định cần lấy những yếu tố nào làm động lực chủ yếu?",
    options: {
      A: "Nguồn nhân lực chất lượng cao",
      B: "Khoa học và công nghệ",
      C: "Khoa học, công nghệ, tri thức và nguồn nhân lực chất lượng cao",
      D: "Nguồn lực về tài chính"
    },
    answer: "C"
  },
  {
    id: 41,
    question: "Mục đích của nền kinh tế thị trường định hướng xã hội chủ nghĩa ở nước ta do Đại hội XII của Đảng xác định là gì?",
    options: {
      A: "Phát triển nền kinh tế với nhiều hình thức sở hữu, nhiều thành phần kinh tế nhằm giải phóng mọi tiềm năng trong mọi thành phần kinh tế",
      B: "Nhằm thực hiện “dân giàu, nước mạnh, dân chủ, công bằng, văn minh”; giải phóng mạnh mẽ lực lượng sản xuất, không ngừng nâng cao đời sống nhân dân",
      C: "Phát huy vai trò làm chủ xã hội của nhân dân, bảo đảm vai trò quản lý, điều tiết nền kinh tế của Nhà nước pháp quyền xã hội chủ nghĩa dưới sự lãnh đạo của Đảng",
      D: "Phát huy vai trò làm chủ xã hội của nhân dân"
    },
    answer: "B"
  },
  {
    id: 42,
    question: "Vai trò của thành phần kinh tế tư nhân trong nền kinh tế thị trường ở nước ta hiện nay do Hội nghị Trung ương 5 (khóa XII) xác định là gì?",
    options: {
      A: "Là một động lực quan trọng của nền kinh tế",
      B: "Điều tiết nền kinh tế, tạo môi trường và điều kiện thúc đẩy các thành phần kinh tế cùng phát triển",
      C: "Giữ vai trò chủ đạo, là lực lượng vật chất quan trọng để Nhà nước định hướng và điều tiết nền kinh tế",
      D: "Là lực lượng vật chất quan trọng để Nhà nước định hướng và điều tiết nền kinh tế, tạo môi trường và điều kiện thúc đẩy các thành phần kinh tế cùng phát triển"
    },
    answer: "A"
  },
  {
    id: 43,
    question: "Chủ trương: “Bảo đảm lợi ích tối cao của quốc gia - dân tộc, trên cơ sở các nguyên tắc cơ bản của luật pháp quốc tế, bình đẳng và cùng có lợi; thực hiện nhất quán đường lối đối ngoại độc lập, tự chủ, hòa bình, hợp tác và phát triển; đa dạng hóa, đa phương hóa trong quan hệ đối ngoại; chủ động và tích cực hội nhập quốc tế; là bạn, là đối tác tin cậy và thành viên có trách nhiệm của cộng đồng quốc tế” được Đại hội nào xác định?",
    options: {
      A: "Đại hội XII",
      B: "Đại hội XI",
      C: "Đại hội X",
      D: "Đại hội IX"
    },
    answer: "A"
  },
  {
    id: 44,
    question: "Cấu trúc hệ thống chính trị ở Việt Nam hiện nay bao gồm những bộ phận nào?",
    options: {
      A: "Đảng Cộng sản Việt Nam",
      B: "Nhà nước",
      C: "Mặt trận Tổ quốc Việt Nam và các đoàn thể chính trị - xã hội",
      D: "Tất cả đều đúng"
    },
    answer: "D"
  },
  {
    id: 45,
    question: "Đại hội XII của Đảng chủ trương triển khai mạnh mẽ định hướng chiến lược chủ động và tích cực hội nhập quốc tế hiện nay, lấy hội nhập lĩnh vực nào là trọng tâm?",
    options: {
      A: "Chính trị",
      B: "Kinh tế",
      C: "Văn hóa, xã hội",
      D: "Quốc phòng, an ninh"
    },
    answer: "B"
  }
];

const shortAnswer = [
  {
    id: 46,
    question: "Đối tượng nghiên cứu của khoa học Lịch sử Đảng Cộng sản Việt Nam.",
    answer: "Sự ra đời, phát triển và hoạt động lãnh đạo của Đảng qua các thời kỳ lịch sử."
  },
  {
    id: 47,
    question: "Thời gian, địa điểm, thành phần dự Hội nghị thành lập Đảng Cộng sản Việt Nam.",
    answer: "Thời gian: Từ ngày 6-1 đến ngày 7-2-1930.\nĐịa điểm: Cửu Long (Hồng Kông).\nThành phần: Hai đại biểu Đông Dương Cộng sản Đảng (Trịnh Đình Cửu và Nguyễn Đức Cảnh), hai đại biểu An Nam Cộng sản Đảng (Châu Văn Liêm và Nguyễn Thiệu), dưới sự chủ trì của Nguyễn Ái Quốc - đại biểu của Quốc tế Cộng sản."
  },
  {
    id: 48,
    question: "Cương lĩnh chính trị đầu tiên xác định nhiệm vụ chủ yếu trước mắt của cách mạng Việt Nam là gì?",
    answer: "Đánh đổ đế quốc chủ nghĩa Pháp và bọn phong kiến; làm cho nước Nam hoàn toàn độc lập."
  },
  {
    id: 49,
    question: "Cương lĩnh chính trị đầu tiên xác định lực lượng cách mạng như thế nào?",
    answer: "Công nhân, nông dân là lực lượng cơ bản, trong đó giai cấp công nhân lãnh đạo; đồng thời chủ trương đoàn kết tất cả các giai cấp, các lực lượng tiến bộ, yêu nước, tập trung chống đế quốc và tay sai."
  },
  {
    id: 50,
    question: "Quy luật ra đời của Đảng Cộng sản Việt Nam.",
    answer: "Kết hợp ba yếu tố: chủ nghĩa Mác - Lênin, phong trào công nhân và phong trào yêu nước."
  },
  {
    id: 51,
    question: "Vai trò lãnh đạo của Đảng Cộng sản Đông Dương trong Luận cương chính trị tháng 10 năm 1930.",
    answer: "Sự lãnh đạo của Đảng là điều kiện cốt yếu cho thắng lợi của cách mạng."
  },
  {
    id: 52,
    question: "Trong nội dung chuyển hướng chỉ đạo chiến lược của Đảng (1939-1945), nhiệm vụ trung tâm của Đảng và nhân dân ta trong giai đoạn hiện tại là gì?",
    answer: "Chuẩn bị khởi nghĩa vũ trang."
  },
  {
    id: 53,
    question: "Ý nghĩa chủ trương chuyển hướng chiến lược của Đảng ta giai đoạn 1939-1945.",
    answer: "Là ngọn cờ dẫn đường cho nhân dân ta tiến lên giành thắng lợi trong sự nghiệp đánh Pháp, đuổi Nhật, giành độc lập cho dân tộc và tự do cho nhân dân."
  },
  {
    id: 54,
    question: "Năm 1943, trong bản Đề cương văn hóa Việt Nam của đồng chí Trường Chinh có đề ra những nguyên tắc xây dựng nền văn hóa mới Việt Nam. Đó là những nguyên tắc nào?",
    answer: "Dân tộc hóa; khoa học hóa; đại chúng hóa."
  },
  {
    id: 55,
    question: "Ý nghĩa Tuyên ngôn Độc lập ngày 2-9-1945 do Hồ Chí Minh đọc tại Quảng trường Ba Đình, Hà Nội.",
    answer: "Đó là thiên anh hùng ca chiến đấu và chiến thắng, chứa chan sức mạnh và niềm tin, tràn đầy lòng tự hào và ý chí đấu tranh của nhân dân Việt Nam trong sự nghiệp giành và giữ nền độc lập, tự do."
  },
  {
    id: 56,
    question: "Ngày 3-9-1945, trong phiên họp đầu tiên của Hội đồng Chính phủ, Hồ Chí Minh đề nghị nhiệm vụ đầu tiên về xây dựng văn hóa của nước Việt Nam độc lập là những nhiệm vụ nào?",
    answer: "Chống nạn mù chữ và giáo dục lại tinh thần nhân dân."
  },
  {
    id: 57,
    question: "Ngày 25-11-1945, Ban Chấp hành Trung ương Đảng ra Chỉ thị “Kháng chiến, kiến quốc” đã nêu bốn nhiệm vụ chủ yếu và cấp bách, gồm những nhiệm vụ nào?",
    answer: "Củng cố chính quyền cách mạng; chống thực dân Pháp xâm lược; bài trừ nội phản; cải thiện đời sống nhân dân."
  },
  {
    id: 58,
    question: "Thời gian, địa điểm Đại hội đại biểu toàn quốc lần thứ II.",
    answer: "Thời gian: Từ ngày 11 đến ngày 19-2-1951.\nĐịa điểm: Xã Vinh Quang, huyện Chiêm Hóa, tỉnh Tuyên Quang."
  },
  {
    id: 59,
    question: "Thế nào là kháng chiến toàn dân?",
    answer: "Là đem toàn bộ sức dân, lực dân, tài dân, động viên toàn dân tích cực tham gia kháng chiến."
  },
  {
    id: 60,
    question: "Hội nghị Giơnevơ (Thụy Sĩ) năm 1954 kết thúc thắng lợi có ý nghĩa gì đối với cách mạng Việt Nam?",
    answer: "Mở ra một trang sử mới cho dân tộc Việt Nam, mở đường cho cuộc đấu tranh giành độc lập, thống nhất hoàn toàn cho nhân dân ba nước Đông Dương sau này."
  },
  {
    id: 61,
    question: "Hội nghị Trung ương lần thứ 15, tháng 1-1959 của Đảng đã ra nghị quyết về cách mạng miền Nam với tinh thần cơ bản là gì?",
    answer: "Tiếp tục cuộc cách mạng dân tộc dân chủ nhân dân, sử dụng bạo lực cách mạng với hai lực lượng chính trị và vũ trang, kết hợp đấu tranh chính trị với đấu tranh quân sự, tiến tới khởi nghĩa vũ trang giành chính quyền về tay nhân dân."
  },
  {
    id: 62,
    question: "Tháng 9 năm 1960, Đại hội đại biểu toàn quốc lần thứ III của Đảng họp tại Thủ đô Hà Nội xác định đường lối chung của cách mạng Việt Nam là gì?",
    answer: "Đẩy mạnh cách mạng xã hội chủ nghĩa ở miền Bắc, tiến hành cách mạng dân tộc dân chủ nhân dân ở miền Nam, thực hiện thống nhất nước nhà, hoàn thành độc lập và dân chủ trong cả nước."
  },
  {
    id: 63,
    question: "Tháng 9-1960, tại Đại hội đại biểu toàn quốc lần thứ III của Đảng, đã đưa ra triển vọng của cuộc kháng chiến chống Mỹ, cứu nước như thế nào?",
    answer: "Thắng lợi cuối cùng nhất định thuộc về nhân dân ta, Nam Bắc nhất định sum họp một nhà."
  },
  {
    id: 64,
    question: "Ngày 15-2-1961, các lực lượng vũ trang ở miền Nam được thống nhất với tên gọi là gì?",
    answer: "Quân giải phóng miền Nam Việt Nam."
  },
  {
    id: 65,
    question: "Cuộc Tổng tiến công và nổi dậy Xuân 1975 diễn ra trong thời gian nào?",
    answer: "Cuộc Tổng tiến công và nổi dậy diễn ra trong 55 ngày đêm, từ ngày 10-3 đến ngày 30-4-1975. Vào lúc 11 giờ 30 phút ngày 30-4-1975, lá cờ cách mạng được cắm trên nóc Dinh Độc Lập, đánh dấu kết thúc thắng lợi cuộc kháng chiến chống Mỹ, cứu nước vĩ đại của dân tộc."
  },
  {
    id: 66,
    question: "Nền kinh tế thị trường định hướng xã hội chủ nghĩa ở nước ta hiện nay nhằm mục tiêu gì?",
    answer: "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh."
  },
  {
    id: 67,
    question: "Theo quan điểm của Đảng ta trong công nghiệp hóa, hiện đại hóa hiện nay, để tăng trưởng kinh tế cần những yếu tố chủ yếu nào? Yếu tố nào là quyết định?",
    answer: "Năm yếu tố chủ yếu: vốn, khoa học và công nghệ, con người, cơ cấu kinh tế, thể chế chính trị và quản lý nhà nước. Con người là yếu tố quyết định."
  },
  {
    id: 68,
    question: "Nghị quyết Hội nghị Trung ương 8 (khóa XI) về Chiến lược bảo vệ Tổ quốc trong thời kỳ mới xác định đối tác trong chính sách đối ngoại của Đảng ta hiện nay là gì?",
    answer: "Những ai tôn trọng độc lập, chủ quyền, thiết lập và mở rộng quan hệ hữu nghị, hợp tác bình đẳng, cùng có lợi với Việt Nam đều là đối tác."
  },
  {
    id: 69,
    question: "Quan điểm về xây dựng văn hóa trong Nghị quyết Hội nghị Trung ương 9 (khóa XI) xác định trọng tâm là vấn đề gì?",
    answer: "Chăm lo xây dựng con người có nhân cách, lối sống tốt đẹp với các đặc tính cơ bản: yêu nước, nhân ái, nghĩa tình, trung thực, đoàn kết, cần cù, sáng tạo."
  },
  {
    id: 70,
    question: "Văn hóa có vai trò gì đối với sự phát triển xã hội?",
    answer: "Văn hóa là nền tảng tinh thần của xã hội, là mục tiêu, là động lực phát triển bền vững của xã hội."
  },
  {
    id: 71,
    question: "Cương lĩnh năm 2011 do Đại hội lần thứ XI của Đảng thông qua có bổ sung mới đặc trưng nào về xã hội xã hội chủ nghĩa mà nhân dân ta xây dựng?",
    answer: "Bổ sung hai đặc trưng bao trùm, tổng quát: “Dân giàu, nước mạnh, dân chủ, công bằng, văn minh” và “Có Nhà nước pháp quyền xã hội chủ nghĩa của nhân dân, do nhân dân, vì nhân dân, do Đảng Cộng sản Việt Nam lãnh đạo”."
  },
  {
    id: 72,
    question: "Đại hội XII của Đảng xác định trong nền kinh tế thị trường định hướng xã hội chủ nghĩa ở nước ta hiện nay có những thành phần kinh tế nào đang hình thành và phát triển?",
    answer: "Kinh tế nhà nước, kinh tế tập thể, kinh tế tư nhân và kinh tế có vốn đầu tư nước ngoài."
  },
  {
    id: 73,
    question: "Theo quan điểm Đại hội XII của Đảng, để tiếp tục đẩy mạnh thực hiện mô hình công nghiệp hóa, hiện đại hóa trong điều kiện phát triển kinh tế thị trường định hướng xã hội chủ nghĩa và hội nhập quốc tế gắn với phát triển kinh tế tri thức, cần lấy những yếu tố nào làm động lực chủ yếu?",
    answer: "Khoa học, công nghệ, tri thức và nguồn nhân lực chất lượng cao."
  },
  {
    id: 74,
    question: "Mối quan hệ giữa hội nhập kinh tế và các lĩnh vực khác được Đại hội XII xác định như thế nào?",
    answer: "Hội nhập kinh tế là trọng tâm, các lĩnh vực khác phải tạo thuận lợi cho hội nhập kinh tế."
  },
  {
    id: 75,
    question: "Đảng Cộng sản Việt Nam từ năm 1930 đến nay đã lãnh đạo giai cấp công nhân, nhân dân lao động và toàn thể dân tộc Việt Nam giành được những thắng lợi vĩ đại nào?",
    answer: "Thắng lợi của Cách mạng Tháng Tám năm 1945, thành lập nước Việt Nam Dân chủ Cộng hòa; thắng lợi của các cuộc kháng chiến oanh liệt để giải phóng dân tộc, bảo vệ Tổ quốc; thắng lợi của sự nghiệp đổi mới và từng bước đưa đất nước quá độ lên chủ nghĩa xã hội."
  }
];

const essayQuestions = [
  {
    id: 76,
    question: "Trình bày ý nghĩa lịch sử Cách mạng Tháng Tám năm 1945. Liên hệ trách nhiệm sinh viên trong việc góp phần xây dựng và bảo vệ Tổ quốc hiện nay.",
    answer: "Ý nghĩa lịch sử: Cách mạng Tháng Tám năm 1945 đã đập tan ách thống trị của thực dân, phát xít và chế độ phong kiến, lập nên nước Việt Nam Dân chủ Cộng hòa. Từ đây, nhân dân Việt Nam từ thân phận nô lệ trở thành người làm chủ, đất nước bước vào kỷ nguyên độc lập, tự do và tiến lên chủ nghĩa xã hội; Đảng từ hoạt động bí mật trở thành đảng cầm quyền. Thắng lợi này còn cổ vũ mạnh mẽ phong trào giải phóng dân tộc trên thế giới và khẳng định đường lối cách mạng đúng đắn của Đảng, Chủ tịch Hồ Chí Minh.\n\nLiên hệ trách nhiệm sinh viên: Hiện nay, sinh viên cần tích cực học tập, rèn luyện đạo đức, chấp hành pháp luật, giữ gìn bản sắc dân tộc, đấu tranh với thông tin sai trái và góp phần bảo vệ độc lập, chủ quyền của Tổ quốc."
  },
  {
    id: 77,
    question: "Trình bày một số bài học kinh nghiệm trong cuộc kháng chiến chống Mỹ, cứu nước của nhân dân Việt Nam (1954-1975). Theo anh (chị), Đảng phải làm gì để tiếp tục kế thừa, phát huy những bài học đó trong bối cảnh hiện nay?",
    answer: "Bài học kinh nghiệm: Cuộc kháng chiến chống Mỹ, cứu nước để lại những bài học lớn: kiên định mục tiêu độc lập dân tộc gắn liền với chủ nghĩa xã hội; phát huy sức mạnh toàn dân, tiến hành chiến tranh nhân dân; kết hợp đấu tranh quân sự, chính trị và ngoại giao; xây dựng hậu phương miền Bắc vững mạnh; đồng thời kết hợp sức mạnh dân tộc với sức mạnh quốc tế.\n\nVận dụng hiện nay: Trong bối cảnh hiện nay, Đảng cần tiếp tục giữ vững mục tiêu độc lập dân tộc và chủ nghĩa xã hội, tăng cường xây dựng, chỉnh đốn Đảng, phát huy khối đại đoàn kết toàn dân, nâng cao năng lực dự báo, xây dựng quốc phòng - an ninh vững mạnh và chủ động hội nhập quốc tế để bảo vệ, phát triển đất nước."
  },
  {
    id: 78,
    question: "Trình bày quan điểm của Đảng về công nghiệp hóa trong thời kỳ đổi mới được nêu ra tại Đại hội VIII (7/1996) của Đảng. Sinh viên có thể làm gì để đóng góp vào quá trình công nghiệp hóa, hiện đại hóa đất nước theo định hướng của Đảng?",
    answer: "Quan điểm của Đảng: Đại hội VIII xác định công nghiệp hóa, hiện đại hóa phải giữ vững độc lập, tự chủ, đồng thời mở rộng hợp tác quốc tế; lấy nguồn lực trong nước là chính và tranh thủ nguồn lực bên ngoài. Đây là sự nghiệp của toàn dân, mọi thành phần kinh tế, trong đó kinh tế nhà nước giữ vai trò chủ đạo; con người là yếu tố cơ bản, khoa học - công nghệ là động lực; hiệu quả kinh tế - xã hội là tiêu chuẩn lựa chọn phương án đầu tư và phải kết hợp phát triển kinh tế với quốc phòng, an ninh.\n\nLiên hệ sinh viên: Sinh viên cần tích cực học tập, nâng cao chuyên môn, ngoại ngữ, kỹ năng công nghệ, rèn luyện tư duy sáng tạo và vận dụng kiến thức vào thực tiễn để trở thành nguồn nhân lực chất lượng cao, góp phần công nghiệp hóa, hiện đại hóa đất nước."
  },
  {
    id: 79,
    question: "Trong bối cảnh quốc tế hiện nay, Đảng ta cần phải làm gì để tăng cường hội nhập quốc tế, góp phần xây dựng và phát triển đất nước? Liên hệ trách nhiệm sinh viên.",
    answer: "Yêu cầu đối với Đảng: Trong bối cảnh quốc tế hiện nay, Đảng cần kiên định đường lối đối ngoại độc lập, tự chủ, bảo đảm lợi ích quốc gia - dân tộc; đa dạng hóa, đa phương hóa quan hệ đối ngoại và chủ động, tích cực hội nhập quốc tế. Đồng thời, phải phát huy nội lực, tranh thủ hiệu quả các nguồn lực bên ngoài, nâng cao năng lực cạnh tranh, giữ vững ổn định chính trị - xã hội, bản sắc văn hóa và độc lập, chủ quyền của đất nước; trong đó hội nhập kinh tế quốc tế là trọng tâm.\n\nLiên hệ sinh viên: Sinh viên cần học tốt chuyên môn, ngoại ngữ và công nghệ; hiểu biết pháp luật, tôn trọng sự khác biệt văn hóa, quảng bá hình ảnh Việt Nam và có trách nhiệm khi học tập, giao lưu trong môi trường quốc tế."
  },
  {
    id: 80,
    question: "Phân tích nội dung đường lối đổi mới toàn diện đất nước được Đảng Cộng sản Việt Nam đề ra tại Đại hội VI (1986). Những bài học kinh nghiệm mà Đảng ta đã đúc kết cho công cuộc phát triển đất nước trong giai đoạn hiện nay.",
    answer: "Nội dung đường lối đổi mới: Đại hội VI (1986) khởi xướng đường lối đổi mới toàn diện, trước hết là đổi mới tư duy, nhất là tư duy kinh tế. Đảng chủ trương phát triển nền kinh tế nhiều thành phần, xóa bỏ cơ chế tập trung quan liêu, bao cấp, chuyển sang hạch toán kinh doanh, kết hợp kế hoạch với thị trường; tập trung thực hiện ba chương trình lớn: lương thực - thực phẩm, hàng tiêu dùng và hàng xuất khẩu. Đồng thời, Đảng đổi mới chính sách xã hội, tăng cường quốc phòng - an ninh, mở rộng đối ngoại, phát huy quyền làm chủ của nhân dân và nâng cao hiệu lực quản lý của Nhà nước.\n\nBài học kinh nghiệm: Những bài học còn nguyên giá trị là: lấy dân làm gốc; xuất phát từ thực tế, tôn trọng quy luật khách quan; kết hợp sức mạnh dân tộc với sức mạnh thời đại; thường xuyên xây dựng Đảng trong sạch, vững mạnh."
  },
  {
    id: 81,
    question: "Trình bày những thành tựu cơ bản trong công cuộc đổi mới đất nước (1986-2021). Theo anh (chị), để phát huy những thành tựu đó trong thực hiện Nghị quyết Đại hội XIII giai đoạn 2021-2026, Đảng ta cần phải làm gì?",
    answer: "Thành tựu cơ bản: Công cuộc đổi mới đã đạt nhiều thành tựu to lớn: kinh tế tăng trưởng, đất nước thoát khỏi khủng hoảng và tình trạng kém phát triển; đời sống nhân dân được cải thiện; công nghiệp hóa, hiện đại hóa và kinh tế thị trường định hướng xã hội chủ nghĩa từng bước phát triển; hệ thống chính trị được củng cố; quốc phòng, an ninh được giữ vững; quan hệ đối ngoại và vị thế quốc tế của Việt Nam ngày càng được nâng cao.\n\nPhương hướng phát huy: Đảng cần kiên định mục tiêu độc lập dân tộc và chủ nghĩa xã hội; đẩy mạnh đổi mới sáng tạo, phát triển kinh tế bền vững; chăm lo đời sống nhân dân; xây dựng, chỉnh đốn Đảng; phòng, chống tham nhũng; giữ vững quốc phòng - an ninh và chủ động hội nhập quốc tế.",
    note: "Giáo trình được cung cấp chỉ tổng kết công cuộc đổi mới đến năm 2018, không có nội dung riêng về giai đoạn 2019-2021 và Nghị quyết Đại hội XIII."
  }
];
