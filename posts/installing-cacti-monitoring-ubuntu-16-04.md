---
id: 63bc55848e39220548224490
title: "Installing Cacti Monitoring Ubuntu 16.04"
feature_image: /content/images/wordpress/2019/03/cacti2.png
description: "Monitoring server adalah hal mutlak dan sangat dibutuhkan untuk keperluan analisis dan sebagainya. Pada dasarnya ada banyak sekali apliksi…"
date: 2019-03-29
tags: posts
slug: installing-cacti-monitoring-ubuntu-16-04
layout: layouts/post.njk
---

<!--kg-card-begin: html-->
<p>Monitoring server adalah hal mutlak dan sangat dibutuhkan untuk keperluan analisis dan sebagainya. Pada dasarnya ada banyak sekali apliksi yang bisa kita pergunakan untuk keperluan ini. Salah satunya Cacti Monitoring.</p>



<p>Nah, cacti sendiri merupakan tool untuk monitoring server dengan yang berjalan dengan antarmuka website, lalu menampilkannya kedalam bentuk grafik-grafik. Dalam proses ini, cacti datang dengan bantuan tool bernama RRDTool, untuk monitoring, menyimpan, sampai pembentukan grafik. Sedangkan untuk monitoring lalu lintasnya, cacti membutuhkan bantuan SNMP sebagai protokol.</p>



<p>Sementara untuk fitur, cacti juga ditumpangi banyak sekali fitur monitoring, anda bisa memonitor jaringan, cpu, ram, storage, dan sebagainya.</p>



<h4>1. Instalasi RRDTool, SNMP, SNMPD</h4>



<p>Karena cacti membutuhkan tools ini untuk mengoptimalkan kinerjanya, silahkan install tool diatas. dengan perintah.</p>



<pre class="wp-block-preformatted">$ sudo apt-get update
$ sudo apt-get install rrdtool snmp snmpd -y</pre>



<h3>2. Instalasi Cacti</h3>



<p>Sesuai penjelsan diatas, cacti berjalan dengan mengunakan inteface website, oleh sebab itu kita sebelum mulai menginstall cacti pastikan anda sudah mempunyai LAMP (Linux, Apache, Mysql, PHP) Server.</p>



<p>Baca : <a href="https://coretanit.com/tips-trick/install-dan-konfigurasi-samba-file-server-ubuntu/">Install dan Konfigurasi Samba File Server Ubuntu</a></p>



<p>Setelah punya LAMP Server, kita mulai menginstal cacti. Berikut perintahnya</p>



<pre class="wp-block-preformatted">$ sudo apt-get install cacti cacti-spine -y</pre>



<p>Saat proses instalsi, kita akan berjumpan dengan wizard untuk opsi web server yang kita gunakan. Karena kita pake apache, jadi silahkan pilih</p>



<p><span style="font-size: inherit;">Setelah itu akan muncul wizard yang kedua, silahkan pilih YES, karena cacti membutuhkan database untuk menjalankan fungsinya. Opsi YES akan secara otomatis membuat sebuah database untuk </span></p>



<p><span style="font-size: inherit;">Selanjutnya anda akan diminta untuk mamasukkan password database anda, ya untuk d</span><span style="font-size: inherit;">an untuk konfirmasi,</span></p>



<p><span style="color: inherit; font-size: 1.56em; font-weight: 600;">3. Testing Cacti di web browser</span></p>



<p>Karena cacti berjalan di web, untuk mengetahui hasilnya tentu kita bisa akses di broswser. Dengan mengetikkan&nbsp;<span style="color: #800000;">http://alamat_ip_linux/cacti</span></p>



<pre class="wp-block-preformatted">http://192.168.200.200/cacti</pre>



<p>Kemudain akan muncul tampilan berikut, silahkan kik <strong>NEXT</strong></p>



<p><span style="font-size: inherit;">Kemudian akan ada opsi, </span><strong style="font-size: inherit;">New Install&nbsp;</strong><span style="font-size: inherit;">atau&nbsp;</span><strong style="font-size: inherit;">Upgrade,&nbsp;</strong><span style="font-size: inherit;">secara default piihan adalah new install. klik Next.</span></p>



<p><span style="font-size: inherit;">Setelah itu kan muncul jendela untuk memperlihatkan apakah paket paket tambahan telah terinstall di server. Klik Finish.</span></p>



<p><span style="font-size: inherit;">Kemudian, anda akan diminta memasukkan username dan password, secara default cacti memberikan,</span></p>



<p>username : admin<br>password : admin</p>



<p><span style="font-size: inherit;">Selanjutnya anda akan diminta untuk memasukkan pasword baru, tentu ini untuk keamanan, silahkan masukkan password ada.</span></p>



<p>Anda bisa menambahkan device yang ingin anda monitoring, tapi sebagai contoh kita akan memonitor server kita sendiri.</p>



<p>Kemudian anda akan masuk ke tampilan berikut, silahkan pilih&nbsp;<strong>graphs&nbsp;</strong>dan pada default tree, piliih <strong>Localhost.&nbsp;</strong></p>



<p>Cukup sekian unutk instalasi cacti.</p>



<p>Semoga bermanfaat.</p>
<!--kg-card-end: html-->
