---
id: 63bc55848e3922054822447f
title: "Konfigurasi Simple Queue Mikrotik RouterOS"
feature_image: /content/images/wordpress/2016/09/screenshot.png
description: "Dalam dunia networking yang tentu punya client yang pasti membutuhkan limited bandwidth demi mencegah perebutan jatah akses menuju internet…"
date: 2016-09-22
tags: posts
slug: konfigurasi-simple-queue-mikrotik-routeros
layout: layouts/post.njk
---

<!--kg-card-begin: html--><p>Dalam dunia networking yang tentu punya client yang pasti membutuhkan limited bandwidth demi mencegah perebutan jatah akses menuju internet dan sebagainya. Atau lebih kita<br />
<a name="more"></a>kenal dengan Management Bandwidth atau Quality of Service (QoS). Pada kesempatan ini saya akan menggunakan Limited menggunakan metode Simple Queue.<br />
Simple Queue adalah salah satu metode pelimitan bandwidth yang paling sederhana pada Mikrotik RouterOS. Kita bisa melakukan limited bandwidth untuk maksimum download ataupun maksimum download. Untuk lebih jelasnya, anda bisa ikuti skenario berikut ini.<br />
<b>Misal : </b><br />
Dalam suatu LAN limit dilakukan dengan besar trafict donwload sebesar 512kbps dan traffict upload sebesar 128kbps terhadap client dengan ip address 192.168.1.2/24 yang terhubung secara langsung dengan router. Maka berikut adalah langkah langkah nya,</p>
<table style="margin-left: auto; margin-right: auto; text-align: center;" cellspacing="0" cellpadding="0" align="center">
<tbody>
<tr>
<td style="text-align: center;"><a style="margin-left: auto; margin-right: auto;" href="/content/images/wordpress/2016/09/screenshot.png"><img loading="lazy" title="Simple Queue" src="/content/images/wordpress/2016/09/screenshot-300x157.png" alt="gambar pengimplimentasian simple queue" width="320" height="167" border="0" /></a></td>
</tr>
<tr>
<td style="text-align: center;">Contoh Limited BandWidth Simple Queue</td>
</tr>
</tbody>
</table>
<div style="clear: both; text-align: center;"></div>
<p><b>Langkah #1 : </b>Pada Router Setting Ip Address,</p>
<div>[admin@MikroTik] &gt; /ip add add add=192.168.11.59/24 int=ether1<br />
[admin@MikroTik] &gt; /ip add add add=192.168.1.1/24 int=ether2<br />
[admin@MikroTik] &gt; /ip add pr<br />
Flags: X &#8211; disabled, I &#8211; invalid, D &#8211; dynamic<br />
#   ADDRESS               NETWORK         INTERFACE<br />
0   192.168.11.59/24     192.168.11.0       ether1<br />
1   192.168.1.1/24        192.168.1.0          ether2<br />
[admin@MikroTik] &gt;</p>
</div>
<p><b>Langkah #2 : </b>Lakukan Setting IP Route</p>
<div>[admin@MikroTik] &gt; /ip route add dst-address=0.0.0.0/0 ga=192.168.11.50<br />
[admin@MikroTik] &gt; /ip route pr<br />
Flags: X &#8211; disabled, A &#8211; active, D &#8211; dynamic, C &#8211; connect, S &#8211; static, r &#8211; rip, b &#8211; bgp, o &#8211; ospf, m &#8211; mme,<br />
B &#8211; blackhole, U &#8211; unreachable, P &#8211; prohibit<br />
#      DST-ADDRESS        PREF-SRC        GATEWAY            DISTANCE<br />
0 A S  0.0.0.0/0                192.168.11.50             1<br />
1 ADC  192.168.1.0/24    192.168.1.1        ether2                    0<br />
2 ADC  192.168.11.0/24   192.168.11.59   ether1                     0<br />
[admin@MikroTik] &gt;</div>
<p><b>Langkah #3 : </b>Lakukan Setting IP Firewall NAT</p>
<div>[admin@MikroTik] &gt; /ip firewall nat add chain=srcnat out-interface=ether1 action=masquerade<br />
[admin@MikroTik] &gt; /ip fi nat pr<br />
Flags: X &#8211; disabled, I &#8211; invalid, D &#8211; dynamic<br />
0   chain=srcnat action=masquerade out-interface=ether1<br />
[admin@MikroTik] &gt;</div>
<p><b>Langkah #4 : </b>Lakukan Setting IP DNS Server,</p>
<div>[admin@MikroTik] &gt; /ip dns set servers=8.8.8.8 allow-remote-requests=yes<br />
[admin@MikroTik] &gt; /ip dns pr<br />
servers: 8.8.8.8<br />
dynamic-servers:<br />
allow-remote-requests: yes<br />
max-udp-packet-size: 4096<br />
cache-size: 2048KiB<br />
cache-max-ttl: 1w<br />
cache-used: 8KiB<br />
[admin@MikroTik] &gt;</div>
<p><b>Langkah #5 : </b>Konfigurasi Simple Queue nya, berdasarkan limited yang telah di tentukan tadi</p>
<div>[admin@MikroTik] &gt; /queue simple add name=limited-client target-addresses=192.168.1.2 max-limit=128k/512k interface=ether2<br />
[admin@MikroTik] &gt; /queue simple pr<br />
Flags: X &#8211; disabled, I &#8211; invalid, D &#8211; dynamic<br />
0    name=&#8221;limited-client&#8221; target-addresses=192.168.1.2/32 interface=ether2 parent=none packet-marks=&#8221;&#8221;<br />
direction=both priority=8 queue=default-small/default-small limit-at=0/0 max-limit=128k/512k<br />
burst-limit=0/0 burst-threshold=0/0 burst-time=0s/0s total-queue=default-small<br />
[admin@MikroTik] &gt;</p>
</div>
<p><b>Langkah #6 : </b>Konkogurasi selesai,</p>
<p>Sekian Terima kasihhhh</p>
<!--kg-card-end: html-->
