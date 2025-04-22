---
title: "Library Information System"
featured_image: /library-information-system/featured-image.png
summary: "Aplikasi web untuk mengelola sistem perpustakaan dengan menitikberatkan pada ruang lingkup hanya administrator. Memudahkan administrator untuk melakukan tugas-tugas pencatatan data buku, peminjaman, perhitungan denda keterlambatan dan sebagainya."
date: 2025-01-17
tags: projects
stacks:
  - Laravel
  - TailwindCSS
  - AlpineJS
  - LaravelExcel
slug: library-information-system
layout: layouts/project.njk
github: "https://github.com/azharisikumbang/perpustakaan"
youtube: ""
live_demo: "https://demo-perpustakaan.azharisaputra.web.id/"
---

Aplikasi web untuk mengelola sistem perpustakaan dengan menitikberatkan pada ruang lingkup hanya administrator. Memudahkan administrator untuk melakukan tugas-tugas pencatatan data buku, peminjaman, perhitungan denda keterlambatan dan sebagainya.

Note: Aplikasi tidak mempunyai sistem registrasi untuk pengguna baru (hanya lewat administrator).

## Identifikasi Permasalahan

- Kesulitan mengetahui informasi peminjaman, terkhusus peminjaman lama dikarenakan masih bergantung pada buku besar.
- Kesulitan mengetahui informasi terkait buku, seperti lokasi penyimpanan, jumlah unit dan sebagainya.
- Kesalahan perhitungan denda. Misal, pada saat peminjaman denda adalah Rp 1.000 dan terjadi perubahan pada beberapa minggu berikutnya menjadi ke Rp 2.000, maka potensi kesalahan penerapan denda dapat terjadi.
- Pembuatan laporan yang lambat dan rumit, apalagi ketika dibutuhkan dalam waktu cepat (kebutuhan kepala perpustakaan).

## Fitur Aplikasi

- [x] Authentication and Authorization (role-based)
- [x] Pengelolaan keanggotaan
- [x] Penyimpanan buku dengan data DCC, lokasi rak dan lainnya.
- [x] Peminjaman dan pengembalian (admin only)
- [x] Konfigurasi jumlah peminjamam, batas peminjaman (hari) dan denda peminjaman (per hari).
- [x] Laporan excel keanggotaan, buku, peminjaman, pengembalian dan denda (admin and manager)

## Tech Stack

Kebutuhan dasar :

- PHP >= 8.0
- MYSQL
- Composer and Nodejs

Tech Stack dari aplikasi :

- Laravel
- TailwindCSS
- AlpineJS
- Laravel Excel

## Instalasi

```bash
git clone htttps://github.com/azharisikumbang/perpustakaan
cd perpustakaan

composer install

# set database config in .env file
php artisan migrate --seed

# build the front end
npm install
npm run dev

# serve the app
php artisan serve

```
