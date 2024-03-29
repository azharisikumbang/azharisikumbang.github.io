---
id: 63bc55848e3922054822447c
title: "Tutorial Konfigurasi Dasar Mikrotik RouterOS"
feature_image: /content/images/wordpress/2016/09/aaaa.png
description: "Mikrotik RouterOS adalahsebuah sistem operasi yang ditujukan untuk network router dalam suatu jaringan. Mikrotik RouterOS sendiri digunakan…"
date: 2016-09-10
tags: posts
slug: tutorial-konfigurasi-dasar-mikrotik-routeros
layout: layouts/post.njk
---

<!--kg-card-begin: html--><p>Mikrotik RouterOS adalahsebuah sistem operasi yang ditujukan untuk network router dalam suatu jaringan. Mikrotik RouterOS sendiri digunakan untuk menjadikan komputer handal yang mencakup fitur fitur di dalamnya, seperti Firewall NAT, Hotspot, DHCP dan<br />
<a name="more"></a>sebagainya. Nah, Dalam pengkonfigurasianya saya menggunakan Tool Simulator GNS3.</p>
<p>Baiklah berikut merupakan konfigurasi dasar pada Mikrotik,</p>
<p><b>Langkah #1 : </b>Buat Topologi berikut dan Tentukan IP Address untuk masing masih interfaces,</p>
<div style="clear: both; text-align: center;"><a style="margin-left: 1em; margin-right: 1em;" href="/content/images/wordpress/2016/09/aaaa.png"><img loading="lazy" src="/content/images/wordpress/2016/09/aaaa-300x214.png" width="320" height="228" border="0" /></a></div>
<div style="text-align: left;"><b>Untuk Internet :</b></div>
<div style="text-align: left;">                  Address  : 192.168.11.1/24</div>
<div style="text-align: left;">                  Interface : Ether1</div>
<div style="text-align: left;">                  Gateway : 192.168.11.50</div>
<div style="text-align: left;"></div>
<div style="text-align: left;"><b>Untuk Client</b></div>
<div style="text-align: left;">                  Address : 192.168.1.1/24<br />
Interfaces :Ether2</div>
<div style="text-align: left;"></div>
<div style="text-align: left;"><b>Langkah #2 : </b>Masuk dan Log in ke Mikrotik anda.</div>
<div style="text-align: left;"><b>Langkah #3 : </b>Setting IP Address untuk setiap Interfaces.</p>
<div>[admin@MikroTik] &gt; /ip add add add=192.168.11.1/2 interface=ether1<br />
[admin@MikroTik] &gt; /ip add add add=192.168.1.1/2 interface=ether2</div>
</div>
<div style="text-align: left;">Berikut hasilnya,</p>
<div>[admin@MikroTik] &gt; /ip add pr<br />
Flags: X &#8211; disabled, I &#8211; invalid, D &#8211; dynamic<br />
#   ADDRESS               NETWORK         INTERFACE<br />
0   192.168.152.15/24  192.168.152.0       ether1<br />
1   192.168.11.1/2         192.0.0.0              ether1<br />
[admin@MikroTik]</p>
</div>
<p><b>Langkah #4 : </b>Setting IP Route untuk ether1</p>
<div>[admin@MikroTik] &gt; /ip route add dst-address=0.0.0.0/0 gateway=192.168.11.50<br />
[admin@MikroTik] &gt; /ip route pr<br />
Flags: X &#8211; disabled, A &#8211; active, D &#8211; dynamic, C &#8211; connect, S &#8211; static, r &#8211; rip, b &#8211; bgp, o &#8211; ospf, m &#8211; mme,<br />
B &#8211; blackhole, U &#8211; unreachable, P &#8211; prohibit<br />
#      DST-ADDRESS              PREF-SRC                         GATEWAY            DISTANCE<br />
0 A S  0.0.0.0/0                       192.168.11.50                                                    1<br />
1 ADC  192.0.0.0/2                 192.168.11.1                        ether1                      0<br />
2 ADC  192.168.152.0/24       192.168.152.15                    ether1                      0<br />
[admin@MikroTik] &gt;</p>
</div>
<p><b>Langkah #5 : </b>Set DNS Server,</p>
<div>[admin@MikroTik] &gt; /ip dns set servers=8.8.8.8,8.8.4.4 allow-remote-requests=yes<br />
[admin@MikroTik] &gt; /ip dns pr<br />
servers: 8.8.8.8,8.8.4.4<br />
dynamic-servers:<br />
allow-remote-requests: yes<br />
max-udp-packet-size: 4096<br />
cache-size: 2048KiB<br />
cache-max-ttl: 1w<br />
cache-used: 8KiB<br />
[admin@MikroTik] &gt;</div>
<p><b>Langkah #6 : </b>Setting IP Firewall NAT,</p>
<div>[admin@MikroTik] &gt; /ip firewall nat add chain=srcnat out-interface=ether1 action=masquerade<br />
[admin@MikroTik] &gt; /ip firewall nat pr<br />
Flags: X &#8211; disabled, I &#8211; invalid, D &#8211; dynamic<br />
0   chain=srcnat action=masquerade out-interface=ether1<br />
[admin@MikroTik] &gt;</p>
</div>
<p><b>Langkah #7 : </b>Test koneksi dengan /ping google.com</p>
<div>[admin@MikroTik] &gt; /ping google.com<br />
HOST                                     SIZE TTL TIME  STATUS<br />
74.125.68.100                              56  43  244ms<br />
74.125.68.100                              56  43  32ms<br />
74.125.68.100                              56  43  490ms<br />
74.125.68.100                              56  43  201ms<br />
sent=4 received=4 packet-loss=0% min-rtt=32ms avg-rtt=241ms max-rtt=490ms</p>
<p>[admin@MikroTik] &gt;</p>
</div>
<p><b>Langkah #8 : </b>Jika konesi berjalan, Maka setting IP untuk Client anda dengan gateway 192.168.1.1 netmask 255.255.255.0</p>
<div style="clear: both; text-align: center;"><a style="margin-left: 1em; margin-right: 1em;" href="/content/images/wordpress/2016/09/seti.png"><img loading="lazy" src="/content/images/wordpress/2016/09/seti-300x188.png" width="320" height="200" border="0" /></a></div>
<p><b>Langkah #9 : </b>Masuk ke Web Browser dan masuk ke web browser, contoh google.com<br />
<b>Langkah #10 : </b>Konfigurasi selesai&#8230;.</p>
<p>Demikian tentang <i>Konfigurasi Dasar Moktik RouterOS&#8230;</i></p>
</div>
<div style="text-align: left;">Semoga dapat menambah wawasan anda&#8230;<br />
Terima kasihh&#8230;&#8230;</div>
<!--kg-card-end: html-->
