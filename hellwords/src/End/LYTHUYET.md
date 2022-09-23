# Lý thuyết
1. Có bao nhiêu loại component? Liệt kê các component.
Trả lời:  Có 2 loại component. Class component và Function Component

2. Nêu khái niệm của Props và State. So sánh Props và State. 
Trả lời:
Props: 
- là đối số của function, Props cho phép giao tiếp giữa các components với nhau bằng cách truyền tham số qua lại giữa các components(được truyền từ Component cha sang component con).
- Props chỉ được đọc mà không thể edit
States: 
- là của riêng component và được kiểm soát hoàn toàn bởi chúng.State có thể thay đổi được và mỗi khi state thì đổi thì component đó sẽ được render lại

3. Có bao nhiêu method call API
Trả lời:Có 4 method: 
- GET: để truy vấn object
- POST:  để tạo object mới
- PUT: để sửa đổi hoặc thay thế một object
- DELETE:  để loại bỏ một object

4. HTTP Request là gì? Liệt kê các phương thức HTTP request.
Trả lời:
- HTTP request là thông tin được gửi từ client lên server, để yêu cầu server tìm hoặc xử lý một số thông tin, dữ liệu mà client muốn.
- Các phương thức HTTP request: 
 + GET
 + POST
 + PUT
 + PATCH
 + HEAD
    
5. Sự khác biệt giữa Library và Framework là gì? Redux thuộc loại nào?
Trả lời:
- Framework có thể hiểu là một khung chương trình, người dùng bổ sung code và tuân theo quy tắc để tạo ra ứng dụng. 
- Library chỉ cung cấp các chức năng tiện ích hay các class để sử dụng trong quá trình xây dựng ứng dụng.
- Redux thuộc Library