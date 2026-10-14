# 🚀 React + Vite — Build & Deploy lên GitHub Pages

Hướng dẫn build dự án React sử dụng Vite và triển khai website lên GitHub Pages.

## 📑 Mục lục

- [1. Cài đặt thư viện](#1-cài-đặt-thư-viện)
- [2. Cấu hình Vite](#2-cấu-hình-viteconfigjs)
- [3. Cấu hình React Router](#3-cấu-hình-react-router)
- [4. Cấu hình package.json](#4-cấu-hình-packagejson)
- [5. Chạy thử dự án](#5-chạy-thử-dự-án)
- [6. Build dự án](#6-build-dự-án)
- [7. Kết nối GitHub](#7-kết-nối-github)
- [8. Push code](#8-push-code-lên-github)
- [9. Deploy website](#9-deploy-lên-github-pages)
- [10. Cập nhật website](#10-cập-nhật-website)
- [11. Xử lý lỗi thường gặp](#11-xử-lý-lỗi-thường-gặp)

---

## 1. Cài đặt thư viện

Mở terminal tại thư mục gốc của dự án:

```bash
npm install
npm install -D gh-pages
```

- `npm install`: cài đặt các thư viện trong dự án.
- `gh-pages`: hỗ trợ deploy website lên GitHub Pages.

## 2. Cấu hình `vite.config.js`

Mở file `vite.config.js`:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/TEN-REPOSITORY/",
});
```

Thay `TEN-REPOSITORY` bằng tên repository GitHub.

Ví dụ repository có tên `f8-zoom-day-37`:

```js
base: "/f8-zoom-day-37/",
```

> Lưu ý: Giữ nguyên plugin React mà dự án đang sử dụng. Nếu dự án dùng `@vitejs/plugin-react` thì không tự ý đổi sang `@vitejs/plugin-react-swc`.

## 3. Cấu hình React Router

Nếu dự án sử dụng `BrowserRouter`, hãy cấu hình `basename` trong file `src/main.jsx`.

Ví dụ:

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./reset.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/TEN-REPOSITORY">
      <App />
    </BrowserRouter>
  </StrictMode>
);
```

Với repository `f8-zoom-day-37`, thay bằng:

```jsx
<BrowserRouter basename="/f8-zoom-day-37">
  <App />
</BrowserRouter>
```

> Chỉ áp dụng `basename` khi cần thiết cho ứng dụng dùng `BrowserRouter` trên GitHub Pages. Giữ nguyên các import và cấu trúc khác của dự án.

## 4. Cấu hình `package.json`

Trong mục `scripts`, thêm hai dòng sau:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

Ví dụ đầy đủ:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Nếu file đã có `scripts`, chỉ thêm hai lệnh cần thiết, không tạo thêm mục `scripts` thứ hai.

## 5. Chạy thử dự án

```bash
npm run dev
```

Mở địa chỉ localhost mà Vite hiển thị, thường là:

```text
http://localhost:5173/
```

Kiểm tra giao diện, chức năng và các đường dẫn trước khi build.

## 6. Build dự án

Chạy:

```bash
npm run build
```

Nếu thành công, terminal sẽ hiển thị thông báo tương tự:

```text
✓ built in 2.92s
```

Vite tạo thư mục `dist`, chứa các file đã được build để triển khai.

Có thể kiểm tra bản build bằng:

```bash
npm run preview
```

## 7. Kết nối GitHub

Kiểm tra remote hiện tại:

```bash
git remote -v
```

Nếu chưa có remote:

```bash
git remote add origin https://github.com/USERNAME/TEN-REPOSITORY.git
```

Nếu remote đã có nhưng URL sai:

```bash
git remote set-url origin https://github.com/USERNAME/TEN-REPOSITORY.git
```

Thay `USERNAME` và `TEN-REPOSITORY` bằng tên tài khoản và repository thực tế.

Ví dụ:

```bash
git remote set-url origin https://github.com/hungomega/f8-zoom-day-37.git
```

## 8. Push code lên GitHub

```bash
git add .
git commit -m "Update project"
git push -u origin main
```

Nếu Git báo `nothing to commit`, nghĩa là không có thay đổi mới cần commit. Bạn có thể tiếp tục lệnh push.

## 9. Deploy lên GitHub Pages

Chạy:

```bash
npm run deploy
```

Lệnh này tự động thực hiện hai bước:

1. `predeploy`: chạy `npm run build`.
2. `deploy`: đưa nội dung thư mục `dist` lên nhánh `gh-pages`.

Sau khi deploy thành công, vào repository trên GitHub:

**Settings → Pages**

Chọn:

- **Source:** Deploy from a branch
- **Branch:** `gh-pages`
- **Folder:** `/(root)`

Website có địa chỉ dạng:

```text
https://USERNAME.github.io/TEN-REPOSITORY/
```

Ví dụ:

[https://hungomega.github.io/f8-zoom-day-37/](https://hungomega.github.io/f8-zoom-day-37/)

## 10. Cập nhật website

Sau khi sửa code, chạy lần lượt:

```bash
git add .
git commit -m "Update website"
git push
npm run deploy
```

Không cần cấu hình lại `vite.config.js` hoặc `package.json` mỗi lần cập nhật, trừ khi thay đổi cấu hình deploy.

**Phân biệt hai lệnh:**

- `git push`: cập nhật source code trên nhánh `main`.
- `npm run deploy`: build và cập nhật website trên nhánh `gh-pages`.

## 11. Xử lý lỗi thường gặp

### ❌ Repository not found

Kiểm tra repository có tồn tại và URL remote có chính xác không:

```bash
git remote -v
```

### ❌ Website trắng hoặc không tải được CSS/JS/ảnh

1. Kiểm tra `base` trong `vite.config.js`.
2. Kiểm tra `basename` trong `BrowserRouter` nếu sử dụng.
3. Build và deploy lại:

```bash
npm run build
npm run deploy
```

4. Mở DevTools bằng `F12`, kiểm tra tab Console và Network.

### ❌ gh-pages: command not found

Cài lại thư viện:

```bash
npm install -D gh-pages
```

### ❌ npm run build thất bại

Đọc lỗi trong terminal, sửa lỗi trước khi deploy.

---

## ✅ Checklist trước khi deploy

- [ ] `npm run dev` chạy bình thường.
- [ ] `vite.config.js` có `base` đúng tên repository.
- [ ] `BrowserRouter` có `basename` phù hợp nếu cần.
- [ ] `package.json` có `predeploy` và `deploy`.
- [ ] `npm run build` thành công.
- [ ] Remote GitHub chính xác.
- [ ] GitHub Pages đã chọn nhánh `gh-pages`.

**Hoàn tất:** Mỗi khi làm xong dự án React + Vite, mở README này và thực hiện lần lượt các bước trên.
