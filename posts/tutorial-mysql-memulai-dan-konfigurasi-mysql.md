---
id: 63bc55848e392205482244ba
title: "Tutorial MySQL : Memulai dan Konfigurasi MySQL"
feature_image: /content/images/wordpress/2019/11/Tutorial-MySQL-Memulai-dan-Konfigurasi-MySQL.jpg
description: "MySQL sebagai salah satu Database Management System seringkali menjadi lirikan para developer untuk mengolah databasenya. Pada tutorial ini…"
date: 2019-11-30
tags: posts
slug: tutorial-mysql-memulai-dan-konfigurasi-mysql
layout: layouts/post.njk
---

<!--kg-card-begin: html-->
<p>MySQL sebagai salah satu Database Management System seringkali menjadi lirikan para developer untuk mengolah databasenya. Pada tutorial ini akan dipelajari beberapa tutorial tentang penggunaan MySQL sebagai pengolah database.</p>



<ul><li>Baca Juga : <a href="https://coretanit.com/mengenal-basis-data/">Mari Mengenal Basis Data</a></li></ul>



<p>Sebelum lompat ke tutorial pastikan telebih dahulu di komputer anda sudah terinstall software MySQL. Jika belum silahlan download di situs resmi MySQL di  <a href="https://dev.mysql.com/downloads/mysql/">https://dev.mysql.com/downloads/mysql/</a>. </p>



<figure class="wp-block-image size-large"><img loading="lazy" width="801" height="633" src="/content/images/wordpress/2019/11/images1-2.png" alt="Tutorial MySQL : Memulai dan Konfigurasi MySQL - view siturs Mysql.com" class="wp-image-1064" srcset="/content/images/wordpress/2019/11/images1-2.png 801w, http://localhost:2368/content/images/wordpress/2019/11/images1-2-300x237.png 300w, http://localhost:2368/content/images/wordpress/2019/11/images1-2-768x607.png 768w" sizes="(max-width: 801px) 100vw, 801px" /></figure>



<p>Selain opsi download anda juga bisa menggunakan MySQL yang sudah terpaket dengan software paketan seperti XAMPP, WAMPP dan sebagainya. Pada software ini sudah <em>terbundle </em>software software web development seperti Apache, MySQL,PHP. </p>



<ul><li>Baca Juga :  <a href="https://coretanit.com/cara-mudah-install-xampp-windows/">Cara Mudah Install Xampp Windows</a></li></ul>



<p>Saya sarankan jika anda ingin benar -benar berkecimpung pada setiap tahapan instalasi dan penyuka <em>keribetan </em>ataupun hanya belajar MySQL saja (stand-alone) tanpa mempedulikan yang lain seperti PHP dan sebagainya silahkan install MySQL tadi. </p>



<p>Tetapi jika anda menargetkan untuk mempelajari web programming secara keseluruhan saya sarankan anda menginstall XAMPP atau software paket bundle lainnya. Karena pada ujung-ujungnya akan kesana juga..</p>



<h3>Menjalankan MySQL</h3>



<p>Setelah mempunyai MySQL silahkan masuk ke command prompt, atau jika anda dengan XAMPP silahkan ke XAMPP Control dan pilih shell. Kemudian ketikkan perintah</p>



<pre class="wp-block-preformatted">mysql -u root</pre>



<p>Atau jika gagal silahkan masuk lewat command prompt ke folder instalasi MySQL folder <code>bin</code> dan silahkan ketikkan</p>



<pre class="wp-block-preformatted">./mysql.exe -u root</pre>



<p>Perlu diketahui difolder MySQL akan ditemui beberapa file seperti</p>



<ul><li><strong>my.ini </strong>merupakan file konfigurasi dari MySQL</li><li><strong>mysqld.exe</strong> merupakan file untuk menjalankan <em>MySQL Server</em></li><li><strong>mysql.exe</strong> merupakan file untuk menjalankan <em>MySQL Client</em></li></ul>



<p>Jika berhasil masuk seharusnya anda mendapati pesan sukses dan informasi mengenai MySQL yang berjalan.</p>



<figure class="wp-block-image size-large"><img loading="lazy" width="674" height="173" src="/content/images/wordpress/2019/11/images2-1.png" alt="Tutorial MySQL : Memulai dan Konfigurasi MySQL - view command prompt" class="wp-image-1066" srcset="/content/images/wordpress/2019/11/images2-1.png 674w, http://localhost:2368/content/images/wordpress/2019/11/images2-1-300x77.png 300w" sizes="(max-width: 674px) 100vw, 674px" /><figcaption>*mysql dengan XAMPP</figcaption></figure>



<p>Tak usah pusingkan tentang baris-baris tulisan yang muncul, untuk lebih meyakinkan bahwa MySQL berjalan silahkan cek list databases dengan perintah.</p>



<pre class="wp-block-preformatted">show databases;</pre>



<p>Pada MySQL anda akan menampilkan beberapa databases, sekali lagi tak usah pusingkan database apa saja itu. Penting Jalan dulu.</p>



<figure class="wp-block-image size-large"><img loading="lazy" width="674" height="339" src="/content/images/wordpress/2019/11/images3.png" alt="Tutorial MySQL : Memulai dan Konfigurasi MySQL - view show databases" class="wp-image-1067" srcset="/content/images/wordpress/2019/11/images3.png 674w, http://localhost:2368/content/images/wordpress/2019/11/images3-300x151.png 300w" sizes="(max-width: 674px) 100vw, 674px" /><figcaption>*daftar databases pada komputer saya</figcaption></figure>



<h3>File Konfigurasi my.ini</h3>



<p>Jika anda ingin sedikit bereksperimen dengan konfigurasi bawaan dari mysql, anda bisa memodifikasi settingan bawaan dari mysql, seperti port, socket, buffer, basedir dan sebagainya.</p>



<p>Tentu dalam memodifikasi dibutuhkan pemahaman lebih untuk mengubah ini karena akan menimbulkan error jika terjadi kesalahan konfigutasi. </p>



<figure class="wp-block-image size-large"><img loading="lazy" width="979" height="550" src="/content/images/wordpress/2019/11/image-2.png" alt="Tutorial MySQL : Memulai dan Konfigurasi MySQL - view file config.ini" class="wp-image-1070" srcset="/content/images/wordpress/2019/11/image-2.png 979w, http://localhost:2368/content/images/wordpress/2019/11/image-2-300x169.png 300w, http://localhost:2368/content/images/wordpress/2019/11/image-2-768x431.png 768w" sizes="(max-width: 979px) 100vw, 979px" /><figcaption>Penampakan File my.ini</figcaption></figure>



<p>Jika belum benar memahami tentang file my.ini disarankan untuk tidak mengganggu gugat file konfigurasi bawaan atau bisa juga dengan melakukan backup pada file ini.</p>



<p>Demikian tutorial pembuka pada series Tutorial MySQL bagian Memulai dan Konfigurasi MySQL.</p>



<p>Terima Kasih..</p>
<!--kg-card-end: html-->
