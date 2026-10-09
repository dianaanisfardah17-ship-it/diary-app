📔 Diary App — React Native & Expo
Aplikasi buku harian sederhana yang dibuat menggunakan React Native dan Expo CLI untuk memenuhi tugas Praktikum Mobile Programming — Pertemuan 2: Struktur Project dan Komponen Dasar.
Diary App menampilkan catatan harian dalam bentuk kartu yang berisi judul, tanggal, ringkasan kegiatan, gambar, dan suasana hati (mood).
✨ Fitur
Menampilkan lima entri catatan harian.
Menampilkan judul, tanggal, ringkasan, dan gambar pada setiap catatan.
Menampilkan avatar pengguna pada bagian header.
Menggunakan variasi warna kartu berdasarkan mood, seperti Senang, Fokus, Tenang, Sedih, dan Semangat.
Menggunakan gambar dari folder lokal `assets/moods/`.
Menampilkan daftar catatan yang dapat digulir.
Menggunakan komponen `DiaryCard` agar tampilan kartu dapat digunakan kembali.
🖼️ Screenshot Aplikasi
Simpan screenshot aplikasi yang berjalan di Expo Go dengan nama `diary-home.jpeg` di dalam folder `screenshot/diary-home.jpeg`.
![Tampilan utama Diary App](screenshot/diary-home.jpeg)
🛠️ Teknologi yang Digunakan
React Native
Expo CLI
JavaScript
`react-native-safe-area-context`
Expo Go atau Android Emulator
📁 Struktur Proyek
```text
diary-app/
├── assets/
│   └── moods/
│       ├── 1.jpeg
│       ├── 2.jpeg
│       ├── 3.jpeg
│       ├── 4.jpeg
│       ├── 5.jpeg
│       └── WhatsApp Image ...
├── screenshot/
│   └── diary-home.jpeg
├── src/
│   ├── components/
│   │   └── DiaryCard.js
│   ├── screens/
│   │   └── DiaryListScreen.js
│   └── styles/
│       └── moods.js
├── App.js
├── app.json
├── index.js
├── package.json
├── package-lock.json
└── README.md
```
🚀 Cara Menjalankan Aplikasi
Prasyarat
Pastikan Node.js dan npm sudah terpasang. Untuk menjalankan aplikasi di smartphone, instal Expo Go.
Langkah menjalankan
Clone repository:
```bash
   git clone https://github.com/dianaanisfardah17-ship-it/diary-app.git
   ```
Masuk ke folder proyek:
```bash
   cd diary-app
   ```
Instal dependensi:
```bash
   npm install
   ```
Jalankan Expo:
```bash
   npx expo start
   ```
Pindai QR code yang muncul menggunakan Expo Go. Pastikan laptop dan smartphone terhubung ke jaringan yang sama jika menggunakan koneksi LAN.
Jika tampilan atau cache bermasalah, coba jalankan:
```bash
npx expo start -c
```
📚 Komponen dan Konsep Praktikum
Komponen/Konsep	Fungsi
`View`	Mengelompokkan dan menyusun elemen antarmuka
`Text`	Menampilkan teks pada aplikasi
`Image`	Menampilkan gambar dan avatar
`ScrollView`	Memungkinkan daftar digulir
`StyleSheet`	Mengatur gaya dan tampilan komponen
Flexbox	Mengatur posisi dan tata letak elemen
Props	Mengirim data ke komponen
`map()`	Menampilkan kartu berdasarkan data catatan
Reusable component	Menggunakan kembali komponen `DiaryCard`
👩🏻‍💻 Informasi Praktikum
Nama: Diana Anis Fardah
NIM: 2430511046
Program Studi: Teknik Informatika
Fakultas: Sains dan Teknologi
Universitas: Universitas Muhammadiyah Sukabumi
Mata Kuliah: Mobile Multi Platform
Praktikum: Pertemuan 2 — Struktur Project dan Komponen Dasar