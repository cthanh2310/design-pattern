Có thể nhìn thấy sự khác nhau khi dùng DI và không:

-   Tính linh hoạt và mở rộng(Flexibility and extensibility):
    -   Với DI -> muốn thêm tiếng kêu mới của 1 loài chỉ cần đơn giảm thêm một class và implement Sound interface -> sau đó tạo một đối tượng của class đó và inject vào trong constructor của SoundService.
    -   Không có DI -> muốn thêm tiếng kêu mới của 1 loại phải sửa class SoundService -> thêm 1 instance mới và khai báo trong constructor rỗng -> rất khó scale và ảnh hưởng tính năng cũ -> vi phạm quy tắc O trong SOLID: Không được sửa đổi một Class có sẵn, nhưng có thể mở rộng bằng kế thừa.
-   Khả năng kiểm tra(Testability): ở DI ta có thể mock
    -   K có DI: Vì liên kết chặt chẽ giữa các class nên khó để tạo mock data cho việc test
