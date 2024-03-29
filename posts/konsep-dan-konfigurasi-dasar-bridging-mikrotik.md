---
id: 63bc55848e3922054822447d
title: "Konsep dan Konfigurasi Dasar Bridging Mikrotik"
feature_image: /content/images/wordpress/2016/09/screenshot-1.png
description: "Dalam dunia networking, selain mengenal routing kita juga pasti akan bertemudengan teknik bridging. Sesuai namanya Bridging, berarti…"
date: 2016-09-15
tags: posts
slug: konsep-dan-konfigurasi-dasar-bridging-mikrotik
layout: layouts/post.njk
---

<!--kg-card-begin: html--><p>Dalam dunia networking, selain mengenal routing kita juga pasti akan bertemudengan teknik bridging. Sesuai namanya Bridging, berarti menjemmbatani. Secara teknis, Bridging artinya memjembatani atau menghubungkan dua atau lebih network menjadi satu kesatuan<br />
<a name="more"></a>segmen network. Artinya dalam bridging hanya terdapat satu segmen jaringan.<br />
Perhatikan gambar berikut,</p>
<div style="clear: both; text-align: center;"><a style="margin-left: 1em; margin-right: 1em;" href="/content/images/wordpress/2016/09/screenshot-1.png"><img loading="lazy" src="/content/images/wordpress/2016/09/screenshot-1-300x149.png" width="400" height="197" border="0" /></a></div>
<p>Dari gambar diatas, saya akan membuat teknik bridging antara,</p>
<ul>
<li>Mikrotik-1 : Interface Ether1(eth0) dan Ether2(eth1)</li>
<li>Mikrotik-2 : Interface Ether1(eth0) dan Ether2(eth1)</li>
<li>Mikrotik-3 : Interface Ether1(eth0) dan Ether2(eth1)</li>
<li>Mikrotik-4 : Kita tidak akan melakukan bridge, router ini nanti akan saya gunakan untuk testing bridgingnya.</li>
</ul>
<p>Berikut adalah langkah langkah Konfigurasi Dasar Bridging Mikrotik, disinia saya menggunakan Tool Simulator GNS3.<br />
<b>Langkah #1 : </b>Buatlah Topologi diatas.<br />
<b>Langkah #2 : </b>Login ke Mikrotik-1, Mikrotik-2, Mikrotik-3.<br />
<b>Langkah #3 : </b>Buat Interface Bridge pada masing masing interfaces.</p>
<div>
<ul>
<li>Pada Route Mikrotik1</li>
</ul>
<p>[admin@MikroTik] &gt; /int bridge add name=br1</p>
</div>
<div>
<ul>
<li>Pada Route Mikrotik2</li>
</ul>
<p>[admin@MikroTik] &gt; /int bridge add name=br1</p>
</div>
<div>
<ul>
<li>Pada Route Mikrotik3</li>
</ul>
<p>[admin@MikroTik] &gt; /int bridge add name=br1</p>
</div>
<p>Sekedar tambahan nama interface bridge di router yang satu dengan router yang lain tidak mempunyai hubungan. Yang perlu diperhatikan adalah jangan sampai mengunakan nama bridge yang sama dalam satu router.<br />
<b>Langkah #4 : </b>Tambahkan Port yang akan di bridge pada setiap Router ke Interface br1</p>
<div>
<ul>
<li>Mikrotik-1</li>
</ul>
<p>[admin@MikroTik] &gt; /int br port add int=ether1 br=br1<br />
[admin@MikroTik] &gt; /int br port add int=ether2 br=br1</p>
</div>
<div>
<ul>
<li>Mikrotik-2</li>
</ul>
<p>[admin@MikroTik] &gt; /int br port add int=ether1 br=br1<br />
[admin@MikroTik] &gt; /int br port add int=ether2 br=br1</p>
</div>
<div>
<ul>
<li>Mikrotik-3</li>
</ul>
<p>[admin@MikroTik] &gt; /int br port add int=ether1 br=br1<br />
[admin@MikroTik] &gt; /int br port add int=ether2 br=br1</p>
</div>
<p>Pada konfigurasi diatas terdapat dua buah interface yakni ether1 dan ether2 (pada setiap router) yang merupakan interface yang portnya akan kita bridge atau gabungkan kedalam network yang sama.</p>
<p><b>Langkah #5 : </b>Setting IP Address untuk setiap interface bridge (br1) pada setiap router dengan network yang sama.</p>
<div>
<ul>
<li>Mikrotik-1</li>
</ul>
<p>[admin@MikroTik] &gt; /ip add ad ad=192.168.1.1/24 int=br1</p>
</div>
<div>
<ul>
<li>Mikrotik-2</li>
</ul>
<p>[admin@MikroTik] &gt; /ip add ad ad=192.168.1.2/24 int=br1</p>
</div>
<div>
<ul>
<li>Mikrotik-3</li>
</ul>
<p>[admin@MikroTik] &gt; /ip add ad ad=192.168.1.3/24 int=br1</p>
</div>
<p><b>Langkah #5 : </b>Testing dengan ping ke interface Router terjauh. Contoh saya melakukan Ping dari Mikrotik1 ke Mikrotik3.</p>
<div>[admin@MikroTik] &gt; /ping 192.168.1.3<br />
HOST                                     SIZE TTL TIME  STATUS<br />
192.168.1.3                                56  64 68ms<br />
192.168.1.3                                56  64 280ms<br />
192.168.1.3                                56  64 79ms<br />
192.168.1.3                                56  64 37ms<br />
192.168.1.3                                56  64 392ms<br />
192.168.1.3                                56  64 314ms<br />
192.168.1.3                                56  64 13ms<br />
sent=7 received=7 packet-loss=0% min-rtt=13ms avg-rtt=169ms max-rtt=392ms</p>
<p>[admin@MikroTik] &gt;</p>
</div>
<p>Dari data dapat kita simpulkan bahwa ping dari Mikrotik1 (br1) ke interface Mikrotik2 (ber2) berhasil.</p>
<p><b>Langkah #6 : </b>Untuk Teesting tingkat lanjut saya menggunakan sebuah router tambahan (<i>Perhatikan gambar diatas</i>).yakni Mikrotik-4.</p>
<p><b>Langkah #7 : </b>Setting IP Address pada ether3 di router Mikrotik1, denagn network berbeda dengan br1. Karena Interface ini bukanlah interface bridge.</p>
<div>[admin@MikroTik] &gt; /ip add add add=192.168.2.1/24 interface=ether3</p>
</div>
<p><b>Langkah #8 : </b>Setting IP Address pada Mikrotik 4 di interfaces ether1 (eth0) dengan network sama dengan interface ether3 pada Mikrotik1</p>
<div>[admin@MikroTik] &gt; /ip add ad ad=192.168.2.2/24 interface=ether1</p>
</div>
<p><b>Langkah #9 : </b>Setting IP Routing Static untuk Untuk Mikrotik1 ke Mikrotik4 dengan gateway br1.</p>
<div>[admin@MikroTik] &gt;  /ip route add dst-address=192.168.2.0/24 gateway=192.168.1.1</p>
</div>
<p><b>Langkah #10 : </b>Setting IP Routing Static untuk Untuk Mikrotik4 ke network 192.168.1.0/24 dengan gatewayether3 di Mikrotik1.</p>
<div>[admin@MikroTik] &gt;  /ip route add dst-address=192.168.1.0/24 gateway=192.168.2.1</p>
</div>
<p><b>Langkah #11 : </b>Testing koneksi dengan melakukan ping ke salah satu alamat interface di Mikrotik yagn di bridge pada Mikrotik4 atau pun sebaliknya.</p>
<div>[admin@MikroTik] &gt; /ping 192.168.2.2<br />
<b> </b><br />
HOST                                     SIZE TTL TIME  STATUS<br />
192.168.2.2                                56  63 184ms<br />
192.168.2.2                                56  63 7ms<br />
192.168.2.2                                56  63 296ms<br />
192.168.2.2                                56  63 141ms<br />
192.168.2.2                                56  63 318ms<br />
192.168.2.2                                56  63 401ms<br />
192.168.2.2                                56  63 126ms<br />
192.168.2.2                                56  63 300ms<br />
sent=8 received=8 packet-loss=0% min-rtt=7ms avg-rtt=221ms max-rtt=401ms</p>
<p>[admin@MikroTik] &gt;<b><br />
</b></p>
</div>
<p><b>Langkah #12 : </b>Konfigurasi selesai, sekarang jaringan anda berada dalam satu segmen jaringan.</p>
<p>Demikianlah tentang bridging semoga dapat menambah wawasan anda, dan untuk konfigurasi bridging selanjutnya cukup di tunggu.<br />
Sekian dan Terima kasihh..</p>
<!--kg-card-end: html-->
