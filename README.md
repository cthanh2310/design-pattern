"# design-pattern"
RUN: TS FILE

1. Install necessary packages: npm install -g ts-node typescript '@types/node'
2. Run ts file: ts-node {file-path}

SOLID:

-   Single Responsibility (S) -> Mỗi class chịu một trách nhiệm duy nhất và implemnt một interface hoặc abstract class làm tiêu chuẩn
-   Open/Closed principle (O) -> Không được sửa đổi một class có sẵn, chỉ mở rộng bằng kế thừa (extend)
-   Liskov substitution principle:
-   Interface segregation principle (I): thay vì dùng 1 interface lớn -> tách ra nhiều interface nhỏ với nhiều mục đích khác nhau ~~ same with Single Responsibility
- Dependency Inversion Principle (D): 
