Đây là dự án [**React Native**](https://reactnative.dev) mới, được khởi tạo sử dụng [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Bắt đầu

>**Ghi chú**: Đảm bảo bạn đã hoàn thành các hướng dẫn [Cài đặt môi trường React Native](https://reactnative.dev/docs/environment-setup) cho đến bước "Tạo một ứng dụng mới", trước khi tiếp tục.

## Bước 1: Khởi động Metro Server

Trước hết, bạn cần khởi động **Metro**, công cụ _bundler_ JavaScript đi kèm với React Native.

Để khởi động Metro, chạy lệnh sau từ thư mục gốc của dự án React Native của bạn:

```bash
# sử dụng npm
npm start

# HOẶC sử dụng Yarn
yarn start
```

## Bước 2: Khởi động Ứng dụng của bạn

Để Metro Bundler chạy trong cửa sổ terminal _riêng của nó_. Mở một cửa sổ terminal _mới_ từ thư mục gốc của dự án React Native của bạn. Chạy lệnh sau để khởi động ứng dụng _Android_ hoặc _iOS_ của bạn:

### Đối với Android

```bash
# sử dụng npm
npm run android

# HOẶC sử dụng Yarn
yarn android
```

### Đối với iOS

```bash
# sử dụng npm
npm run ios

# HOẶC sử dụng Yarn
yarn ios
```

Nếu mọi thứ được thiết lập đúng cách, bạn sẽ thấy ứng dụng mới của mình chạy trên Trình giả lập Android hoặc Trình giả lập iOS của bạn trong thời gian ngắn, miễn là bạn đã thiết lập trình giả lập của mình đúng cách.

Đây là một cách để chạy ứng dụng của bạn — bạn cũng có thể chạy nó trực tiếp từ Android Studio và Xcode tương ứng.

## Bước 3: Sửa đổi Ứng dụng của bạn

Bây giờ bạn đã thành công trong việc chạy ứng dụng, hãy tiến hành chỉnh sửa nó.

1. Mở tệp `App.js` trong trình soạn thảo văn bản mà bạn thích và chỉnh sửa một số dòng.
2. Đối với **Android**: Nhấn phím <kbd>R</kbd> hai lần hoặc chọn **"Reload"** từ **Menu Nhà phát triển** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (trên Windows và Linux) hoặc <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (trên macOS)) để xem các thay đổi của bạn!

   Đối với **iOS**: Nhấn <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> trong Trình giả lập iOS của bạn để tải lại ứng dụng và xem các thay đổi của bạn!

## Chúc mừng! :tada:

Bạn đã thành công trong việc chạy và chỉnh sửa Ứng dụng React Native của mình. :partying_face:

### Bây giờ là gì?

- Nếu bạn muốn thêm mã React Native mới này vào một ứng dụng hiện có, hãy xem [Hướng dẫn tích hợp](https://reactnative.dev/docs/integration-with-existing-apps).
- Nếu bạn muốn tìm hiểu thêm về React Native, hãy xem [Giới thiệu về React Native](https://reactnative.dev/docs/getting-started).

# Khắc phục sự cố

Nếu bạn không thể làm việc này, hãy xem trang [Khắc phục sự cố](https://reactnative.dev/docs/troubleshooting).

# Tìm hiểu thêm

Để biết thêm về React Native, hãy xem các tài liệu sau:

- [Trang web React Native](https://reactnative.dev) - tìm hiểu thêm về React Native.
- [Bắt đầu](https://reactnative.dev/docs/environment-setup) - một **tổng quan** về React Native và cách thiết lập môi trường của bạn.
- [Học cơ bản](https://reactnative.dev/docs/getting-started) - một **chuyến tham quan dẫn đường** về **cơ bản** của React Native.
- [Blog](https://reactnative.dev/blog) - đọc các bài viết **Blog** chính thức mới nhất về React Native.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - dự án **repository** mã nguồn mở của React Native trên GitHub.