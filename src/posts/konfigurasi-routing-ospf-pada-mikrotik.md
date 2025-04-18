---
id: 63bc55848e39220548224488
title: "Konfigurasi Routing OSPF Pada Mikrotik"
feature_image: /content/images/wordpress/2017/05/Untitled-2.png
description: "Konfigurasi Routing OSPF Pada Mikrotik. OSPF merupakan singkatan dari Open Shortest Part First adalah sebuah protokol yang bersifat…"
date: 2017-05-08
tags: posts
slug: konfigurasi-routing-ospf-pada-mikrotik
layout: layouts/post.njk
---

<!--kg-card-begin: html--><p>Konfigurasi Routing OSPF Pada Mikrotik. OSPF merupakan singkatan dari Open Shortest Part First adalah sebuah protokol yang bersifat dinamis, OSPF akan mengikuti setiap alur dari router yang paling pendek.<br />
<a name="more"></a>Artinya antar setiap router akan terjadi interaksi untuk mengecek mana jalur paling pendek dan teraman. Cukup basa basinya hehe ntar agan tambah pusing dengan penjelasannya. YOk ke TKP&#8230;&#8230;.</p>
<div style="clear: both; text-align: center;"><a style="margin-left: 1em; margin-right: 1em;" href="/content/images/wordpress/2017/05/Untitled-2.png"><img loading="lazy" src="/content/images/wordpress/2017/05/Untitled-2-300x213.png" width="320" height="226" border="0" /></a></div>
<h3></h3>
<h3>Konfigurasi Routing OSPF</h3>
<p>Persiapan awal yang harus anda lakukan adalah melakukan topologi seperti berikut&#8230; jangan pusing gan hehehe</p>
<div style="clear: both; text-align: center;"><a style="margin-left: 1em; margin-right: 1em;" href="/content/images/wordpress/2017/05/Untitled-3.png"><img loading="lazy" src="/content/images/wordpress/2017/05/Untitled-3-300x242.png" width="320" height="258" border="0" /></a></div>
<p>Jika, kita perhatikan secara detail gambar topologi diatas, OSPF nya terjadi pada <b>R-1, R-2, R-3 </b>. Yaitu</p>
<div style="clear: both; text-align: center;"><a style="margin-left: 1em; margin-right: 1em;" href="/content/images/wordpress/2017/05/Untitled-4.png"><img loading="lazy" src="/content/images/wordpress/2017/05/Untitled-4-300x237.png" width="320" height="253" border="0" /></a></div>
<p>Setiap router ini akan selalu melakukan interaksi menanyakan mana jalur terpendek dan teraman menuju kearah tujuannya nanti. Langsung saja ke tkp konfigurasi ospf.</p>
<ul>
<li><b>Router 1 / R-1 : Penambahan IP Address untuk setiap interfaces</b></li>
</ul>
<blockquote><p>[admin@MikroTik] &gt; /ip add add add=192.168.18.194/24 interface=ether0<br />
[admin@MikroTik] &gt; /ip add add add=10.10.1.1/24 interface=ether1<br />
[admin@MikroTik] &gt; /ip add add add=10.10.3.1/24 interface=ether3</p></blockquote>
<ul>
<li><b>Router 2 / R-2 : Penambahan IP Address Untuk Setiap Interfaces</b></li>
</ul>
<blockquote><p>[admin@MikroTik] &gt; /ip add add add=192.168.14.2/24 interface=ether0<br />
[admin@MikroTik] &gt; /ip add add add=10.10.1.2/24 interface=ether1<br />
[admin@MikroTik] &gt; /ip add add add=10.10.2.1/24 interface=ether2<b><br />
</b></p></blockquote>
<ul>
<li><b>Router 3 / R-3 : Penambahan IP Adrress Untuk Setiap Interfaces </b></li>
</ul>
<blockquote><p>[admin@MikroTik] &gt; /ip add add add=192.168.15.1/24 interface=ether0<br />
[admin@MikroTik] &gt; /ip add add add=192.168.17.1/24 interface=ether1<br />
[admin@MikroTik] &gt; /ip add add add=192.168.16.1/24 interface=ether4<br />
[admin@MikroTik] &gt; /ip add add add=10.10.2.2/24 interface=ether2<br />
[admin@MikroTik] &gt; /ip add add add=10.10.3.2/24 interface=ether3<b><br />
</b></p></blockquote>
<p>Setelah Kita menambahkan IP Addres pada setiap Interfaces, kita juga masih harus membaut sebuah interfaces loopbak beserta ip nya.</p>
<ul>
<li><b>Router 1 / R-1 : Pembuatan Interfaces Loopback Dan IP Address</b></li>
</ul>
<blockquote><p>[admin@MikroTik] &gt; /int bridge add name=loopback<br />
[admin@MikroTik] &gt; /ip add add add=1.1.1.1/32 interface=loopback<b><br />
</b></p></blockquote>
<ul>
<li><b><b>Router 2 / R-2 : Pembuatan Interfaces Loopback Dan IP Address  </b></b></li>
</ul>
<blockquote><p>[admin@MikroTik] &gt; /int bridge add name=loopback<br />
[admin@MikroTik] &gt; /ip add add add=2.2.2.2/32 interface=loopback<b><b><br />
</b></b></p></blockquote>
<ul>
<li><b><b><b>Router 3 / R-3 : Pembuatan Interfaces Loopback Dan IP Address </b> </b></b></li>
</ul>
<blockquote><p>[admin@MikroTik] &gt; /int br add name=loopback<br />
[admin@MikroTik] &gt; /ip add add add=3.3.3.3/32 interface=loopback<b><b><br />
</b></b></p></blockquote>
<p>Selanjutnya adalah mengaktifkan OSPF Instance, caranya</p>
<ul>
<li><b>Router 1 / R-1 : Mengaktifan OSPF Instance </b></li>
</ul>
<blockquote><p>[admin@MikroTik] &gt; /routing ospf instance set 0 router-id=1.1.1.1 distribute-default=always-as-type-1</p></blockquote>
<ul>
<li><b><b>Router 2 / R-2 : Mengaktifan OSPF Instance  </b></b></li>
</ul>
<blockquote><p>[admin@MikroTik] &gt; /routing ospf instance set 0 router-id=2.2.2.2 distribute-default=always-as-type-1</p></blockquote>
<p>Catatan : <i>Router-ID disisikan dengan IP Loopback dan always-as-type-1 diberikan pada setiap router yang terkoneksi ke internet</i></p>
<p><b>Baca Juga : </b>  <a href="http://bang-kumbang.blogspot.co.id/2016/08/membuat-router-static-3-router-cisco.html" target="_blank" rel="noopener noreferrer">Membuat Router Static 3 Router Cisco</a></p>
<p>Langkah Seterusnya adalah konfigurasi ospf area dan ospf network</p>
<ul>
<li><b>Router 1 / R-1 : Konfigurasi OSPF Area dan OSPF Network</b></li>
</ul>
<blockquote><p>[admin@MikroTik] &gt; /routing ospf network add network=192.168.18.0/24 area=backbone<br />
[admin@MikroTik] &gt; /routing ospf network add network=10.10.1.0/24 area=backbone<br />
[admin@MikroTik] &gt; /routing ospf network add network=10.10.3.0/24 area=backbone<b><br />
</b></p></blockquote>
<ul>
<li><b><b>Router 2 / R-2 : Konfigurasi OSPF Area dan OSPF Network</b></b></li>
</ul>
<blockquote><p>[admin@MikroTik] &gt; /routing ospf network add network=192.168.14.0/24 area=backbone<br />
[admin@MikroTik] &gt; /routing ospf network add network=10.10.1.0/24 area=backbone<br />
[admin@MikroTik] &gt; /routing ospf network add network=10.10.2.0/24 area=backbone</p></blockquote>
<ul>
<li><b><b><b>Router 3 / R-3 : Konfigurasi OSPF Area dan OSPF Network</b> </b> </b></li>
</ul>
<blockquote><p>[admin@MikroTik] &gt; /routing ospf network add network=192.168.15.0/24 area=backbone<br />
[admin@MikroTik] &gt; /routing ospf network add network=192.168.16.0/24 area=backbone<br />
[admin@MikroTik] &gt; /routing ospf network add network=192.168.17.0/24 area=backbone<br />
[admin@MikroTik] &gt; /routing ospf network add network=10.10.2.0/24 area=backbone<br />
[admin@MikroTik] &gt; /routing ospf network add network=10.10.3.0/24 area=backbone</p></blockquote>
<p>Sampain pada tahap ini konfigurasi talah selesai anda bisa langsung cek ke IP Route anda pada setiap router nya. Maka akan tampil <b>ADo </b>atau <i>Active, Dynamic, ospf. </i>Atau dengan melakukan checking neighbor dengan perintah <i>/routing ospf neighbor pr </i>pada setiap routernya.</p>
<blockquote><p><i> </i>[admin@MikroTik] &gt; /routing ospf neighbor pr<br />
0 instance=default router-id=1.1.1.1 address=10.10.3.1 interface=ether4 priority=1 dr-address=10.10.3.1<br />
backup-dr-address=10.10.3.2 state=&#8221;Full&#8221; state-changes=5 ls-retransmits=0 ls-requests=0 db-summaries=0<br />
adjacency=21m31s</p>
<p>1 instance=default router-id=2.2.2.2 address=10.10.2.1 interface=ether3 priority=1 dr-address=10.10.2.1<br />
backup-dr-address=10.10.2.2 state=&#8221;Full&#8221; state-changes=5 ls-retransmits=0 ls-requests=0 db-summaries=0<br />
adjacency=1h57m1s<i><br />
</i></p></blockquote>
<p>Bagaimana gan, itu adalah <b>Konfigurasi Routing OSPF Pada Mikrotik, </b>Lumayankan ! Nanti anda bisa coba coba mungki ndengan 4 router, 5 router  atau mungkin lebih sampai komputer anda <i>hang</i> hehehhehe.<br />
Selamat mencoba gan..<br />
Sekian dan Terima Kasih !</p>
<!--kg-card-end: html-->
