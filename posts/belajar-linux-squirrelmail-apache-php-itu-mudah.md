---
id: 63bc55848e39220548224481
title: "Belajar Linux Squirrelmail Apache PHP Itu Mudah"
description: "Belajar linux Squirrelmail Apache PHP itu mudah, yah sesuai dengan judul artikel tersisip kata “mudah” , mungkin adalah kata yang cocok…"
date: 2017-03-13
tags: posts
slug: belajar-linux-squirrelmail-apache-php-itu-mudah
layout: layouts/post.njk
---

<!--kg-card-begin: html--><p>Belajar linux Squirrelmail Apache PHP itu mudah, yah sesuai dengan judul artikel tersisip kata <i>&#8220;mudah&#8221; </i>, mungkin adalah kata yang cocok untuk menggambarkan betapa mudah nya<br />
<a name="more"></a>bagi seorang yang mau untuk membuat sebuar mail server dengan linux. Baiklah, pertama Mail Server adalah<br />
sebuah penyedia layanan mail kepada para pengguna untuk memudah kan mereka untuk bertukar informasi pada sebuah koneksi. Penyedia layanan email sangat banyak kita temukan saat ini, seperti gmail, yahoo dan beberapa mail server lainnya. Namun, pernahkah anda berfikir untuk membaut mail server sendiri?<br />
Baiklahh, dalam pembuatan sebuat mail server kita membutuhkan beberapa software yaitu <i>Squirrelmail, Postfix, Courier-Imap </i>dan <i>Courier-Pop</i>.<br />
Tentu, hal pertama yang harus kita tahu adalah apa guna dan fungsi keempat software diatas, Squirrelmail adalah sebuah software layanan email yang digunakan sebagai sarana penampungan dan pengiriman pesan pesan  kita dengan sistem berbasis website, jadi kita bisa akses melauli browser. Postfix adalah agen pengantar email yang kita kirimkan pada sistem operasi linux ubuntu. Dan Courier-imap dan Courier-Pop adalah software yang digunakan untuk mengambil pesan email di server yang kita gunakan.<br />
Nah, setelah tahu tugas masing masing software kita mulai di konfigurasi<br />
<b>Langkah #1 : </b>Tentu langkah pertama yang kita lakukan adalah login ke ubuntu terlebih dahulu<br />
<b>Langkah #2 : </b>Setelah login, kita lakukan update sistem operasi ubuntu dengan yang baru</p>
<div>apt-get update</div>
<p><b>Langkah #3 :</b>Kemudian kita instal keeempoat software tadi</p>
<div>apt-get install squirrelmai postfix courier-imap courier-pop</div>
<p><b>Langkah #4 : </b>Configurasi Courier Base, pilih <b>No.</b></p>
<div style="text-align: center;"><b><a href="/content/images/wordpress/2017/03/Capture3.png"><img loading="lazy" title="squirrelmail1" src="/content/images/wordpress/2017/03/Capture3-300x224.png" alt="squirrelmail1" width="320" height="239" border="0" /></a> </b></div>
<p><b>Langkah #5 : </b>Berikutnya pilih <b>OK </b>pada Poxtfix Confoguration.</p>
<div style="text-align: center;"><a href="/content/images/wordpress/2017/03/Capture4.png"><img loading="lazy" title="squirrelmail2" src="/content/images/wordpress/2017/03/Capture4-300x225.png" alt="squirrelmail2" width="320" height="240" border="0" /></a></div>
<p><b>Langkah #6 : </b>Selanjutnya pilih <b>Internet Site.</b></p>
<div style="text-align: center;"><b><a href="/content/images/wordpress/2017/03/Capture5.png"><img loading="lazy" title="squirrelmail3" src="/content/images/wordpress/2017/03/Capture5-300x223.png" alt="squirrelmail3" width="320" height="238" border="0" /></a> </b></div>
<p><b>Langkah #7 : </b>Baut nama domain yang akan digunakan sebagai domain web, contoh saya menggunakan <b>mailku.id </b>pada System Mail Name. Tunggu Instalasi&#8230;..</p>
<div style="text-align: center;"><a href="/content/images/wordpress/2017/03/Capture6.png"><img loading="lazy" title="squirrelmail4" src="/content/images/wordpress/2017/03/Capture6-300x226.png" alt="squirrelmail4" width="320" height="240" border="0" /></a></div>
<p><b>Langkah #8 : </b>Selanjutnya kita ke konfigurasi postfix. Masuk ke file <b>main.cf</b></p>
<div>nano /etc/postfix/main.cf</div>
<p><b>Langkah #9 : </b>Pada file main.cf tambahkan konfiurasi berikut pada baris palingbawah</p>
<div>home_mailbox = Maildir/</div>
<p><b>Langkah #10 : </b>Selanjutnya kita buat direktori bernama<b> Maildir/ </b></p>
<div>maildirmake /etc/skel/Maildir</div>
<p><b>Langkah #11 :</b> Lalu, kita buat dua contoh user, satu sebagai sender dan lainnya sebagai receiver. contoh saya membuat <b>user1</b> dan <b>user2</b>.</p>
<p><b>Langkah #12 : </b>Konfigurasi domain <b>mailku.id </b>menggunakan bind9. Untuk tutorialnya telah saya buak di postingan sebelumnya. <a href="http://bang-kumbang.blogspot.co.id/2016/08/turial-install-bind9-ubuntu.html" target="_blank" rel="noopener noreferrer">Tutorial Install Bind9 Ubuntu</a> . Jadi saya tidak akan membahasnya lagi.<br />
<b>Langkah #13 : </b>Selanjutnya Kita ko konfigurasi Apache2, secara default apache2 telah terinstal bersama squirrelmail.</p>
<div>nano /etc/apache2/sites-available/default</div>
<p><b>Langkah #14 : </b>Tepat dibawah kalimat webmaster@localhost beri konfigurasi berikut.</p>
<div>ServerName mailku.id<br />
DocumentRoot /usr/share/squirrelmail</div>
<p><b>Langkah #15 : </b>Konfigurasi selesai.</p>
<p>Untuk saat ini konfigurasi mailserver telah selasai untuk uji coba, kita buka pada browser mailku.id selanjutnya akan muncul tampilan utama squirrelmail, silahkan login dan coba kirim pesan ke user lainnya. Dan terakhir cek pada user receiver apakah muncul pesan yang anda kriim tadi.</p>
<p>Dan Seperti kita ketahui bersama mail server juga bisa kita buat pada subdomain, contoh http://mail.kumbang.id dengan alasan apabila domain utama kita gunakan sebagai halaman lain.Untuk itu saya akan bahasa pada artikel berikutnya.</p>
<p>Sekian Artikel tentang Belajar Linux Squirrelmail Apache PHP. Mudah bukan? Semoga bermannfaat !</p>
<!--kg-card-end: html-->
