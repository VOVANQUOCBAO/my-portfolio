# Portfolio — Bài 22 và Bài 23 / Chương 6

## Trạng thái
Portfolio của Võ Văn Quốc Bảo đã có tên và ảnh cá nhân. Domain riêng và endpoint Formspree chưa cấu hình. Các dự án được ghi rõ là minh họa.

## Cá nhân hóa
1. Mở `js/config.js`, thay tên và câu giới thiệu.
2. Thêm ảnh thật vào `images/avatar.jpg`, đặt `avatar: "images/avatar.jpg"`.
3. Sửa nội dung giới thiệu trong `about.html`, thay 6 thẻ trong `projects.html` bằng dự án thật nếu có.
4. Tạo form trong tài khoản Formspree của bạn, lấy endpoint và điền `formspreeEndpoint`. Cần hoàn tất xác minh email theo Formspree. Nút gửi bị khóa khi chưa có endpoint; không mô phỏng gửi thành công.

## Chạy thử
Chạy `python -m http.server 8000` tại thư mục chứa index.html, mở http://localhost:8000.

## Nền tảng triển khai theo đề
Đây là website tĩnh, không cần npm hoặc lệnh build. Thư mục public là thư mục chứa index.html. ZIP này chỉ chứa source có thể chỉnh sửa.
- GitHub Pages: đưa nội dung lên repo public; chọn nhánh chứa source và thư mục gốc trong cấu hình Pages.
- Netlify: dùng cùng repo. Tập tin netlify.toml đặt publish directory là thư mục gốc.
- Vercel: dùng cùng repo với cấu hình website tĩnh, không có lệnh build.
- Cloudflare Pages: dùng cùng repo với cấu hình website tĩnh, không có lệnh build.
Giao diện các dịch vụ có thể thay đổi; cần kiểm tra cấu hình trong tài khoản thực tế khi triển khai.

## Hoàn tất yêu cầu bài 8
Cần domain .dev/.xyz do bạn sở hữu. Sau deploy, thêm domain vào Vercel/Netlify, dùng bản ghi DNS do chính dự án đó cung cấp. Nếu dùng Cloudflare DNS, cập nhật nameserver ở nhà đăng ký và kiểm tra HTTPS hoạt động. Không dùng IP DNS cũ từ tài liệu mà chưa xác minh với nền tảng.

## Checklist nộp bài
Bài 22: bốn URL public thật và bốn ảnh chụp kết quả trên GitHub Pages, Netlify, Vercel, Cloudflare Pages.
Bài 23: URL deploy, source code, ảnh chụp trình duyệt có ảnh cá nhân. Theo bài 8 trong PDF còn cần repo GitHub public, domain thật HTTPS qua Cloudflare và video demo dưới 2 phút.

## Cấu trúc
index.html / about.html / projects.html / contact.html
css/style.css — responsive mobile first và CSS Grid
js/config.js — thông tin cá nhân và endpoint form
js/script.js — dark mode, localStorage, Intersection Observer
images/ — ảnh cá nhân và favicon


## Link đã triển khai
- GitHub: https://github.com/VOVANQUOCBAO/my-portfolio
- GitHub Pages: https://vovanquocbao.github.io/my-portfolio/
- Vercel: https://vo-van-quoc-bao-portfolio.vercel.app

- Cloudflare Pages: https://vo-van-quoc-bao-portfolio.pages.dev
