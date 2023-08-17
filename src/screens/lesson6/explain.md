# Sử dụng Hooks trong React Native: useRef, useCallback và useMemo


## Các điểm chính

1. **useState**: Chúng ta sử dụng `useState` để quản lý giá trị của biến `count`.

2. **useCallback**: `useCallback` được sử dụng để tạo hàm `incrementCount` mà không cần phải tạo lại mỗi khi component được re-render. Điều này giúp tối ưu hóa hiệu suất.

3. **useRef**: `useRef` được sử dụng để lưu giá trị của `count` mà không gây ra việc re-render. Điều này hữu ích khi bạn cần lưu trữ một giá trị mà không muốn gây ảnh hưởng đến vòng đời của component.

4. **useMemo**: `useMemo` được sử dụng để tính toán xem số hiện tại là chẵn hay lẻ dựa trên giá trị lưu trong `countRef`. `countRef` sử dụng `useRef` để lưu trữ giá trị hiện tại của `count`, đảm bảo rằng việc tính toán chỉ xảy ra khi cần thiết.
