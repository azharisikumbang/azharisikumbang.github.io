---
id: 63bc55848e39220548224471
title: "Tutorial Membuat Router Ubuntu Server"
feature_image: /content/images/wordpress/2016/03/cisco-router-icon.jpg
description: "Di materi ini saya akan menerangkan tentang Tutorial Membuat Router Ubuntu, dimana disini kita memakai komputer sebagai router/server…"
date: 2016-03-26
tags: posts
slug: tutorial-membuat-router-ubuntu-server
layout: layouts/post.njk
---

<!--kg-card-begin: html-->
<p>Di materi ini saya akan menerangkan tentang <strong>Tutorial Membuat Router Ubuntu</strong>, dimana disini kita memakai komputer sebagai router/server dengan metode type jaringan Client-Server, atau sebuat jaringan<br>dari jaringan Public/Interner mengarah tidak langsung ke Client, melainkan harus melalui Router yang akandibuat dari ubuntu Server. Disini saya akan memakai software <strong>VirtualBox</strong>. </p>



<p>Berikut adalah langkah langka membuat router ubuntu : </p>



<ol><li>Tentukan Interfaces untuk Jaringan Public dan Interfaces Jaringan Private</li></ol>



<p>Pertama, Lihat interfaces yang menyala dengan perintah</p>



<div>ifconfig -a|grep eth</div>



<figure class="wp-block-image"><a href="/content/images/tutorial-membuat-router-ubuntu-server/eth23.png"><img src="/content/images/tutorial-membuat-router-ubuntu-server/eth23.png" alt=""/></a></figure>



<p> seperti yang kita lihat, interfaces yang ada adalah <b>eth2</b> dan <b>eth3</b>. Maka sebagai percontohan, kita memakai <b>eth2</b> sebagai interfaces Public dan <b>eth3</b> sebagai Interfaces jaringan Private.</p>



<ol><li>Tentukan IP Masing Masing Interfaces</li></ol>



<p>Setelah kita mengetahui interfaces nya, maka selanjutnya kita akan menyeting IP untuk masing masing interfaces. Dengan perintah</p>



<div>nano /etc/network/interfaces</div>



<p>Maka akan muncul tampilan file interfaces. Disini saya memakai IP dari internet <b>192.168.18.254</b> , Maka setting seluruh perangkat IPnya seperti dibawah ini untuk interfaces public atau eth2 :</p>



<div><figure><a href="/content/images/tutorial-membuat-router-ubuntu-server/inte.png"><img src="/content/images/tutorial-membuat-router-ubuntu-server/inte.png" border="0"></a></figure></div>



<p>Setelah itu kita menyeting IP untuk interfaces ke jaringan local/private atau eth3. Seperti gambar dibawah ini :</p>



<div><figure><a href="/content/images/tutorial-membuat-router-ubuntu-server/intarfaces.png"><img src="/content/images/tutorial-membuat-router-ubuntu-server/intarfaces.png" border="0"></a></figure></div>



<ol><li>Enable-kan system IPv4 Forward</li></ol>



<p>Setelah kita menyeting IP, maka kita harus menghidupkan system IPv4 forward pada file /etc/sysctl.conf, dengan perintah,</p>



<div>nano /etc/sysctl.conf</div>



<p>Setelah di file cari tulisan <b>#net.ipv4.ip_forward=1</b> seperti gambar dibawah ini:</p>



<div>&nbsp;</div>



<p>Dan hilangkan tanda <b>#</b> agar system IPv4 di-forwading-kan.</p>



<ol><li>Masquerade</li></ol>



<p>Selanjutnya Masquerade setiap IP yang lewat dari jalur interfaces eth2, pertama masuk ke file /etc/rc.local dengan perintah :</p>



<div>nano /etc/rc.local</div>



<p>Lalu ketikkan diatas <i>exit 0</i></p>



<div>iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE</div>



<p>Atau seperti gambar ini :</p>



<div><figure><a href="/content/images/tutorial-membuat-router-ubuntu-server/rc.png"><img src="/content/images/tutorial-membuat-router-ubuntu-server/rc.png" border="0"></a></figure></div>



<ol><li>Reboot Ubuntu</li></ol>



<p>Setelah penyetingan selesai reboot ubuntu dengan perintah :</p>



<div>Reboot</div>



<ol><li>Cek settingan</li></ol>



<p>Nah, langkah terakhir adalah dengan mngecek settinga apakah sudah berjalan dengan benar, caranya dengan menyetting IP Client (Windows/PC anda) dengan <b>Network dan Gateway dari eth3</b>, test konksi dengan membuka alamat situs seperti www.google.com .</p>



<div style="text-align: justify;">&nbsp;</div>



<div style="text-align: justify;">Itulah Turorial Membaut Router Ubuntu Server dengan software VirtualBox.</div>
<!--kg-card-end: html-->
