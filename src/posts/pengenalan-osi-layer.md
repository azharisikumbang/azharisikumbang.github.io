---
id: 63bc55848e39220548224480
title: "Pengenalan OSI Layer"
feature_image: /content/images/wordpress/2016/09/bench_your_network_osi_1008121.jpg
description: "Dalam dunia networking, hal yang pertama harus anda tahu adalah TCP/IP. TCP/IP adalah salah satu jenis Protocol yang bisa kita analogikan…"
date: 2016-09-23
tags: posts
slug: pengenalan-osi-layer
layout: layouts/post.njk
---

<!--kg-card-begin: html--><p>Dalam dunia networking, hal yang pertama harus anda tahu adalah TCP/IP. TCP/IP adalah salah satu jenis Protocol yang  bisa kita analogikan sebagai suatu media berkomunikasi atau<br />
<a name="more"></a>bahasa yang digunakan komputer,sehingga bisa berkomunikasi dengan bahasa yang dimengerti layaknya seperti manusia.<br />
Protokol sendiri dirancang pada tahun 1980-an. Namun, seiring zaman semakin berkembang, bermunculanlah beberapa protokol ciptaan pabrikan dan tentunya tidak dapat di mengerti oleh protokol pabrik pabrik lainnya. Oleh karena inilah, International Organizaion for Standardization (OSI) melakukan standarisasi terhadap protokol protokol yang ada. Yang kemudian kita kenal dengan istilah OSI atau Open System Interconnection. Standar iniliah yang menjadi acuan untuk membuat tentang konsep dan cara kerja protokol.</p>
<div style="clear: both; text-align: center;"><a style="margin-left: 1em; margin-right: 1em;" href="/content/images/wordpress/2016/09/bench_your_network_osi_1008121.jpg"><img loading="lazy" title="Osi Layer" src="/content/images/wordpress/2016/09/bench_your_network_osi_1008121-300x257.jpg" alt="Gambar Osi layer" width="400" height="342" border="0" /></a></div>
<h3>Layer Layer OSI Layer</h3>
<p>OSI dibuat oleh ISO dengan 7 Lapisan Layer dan memiliki fungsi masing masing sebagai berikut.</p>
<h4>1. Layer 7 &#8211; Aplication Layer</h4>
<p>Aplication Layer merupakan layer sebagai antarmuka aplikasi yang bekerja dengan fungsionalitas jaringan, bekerja tentang bagaimana aplikasi pada resource jaringan dan kemudian mengirimkan sinyal atau pesan apabila terjadi kesalahan. Protokol yang berkerja di layer aplikasi seperti HTTP, FTP, POP, SMTP dan sebagainya.</p>
<h4>2. Layer 6 &#8211; Presentaion Layer</h4>
<p>Presentation Layer merupakan layer yang melakukan translasi format data kedalam format yang dikenal jaringan sehinnga menjadi data yang dapat di transmisikan oleh jaringan. Pada layer ini data juga bisa di <a href="http://bang-kumbang.blogspot.co.id/2016/07/apa-itu-kriptografi.html" target="_blank" rel="noopener noreferrer">enripsi</a> dan di <a href="http://bang-kumbang.blogspot.co.id/2016/07/apa-itu-kriptografi.html" target="_blank" rel="noopener noreferrer">deskripsi</a> data.</p>
<h4>3. Layer 5 &#8211; Session Layer</h4>
<p>Session Layer berfungsi untuk mendefinisikan bagaimana koneksi data dibuat, dipelihara bahkan dihancurkan serta dilakukan pengenalan nama pada tingkat jaringan yang logis. Lapisan sesi juga bertanggung jawab untuk melakukan sinkronisasi antara pertukaran data antar komputer, membuat struktur sesi komunikasi, dan beberapa masalah yang berkaitan secara langsung dengan percakapan antara <i>node</i>&#8211;<i>node</i> yang saling terhubung di dalam jaringan.</p>
<h4>4. Layer 4 &#8211; Transport Layer</h4>
<p>Layer ini merupakan layer yang berfungsi memecah data menjadi segmen segmen data dan melakukan pengurutan terhadap paket paket data sehingga pada saat data sampai di receiver tidak terjadi kesalahan penysunan data. Layer ini juga bertanggung jawab<br />
pada sukses dan benar tidaknya pengiriman data melakukan pengiriman lagi apabila terjadi kesalahan. Jenis protokol yang bekerja pada layer ini antara lain TCP dan UDP</p>
<h4>5. Layer 3 &#8211; Network Layer</h4>
<p>Network Layer adalah layer yang berfungsi membuat header dari setiap data yang akan dikirim. Header ini bisa berisi IP address, baik IP pengirim maupun IP tujuan terdapat juga Port Address, baik port pengirim maupun port tujuan. Layer ini juga akan melakukan routing melalui inter networking baik pada router ataupun Switch layer-3.</p>
<h4>6. Layer 2 &#8211; Data Link Layer</h4>
<p>Layer ini berfungsi mengkonversikan bit bit data menjadi frame frame data dan melakukan transmisi ulang terhadap frame frame yang dianggap gagal. Selain itu, pada layer ini juga dilakukan koreksi kesalahan, pengontoral aliran frame data, pengalamatan MAC Address, dan berbagai perangkat jaringan lainnya seperti NIC, Hub dan sebagahinya.</p>
<h4>7. Layer 1 &#8211; Physical Layer</h4>
<p>Dan Physical Layer, merupakan lapisan yang berfungsi mendefenisikan media media yang terpadat pada jaringan, seperti media transmisi jaringan, metode pensinyalan, arsitektur jaringan, pengkabelan, jenis topologi jaringan dan terdapat juga sikronisasi bit bit data. Pada layer ini terjadi juga pendefienisan bagaimana NIC berinteraksi dengan jaringan nirkabel maupun kabel.</p>
<p>Dengan mengetahui OSI Layer, kini anda bisa mengetahui bagaimana data itu diproses dan sampai ke tujuannya. Demikianlah mengenai Pengenala OSI Layer dan semoga bermanfaat.<br />
Sekiant dan Terima kasihh&#8230;</p>
<!--kg-card-end: html-->
