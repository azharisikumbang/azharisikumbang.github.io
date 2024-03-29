---
id: 63bc55848e392205482244c8
title: "Tips Mencegah /etc/resolv.conf Terupdate Otomatis Oleh DHCP Client"
feature_image: /content/images/wordpress/2020/06/tips-membuat-etc-resolv-conf-tidak-terupdate-oleh-dhcp-client.jpg
description: "Assalamualaikum Wr. Wb"
date: 2020-06-05
tags: posts
slug: tips-membuat-etc-resolv-conf-tidak-terupdate-oleh-dhcp-client
layout: layouts/post.njk
---

<!--kg-card-begin: html-->
<p>Assalamualaikum Wr. Wb</p>



<p>Sebagaimana sebuah layanan DHCP tentu akan memberikan beberapa service kepada clientnya. Hal ini adalah wajar jika ketika kita melakukan <em>request </em>DHCP ke server DHCP, maka kita akan mendapatkan sebuah (atau beberapa) ip dns server. </p>



<p>Dan tentu saja, konfigurasi file dns server kita akan secara tidak langsung berubah. Hal ini sebenarnya tidak menjadi masalah. Hanya saja, bagaimana jika saya mempunyai konfigurasi ip dns sendiri dan membuatnya dilewatkan ketika meminta request dhcp? </p>



<p><em>Baca Juga : <a href="https://coretanit.com/tutorial-install-dan-konfigurasi-bind9-ubuntu">Tutorial Install dan Konfigurasi DNS Server dengan Bind9 pada Ubuntu Server</a></em></p>



<p>Pada kasus ini, saya menggunakan laptop yang terkoneksi dengan sebuah wifi akses poin. Dan, informasi dns bisa dicek di file <em><code>/etc/resolv.conf</code></em>  dengan perintah.</p>



<pre class="wp-block-code"><code>$ cat /etc/resolv.conf</code></pre>



<figure class="wp-block-image size-large"><img loading="lazy" width="736" height="337" src="/content/images/wordpress/2020/06/image-3.png" alt="" class="wp-image-1377" srcset="/content/images/wordpress/2020/06/image-3.png 736w, http://localhost:2368/content/images/wordpress/2020/06/image-3-300x137.png 300w" sizes="(max-width: 736px) 100vw, 736px" /></figure>



<p>Nah, terlihat informasi dns digenerate oleh service network manager, dan berikut konfigurasi dari Network Manager saya, bisa dilihat dengan perintah</p>



<pre class="wp-block-code"><code>$ cat /etc/NetworkManager/NetworkManager.conf</code></pre>



<figure class="wp-block-image size-large"><img loading="lazy" width="736" height="537" src="/content/images/wordpress/2020/06/image-4.png" alt="" class="wp-image-1378" srcset="/content/images/wordpress/2020/06/image-4.png 736w, http://localhost:2368/content/images/wordpress/2020/06/image-4-300x219.png 300w" sizes="(max-width: 736px) 100vw, 736px" /></figure>



<p>Dan yang akan kita lakukan adalah kita ingin mengubah konfigurasi file <code>/etc/resolv.conf </code>tidak digenerate dan tidak terupdate secara otomatis oleh service dhcp client. Karena normalnya setiap terkoneksi dengan jaringan bari secara dhcp, konfigurasi jaringan kita juga akan terupdate seperti ip address, gateway, dns dan sebagainya.</p>



<p>Dan terkhusus untuk dns, dalam mencegah /etc/resolv.conf terupdate dhcp bisa dengan beberapa cara, berikut caranya.</p>



<ol><li>Memproteksi File <code>/etc/resolv.conf</code></li><li>Menggunakan DHCP Hooks</li><li>Mentiadakan DNS pada service Network Manager</li><li>Mengkonfigurasi file dhclient.conf</li></ol>



<p>Sebagai contoh saya akan mengalihkan dns saya ke dns milik google dan dns milik <a href="https://www.opendns.com/">opendns</a>.</p>



<pre class="wp-block-code"><code>nameserver 8.8.8.8 # dns google
nameserver 208.67.222.222 # opendns</code></pre>



<p>Untuk mengubah konfig file /etc/resolv.conf bisa dengan nano, vim, gedit dan sebagainya. Contoh dengan nano sebagai berikut.</p>



<pre class="wp-block-code"><code>$ sudo nano /etc/resolv.conf</code></pre>



<p>Kemudian rubah menjadi setingan berikut dan simpan dengan <em><code>CTRL + X</code></em> dan pilih <em><code>Y</code></em> (yes)</p>



<figure class="wp-block-image size-large"><img loading="lazy" width="736" height="537" src="/content/images/wordpress/2020/06/image-5.png" alt="" class="wp-image-1379" srcset="/content/images/wordpress/2020/06/image-5.png 736w, http://localhost:2368/content/images/wordpress/2020/06/image-5-300x219.png 300w" sizes="(max-width: 736px) 100vw, 736px" /></figure>



<p>Nah seharusnya dns server kita telah berubah. Tapi untuk menjawab rasa penasaran bahwa file ini akan selalu terupdate secara otomatis apabila kita terkoneksi dengan jaringan baru, bisa dilihat dengan perintah berikut.</p>



<pre class="wp-block-code"><code>$ sudo systemctl restart NetworkManager</code></pre>



<p>Woopss.. dan setingan kita kembali ke awal lagi,, hal ini lah yang akan kita cegah.</p>



<figure class="wp-block-image size-large"><img loading="lazy" width="736" height="537" src="/content/images/wordpress/2020/06/image-6.png" alt="" class="wp-image-1380" srcset="/content/images/wordpress/2020/06/image-6.png 736w, http://localhost:2368/content/images/wordpress/2020/06/image-6-300x219.png 300w" sizes="(max-width: 736px) 100vw, 736px" /></figure>



<h2>Cara 1: Memproteksi File /etc/resolv.conf</h2>



<p>Cukup mudah untuk melakukan dengan cara ini dan terbilang cara ini adalah cara yang universal. Proteksi yang dilakukan adalah mencegah sistem untuk melakukan editing terhadap file yang kita tergertkan. </p>



<p>Dan karena kasus ini file targetnya adalah <code>/etc/resolv.conf</code>, maka kita proteksi dengan perintah berikut.</p>



<pre class="wp-block-code"><code>$ sudo chattr +i /etc/resolv.conf </code></pre>



<p>Dan opsi <code>+i</code> pada perintah diatas akan mencegah siapapun untuk melakukan perubahan, termasuk root dari komputer kita.</p>



<p>Dan sedangkan untuk menghilangkan kembali proteksinya bisa dengan perintah berikut.</p>



<pre class="wp-block-code"><code>$ sudo chattr -i /etc/resolv.conf </code></pre>



<p>Untuk melakukan testing apakah berubah silahkan disesuaikan lagi dns server yang diinginkan di file <code>/etc/resolv.conf</code> dan lakukan restart terhadap service network nya. <em>(cek kembali ke atas untuk caranya)</em></p>



<h2>Cara 2: Menggunakan DNS Hooks</h2>



<p>Dalam melakukan pencegahan, sangat direkomendasikan menggunakan cara ini dibanding dengan cara pertama. Cara ini akan membuat sebuah script yang akan dijalankan oleh <code>dhclient</code>. Script ini akan menyesuaikan kondisi interfaces jaringan kita setiap kali akan melakukan request dhcp.</p>



<p>Script yang didefenisikan adalah fungsi <code>make_resolv_conf</code> yang akan menimpa default dari file <code>/etc/resolv.conf</code></p>



<p>Script ini nantinya bernama <code>nodnsupdate</code> dan terletak di folder <code>/etc/dhcp/dhclient-enter-hooks.d/</code></p>



<pre class="wp-block-code"><code>$ sudo nano /etc/dhcp/dhclient-enter-hooks.d/nodnsupdate</code></pre>



<p>Kemudian isikan dengan script berikut dan simpan dengan <code>CTRL + X</code> dan pilih <code>Y</code>.</p>



<pre class="wp-block-code"><code>#!/bin/sh
make_resolv_conf(){
    :
}</code></pre>



<p>Selanjutnya kita perlu mengubah hak akses nya agar bisa dieksekusi.</p>



<pre class="wp-block-code"><code>$ sudo chmod +x /etc/dhcp/dhclient-enter-hooks.d/nodnsupdate</code></pre>



<p>Silahkan di reboot, dan seharusnya script ini akan menimpa method default <code>make_resolv_conf</code>, serta silahkan edit sesuai keinginan file /etc/resolv.conf karena tidak akan terjadi lagi pengubahan secara dari dhcp client.  </p>



<h2>Cara 3: Mentiadakan DNS pada service Network Manager</h2>



<p>Cara ini cukup mudah ketika ingin mencegah <code>/etc/resolv.con</code>f terupdate dhcp client, jika kita lihat pada file konfigurasi network manager di <code>/etc/NetworkManager/NetworkManager.conf</code>, maka kita akan menemukan pada section <code>main</code>, terdapat konfig <code>dns=default</code>. Setingan default ini akan memberikan ip dns dengan konfigurasi default dari server. </p>



<p>Untuk mencegah hal ini cukup mengubah konfig dns dari <code>default</code> menjadi <code>none</code>, atau jika tidak terdapat bisa ditambahkan saja.</p>



<p>Pertama masuk dan edit dengan perintah berikut</p>



<pre class="wp-block-code"><code>$ sudo nano /etc/NetworkManager/NetworkManager.conf</code></pre>



<p>Dan ubah menjadi sebagai berikut dan simpan.</p>



<pre class="wp-block-code"><code>[main]
plugins=ifupdown,keyfile
dns=none

[ifupdown]
managed=false

[device]
wifi.scan-rand-mac-address=no</code></pre>



<p>Selanjutnya silahkan <code>reboot</code>, dan sesuaikan ip dns yang diinginkan.</p>



<h2>Cara 4: Mengkonfigurasi file dhclient.conf</h2>



<p>Selain beberapa cara diatas, untuk mencegah (atau lebih tepatnya mendefaultkan konfigurasi) perubahan ip dns kita bisa dengan mengubah/menambahkan sedikit konfigurasi pada file <code>dhclient.conf</code></p>



<p>Silahkan masuk dan edit file tersebut.</p>



<pre class="wp-block-code"><code>$ sudo nano /etc/dhcp/dhclient.conf</code></pre>



<p>Jika diperhatikan file ini akan beriksi banyak konfigurasi, tapi tidak usah diganggu, tapi jika kalian suka eksperimen, gass keun saja.</p>



<p>Pada file konfigurasi tersebut silahkan tambahkan baris berikut</p>



<pre class="wp-block-code"><code>supersede domain-name-servers 8.8.8.8, 208.67.222.222;</code></pre>



<p>atau bisa juga dan direkomendasikan dengan baris berikut.</p>



<pre class="wp-block-code"><code>prepend domain-name-servers 8.8.8.8, 208.67.222.222;</code></pre>



<blockquote class="wp-block-quote"><p><em>Ip 8.8.8.8 dan 208.67.222.222 hanya contoh saja, silahkan disesuaikan dengan konfigurasi masing masing.</em> <em> </em></p></blockquote>



<p>Dan pada konfigurasi ini silahkan reboot komputer anda dan secara default dns akan di set ke ip tersebut.</p>



<p></p>
<!--kg-card-end: html-->
