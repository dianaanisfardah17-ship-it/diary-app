📔 Diary App — React Native & Expo
Aplikasi buku harian sederhana yang dikembangkan menggunakan React Native dan Expo CLI untuk memenuhi tugas Praktikum Mobile Programming — Pertemuan 2: Struktur Project dan Komponen Dasar.
Diary App menampilkan catatan harian dalam bentuk kartu yang berisi judul, tanggal, ringkasan kegiatan, gambar, dan suasana hati (mood).
---
✨ Fitur
Menampilkan lima entri catatan harian.
Menampilkan judul, tanggal, ringkasan, dan gambar pada setiap catatan.
Menampilkan avatar pengguna pada bagian header.
Menampilkan variasi warna kartu berdasarkan mood: Senang, Fokus, Tenang, Sedih, dan Semangat.
Menggunakan gambar dari folder lokal `assets/moods/`.
Menampilkan daftar catatan yang dapat digulir.
Menggunakan komponen `DiaryCard` agar tampilan kartu dapat digunakan kembali (reusable component).
🖼️ Screenshot Aplikasi
Pastikan screenshot aplikasi disimpan dengan nama `diary-home.jpeg` di dalam folder `screenshot/`.
![Tampilan utama Diary App](screenshot/diary-home.jpeg)
> Jika gambar tidak tampil, periksa kembali nama folder dan nama file. Jalur gambar harus sama persis dengan lokasi file di repository.
🛠️ Teknologi yang Digunakan
React Native — membangun antarmuka aplikasi.
Expo CLI — menjalankan dan mengembangkan proyek.
JavaScript — bahasa pemrograman.
react-native-safe-area-context — membantu mengatur area aman layar.
Expo Go / Android Emulator — menjalankan aplikasi saat pengembangan.
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
Pastikan perangkat sudah memiliki:
Node.js versi LTS
npm (terpasang bersama Node.js)
Expo Go pada smartphone atau Android Emulator
Langkah instalasi
1. Clone repository
```bash
git clone https://github.com/dianaanisfardah17-ship-it/diary-app.git
```
2. Masuk ke folder proyek
```bash
cd diary-app
```
3. Instal dependensi
```bash
npm install
```
4. Jalankan development server
```bash
npx expo start
```
5. Buka aplikasi
Pindai QR code yang muncul di terminal menggunakan Expo Go. Jika menggunakan Android Emulator, jalankan emulator terlebih dahulu lalu tekan `a` pada terminal Expo.
Jika perlu membersihkan cache Expo, jalankan:
```bash
npx expo start -c
```
📚 Komponen dan Konsep Praktikum
Komponen/Konsep	Fungsi
`View`	Mengelompokkan dan menyusun elemen antarmuka.
`Text`	Menampilkan teks pada aplikasi.
`Image`	Menampilkan gambar dan avatar.
`ScrollView`	Memungkinkan daftar catatan digulir.
`StyleSheet`	Mengatur gaya dan tampilan komponen.
Flexbox	Mengatur posisi dan tata letak elemen.
Props	Mengirim data dari komponen induk ke komponen anak.
`map()`	Membentuk kartu berdasarkan data catatan.
Reusable component	Menggunakan kembali komponen `DiaryCard`.
👩🏻‍💻 Informasi Praktikum
Keterangan	Informasi
Nama	Diana Anis Fardah
NIM	2430511046
Program Studi	Teknik Informatika
Fakultas	Sains dan Teknologi
Universitas	Universitas Muhammadiyah Sukabumi
Mata Kuliah	Mobile Programming
Praktikum	Pertemuan 2 — Struktur Project dan Komponen Dasar
📝 Catatan
Proyek ini dibuat untuk keperluan pembelajaran dan praktikum. Dokumentasi ini dapat diperbarui mengikuti perubahan fitur dan source code aplikasi.
---
