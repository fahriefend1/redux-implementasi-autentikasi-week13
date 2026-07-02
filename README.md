# 🛒 Implementasi Autentikasi - Week 13

| 🔐 Login | Login dengan email & password |
| 📝 Register | Registrasi user baru |
| 🚪 Logout | Logout user |
| 🌐 Login API | Login menggunakan Fake Store API |
| 🛡️ Protected Route | Cart hanya bisa diakses user login |
| 💾 Local Storage | Data user tersimpan di browser |
| 🛒 Shopping Cart | Tambah/hapus produk |

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