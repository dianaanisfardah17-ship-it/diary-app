# 📔 Diary App — React Native & Expo

Aplikasi buku harian sederhana yang dikembangkan menggunakan React Native dan Expo CLI untuk tugas Praktikum Mobile Multi Platform Pertemuan 

## Identitas Mahasiswa

- **Nama:** Diana Anis Fardah
- **NIM:** 2430511046
- **Program Studi:** Teknik Informatika
- **Universitas:** Universitas Muhammadiyah Sukabumi

## Fitur yang Diselesaikan

- Menampilkan lima entri catatan harian.
- Menampilkan judul, tanggal, ringkasan, gambar, dan mood pada setiap catatan.
- Menampilkan avatar pengguna pada bagian header.
- Menampilkan variasi warna kartu berdasarkan mood: Senang, Fokus, Tenang, Sedih, dan Semangat.
- Menggunakan gambar lokal dari folder `assets/moods/`.
- Menggunakan komponen reusable `DiaryCard`.
- Menampilkan daftar catatan menggunakan `ScrollView` dan metode `map()`.

## Langkah Menjalankan Proyek

1. Clone Repository

Buka terminal atau CMD, lalu jalankan perintah berikut:

```bash
git clone https://github.com/dianaanisfardah17-ship-it/diary-app.git
```

2. Masuk ke Folder Proyek
   
```bash
cd diary-app
```

3. Instal Dependensi

Pastikan Node.js sudah terinstal, kemudian jalankan:

```bash
npm install
```
Tunggu sampai proses instalasi selesai.

4. Jalankan Aplikasi

Jalankan perintah berikut untuk memulai Expo:

```bash
npx expo start
```

5. Buka Aplikasi

Setelah Expo berjalan, aplikasi dapat dibuka dengan salah satu cara berikut:

- HP Android: Pindai QR code menggunakan Expo Go.
- Android Emulator: Tekan tombol "a" pada terminal Expo jika emulator sudah berjalan.
- Browser: Tekan tombol "w" jika proyek mendukung versi web.
   
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

## Screenshot Aplikasi

![Tampilan Diary App](screenshot/diary-home.jpeg)
