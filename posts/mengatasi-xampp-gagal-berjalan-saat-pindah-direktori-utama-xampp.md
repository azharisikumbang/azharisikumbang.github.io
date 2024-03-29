---
id: 63bc55848e392205482244c1
title: "Mengatasi Xampp Gagal Berjalan Saat Pindah Direktori Utama Xampp"
feature_image: /content/images/wordpress/2019/11/xampp2.jpg
description: "Sebenarnya berjumpa dengan error saat instalasi maupun penggunaan xampp sendiri itu jarang, selama saya pakai nyaris tidak ada. Tapi, jika…"
date: 2020-01-03
tags: posts
slug: mengatasi-xampp-gagal-berjalan-saat-pindah-direktori-utama-xampp
layout: layouts/post.njk
---

<!--kg-card-begin: html-->
<p>Sebenarnya berjumpa dengan error saat instalasi maupun penggunaan xampp sendiri itu jarang, selama saya pakai nyaris tidak ada. Tapi, jika kalian adalah orang yang berjiwa penasaran, mau <em>obrak abrik </em>file config ataupun file lainnya dari xampp, pastilah akan bertemu dengan beberapa error dari xampp.</p>



<p>Bagi yang tak tahu apa itu Xampp, saya singgung sedikit, Xampp merupakan sebuah aplikasi yang telah terkompilasi untuk web development dimana didalam aplikasi ini sudah terisi terlebih dahulu beberapa komponen seperti PHP, Mysql, PHPmyadmin, Mercury dan sebagainya. Nah, bagi kalian yang belum mengenal XAMPP dan ingin memakai xampp bisa cek tutorial  <a href="https://coretanit.com/cara-mudah-install-xampp-windows/">Cara Install Xampp Windows</a>.</p>



<p>Kita kembali ke kasus, kasus ini sendiri saya temukan saat saya melakukan pindah direktori hasil install xampp saya. Pemindahan saya lakukan dari <code>D:/xampp</code> ke <code>C:/_/xampp</code>. <em>Catatan folder <code>_</code> <strong>abaikan saja</strong></em> karena merupakan tempat saya menaruh seluruh data saya di disk C.</p>



<p>Alasan saya pindah sendiri sendiri adalah karena disk D dan disk E mau saya gabungkan utnuk mendapatkan penyimpanan yang lebih besar, utnuk backup data sementara disana.</p>



<p>Terlepas dari tujuan tadi, perlu kita ingat dua hal yaitu lokasi awal xampp adalah di  <code>D:/xampp </code> dan lokasi baru adalah di <code>C:/_/xampp</code> , tentu bisa disesuaikan dengan kasus masing masing.</p>



<p>Nah, seharusnya bisa ditangkap dengan logika yang bahwa inti permasalahan adalah <strong>path dari xampp tidak ditemukan </strong>lagi, karena sudah berubah.</p>



<p>Jadi, secara langsung solusnya adalah merubah kembali seluruh path lokasi awal ke lokasi baru. Tapi caranya? Gasss tkp&#8230;</p>



<h2>Masuk Ke Xampp Control Panel</h2>



<p>Tahapan pertama silahkan masuk ke xampp control panel masing-masing dan boleh dicoba jalankan xampp, khususnya apache dan mysql karena kedua software ini yang paling sering digunakan.</p>



<figure class="wp-block-image size-large"><img loading="lazy" width="910" height="569" src="/content/images/wordpress/2020/01/image.png" alt="" class="wp-image-1199" srcset="/content/images/wordpress/2020/01/image.png 910w, http://localhost:2368/content/images/wordpress/2020/01/image-300x188.png 300w, http://localhost:2368/content/images/wordpress/2020/01/image-768x480.png 768w" sizes="(max-width: 910px) 100vw, 910px" /></figure>



<p>Pada pesan error ini memang diberikan pesan error tapi saya rasa hal ini kurang spesifik dimana lokasi error, tapi tidak apa karena nanti akan dibahas bagaimana cara mendapatkan error yang spesifik.</p>



<h2>Memperbaharui File Konfigurasi</h2>



<p>Seperti diketahui sebelumnya kegagalan itu terjadi karena path dari xampp tidak ditemukan lagi, untuk itu kita perlu<em> memberitahukan </em>xampp bahwa ada perubahan path baru yaitu di file konfigurasi.</p>



<p>Perlu diketahui ada banyak file konfigurasi yang akan dirubah, tentu silahkan disesuaikan dengan service yang dibutuhkan, karena pada kasus ini hanya terdapat apache, mysql dan mercury.</p>



<h3>File Konfigurasi Apache2</h3>



<p>Pada xampp control panel, silahkan pilih bagian config untuk apache pada bagian kanan start apache2,</p>



<figure class="wp-block-image size-large"><img loading="lazy" width="820" height="375" src="/content/images/wordpress/2020/01/xampp-apache-config.png" alt="" class="wp-image-1203" srcset="/content/images/wordpress/2020/01/xampp-apache-config.png 820w, http://localhost:2368/content/images/wordpress/2020/01/xampp-apache-config-300x137.png 300w, http://localhost:2368/content/images/wordpress/2020/01/xampp-apache-config-768x351.png 768w" sizes="(max-width: 820px) 100vw, 820px" /></figure>



<p>Bisa kita lihat ada beberapa file konfig yang berjalan dengan apache2 yaitu <code>httpd.conf</code>,  <code>httpd-ssl.conf</code>, <code>httpd-xampp.conf</code>, <code>php.ini</code>, dan <code>config.inc.php</code>. </p>



<p>Tentu masih ingat tugas kita pada setiap file konfig ini adalah merubah path utama dari xampp dari <code>D:/xampp</code> ke <code>C:/_/xampp</code> <em>(*silahkan sesuaikan)</em></p>



<h4>httpd.conf</h4>



<p>Silahkan pilih file httpd.conf dan edit menggunakan text editor masing-masing, seterusnya rubah seluruh tulisan <code>D:/xampp</code> ke <code>C:/_/xampp</code>. Untuk mempercepat silahkan gunakan fitur replace dan silahkan simpan.</p>



<figure class="wp-block-image size-large"><img loading="lazy" width="1024" height="576" src="/content/images/wordpress/2020/01/image-3-1024x576.png" alt="" class="wp-image-1206" srcset="/content/images/wordpress/2020/01/image-3-1024x576.png 1024w, http://localhost:2368/content/images/wordpress/2020/01/image-3-300x169.png 300w, http://localhost:2368/content/images/wordpress/2020/01/image-3-768x432.png 768w, http://localhost:2368/content/images/wordpress/2020/01/image-3.png 1366w" sizes="(max-width: 1024px) 100vw, 1024px" /></figure>



<p></p>



<h4>httpd-ssl.conf</h4>



<p>Hampir sama dengan file httpd.conf, silahkan rubah ke direktori baru xampp anda dan simpan.</p>



<figure class="wp-block-image size-large"><img loading="lazy" width="1024" height="576" src="/content/images/wordpress/2020/01/image-4-1024x576.png" alt="" class="wp-image-1209" srcset="/content/images/wordpress/2020/01/image-4-1024x576.png 1024w, http://localhost:2368/content/images/wordpress/2020/01/image-4-300x169.png 300w, http://localhost:2368/content/images/wordpress/2020/01/image-4-768x432.png 768w, http://localhost:2368/content/images/wordpress/2020/01/image-4.png 1366w" sizes="(max-width: 1024px) 100vw, 1024px" /></figure>



<p></p>



<h4>httpd-xampp.conf</h4>



<p>Untuk file ini juga sama silahkan ganti seluruh tulisan direktori lama dengan direktori baru dan simpan.</p>



<figure class="wp-block-image size-large"><img loading="lazy" width="1024" height="576" src="/content/images/wordpress/2020/01/image-5-1024x576.png" alt="" class="wp-image-1213" srcset="/content/images/wordpress/2020/01/image-5-1024x576.png 1024w, http://localhost:2368/content/images/wordpress/2020/01/image-5-300x169.png 300w, http://localhost:2368/content/images/wordpress/2020/01/image-5-768x432.png 768w, http://localhost:2368/content/images/wordpress/2020/01/image-5.png 1366w" sizes="(max-width: 1024px) 100vw, 1024px" /></figure>



<p></p>



<h4>php.ini</h4>



<p>Langkah yang sama juga pada file php.ini, <strong>tetapi</strong> ada sedikit perbedaan pada pembuatan pathnya. Pada path direktori menggunakan <strong>backslash</strong> atau &#8221; <strong>\</strong> &#8220;, sehingga menjadi berikut ini <code>D:\xampp</code> dan <code>C:\_\xampp</code> .</p>



<figure class="wp-block-image size-large"><img loading="lazy" width="1024" height="576" src="/content/images/wordpress/2020/01/image-6-1024x576.png" alt="" class="wp-image-1215" srcset="/content/images/wordpress/2020/01/image-6-1024x576.png 1024w, http://localhost:2368/content/images/wordpress/2020/01/image-6-300x169.png 300w, http://localhost:2368/content/images/wordpress/2020/01/image-6-768x432.png 768w, http://localhost:2368/content/images/wordpress/2020/01/image-6.png 1366w" sizes="(max-width: 1024px) 100vw, 1024px" /></figure>



<p>Sementara untuk file <code>config.inc.php</code> bisa <strong>dibiarkan saja</strong></p>



<h3>File Konfigurasi MySQL</h3>



<p>Setelah apache2 dikonfigurasi, lanjut ke MySQL dan dengan cara yang sama silahkan pilih config dan buka file konfig <code>my.ini</code></p>



<p>Silahkan replace tulisan <code>D:/xampp</code> dengan <code>C:/_/xampp</code></p>



<figure class="wp-block-image size-large"><img loading="lazy" width="1024" height="576" src="/content/images/wordpress/2020/01/image-7-1024x576.png" alt="" class="wp-image-1218" srcset="/content/images/wordpress/2020/01/image-7-1024x576.png 1024w, http://localhost:2368/content/images/wordpress/2020/01/image-7-300x169.png 300w, http://localhost:2368/content/images/wordpress/2020/01/image-7-768x432.png 768w, http://localhost:2368/content/images/wordpress/2020/01/image-7.png 1366w" sizes="(max-width: 1024px) 100vw, 1024px" /></figure>



<h3>File Konfigurasi Mercury</h3>



<p>Untuk bagian ini silahkan skip saja jika memang anda tidak memerlukan mercury ataupun service lain dari xampp.</p>



<p>Untuk memberikan path baru silahkan buka file <code>mercury.ini</code> pada bagian config dan replace dengan path baru masing-masing dan simpan.</p>



<figure class="wp-block-image size-large"><img loading="lazy" width="1024" height="576" src="/content/images/wordpress/2020/01/image-8-1024x576.png" alt="" class="wp-image-1219" srcset="/content/images/wordpress/2020/01/image-8-1024x576.png 1024w, http://localhost:2368/content/images/wordpress/2020/01/image-8-300x169.png 300w, http://localhost:2368/content/images/wordpress/2020/01/image-8-768x432.png 768w, http://localhost:2368/content/images/wordpress/2020/01/image-8.png 1366w" sizes="(max-width: 1024px) 100vw, 1024px" /></figure>



<h2>Jalankan Ulang Apache2 dan MySQL</h2>



<p>Untuk testing file konfig baru silahkan <em>start </em>lagi apache2 dan mysql (beserta service lain jika diperlukan) apakah sudah berhasil berjalan dengan normal atau tidak. Tapi, seharusnya sampai pada titik ini sudah normal kembali.</p>



<h2>Masih Error ?</h2>



<p>Konfigurasi yang kita buat diatas bisa jdi masih meninggalkan error, tapi seharusnya hanya ada pada apache2 bukan pada service lainnya. Dan konsepnya juga msih sama yaitu merubah path xampp baru kita, jadi jangan panik.</p>



<p>Dan sebagai saran silahkan masuk ke folder xampp baru anda tepatnya di apche2 extra, contoh saya di folder</p>



<pre class="wp-block-preformatted">C:\_\xampp\apache\conf\extra</pre>



<figure class="wp-block-image size-large"><img loading="lazy" width="895" height="502" src="/content/images/wordpress/2020/01/image-12.png" alt="" class="wp-image-1225" srcset="/content/images/wordpress/2020/01/image-12.png 895w, http://localhost:2368/content/images/wordpress/2020/01/image-12-300x168.png 300w, http://localhost:2368/content/images/wordpress/2020/01/image-12-768x431.png 768w" sizes="(max-width: 895px) 100vw, 895px" /></figure>



<p>Di folder <em>extra </em>bisa kita jumpai file-file konfigurasi milik apache2. Sebagai saran, silahkan ubah seluruh file config, pada bagian path direktori ke path direktori xampp baru karena harusnya masih mengikuti path lama terkecuali file yang sudah kitaa konfig dahulu  via xampp control.</p>



<p>Jika masih error silahkan masuk ke direktori xampp baru masing-masing dan jalankan xampp lewat file <strong>xampp-start.exe</strong>. </p>



<figure class="wp-block-image size-large"><img loading="lazy" width="729" height="317" src="/content/images/wordpress/2020/01/image-9.png" alt="" class="wp-image-1220" srcset="/content/images/wordpress/2020/01/image-9.png 729w, http://localhost:2368/content/images/wordpress/2020/01/image-9-300x130.png 300w" sizes="(max-width: 729px) 100vw, 729px" /></figure>



<p> Seperti yang disinggung diatas tadi dengan cara ini kita bisa mendapatkan error yang lebih spesifik. </p>



<p> Sebagai contoh saya menemukan 2 error yang muncul di xampp saya, </p>



<pre class="wp-block-preformatted">AH00526: Syntax error on line 28 of C:/_/xampp/apache2/conf/extra/httpd-multilang-error.conf  &lt;Directory "D:/xampp/apache/error"> path is invalid</pre>



<figure class="wp-block-image size-large"><img loading="lazy" width="674" height="337" src="/content/images/wordpress/2020/01/image-10.png" alt="" class="wp-image-1221" srcset="/content/images/wordpress/2020/01/image-10.png 674w, http://localhost:2368/content/images/wordpress/2020/01/image-10-300x150.png 300w" sizes="(max-width: 674px) 100vw, 674px" /></figure>



<p>Bisa kita lihat masing-masing bahwa path dari xampp kita masih berada di direktori lama yaitu D:/xampp. Solusinya yaa tinggal ganti dengan path xampp baru di file <code>C:/_/xampp/apache2/conf/extra/httpd-multilang-error.conf</code>.</p>



<p>Dan kemudian replace semua path lama dengan path baru</p>



<figure class="wp-block-image size-large"><img loading="lazy" width="1024" height="576" src="/content/images/wordpress/2020/01/image-11-1024x576.png" alt="" class="wp-image-1223" srcset="/content/images/wordpress/2020/01/image-11-1024x576.png 1024w, http://localhost:2368/content/images/wordpress/2020/01/image-11-300x169.png 300w, http://localhost:2368/content/images/wordpress/2020/01/image-11-768x432.png 768w, http://localhost:2368/content/images/wordpress/2020/01/image-11.png 1366w" sizes="(max-width: 1024px) 100vw, 1024px" /></figure>



<p>Silahkan jalankan kembali file xampp-start.exe dan lihat hasilnya. </p>



<p>Mungkin ada sebagian xampp miliknya sudha bisa berlajan normal, bagi yang belum silahkan cek error, sebagai contoh saya menjumpai error lagi.</p>



<pre class="wp-block-preformatted">AH00526: Syntax error on line 25 of C:/_/xampp/apache2/conf/extra/httpd-httpd-autoindex.conf 
&lt;Directory "D:/xampp/apache/error"> path is invalid </pre>



<p>Solusinya masih sama, silahkan masuk ke file <code>C:/_/xampp/apache2/conf/extra/httpd-httpd-autoindex.conf</code> dan replace path lama dengan path baru xampp masing-masing.</p>



<figure class="wp-block-image size-large"><img loading="lazy" width="1024" height="576" src="/content/images/wordpress/2020/01/image-13-1024x576.png" alt="" class="wp-image-1226" srcset="/content/images/wordpress/2020/01/image-13-1024x576.png 1024w, http://localhost:2368/content/images/wordpress/2020/01/image-13-300x169.png 300w, http://localhost:2368/content/images/wordpress/2020/01/image-13-768x432.png 768w, http://localhost:2368/content/images/wordpress/2020/01/image-13.png 1366w" sizes="(max-width: 1024px) 100vw, 1024px" /></figure>



<p>Coba jalankan ulang xampp-start.exe anda seharusnya sudah tidak ada lagi error.</p>



<figure class="wp-block-image size-large"><img loading="lazy" width="689" height="501" src="/content/images/wordpress/2020/01/image-14.png" alt="" class="wp-image-1227" srcset="/content/images/wordpress/2020/01/image-14.png 689w, http://localhost:2368/content/images/wordpress/2020/01/image-14-300x218.png 300w" sizes="(max-width: 689px) 100vw, 689px" /></figure>



<p>Tapi, jika masih menemukan error silahkan pahami pesan error dan cek lokasi untuk mengganti path xampp baru.</p>



<p><amp-fit-text layout="fixed-height" min-font-size="6" max-font-size="72" height="80">Terima Kasih..</amp-fit-text></p>
<!--kg-card-end: html-->
