---
id: 63bc55848e392205482244d8
title: "Cara Setting DHCP Server pada Cisco"
feature_image: /content/images/wordpress/2021/05/dhcp-server-cisco.png
description: "DHCP atau Dynamic Host Configuration Protocol merupakan salah satu mekanisme yang terdapat pada jaringan dalam pendistribusian ip. DHCP ini…"
date: 2021-05-03
tags: posts
slug: cara-setting-dhcp-server-pada-cisco
layout: layouts/post.njk
---

<!--kg-card-begin: html-->
<p>DHCP atau<a href="https://id.wikipedia.org/wiki/Protokol_Konfigurasi_Hos_Dinamik" target="_blank" rel="noreferrer noopener"> Dynamic Host Configuration Protocol</a> merupakan salah satu mekanisme yang terdapat pada jaringan dalam pendistribusian ip. DHCP ini bekerja dengan mendistribusikan ip secara otomatis ke target client dhcpnya. Dengan kata lain, kita tidak diperlukan lagi menyeting ip secara manual pada setiap komputer (client) agar dapat terkoneksi ke jaringan.</p>



<blockquote class="wp-block-quote"><p>Baca Juga : <a href="https://coretanit.com/tutorial-konfigurasi-dasar-mikrotik-routeros/" target="_blank" rel="noreferrer noopener">Tutorial Konfigurasi Dasar Mikrotik RouterOS</a></p></blockquote>



<h2>Topologi</h2>



<p>Untuk contoh sederhana nya seperti topologi berikut, dimana ada sebuah router (dhcp server) yang terhubung ke switch di interface <code>fa0/1</code> dan beberapa komputer yang terhubung juga ke switch.</p>



<figure class="wp-block-image size-large"><img loading="lazy" width="460" height="289" src="/content/images/wordpress/2021/05/image.png" alt="" class="wp-image-1753" srcset="/content/images/wordpress/2021/05/image.png 460w, http://localhost:2368/content/images/wordpress/2021/05/image-300x188.png 300w" sizes="(max-width: 460px) 100vw, 460px" /></figure>



<h2>Konfigurasi Router</h2>



<p>Sesuai topologi, network yaitu <code>192.168.1.0/24</code> dan ip router yaitu <code>192.168.1.1/24</code>.</p>



<p>Pertama masuk ke mode konfigurasi pada router cisco, dan set ip sesuai topologi.</p>



<pre class="wp-block-code"><code>Router&gt;en
Router#conf t
Router(config)#int fa0/0
Router(config-if)#ip address 192.168.1.1 255.255.255.0</code></pre>



<p>Untuk menyeting DHCP server cukup dengan beberapa baris berikut.</p>



<pre class="wp-block-code"><code>Router(config-if)#service dhcp
Router(config)#ip dhcp pool poo1
Router(dhcp-config)#network 192.168.1.0 255.255.255.0
Router(dhcp-config)#default-router 192.168.1.1
Router(dhcp-config)#dns-server 8.8.8.8
Router(dhcp-config)#exit</code></pre>



<h2>Test Konfigurasi</h2>



<h3>Test di client</h3>



<p>Untuk mengecek apakah dhcp server bekerja normal, silahkan ip komputer di set ke dhcp.</p>



<p>Seperti yang bisa kita lihat, PC0 mendapatkan ip <code>192.168.1.2/24</code></p>



<figure class="wp-block-image size-large"><img loading="lazy" width="857" height="303" src="/content/images/wordpress/2021/05/image-1.png" alt="" class="wp-image-1754" srcset="/content/images/wordpress/2021/05/image-1.png 857w, http://localhost:2368/content/images/wordpress/2021/05/image-1-300x106.png 300w, http://localhost:2368/content/images/wordpress/2021/05/image-1-768x272.png 768w" sizes="(max-width: 857px) 100vw, 857px" /></figure>



<p>Sementara test pengiriman paket antara masing masing PC sudah bisa dilakukan.</p>



<figure class="wp-block-image size-large"><img loading="lazy" width="841" height="141" src="/content/images/wordpress/2021/05/image-2.png" alt="" class="wp-image-1755" srcset="/content/images/wordpress/2021/05/image-2.png 841w, http://localhost:2368/content/images/wordpress/2021/05/image-2-300x50.png 300w, http://localhost:2368/content/images/wordpress/2021/05/image-2-768x129.png 768w" sizes="(max-width: 841px) 100vw, 841px" /></figure>



<h3>Test di router</h3>



<p>Untuk pengecekan bisa dilakukan dengan melihat setingan yang telah dibuat</p>



<pre class="wp-block-code"><code>Router#show ip dhcp pool

Pool poo1 :
 Utilization mark (high/low)    : 100 / 0
 Subnet size (first/next)       : 0 / 0 
 Total addresses                : 254
 Leased addresses               : 2
 Excluded addresses             : 0
 Pending event                  : none

 1 subnet is currently in the pool
 Current index        IP address range                    Leased/Excluded/Total
 192.168.1.1          192.168.1.1      - 192.168.1.254     2    / 0     / 254</code></pre>



<p>Atau dengan melihat list komputer yang berhasil mendapatkan ip dari dhcp server kita.</p>



<pre class="wp-block-code"><code>Router#show ip dhcp binding
IP address       Client-ID/              Lease expiration        Type
                 Hardware address
192.168.1.2      0090.21E8.A52D           --                     Automatic
192.168.1.3      00D0.BC4C.94E2           --                     Automatic</code></pre>



<p>Sekian dan semoga bermanfaat</p>
<!--kg-card-end: html-->
