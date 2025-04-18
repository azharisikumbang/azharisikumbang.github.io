---
id: 63bc55848e3922054822448c
title: "Konfigurasi Ubuntu Sebagai Gateway Router"
feature_image: /content/images/wordpress/2019/03/ubuntu.jpg
description: "Bergemelut dengan dunia jarigan pasti sudah familiar dengan kata router. Biasanya, router yang kita gunakan sering kali kita jumpai dalam…"
date: 2019-03-28
tags: posts
slug: konfigurasi-ubuntu-sebagai-gateway-router
layout: layouts/post.njk
---

<!--kg-card-begin: html-->
<p>Bergemelut dengan dunia jarigan pasti sudah familiar dengan kata router. Biasanya, router yang kita gunakan sering kali kita jumpai dalam bentuk siap pakai, seperti mikrotik, cisco, juniper dan masih banyak lagi. Jika anda terbiasa mengkonfigurasi router-router tersebut, harusnya dalam konfig router ubuntu tidak akan ada masalah.</p>



<p>Sebelum mulai konfig berikut pengertian router menurut <a href="https://id.wikipedia.org/wiki/Penghala">wikipedia</a>, router&nbsp;sebuah alat yang mengirimkan&nbsp;paket&nbsp;data&nbsp;melalui sebuah&nbsp;jaringan&nbsp;atau&nbsp;Internet&nbsp;menuju tujuannya, melalui sebuah proses yang dikenal sebagai routing.</p>



<p>Atau dengan bahasa saya, router merupakan suatu alat (dan/atau fitur) yang difungsikan untuk menghubungkan atau mengatur beban paket data jaringan baik dalam suatu jaringan maupun beda jaringan, dengan tujuan agar paket data dapat disampaikan ke tujuan tentunya tetap dengna aturan-aturan yang dibuat saat routing.</p>



<p>Sebelum mulai konfig, perlu diketahui bahwa komputer/pc yang kita butuhkan untuk router memerlukan <strong>2 buah NIC / Port LAN.&nbsp;</strong>Kenapa ? Ya, tentu saja satu port kita butuhkan untuk koneksi ke jaringan publik / internet dan satu lagi untuk koneksi ke jaringan lokal kita (LAN).</p>



<h3>Langkah #1 : Menentukan Interfaces dan IP address</h3>



<p>Langkah awal yang perlu kita lakukan adalah menentukan interfaces yang mengarah ke publik / internet dan yang mengarah ke lokal, beserta alamat ip tentunya. Pada ubuntu (xenial xerus) kita akan menemukan interfaces <strong>en####</strong> untuk kabel, atau <strong>wl####</strong> untuk basis wireless.</p>



<p>Untuk melihat nama interfaces silahkan pakai perintah berikut,</p>



<pre class="wp-block-preformatted"><strong>azhari@ubuntu:~$</strong> ifconfig -a</pre>



<ul><li><strong>enp3s0 :&nbsp;</strong>interfaces router ke publik</li><li><strong>enp8s0 :&nbsp;</strong>interfaces router ke lokal / LAN</li><li><strong>192.168.200.1/ 24 :&nbsp;</strong>ip gateway untuk interfaces publik&nbsp;(silahkan disesuaikan)</li><li><strong>192.168.200.2 / 24 :&nbsp;</strong>ip address untuk interfaces publik&nbsp;(silahkan disesuaikan)</li><li><strong>192.168.100.1 / 24 :&nbsp;</strong>ip address untuk interfaces lan</li></ul>



<p>Silahkan di fahami terlebih dahulu beberapa point diatas&#8230;.</p>



<h3>Langkah #2 : Setting IP Address</h3>



<p>Setelah memahami beberapa point diatas, saat nya kita konfig ip address. Sebelumnya, anda perlu sedikit mengingat lagi tentang subneting, ip network, ip broadcast dan sebagainya.</p>



<p>Baik, pertama untuk intefraces publik atau enp3s0, kita memiliki ip address 192.168.200.2/24. Dari ip ini, tentu kita sudah tau bahwa networknya adalah 192.168.200.0/24, dan broadcast adalah 192.168.200.255/24 serta netmask untuk /24 adalah 255.255.255.0.</p>



<p>Begitu juga dengan ip address untuk LAN, yakni 192.168.100.1/24 mempunyai netmask 255.255.255.0, broadcast 192.168.100.255/24 dan network 192.168.100.0/24.</p>



<blockquote class="wp-block-quote"><p>Perlu diingat untuk interfaces menuju LAN tidak membutuhkan alamat gateway, karena dia sendirilah yang menjadi gateway</p></blockquote>



<p>Untuk setting ip address kita perlu masuk ke file <mark>/etc/network/interfaces</mark></p>



<pre class="wp-block-preformatted"><strong>azhari@ubuntu:~$</strong> sudo nano /etc/network/interfaces</pre>



<p>Kemudian silahkan rubah file tersebut seperti berikut ini, tentunya sesuai ketentuan diatas sebelumnya</p>



<pre class="wp-block-preformatted">source /etc/network/interfaces.d/*

auto lo
iface lo inet loopback

auto <span style="color: #993300;">enp0s3
</span>iface <span style="color: #993300;">enp0s3 </span>inet static
    address 192.168.200.2
    netmask 255.255.255.0
    network 192.168.200.0
    broadcast 192.168.200.255
    gateway 192.168.200.1

auto <span style="color: #993300;">enp0s8
</span>iface <span style="color: #993300;">enp0s8 </span>inet static
    address 192.168.100.2
    netmask 255.255.255.0
    network 192.168.100.0
    broadcast 192.168.100.255
</pre>



<p>Kemudia simpan CTRL + X.</p>



<h3>Langkah #3 : Menambahkan IP DNS</h3>



<p>Sebenarnya langkah ini juga bisa dilakukan disaat menambahkan ipaddress diatas. Tetapi, untuk beberapa alasan, saya menyarankan untuk menambahakn dns di file <mark>/etc/resolv.conf</mark></p>



<p>Masuk ke file resolv.conf diatas dan tambahkan dns (google dns sebagai contoh)&nbsp; berikut tepat dibaris paling bawah..</p>



<pre class="wp-block-preformatted">nameserver 8.8.8.8</pre>



<h3>Langkah #4: Mengaktifkan IP Forwarding</h3>



<p>Satu lagi fitur linux adalah IP Forwarding. Nah, maksudnya? IP Forwarding merupakan sebuah fitur yang difungsikan untuk mengalihkan paket data dari satu interfaces ke interfaces lain. Sesuai penjelasan router diawal, untuk penerusan paket agar sampai ketujuan.</p>



<p>Intinya, jika tidak diaktifkan router linux tidak akan mampu untnuk meneruskan paket yang masuk keinterfacesnya. Dan perlu diketahui bahwa secara default linux tidak mengaktifkan fitus ini alias disabled. Jadi untuk mengaktifkannya, berikut perintahnya.</p>



<pre class="wp-block-preformatted"><strong>azhari@ubuntu:~$</strong> sudo nano /etc/sysctl.conf</pre>



<p>Selanjutnya, silahkan cari tulisan <mark>#net.ipv4.ip_forward=1</mark>&nbsp;dan hapus tanda pagar untuk mengaktifkan fitus ini, jangan lupa juga untuk memastikan bahwa nilai nya adalah 1 (atau active)</p>



<pre class="wp-block-preformatted">net.ipv4.ip_forward=1</pre>



<p>Kemudian simpan.</p>



<h3>Langkah #5: Menambahkan Rule Masquerade</h3>



<p>Masquerade merupakan metode untuk mengubah atau menyembunyikan ip lokal atau LAN anda deri publik, kemudian menggantinya dengan ip publik anda sendiri. Jadi ketika anda browsing, ata mengakses internet ip publik anda lah yang sebenarnya berkomunikasi dengan dunia internet.</p>



<p>Hal ini sangat diperlukan dalam routing, itu sebabnya kita harus menambahkan rule ini kedalam route ubuntu kita. Silahkan masuk edit file /<mark>etc/rc.local</mark></p>



<pre class="wp-block-preformatted"><strong>azhari@ubuntu:~$</strong> sudo nano /etc/rc.local</pre>



<p>Kemudian tepat diatas tulisan&nbsp;<strong>exit 0&nbsp;</strong>tambahkan rule berikut.</p>



<pre class="wp-block-preformatted">IP TABLES -t NAT -A POSTROUTING -o enp0s3 -j MASQUERADE</pre>



<figure class="wp-block-image"><img src="undefined" alt="" class="wp-image-132"/></figure>



<p>Mari kita artikan rule diatas,,,</p>



<ul><li>IP TABLES -t NAT :&nbsp;di table firewall kita mengenal yang nanamanya filter, nat, mangle dan sebagainya. oleh karenai tu kita memilih table NAT, karena MASQUERADE bekerja ditabel ini.</li><li>-A POSTROUTING : kata -A sendiri berarti Action (aksi) sedangkan POSTROUTING sendiri merupakan action yang diambil</li><li>-o enp0s3 : kata -o berarti -out atau out interfacesdan epn0s3 merupakan interfaces yang langsung mengarah ke publik atau internet</li><li>-j MASQUERADE : dan terakhir -j untuk jump (atau lompat/arahkan) ke MASQUERADE</li></ul>



<blockquote class="wp-block-quote"><p>Perlu diingat, dalam setiap out interfaces (dalam kasus ini enp0s3) selalu diisikan dengan interface yang mengarah langsung ke publik.</p></blockquote>



<h3>Langkah #6: Restart Network dari Ubuntu Server</h3>



<p>Langkah akhir, anda hanya perlu merestart konfigurasi jaringan tadi, agar berjalan dengan normal.</p>



<pre class="wp-block-preformatted"><strong>azhari@ubuntu:~$</strong> sudo /etc/init.d/networking restart</pre>



<p>Sampai pada tahap ini konfigurasi router telah selesai, anda tinggal konfigurasi komptuer klien anda sesuia ip diatas, atau network 192.168.100.0/24 dengan gateway 192.168.100.1/24.</p>



<h3>Langkah #7: Konfigurasi IP Lokal / PC Client</h3>



<p>Selanjutnya, anda hanya perlun mengkonfigurasi pc client anda , sehingga hasilnya menjadi seperti berikut.</p>



<p>Dan silahkan tes ping ke google.com atau browsing untuk tes setingan router tadi.</p>



<p>Semoga bermanfaat.</p>
<!--kg-card-end: html-->
