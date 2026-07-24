# 💐 Dinraee — Modern Bouquet Shop Website

[![Live Demo](https://img.shields.io/badge/Demo-dinraee.vercel.app-pink?style=for-the-badge&logo=vercel)](https://dinraee.vercel.app)

Selamat datang di repository project **Dinraee**! Website ini merupakan platform katalog & e-commerce landing page untuk usaha penjualan buket bunga (custom bouquet, money bouquet, flower arrangement, dll.) yang dirancang modern, responsif, dan interaktif.

Project ini dibuat untuk membantu operasional bisnis UMKM toko buket lokal sekaligus dikembangkan sebagai **Project Portofolio Frontend Development**.

🔗 **Live Website:** [https://dinraee.vercel.app](https://dinraee.vercel.app)

---

## 🚀 Tech Stack

Project ini dibangun menggunakan ekosistem React modern dan utility-first CSS framework versi terbaru:

- **Framework / Library Utama:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/) + `@tailwindcss/vite`
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing:** [React Router v7](https://reactrouter.com/)
- **Animations:** [Motion](https://motion.dev/) (Framer Motion v12)
- **UI Components & Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Popups & Alerts:** [SweetAlert2](https://sweetalert2.github.io/)

---

## ✨ Fitur Utama

- **🎨 Modern & Responsive UI:** Tampilan cantik, elegan, dan fleksibel di layar smartphone, tablet, maupun desktop.
- **✨ Smooth Animations & Transitions:** Animasi interaktif menggunakan Motion untuk pengalaman pengguna yang menyenangkan.
- **🛍️ Catalog Display:** Menampilkan berbagai pilihan jenis buket beserta detail harga dan deskripsi.
- **🛒 Interactive Order / Contact:** Notifikasi modal interaktif dengan SweetAlert2 untuk konfirmasi pemesanan via WhatsApp atau form.
- **⚡ Fast Performance:** Menggunakan Vite dan Tailwind CSS v4 untuk _loading time_ yang sangat cepat dan efisien.

---

## 🛠️ Modul & Dependencies

Berikut adalah daftar package utama yang digunakan dalam project ini:

```json
"dependencies": {
  "@tailwindcss/vite": "^4.3.0",
  "motion": "^12.38.0",
  "react": "^19.2.6",
  "react-dom": "^19.2.6",
  "react-icons": "^5.6.0",
  "react-router-dom": "^7.15.0",
  "sweetalert2": "^11.26.24",
  "tailwindcss": "^4.3.0"
}
```

---

## 📦 Getting Started

Ikuti langkah-langkah di bawah ini untuk menjalankan project secara lokal di komputer kamu:

### 1. Clone Repository

```bash
git clone https://github.com/udintofa/dinraee.git
cd dinraee
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Jalankan Development Server

```bash
npm run dev
```

Buka browser dan akses alamat `http://localhost:5173` (atau sesuai port Vite kamu).

### 4. Build untuk Production

```bash
npm run build
```

---

## 📁 Struktur Folder Project

```text
dinraee/
├── public/
│   └── images/                # Assets gambar buket & kategori
├── src/
│   ├── components/            # Komponen-komponen UI reusable
│   │   ├── ButtomLine/        # Custom style & komponen aksen
│   │   ├── BestSeller.jsx     # Section produk terlaris
│   │   ├── FloatingWhatsApp.jsx # Tombol floating ke WhatsApp
│   │   ├── Footer.jsx         # Footer website
│   │   ├── Header.jsx         # Header section
│   │   ├── Navbar.jsx         # Navigasi utama
│   │   ├── OccasionCategories.jsx # Kategori berdasarkan acara
│   │   ├── OurFlowerGallery.jsx   # Galeri buket bunga
│   │   ├── ProcessSection.jsx     # Alur / proses pemesanan
│   │   └── WhyChooseUs.jsx        # Keunggulan layanan
│   ├── layouts/
│   │   └── RootLayout.jsx     # Layout utama aplikasi
│   ├── pages/
│   │   ├── About.jsx          # Halaman tentang toko
│   │   ├── ErrorPage.jsx      # Halaman 404 / Error Handling
│   │   ├── Home.jsx           # Landing page utama
│   │   ├── Katalog.jsx        # Halaman katalog produk
│   │   └── Order.jsx          # Halaman formulir / alur pemesanan
│   ├── routers/
│   │   └── index.jsx          # Konfigurasi routing (React Router v7)
│   ├── App.jsx                # Komponen utama React
│   ├── main.jsx               # Entry point React
│   └── index.css              # Setup Tailwind CSS & styling global
├── eslint.config.js           # Konfigurasi ESLint
├── index.html                 # Template HTML utama
├── package.json               # Daftar dependencies & script project
├── vercel.json                # Konfigurasi deployment Vercel
└── vite.config.js             # Konfigurasi Vite
```

---

## 💼 Catatan Portofolio

> **Client & Use Case:** Website ini dirancang dan dikembangkan untuk membantu brand toko buket **Dinraee** dalam meningkatkan _online presence_, menampilkan katalog produk secara profesional, serta mempermudah pelanggan melakukan pemesanan.

---

Dibuat dengan ❤️ oleh Udin Mustofa
