---
id: 63bc55848e3922054822448e
title: "Install LAMP Server Ubuntu 16.04"
feature_image: /content/images/wordpress/2019/03/lampserver.jpg
description: "LAMP (Linux, Apache, Mysql, PHP) merupakan sebuah paket software yang sering dipergunakan untuk membuat konten web dinamis dengan basis…"
date: 2019-03-29
tags: posts
slug: install-lamp-server-ubuntu-16-04
layout: layouts/post.njk
---

<!--kg-card-begin: html-->
<p>LAMP (Linux, Apache, Mysql, PHP) merupakan sebuah paket software yang sering dipergunakan untuk membuat konten web dinamis dengan basis server linux. Setiap software mempunyai fungsi masing-msing.</p>



<p>Linux dalam halini ubuntu 16.04 berfungsi sebagai sistem operasi tempat berjalannya web server kita nanti.</p>



<p>Apache berfungsi seabgai web server.</p>



<p>Mysql sendiri berfungsi untuk manajemen database. Hal ini tentu sangat di butuhkan, mengingat web yang nantinya akan dibuat adalah web bersifat dinamis.</p>



<p>PHP, merupakan bahasa pemrograman yang akan kita gunakan. Tapi, perlu diingat selain PHP masih banyak lagi varian bahsa lainnya, seperti Perl, Python dan sebagainya.</p>



<h3>Langkah #1: Install Dan Konfigurasi Apache</h3>



<p>Perlu diingat, sebelum memulai install pastikan kita mengupdate terlebih untuk mendapatkan sftware terbaru,</p>



<pre class="wp-block-preformatted">sudo apt-get update
sudo apt-get upgrade</pre>



<p>Kemudian kita install web server apachenya,</p>



<pre class="wp-block-preformatted">sudo apt-get install apache2</pre>



<p>Setelah kita install silahkan cek instalasi dengan masuk ke browser dan ketikan,</p>



<pre class="wp-block-preformatted">http://ip_address_dari_linux</pre>



<h3>Langkah #2: Install Mysql Server</h3>



<p>Setelah web server apache, selanjutnya kita akan install database server, yaitu Mysql Server</p>



<pre class="wp-block-preformatted">sudo apt-get install mysql-server</pre>



<blockquote class="wp-block-quote"><p>Anda juga bisa menambahakan aplikaasi phpmyadmin, untuk memudahkan pengelolaan database.</p></blockquote>



<p>Kemudian, anda akan diminta memasukkna password root untuk mysql anda. Tentu saja silahkan buat password yang menurut anda aman. Tapi sebagai uji coba silahkan buat password yang mudah diingat, contoh <em>12345.&nbsp;</em></p>



<h3>Langkah #3: Menginstall PHP</h3>



<p>Sedikit berbeda dengan apache dan mysql, PHP membutuhkan paket tambahan untuk memaksimalkan kinerja web server anda nanti. Silahkan ikuti perintah berikut. Berwarna orange sebenarnya opsi.</p>



<pre class="wp-block-preformatted">sudo apt-get install php php-fpm php-pear libapache2-mod-php php-mbstring php-mysql php-curl php-cgi php-json</pre>



<p>Untuk versi PHP silahkan anda sesuaikan sesuai keinginan, perintah diatas akan secara otomatis mengistal versi stabil terakhir.</p>



<h3>Langkah #4: Mengecek Instalasi</h3>



<p>Kita telah menginstal semua keperluan untuk LAMP Server, tahap akhir kita perlu mengecek apakah kita sudah berhasil mengistall dengan baik.</p>



<p>Pertama, ita buat sebuah file .php terebih dahulu sebagai contoh tes.php</p>



<pre class="wp-block-preformatted">sudo apt-get install nano -y
cd /var/www/html/
sudo nano test.php</pre>



<blockquote class="wp-block-quote"><p>Perlu dicatat, pada sistem apache direktori default yang biasa dipakai untuk keperluan deploy itu berada di&nbsp;<strong>/var/www/html .&nbsp;</strong>Jadi, segala file kode php harusnya berada di direktori ini.</p></blockquote>



<p>Selanjutnya, untuk mengetahui apakah PHP kita bekerja dengan baik, silahkan ketikkan kode berikut sebagai percobaan.</p>



<pre class="wp-block-preformatted">&lt;?php
phpinfo();
?&gt;</pre>



<p>Silahkan simpan, dengan CTRL + X</p>



<p>Selanjutnya silahkan buka browser dengan ip server linux tadi.</p>



<pre class="wp-block-preformatted">http://ip_address_dari_linux/tes.php</pre>



<p>Sampai pda tahap ini, instalasi dasa untuk LAMP (atau Linux, Apache, Mysql, PHP) di ubuntu telah selesai. Untuk lebih mengasah kemampuan silahkan browsing lebih banyak lagi.</p>



<p>Sekian dan Semoga Bermanfaat.</p>
<!--kg-card-end: html-->
