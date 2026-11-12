MANDARINQUIZZ × QUIZZMAN · GIAO DIỆN ĐỒNG BỘ PHONG CÁCH QUIZZMAN
===================================================================

Triển khai Cloudflare Pages Free (không cần backend, npm hay build):
1. Cloudflare Dashboard → Workers & Pages → Create → Pages → Upload assets.
2. Upload file ZIP hoặc thư mục sau khi giải nén (tùy lựa chọn trên giao diện).
3. Deploy.
4. Trong project → Custom domains → thêm mandarinquizz.com.
5. Đảm bảo domain đã dùng DNS Cloudflare và làm theo hướng dẫn xác minh.

index.html: tiếng Việt; en/, zh-cn/, zh-tw/, ja/, ko/: 5 trang ngôn ngữ khác.
assets/: CSS, JS lọc dịch vụ, logo từ screenshot Quizzman và ảnh mạng xã hội.
Nguồn nội dung giới thiệu/dịch vụ: https://quizzman.com/about và https://quizzman.com/
14 thẻ liên kết đến các subdomain được giới thiệu trên Quizzman; trạng thái triển khai mỗi subdomain có thể thay đổi.

Logo: phiên bản crop trực tiếp từ ảnh chụp màn hình Quizzman do bạn cung cấp.
Nếu muốn logo ở độ phân giải gốc, chỉ cần thay assets/quizzman-logo.png bằng file logo chính thức.
