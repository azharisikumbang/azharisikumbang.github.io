---
id: 63bc55848e392205482244d5
title: "Mengecualikan ads.txt dan robots.txt dari Apache htaccess"
feature_image: /content/images/wordpress/2021/02/Black-and-Red-Geometric-Technology-Keynote-Presentation.jpg
description: "Umumnya, sebuah website pasti akan memiliki dua file untuk menunjang ke-eksis-annya, yaitu ads.txt dan robots.txt. Tapi, seringkali dalam…"
date: 2021-02-20
tags: posts
slug: mengecualikan-ads-txt-dan-robots-txt-dari-apache-htaccess
layout: layouts/post.njk
---

<!--kg-card-begin: html-->
<p>Umumnya, sebuah website pasti akan memiliki dua file untuk menunjang ke-eksis-annya, yaitu ads.txt dan robots.txt. Tapi, seringkali dalam menambahkan kedua file ini terjadi masalah, yang umumnya terjadi adalah file ini tidak bisa ditampilkan dengan baik, bahkan menampilkan halaman tidak ditemukan.</p>



<p>Sekedar info, ads.txt merupakan metode sederhana, fleksibel, dan aman bagi penayang dan distributor untuk menyatakan siapa yang diizinkan untuk menjual inventaris mereka, meningkatkan transparansi bagi pembeli terprogram. (selengkapnya cek <a href="https://iabtechlab.com/ads-txt-about" target="_blank" rel="noreferrer noopener nofollow">di sini</a>) </p>



<p>Sedangkan robots.txt merupakan sebuah ketentuan bagi untuk mencegah mesin pencari atau robot<em> </em>web crawler dalam mengakses website kita, baik halaman tertentu atau seluruhnya. Tindakan pencegahan ini memang diperlukan agar halaman atau dokumen tertentu tidak terindeks ke publik. (selengkapnya cek <a href="https://id.wikipedia.org/wiki/Robots.txt" target="_blank" rel="noreferrer noopener">di sini</a>)</p>



<p>Baca Juga : <a href="https://coretanit.com/subnetting-cara-cepat-menghitung-subnet/" target="_blank" rel="noreferrer noopener">Subnetting: Cara Cepat Menghitung IP Subnet</a></p>



<p>Disini tidak akan dibahas tentang mendalam kedua file ini, tapi lebih ke solusi terhadap permasalahan kenapa kedua file ini tidak bisa ditampilkan secara semestinya di web kita.</p>



<p>Umumnya sebuah website di bangun berbarengan dengan dibuat nya sebuah file konfigurasi, bernama <code>htaccess</code>. File <code>htaccess</code> sendiri merupakan file yang meng-handle hal hal yang berhubungan dengan pengaksesan sebuah situs, seperti access control, redirecting dan sebagainya.</p>



<p>Sehubungan dengan digunakannya file ini, terkadang fitur redirecting malah menjadi isu, seperti permasalahan kita karena pada umumnya web modern yang di bangun dengan framework atau skeleton sudah menambahkan file ini beserta konfigurasinya. </p>



<p>Contohnya htaccess standard yang umum, </p>



<pre class="wp-block-preformatted">RewriteEngine On
# konfigurasi lain
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ index.php/$1 [L]
# konfigurasi lain</pre>



<p>Pada konfigurasi diatas seharusnya semua request dialihkan ke file <code>index.php</code>. Alhasil, file <code>ads.txt</code> dan <code>robots.txt</code> kita juga dialihkan kesana.</p>



<p>Solusinya cukup mudah, kita hanya perlu mengecualikan kedua file ini, atau karena sama sama berekestesi txt bisa sekalian saja.</p>



<p>Berikut konfigurasi yang bisa ditambahkan untuk menghandle kasus ini,</p>



<pre class="wp-block-preformatted">RewriteEngine On
# konfigurasi lain
RewriteRule ^robots.txt - [L] 
RewriteCond %{HTTPS} off
RewriteCond %{REQUEST_URI} !^/ads.txt
RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1 [R=301,L]
# konfigurasi lain</pre>



<p>Dengan kode diatas selain mengecualikan ads.txt, kita juga mengantisipasi terjadinya kasus dimana ads.txt hanya tersedia di protokol https, sementara di http malah mengembalikan 404.</p>



<p>Selain cara diatas masih banyak cara yang bisa dilakukan untuk mengatasi permasahalan ads.txt dan robots.txt yang tidak diload optimal, googling aja. </p>



<p>Sekian, terima kasih.</p>
<!--kg-card-end: html-->
