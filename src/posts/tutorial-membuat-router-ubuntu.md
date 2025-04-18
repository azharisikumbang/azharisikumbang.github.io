---
id: 63bc55848e39220548224479
title: "Tutorial Membuat Router Ubuntu"
feature_image: /content/images/wordpress/2016/08/router-images.jpg
description: "Router adalah perangkat network yang digunakan untuk menghubungkan beberapa network, baik network yang sama maupun berbeda dengan tujuan…"
date: 2016-09-01
tags: posts
slug: tutorial-membuat-router-ubuntu
layout: layouts/post.njk
---

<!--kg-card-begin: html-->
<p>Router adalah perangkat network yang digunakan untuk menghubungkan beberapa network, baik network yang sama maupun berbeda dengan tujuan untuk saling berbagi data atau sumber daya.<br><a name="more"></a></p>



<p>Berikut adalah caranya,<br><b>Langkah #1</b> <b>:</b> Masuk dan Log in ke Ubuntu anda<br><b>Langkah #2 : </b>Pastikan terdapat 2 buah interface, Interface Public dan Interface Private<br><b>Langkah #3 : </b>Tentukan IP pada masing masing interface<br>IP Interface Public&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 192.168.2.1 (didapat dari internet)<br>IP Interface Private&nbsp;&nbsp;&nbsp;&nbsp; : 192.168.100.1 (tentukan sesuka hati)<br><b>Langkah #4 :</b> Lihat dulu nama kedua interface tadi,</p>



<pre class="wp-block-preformatted">sudo ifconfig –a|grep eth</pre>



<p>Maka akan muncul interface yang anda punya, misal<br>Eth0 untuk public dam Eth1 untuk private<br><b>Langkah #5 : </b>Masuk ke file konfigurasi IP</p>



<pre class="wp-block-preformatted">sudo nano /etc/network/interfaces</pre>



<p>Akan muncul isi file tersebut,<br><b>Langkah #6 : </b>Pada eth0 masukkan IP, Netmask, Broadcast, Nameserver, Gateway dan lainnya, sseperti dibawah ini,<br>Auto eth0</p>



<pre class="wp-block-preformatted">iface eth0 inet static  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; address 192.168.2.2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; netmask 255.255.255.0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; gateway 192.168.2.1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; network 192.168.2.0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; broadcast 192.168.2.225 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; dns-nameserver 8.8.8.8 </pre>



<p>Simpan CTRL + X, tekan Y</p>



<p><b>Langkah #7 :</b> Pada eth1 masukkan juga IP, Netmask, Broadcast, Network, dan lainnya</p>



<pre class="wp-block-preformatted">auto eth1</pre>



<pre class="wp-block-preformatted">Iface eth1 inet static
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; address 192.16.100.1
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; netmask 255.255.255.0
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; network 192.168.100.0
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; broadcast 192.168.100.255</pre>



<p>Simpan CTRL + X, Tekan Y</p>



<p><b>Langkah #8 : </b>Masuk ke file sysctl.conf</p>



<pre class="wp-block-preformatted">sudo nano /etc/sysctl.conf</pre>



<p><b>Langkah #9 :</b> Cari tulisan berikut dan hapus tanda “#” untuk mengaktifkan IP Forwarding<br>Cari</p>



<pre class="wp-block-preformatted">net.ipv4.ip_forward=1</pre>



<p>Menjadi</p>



<pre class="wp-block-preformatted">net.ipv4.ip_forward=1</pre>



<p>Simpan CTRL + X, tekan Y</p>



<p><b>Langkah #10 : </b>Masuk ke file resolv.conf</p>



<pre class="wp-block-preformatted">sudo nano /etc/resolv.conf</pre>



<p><b>Langkah #11 :</b> Ketikkan kalimat berikut pada bagian terbawah</p>



<pre class="wp-block-preformatted">IP TABLES –t nat –A POSTROUTING –o eth0 –j MASQUERADE</pre>



<p>Simpan CTRL + X, tekan Y</p>



<p><b>Langkah #11 : </b>Restart Networking</p>



<pre class="wp-block-preformatted">sudo /etc/init.d/networking restart</pre>



<p><b>Langkah #12 : </b>Test koneksi</p>



<pre class="wp-block-preformatted">ping google.com</pre>



<p><b>Langkah #13 : </b>Konfigurasi selasai, Router telah jadi di buat.</p>



<p>Demikian tentang &#8220;Tutorial Membaut Router Ubuntu&#8221;&#8230;.</p>



<p>Terima kasihh&#8230;..</p>
<!--kg-card-end: html-->
