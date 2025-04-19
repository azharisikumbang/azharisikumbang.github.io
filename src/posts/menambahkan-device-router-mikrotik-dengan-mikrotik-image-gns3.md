---
id: 63bc55848e39220548224492
title: "Menambahkan Device Router Mikrotik Dengan Mikrotik Image GNS3"
feature_image: /content/images/wordpress/2019/04/GNS3.jpg
description: "Setelah pada artikel sebelumnya kita membuat file image mikrotik dengan menggunakan qemu pada gns3. Sekarang, kita akan mencoba untuk…"
date: 2019-04-01
tags: posts
slug: menambahkan-device-router-mikrotik-dengan-mikrotik-image-gns3
layout: layouts/post.njk
---

<!--kg-card-begin: html--><p>Setelah pada artikel sebelumnya kita <a href="https://coretanit.com/tips-trick/membuat-mikrotik-image-menggunakan-qemu-gns3/">membuat file image mikrotik dengan menggunakan qemu pada gns3</a>. Sekarang, kita akan mencoba untuk mengguanakan image mikrotik tersebut, sehigga kita bisa mempunyai router mikrotik sendiri.</p>
<p>Untuk cara menambahkan device router mikrotik dengan mikrotik image anda juga perlu menyiapkan beberapa kebutuhan berikut, yaitu software GNS3 dan image file dari mikrotik sebagai iso dari device yang akan kita buat.</p>
<p>Baca : <a href="https://coretanit.com/tips-trick/membuat-mikrotik-image-menggunakan-qemu-gns3/">Membuat Mikrotik Image Menggunakan Qemu GNS3</a></p>
<p>Langkah pertama, silahkan buka aplikasi GNS3 milik anda. Disini saya memakai GNS3 1.3.13 all-in-one x86, silahkan disesuaikan.</p>
<p>Setelah masuk ke ruang kerja GNS3 silahkan pilih menu <strong>edit -&gt; preferences </strong>atau <strong>CTRL + Shift + P</strong></p>
<p>Selanjutnya silahkan pilih <strong>QEMU VMs -&gt; New </strong>untuk menambahkan prangkat baru, lalu <strong>Next.</strong></p>
<p>Tahap selanjutnya, membuat nama device yang akan kita buat, contoh <strong>Mikrotik, </strong>lalu Next.</p>
<p>Kemudian, pilih Qemu binary, tapi secara default sudah terisi otomtis oleh GNS3, sementara untuk RAM silahkan disesuaikan, tapi buat saja <strong>256 MB</strong></p>
<p>Pada jendela selanjutnya silahkan borwse file image yang telah anda buat sebelumnya, jika belum silahkan dibuat terlebih dahulu.</p>
<p>Setelah file image sudah berhasil di buka, slesaikan dengan tombol <strong>finish </strong>dan <strong>OK.</strong></p>
<p>Sampai pada tahap ini, pembuatan devicetelah selesai tinggal pengujian saja. Untuk pengujian silahkan anda buat topologi berikut.</p>
<p>Pertama, pilih menu <strong>browse all device.</strong></p>
<p>Kemudian silahkan drag device yang baru kita buat tadi, yakni <strong>Mikrotik, </strong>beserta HUB dan 1 Host. Kemudian hubungkan. Sehingga terlihat seperti berikut.</p>
<p>Tahap selanjutnya silahkan <strong>Start.</strong></p>
<p>Kemudian <strong>Klik Kanan </strong>pda <strong>Mikrotik, </strong>dan pilih <strong>Show Console.</strong></p>
<p>Nah, hingga tagap pengujian semuanya berjalan lancar. Kini anda sudah punya mikrotik sendiri untuk eksperimen. Silahka ndipelajari lebih dalam lagi.</p>
<p>Sekian dan Semoga Bermanfaat.</p>
<!--kg-card-end: html-->
