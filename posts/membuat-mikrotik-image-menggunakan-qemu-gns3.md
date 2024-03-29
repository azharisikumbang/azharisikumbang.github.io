---
id: 63bc55848e39220548224491
title: "Membuat Mikrotik Image Menggunakan Qemu GNS3"
feature_image: /content/images/wordpress/2019/04/qemu.png
description: "Sebelum mulai membuat image dari mikrotik dengan qemu, ada baiknya kita mengenal beberapa istilah yang mungkin agak asing bagi anda. Kita…"
date: 2019-04-01
tags: posts
slug: membuat-mikrotik-image-menggunakan-qemu-gns3
layout: layouts/post.njk
---

<!--kg-card-begin: html--><p>Sebelum mulai membuat image dari mikrotik dengan qemu, ada baiknya kita mengenal beberapa istilah yang mungkin agak asing bagi anda. Kita mulai,</p>
<p>Pertama Mikrotik (Mikrotikls), merupakan sebuah perusahaan yang berbasis di Latvia, Eropa yang memproduksi perangkat router yang sering disebuat RouterBoard dan beserta sistem operasinya yang disebut RouterOS. Nah, perlu dicatat, Mikrotik atau Mikrotikls sebenarnya nama perusahaan, sedangkan produk yang mereka pasarkan RouterBoard dan RouterOS.</p>
<p>Qemu, merupakan singkatan dari Quick Emulator yaitu emulator berbasis open-source untuk keperluan virtualisasi. Jadi, dengan Qemu, kita bisa dengan sesuka hati bereksperimen karena yang kita buat bersifat virtual.</p>
<p>GNS3, atau Graphical Network Simulator merupakan aplikasi virtualisasi untuk jaringan dengna basis GUI dengan menggunakan sistem operasi yang real. Jika pernah memakai Cisco Packet Tracer, maka cara kerjanya sebenarnya hampir sama.</p>
<h3>Memulai</h3>
<p>Terdapat beberapa hal yang harus anda punya sebelum melakukan hal ini. Ya, hal itu adalah hal diatas. Berikut daftarnya.</p>
<ul>
<li>Mikrotik RouterOS (ex. <a id="file-link" tabindex="0" role="link" href="https://download.mikrotik.com/routeros/6.43.13/mikrotik-6.43.13.iso">mikrotik-6.43.13.iso</a>) atau <a href="https://mikrotik.com/download">disini</a></li>
<li>GNS3 1.3.13 all-in-one</li>
<li>Qemu 0.11.0, biasanya sudah terinstall bersama dengan GNS3</li>
</ul>
<h3>Membuat Image dengan Qemu</h3>
<p>Setelah punya kebutuhan diatas sekarang saatnya kita mulai menggunakan qemu untuk membuat file image.</p>
<p>Langkah pertama, silahkan <strong>buka cmd pada windows</strong></p>
<p>Setelah itu silahkan masuk ke folder instalasi qemu anda di folder GNS3, secara default berada di <strong>C:\Program Files\GNS3\</strong><strong>qemu-0.11.0</strong></p>
<pre>cd C:\Program Files\GNS3\qemu-0.11.0</pre>
<p>Setelah masuk ke folder GNS3 nya, waktu nya membuat file image dengan menggunakan qemu-img.exe dengan perintah</p>
<pre>qemu-img.exe create -f qcow2 D:\mikrotik-643.img 256M</pre>
<p>Perlu diketahui,</p>
<ul>
<li><strong>qemu-img.exe, </strong>merupakan aplikasi yang berfungsi untuk membuat file image</li>
<li><strong>create, </strong>merupakan opsi dari qemu-img.exe yang berfungsi untuk membuat file image</li>
<li><strong>-f, </strong>merupakan opsi untuk memaksa qemu membuat file image</li>
<li><strong>qcow2, </strong>merupakan format untuk file image, selain <strong>qcow2 </strong>ada juga <strong>qcow</strong>. (qcow=qemu copy on write)</li>
<li><strong>D:\mikrotik-643.img, </strong>merupakan nama file image yang akan kita buat. Jadi, seharusnya hasilnya bisa kita lihat di D:\mikrotik-643.img</li>
<li><strong>256M,</strong> merupakan ukuran memori</li>
</ul>
<p>Setelah membuat file image, selanjutnya kita mengisi file image tersebut dengan iso dari mikrotik yang telah di downlod tadi. Untuk mempermudah silahkan salin file mikrotik-6.43.13.iso di Drive D. Sehingga path dari iso menjadi <strong style="font-size: inherit;">D:\mikrotik-6.43.13.iso</strong></p>
<pre>qemu.exe D:\mikrotik-643.img -boot d -cdrom D:\mikrotik-6.43.13.iso</pre>
<ul>
<li><strong>qemu.exe, </strong>merupakan aplikasi qemu untuk mengisi file image dengan fiel iso.</li>
<li><strong>D:\mikrotik-643.img, </strong>merupakan file image yang baru kita buat tadi</li>
<li><strong>-boot d -cdrom,</strong> menginstruksikan untuk boot melalui cdrom</li>
<li><strong>D:\mikrotik-6.43.13.iso, </strong>merupakan iso mikrotik untuk file image</li>
</ul>
<p>Setalah itu akan muncul jendela booting untuk file image nya.</p>
<p>Anda akan dihadapkan beberapa pilihan fitur, silahkan pilih fitur-fitur apa saja yang ingin anda gunakan. Anda akan dihadapkan beberapa pilihan fitur. Tapi, jika anda menginkan semua fitur silahkan tekan <strong>a</strong>, untuk menyeleksi semua.</p>
<p>Kemudian tekan <strong>i </strong>untuk install.</p>
<p>Kemuddian tekan <strong>enter </strong>untuk menyelesiakan booting.</p>
<p>Sampai pada tahap ini pembuatan image file sebenarnya telah selesai, tinggal pemakaiaannya pada aplikasi seperti GNS3 yang akan dibahas pada artikel beriutnya.</p>
<p>Sekian dan Terima Kasih.</p>
<!--kg-card-end: html-->
