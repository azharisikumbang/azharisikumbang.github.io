---
id: 63bc55848e3922054822448d
title: "Mengatasi Error UUID Already Exists Di Virtual Box"
feature_image: /content/images/wordpress/2019/03/virtualbox123.jpg
description: "Masalah ini akan sering kita jumpai ketika kita ingin menggunakan satu buah virtual hard drive (vhd atau ekstensi lainnya seperti vdi) ke…"
date: 2019-03-29
tags: posts
slug: mengatasi-error-uuid-already-exists-di-virtual-box
layout: layouts/post.njk
---

<!--kg-card-begin: html-->
<p>Masalah ini akan sering kita jumpai ketika kita ingin menggunakan satu buah virtual hard drive (vhd atau ekstensi lainnya seperti vdi) ke dalam dua buah Virtual Machine. </p>



<p>Kesalahan ini muncul karena virtual box mendeteksi bahwa virtual hard drive yang akan kita gunakan, sebelumnya telah terdaftar di mesin kita. Oleh karena itu, kita butuh mendaftarkan ulang untuk mendapatkan indentitas nya sendiri, yaitu UUID baru.</p>



<p>Sebelumnya, apasih UUID ? UUID atau Universal Unique Identifier merupakan deretan angka dan huruf yang tersusun acak yang terdiri dari 128-bit yang diperuntukkan sebagai pengidntifikasi untuk setiap virtual mchine.</p>



<p>Sebenarnya ada cara mudah untuk mengatasi ini, yaitu dengan menghapus virtual machine (vm) sebelumnya. Ya, tentu itu bisa saja, tapi kasusnya kita ingin tetap punya kedua virtual machine itu berjalan.</p>



<p>Berikut cara merubah UUID di virtual box&#8230;</p>



<h3><strong>Langkah #1 : Buka Command Prompt (jika windows)</strong></h3>



<h3>Langkah #2: Masuk ke direktori virtualbox</h3>



<p>Setelh membuka cmd, sekarang kita pindah ke direktori virtualbox diinstall. Secara default windows, virtual box terinstal di <mark>C:\Program Files\Oracle\VirtualBox</mark></p>



<pre class="wp-block-preformatted">cd C:\Program Files\Oracle\VirtualBox</pre>



<h3>Langkah #3: Mendaftar UUID baru dengan VBOXMANAGE.EXE</h3>



<p>Selanjutnya, kita akan mendaftar UUID baru untuk virtual machine baru kita, cara dengan perintah</p>



<pre class="wp-block-preformatted">VBOXMANAGE.EXE internalcommands sethduuid “pathfilevhd”</pre>



<p>Dimana &#8220;pathfilevhd&#8221; merupakan lokasi dari vhd yang akan kita gunakan. Disini loksi vhd saya di <mark>D:\vbox\ubuntu16_2.vdi</mark> silahkan di sesuaikan.</p>



<blockquote class="wp-block-quote"><p>Jika muncu error silahkan coba tanpa tanda petik, karena pada beberapa versi terkadang tidak membutuhkan tanda petik</p></blockquote>



<pre class="wp-block-preformatted">VBOXMANAGE.EXE internalcommands sethduuid “D:\vbox\ubuntu16_2.vdi”</pre>



<h3>Langkah #4: Uji coba virtual machine</h3>



<p>Silahkan buat virtual machine baru di virtualbox dengan menggunakan VHD (atau ekstensi lainnya) yang baru di setting tadi.</p>



<p>Sekian dan semoga bermanfaat.</p>
<!--kg-card-end: html-->
