# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 🚀 Build và Deploy React + Vite lên GitHub Pages

Hướng dẫn build dự án React sử dụng Vite và deploy website lên GitHub Pages.

## 1. Cài đặt thư viện cần thiết

Chạy tại thư mục gốc của dự án:

```bash
npm install
npm install -D gh-pages
```

## 2. Cấu hình `vite.config.js`

Mở file `vite.config.js` và cấu hình:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/TEN-REPOSITORY/",
});
```

**Lưu ý:** Thay `TEN-REPOSITORY` bằng tên repository GitHub.

Ví dụ repository `f8-zoom-day-37`:

```js
base: "/f8-zoom-day-37/",
```

Nếu dự án sử dụng `@vitejs/plugin-react` thay vì `@vitejs/plugin-react-swc`, hãy giữ import plugin đang được sử dụng trong dự án.

## 3. Cấu hình `package.json`

Trong mục `scripts`, giữ các lệnh hiện có và bổ sung:

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

Không tạo thêm mục `scripts` thứ hai nếu file đã có mục này.

## 4. Chạy thử dự án trước khi deploy

```bash
npm run dev
```

Mở đường dẫn localhost mà Vite hiển thị để kiểm tra website.

## 5. Build dự án

```bash
npm run build
```

Nếu thành công, terminal sẽ hiển thị:

```text
✓ built successfully
```

Vite tạo thư mục `dist` chứa các file dùng để triển khai website.

Có thể kiểm tra bản build bằng:

```bash
npm run preview
```

## 6. Cấu hình GitHub repository

Kiểm tra remote:

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

Thay `USERNAME` và `TEN-REPOSITORY` bằng thông tin thực tế.

## 7. Push code lên GitHub

```bash
git add .
git commit -m "Update project"
git push -u origin main
```

Nếu Git báo `nothing to commit`, có thể bỏ qua lệnh commit và tiếp tục push.

## 8. Deploy lên GitHub Pages

```bash
npm run deploy
```

Lệnh này tự động chạy theo thứ tự:

1. `predeploy`: chạy `npm run build`.
2. `deploy`: đưa nội dung thư mục `dist` lên nhánh `gh-pages`.

Nếu deploy thành công, kiểm tra nhánh `gh-pages` trên GitHub.

## 9. Bật GitHub Pages

Vào repository trên GitHub:

**Settings → Pages**

Chọn:

- Source: `Deploy from a branch`
- Branch: `gh-pages`
- Folder: `/(root)`

Lưu cấu hình nếu cần.

Website thường có địa chỉ:

```text
https://USERNAME.github.io/TEN-REPOSITORY/
```

Ví dụ:

https://hungomega.github.io/f8-zoom-day-37/

## 10. Những lần cập nhật tiếp theo

Sau khi sửa code, chạy:

```bash
git add .
git commit -m "Update website"
git push
npm run deploy
```

Không cần cấu hình lại `vite.config.js` hoặc `package.json` mỗi lần cập nhật, trừ khi thay đổi tên repository hoặc cấu hình deploy.

## 11. Lỗi thường gặp

### Lỗi `Repository not found`

Kiểm tra repository có tồn tại và URL remote chính xác hay không:

```bash
git remote -v
```

### Website trắng hoặc không tải được ảnh/CSS/JS

Kiểm tra `base` trong `vite.config.js` có đúng tên repository không:

```js
base: "/TEN-REPOSITORY/",
```

Sau đó chạy lại:

```bash
npm run deploy
```

### Lỗi `gh-pages: command not found`

Cài lại thư viện:

```bash
npm install -D gh-pages
```

### Lệnh `npm run build` thất bại

Đọc lỗi đầu tiên trong terminal, sửa lỗi rồi mới deploy.

**Ghi nhớ:** `git push` cập nhật source code trên nhánh `main`; `npm run deploy` cập nhật website đã build trên nhánh `gh-pages`.
