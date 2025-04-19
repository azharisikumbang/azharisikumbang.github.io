---
id: 63bc55848e3922054822448a
title: "Memadukan Firewall Mangle dan Simple Queue"
feature_image: /content/images/wordpress/2017/05/1-18.jpg
description: "Mikrotik menyediakan suati fitur Firewall dan Queue. Firewall sendiri adalah fitur yang digunakan untuk melakukan pembatasan terhadap akses…"
date: 2017-05-19
tags: posts
slug: memadukan-firewall-mangle-dan-simple-queue
layout: layouts/post.njk
---

<!--kg-card-begin: html--><p>Mikrotik menyediakan suati fitur Firewall dan Queue. Firewall sendiri adalah fitur yang digunakan untuk melakukan pembatasan terhadap akses yang berinteraksi dengan router.<br />
<a name="more"></a>Sedangkan, Queue adalah salah satu fitur yang digunakan untuk melakukan limitasi bandwidth jaringan. Dalam pembahasan ini saya akan memadukan kedua fitur ini. Saya akan memakin firewall Mangle dan Simple Queue.</p>
<p>Firewall Mangle adalah salah satu bagian dari Firewall yang didefenisikan untuk melakukan penandaan atau marking terhadap paket yang berinteraksi dalam jaringan. Dan Simple Queue sendiri merupakan fitur limitasi yang hanya ditujukan untuk satu koneksi atau user dan biasanya pada skala kecil.</p>
<div style="clear: both; text-align: center;"><a style="margin-left: 1em; margin-right: 1em;" href="/content/images/wordpress/2017/05/1-18.jpg"><img loading="lazy" src="/content/images/wordpress/2017/05/1-18-300x203.jpg" width="320" height="216" border="0" /></a></div>
<h3>Konfigurasi Firewall Mangle</h3>
<p>Seperti yang telah di jelaskan diatas firewall mangle berfungsi menandai setiap paket yang berinteraksi dengan router. Perlu anda ingat, ada 6 chain pada firewall mangle <i>forward, input, output, postrouting, prerouting dan custom chain. </i></p>
<div style="clear: both; text-align: center;"><a style="margin-left: 1em; margin-right: 1em;" href="/content/images/wordpress/2017/05/Untitled1.png"><img loading="lazy" src="/content/images/wordpress/2017/05/Untitled1-300x240.png" width="320" height="256" border="0" /></a></div>
<div style="clear: both; text-align: center;"></div>
<p>Kembali ke konfigurasi, langkah pertama masuk ke menu <i>IP &#8211; Firewall. </i><br />
<i><br />
</i></p>
<div style="clear: both; text-align: center;"><a style="margin-left: 1em; margin-right: 1em;" href="/content/images/wordpress/2017/05/Untitled1-1.png"><img loading="lazy" src="/content/images/wordpress/2017/05/Untitled1-1-300x240.png" width="320" height="256" border="0" /></a></div>
<p><i><br />
</i> Pilih tanda ADD <code> + </code> pada table mangle dan pilih tab <code> General </code> dan Lakukan Setting Berikut, atau sesuia kehendak anda.</p>
<div style="clear: both; text-align: center;"><a style="margin-left: 1em; margin-right: 1em;" href="/content/images/wordpress/2017/05/Untitled1-2.png"><img loading="lazy" src="/content/images/wordpress/2017/05/Untitled1-2-300x240.png" width="320" height="256" border="0" /></a></div>
<div style="clear: both; text-align: center;"></div>
<p><b><br />
</b> <b>Penjelasan : </b></p>
<ul>
<li><b>Chain &#8211; Prerouting</b> <b>: </b>Menandai paket berdasarkan chain prerouting, artinya setiap paket yang masuk ke router.</li>
<li><b>Protocol &#8211; TCP : </b>Protokol yang dipakai adalah TCP artinya semua paket TCP kita tandai.</li>
<li><b>Dst Port &#8211; 80, 8080, 433 : </b>Kita menandari setiap paket dengan tujuan 80, 8080, dan 433 (Port Browser/ HTTP &#8211; HTTPS)</li>
<li><b>In Interface &#8211; Ether2 : </b>Menandai paket di interface ether2.</li>
</ul>
<p>Selanjutnya pilih tab <code>Advance</code> dan pilih content serta isikan dengan content yang ingin anda tandai nantinya.</p>
<div style="clear: both; text-align: center;"><a style="margin-left: 1em; margin-right: 1em;" href="/content/images/wordpress/2017/05/Untitled1-3.png"><img loading="lazy" src="/content/images/wordpress/2017/05/Untitled1-3-300x240.png" width="320" height="256" border="0" /></a></div>
<p>Langkah selanjutnya pilih tab <code>action</code> dan pilih <code>mark-connection</code> dan buat nama tanda koneksinya</p>
<div style="clear: both; text-align: center;"><a style="margin-left: 1em; margin-right: 1em;" href="/content/images/wordpress/2017/05/Untitled1-4.png"><img loading="lazy" src="/content/images/wordpress/2017/05/Untitled1-4-300x240.png" width="320" height="256" border="0" /></a></div>
<div style="clear: both; text-align: center;"></div>
<p>Kita telah menandai koneksinya dengan nama <code>download-conn</code> selanjutnya membuat penandaan paket <code>mark-packet</code></p>
<div style="clear: both; text-align: center;"><a style="margin-left: 1em; margin-right: 1em;" href="/content/images/wordpress/2017/05/Untitled1-5.png"><img loading="lazy" src="/content/images/wordpress/2017/05/Untitled1-5-300x240.png" width="320" height="256" border="0" /></a></div>
<div style="clear: both; text-align: center;"></div>
<p>Lakukan setting diatas dan dan masuk ke tab <code>action</code> pilih <code>mark-packet</code> dan buat nama mark-packet nya seta hapus tanda checklist <code>passthrough</code></p>
<div style="clear: both; text-align: center;"><a style="margin-left: 1em; margin-right: 1em;" href="/content/images/wordpress/2017/05/Untitled1-6.png"><img loading="lazy" src="/content/images/wordpress/2017/05/Untitled1-6-300x240.png" width="320" height="256" border="0" /></a></div>
<p><code>Apply</code> dan <code>OK</code></p>
<div style="clear: both; text-align: center;"><a style="margin-left: 1em; margin-right: 1em;" href="/content/images/wordpress/2017/05/Untitled1-7.png"><img loading="lazy" src="/content/images/wordpress/2017/05/Untitled1-7-300x240.png" width="320" height="256" border="0" /></a></div>
<h3>Konfigurasi Simple Queque</h3>
<p>Setelah kita selesai dari penandaan paket selanjutnya kita melakukan limitasi bandwidth terhadap paket yang sudah kita tandai tadi. Kali ini saya menggunakan simple queue. Langsung saja ke TKP, monggo mas..</p>
<p>Pertama, masuk ke menu <code>Queue</code> dan Pilih Add <code>+</code> dan pilih tab <code>general</code></p>
<div style="clear: both; text-align: center;"><a style="margin-left: 1em; margin-right: 1em;" href="/content/images/wordpress/2017/05/Untitled1-8.png"><img loading="lazy" src="/content/images/wordpress/2017/05/Untitled1-8-300x240.png" width="320" height="256" border="0" /></a></div>
<p>Dilanjutkan dengan pembuatan nama, disina saya membuat nama <code>queue1</code> karena gak mau repot hehehe</p>
<div style="clear: both; text-align: center;"><a style="margin-left: 1em; margin-right: 1em;" href="/content/images/wordpress/2017/05/Untitled1-9.png"><img loading="lazy" src="/content/images/wordpress/2017/05/Untitled1-9-300x240.png" width="320" height="256" border="0" /></a></div>
<p>Selanjutnya, kita memasukkan mark packet tadi ke queue kita dan apply &#8211; oke</p>
<div style="clear: both; text-align: center;"><a style="margin-left: 1em; margin-right: 1em;" href="/content/images/wordpress/2017/05/Untitled1-10.png"><img loading="lazy" src="/content/images/wordpress/2017/05/Untitled1-10-300x245.png" width="320" height="260" border="0" /></a></div>
<div style="clear: both; text-align: center;"></div>
<div style="clear: both; text-align: center;"><a style="margin-left: 1em; margin-right: 1em;" href="/content/images/wordpress/2017/05/Untitled1-11.png"><img loading="lazy" src="/content/images/wordpress/2017/05/Untitled1-11-300x171.png" width="320" height="182" border="0" /></a></div>
<p>Anda bisa melakukan testing konfigurasi dengan melakukan download file ekstensi diatas, anda bisa lihat bedanya dan selamat mencoba.<br />
Demikian artikel tentang <b>Memadukan IP Firewall Mangle dan Simple Queue </b>semoga bermanfaat bagi anda silahkan anda kembangkan sesuai kebutuhan anda.<br />
Sekian dan Terima kasihh</p>
<!--kg-card-end: html-->
