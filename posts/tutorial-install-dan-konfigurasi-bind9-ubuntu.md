---
id: 63bc55848e392205482244ad
title: "Tutorial Install dan Konfigurasi Bind9 Ubuntu"
feature_image: /content/images/wordpress/2019/11/iamges20.jpg
description: "BIND(Berkeley Internet Name Domain)adalah server DNS yang paling umum digunakan di Internet, khususnya pada sistem operasi bertipe Unix…"
date: 2019-11-22
tags: posts
slug: tutorial-install-dan-konfigurasi-bind9-ubuntu
layout: layouts/post.njk
---

<!--kg-card-begin: html-->
<p>BIND(<em>Berkeley Internet Name Domain</em>)adalah server DNS yang paling umum digunakan di Internet, khususnya pada sistem operasi bertipe Unix yang secara&nbsp;<em>de facto</em>&nbsp;merupakan standar. Untuk lebih mendalami mungkin anda bisa cek di <a href="https://id.wikipedia.org/wiki/BIND">wikipedia</a> atau internet.</p>



<p>BIND awalnya dibuat oleh empat orang mahasiswa di CSRG Universitas California Berkeley dan pertama kali dirilis di dalam 4.3BSD. Paul Vixie kemudian meneruskan pengembangannya pada tahun 1988 saat bekerja di DEC. </p>



<p><strong>Baca Juga</strong> : <a href="https://coretanit.com/tips-trick/cara-mudah-install-xampp-windows/">Cara Mudah Install Xampp Windows</a></p>



<p>Berikut merupakan tutorial install bind9 </p>



<p><strong>Langkah #1 :&nbsp;</strong>Masuk dan login ke ubuntu.</p>



<p><strong>Langkah #2 :</strong>&nbsp;Update server ubuntu</p>



<pre class="wp-block-preformatted">sudo apt-get update</pre>



<p><strong>Langkah #3 :</strong>&nbsp;Install Bind9 ke ubuntu anda</p>



<pre class="wp-block-preformatted">sudo apt-get install bind9</pre>



<p><strong>Langkah #4 :</strong>&nbsp;Setelah Bind9 terinstall, Masuk ke direktori /etd/bind </p>



<pre class="wp-block-preformatted">sudo cd /etc/bind </pre>



<p><strong>Langkah #5 :</strong>&nbsp;Terlebih dahulu lihat isi direktori </p>



<pre class="wp-block-preformatted">sudo ls -al </pre>



<p><strong>Langkah #6 :</strong>&nbsp;Lihat file named.conf.local dan backup agar apabila terjadi kesalahan anda tidak perlu install ulang </p>



<pre class="wp-block-preformatted">sudo mv named.conf.local named.conf.local-backup </pre>



<p><strong>Laangkah #7 :</strong>&nbsp;Buat file named.conf.local baru dengan meng-copy file named.conf.default-zones </p>



<pre class="wp-block-preformatted"> sudo cp named.conf.defauls-zones named.conf.local </pre>



<p><strong>Langkah #8 :&nbsp;</strong>Masuk dan Edit file named.conf.local </p>



<pre class="wp-block-preformatted"> sudo nano named.conf.local </pre>



<p><strong>Langkah #9 :&nbsp;</strong>Hapus beberapa kalimat dan sisakan kalimat dibawah ini. </p>



<pre class="wp-block-preformatted"> zone "localhost"{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; type master;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; file"/etc/bind/db.local";<br>};<br>zone "127.in-addr.arpa"{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; type master;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; file "/etc/bind/db.127";<br>}; </pre>



<p><strong>Langkah #10 :&nbsp;</strong>Perhatikan setiap tulisan localhost , ubah seluruh tulisan tersebut ke domain anda , contoh kumbang.net dan 127 ganti menjadi ekor IP anda, contoh 92 </p>



<pre class="wp-block-preformatted"> zone "kumbang.net"{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; type master;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; file"/etc/bind/db.kumbang";<br>};<br>zone "92.in-addr.arpa"{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; type master;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; file "/etc/bind/db.92";<br>}; </pre>



<p> Simpan file CTRL + X , tekan Y </p>



<p><strong>Langkah #11 :&nbsp;</strong>&nbsp;Buat file db.domainanda dan db.ekoripanda, sebagai file pendukung untuk named.conf.local </p>



<pre class="wp-block-preformatted">sudo cp db.local db.kumbang<br>sudo cp db.127 db.92 </pre>



<p><strong>Langkah #12 :</strong>&nbsp;Masuk dan edit file db.kumbang </p>



<pre class="wp-block-preformatted"> Sudo nano db.kumbang </pre>



<p><strong>Langkah #13 :</strong>&nbsp;Ganti setiap tulisan localhost ke domain anda, kumbang.net, sehingga seperti ini </p>



<pre class="wp-block-preformatted">;
; BIND data file for local loopback interface
;
$TTL    604800
@       IN      SOA    kumbang.net. root.kumbang,net. (
                              1              ; Serial
                         604800         ; Refresh
                          86400          ; Retry
                        2419200        ; Expire
                         604800 )       ; Negative Cache TTL
;
@       IN      NS      ns.example.com.
@       IN      A       192.168.2.92 </pre>



<p>Simpan CTRL + X, tekan Y </p>



<p><strong>Langkah #14 :&nbsp;</strong>Masuk dan edit file db.92 </p>



<p>sudo nano db.92 <strong>Langkah #15 :</strong>&nbsp;Ganti lagi setiap tulisan localhost ke domain anda, sehingga,</p>



<pre class="wp-block-preformatted">;
; BIND data file for local loopback interface
;
$TTL    604800
@       IN      SOA    kumbang.net. root.kumbang,net. (
                              1              ; Serial
                         604800         ; Refresh
                          86400          ; Retry
                        2419200        ; Expire
                         604800 )       ; Negative Cache TTL
;
@       IN      NS      ns.example.com.
@       IN      A       192.168.2.92 </pre>



<p>Simpan CTRL + X,&nbsp; tekan Y </p>



<p><strong>Langkah #16 :</strong>&nbsp;Masuk ke file named.conf.options </p>



<pre class="wp-block-preformatted">sudo nano named.conf.options </pre>



<p>Cari tulisan di bawah ini </p>



<pre class="wp-block-preformatted">// forwarders&nbsp;{
//&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 0.0.0.0 ;
// };
dan,</pre>



<pre class="wp-block-preformatted">dnssec-validation auto;</pre>



<p>Dan edit hingga menjadi seperti ini : </p>



<pre class="wp-block-preformatted"> forwarders&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;8.8.8.8&nbsp;;
&nbsp;};</pre>



<p>dan baris berikut</p>



<pre class="wp-block-preformatted">dnssec-validation yes;</pre>



<p><strong>Langkah #17 :&nbsp;</strong>Restart Bind9 </p>



<pre class="wp-block-preformatted">sudo service bind9 restart </pre>



<p><strong>Langkah #18 :</strong>&nbsp;Masuk ke file /etc/resolv.conf , ganti name-server anda menjadi 127.0.0.1 </p>



<pre class="wp-block-preformatted">sudo nano /etc/resolv.conf </pre>



<p><strong>Langkah #19 :</strong>&nbsp;Restart Network anda dengan, </p>



<pre class="wp-block-preformatted">sudo /etc/init.d/networking restart </pre>



<p><strong>Langkah #20 :</strong>&nbsp;Ketikkan cmd dibawah ini, dan perhatikan apakah domain anda telah tersampbung ke ip anda, </p>



<pre class="wp-block-preformatted"> sudo dig kumbang.net </pre>



<p><strong>Langkah #21 :</strong>&nbsp;Konfigurasi selesai, </p>



<p>Demikian mengenai Tutorial Install Bind9. Untuk lebih mengoptimalkan anda mungkin bisa mengkolaborasikannya dengan web server, seperti apache ataupun nginx</p>



<p>Terima kasih&#8230;.. </p>
<!--kg-card-end: html-->
