---
id: 63bc55848e3922054822447e
title: "Tutorial Konfigurasi Load Balance Mikrotik"
feature_image: /content/images/wordpress/2016/09/loadbalance.png
description: "Dalam dunia networking kita pasti juga akan menemukan istilan Load Balance. Sesuai namanya, Load berarti beban sedangkan Balance berarti…"
date: 2016-09-16
tags: posts
slug: tutorial-konfigurasi-load-balance-mikrotik
layout: layouts/post.njk
---

<!--kg-card-begin: html--><p>Dalam dunia networking kita pasti juga akan menemukan istilan Load Balance. Sesuai namanya, Load berarti beban sedangkan Balance berarti seimbang. atau dapat kita sebut menyeimbangkan beban. Secara teknik Load Balance adalah  suatu teknik untuk menyeimbangkan traffic<br />
<a name="more"></a>load atau beban data kedalam beberapa link atau jalur denagn tujuan tidak ada jalur yang lebi terbebani.<br />
Biasanya kita sering menjumpai teknik ini dalam pembagian jalur koneksi dengan melalui dua buah ISP. Namun, sebagai permulaan kita akan membahas teknik Load Blance dalan suatu jaringan LAN terlebih dahulu.<br />
Perhatikan Gambar Berikut.</p>
<div style="clear: both; text-align: center;"><a style="margin-left: 1em; margin-right: 1em;" href="/content/images/wordpress/2016/09/loadbalance.png"><img loading="lazy" src="/content/images/wordpress/2016/09/loadbalance-300x213.png" width="400" height="282" border="0" /></a></div>
<div style="clear: both; text-align: center;"><a style="margin-left: 1em; margin-right: 1em;" href="/content/images/tutorial-konfigurasi-load-balance-mikrotik/loadbalance.png"> </a></div>
<div style="clear: both; text-align: center;"><a style="margin-left: 1em; margin-right: 1em;" href="/content/images/tutorial-konfigurasi-load-balance-mikrotik/loadbalance.png"> </a></div>
<div style="clear: both; text-align: center;"><a style="margin-left: 1em; margin-right: 1em;" href="/content/images/tutorial-konfigurasi-load-balance-mikrotik/loadbalance.png"> </a></div>
<p>Berdasarkan gambar diatas, baik Mikrotik2 dan Mikrotik3 akan terhubung melalui dua buah jalur koneksi yaitu melalui network 192.168.1.0/24 dan network 192.168.3.0/24. Kedua jalur ini yang nantinya digunakan Host1 untuk berkomunikasi ke Host2 ataupun sebaliknya.<br />
Pada teknik Load Balance juga dikenal teknik ECMP (Equal Cost Multi Path), yaitu suatu teknik memasangkan dua atau lebih gateway untuk menuju kesuat unetwork tertentu.<br />
Baiklah, dalam pengkonfigurasiannya berikut langkah langkahnya, disini saya menggunakan Tool Simulator GNS3.<br />
<b>Langkah #1 : </b>Bentuk Topologi seperti gambar diatas.<br />
<b>Langkah #2 : </b>Tambahkan IP pada masing masing Interface Pada Setipa Route (lihat gambar).</p>
<ul>
<li><b>Mikrotik1</b></li>
</ul>
<div>[admin@MikroTik] &gt; /ip add add add=192.168.11.66/24 interface=ether1<br />
[admin@MikroTik] &gt; /ip add add add=192.168.1.1/24 interface=ether2<br />
[admin@MikroTik] &gt; /ip add pr<br />
Flags: X &#8211; disabled, I &#8211; invalid, D &#8211; dynamic<br />
#   ADDRESS            NETWORK         INTERFACE<br />
0   192.168.11.66/24   192.168.11.0      ether1<br />
1   192.168.1.1/24      192.168.1.0        ether2</div>
<ul>
<li><b>Mikrotik2</b></li>
</ul>
<div>[admin@MikroTik] &gt; /ip add add add=192.168.1.2/24 interface=ether1<br />
[admin@MikroTik] &gt; /ip add add add=192.168.100.1/24 interface=ether2<br />
[admin@MikroTik] &gt; /ip add add add=192.168.2.1.66/24 interface=ether3<br />
[admin@MikroTik] &gt; /ip add pr<br />
Flags: X &#8211; disabled, I &#8211; invalid, D &#8211; dynamic<br />
#   ADDRESS            NETWORK         INTERFACE<br />
0   192.168.1.2/24     192.168.1.0         ether2<br />
1   192.168.2.1/24     192.168.2.0         ether1<br />
2   192.168.100.1/24   192.168.100.0   ether3<br />
[admin@MikroTik] &gt;</div>
<ul>
<li><b>Mikrotik3</b></li>
</ul>
<div>[admin@MikroTik] &gt; /ip add add add=192.168.1.3/24 interface=ether1<br />
[admin@MikroTik] &gt; /ip add add add=192.168.200.1/24 interface=ether2<br />
[admin@MikroTik] &gt; /ip add add add=192.168.2.2/24 interface=ether3<br />
[admin@MikroTik] &gt; /ip add pr<br />
Flags: X &#8211; disabled, I &#8211; invalid, D &#8211; dynamic<br />
#   ADDRESS            NETWORK         INTERFACE<br />
0   192.168.1.3/24     192.168.1.0         ether2<br />
1   192.168.2.2/24     192.168.2.0         ether1<br />
2   192.168.200.1/24   192.168.200.0   ether3<br />
[admin@MikroTik] &gt;</div>
<p><b>Langkah #3 : </b>Masukkan Konfigurasi Dasar Mikrotik pada Mikrotik1 agar anda bisa terkoneksi ke Internet, Disini saya menggunakan gateway 192.168.11.50</p>
<div>[admin@MikroTik] &gt; /ip route add dst-address=0.0.0.0/0 gateway=192.168.11.50<br />
[admin@MikroTik] &gt; /ip dns set servers=8.8.8.8 allow-remote-requests=yes<br />
[admin@MikroTik] &gt; /ip firewall nat add chain=srcnat out-interface=ether1 action=masquerade</div>
<p><b>Langkah #4 : </b>Buat Routing Static pada setiap Router untuk dapat berkomunikasi satu sama lain.</p>
<ul>
<li><b>Mikrotik1</b></li>
</ul>
<div>[admin@MikroTik] &gt; /ip route add dst-address=192.168.200.0/24 gateway=192.168.1.3<br />
[admin@MikroTik] &gt; /ip route add dst-address=192.168.100.0/24 gateway=192.168.1.2</div>
<ul>
<li><b>Mikrotik2</b></li>
</ul>
<div>[admin@MikroTik] &gt; /ip route add dst-address=192.168.200.0/24 gateway=192.168.1.3,192.168.2.2<br />
[admin@MikroTik] &gt;</div>
<ul>
<li><b>Mikrotik3 </b></li>
</ul>
<div>[admin@MikroTik] &gt; /ip route add dst-address=192.168.100.0/24 gateway=192.168.1.2,192.168.2.1<br />
[admin@MikroTik] &gt;</div>
<p><b>Langkah #4 : </b>Sampai pada tahap ini konfigurasi telah selesai, kini anda sudah punya dua buah jalur/link.</p>
<p>Sedikit tambahan, pada teknik Load Balancing with ECMP ini anda akan menggunakan prinsip Round Robin. Prinsip Round Robin yaitu prinsip yang mengalirkan sebuah traffic data ke jalur/link yang lain jika link dirinya telah berada dalam posisi sangat terbebani.<br />
Dalam teknik Load Balance dipakai juga teknik Fail Over. Namun saya aka nmembahasany pada posting selanjutnya.<br />
Sekian dan Terima kasihh</p>
<!--kg-card-end: html-->
