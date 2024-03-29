---
id: 63bc55848e392205482244bb
title: "Tutorial MySQL : Membuat, Melihat Dan Menghapus Database"
feature_image: /content/images/wordpress/2019/11/Tutorial-MySQL-Memulai-dan-Konfigurasi-MySQL.png
description: "Sebelum memulai Tutorial MySQL bagian Membuat, Melihat Dan Menghapus Database diharapkan sudah memahami dasar dari database. Jika belum…"
date: 2019-11-30
tags: posts
slug: tutorial-mysql-membuat-melihat-dan-menghapus-database
layout: layouts/post.njk
---

<!--kg-card-begin: html-->
<p>Sebelum memulai Tutorial MySQL bagian Membuat, Melihat Dan Menghapus Database diharapkan sudah memahami dasar dari database. Jika belum silahkan cek di <a href="https://coretanit.com/mengenal-basis-data/">Mari Mengenal Basis Data</a>. Selain itu diharapkan juga sudah bisa <a href="https://coretanit.com/tutorial-mysql-memulai-dan-konfigurasi-mysql/">melakukan akses pada MySQL</a> pada command prompt atau cmd.</p>



<p>Langkah pertama silahkan masuk ke <strong>command prompt (cmd) </strong>atau terminal anda.</p>



<h2>Membuat Database Pada MySQL</h2>



<p>Kehadiran basis data pada sebuah program aplikasi seperti hal wajib. Kebanyakan aplikasi pasti akan menggunakan basis data untuk mengolah datanya. Pada umumnya aplikasi akan memakai satu basis data saja. Dimana basis data ini akan berisi beberapa tabel yang saling berhubungan satu sama lain.</p>



<p>Untuk membuat database cukup mudah,  yaitu dengan perintah</p>



<pre class="wp-block-preformatted">CREATE DATABASE nama_database;</pre>



<p>Sebagai contoh ktia membuat database dengan nama <code>buku_db</code></p>



<p>Jika tidak terjadi error seharusnya muncul respon seperti berikut ini. Pesan ini menandakan Query yang kita lakukan tidak salah.</p>



<pre class="wp-block-preformatted">Query OK, 1 row affected (1.05 sec)</pre>



<h3>Bagaimana Jika Database Sudah Ada?</h3>



<p>Hal ini sebenarnya akan sering anda temui jika sudah masuk development database yang lumayan banyak. Aggap saja di komputer atau laptop anda sudah ada banyak database, tau tau anda lupa setiap nama databasenya. Nah, jika tetap memaksakan query <code>CREATE DATABASE</code> akan menampilkan error database exists;</p>



<pre class="wp-block-preformatted">ERROR 1007 (HY000): Can't create database 'buku_db'; database exists</pre>



<p>Untuk menangani hal ini bisa dengan penambahan query  <code>IF NOT EXISTS</code> untuk memastikan bahwa database yang akan kita buat tidak terdaftar.</p>



<p>Seharusnya query membuat database sekarang seperti beriku ini</p>



<pre class="wp-block-preformatted">CREATE DATABASE <strong>IF NOT EXISTS</strong> buku_db;</pre>



<p>Query ini mempunyai maksud untuk membuat database dengan nama <code>buku_db</code> dengan catatan jika database sudah ada <em>skip </em>saja sedangkan jika tidak terdapat database maka buat database <code>buku_db</code>.</p>



<p>Selain itu dalam membuat database kita juga mengenal <strong>CARACTER SET </strong>dan <strong>COLLATION. </strong>Kedua hal ini dipergunakan sebagai standard dalam data pada database. Lebih jelasnya silahkan cek <a href="https://dev.mysql.com/doc/refman/8.0/en/charset.html">manual refrence MySQL</a></p>



<p>Sebagai contoh data yang akan kita masukkan dalam bentuk bahasa latin, arab, ataupun china maka kita perlu memasukkan Collation khusus untuk masing masing bahasa. Tapi jika data pada database yang kita olah hanya standar umum, seperti &#8216;A&#8217; atau &#8216;1&#8217; tentu cukup mengikuti bawaan atau tidak perlu dideklarasikan.</p>



<ul><li>Baca Juga : <a href="https://coretanit.com/">Memahami Character Set (Charset) dan Collation Pada MySQL</a></li></ul>



<p>Berikut perintah menyeting Charset dan collaction untuk database</p>



<pre class="wp-block-preformatted">CREATE DATABASE buku_db <strong style="color:red">CHARACTER SET utf8 COLLATE utf8_general_ci</strong>;</pre>



<p><em>Catatan : Mungkin Query diatas akan terjadi error karena database buku_db sudah ada.</em></p>



<p>Untuk melihat secara settingan untuk database yang telah dibuat bisa dengan perintah berikut.</p>



<pre class="wp-block-preformatted">SHOW CREATE DATABASE buku_db;</pre>



<pre class="wp-block-preformatted">+----------+------------------------------------------------------------------+
| Database | Create Database                                                  |
 +----------+------------------------------------------------------------------+
| buku_db  | CREATE DATABASE <code>buku_db</code> /*!40100 DEFAULT CHARACTER SET utf8 */ |
 +----------+------------------------------------------------------------------+
1 row in set (0.00 sec)</pre>



<h2>Melihat Daftar Database Pada MySQL </h2>



<p>Seperti sudah disinggung sebelumnya pada sebuah server database pasti akan terdapat lebih dari satu database. MySQL atau juga DBMS lain tentu menyediakan fitur untuk melihat seluruh daftar database.</p>



<p>Pada MySQL kita bisa menggunakan query <code>SHOW DATABASES;</code> untuk melihat daftar database. Dan jangan heran kok banyak database, perlu diketahui secara default MySQL mempunyai beberapa database. </p>



<pre class="wp-block-preformatted">SHOW DATABASES;</pre>



<pre class="wp-block-preformatted">+--------------------+ 
| Database           | 
+--------------------+ 
| <strong>buku_db</strong>            | 
| information_schema | 
| mysql              | 
| performance_schema | 
| phpmyadmin         | 
+--------------------+ 
5 rows in set (0.02 sec)  </pre>



<h2>Menggunakan Database Pada MySQL </h2>



<p>Setelah sebelumnya kita melihat daftar database yang tentunya lebih dari satu, tentu kita berfikir untuk bisa aktif pada database tertentu itu bagaimana?</p>



<p>Pada MySQL untuk bisa menggunakan sebuah database bisa dengan perintah</p>



<pre class="wp-block-preformatted">USE nama_database;</pre>



<p>Sebagai contoh untuk masuk ke database buku_db seharusnya,</p>



<pre class="wp-block-preformatted">USE buku_db;</pre>



<p>Diatas tadi kita mendengar istilah Charset dan Collation, nah untuk bisa mengetahui charset dan collation ini bisa dengan perintah</p>



<pre class="wp-block-preformatted">SELECT @@character_set_database as charset, @@collation_data ase as collation;</pre>



<p>Dan sesuai settigan diatas akan menghasilkan hasil seperti berikut ini</p>



<pre class="wp-block-preformatted">+---------+-----------------+
| charset | collation       |
+---------+-----------------+
| utf8    | utf8_general_ci |
+---------+-----------------+
1 row in set (0.03 sec)</pre>



<h2>Menghapus Tabel Pada MySQL</h2>



<p>Setelah kita mempelajari cara membuat database pada sub tutorial diatas, tentu kita juga perlu tau tentang bagaimana cara menghapus database juga. Anda harus hati hati untuk perintah yang satu ini karena berhubungan dengan menghapus secara keseluruhan data atau database. Dan, memang notabene nya database yang dihapus merupakan database yang sudah tidak digunakan lagi.</p>



<p>Untuk menghapus database kita menggunakan keyword <code>DROP</code>, sehingga query nya terbentuk menjadi</p>



<pre class="wp-block-preformatted">DROP DATABASE nama_database;</pre>



<p>sebagai contoh kita ingin menghapus database buku_db tadi, maka query seharusnya sebagai berikut</p>



<pre class="wp-block-preformatted">DROP DATABASE buku_db;</pre>



<p>Hampir sama seperti pembuatan database kita juga bisa melakukan pengkondisian jika database ada atau tidak dengan keyword <code>IF EXISTS</code>. Hal ini untuk mencegah terjadinya error jika seandainya kita melakukan penghapusan terhadap database yang memang tidak ada. </p>



<p>Dengan penambahan <code>IF EXISTS</code> seharusnya menjadi</p>



<pre class="wp-block-preformatted"> DROP DATABASE IF EXISTS buku_db; </pre>



<p>Dan apabila kita melihat database bisa kita temukan hasil bahwa <code>buku_db</code> telah berhasil dihapus.</p>



<pre class="wp-block-preformatted">SHOW DATABASES;</pre>



<pre class="wp-block-preformatted">+--------------------+ 
| Database           | 
+--------------------+ 
| information_schema | 
| mysql              | 
| performance_schema | 
| phpmyadmin         | 
+--------------------+ 
5 rows in set (0.02 sec) </pre>



<p>Mengenai Tutorial sederhana tentang MySQL untuk bagian Membuat, Melihat Dan Menghapus Database. Untuk langkah selanjutnya silahkan cek tutorial  <a href="https://coretanit.com">Tutorial MySQL : Mengubah (Alter) Tabel </a></p>



<p>Terima Kasihh..</p>
<!--kg-card-end: html-->
