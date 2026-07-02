# 🛒 Implementasi Autentikasi - Week 13

Aplikasi sederhana untuk belajar implementasi autentikasi (Login, Register, Logout) dan proteksi rute.

---

## 🎯 Tujuan Pembelajaran

- ✅ Memahami konsep autentikasi dalam aplikasi React
- ✅ Mengimplementasikan Login, Register, dan Logout dengan Redux
- ✅ Melakukan proteksi rute (Protected Route)
- ✅ Menyimpan data pengguna di Local Storage
- ✅ Menggunakan API untuk autentikasi (Fake Store API)

---

## 📁 Struktur Folder
```
src/
├── store/ # File Redux
│ ├── index.js # Konfigurasi Redux Store
│ ├── middleware/
│ │ └── logger.js # Logger middleware
│ ├── actions/
│ │ ├── authActions.js # Action autentikasi
│ │ └── productActions.js # Action produk
│ └── reducers/
│ ├── authReducer.js # Reducer autentikasi
│ ├── productReducer.js # Reducer produk
│ └── cartReducer.js # Reducer cart
├── components/ # Komponen React
│ ├── Login.js # Komponen Login
│ ├── Register.js # Komponen Register
│ ├── LoginAPI.js # Login dengan API
│ ├── Logout.js # Komponen Logout
│ ├── ProductList.js # Daftar produk
│ └── Cart.js # Keranjang belanja
├── App.js # Routing utama
├── index.js # Entry point
└── index.css # Semua styling
```
---
