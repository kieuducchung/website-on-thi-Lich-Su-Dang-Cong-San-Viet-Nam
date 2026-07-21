# Website ôn thi Lịch sử Đảng Cộng sản Việt Nam

## Cách chạy

1. Giải nén thư mục.
2. Mở trực tiếp `index.html` bằng trình duyệt.
3. Hoặc đưa toàn bộ các file lên GitHub Pages.

Không cần cài Node.js, không cần máy chủ và không dùng framework.

## Cấu trúc

- `index.html`: bố cục website.
- `styles.css`: toàn bộ giao diện, responsive và Dark/Light Mode.
- `data.js`: dữ liệu trắc nghiệm, trả lời ngắn và tự luận.
- `app.js`: toàn bộ chức năng học và thi.

## Thay dữ liệu

Chỉ cần chỉnh ba mảng trong `data.js`:

- `questions`
- `shortAnswer`
- `essayQuestions`

## Dữ liệu lưu trên trình duyệt

Website dùng `localStorage` để lưu:

- Giao diện sáng/tối.
- Câu đã đánh dấu.
- Trạng thái hiện/ẩn đáp án trong chế độ học.
- Trạng thái mở đáp án trả lời ngắn và tự luận.
