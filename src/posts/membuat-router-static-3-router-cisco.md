---
id: 63bc55848e39220548224478
title: "Membuat Router Static 3 Router Cisco"
feature_image: /content/images/wordpress/2019/11/Untitled.png
description: "Static routing adalah sebuah router yang memiliki tabel routing statik yang di setting secara manual oleh para administrator…"
date: 2016-08-28
tags: posts
slug: membuat-router-static-3-router-cisco
layout: layouts/post.njk
---

<!--kg-card-begin: html-->
<p><span style="font-family: inherit;">Static routing&nbsp;adalah sebuah&nbsp;router&nbsp;yang memiliki tabel&nbsp;routing&nbsp;statik yang di setting secara manual oleh para administrator jaringan.&nbsp;Routing static pengaturan routing paling sederhana yang dapat dilakukan pada jaringan komputer.&nbsp; Menggunakan routing statik murni dalam sebuah jaringan </span><br><a name="more"></a><span style="font-family: inherit;">berarti mengisi setiap entri dalam&nbsp; forwarding&nbsp; table&nbsp; di&nbsp; setiap router yang berada di jaringan tersebut</span> <br>Berikut adalah tutorial nya,</p>



<h3><b>Langkah #1 : </b>Buat Topologi jaringan berikut</h3>



<figure class="wp-block-image size-large"><img loading="lazy" width="400" height="243" src="/content/images/wordpress/2019/11/Untitled.png" alt="" class="wp-image-880" srcset="/content/images/wordpress/2019/11/Untitled.png 400w, http://localhost:2368/content/images/wordpress/2019/11/Untitled-300x182.png 300w" sizes="(max-width: 400px) 100vw, 400px" /></figure>



<h3><b>Langkah #2 : </b>Tentukan IP untuk setiap interfaces</h3>



<p>Router0</p>



<pre class="wp-block-preformatted">se2/0 &nbsp;&nbsp;&nbsp; : 192.168.1.1/24
fa0/0 &nbsp;&nbsp;&nbsp; : 192.168.10.1/24
PC0 &nbsp;&nbsp;&nbsp;   : 192.168.10.2/24</pre>



<p>Router1</p>



<pre class="wp-block-preformatted">se2/0&nbsp;&nbsp;&nbsp; : 192.168.1.2/s
e3/0 &nbsp;&nbsp;&nbsp; : 192.168.2.1/24
fa0/0&nbsp;&nbsp;&nbsp; : 192.168.20.1/24
PC1&nbsp;&nbsp;&nbsp;   : 192.168.20.2/24 </pre>



<p>Router2</p>



<pre class="wp-block-preformatted">se3/0&nbsp;&nbsp;&nbsp; : 192.168.2.2/24
fa0/0&nbsp;&nbsp;&nbsp; : 192.168.30.1/24
PC2&nbsp;&nbsp;&nbsp;   : 192.168.30.2/24 </pre>



<h3><b>Langkah #3 :</b> Masuk ke Konfigurasi Router0 di CLI</h3>



<h4>Setting se2/0</h4>



<pre class="wp-block-preformatted">Router&gt;en
Router#conf t
Router(config)#int se2/0
Router(config-if)#ip add 192.168.1.1 255.255.255.0
Router(config-if)#no shut
Router(config-if)#exit </pre>



<h4>Setting fa0/0</h4>



<pre class="wp-block-preformatted">Router(config)#int fa0/0
Router(config-if)#ip add 192.168.10.1 255.255.255.0
Router(config-if)#no shut
Router(config-if)#exit </pre>



<h3><b>Langkah #4 :</b> Masuk ke Konfigurasi Router1 di CLI</h3>



<h4>Setting se2/0</h4>



<pre class="wp-block-preformatted">Router&gt;en
Router#conf t
Router(config)#int se2/0
Router(config-if)#ip add 192.168.1.2 255.255.255.0
Router(config-if)#no shut
Router(config-if)#exit </pre>



<h4>Setting fa0/0</h4>



<pre class="wp-block-preformatted">Router(config)#int fa0/0
Router(config-if)#ip add 192.168.20.1 255.255.255.0
Router(config-if)#no shut
Router(config-if)#exit </pre>



<h4>Setting se3/0</h4>



<pre class="wp-block-preformatted">Router&gt;en
Router#conf t
Router(config)#int se3/0
Router(config-if)#ip add 192.168.2.1 255.255.255.0
Router(config-if)#no shut
Router(config-if)#exit </pre>



<h3><b>Langkah #5 :</b> Masuk ke Konfigurasi Router3 di CLI</h3>



<h4>Setting se3/0</h4>



<pre class="wp-block-preformatted">Router&gt;en
Router#conf t
Router(config)#int se3/0
Router(config-if)#ip add 192.168.2.2 255.255.255.0
Router(config-if)#no shut 
Router(config-if)#exit </pre>



<h4>Setting fa0/0</h4>



<pre class="wp-block-preformatted">Router(config)#int fa0/0
Router(config-if)#ip add 192.168.30.1 255.255.255.0
Router(config-if)#no shut
Router(config-if)#exit </pre>



<h3><b>Langkah #6 :</b> Setting IP untuk setiap PC/Client berdasarkan gatewaynya</h3>



<h4>setting PC0</h4>



<pre class="wp-block-preformatted">Address &nbsp;&nbsp;&nbsp; : 192.168.10.2
Netmask&nbsp;&nbsp;&nbsp; : 255.255.255.0
Gateway&nbsp;&nbsp;&nbsp; : 192.168.10.1 </pre>



<h4>setting PC1</h4>



<pre class="wp-block-preformatted">Address &nbsp;&nbsp;&nbsp;: 192.168.20.2
Netmask&nbsp;&nbsp;&nbsp; : 255.255.255.0
Gateway&nbsp;&nbsp;&nbsp; : 192.168.20.1 </pre>



<h4>&nbsp;setting PC2</h4>



<pre class="wp-block-preformatted">Address &nbsp;&nbsp;&nbsp;: 192.168.30.2
Netmask&nbsp;&nbsp;&nbsp; : 255.255.255.0
Gateway&nbsp;&nbsp;&nbsp; : 192.168.30.1 </pre>



<h3><b>Langkah #7 : </b>Masukkan IP Route sebagai jaur berkomunikasi untuk setiap PC</h3>



<h4>Setting IP Route Router0 di CLI</h4>



<pre class="wp-block-preformatted">Router(config)#ip route 192.168.20.0 255.255.255.0 192.168.1.2
Router(config)#ip route 192.168.30.0 255.255.255.0 192.168.2.2
Router(config)#ip route 192.168.2.0 255.255.255.0 192.168.1.2&nbsp; </pre>



<h4>Setting IP Route Router1 di CLI</h4>



<pre class="wp-block-preformatted">Router(config)#ip route 192.168.10.0 255.255.255.0 192.168.1.1
Router(config)#ip route 192.168.30.0 255.255.255.0 192.168.2.2 </pre>



<h4>Setting IP Route Router2 di CLI</h4>



<pre class="wp-block-preformatted">Router(config)#ip route 192.168.10.0 255.255.255.0 192.168.1.1
Router(config)#ip route 192.168.20.0 255.255.255.0 192.168.2.1
Router(config)#ip route 192.168.1.0 255.255.255.0 192.168.2.1 </pre>



<h3><b>Langkah #8 : </b>testing networking </h3>



<p>Untuk melakukan testing networking silankan anda coba berkirim paket antar masing masing router atau pc, jika status reply maka konfigurasi aman dan suskes.</p>



<h3>Penjelasan settingan diatas sebagai berikut dan cara membuat IP route :</h3>



<ul><li>Jika anda melakukan konigurasi ip route di Router, maka perhatikan jalur jalur yangmyngkin dilewati oleh seluruh paket data yang mungkin akan datang ke Router. <br>Contoh : Kita mengirimkan paket data dari PC2 ke PC0, maka yang di lalui oleh data adalah</li><li>Interface Fa0/0(Network : 192.168.30.0) dan se3/0(IP : 192.168.2.2) di Router2, maka ip routenya adalah <code>Ip route 192.168.30.0 255.255.255.0 192.168.2.2</code></li><li>Setelah data di Router2, maka data akan mencari jalur selanjutnya ke PC0, yaitu melalui se3/0 di router2(Network : 192.168.2.0 )&nbsp; dan dilanjutkan ke se3/0 di router1 (Network : 192.168.2.0 ) dan seterusnya lewat ke jalur se2/0 (IP: 192.168.1.2) di Router1, maka ip routenya <code>Ip route 192.168.2.0 255.255.255.0 192.168.1.2</code>&nbsp;&nbsp;&nbsp; </li><li>Sekarang data di Interface se2/0 di router1, karena se2/0 router1 dan se2/0 route0 adalah satu network, maka secara otomatis keduanya telah terkoneksi, dan kita tidak perlu lagi mengetikkan ip route.</li><li>Data melewati Fa0/0 di router0 dan sampia di PC0</li><li>Demikian tentang membuat router static 3 router&#8230;</li></ul>



<p>Terima kasihh&#8230;..</p>
<!--kg-card-end: html-->
