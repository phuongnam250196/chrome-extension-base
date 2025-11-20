# Vue 3 Chrome Extension Template

Đây là một mẫu dự án toàn diện để xây dựng tiện ích mở rộng cho Chrome sử dụng Vue 3, Vite và TypeScript. Dự án đã được cấu hình sẵn cho popup, background service worker và content script.

## ✨ Tính năng

- **Framework**: Vue 3
- **Build Tool**: Vite
- **Ngôn ngữ**: TypeScript
- **Manifest**: Version 3
- **Định dạng mã**: Prettier
- **Tự động build lại**: Chế độ theo dõi (watch mode) để phát triển nhanh chóng.

## 📂 Cấu trúc dự án

```
chrome-vue3-extension/
├── dist/                # Thư mục chứa code đã build để tải lên Chrome
├── src/
│   ├── background/      # Mã nguồn cho background service worker
│   │   └── index.ts
│   ├── content/         # Mã nguồn cho content script
│   │   └── index.ts
│   └── popup/           # Ứng dụng Vue cho popup
│       ├── App.vue
│       ├── main.ts
│       └── index.html
├── manifest.json        # Tệp kê khai của tiện ích mở rộng
├── vite.config.ts       # Tệp cấu hình Vite
└── package.json         # Phụ thuộc và script của dự án
```

## 🚀 Bắt đầu

### 1. Cài đặt

Cài đặt các gói phụ thuộc của dự án:
```bash
npm install
```

### 2. Chạy môi trường phát triển

Lệnh này sẽ build dự án vào thư mục `dist` và tự động build lại mỗi khi có thay đổi trong mã nguồn:
```bash
npm run dev
```

### 3. Build cho Production

Tạo một bản build tối ưu cho sản phẩm:
```bash
npm run build
```

## 🔧 Tải tiện ích vào Chrome

1.  Chạy lệnh `npm run dev` (để phát triển) hoặc `npm run build` (cho bản cuối).
2.  Mở Chrome và truy cập `chrome://extensions`.
3.  Bật **Chế độ dành cho nhà phát triển** (Developer mode) ở góc trên bên phải.
4.  Nhấp vào nút **Tải tiện ích đã giải nén** (Load unpacked).
5.  Chọn thư mục `dist` trong dự án của bạn.

Tiện ích của bạn bây giờ đã được tải và sẵn sàng để sử dụng. Nếu bạn đang chạy `npm run dev`, bạn chỉ cần tải lại tiện ích từ trang `chrome://extensions` để xem các thay đổi.
